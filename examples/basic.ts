#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, GenerateText } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api-staging.substrate.run",
  });

  const input: GenerateText.Input = { prompt: "asdf" };

  const a = new GenerateText(input);
  const b = new GenerateText({ prompt: a.future.text });

  const res = await substrate.run(a, b);

  const output: GenerateText.Output = res.get(b);

  console.log({ a: res.get(a), b: output });
}
main();
