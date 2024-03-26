#!/usr/bin/env node

const { Substrate, GenerateText } = require("@substratelabs/substrate-typescript");

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api-staging.substrate.run",
  });

  const a = new GenerateText({
    prompt: "ask me a short trivia question in one sentence",
  });
  const b = new GenerateText({ prompt: a.future.text });

  await substrate.run(a, b);

  console.log("a.output =", a.output);
  console.log("b.output =", b.output);
}

main();
