#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, Graph, Mistral } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const jokePrompt = "Tell me a joke about seashells";

const mistral = new Mistral()
  .setArgs({ input_prompts: [jokePrompt] })
  .setOutput();

const graph = new Graph().withNode(mistral);

const result = await substrate.compose(graph);
console.log(JSON.stringify(result));
