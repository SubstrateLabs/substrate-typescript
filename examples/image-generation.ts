#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, GenerateText, GenerateImage } from "@substratelabs/substrate-typescript";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({
  apiKey: SUBSTRATE_API_KEY,
  baseUrl: "https://api-staging.substrate.run",
});

const a = new GenerateText({
  prompt: "describe a highly detailed forest scene with something suprising happening",
});
const b = new GenerateImage({ prompt: a.future.text, store: "hosted" });

await substrate.run(a, b);

console.log("a =",a)

console.log("a.output =", a.output);
console.log("b.output =", b.output);

