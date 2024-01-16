import { expect, describe, test } from "vitest";
import { randId } from "./exploreHelpers";
import { DiGraph } from "substrate/DiGraph";

class Graph {
  initialArgs: Object;
  graph: DiGraph;

  static compose(...graphs: [Graph, ...Graph[]]): Graph {
    const initialArgs = Object.assign({}, ...graphs.map((g) => g.initialArgs));
    const dag = DiGraph.compose(...graphs.map((graph) => graph.graph));
    return new Graph(initialArgs, dag);
  }

  constructor(initialArgs: Object = {}, DAG: DiGraph = new DiGraph()) {
    this.graph = DAG;
    this.initialArgs = initialArgs;
  }

  add(node: ModelNode): Graph {
    this.graph.addNode([node.id, node]);

    const adj = { [node.id]: {} };

    // search through the Node.Input and find all the dependencies.
    function search(o: Object, toNodeId: ModelNode["id"]) {
      if ("$op" in o) {
        console.log("[Op]", o.$op);
        switch (o.$op) {
          case "OutputSelector": {
            // @ts-expect-error
            adj[node.id][o.args.node_id] = 1;
            return;
          }
          case "Attribute": {
            // @ts-expect-error
            search(o.args.data, toNodeId);
            return;
          }
          case "Index": {
            // @ts-expect-error
            search(o.args.data, toNodeId);
            return;
          }
        }
      } else {
        for (const [_k, v] of Object.entries(o)) {
          if (Array.isArray(v)) {
            for (const item in v) {
              search(item, toNodeId);
            }
          } else if (v instanceof Ref) {
            // @ts-expect-error
            const up = v.$unproxy;
            // console.log("[Ref]", "k=", k, "v=", up);
            search(up, toNodeId);
          } else {
            // console.log("[Else]", "k=", k, "v=", v);
          }
        }
      }
    }

    search(node.input, node.id);
    console.log("[Found Edges]", adj);

    return this;
  }

  get nodes() {
    return this.graph.nodes.map(([_nodeId, node]) => node);
  }

  get edges() {
    return this.graph.edges;
  }

  toJSON() {
    return {
      nodes: this.nodes,
      edges: this.edges,
    };
  }
}
namespace Graph {
  export type Node = { id: Id; input: Object };
}

type Id = string;
// const RefTable: Record<Id, any> = {
//   // NodeId -> NodeOutput
// };

// some generated type??
type Proxied<T> = { Proxied: 1 } & T;

abstract class Ref {}

// const zoo = ModelA()
// const foo = ModelA()
// const bar = ModelB({ baz: [{prompt: F.concat("asdf", foo.boo[zoo.myzooidx]) }, { prompts: foo.blah.map(f => f.bar[0] ) }, { prompt: 'static' } ], boo: 1,  })
//
//
// type Op = Attribute | Index | Static | Concat | ...;
//
// type Static = {
//   op: "static",
//   args: {
//     data: any;
//   }
// }
//
// type Attribute = {
//   op: "attribute";
//   args: {
//     key: Op;
//   }
// }
// type Index = {
//   op: "index";
//   args: {
//     key: Op;
//   }
// }
//
// type Concat = {
//   op: "concat";
//   args: {
//     left: Op,
//     right: Op,
//   }
// }
//
//
// edge = {
//   foo.id,
//   bar.id,
//   {
//     args: [
//       {
//         source: [{ key: "boo", op: "attribute" }, {key: 0, op: "index" } ],
//         target: [{ key: "baz", op: "attribute" }, {key: 0, op: "index" }, {key: "prompt", op: "attribute" }]
//       },
//       {
//         source: [{ key: "blah", op: "attribute" }],
//         target: [{ key: "baz", op: "attribute" }, {key: 1, op: "index" }, {key: "prompt", op: "attribute" }]
//       },
//       {
//         source: [{ op: "static", data: "static" }],
//         target: [{ key: "baz", op: "attribute" }, {key: 2, op: "index" }, {key: "prompt", op: "attribute" }]
//       },
//       {
//         source: [{ op: "static", data: 1 }],
//         target: [{ key: "boo", op: "attribute" }]
//       },
//     ]
//   }
// }

class ModelNode implements ModelNode.Node {
  id: Id;
  input: ModelNode.Input;
  class = "ModelNode" as const;

  constructor(input: ModelNode.Input, id: string = randId()) {
    this.id = id;
    this.input = input;
  }

  run(input: ModelNode.ResolvedInput): ModelNode.Output {
    return {
      a: {
        b: [input.x, input.x],
        c: input.x.length,
      },
    };
  }

