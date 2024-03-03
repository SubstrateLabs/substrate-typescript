#!/usr/bin/env -S npm run ts-node --transpileOnly

import {
  Substrate,
  GenerateText,
  Graph,
} from "@substratelabs/substrate-typescript";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({
  apiKey: SUBSTRATE_API_KEY,
  baseUrl: "https://api-staging.substrate.run",
});
const a = new GenerateText({
  prompt: "ask me a short trivia question in one sentence",
}).output();
const b = new GenerateText({ prompt: a.future.text }).output();
const g = new Graph();
g.add(a);
g.add(b);
const json = g.toJSON();
// console.log(JSON.stringify(json, null, 2));
const result = await substrate.compose(json);
console.log(JSON.stringify(result, null, 2));
