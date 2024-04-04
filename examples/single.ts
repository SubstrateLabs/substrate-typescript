#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, GenerateText } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api-staging.substrate.run",
  });

  const a = new GenerateText({
    prompt:
      "in very few words describe an incredible historcal technical achievement",
  });

  const res = await substrate.run(a);

  const ar = res.get(a);
  console.log(ar);
}
main();
