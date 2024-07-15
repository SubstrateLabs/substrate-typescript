import { idGenerator } from "substrate/idGenerator";
import { Node } from "substrate/Node";

type Accessor = "item" | "attr";
type TraceOperation = {
  future_id: string | null;
  key: string | number | null;
  accessor: Accessor;
};

type TraceProp = string | Future<string> | number | Future<number>;
type Concatable = string | Future<string>;
type JQCompatible = Record<string, unknown> | any[] | string | number;
type JQDirectiveTarget = Future<any> | JQCompatible;

const parsePath = (path: string): TraceProp[] => {
  // Split the path by dots or brackets, and filter out empty strings
  const parts = path.split(/\.|\[|\]\[?/).filter(Boolean);
  // Convert numeric parts to numbers and keep others as strings
  return parts.map((part) => (isNaN(Number(part)) ? part : Number(part)));
};

const newFutureId = idGenerator("future");

abstract class Directive {
  abstract items: any[];
  abstract next(...args: any[]): Directive;
  abstract toJSON(): any;

  abstract result(): Promise<any>;

  referencedFutures() {
    // @ts-ignore
    return this.items
      .filter((p) => p instanceof Future)
      .flatMap((p) => [p, ...p.referencedFutures()]);
  }
}

export class Trace extends Directive {
  items: TraceProp[];
  originNode: Node;

  constructor(items: TraceProp[], originNode: Node) {
    super();
    this.items = items;
    this.originNode = originNode;
  }

  static Operation = {
    future: (accessor: Accessor, id: Future<any>["_id"]) => ({
      future_id: id,
      key: null,
      accessor,
    }),
    key: (accessor: Accessor, key: string | number) => ({
      future_id: null,
      key,
      accessor,
    }),
  };

  override next(...items: TraceProp[]) {
    return new Trace([...this.items, ...items], this.originNode);
  }

  override async result(): Promise<any> {
    // @ts-expect-error (protected result())
    let result: any = await this.originNode.result();

    for (let item of this.items) {
      if (item instanceof Future) {
        // @ts-expect-error (protected result())
        item = await item._result();
      }
      result = result[item as string | number];
    }
    return result;
  }

  override toJSON() {
    return {
      type: "trace",
      origin_node_id: this.originNode.id,
      op_stack: this.items.map((item) => {
        if (item instanceof Future) {
          // @ts-expect-error (accessing protected prop: _runtimeHint)
          if (item._runtimeHint === "number") {
            // @ts-expect-error (accessing protected prop: _id)
            return Trace.Operation.future("item", item._id);
          }
          // @ts-expect-error (accessing protected prop: _id)
          return Trace.Operation.future("attr", item._id);
        } else if (typeof item === "string") {
          return Trace.Operation.key("attr", item);
        }
        return Trace.Operation.key("item", item);
      }) as TraceOperation[],
    };
  }
}

export class JQ extends Directive {
  items: any[];
  target: JQDirectiveTarget;
  query: string;

  constructor(query: string, target: JQDirectiveTarget) {
    super();
    this.items = [target];
    this.target = target;
    this.query = query;
  }

  static JQDirectiveTarget = {
    future: (id: Future<any>["_id"]) => ({ future_id: id, val: null }),
    rawValue: (val: JQCompatible) => ({ future_id: null, val }),
  };

  override next(...items: TraceProp[]) {
    return new JQ(this.query, this.target);
  }

  override async result(): Promise<JQCompatible> {
    return this.target instanceof Future
      ? // @ts-expect-error (accessing protected prop: id)
        await this.target._result()
      : this.target;
  }

  override toJSON(): any {
    return {
      type: "jq",
      query: this.query,
      target:
        this.target instanceof Future
          ? // @ts-expect-error (accessing protected prop: id)
            JQ.JQDirectiveTarget.future(this.target._id)
          : JQ.JQDirectiveTarget.rawValue(this.target),
    };
  }
}

export class StringConcat extends Directive {
  items: Concatable[];

  constructor(items: Concatable[] = []) {
    super();
    this.items = items;
  }

  static Concatable = {
    string: (val: string) => ({ future_id: null, val }),
    future: (id: Future<string>["_id"]) => ({ future_id: id, val: null }),
  };

  override next(...items: Concatable[]) {
    return new StringConcat([...this.items, ...items]);
  }

  override async result(): Promise<string> {
    let result = "";
    for (let item of this.items) {
      if (item instanceof Future) {
        // @ts-expect-error (protected result())
        item = await item._result();
      }
      result = result.concat(item);
    }
    return result;
  }

  override toJSON(): any {
    return {
      type: "string-concat",
      items: this.items.map((item) => {
        if (item instanceof Future) {
          // @ts-expect-error (accessing protected prop: _id)
          return StringConcat.Concatable.future(item._id);
        }
        return StringConcat.Concatable.string(item);
      }),
    };
  }
}

export class Future<T> {
  protected _directive: Directive;
  protected _id: string = "";
  protected _runtimeHint:
    | "string"
    | "number"
    | "object"
    | "array"
    | "boolean"
    | undefined;

  constructor(directive: Directive, id: string = newFutureId()) {
    this._directive = directive;
    this._id = id;
  }

  protected referencedFutures(): Future<any>[] {
    return this._directive.referencedFutures();
  }

  protected toPlaceholder() {
    return { __$$SB_GRAPH_OP_ID$$__: this._id };
  }

  protected async _result(): Promise<T> {
    return this._directive.result();
  }

  toJSON() {
    return {
      id: this._id,
      directive: this._directive.toJSON(),
    };
  }
}

/**
 * `concat` combines multiple `string` or `Future<string>` items together into a new `Future<string>`.
 *
 * @example
 *
 *    let newFuture = concat("string", node.future.someString, "!")
 */
export const concat = (...items: (string | Future<string>)[]) => {
  return new Future<string>(new StringConcat(items));
};

/**
 * `interpolate` creates a `Future<string>` using interpolate and supports `Future<string>` values.
 *
 * @example
 *
 *    let newFuture = interpolate`hello ${"world"}, you look ${node.future.niceString} today.`
 */
export const interpolate = (
  strings: TemplateStringsArray,
  ...exprs: ({ toString(): string } | Future<string>)[]
) => {
  return concat(
    ...strings.flatMap((s: string, i: number) => {
      const expr = exprs[i];
      return expr ? [s, expr instanceof Future ? expr : expr.toString()] : [s];
    }),
  );
};

/**
 * `jq` supports running [jq](https://jqlang.github.io/jq) operations on a `Future` and returns a new `Future<T>`.
 *
 * @example
 *
 *    let newFuture = jq<string>(node.future.json_object, ".country")
 *
 */
export const jq = <T = any>(
  future: JQDirectiveTarget,
  query: string,
  _futureType: any = undefined, // @deprecated
): Future<T> => {
  const directive = new JQ(query, future);
  return new Future<T>(directive);
};

/**
 * `get` returns a `Future` by selecting a value by path from a `Future<Object>`.
 *
 * @example
 *
 *    let newFuture = get<string>(node.future, "choices[0].text")
 *
 */
export const get = <T = any>(
  future: Future<Object>,
  path: string | Future<string>,
) => {
  // @ts-ignore (protected _runtimeHint)
  if (path instanceof Future) index._runtimeHint = "string";

  const d =
    typeof path === "string"
      ? // @ts-ignore (protected _directive)
        future._directive.next(...parsePath(path))
      : // @ts-ignore (protected _directive)
        future._directive.next(path);
  return new Future<T>(d);
};

/**
 * `at` returns a `Future` item at some index of a `Future` containing an array.
 *
 * @example
 *
 *    let newFuture = at<string>(node.future.strings, 0);
 *
 */
export const at = <T = any>(future: Future<T[]>, index: number | Future<number>) => {
  // @ts-ignore (protected _runtimeHint)
  if (index instanceof Future) index._runtimeHint = "number";
  // @ts-ignore (protected _directive)
  return new Future<T>(future._directive.next(index));
};
