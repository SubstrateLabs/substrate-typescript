#!/usr/bin/env -S npm run ts-node --transpileOnly
/*
 * TODO: string concatenation doesn't work
 */

import {
  Substrate,
  NewGenerateText,
  NewGraph,
} from "@substratelabs/substrate-typescript";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({
  apiKey: SUBSTRATE_API_KEY,
  baseUrl: "https://api-staging.substrate.run",
});
const a = new NewGenerateText({
  prompt: "ask me a short trivia question in one sentence",
});
const b = new NewGenerateText({ prompt: a.ref.text });
const g = new NewGraph();
g.add(a);
g.add(b);
const json = g.toJSON();
const result = await substrate.compose(json);
console.log(JSON.stringify(result, null, 2));
