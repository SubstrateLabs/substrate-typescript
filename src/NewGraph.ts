import { DiGraph } from "substrate/DiGraph";
import * as Operation from "substrate/Operation";
import * as Refs from "substrate/Refs";

type NodeLike = { id: string; args: Object };

const refFactory = Refs.makeFactory();

// simplified graph for demo
export class NewGraph {
  newId: any;
  graph: DiGraph;

  // do we need this to be a generator?
  idGenerator = (start: number = 1) => {
    let n = start;
    return () => {
      const id = n.toString();
      n = n + 1;
      return id;
    };
  };

  constructor(DAG: DiGraph = new DiGraph()) {
    this.newId = this.idGenerator();
    this.graph = DAG;
  }

  add(node: NodeLike): NewGraph {
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
        console.log("node", node);
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
