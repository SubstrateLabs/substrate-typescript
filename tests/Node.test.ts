import { expect, describe, test } from "vitest";
import { Node } from "substrate/Node";
import { GenerateText } from "substrate/Nodes";

describe("GenerateText", () => {
  test(".node", () => {
    const n = new GenerateText({ prompt: "foo" });
    expect(n.node).toEqual("GenerateText");
  });

  test("ref", () => {
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
  });

  test(".output()", () => {
    const n = new FooNode({}).output();
    expect(n).toBeInstanceOf(FooNode);
    expect(n._output).toBeTruthy();
  });
});
