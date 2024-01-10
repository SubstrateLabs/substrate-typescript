#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, Graph, Mistral } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const story = new Mistral({ id: "story" })
  .setArgs({
    prompts: [
      {
        prompt:
          "Write me a story about that time we had to deliver pizzas to everyone in Spiral Square",
      },
    ],
  })
  .setOutput();

const summary = new Mistral({
  id: "summary",
  args: { max_tokens: 50 },
}).setOutput();

const graph = new Graph().withEdge([
  story,
  summary,
  ({ data }: Mistral.Output): Mistral.Args => ({
    prompts: data!.flatMap(({ completions }) =>
      completions.map((completion) => ({ prompt: completion })),
    ),
  }),
]);

const result = await substrate.compose(graph);
console.log(JSON.stringify(result));
