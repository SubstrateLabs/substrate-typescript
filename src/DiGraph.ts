type ID = string;

type Node = [id: ID, value: any];

type Edge = [fromId: ID, toId: ID, attributes: Attributes];

type Attributes = Record<string, any>;

/**
 * @internal
 * `DiGraph` implements a directed graph used to internally by `Graph` for constructing Substrate graph executions.
 */
export class DiGraph {
  attributes: Attributes;
  #nodes: Record<Node[0], Node[1]>;
  #edges: Record<Edge[0], Record<Edge[1], Edge[2]>>;

  /**
   * Compose one or more `DiGraph` instances to produce a new `DiGraph` that contains
   * all their nodes and edges.
   */
  static compose(...graphs: DiGraph[]): DiGraph {
    const g = new DiGraph();
    graphs.forEach((graph) => g.addNodes(graph.nodes));
    graphs.forEach((graph) => g.addEdges(graph.edges));

    Object.assign(g.attributes, ...graphs.map(({ attributes }) => attributes));
    return g;
  }

  /**
   * @internal
   * `DiGraph` implements a directed graph used to internally by `Graph` for constructing Substrate graph executions.
   */
  constructor(attributes: Attributes = {}) {
    this.attributes = attributes;

    this.#nodes = {};
    this.#edges = {};
  }

  /**
   * Returns the the Node for a given `nodeId`.
   */
  getNode(nodeId: ID) {
    return this.#nodes[nodeId];
  }

  /**
   * Returns all incoming edges into Node.
   */
  inEdges(nodeId: ID): Edge[] {
    const incoming = [];

    for (const fromNodeId in this.#edges) {
      if (nodeId in this.#edges[fromNodeId]!) {
        const attributes = this.#edges[fromNodeId]![nodeId];
        const edge = [fromNodeId, nodeId, attributes] as Edge;
        incoming.push(edge);
      }
    }

    return incoming;
  }

  /**
   * Returns all outgoing edges from Node.
   */
  outEdges(nodeId: ID): Edge[] {
    const outgoing: Edge[] = [];
    if (!(nodeId in this.#edges)) return outgoing;

    for (const toNodeId in this.#edges[nodeId]) {
      const attributes = this.#edges[nodeId]![toNodeId];
      const edge = [nodeId, toNodeId, attributes] as Edge;
      outgoing.push(edge);
    }

    return outgoing;
  }

  /**
   * Returns all nodes in the `DiGraph`.
   */
  get nodes(): Node[] {
    return Object.keys(this.#nodes).map((nodeId) => {
      return [nodeId, this.#nodes[nodeId]];
    });
  }

  /**
   * Returns all edges in the `DiGraph`.
   */
  get edges(): Edge[] {
    const result: Edge[] = [];

    for (const fromNodeId in this.#edges) {
      for (const toNodeId in this.#edges[fromNodeId]) {
        const attributes = this.#edges[fromNodeId]![toNodeId] || {};
        const edge: Edge = [fromNodeId, toNodeId, attributes];
        result.push(edge);
      }
    }

    return result;
  }

  /**
   * Add a node into the `DiGraph`.
   */
  addNode([nodeId, node]: Node): void {
    if (nodeId in this.#edges) return; // return if already added.

    this.#nodes[nodeId] = node;
    this.#edges[nodeId] = {};
  }

  /**
   * Add a list of nodes into the `DiGraph`.
   */
  addNodes(nodes: Node[]): void {
    nodes.forEach((node) => this.addNode(node));
  }

  /**
   * Add an edge into the `DiGraph`.
   */
  addEdge([fromNodeId, toNodeId, attributes]: Edge): void {
    if (!this.#edges[fromNodeId]) this.#edges[fromNodeId] = {};

    this.#edges[fromNodeId]![toNodeId] = attributes;
  }

  /**
   * Add a list of edges into the `DiGraph`.
   */
  addEdges(edges: Array<Edge>): void {
    edges.forEach((edge) => this.addEdge(edge));
  }

  /**
   * Returns `true` if there is at least one cycle in `DiGraph`.
   */
  hasCycle(): boolean {
    const visited = new Set<ID>();
    const stack = new Set<ID>();

    const dfs = (nodeId: ID): boolean => {
      if (stack.has(nodeId)) return true; // cycle detected
      if (visited.has(nodeId)) return false; // already visited

      visited.add(nodeId);
      stack.add(nodeId);

      for (const neighborId in this.#edges[nodeId]) {
        if (dfs(neighborId)) return true;
      }

      stack.delete(nodeId);
      return false;
    };

    for (const nodeId in this.#nodes) {
      if (dfs(nodeId)) return true;
    }

    return false;
  }

  /**
   * Returns `true` if there are no nodes in the `DiGraph`.
   */
  isEmpty() {
    return Object.keys(this.#nodes).length === 0;
  }

  /**
   * Returns a list of node ids, sorted topologically.
   */
  topologicalSort(): Node[0][] {
    const visited = new Set<Node[0]>();
    const temp = new Set<Node[0]>();
    const result: Node[0][] = [];

    const visit = (node: Node[0]) => {
      if (temp.has(node)) {
        throw new Error("Graph is not a DAG - it has at least one cycle");
      }
      if (!visited.has(node)) {
        temp.add(node);
        if (this.#edges[node]) {
          for (const neighbor of Object.keys(this.#edges[node]!)) {
            visit(neighbor as Node[0]);
          }
        }
        temp.delete(node);
        visited.add(node);
        result.unshift(node); // Add to the beginning of the list
      }
    };

    for (const node of Object.keys(this.#nodes)) {
      if (!visited.has(node)) {
        visit(node as Node[0]);
      }
    }

    return result;
  }
}
