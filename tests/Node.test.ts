import { expect, describe, test } from "vitest";
import { Node } from "substrate/Node";
import { Future, Trace, StringConcat, get } from "substrate/Future";

class FooNode extends Node {}

describe("Node", () => {
  test(".node", () => {
    const n = new FooNode({});
    expect(n.node).toEqual("FooNode");
    expect(n.id.startsWith("FooNode"));
    expect(n.id.includes("_"));
  });

  test(".toJSON", () => {
    const a = new Future<string>(new Trace([], new FooNode({})));
    const b = new Future<string>(new Trace([], new FooNode({})));
    const c = new Future<string>(new StringConcat([a, b]));
    const d = new Future<string>(new StringConcat([c, "d"]));
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
    const a = new FooNode({ x: "x" });
    const f1 = get(a.future, "x");
    const f2 = get(a.future, "y");
    const b = new FooNode({ x: f1, z: f2 });
    const f3 = get(b.future, "x");
    const c = new FooNode({ x: f3 });
    const d = new FooNode({}, { depends: [c] });

    // @ts-ignore (protected)
    const { nodes, futures } = d.references();

    expect(nodes).toEqual(new Set([a, b, c, d]));
    expect(futures).toEqual(new Set([f1, f2, f3]));
  });
});
