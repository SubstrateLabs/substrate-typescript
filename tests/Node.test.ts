import { expect, describe, test } from "vitest";
import { Node } from "substrate/Node";

export class FooNode extends Node {}

describe("Node", () => {
  test(".node", () => {
    const n = new FooNode();
    expect(n.node).toEqual("FooNode");
  });

  test(".output()", () => {
    const n = new FooNode().output();
    expect(n).toBeInstanceOf(FooNode);
    expect(n._output).toBeTruthy();
  });
});
