#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, Graph, Mistral, Jina } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

// Create a Substrate API client
const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const text = "Something you want to summarize...";

// Create a Mistral summarization node
const mistral = new Mistral({ id: "summary" })
  .setArgs({ prompts: [{ prompt: `Summarize the following: ${text}` }] })
  .setOutput();

// Create a Jina embedding node
const jina = new Jina({ id: "embedding" }).setOutput();

// Create a Graph that connects the two together
const graph = new Graph().withEdge([
  mistral,
  jina,
  ({ data }: Mistral.Output): Jina.Args => ({
    docs: data!.flatMap(({ completions }) =>
      completions.map((completion) => ({ text: completion })),
    ),
  }),
]);

// Run the Graph and see print the result
const result = await substrate.compose(graph);
console.log(JSON.stringify(result));
