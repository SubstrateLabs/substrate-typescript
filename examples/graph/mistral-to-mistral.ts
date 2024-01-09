#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, Graph, Mistral } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const story = new Mistral({ id: "story" })
  .setArgs({
    input_prompts: [
      "Write me a story about that time we had to deliver pizzas to everyone in Times Square",
    ],
  })
  .setOutput();

const summary = new Mistral({
  id: "summary",
  args: { max_tokens: 100 },
}).setOutput();

const graph = new Graph().withEdge([
  story,
  summary,
  ({ completions }: Mistral.Output): Mistral.Args => ({
    input_prompts: completions.map(
      ({ text }) => `Summarize the following:\n\n${text}`,
    ),
  }),
]);

const result = await substrate.compose(graph);
console.log("STORY:");
console.log(result.data.story.completions[0]?.text);
console.log("SUMMARY:");
console.log(result.data.summary.completions[0]?.text);
