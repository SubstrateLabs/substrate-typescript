import { expect, describe, test } from "vitest";
import { Substrate } from "substrate/Substrate";
import { Node } from "substrate/Node";
import { sb } from "substrate/sb";

describe("Substrate", () => {
  describe(".serialize", () => {
    test("when there are nodes and futures", () => {
      const a = new Node({ a: 123 });
      const b = new Node({ b: a.future.get("x"), c: sb.concat("x", "y") });

      const result = Substrate.serialize([a, b]);

      expect(result).toEqual({
        edges: [],
        initial_args: {},
        nodes: [
          {
            node: "Node",
            id: a.id,
            args: {
              a: 123,
            },
            _should_output_globally: true,
          },
          {
            node: "Node",
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
  });
});
