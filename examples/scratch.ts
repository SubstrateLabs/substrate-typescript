#!/usr/bin/env -S npm run ts-node --transpileOnly
/*
 * - Ref broken since refactor
 * - String concat – does it work?
 */

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
});
// const b = new GenerateText({ prompt: a.ref.text });
const g = new Graph();
g.add(a);
// g.add(b);
const json = g.toJSON();
const result = await substrate.compose(json);
console.log(JSON.stringify(result, null, 2));
