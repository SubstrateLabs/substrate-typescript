#!/usr/bin/env -S npm run ts-node --transpileOnly

/**
 basic GenerateText->GenerateText example
*/

import { Substrate, GenerateText } from "@substratelabs/substrate-typescript";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({
  apiKey: SUBSTRATE_API_KEY,
  baseUrl: "https://api-staging.substrate.run",
});

const a = new GenerateText({
  prompt: "ask me a short trivia question in one sentence",
}).subscribe();
const b = new GenerateText({ prompt: a.future.text }).subscribe();

const res = await substrate.run(a, b);

console.log("a.output(res) =", a.output(res));
console.log("b.output(res) =", b.output(res));
