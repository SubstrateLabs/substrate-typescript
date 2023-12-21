#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, Adapter, Graph, Mistral, Jina } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

//Create a Substrate API client
const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const text = "Something you want to summarize...";

// Create a Mistral summarization node
const mistral = new Mistral({ id: "summary" })
  .setArgs({ input_prompts: [`Summarize the following: ${text}`] })
  .setOutput()
  .adaptTo([
    Adapter.get({ path: "completions[0].text" }).to("texts"),
    Adapter.wrapInList("texts"),
    Adapter.pick({ keys: ["texts"] }),
  ]);

// Create a Jina embedding node
const jina = new Jina({ id: "embedding" }).setOutput();

// Create a Graph that connects the two together
const graph = new Graph().withEdge([mistral, jina, {}]);

// Run the Graph and see print the result
const result = await substrate.compose(graph);
console.log(result);
