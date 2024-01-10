#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, Mistral } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const args: Mistral.Input = {
  prompts: [
    {
      prompt: "Why do certain conus shells exhibit spiral growth?",
    },
  ],
  temperature: 0.8,
  max_tokens: 300,
};

const result = await substrate.models.mistral(args);
console.log(JSON.stringify(result));
