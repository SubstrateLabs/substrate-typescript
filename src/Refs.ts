import { v4 as uuidv4 } from "uuid";

type NodeLike = {
  id: string;
};

export type Prop = { t: "Key"; value: string } | { t: "Ref"; value: Ref };

export type Ref = {
  t: "Ref";
  id: string;
  node: NodeLike;
  props: Prop[];
};
export const isRef = (maybeRef: any): boolean => {
  return maybeRef.t === "Ref";
};

export type RefTable = Record<Ref["id"], Ref>;

export type RefFactory = {
  makeProxiedRef: (node: NodeLike, props?: any[]) => Ref;
  refs: RefTable;
  isRef: (maybeRef: Object) => boolean;
  getTarget: (ref: Ref) => Ref;
};

// This is used internally to allow Ref objects to be used as props via a special string. We might want to make this configurable, but also may be OK with a well-known obscure value.
const ID_PREFIX = "$$ID:";

// This is a "virtual" property that exists on Proxied Refs and used to get the unproxied Ref.
const TARGET_PROP = "$target";

export const makeFactory = (refs: RefTable = {}): RefFactory => {
  const id = () => `${ID_PREFIX}${uuidv4()}`;

  const makeProxiedRef = (node: NodeLike, props: any[] = []): any => {
    const ref: Ref = {
      t: "Ref",
      id: id(),
      node,
      props,
    };
    refs[ref.id] = ref;

    return new Proxy(ref, {
      has(target: Ref, key: any) {
        if (key === TARGET_PROP) return true; // NOTE: minor hack here (see getTarget)
        return key in target;
      },
      get(target: Ref, prop: any, _receiver: any) {
        if (prop === TARGET_PROP) return target; // NOTE: minor hack here (see getTarget)

        /**
         * When a "ref" is being used as a parameter to another ref such as in the case of:
         *
         *    let ref1 = a.b.c;
         *    let ref2 = d.e[ref1];
         *
         * When `e[ref1]` is called, internally JS will send `toPrimitive` to `ref1` in order
         * to pass it as a paramter to `e[]` - because proxy objects cannot be transformed
         * into primitive types, we're specifying here to use a function that resolves to the
         * internal `proxyId`. When `e[]` recieves a property access of a string that starts
         * with the special `$proxyId:` part it will use the actual `ref1` value using a
         * private lookup table.
         */
        if (prop === Symbol.toPrimitive) {
          return () => target.id;
        }

        if (typeof prop !== "string") throw new Error("is this possible?");

        const nextProp = prop.startsWith(ID_PREFIX)
          ? { t: "Ref", value: refs[prop] }
          : { t: "Key", value: prop };
        const props = [...ref.props, nextProp];

        return makeProxiedRef(target.node, props);
      },
    });
  };

  const isRef = (maybeRef: Object): boolean => {
    if (TARGET_PROP in maybeRef) return true;
    if ("t" in maybeRef) return maybeRef.t === "Ref";
    return false;
  };

  const getTarget = (maybeProxied: Ref): Ref => {
    if (TARGET_PROP in maybeProxied) {
      return maybeProxied.$target as Ref;
    } else {
      return maybeProxied;
    }
  };

  return { makeProxiedRef, getTarget, isRef, refs };
};
