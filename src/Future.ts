import { idGenerator } from "substrate/idGenerator";
import { Node } from "substrate/Node";

type Accessor = "item" | "attr";
type Operation = {
  future_id: string | null;
  key: string | number | null;
  accessor: Accessor;
};

type PathProp = string | FutureString | number | FutureNumber;
type StringConcatable = string | FutureString;
type ArrayConcatable =
  | string
  | number
  | string[]
  | number[]
  | Future
  | Future[];

const parsePath = (path: string): PathProp[] => {
  // Split the path by dots or brackets, and filter out empty strings
  const parts = path.split(/\.|\[|\]\[?/).filter(Boolean);
  // Convert numeric parts to numbers and keep others as strings
  return parts.map((part) => (isNaN(Number(part)) ? part : Number(part)));
};

const newFutureId = idGenerator("future");

/** @private */
abstract class Directive {
  /** A directive contains a set of values or instructions */
  abstract items: any[];

  /** Produces a new `Directive` with provided args from an existing `Directive` */
  // NOTE: also open to changing the name of this function, just not sure what to name it yet (eg. `extend`, `with`)
  abstract next(...args: any[]): Directive;

  /** Transforms the `Directive` into JSON */
  abstract toJSON(): any;

  /** Returns the eventual resulting value from the `Directive` */
  abstract result(): Promise<any>;

  /** Returns all referenced `Future` instances (recursive) present in instance's `items` */
  referencedFutures() {
    // @ts-ignore
    return this.items
      .filter((p) => p instanceof Future)
      .flatMap((p) => [p, ...p.referencedFutures()]);
  }
}

/** @private */
export class Trace extends Directive {
  items: PathProp[];
  originNode: Node<any>;

  constructor(items: PathProp[], originNode: Node<any>) {
    super();
    this.items = items;
    this.originNode = originNode;
  }

  static Operation = {
    future: (accessor: Accessor, id: Future["id"]) => ({
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

  override next(...items: PathProp[]) {
    return new Trace([...this.items, ...items], this.originNode);
  }

  override async result(): Promise<any> {
    let result: any = await this.originNode.result();

    for (let item of this.items) {
      if (item instanceof Future) {
        item = await item.result();
      }
      result = result[item];
    }
    return result;
  }

  override toJSON() {
    return {
      type: "trace",
      origin_node_id: this.originNode.id,
      op_stack: this.items.map((item) => {
        if (item instanceof FutureString) {
          // @ts-expect-error (accessing protected prop: id)
          return Trace.Operation.future("attr", item.id);
        } else if (item instanceof FutureNumber) {
          // @ts-expect-error (accessing protected prop: id)
          return Trace.Operation.future("item", item.id);
        } else if (typeof item === "string") {
          return Trace.Operation.key("attr", item);
        }
        return Trace.Operation.key("item", item);
      }) as Operation[],
    };
  }
}

/** @private */
export class StringConcat extends Directive {
  items: StringConcatable[];

  constructor(items: StringConcatable[] = []) {
    super();
    this.items = items;
  }

  static Item = {
    string: (val: string) => ({ future_id: null, val }),
    future: (id: Future["id"]) => ({ future_id: id, val: null }),
  };

  override next(...items: StringConcatable[]) {
    return new StringConcat([...this.items, ...items]);
  }

  override async result(): Promise<string> {
    let result = "";
    for (let item of this.items) {
      if (item instanceof Future) {
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
          // @ts-expect-error (accessing protected prop: id)
          return StringConcat.Item.future(item.id);
        }
        return StringConcat.Item.string(item);
      }),
    };
  }
}

/** @private */
export class ArrayConcat extends Directive {
  items: ArrayConcatable[];

  constructor(items: ArrayConcatable[] = []) {
    super();
    this.items = items;
  }

  static Item = {
    static: (val: string | number | number[] | string[]) => ({
      future_id: null,
      val,
    }),
    future: (id: Future["id"]) => ({ future_id: id, val: null }),
  };

  override next(...items: ArrayConcatable[]): ArrayConcat {
    return new ArrayConcat([...this.items, ...items]);
  }

  override async result<T = any>(): Promise<T[]> {
    let result: T[] = [];
    for (let item of this.items) {
      if (item instanceof Future) {
        item = await item.result();
      }
      result = result.concat(item as any);
    }
    return result;
  }

  override toJSON(): any {
    return {
      type: "array-concat",
      items: this.items.map((item) => {
        if (item instanceof Future) {
          // @ts-expect-error (accessing protected prop: id)
          return ArrayConcat.Item.future(item.id);
        }
        return ArrayConcat.Item.static(
          item as string | number | string[] | number[],
        );
      }),
    };
  }
}

/** @private */
export class ArrayPluck extends Directive {
  items: PathProp[];
  target: FutureArray;

  constructor(items: PathProp[] = [], target: FutureArray) {
    super();
    this.items = items;
    this.target = target;
  }

  static Operation = {
    future: (accessor: Accessor, id: Future["id"]) => ({
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

  override next(...items: PathProp[]): ArrayConcat {
    return new ArrayPluck([...this.items, ...items], this.target);
  }

  override async result(): Promise<any[]> {
    // resolve the value of the target future
    let result: any[] = await this.target.result();

    // resolve all the path properties
    const path = await Promise.all(
      this.items.map((item) => (item instanceof Future ? item.result() : item)),
    );

    // then for each item in the results, select the value at the given path
    return result.map((item) => {
      let obj = item;
      for (let p of path) obj = obj[p];
      return obj;
    });
  }

  override referencedFutures() {
    return [this.target, ...super.referencedFutures()];
  }

  override toJSON() {
    return {
      type: "array-pluck",
      // @ts-expect-error (accessing protected prop: id)
      target_future_id: this.target.id,
      op_stack: this.items.map((item) => {
        if (item instanceof FutureString) {
          // @ts-expect-error (accessing protected prop: id)
          return ArrayPluck.Operation.future("attr", item.id);
        } else if (item instanceof FutureNumber) {
          // @ts-expect-error (accessing protected prop: id)
          return ArrayPluck.Operation.future("item", item.id);
        } else if (typeof item === "string") {
          return ArrayPluck.Operation.key("attr", item);
        }
        return ArrayPluck.Operation.key("item", item);
      }) as Operation[],
    };
  }
}

export abstract class Future {
  protected directive: Directive;
  protected id: string = "";

  constructor(directive: Directive, id: string = newFutureId()) {
    this.directive = directive;
    this.id = id;
  }

  protected referencedFutures(): Future[] {
    return this.directive.referencedFutures();
  }

  protected toPlaceholder() {
    return { __$$SB_GRAPH_OP_ID$$__: this.id };
  }

  async result(): Promise<any> {
    return this.directive.result();
  }

  toJSON() {
    return {
      id: this.id,
      directive: this.directive.toJSON(),
    };
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

  override async result(): Promise<string> {
    return super.result();
  }
}

export class FutureNumber extends Future {
  override async result(): Promise<number> {
    return super.result();
  }
}

export class FutureArray extends Future {
  at(index: number): Future {
    return new FutureAnyObject(this.directive.next(index));
  }

  static concat(...items: ArrayConcatable[]) {
    return new FutureArray(new ArrayConcat(items));
  }

  concat(...items: ArrayConcatable[]) {
    return FutureArray.concat(...[this as FutureArray, ...items]);
  }

  static pluck(props: PathProp[], target: FutureArray) {
    const items =
      props.length === 1 && typeof props.at(0) === "string"
        ? parsePath(props.at(0) as string)
        : props;
    return new FutureArray(new ArrayPluck(items, target));
  }

  pluck(...props: PathProp[]) {
    return FutureArray.pluck(props, this);
  }

  override async result(): Promise<any[]> {
    return super.result() as Promise<any[]>;
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

  override async result(): Promise<Object> {
    return super.result();
  }
}

export class FutureAnyObject extends Future {
  get(path: string | FutureString) {
    const d =
      typeof path === "string"
        ? this.directive.next(...parsePath(path))
        : this.directive.next(path);
    return new FutureAnyObject(d);
  }

  at(index: number | FutureNumber) {
    return new FutureAnyObject(this.directive.next(index));
  }

  override async result(): Promise<Object> {
    return super.result();
  }
}
