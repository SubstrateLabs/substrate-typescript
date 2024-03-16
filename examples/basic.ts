#!/usr/bin/env -S npm run ts-node --transpileOnly

/**
 basic GenerateText->GenerateText example
*/

import { Substrate, GenerateText } from "@substratelabs/substrate-typescript";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({
  apiKey: SUBSTRATE_API_KEY,
});
const a = new GenerateText({
  prompt: "ask me a short trivia question in one sentence",
}).subscribe();
const b = new GenerateText({ prompt: a.future.text }).subscribe();
const res = await substrate.run(a, b);
const b_res = b.output(res);
console.log(b_res.text);
