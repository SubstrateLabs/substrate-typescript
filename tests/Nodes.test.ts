import { expect, describe, test } from "vitest";
import { ComputeText } from "substrate/Nodes";

describe("ComputeText", () => {
  test(".node", () => {
    const n = new ComputeText({ prompt: "foo" });
    expect(n.node).toEqual("ComputeText");
  });

  test(".future", () => {
    const a = new ComputeText({ prompt: "foo" });
    const b = new ComputeText({ prompt: a.future.text });
    expect(b).toBeInstanceOf(ComputeText);
  });
});
