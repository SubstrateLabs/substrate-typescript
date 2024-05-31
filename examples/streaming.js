#!/usr/bin/env node

import {
  Substrate,
  GenerateText,
  GenerateImage,
  MultiGenerateText,
  Mistral7BInstruct,
  Mixtral8x7BInstruct,
  Llama3Instruct8B,
  Llama3Instruct70B,
  GenerateJSON,
  MultiGenerateJSON,
  EmbedText,
} from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api-staging.substrate.run",
  });

  const [a, b, c, d] = [
    new Mistral7BInstruct({
      num_choices: 2,
      prompt: "spell out Mistral7BInstruct",
      max_tokens: 50,
    }),
    new Mixtral8x7BInstruct({
      prompt: "spell out Mixtral8x7BInstruct",
      max_tokens: 50,
    }),
    new Llama3Instruct8B({
      prompt: "spell out Llama3Instruct8B",
      max_tokens: 50,
    }),
    new Llama3Instruct70B({
      prompt: "spell out Llama3Instruct70B",
      max_tokens: 50,
    }),
  ];

  const stream = await substrate.stream(d);

  for await (let message of stream) {
    console.log(message);
  }
}
main();
