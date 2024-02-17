import { DiGraph } from "substrate/DiGraph";
import * as Schema from "substrate/API/Schema";
import { SubstrateError } from "substrate/Error";
import { AdapterCode } from "substrate/AdapterCode";

/**
 * `Graph` is used to construct computation graphs to execute on the Substrate platform.
 *
 * It contains `Node` instances that are connected via an `Edge`. Each `Node` performs some type of
 *
 * A valid `Graph` is a non-empty **directed graph** (eg. contains no cycles).
 */
export class Graph implements Graph.SubstrateGraph {
  /**
   * `initialArgs` are used as initial inputs for root nodes in the graph.
   */
  initialArgs: Graph.InitialArgs;
  /**
   * Internal directed graph structure
   * @internal
   */
  graph: DiGraph;

  /**
   * Returns a new graph that combines all provided graphs.
   */
  static compose(...graphs: [Graph, ...Graph[]]): Graph {
    graphs.forEach((g) => {
      const result = Schema.GraphSchema.safeParse(g);
      if (!result.success)
        console.log("[warn] Possibly incompatible Graph:", g);
    });

    const initialArgs = Object.assign({}, ...graphs.map((g) => g.initialArgs));
    const dag = DiGraph.compose(...graphs.map((graph) => graph.graph));
    return new Graph(initialArgs, dag);
  }

  constructor(
    initialArgs: Graph.InitialArgs = {},
    DAG: DiGraph = new DiGraph()
  ) {
    if (!(DAG instanceof DiGraph)) {
      throw new TypeError(`Expected DiGraph, got ${DAG}`);
    }

    this.graph = DAG;
    this.initialArgs = initialArgs;
  }

  /**
   * Returns a new Graph that includes provided node.
   */
  withNode(node: Graph.SubstrateNode): Graph {
    const result = Schema.NodeSchema.safeParse(node);
    if (!result.success)
      console.warn("[warn] Possibly incompatible Node:", node);

    const g = DiGraph.compose(this.graph);
    g.addNode([node.id as string, node]);
    return new Graph(this.initialArgs, g);
  }

  /**
   * Returns a new graph that includes provided edge.
   */
  withEdge([from, to, data = {}]: Graph.NewSubstrateEdge): Graph {
    const adapter = AdapterCode.tryParse(data);
    const edgeData = adapter ? { adapter } : data;

    const result = Schema.EdgeSchema.safeParse([from, to, edgeData]);
    if (!result.success)
      console.warn("[warn] Possibly incompatible Edge:", [from, to, edgeData]);

    const g = DiGraph.compose(this.graph);
    g.addNode([from.id as string, from]);
    g.addNode([to.id as string, to]);
    g.addEdge([from.id as string, to.id as string, edgeData]);
    return new Graph(this.initialArgs, g);
  }

  /**
   * Returns a new graph that includes provided edges.
   */
  withEdges(edges: Graph.NewSubstrateEdge[]): Graph {
    return edges.reduce((graph, edge, _1, _2) => {
      return graph.withEdge(edge);
    }, this as Graph);
  }

  /**
   * Returns the number of nodes in the graph.
   */
  nodeCount() {
    return this.graph.nodes.length;
  }

  /**
   * Returns the number of edges in the graph.
   */
  edgeCount() {
    return this.graph.edges.length;
  }

  get nodes(): Graph.SubstrateNode[] {
    return this.graph.nodes.map(([_nodeId, node]) => node);
  }

  get edges(): Graph.EdgeIds[] {
    return this.graph.edges;
  }

  get initial_args(): Graph.InitialArgs {
    return this.initialArgs;
  }

  validate() {
    if (this.graph.isEmpty()) {
      throw new SubstrateError("Graph is empty");
    }
    if (this.graph.hasCycle()) {
      throw new SubstrateError("Graph contains a cycle");
    }
  }

  toJSON(): Graph.SubstrateGraph {
    const json = {
      nodes: this.nodes,
      edges: this.edges,
      initial_args: this.initial_args,
    };

    const result = Schema.GraphSchema.safeParse(json);
    if (!result.success)
      console.warn("[warn] Possibly incompatible Graph", json);

    return json;
  }
}

export namespace Graph {
  /**
   * `SubstrateGraph` is the structure that the Substrate Graph API accepts.
   */
  export type SubstrateGraph = Schema.Graph;

  /**
   * `InitialArgs` may be supplied to the `Graph` which are used as initial inputs for root nodes when they are executed.
   */
  export type InitialArgs = Record<string, any>;

  /**
   * `SubstrateNode` represents a vertex within the `Graph` and typically map to a node running a ML model or transformation function.
   */
  export type SubstrateNode = Schema.Node;

  /**
   * `SubstrateEdge` represents the connection between two `Node` items.
   */
  export type SubstrateEdge = Schema.Edge;
  /**
   * `NewSubstrateEdge` represents a new connection between two `Node` items. They are directed from left to right and may also contain `Attributes`.
   */
  export type NewSubstrateEdge = [
    Graph.SubstrateNode,
    Graph.SubstrateNode,
    Function | {},
  ];

  /**
   * `EdgeIds` represents the connection between two `Node` items by `Id`. They are directed from left to right and may also contain `Attributes`.
   */
  export type EdgeIds = Schema.EdgeIds; // NOTE: imo this could use a better name
}
