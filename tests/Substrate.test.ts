import { expect, describe, test } from "vitest";
import { Substrate } from "substrate/Substrate";
import { Node } from "substrate/Node";
import { sb } from "substrate/sb";

class FooNode extends Node {}

describe("Substrate", () => {
  describe(".serialize", () => {
    test("when there are nodes and futures", () => {
      const a = new FooNode({ a: 123 }, { id: "a" });
      const b = new FooNode(
        { b: a.future.get("x"), c: sb.concat("x", "y") },
        { id: "b" },
      );

      const result = Substrate.serialize(a, b);

      expect(result).toEqual({
        edges: [],
        initial_args: {},
        nodes: [
          {
            node: "FooNode",
            id: a.id,
            args: {
              a: 123,
            },
            _should_output_globally: true,
          },
          {
            node: "FooNode",
            id: b.id,
            args: {
              b: {
                __$$SB_GRAPH_OP_ID$$__: expect.stringMatching(/future/),
              },
              c: {
                __$$SB_GRAPH_OP_ID$$__: expect.stringMatching(/future/),
              },
            },
            _should_output_globally: true,
          },
        ],
        futures: [
          {
            id: expect.stringMatching(/future/),
            directive: {
              type: "trace",
              op_stack: [
                {
                  future_id: null,
                  key: "x",
                  accessor: "attr",
                },
              ],
              origin_node_id: a.id,
            },
          },
          {
            id: expect.stringMatching(/future/),
            directive: {
              type: "string-concat",
              items: [
                {
                  future_id: null,
                  val: "x",
                },
                {
                  future_id: null,
                  val: "y",
                },
              ],
            },
          },
        ],
      });
    });

    test("when there are nodes and futures, but we only supply the 'final' node", () => {
      const a = new FooNode({ a: 123 });
      const b = new FooNode({ b: a.future.get("x"), c: sb.concat("x", "y") });

      // Here we're only supplying `b` and relying on the graph-serialiation to find `a`
      const result = Substrate.serialize(b);

      expect(result).toEqual({
        edges: [],
        initial_args: {},
        nodes: [
          {
            node: "FooNode",
            id: b.id,
            args: {
              b: {
                __$$SB_GRAPH_OP_ID$$__: expect.stringMatching(/future/),
              },
              c: {
                __$$SB_GRAPH_OP_ID$$__: expect.stringMatching(/future/),
              },
            },
            _should_output_globally: true,
          },
          {
            node: "FooNode",
            id: a.id,
            args: {
              a: 123,
            },
            _should_output_globally: true,
          },
        ],
        futures: [
          {
            id: expect.stringMatching(/future/),
            directive: {
              type: "trace",
              op_stack: [
                {
                  future_id: null,
                  key: "x",
                  accessor: "attr",
                },
              ],
              origin_node_id: a.id,
            },
          },
          {
            id: expect.stringMatching(/future/),
            directive: {
              type: "string-concat",
              items: [
                {
                  future_id: null,
                  val: "x",
                },
                {
                  future_id: null,
                  val: "y",
                },
              ],
            },
          },
        ],
      });
    });
  });
});
