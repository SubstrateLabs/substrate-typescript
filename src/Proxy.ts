import { randomString } from "substrate/idGenerator";

/**
 * @internal
 *
 * In order to create `Future` values that are represented by indexing into objects/arrays we're using
 * the Proxy API.
 *
 * In practice when we use something like:
 *
 *    const a = new Node();
 *    const b = new Node({ x: a.future.foo.bar })
 *
 *  What we'd like is for `a.future.foo.bar` to represent the eventual of running `a` that and
 *  specifically uses that eventual value (eg. `{ a: { b: -VALUE- }}`) as the input to node `b`.
 *
 *  We can use the Proxy API to allow for "infinite" access into these objects and as they are
 *  accessed deeper and deeper it can remember the path it took.
 *
 *  In order to handle some limitations of how things might be accessed we're using a few tricks:
 *
 *    - One limitation of creating these "infinite" proxies is that we need a way to "unproxy"
 *      the object to access the underlying data it's tracking. Because every access on the
 *      object also flows through the proxy we're using a special property that returns the
 *      original target. In this case we're using `$$target` for now (See `TARGET_PROP`).
 *      For example,
 *
 *          const a = new Node();
 *          const proxy = a.future.foo.bar;
 *          const target = a.future.foo.bar.$$target; // allows us to access the underlying data
 *
 *    - Another limitation is when using a proxy as a property access or array index value with
 *      a proxy object. This is because when the property/index value is sent to the proxy the
 *      value cannot be interpreted as a "primitive" value (string, number). We intercept this
 *      case by first checking if the value `=== Symbol.toPrimitive` and if it is we can return
 *      something else. If we keep track of all proxies we ever create this way we can look up
 *      the corresponding proxy by first converting the proxy into a primitive value that maps
 *      to the proxy value in a lookup table. When the proxied object being accessed receives
 *      a property that we know is a "proxy id" (See `ID_PREFIX`) we access our lookup table to
 *      find the other proxy and keep track of that in the underlying data. For example,
 *
 *          const a = new Node();
 *          const proxy = a.future.foo.bar[a.future.baz]; // using the resolved `baz` to access a value in `foo.bar`
 *
 */

/**
 * We're currently only using these on Node objects, and at the least they must have an `id` field
 */
type NodeLike = {
  id: string;
};

/**
 * `Prop` is short for property and is a type of value that is a property access on an object. It can
 * be either a string value like `a.b.c` or `a.b[1]` or a ProxyTarget like `a.b[x.y]`.
 */
export type Prop =
  | { t: "String"; value: string }
  | { t: "ProxyTarget"; value: ProxyTarget };

/**
 * Internal data we keep track of within a Proxy to serialize it later on.
 */
export type ProxyTarget = {
  t: "ProxyTarget";
  id: string;
  node: NodeLike;
  props: Prop[];
};

// All Proxy objects created by the ProxyFactory are stored in this lookup table and used to support being
// able to use a "Future as an property accessor".
export type ProxyTable = Record<ProxyTarget["id"], ProxyTarget>;

export type ProxyFactory = {
  makeProxy: (node: NodeLike, props?: any[]) => any;
  proxyTable: ProxyTable;
};

// This is used internally to allow Ref objects to be used as props via a special string.
const ID_PREFIX = "$$ID:";

// This is a "virtual" property that exists on a Proxy created by the ProxyFactory and used to get the ProxyTarget from it.
const TARGET_PROP = "$$target";

export const isProxy = (object: Object): boolean => {
  return TARGET_PROP in object;
};

export const isProxyTarget = (object: Object): boolean => {
  return "t" in object && object.t === "ProxyTarget";
};

export const getTarget = (object: any): ProxyTarget | null => {
  return isProxy(object) ? (object[TARGET_PROP] as ProxyTarget) : null;
};

export const makeFactory = (proxyTable: ProxyTable = {}): ProxyFactory => {
  const id = () => `${ID_PREFIX}${randomString(8)}`;

  const makeProxy = (node: NodeLike, props: Prop[] = []): any => {
    const target: ProxyTarget = {
      t: "ProxyTarget",
      id: id(),
      node,
      props,
    };
    proxyTable[target.id] = target;

    return new Proxy(target, {
      has(target: ProxyTarget, prop: any) {
        if (prop === TARGET_PROP) return true; // True when `prop` is our special value.
        return prop in target; // Otherwise perform the default behavior.
      },
      get(target: ProxyTarget, prop: any, _receiver: any) {
        // When prop is our special value, return the ProxyTarget instead of a new Proxy.
        if (prop === TARGET_PROP) return target;

        // See explaination in "Limitations" description above.
        if (prop === Symbol.toPrimitive) {
          return () => target.id;
        }

        if (typeof prop !== "string") throw new Error("is this possible?");

        // When the `prop` is a special ProxyTable id, we lookup the ProxyTarget and use
        // that value as the `nextProp` in the current target. Otherwise we use the string
        // value we get.
        const nextProp: Prop =
          prop.startsWith(ID_PREFIX) && proxyTable[prop]
            ? { t: "ProxyTarget", value: proxyTable[prop]! }
            : { t: "String", value: prop };

        // Create a new proxy with all the props accessed so far and return it.
        // This is what gives us the "infinite" proxying ability.
        return makeProxy(target.node, [...target.props, nextProp]);
      },
    });
  };

  return { makeProxy, proxyTable };
};
