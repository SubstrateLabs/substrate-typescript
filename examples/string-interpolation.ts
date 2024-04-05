#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, GenerateText, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api-staging.substrate.run",
  });

  const concise =
    "(just give me the number, no punctuation, no empty spaces, no other text)";

  const a = new GenerateText({
    prompt: `pick a random number between 1 and 100 ${concise}`,
  });

  const b = new GenerateText({
    prompt: sb.interpolate`double the following number: ${a.future.text} ${concise}`,
  });

  const res = await substrate.run(a, b);

  console.log({
    a: res.get(a),
    b: res.get(b),
  });
}
main();
