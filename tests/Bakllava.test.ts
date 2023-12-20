import { expect, describe, test } from "vitest";
import { Bakllava } from "substrate/Bakllava";
import * as Schema from "substrate/Schema";

describe("Bakllava", () => {
  test("can construct a valid Bakllava", () => {
    const n = new Bakllava();
    expect(n).toBeInstanceOf(Bakllava);
    expect(() => Schema.BakllavaSchema.parse(n)).not.toThrow();
  });
});
