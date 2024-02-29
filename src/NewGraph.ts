import { DiGraph } from "substrate/DiGraph";
import * as Operation from "substrate/Operation";
import * as Refs from "substrate/Refs";

type NodeLike = { id: string; args: Object };

const refFactory = Refs.makeFactory();

// simplified graph for demo
export class NewGraph {
  newOpId: any;
  graph: DiGraph;

  // I think this is mostly for debugging legibility
  opIdGenerator = (start: number = 1) => {
    let n = start;
    return () => {
      const id = "op_" + n.toString();
      n = n + 1;
      return id;
    };
  };

  constructor(DAG: DiGraph = new DiGraph()) {
    this.newOpId = this.opIdGenerator();
    this.graph = DAG;
  }

  add(node: NodeLike): NewGraph {
    this.graph.addNode([node.id, node]);

    const { ops } = Operation.replaceRefsWithOps(
      node.args,
      refFactory,
      this.newOpId
    );
    ops.forEach((op) => {
      this.graph.addEdge([op.origin_node_id, node.id, {}]);
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
    let res: any = this.nodes.reduce(
      (acc, node) => {
        const { args, ops } = Operation.replaceRefsWithOps(
          node.args,
          refFactory,
          this.newOpId
        );

        return {
          nodes: [...acc.nodes, { ...node.toJSON(), args }],
          ops: [...acc.ops, ...ops],
        };
      },
      { nodes: [], ops: [] }
    );
    res.edges = this.edges;
    res.initial_args = {}; // TODO
    return res;
  }
}
