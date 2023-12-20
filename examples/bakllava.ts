#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, Graph, Bakllava } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

async function main() {
  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const jokePrompt = "Tell me a joke about seashells";

  const bakllava = new Bakllava()
    .setArgs({ prompt: jokePrompt })
    .setOutput();

  const graph = new Graph().withNode(bakllava);

  const result = await substrate.compose(graph);
  console.log(JSON.stringify(result));
}

main();
