import { expect, describe, test } from "vitest";
import { DiGraph } from "substrate/DiGraph";

describe("Digraph", () => {
  describe("getNode", () => {
    test("return Node if when there is one", () => {
      const g = new DiGraph();
      const node = {};
      g.addNode(["a", node]);
      const result = g.getNode("a");
      expect(result).toBe(node);
    });

    test("return undefinted if when there is not", () => {
      const g = new DiGraph();
      const result = g.getNode("a");
      expect(result).toBeUndefined();
    });
  });

  describe("inEdges", () => {
    test("returns incoming edges for Node when there are some", () => {
      const g = new DiGraph();

      g.addNode(["a", {}]);
      g.addNode(["b", {}]);
      g.addNode(["c", {}]);
      g.addEdge(["a", "c", {}]);
      g.addEdge(["b", "c", {}]);

      const result = g.inEdges("c");
      expect(result).toEqual([
        ["a", "c", {}],
        ["b", "c", {}],
      ]);
    });
  });

  describe("outEdges", () => {
    test("returns outgoing edges for Node when there are some", () => {
      const g = new DiGraph();

      g.addNode(["a", {}]);
      g.addNode(["b", {}]);
      g.addNode(["c", {}]);
      g.addEdge(["a", "b", {}]);
      g.addEdge(["a", "c", {}]);

      const result = g.outEdges("a");
      expect(result).toEqual([
        ["a", "b", {}],
        ["a", "c", {}],
      ]);
    });
  });

  describe("hasCycle", () => {
    test("returns true when there is a cycle", () => {
      const g = new DiGraph();

      g.addNode(["a", {}]);
      g.addNode(["b", {}]);
      g.addEdge(["a", "b", {}]);
      g.addEdge(["b", "a", {}]);

      const result = g.hasCycle();
      expect(result).toBe(true);
    });

    test("returns false when there is not a cycle", () => {
      const g = new DiGraph();

      g.addNode(["a", {}]);
      g.addNode(["b", {}]);
      g.addEdge(["a", "b", {}]);

      const result = g.hasCycle();
      expect(result).toBe(false);
    });
  });

  describe("isEmpty", () => {
    test("returns true when there are no nodes in the graph", () => {
      const g = new DiGraph();

      const result = g.isEmpty();
      expect(result).toBe(true);
    });

    test("returns false there are nodes in the graph", () => {
      const g = new DiGraph();

      g.addNode(["a", {}]);

      const result = g.isEmpty();
      expect(result).toBe(false);
    });
  });

  describe("topologicalSort", () => {
    test("returns node ids in order when DAG is connected", () => {
      const g = new DiGraph();

      g.addNode(["a", {}]);
      g.addNode(["b", {}]);
      g.addNode(["c", {}]);
      g.addNode(["d", {}]);
      g.addNode(["e", {}]);

      g.addEdge(["a", "c", {}]);
      g.addEdge(["a", "b", {}]);
      g.addEdge(["b", "d", {}]);
      g.addEdge(["c", "d", {}]);
      g.addEdge(["d", "e", {}]);

      const result = g.topologicalSort();
      expect(result).toEqual(["a", "b", "c", "d", "e"]);
    });

    test("returns node ids in order when DAG is disconnected", () => {
      const g = new DiGraph();

      g.addNode(["a", {}]);
      g.addNode(["b", {}]);
      g.addNode(["c", {}]);
      g.addNode(["d", {}]);

      g.addEdge(["a", "b", {}]);
      g.addEdge(["c", "d", {}]);

      const result = g.topologicalSort();
      expect(result).toEqual(["c", "d", "a", "b"]);
    });

    test("raises an error when graph is not a DAG", () => {
      const g = new DiGraph();

      g.addNode(["a", {}]);
      g.addNode(["b", {}]);
      g.addEdge(["a", "b", {}]);
      g.addEdge(["b", "a", {}]);

      expect(() => g.topologicalSort()).toThrowError(/Graph is not a DAG/);
    });
  });

  describe("edges", () => {
    test("returns an empty array when there are none", () => {
      const g = new DiGraph();

      g.addNode(["a", {}]);
      g.addNode(["b", {}]);

      const result = g.edges;
      expect(result).toEqual([]);
    });

    test("returns all the edges when there are some", () => {
      const g = new DiGraph();

      g.addNode(["a", {}]);
      g.addNode(["b", {}]);
      g.addNode(["c", {}]);
      g.addNode(["d", {}]);

      g.addEdge(["a", "b", {}]);
      g.addEdge(["c", "d", {}]);

      const result = g.edges;
      expect(result).toEqual([
        ["a", "b", {}],
        ["c", "d", {}],
      ]);
    });
  });
});
