import { expect, describe, test } from "vitest";
import { Jina } from "substrate/Jina";
import * as Schema from "substrate/Schema";

describe("Jina", () => {
  test("can construct a valid Jina", () => {
    const n = new Jina();
    expect(n).toBeInstanceOf(Jina);
    expect(() => Schema.JinaSchema.parse(n)).not.toThrow();
  });
});
