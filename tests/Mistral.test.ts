import { expect, describe, test } from "vitest";
import { Mistral } from "substrate/Mistral";
import * as Schema from "substrate/API/Schema";

describe("Mistral", () => {
  test("can construct a valid Mistral", () => {
    const n = new Mistral();
    expect(n).toBeInstanceOf(Mistral);
    expect(() => Schema.MistralSchema.parse(n)).not.toThrow();
  });
});
