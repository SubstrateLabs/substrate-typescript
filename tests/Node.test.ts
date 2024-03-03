import { expect, describe, test } from "vitest";
import { Node } from "substrate/Node";

export class FooNode extends Node {}

describe("Node", () => {
  test("node set to class name", () => {
    const n = new FooNode();
    expect(n.node).toEqual("FooNode");
  });
});
