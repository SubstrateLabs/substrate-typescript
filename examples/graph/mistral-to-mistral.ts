#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, Graph, Mistral, Adapter } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const story = new Mistral({ id: "story" })
  .setArgs({ input_prompts: ["Write me a story about your favorite dream"] })
  .setOutput();

const summary = new Mistral({ id: "summary", args: { max_tokens: 100 } })
  .setFromAdapters([
    Adapter.Get.path("completions[0].text").to("input_prompts"),
    Adapter.Prepend.key("input_prompts", "Summarize the following story:\n\n"),
    Adapter.WrapInList.key("input_prompts"),
    Adapter.Pick.keys(["input_prompts"]),
  ])
  .setOutput();

const graph = new Graph().withEdge([story, summary, {}]);

const result = await substrate.compose(graph);
console.log(JSON.stringify(result));
