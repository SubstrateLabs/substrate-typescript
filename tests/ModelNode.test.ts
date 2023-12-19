import { expect, describe, test } from "vitest";
import { ModelNode } from "substrate/ModelNode";
import * as Schema from "substrate/Schema";

describe("ModelNode", () => {
  test("can construct a valid ModelNode", () => {
    const n = new ModelNode();
    expect(n).toBeInstanceOf(ModelNode);
    expect(() => Schema.ModelNodeSchema.parse(n)).not.toThrow();
  });
});