  get $ref() {
    return OutputSelector.create<ModelNode.Output>({ node_id: this.id });
  }
}
namespace ModelNode {
  export type Input = { x: Op.Op | string; y: Op.Op | string };
  export type ResolvedInput = { x: string; y: string };
  export type Output = {
    a: {
      b: string[];
      c: number;
    };
  };
  export type Node = {
    id: string;
    input: Input;
  };
}

class OutputSelector extends Ref implements Op.OutputSelector {
  $op = "OutputSelector" as const;
  args: Op.OutputSelector["args"];
  op: Op.Op;

  constructor(args: Op.OutputSelector["args"]) {
    super();
    this.args = args;
    this.op = this;
  }

  static create<T>(args: Op.OutputSelector["args"]) {
    const ref = new OutputSelector(args);
    return new Proxy(ref, {
      get(target: any, prop: any, receiver: any) {
        // we need a way to magically get the inner target and break out of this
        // infinite proxy
        if (prop === "$unproxy") return target.op;

        if (typeof prop === "symbol") {
          // console.log("[prop]", target)
          console.log("[prop]", prop)
          // console.log("[prop]", receiver);
        }

        const propInt = parseInt(prop);
        const isArrayIndexing = !isNaN(propInt);
        // const nextPathItem = isArrayIndexing ? `[${propInt}]` : prop;
        // const maybeDot =
        //   target.args.path.length > 0 && !isArrayIndexing ? "." : "";
        // target.args.path = target.args.path + maybeDot + nextPathItem;

        if (isArrayIndexing) {
          target.op = new Index({
            key: propInt,
            data: target.op,
          });
        } else {
          target.op = new Attribute({
            key: prop,
            data: target.op,
          });
        }

        return receiver;
      },
    }) as Proxied<T>;
  }

  toJSON() {
    return {
      $op: this.$op,
      args: this.args,
    };
  }
}

class Attribute implements Op.Attribute {
  $op = "Attribute" as const;
  args: Op.Attribute["args"];
  constructor(args: Op.Attribute["args"]) {
    this.args = args;
  }

  toJSON() {
    return {
      $op: this.$op,
      args: this.args,
    };
  }
}

class Index implements Op.Index {
  $op = "Index" as const;
  args: Op.Index["args"];
  constructor(args: Op.Index["args"]) {
    this.args = args;
  }

  toJSON() {
    return {
      $op: this.$op,
      args: this.args,
    };
  }
}

namespace Op {
  export type Op = OutputSelector | Attribute | Index;

  export type OutputSelector = {
    $op: "OutputSelector";
    args: {
      node_id: ModelNode["id"];
    };
  };

  export type Attribute = {
    $op: "Attribute";
    args: {
      key: string;
      data: unknown[] | Op;
    };
  };

  export type Index = {
    $op: "Index";
    args: {
      key: number;
      data: unknown[] | Op;
    };
  };
}
//  {
//   "$op": "Index",
//   "args": {
//     "key": 0,
//     "data": {
//       "$op": "Attribute",
//       "args": {
//         "key": "b",
//         "data": {
//           "$op": "Attribute",
//           "args": {
//             "key": "a",
//             "data": {
//               "$op": "OutputSelector",
//               "args": {
//                 "node_id": "a"
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
describe("Explore", () => {
  test("Basic output access", () => {
    const a = new ModelNode({ x: "hello", y: "" }, "a");
    console.log(a);
    const b = new ModelNode({ x: "1", y: "2" }, "b");
    // @ts-expect-error
    const ref = a.$ref.a.b[b.$ref.c].$unproxy;

    console.log(JSON.stringify(ref, {}, 2));
  });

  // test("Basic ref as input", () => {
  //   const a = new ModelNode({ x: "hello" }, "a");
  //   const ref = a.$ref.a.b[0]!;
  //   const b = new ModelNode({ x: ref }, "b");
  //   console.log(ref.$unproxy);
  // });

  // test("Basic ref as input added to a graph", () => {
  //   const a = new ModelNode({ x: "hello", y: "" }, "a");
  //   const ref = a.$ref.a.b[0]!;
  //   const b = new ModelNode({ x: ref, y: "" }, "b");
  //   const ref2 = b.$ref.a.b[0]!;
  //   const c = new ModelNode({ x: ref, y: ref2 }, "c");
  //
  //   const g = new Graph().add(c);
  //   console.log(g.toJSON());
  // });

  test("ok", () => {
    expect("ok").toEqual("ok");
  });
});
