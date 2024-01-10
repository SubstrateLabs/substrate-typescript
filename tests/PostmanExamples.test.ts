import { expect, describe, test } from "vitest";
import { Mistral, Jina, Graph, Adapter } from "substrate";

describe("Postman Examples", () => {
  test("compose (mistral -> jina)", () => {
    // Similar to:
    // https://substratelabs.postman.co/workspace/Substrate~f43d8f7b-4c99-449f-8138-7029280b4fdb/request/29262220-012aa08f-2245-4fa3-8000-6bfd50bdf420?ctx=documentation
    const mistral = new Mistral({ id: "summary-node" })
      .setArgs({
        prompts: [
          { prompt: "summarize the following blog post: Seashells, the ocean's natural treasures, are more than just a pretty souvenir to collect during beach vacations. These fascinating creations of marine life offer a glimpse into a world that's as mysterious as it is beautiful. Let's dive into the swirling waves of seashell lore and discover what makes them so special. Firstly, seashells are not just lifeless ornaments. They are, in fact, the former homes of mollusks, a group of sea creatures that includes snails, clams, and oysters. Imagine if your house grew with you from birth – that's exactly how it works for these creatures! Their shells are made from a substance called calcium carbonate, and they keep expanding as the mollusk grows. The process is akin to crafting a masterpiece, layer by delicate layer, resulting in the intricate patterns and colors that we admire. But here's where it gets really interesting. Seashells are like the fingerprints of the ocean; no two are exactly alike. The color, shape, and size of each shell are influenced by the mollusk's diet, its environment, and even the temperature of the water. This means that each shell tells a unique story of its journey and the conditions it endured. In a way, each seashell is a diary of the sea. Now, let's talk about the symphony of shapes and sizes. From the spiraled elegance of a conch to the delicate ridges of a cockle shell, the variety is astounding. Some are so tiny that you could fit a dozen on a fingertip, while others, like the giant clam, grow to be as big as a basketball. The diversity is not just for show – each shape serves a purpose, whether it's to burrow into the sand or to withstand strong ocean currents." },
          { prompt: "foo" },
        ],
        temperature: 0.1,
        max_tokens: 1200,
      })
      .adaptTo([
        Adapter.get({ path: "completions[0].text" }).to("texts"),
        Adapter.wrapInList("texts"),
        Adapter.pick({ keys: ["texts"] }),
      ])
      .setOutput();

    const jina = new Jina({ id: "embed-node" })
      .setArgs({
        docs: [{
          text: "fill this out",
        }]
      })
      .setOutput();

    const graph = new Graph().withEdge([mistral, jina, {}]);
    const json = JSON.stringify({ dag: graph.toJSON() });

    expect(json).toMatchSnapshot();
  });
});
