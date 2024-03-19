import { expect, describe, test } from "vitest";
import { Node } from "substrate/Node";
import { GenerateText } from "substrate/Nodes";
import { FutureString, Trace, StringConcat } from "substrate/Future";

describe("GenerateText", () => {
  test(".node", () => {
    const n = new GenerateText({ prompt: "foo" });
    expect(n.node).toEqual("GenerateText");
  });

  test(".future", () => {
    const a = new GenerateText({ prompt: "foo" });
    const b = new GenerateText({ prompt: a.future.text });
    expect(b).toBeInstanceOf(GenerateText);
  });
});

export class FooNode extends Node {}

describe("Node", () => {
  test(".node", () => {
    const n = new FooNode({});
    expect(n.node).toEqual("FooNode");
    expect(n.id.startsWith("FooNode"));
    expect(n.id.includes("_"));
  });

  test(".output", () => {
    const n = new FooNode({}).subscribe();
    expect(n).toBeInstanceOf(FooNode);
    expect(n._subscribed).toBeTruthy();
  });

  test(".toJSON", () => {
    const a = new FutureString(new Trace([], ""));
    const b = new FutureString(new Trace([], ""));
    const c = new FutureString(new StringConcat([a, b]));
    const d = new FutureString(new StringConcat([c, "d"]));
    const n = new FooNode({ prompt: d });

    expect(n.toJSON()).toEqual({
      node: {
        id: n.id,
        node: "FooNode",
        _should_output_globally: false,
        args: {
          // @ts-expect-error (accessing protected property)
          prompt: d.toPlaceholder(),
        },
      },
      futures: [d.toJSON(), c.toJSON(), a.toJSON(), b.toJSON()],
    });
  });
});
