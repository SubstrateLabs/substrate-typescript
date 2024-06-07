#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, Llama3Instruct70B } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const a = new Llama3Instruct70B({
    prompt: "what are server side events useful for?",
    max_tokens: 50,
  });

  const stream = await substrate.stream(a);

  for await (let message of stream.get(a)) {
    if (message.object === "node.delta") {
      console.log(message);
    }
  }
}
main();
