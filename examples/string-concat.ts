#!/usr/bin/env -S npm run ts-node --transpileOnly

import {
  Substrate,
  GenerateText,
  sb,
} from "@substratelabs/substrate-typescript";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

// @ts-ignore
const substrate = new Substrate({
  apiKey: SUBSTRATE_API_KEY,
  baseUrl: "https://api-staging.substrate.run",
});

const a = new GenerateText({
  prompt: "name a random capital city",
}).output();

const concatenated = sb.stringConcat("tell me about visiting ", a.future.text);

const b = new GenerateText({ prompt: concatenated }).output();

const result = await substrate.run(a, b);
console.log(JSON.stringify(result, null, 2));
