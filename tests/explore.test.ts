import { expect, describe, test } from "vitest";
import { randId, toMermaid } from "./exploreHelpers";
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

    let refs: any[] = [];

    function search(o: Object) {
      for (const key in o) {
        // @ts-expect-error
        const value = o[key];
        if (Array.isArray(value)) {
          // handle array.
          const others = [];
          for (const item of value) {
            if (item instanceof Ref) {
              // @ts-expect-error
              refs.push(item.$unproxy);
            } else {
              others.push(item);
            }
            // @ts-expect-error
            o[key] = others;
          }
        } else if (typeof value === "object") {
          if (value instanceof Ref) {
            // @ts-expect-error
            refs.push(value.$unproxy);
            // delete key in object
            // @ts-expect-error;
            delete o[key];
            return; // stop searching.
          }
          search(value);
        }
      }
    }
    search(node.args);

    for (const ref of refs) {
      this.add(ref);
      this.graph.addEdge([ref.node.id, ref.id, {}]);
      this.graph.addEdge([ref.id, node.id, {}]);
    }

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
  export type Node = { id: Id; args: Object };
}

type Id = string;
// const RefTable: Record<Id, any> = {
//   // NodeId -> NodeOutput
// };

// some generated type??
type Proxied<T> = { Proxied: 1 } & T;

abstract class Ref {}

// OutputRef is a Node that represents selecting a value at a specific `Path` in a Node's Output.
class OutputSelector extends Ref implements OutputSelector.Node {
  id: Id;
  #node: Graph.Node;
  args: OutputSelector.Args;
  class = "OutputSelector" as const;

  constructor(args: OutputSelector.Args, node: Graph.Node, id: Id = randId()) {
    super();
    this.id = id;
    this.#node = node;
    this.args = args;
  }

  get node() {
    return this.#node;
  }

  static create<T>(node: Graph.Node, id: Id = randId()) {
    const ref = new OutputSelector({ path: "" }, node, id);
    return new Proxy(ref, {
      get(target: any, prop: any, receiver: any) {
        // we need a way to magically get the inner target and break out of this
        // infinite proxy
        if (prop === "$unproxy") return target;

        const propInt = parseInt(prop);
        const isArrayIndexing = !isNaN(propInt);
        const nextPathItem = isArrayIndexing ? `[${propInt}]` : prop;
        const maybeDot =
          target.args.path.length > 0 && !isArrayIndexing ? "." : "";
        target.args.path = target.args.path + maybeDot + nextPathItem;
        return receiver;
      },
    }) as Proxied<T>;
  }
}

namespace OutputSelector {
  export type Input = { path: string };
  export type Output = any;
  export type Args = Partial<Input>;
  export type Node = {
    id: string;
    args: Args;
  };
}

class ModelNode implements ModelNode.Node {
  id: Id;
  args: ModelNode.Args;
  class = "ModelNode" as const;

  constructor(args: ModelNode.Args = {}, id: string = randId()) {
    this.id = id;
    this.args = args;
  }

  run({ x }: ModelNode.Input) {
    const result = x + x;
    return {
      a: {
        b: [result],
        c: result.length,
      },
    };
  }

  get $output() {
    return OutputSelector.create<ModelNode.Output>(this);
  }
}
namespace ModelNode {
  export type Input = { x: string };
  export type Output = {
    a: {
      b: string[];
      c: number;
    };
  };
  export type Args = Partial<{ x: string | Ref }>;
  export type Node = {
    id: string;
    args: Args;
  };
}

describe("Explore", () => {
  // test("Basic output access", () => {
  //   const a = new ModelNode({ x: "hello" }, "a");
  //   console.log(a);
  //   const ref = a.$output.a.b[0];
  //   // console.log(ref);
  //   // console.log(ref);
  //   // console.log(ref);
  // });

  // class F {
  //   static concat(a: any, b: any): any {
  //     return;
  //   }
  // }
  test("Graph using Node A's output is an input for Node B", () => {
    const a = new ModelNode({ x: "hello" }, "a");
    const b = new ModelNode({ x: a.$output.a.b[0] }, "b");
    const c = new ModelNode({ x: a.$output.a.b[0] }, "c");

    // console.log(a);
    // console.log(b);

    const g = new Graph().add(a).add(b).add(c);

    console.log(toMermaid(g));

    console.log(g.nodes);
    console.log(g.edges);
  });

  // test("returns a new graph that incldues the node", () => {
  //   // console.log(m.$output.nested.numbers[123]);
  //   // expect(1).toEqual(2);
  //   // expect(m.$output.hello).toEqual({ t: "OutputRef", id: "123", "state": ["hello"] });
  //   // expect(m.$output.jokes).toEqual({ t: "OutputRef", id: "123", "state": ["hello"] });
  //   // expect(m.$output.nested.numbers).toEqual({ t: "OutputRef", id: "123", "state": ["nested", "numbers"] });
  //   // expect(m.$output.nested.numbers[0]).toEqual({ t: "OutputRef", id: "123", "state": ["nested", "numbers"] });
  // });

  test("ok", () => {
    expect("ok").toEqual("ok");
  });







  // test("proxying", () => {
  //   class Item {
  //     path: string;
  //     constructor(path: string = "") {
  //       this.path = path;
  //     }
  //
  //     static create() {
  //       return new Proxy(new Item(), {
  //         get(target: any, prop: any, receiver: any) {
  //           if (prop === "$deref") return target;
  //           const propInt = parseInt(prop);
  //           const isArrayIndexing = !isNaN(propInt);
  //           const nextPathItem = isArrayIndexing ? `[${propInt}]` : prop;
  //           const maybeDot =
  //             target.path.length > 0 && !isArrayIndexing ? "." : "";
  //           target.path = target.path + maybeDot + nextPathItem;
  //           return receiver;
  //         },
  //       });
  //     }
  //
  //     hello() {
  //       return "hello mate"
  //     }
  //   }
  //
  //   const i = Item.create();
  //   console.log(i.a.b.c.d[1].$deref.hello());
  // });
});
