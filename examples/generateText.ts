#!/usr/bin/env -S npm run ts-node --transpileOnly

import {
  Substrate,
  GenerateText,
  Graph,
} from "@substratelabs/substrate-typescript";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({
  apiKey: SUBSTRATE_API_KEY,
  baseUrl: "https://api.substrate.run",
});

const args: GenerateText.Args = {
  prompt:
    "say something terse and poetic about your existence as an assistant, keep it concise, just one sentence",
};

const genImg = new GenerateText().setArgs(args).setOutput();

const graph = new Graph().withNode(genImg);
console.log(JSON.stringify(graph.toJSON(), null, 2));

const result = await substrate.compose(graph);
console.log(JSON.stringify(result));
