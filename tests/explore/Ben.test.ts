import { expect, describe, test } from "vitest";
import { NewGraph } from "substrate/NewGraph";
import { NewGenerateText } from "substrate/nodes/NewGenerateText";

/**
{
  "nodes": [
    {
      "id": "d304ac2b-a019-47cd-97fc-c55adf55504b",
      "args": {
        "prompt": "cinematic film still of a translucent (cybernetic chip data center predatory spiral Conus Conidae shell)1.5, (glowing veins)1.3 (cables going into body, circuits)1.3, extremely detailed, vignette, highly detailed, high budget, bokeh, moody, epic, gorgeous, film grain, grainy",
        "negative_prompt": "(humanoid)1.3, anime, cartoon, graphic, text, painting, crayon, graphite, ugly, oversaturated, blur, blurry",
        "width": 512,
        "height": 512,
        "refinement": 8,
        "store": "hosted"
      },
      "_should_output_globally": true,
      "node": "GenerateImage",
      "extra_args": {}
    }
  ],
  "edges": [],
  "initial_args": {}
}
 */

describe("scratch", () => {
  test("NewGenerateText", () => {
    const a = new NewGenerateText({ prompt: "foo" });
    // const b = new NewGenerateText({ args: { prompt: a.ref.text } });
    // const g = new NewGraph().add(a).add(b);
    const g = new NewGraph().add(a);
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
