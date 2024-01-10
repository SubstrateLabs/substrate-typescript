import { expect, describe, test } from "vitest";
import { StableDiffusion } from "substrate/StableDiffusion";
import * as Schema from "substrate/API/Schema";

describe("StableDiffusion", () => {
  test("can construct a valid StableDiffusion", () => {
    const n = new StableDiffusion();
    expect(n).toBeInstanceOf(StableDiffusion);
    expect(() => Schema.StableDiffusionSchema.parse(n)).not.toThrow();
  });
});
