#!/usr/bin/env -S npm run ts-node --transpileOnly

/**
 basic GenerateText->GenerateText example
*/

import {
  Substrate,
  GenerateText,
  Graph,
  Functions,
} from "@substratelabs/substrate-typescript";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({
  apiKey: SUBSTRATE_API_KEY,
  baseUrl: "https://api-staging.substrate.run",
});
const a = new GenerateText({
  prompt: "give me a random number",
}).output();
const b = new GenerateText({
  prompt: Functions.stringConcat("increment the following number: ", a.future.text as string) as any,
}).output();
const g = new Graph();
g.add(a);
g.add(b);
const json = g.toJSON();
// console.log(JSON.stringify(json, null, 2));
const result = await substrate.compose(json);
console.log(JSON.stringify(result, null, 2));
