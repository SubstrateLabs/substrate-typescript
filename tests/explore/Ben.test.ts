import { expect, describe, test } from "vitest";
import { NewGraph } from "substrate/NewGraph";
import { NewGenerateText } from "substrate/nodes/NewGenerateText";

describe("scratch", () => {
  test("scratch", () => {
    const a = new NewGenerateText({ args: { prompt: "foo" } });
    const b = new NewGenerateText({ args: { prompt: a.ref.text } });
    const g = new NewGraph().add(a).add(b);
    const json = g.toJSON();
    console.log(JSON.stringify(json, null, 2));
    // const g = new Graph(idGenerator()).add(a).add(b).add(c);
    // const result = g.toJSON();
    // console.log(JSON.stringify(result));
    // expect(result.nodes.length).toEqual(3);
    // expect(result.ops.length).toEqual(4);
    // expect(result).toMatchSnapshot();
  });
});
