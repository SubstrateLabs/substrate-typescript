import { idGenerator } from "substrate/idGenerator";

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
 *    - "Proxy management" (isProxy, unProxy) -> using "virtual prop", `$$target`
 *
 *    - "Property accessors/indexing" (isPrimitive) -> using "lookup table" and `$$LookupTableId`
 *
 *    - "TypeScript index type" (eg. "X cannot be used as an index type. typescript (2538)" for proxy indexing) -> no solution yet.
 *        - tried using clever type intersections and assertions eg. `type StringyFuture = Future & string` + `return new Future() as StringyFuture`
 *        - tried using a Record<any, any> vs any
 *        - tried intersecting on the Proxied type, eg. `Proxied & { [k: any]: any }`
 *        - maybe the solution here is type erasure + type assertions with "generated types" (eg. taking API schema types and generated complementary "future" variants)
 *          - like `return proxy as any as GeneratedFutureTypeFor["SomeType"]`
 *        - currently using sprinkled `@ts-expect-error: ...`
 */

/**
 * Throws an error when we encounter an impossible situation.
 */
const impossible = (msg: string): never => {
  throw new Error(msg);
};

type HasId = { id: string };

type LookupTableId = `$$LookupTableId:${string}`;
type Storable = HasId;
export class LookupTable {
  kv: Record<LookupTableId, Storable> = {};

  id(object: Storable): LookupTableId {
    return `$$LookupTableId:${object.id}`;
  }

  isLookupTableId(maybeId: string): maybeId is LookupTableId {
    return maybeId.startsWith("$$LookupTableId:");
  }

  has(id: LookupTableId): boolean {
    return id in this.kv;
  }

  read(id: LookupTableId): Storable | undefined {
    return this.kv[id];
  }

  write(object: Storable) {
    this.kv[this.id(object)] = object;
  }
}

type NodeLike = HasId;
type TraceProp = string | HasId;

/**
 * TODO: is there a better name for this? I'm using `context` here to refer to
 * the closure created that contains a reference to the LookupTable that we need
 * to use in the Proxy and Future code (primarily within side-effects).
 */
export const makeContext = (
  lookupTable: LookupTable = new LookupTable(),
  futureId = idGenerator("future"),
  targetProp: string = "$$target",
) => {
  class Future {
    id: string;
    constructor(id: string = futureId()) {
      this.id = id;
    }

    // We're using the `toPrimitive` method here to do some tricky things. This
    // method is called when an object is being used as a property accessor, aka
    // an "index type". For example, when using a Future within a future-proxy:
    //
    //    const proxy = node.future.a.b.c[new Future()] <- called here
    //
    // When we call this we'll be writing this object to our hidden `LookupTable`
    // and returning a `LookupTableId` that's a compatible "index type" (string).
    //
    // Later on when we want to use the original Future, we use the `LookupTableId`
    // to find it.
    [Symbol.toPrimitive]() {
      lookupTable.write(this);
      return lookupTable.id(this);
    }
  }

  class Trace extends Future {
    node: NodeLike;
    props: TraceProp[];

    constructor(node: NodeLike, props: TraceProp[] = [], id?: string) {
      super(id);
      this.node = node;
      this.props = props;
    }
  }

  type Concatable<T extends Proxyable> =
    | string
    | StringConcat
    | Proxyable
    | Proxied<T>;

  class StringConcat extends Future {
    items: Concatable<Proxyable>[];

    constructor(items: Concatable<Proxyable>[] = [], id?: string) {
      super(id);
      this.items = items;
    }
  }

  type Proxyable = Trace;
  type Proxied<T extends Proxyable> = T & { $$target: any };

  // NOTE: the `any` here should be `<T extends Proxyable>Proxy<T>`, but I'm
  // not sure how to make this type yet.
  const makeProxy = <T extends Proxyable>(target: T): any => {
    lookupTable.write(target);

    return new Proxy(target, {
      has(target: Proxyable, prop: any) {
        if (prop === targetProp) return true; // True when `prop` is our special value.
        return Reflect.has(target, prop); // Otherwise perform the default behavior.
      },

      get(target: Proxyable, prop: any, _receiver: any) {
        // When prop is our special value, return the target (Trace) instead of a new Proxy.
        if (prop === targetProp) return target;

        if (typeof prop === "symbol") {
          // See explaination in "Limitations" description above.
          if (prop === Symbol.toPrimitive) {
            return () => lookupTable.id(target);
          }

          // TODO: not sure how to handle other symbols for now, eg. Symbol.iterator
          return;
        }

        // TODO: can prop be anything else here? I think even numbers are treated as
        // strings in this context - but verify.
        if (typeof prop !== "string") {
          impossible(`Expected a string for prop, but got ${typeof prop}`);
        }

        // When the `prop` is a special ProxyTable id, we lookup the ProxyTarget and use
        // that value as the `nextProp` in the current target. Otherwise we use the string
        // value we get.
        const nextProp =
          lookupTable.isLookupTableId(prop) && lookupTable.has(prop)
            ? lookupTable.read(prop)
            : prop;

        if (typeof nextProp === "undefined") {
          impossible(`Expected to find a value for ${prop}, but didn't.`);
        }

        // Create a new proxy with all the props accessed so far and return it.
        // This is what gives us the "infinite" proxying ability.
        const newProps = [...target.props, nextProp] as TraceProp[];

        const newProxy = makeProxy(new Trace(target.node, newProps));
        if (isProxy(newProxy)) return newProxy; // predicate lets the typechecker know we have a Proxied<T>
        impossible(`Expected to create a Proxy, but created ${newProxy}`);
      },
    });
  };

  const isProxy = <T extends Proxyable>(
    maybeProxy: T | Object,
  ): maybeProxy is Proxied<T> => {
    return targetProp in maybeProxy;
  };

  const unProxy = <T extends Proxyable>(proxied: Proxied<T>): T => {
    // @ts-ignore: ignoring that the virtual targetProp may not be there on this type.
    return proxied[targetProp];
  };

  return { Future, Trace, StringConcat, makeProxy, isProxy, unProxy };
};
