import { vi, afterEach, expect, describe, test } from "vitest";
import { Graph } from "substrate/Graph";
import { BaseNode as Node } from "substrate/BaseNode";

describe("Graph", () => {
  const warnMock = vi.spyOn(console, "warn").mockImplementation(() => {});

  afterEach(() => {
    warnMock.mockReset();
  });


  describe(".withNode", () => {
    test("returns a new graph that incldues the node", () => {
      const n = new Node();
      const g = new Graph().withNode(n);
      expect(g.nodes).toContain(n);
    });
  });

  describe(".withEdge", () => {
    test("returns a new graph that incldues the nodes and edges", () => {
      const a = new Node({ id: "a" });
      const b = new Node({ id: "b" });
      const g = new Graph().withEdge([a, b, {}]);
      expect(g.nodes).toEqual([a, b]);
      expect(g.edges).toEqual([["a", "b", {}]]);
    });

    describe("edge with code", () => {
      test("functions are encoded as `AdapterCode`", () => {
        const a = new Node({ id: "a" });
        const b = new Node({ id: "b" });
        const c = new Node({ id: "c" });

        const f = function (x: Node.Output) {
          return { y: x };
        };

        const g = new Graph().withEdge([a, b, f]).withEdge([
          b,
          c,
          function (x: Node.Output): Node.Input {
            return { y: x };
          },
        ]);

        // NOTE: we're matching on snapshots here because the exact whitespace/indentation
        // of the toString() result of the functions can change as the code is reformatted.
        expect(g.edges).toMatchSnapshot();
      });

      test("arrow functions are encoded as `AdapterCode`", () => {
        const a = new Node({ id: "a" });
        const b = new Node({ id: "b" });
        const c = new Node({ id: "c" });

        const f = (x: Node.Output): Node.Input => ({ y: x });

        const g = new Graph()
          .withEdge([a, b, f])
          .withEdge([b, c, (x: Node.Output): Node.Input => ({ y: x })]);

        // NOTE: we're matching on snapshots here because the exact whitespace/indentation
        // of the toString() result of the functions can change as the code is reformatted.
        expect(g.edges).toMatchSnapshot();
      });
    });
  });

  describe(".withEdges", () => {
    test("returns a new graph that incldues the nodes and edges", () => {
      const a = new Node({ id: "a" });
      const b = new Node({ id: "b" });
      const c = new Node({ id: "c" });
      const g = new Graph().withEdges([
        [a, b, {}],
        [b, c, {}],
      ]);
      expect(g.nodes).toEqual([a, b, c]);
      expect(g.edges).toEqual([
        ["a", "b", {}],
        ["b", "c", {}],
      ]);
    });
  });

  describe("examples", () => {
    test("can build linear graphs", () => {
      // a --> b
      // b --> c
      // c --> d
      const a = new Node({ id: "a" });
      const b = new Node({ id: "b" });
      const c = new Node({ id: "c" });
      const d = new Node({ id: "d" });

      const g = new Graph()
        .withEdge([a, b, {}])
        .withEdge([b, c, {}])
        .withEdge([c, d, {}]);

      expect(g.nodeCount()).toEqual(4);
      expect(g.edgeCount()).toEqual(3);
      expect(() => g.toJSON()).not.toThrow();

      const g2 = new Graph().withEdges([
        [a, b, {}],
        [b, c, {}],
        [c, d, {}],
      ]);

      expect(g2.nodeCount()).toEqual(4);
      expect(g2.edgeCount()).toEqual(3);
      expect(() => g2.toJSON()).not.toThrow();
    });

    test("can build graphs with multiple leafs", () => {
      // a --> b
      // b --> c
      // b --> d
      const a = new Node({ id: "a" });
      const b = new Node({ id: "b" });
      const c = new Node({ id: "c" });
      const d = new Node({ id: "d" });

      const g = new Graph()
        .withEdge([a, b, {}])
        .withEdge([b, c, {}])
        .withEdge([b, d, {}]);

      expect(g.nodeCount()).toEqual(4);
      expect(g.edgeCount()).toEqual(3);
      expect(() => g.toJSON()).not.toThrow();

      const g2 = new Graph().withEdges([
        [a, b, {}],
        [b, c, {}],
        [b, d, {}],
      ]);

      expect(g2.nodeCount()).toEqual(4);
      expect(g2.edgeCount()).toEqual(3);
      expect(() => g2.toJSON()).not.toThrow();
    });

    test("can build disconnected graphs", () => {
      // a --> b
      // c --> d
      const a = new Node({ id: "a" });
      const b = new Node({ id: "b" });
      const c = new Node({ id: "c" });
      const d = new Node({ id: "d" });

      const g = new Graph().withEdge([a, b, {}]).withEdge([c, d, {}]);

      expect(g.nodeCount()).toEqual(4);
      expect(g.edgeCount()).toEqual(2);
      expect(() => g.toJSON()).not.toThrow();

      const g2 = new Graph().withEdges([
        [a, b, {}],
        [c, d, {}],
      ]);

      expect(g2.nodeCount()).toEqual(4);
      expect(g2.edgeCount()).toEqual(2);
      expect(() => g2.toJSON()).not.toThrow();
    });

    test("can build branching graphs", () => {
      // a --> b
      // a --> c
      // b --> d
      // c --> d
      // d --> e
      const a = new Node({ id: "a" });
      const b = new Node({ id: "b" });
      const c = new Node({ id: "c" });
      const d = new Node({ id: "d" });
      const e = new Node({ id: "e" });

      const g = new Graph()
        .withEdge([a, b, {}])
        .withEdge([a, c, {}])
        .withEdge([b, d, {}])
        .withEdge([c, e, {}])
        .withEdge([d, e, {}]);

      expect(g.nodeCount()).toEqual(5);
      expect(g.edgeCount()).toEqual(5);
      expect(() => g.toJSON()).not.toThrow();

      const g2 = new Graph().withEdges([
        [a, b, {}],
        [a, c, {}],
        [b, d, {}],
        [c, e, {}],
        [d, e, {}],
      ]);

      expect(g2.nodeCount()).toEqual(5);
      expect(g2.edgeCount()).toEqual(5);
      expect(() => g2.toJSON()).not.toThrow();
    });
  });

  describe("serializing the graph (toJSON)", () => {
    test("when you have provided un specified properties in the graph, they are still serialized", () => {
      // we would like to allow the SDK to be permissive in such a way that a user that is on
      // an older version of this library may override the types specified in the API (via the version of the OpenAPI spec
      // the library is generated with) so that a user can use properties that may be valid, but not contained in
      // an older version. this may be the case if the user for whatever can not or will not update their version of the
      // SDK library.

      const a = new Node().setArgs({ a: 1, b: 2 });
      const b = new Node().setArgs({ c: 1, d: 2 });
      const g = new Graph().withEdge([a, b, { something: "unknown" }]);
      const graphJSON = g.toJSON();

      expect(graphJSON.nodes[0]!.args).toEqual({ a: 1, b: 2 });
      expect(graphJSON.edges[0]![2]).toEqual({ something: "unknown" });
      expect(warnMock).toHaveBeenCalled();
    });
  });
});
