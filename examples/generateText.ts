#!/usr/bin/env -S npm run ts-node --transpileOnly

import {
  Substrate,
  GenerateText,
  Graph,
} from "@substratelabs/substrate-typescript";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const args: GenerateText.Args = {
  prompt:
    "generate a caption describing a cat, no additional text, keep it concise, just one sentence",
};

// const genTxt = new GenerateText().setArgs(args).setOutput();
const genTxt = new GenerateText({ args: args }).setOutput();

const graph = new Graph().withNode(genTxt);
console.log(graph.toJSON());

const result = await substrate.compose(graph);
console.log(JSON.stringify(result));
