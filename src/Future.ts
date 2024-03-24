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

  referencedFutures() {
    // @ts-ignore
    return this.items
      .filter((p) => p instanceof Future)
      .flatMap((p) => [p, ...p.referencedFutures()]);
  }
}

export class Trace extends Directive {
  items: TraceProp[];
  originNodeId: Node["id"];

  constructor(items: TraceProp[], originNodeId: Node["id"]) {
    super();
    this.items = items;
    this.originNodeId = originNodeId;
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

  override next(...items: TraceProp[]) {
    return new Trace([...this.items, ...items], this.originNodeId);
  }

  override toJSON() {
    return {
      type: "trace",
      origin_node_id: this.originNodeId,
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
      }) as TraceOperation[],
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
    future: (id: Future["id"]) => ({ future_id: id, val: null }),
  };

  override next(...items: Concatable[]) {
    return new StringConcat([...this.items, ...items]);
  }

  override toJSON(): any {
    return {
      type: "string-concat",
      items: this.items.map((item) => {
        if (item instanceof Future) {
          // @ts-expect-error (accessing protected prop: id)
          return StringConcat.Concatable.future(item.id);
        }
        return StringConcat.Concatable.string(item);
      }),
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

  concat(...items: (string | FutureString)[]) {
    return FutureString.concat(...[this, ...items]);
  }
}

export class FutureNumber extends Future {}

export abstract class FutureArray extends Future {
  abstract at(index: number): Future;
}

export abstract class FutureObject extends Future {
  get(path: string): Future {
    const props = parsePath(path);
    return props.reduce((future, prop) => {
      if (future instanceof FutureAnyObject) {
        return typeof prop === "string" ? future.get(prop) : future.at(prop);
      } else {
        // @ts-ignore
        return typeof prop === "string" ? future[prop] : future.at(prop);
      }
    }, this) as Future;
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
}
