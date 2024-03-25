import { expect, describe, test } from "vitest";
import { GenerateText } from "substrate/Nodes";

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
