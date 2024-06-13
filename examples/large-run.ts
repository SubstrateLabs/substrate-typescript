#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, GenerateText } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api-staging.substrate.run",
  });

  let nodes = [];
  let prompt: any = "once upon a time...";
  for (let i = 0; i < 50; i++) {
    const node = new GenerateText({ prompt });
    nodes.push(node);
    prompt = node.future.text.concat(" and then");
  }

  const res = await substrate.run(...nodes);

  console.log(JSON.stringify(res.json, null, 2));
}
main();
