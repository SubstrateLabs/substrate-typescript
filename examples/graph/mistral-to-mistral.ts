#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, Graph, Mistral } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({
  apiKey: SUBSTRATE_API_KEY,
  baseUrl: "http://localhost:8787",
});

const story = new Mistral({ id: "story" })
  .setArgs({ input_prompts: ["Write me a story about that time we had to deliver pizzas to everyone in Times Square"] })
  .setOutput();

const summary = new Mistral({
  id: "summary",
  args: { max_tokens: 100 },
}).setOutput();

const graph = new Graph().withEdge([
  story,
  summary,
  (out: Mistral.Output): Mistral.Args => ({
    input_prompts: [`Summarize the following:\n\n${out.completions[0]?.text}`],
  }),
]);

const result = await substrate.compose(graph);
console.log(JSON.stringify(result));
