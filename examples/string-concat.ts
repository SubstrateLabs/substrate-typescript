#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, ComputeText, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api-staging.substrate.run",
  });

  const a = new ComputeText({
    prompt: "name a random capital city: <city name>, <country>",
  });

  const concatenated = sb.concat("tell me about visiting ", a.future.text);

  const b = new ComputeText({ prompt: concatenated });

  const res = await substrate.run(a, b);

  console.log({ a: res.get(a), b: res.get(b) });
}
main();
