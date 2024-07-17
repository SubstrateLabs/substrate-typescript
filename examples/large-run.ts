#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, ComputeText, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  let nodes = [];
  let prompt: any = "once upon a time...";
  for (let i = 0; i < 25; i++) {
    const node = new ComputeText({ prompt });
    nodes.push(node);
    prompt = sb.concat(node.future.text, " and then");
  }

  const res = await substrate.run(...nodes);

  console.log(JSON.stringify(res.json, null, 2));
}
main();
