import { idGenerator } from "substrate/idGenerator";
import { Node } from "substrate/Node";

type Accessor = "item" | "attr";
type TraceOperation = {
  future_id: string | null;
  key: string | number | null;
  accessor: Accessor;
};

type TraceProp = string | FutureString | number | FutureNumber;
type Concatable = string | FutureString;
type JQCompatible = Record<string, unknown> | any[] | string | number;
type JQDirectiveTarget = Future<any> | JQCompatible;
type FutureTypeMap = {
  string: FutureString;
  object: FutureAnyObject;
  number: FutureNumber;
  boolean: FutureBoolean;
};
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
    return (
      this.items
        .filter((p) => p instanceof Future)
        // @ts-ignore
        .flatMap((p) => [p, ...p.referencedFutures()])
    );
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
        if (item instanceof FutureString) {
          // @ts-expect-error (accessing protected prop: _id)
          return Trace.Operation.future("attr", item._id);
        } else if (item instanceof FutureNumber) {
          // @ts-expect-error (accessing protected prop: _id)
          return Trace.Operation.future("item", item._id);
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

export abstract class Future<T> {
  protected _directive: Directive;
  protected _id: string = "";

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

  static jq<T extends keyof FutureTypeMap>(
    future: JQDirectiveTarget,
    query: string,
    futureType: keyof FutureTypeMap = "string",
  ): FutureTypeMap[T] {
    const directive = new JQ(query, future);
    switch (futureType) {
      case "string":
        return new FutureString(directive) as FutureTypeMap[T];
      case "number":
        return new FutureNumber(directive) as FutureTypeMap[T];
      case "object":
        return new FutureAnyObject(directive) as FutureTypeMap[T];
      case "boolean":
        return new FutureBoolean(directive) as FutureTypeMap[T];
      default:
        throw new Error(`Unknown future type: ${futureType}`);
    }
  }

  toJSON() {
    return {
      id: this._id,
      directive: this._directive.toJSON(),
    };
  }
}

export class FutureBoolean extends Future<boolean> {}

export class FutureString extends Future<string> {
  static concat(...items: (string | FutureString)[]) {
    return new FutureString(new StringConcat(items));
  }

  static interpolate(
    strings: TemplateStringsArray,
    ...exprs: ({ toString(): string } | FutureString)[]
  ): FutureString {
    return FutureString.concat(
      ...strings.flatMap((s: string, i: number) => {
        const expr = exprs[i];
        return expr
          ? [s, expr instanceof Future ? expr : expr.toString()]
          : [s];
      }),
    );
  }

  concat(...items: (string | FutureString)[]) {
    return FutureString.concat(...[this, ...items]);
  }

  protected override async _result(): Promise<string> {
    return super._result();
  }
}

export class FutureNumber extends Future<number> {}

export abstract class FutureArray extends Future<any[] | FutureArray> {
  abstract at(index: number): Future<any>;

  protected override async _result(): Promise<any[] | FutureArray> {
    return super._result();
  }
}

export abstract class FutureObject extends Future<Object> {
  get(path: string): Future<any> {
    const props = parsePath(path);
    return props.reduce((future, prop) => {
      if (future instanceof FutureAnyObject) {
        return typeof prop === "string"
          ? future.get(prop as string)
          : future.at(prop as number);
      } else {
        // @ts-ignore
        return typeof prop === "string" ? future[prop] : future.at(prop);
      }
    }, this) as Future<any>;
  }

  protected override async _result(): Promise<Object> {
    return super._result();
  }
}

export class FutureAnyObject extends Future<Object> {
  get(path: string | FutureString) {
    const d =
      typeof path === "string"
        ? this._directive.next(...parsePath(path))
        : this._directive.next(path);
    return new FutureAnyObject(d);
  }

  at(index: number | FutureNumber) {
    return new FutureAnyObject(this._directive.next(index));
  }

  protected override async _result(): Promise<Object> {
    return super._result();
  }
}
