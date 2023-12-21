#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, Graph, Mistral, Adapter } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const story = new Mistral({ id: "story" })
  .setArgs({ input_prompts: ["Write me a story about your favorite dream"] })
  .setOutput();

const summary = new Mistral({ id: "summary", args: { max_tokens: 100 } })
  .adaptFrom([
    Adapter.get({ path: "completions[0].text" }).to("input_prompts"),
    Adapter.prepend("input_prompts", { target: "Summarize the following story:\n\n" }),
    Adapter.wrapInList("input_prompts"),
    Adapter.pick({ keys: ["input_prompts"] }),
  ])
  .setOutput();

const graph = new Graph().withEdge([story, summary, {}]);

const result = await substrate.compose(graph);
console.log(JSON.stringify(result));
