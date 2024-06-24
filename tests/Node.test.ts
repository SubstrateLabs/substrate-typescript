import { expect, describe, test } from "vitest";
import { Node } from "substrate/Node";
import { FutureString, Trace, StringConcat } from "substrate/Future";

class FooNode extends Node {}

describe("Node", () => {
  test(".node", () => {
    const n = new FooNode({});
    expect(n.node).toEqual("FooNode");
    expect(n.id.startsWith("FooNode"));
    expect(n.id.includes("_"));
  });

  test(".toJSON", () => {
    const a = new FutureString(new Trace([], new FooNode({})));
    const b = new FutureString(new Trace([], new FooNode({})));
    const c = new FutureString(new StringConcat([a, b]));
    const d = new FutureString(new StringConcat([c, "d"]));
    const n = new FooNode({ prompt: d });

    expect(n.toJSON()).toEqual({
      id: n.id,
      node: "FooNode",
      _should_output_globally: true,
      args: {
        // @ts-expect-error (accessing protected property)
        prompt: d.toPlaceholder(),
      },
    });
  });

  test(".references", () => {
    const a = new FooNode({ x: "x" }, { id: "a" });
    const f1 = a.future.get("x");
    const f2 = a.future.get("y");
    const b = new FooNode({ x: f1, z: f2 }, { id: "b" });
    const f3 = b.future.get("x");
    const c = new FooNode({ x: f3 }, { id: "c" });
    const d = new FooNode({}, { id: "d", depends: [c] });

    // @ts-ignore (protected)
    const { nodes, futures } = d.references();

    expect(nodes).toEqual(new Set([a, b, c, d]));
    expect(futures).toEqual(new Set([f1, f2, f3]));
  });
});
