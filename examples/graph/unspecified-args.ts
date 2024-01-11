#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, Graph, Mistral } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const jokePrompt = "Tell me a joke about seashells";

// In cases where you may be using an older version of the SDK and have not yet updated to have the latest
// types locally you may pass along unspecified parameters (eg. `joke`) and if the API can use them, it will
// use them.
//
const mistral = new Mistral()
  // @ts-expect-error: Object literal may only specify known properties, and 'joke' does not exist in type '{ prompt: string; }'
  .setArgs({ prompts: [{ prompt: jokePrompt, joke: jokePrompt }] })
  .setOutput();

const graph = new Graph().withNode(mistral);

const result = await substrate.compose(graph);
console.log(JSON.stringify(result));
