#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, Graph, Jina } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

async function main() {
  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const text = "Text you want to embed...";

  const jina = new Jina().setArgs({ texts: [text] }).setOutput();

  const graph = new Graph().withNode(jina);

  const result = await substrate.compose(graph);
  console.log(result);
}

main();
