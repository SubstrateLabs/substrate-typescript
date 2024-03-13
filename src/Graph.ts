import { DiGraph } from "substrate/DiGraph";
import * as Future from "substrate/Future";
import * as Refs from "substrate/Refs";
import { idGenerator } from "substrate/idGenerator";

export type NodeLike = { id: string; args: Object };

const refFactory = Refs.makeFactory();

export class Graph {
  newFutureId: any;
  graph: DiGraph;

  constructor(DAG: DiGraph = new DiGraph()) {
    this.newFutureId = idGenerator("future");
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
        const { args, futures } = Future.replaceRefsWithFutures(
          node.args,
          refFactory,
          this.newFutureId,
        );

        return {
          nodes: [...acc.nodes, { ...node.toJSON(), args }],
          futures: [...acc.futures, ...futures],
        };
      },
      { nodes: [], futures: [] },
    );
    res.edges = this.edges;
    res.initial_args = {}; // TODO: think about how/whether to expose initial_args
    return res;
  }
}
