#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, Graph, Bakllava } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const bakllava = new Bakllava()
  .setArgs({
    prompt: "describe this image in detail",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/800px-TheCheethcat.jpg",
  })
  .setOutput();

const graph = new Graph().withNode(bakllava);

const result = await substrate.compose(graph);
console.log(JSON.stringify(result));
