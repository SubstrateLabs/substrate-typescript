import { DiGraph } from "substrate/DiGraph";
import * as Operation from "substrate/Operation";
import * as Refs from "substrate/Refs";

type NodeLike = { id: string; args: Object };

const refFactory = Refs.makeFactory();

export class Graph {
  newOpId: any;
  graph: DiGraph;

  // Generate incrementing ids for debugging legibility
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

  add(node: NodeLike): Graph {
    this.graph.addNode([node.id, node]);
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
          this.newOpId,
        );

        return {
          nodes: [...acc.nodes, { ...node.toJSON(), args }],
          ops: [...acc.ops, ...ops],
        };
      },
      { nodes: [], ops: [] },
    );
    res.edges = this.edges;
    res.initial_args = {}; // TODO
    return res;
  }
}
