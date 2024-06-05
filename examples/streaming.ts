#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, Llama3Instruct70B } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api-staging.substrate.run",
  });

  const a = new Llama3Instruct70B({
    prompt: "what are server side events useful for?",
    max_tokens: 50,
  });
  const b = new Llama3Instruct70B({
    prompt: "what is an async generator?",
    max_tokens: 50,
  });

  const stream = await substrate.stream(a, b);

  const [s1, s2] = stream.tee(2);

  for await (let message of s1!.get(a)) {
    if (message.object === "node.delta") {
      console.log(message);
    }
  }
  for await (let message of s2!.get(b)) {
    if (message.object === "node.delta") {
      console.log(message);
    }
  }
}
main();
