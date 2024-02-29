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
  prompt:
    "say something terse and poetic about your existence as an assistant, keep it concise, just one sentence",
});
const b = new NewGenerateText({
  args: { prompt: a.ref.text },
});
// const g = new NewGraph().add(a).add(b);
const g = new NewGraph().add(a).add(b);
const json = g.toJSON();
console.log(JSON.stringify(json, null, 2));

const result = await substrate.compose(json);
console.log(JSON.stringify(result));
