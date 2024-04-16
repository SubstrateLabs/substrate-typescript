#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, GenerateText, sb, FutureString } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api-staging.substrate.run",
  });

  const a = new GenerateText({
    prompt: "name a random capital city: <city name>, <country>",
  });

  const jqUpperCase = ".text | ascii_upcase";
  const concatenated = sb.jq<FutureString>(jqUpperCase, a.future, FutureString);

  const b = new GenerateText({ prompt: concatenated });

  const res = await substrate.run(a, b);
  res.getError();

  console.log({ a: res.get(a), b: res.get(b) });
}
main();
