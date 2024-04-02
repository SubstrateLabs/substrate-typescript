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
      node: {
        id: n.id,
        node: "FooNode",
        _should_output_globally: true,
        args: {
          // @ts-expect-error (accessing protected property)
          prompt: d.toPlaceholder(),
        },
      },
      futures: [d.toJSON(), c.toJSON(), a.toJSON(), b.toJSON()],
    });
  });
});
