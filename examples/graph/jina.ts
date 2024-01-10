#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, Graph, Jina } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const text = "Text you want to embed...";

const jina = new Jina().setArgs({ docs: [{ text }] }).setOutput();

const graph = new Graph().withNode(jina);

const result = await substrate.compose(graph);
console.log(result);
