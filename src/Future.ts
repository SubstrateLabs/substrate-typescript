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
 *    - "Proxy management" (isProxy, unproxy) -> using "virtual prop", `$$target`
 *
 *    - "Property accessors/indexing" (isPrimitive) -> using "lookup table" and `$$LookupTableId`
 *
 *    - "TypeScript index type" (eg. "X cannot be used as an index type. typescript (2538)" for proxy indexing) -> Clever type casting (See `AsFuture`);
 */

/**
 * Throws an error when we encounter an impossible situation.
 */
const impossible = (msg: string): never => {
  throw new Error(msg);
};

type HasId = { id: string };
type NodeLike = HasId;

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

type FutureJSON = {
  id: string;
  directive: TraceDirective | StringConcatDirective;
};

type TraceOperation = {
  future_id: Future<any>["id"] | null;
  key: string | number | null;
  accessor: "item" | "attr";
};

type TraceDirective = {
  op_stack: TraceOperation[];
  origin_node_id: HasId["id"];
  type: "trace";
};

type StringConcatDirective = {
  items: Concatable[];
  type: "string-concat";
};

type Concatable = {
  future_id: Future<any>["id"] | null;
  val: string | null;
};

export abstract class Future<T> {
  t: T;
  id: string;
  constructor(id: string) {
    this.id = id;
  }

  toPlaceholder() {
    return { __$$SB_GRAPH_OP_ID$$__: this.id };
  }

  abstract referencedFutures(): FutureJSON[];
  abstract toJSON(): FutureJSON;
}

/**
 * Transforms a type `T` into a `Future<T> & T`.
 *
 * When applied to an object it will transform the inner fields recursively too.
 */
export type AsFuture<T> = T extends object
  ? {
      [P in keyof T]-?: undefined extends T[P]
        ? Future<T[P] | undefined> & AsFuture<T[P]>
        : Future<T[P]> & AsFuture<T[P]>;
    }
  : Future<T> & T;


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
  abstract class InContextFuture extends Future<any> {
    constructor(id: string = futureId()) {
      super(id);
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

  type TraceProp = string | InContextFuture;

  class Trace extends InContextFuture {
    node: NodeLike;
    props: TraceProp[];

    constructor(node: NodeLike, props: TraceProp[] = [], id?: string) {
      super(id);
      this.node = node;
      this.props = props;
    }

    static TraceOperation = {
      future: (futureId: InContextFuture["id"]): TraceOperation => ({
        future_id: futureId,
        key: null,
        accessor: "attr", // TODO: how to infer the result here - maybe impossible?
      }),
      attr: (key: string): TraceOperation => ({
        future_id: null,
        key,
        accessor: "attr",
      }),
      item: (key: number): TraceOperation => ({
        future_id: null,
        key,
        accessor: "item",
      }),
    };

    static proxy(n: NodeLike) {
      const trace = new Trace(n);
      const proxy = makeProxy(trace);
      return proxy;
    }

    #unproxiedProps(): TraceProp[] {
      return this.props.map((prop) => {
        if (prop instanceof Future) return isProxy(prop) ? unproxy(prop) : prop;
        return prop;
      });
    }

    #opStack(): TraceOperation[] {
      return this.#unproxiedProps().map((prop) => {
        if (prop instanceof Future) {
          return Trace.TraceOperation.future(prop.id);
        }

        // here we know we're dealing with a prop name or numeric index
        // TODO: infer that a numeric prop is an item?
        return Trace.TraceOperation.attr(prop);
      });
    }

    override referencedFutures(): FutureJSON[] {
      const futures = this.#unproxiedProps().filter(
        (p) => p instanceof InContextFuture,
      ) as InContextFuture[];
      return futures.flatMap((f) => [f.toJSON(), ...f.referencedFutures()]);
    }

    override toJSON(): FutureJSON {
      return {
        id: this.id,
        directive: {
          type: "trace",
          op_stack: this.#opStack(),
          origin_node_id: this.node.id,
        },
      };
    }
  }

  type StringConcatItem = string | InContextFuture;

  class StringConcat extends InContextFuture {
    items: StringConcatItem[];

    constructor(items: StringConcatItem[] = [], id: string = futureId()) {
      super(id);
      this.items = items;
    }

    static stringConcat(...items: StringConcatItem[]): Future<string> & string {
      return new StringConcat(items) as any as Future<string> & string;
    }

    static Concatable = {
      string: (val: string) => ({ future_id: null, val }),
      future: (futureId: InContextFuture["id"]) => ({
        future_id: futureId,
        val: null,
      }),
    };

    #unproxiedItems(): StringConcatItem[] {
      return this.items.map((item) => {
        if (item instanceof Future) return isProxy(item) ? unproxy(item) : item;
        return item;
      });
    }

    #concatableItems(): Concatable[] {
      return this.#unproxiedItems().map((item: StringConcatItem) => {
        if (item instanceof InContextFuture) {
          return StringConcat.Concatable.future(item.id);
        }
        return StringConcat.Concatable.string(item);
      });
    }

    override referencedFutures(): FutureJSON[] {
      const futures = this.#unproxiedItems().filter(
        (p) => p instanceof Future,
      ) as InContextFuture[];
      return futures.flatMap((f) => [f.toJSON(), ...f.referencedFutures()]);
    }

    override toJSON(): FutureJSON {
      return {
        id: this.id,
        directive: {
          type: "string-concat",
          items: this.#concatableItems(),
        },
      };
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

  const unproxy = <T extends Proxyable>(proxied: Proxied<T>): T => {
    // @ts-ignore: ignoring that the virtual targetProp may not be there on this type.
    return proxied[targetProp];
  };

  return {
    Future,
    Trace,
    StringConcat,
    stringConcat: StringConcat.stringConcat,
    makeProxy,
    isProxy,
    unproxy,
  };
};
