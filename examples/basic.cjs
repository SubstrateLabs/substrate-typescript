#!/usr/bin/env node

const { Substrate, ComputeText } = require("substrate");

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const a = new ComputeText({
    prompt: "ask me a short trivia question in one sentence",
  });
  const b = new ComputeText({ prompt: a.future.text });

  const res = await substrate.run(a, b);

  console.log({ a: res.get(a), b: res.get(b) });
}

main();
