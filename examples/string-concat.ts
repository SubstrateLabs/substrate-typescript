#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, GenerateText, sb } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({
  apiKey: SUBSTRATE_API_KEY,
  baseUrl: "https://api-staging.substrate.run",
});

const a = new GenerateText({
  prompt: "name a random capital city: <city name>, <country>",
});

const concatenated = sb.concat("tell me about visiting ", a.future.text);

const b = new GenerateText({ prompt: concatenated });

substrate.run(a, b);

console.log({ a: await a.result(), b: await b.result() });
