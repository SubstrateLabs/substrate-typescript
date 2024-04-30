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
type JQCompatible = Record<string, never> | any[] | string | number;
type JQDirectiveTarget = Future | JQCompatible;

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
    future: (accessor: Accessor, id: Future["_id"]) => ({
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
        item = await item.result();
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

  constructor(items: any[], query: string, target: JQDirectiveTarget) {
    super();
    this.items = items;
    this.target = target;
    this.query = query;
  }

  static JQDirectiveTarget = {
    future: (id: Future["id"]) => ({ future_id: id, val: null }),
    rawValue: (val: JQCompatible) => ({ future_id: null, val }),
  };

  override next(...items: TraceProp[]) {
    // TODO(rob) - not really sure what to do here??
    return new JQ([...this.items, ...items], this.query, this.target);
  }

  override async result(): Promise<JQCompatible> {
    return this.target instanceof Future
      ? // @ts-expect-error (accessing protected prop: id)
        await this.target.result()
      : this.target;
  }

  override toJSON(): any {
    return {
      type: "jq",
      query: this.query,
      target:
        this.target instanceof Future
          ? // @ts-expect-error (accessing protected prop: id)
            JQ.JQDirectiveTarget.future(this.target.id)
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
    future: (id: Future["_id"]) => ({ future_id: id, val: null }),
  };

  override next(...items: Concatable[]) {
    return new StringConcat([...this.items, ...items]);
  }

  override async result(): Promise<string> {
    let result = "";
    for (let item of this.items) {
      if (item instanceof Future) {
        // @ts-expect-error (protected result())
        item = await item.result();
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

export abstract class Future {
  protected _directive: Directive;
  protected _id: string = "";

  constructor(directive: Directive, id: string = newFutureId()) {
    this._directive = directive;
    this._id = id;
  }

  protected referencedFutures(): Future[] {
    return this._directive.referencedFutures();
  }

  protected toPlaceholder() {
    return { __$$SB_GRAPH_OP_ID$$__: this._id };
  }

  protected async result(): Promise<any> {
    return this._directive.result();
  }

  static jq<T extends Future>(
    query: string,
    future: JQDirectiveTarget,
    klazz?: T,
  ): T {
    const directive = new JQ([], query, future);
    const Klazz = klazz ?? FutureAnyObject;
    // @ts-ignore
    return new Klazz(directive);
    //   sb.jq<MyType>('myquery', mything) ==> Future<MyType>
  }

  toJSON() {
    return {
      id: this._id,
      directive: this._directive.toJSON(),
    };
  }
}

export class FutureBoolean extends Future {
  override async result(): Promise<boolean> {
    return super.result();
  }
}

export class FutureString extends Future {
  static concat(...items: (string | FutureString)[]) {
    return new FutureString(new StringConcat(items));
  }

  static interpolate(
    strings: TemplateStringsArray,
    ...exprs: ({ toString(): string } | FutureString)[]
  ): FutureString {
    return FutureString.concat(
      ...strings
        .filter((s) => s !== "") // FIXME: Work around until SubstrateLabs/substrate#514 is live
        .flatMap((s: string, i: number) => {
          const expr = exprs[i];
          return expr
            ? [s, expr instanceof FutureString ? expr : expr.toString()]
            : [s];
        }),
    );
  }

  concat(...items: (string | FutureString)[]) {
    return FutureString.concat(...[this, ...items]);
  }

  protected override async result(): Promise<string> {
    return super.result();
  }
}

export class FutureNumber extends Future {
  override async result(): Promise<number> {
    return super.result();
  }
}

export abstract class FutureArray extends Future {
  abstract at(index: number): Future;

  protected override async result(): Promise<any[] | FutureArray> {
    return super.result();
  }
}

export abstract class FutureObject extends Future {
  get(path: string): Future {
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
    }, this) as Future;
  }

  protected override async result(): Promise<Object> {
    return super.result();
  }
}

export class FutureAnyObject extends Future {
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

  protected override async result(): Promise<Object> {
    return super.result();
  }
}
