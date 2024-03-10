import { expect, describe, test } from "vitest";
import * as Refs from "substrate/Refs";
import * as Future from "substrate/Future";

const refFactory = Refs.makeFactory();

class FooNode {
  id: string;
  args: any;

  constructor(id: string, args: any = {}) {
    this.id = id;
    this.args = args;
  }

  get ref() {
    return refFactory.makeProxiedRef(this) as any;
  }

  toJSON() {
    return {
      class: "FooNode",
      id: this.id,
      args: this.args,
    };
  }
}

// Rob's Example
const a = new FooNode("a");
const b = new FooNode("b", {
  foo: "b",
  bar: a.ref.foo,
  nested: [{ nest_id: "first" }, { nest_id: "second" }],
});
const c = new FooNode("c", {
  foo: "c",
  bar: b.ref.nested[a.ref.foo].nest_id,
  nested: { baz: b.ref.bar },
});

const idGenerator = (start: number = 1) => {
  let n = start;
  return () => {
    const id = n.toString();
    n = n + 1;
    return id;
  };
};

describe("Future", () => {
  test("a.ref.foo", () => {
    let result = Future.refFutures(
      refFactory.getTarget(b.args.bar),
      idGenerator(),
    );
    expect(result).toEqual([
      {
        id: "1",
        directive: {
          type: "trace",
          op_stack: [{ key: "foo", accessor: "attr", future_id: null }],
          origin_node_id: "a",
        },
      },
    ]);
  });

  test("b.ref.nested[a.ref.foo].nest_id", () => {
    let result = Future.refFutures(
      refFactory.getTarget(c.args.bar),
      idGenerator(),
    );
    expect(result).toEqual([
      {
        id: "2",
        directive: {
          type: "trace",
          op_stack: [{ key: "foo", accessor: "attr", future_id: null }],
          origin_node_id: "a",
        },
      },
      {
        id: "1",
        directive: {
          type: "trace",
          op_stack: [
            { key: "nested", accessor: "attr", future_id: null },
            { key: null, accessor: "item", future_id: "2" },
            { key: "nest_id", accessor: "attr", future_id: null },
          ],
          origin_node_id: "b",
        },
      },
    ]);
  });

  test("b.ref.bar", () => {
    let result = Future.refFutures(
      refFactory.getTarget(c.args.nested.baz),
      idGenerator(),
    );
    expect(result).toEqual([
      {
        id: "1",
        directive: {
          type: "trace",
          op_stack: [{ key: "bar", accessor: "attr", future_id: null }],
          origin_node_id: "b",
        },
      },
    ]);
  });

  test("replace refs: c.args", () => {
    let { args, futures } = Future.replaceRefsWithFutures(
      c.args,
      refFactory,
      idGenerator(),
    );

    expect(args).toEqual({
      foo: "c",
      bar: { __$$SB_GRAPH_OP_ID$$__: "1" },
      nested: { baz: { __$$SB_GRAPH_OP_ID$$__: "3" } },
    });

    expect(futures).toEqual([
      {
        id: "2",
        directive: {
          type: "trace",
          op_stack: [{ accessor: "attr", key: "foo", future_id: null }],
          origin_node_id: "a",
        },
      },
      {
        id: "1",
        directive: {
          type: "trace",
          op_stack: [
            { accessor: "attr", key: "nested", future_id: null },
            { accessor: "item", key: null, future_id: "2" },
            { accessor: "attr", key: "nest_id", future_id: null },
          ],
          origin_node_id: "b",
        },
      },
      {
        id: "3",
        directive: {
          type: "trace",
          op_stack: [{ accessor: "attr", key: "bar", future_id: null }],
          origin_node_id: "b",
        },
      },
    ]);
  });
});
