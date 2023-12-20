#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, Bakllava } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const args: Bakllava.Input = {
  prompt: "describe this image in detail",
  image_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/800px-TheCheethcat.jpg",
};

const result = await substrate.models.Bakllava(args);
console.log(result.data.message);
