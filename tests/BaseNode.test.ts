import { expect, describe, test } from "vitest";
import { BaseNode } from "substrate/BaseNode";
import * as Schema from "substrate/API/Schema";

describe("BaseNode", () => {
  test("can construct a valid BaseNode", () => {
    const n = new BaseNode();
    expect(n).toBeInstanceOf(BaseNode);
    expect(() => Schema.BaseNodeSchema.parse(n)).not.toThrow();
  });

  test("can construct a valid BaseNode with params", () => {
    const n = new BaseNode({ id: "1234", args: { a: 1 } });
    expect(n.id).toEqual("1234");
    expect(n.args).toEqual({ a: 1 });
  });
});
