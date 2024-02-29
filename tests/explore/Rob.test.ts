import { expect, describe, test } from "vitest";
import * as Refs from "substrate/Refs";
import * as Operation from "substrate/Operation";
import { DiGraph } from "substrate/DiGraph";

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

type NodeLike = { id: string; args: Object };

// simplified graph for demo
class Graph {
  newId: any;
  graph: DiGraph;

  constructor(newId: any, DAG: DiGraph = new DiGraph()) {
    this.newId = newId;
    this.graph = DAG;
  }

  add(node: NodeLike): Graph {
    this.graph.addNode([node.id, node]);

    const { ops } = Operation.replaceRefsWithOps(
      node.args,
      refFactory,
      this.newId
    );
    ops.forEach((op) => {
      this.graph.addEdge([op.origin_node, node.id, {}]);
    });

    return this;
  }

  get nodes() {
    return this.graph.nodes.map(([_nodeId, node]) => node);
  }

  get edges() {
    return this.graph.edges;
  }

  toJSON() {
    return this.nodes.reduce(
      (acc, node) => {
        const { args, ops } = Operation.replaceRefsWithOps(
          node.args,
          refFactory,
          this.newId
        );

        return {
          nodes: [...acc.nodes, { ...node.toJSON(), args }],
          ops: [...acc.ops, ...ops],
        };
      },
      { nodes: [], ops: [] }
    );
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

describe("Rob's Example", () => {
  test("a.ref.foo", () => {
    let result = Operation.refOps(
      refFactory.getTarget(b.args.bar),
      idGenerator()
    );
    expect(result).toEqual([
      {
        id: "1",
        op_stack: [
          { type: "get", args: { key: "foo", accessor: "attr", op_id: null } },
        ],
        op_graph_edges: [],
        node_graph_edges: [],
        origin_node: "a",
      },
    ]);
  });

  test("b.ref.nested[a.ref.foo].nest_id", () => {
    let result = Operation.refOps(
      refFactory.getTarget(c.args.bar),
      idGenerator()
    );
    expect(result).toEqual([
      {
        id: "2",
        op_stack: [
          {
            type: "get",
            args: { key: "foo", accessor: "attr", op_id: null },
          },
        ],
        op_graph_edges: [],
        node_graph_edges: [],
        origin_node: "a",
      },
      {
        id: "1",
        op_stack: [
          {
            type: "get",
            args: { key: "nested", accessor: "attr", op_id: null },
          },
          {
            type: "get",
            args: { key: null, accessor: "item", op_id: "2" },
          },
          {
            type: "get",
            args: { key: "nest_id", accessor: "attr", op_id: null },
          },
        ],
        op_graph_edges: [["2", "1"]],
        node_graph_edges: [["a", "b"]],
        origin_node: "b",
      },
    ]);
  });

  test("b.ref.bar", () => {
    let result = Operation.refOps(
      refFactory.getTarget(c.args.nested.baz),
      idGenerator()
    );
    expect(result).toEqual([
      {
        id: "1",
        op_stack: [
          {
            type: "get",
            args: { key: "bar", accessor: "attr", op_id: null },
          },
        ],
        op_graph_edges: [],
        node_graph_edges: [],
        origin_node: "b",
      },
    ]);
  });

  test("replace refs: c.args", () => {
    // const c = new FooNode("c", {
    //   foo: "c",
    //   bar: b.ref.nested[a.ref.foo].nest_id,
    //   nested: { baz: b.ref.bar },
    // });
    let { args, ops } = Operation.replaceRefsWithOps(
      c.args,
      refFactory,
      idGenerator()
    );

    expect(args).toEqual({
      foo: "c",
      bar: { __$$SB_GRAPH_OP_ID$$__: "1" },
      nested: { baz: { __$$SB_GRAPH_OP_ID$$__: "3" } },
    });

    expect(ops).toEqual([
      {
        id: "2",
        op_stack: [
          { type: "get", args: { accessor: "attr", key: "foo", op_id: null } },
        ],
        op_graph_edges: [],
        node_graph_edges: [],
        origin_node: "a",
      },
      {
        id: "1",
        op_stack: [
          {
            type: "get",
            args: { accessor: "attr", key: "nested", op_id: null },
          },
          { type: "get", args: { accessor: "item", key: null, op_id: "2" } },
          {
            type: "get",
            args: { accessor: "attr", key: "nest_id", op_id: null },
          },
        ],
        op_graph_edges: [["2", "1"]],
        node_graph_edges: [["a", "b"]],
        origin_node: "b",
      },
      {
        id: "3",
        op_stack: [
          { type: "get", args: { accessor: "attr", key: "bar", op_id: null } },
        ],
        op_graph_edges: [],
        node_graph_edges: [],
        origin_node: "b",
      },
    ]);
  });

  test("graph serialization (include ops, op-id replacement)", () => {
    const g = new Graph(idGenerator()).add(a).add(b).add(c);
    const result = g.toJSON();
    // console.log(JSON.stringify(result))
    expect(result.nodes.length).toEqual(3);
    expect(result.ops.length).toEqual(4);
    expect(result).toMatchSnapshot();
  });

  test("ok", () => {
    expect("ok").toEqual("ok");
  });
});
