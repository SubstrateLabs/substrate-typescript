#!/usr/bin/env -S npm run ts-node --transpileOnly

import {
  Substrate,
  GenerateText,
  sb
} from "@substratelabs/substrate-typescript";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({
  apiKey: SUBSTRATE_API_KEY,
  baseUrl: "https://api-staging.substrate.run",
});

const a = new GenerateText({
  prompt: "make up a 4 new funny words and list them this format and nothing more: `words = [string, string, string, string]`",
}).output();

const b = new GenerateText({
  prompt: sb.stringConcat("write a poem using only the following words: ", a.future.text as any) as any
}).output();


const result = await substrate.run(a, b);
console.log(JSON.stringify(result, null, 2));
