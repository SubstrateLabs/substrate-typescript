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
} from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "http://127.0.0.1:8000",
    backend: "v1",
    additionalHeaders: {
      "x-user-id": "1",
      "x-proxy-path": "/",
      // "x-substrate-fp": "1",
      "x-substrate-streaming": "1",
      accept: "text/event-stream",
    },
  });

  const nodes = [
    "Mistral7BInstruct",
    "Mixtral8x7BInstruct",
    "Llama3Instruct8B",
    "Llama3Instruct70B",
  ]
    .flatMap((node) => {
      return [
        new GenerateText(
          { node, prompt: `spell out ${node}`, max_tokens: 50 },
          { id: node },
        ),
        new MultiGenerateText(
          { node, num_choices: 1, prompt: `spell out ${node}`, max_tokens: 50 },
          { id: `${node}-multi` },
        ),
        new GenerateJSON(
          {
            node,
            prompt: `spell out ${node}`,
            json_schema: {
              type: "object",
              properties: { letters: { type: "string" } },
            },
          },
          { id: node },
        ),
        new MultiGenerateJSON(
          {
            node,
            num_choices: 1,
            prompt: `spell out ${node}`,
            json_schema: {
              type: "object",
              properties: { letters: { type: "string" } },
            },
          },
          { id: node },
        ),
      ];
    })
    .concat([
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
    ]);

  const stream = await substrate.stream(...nodes);

  for await (let message of stream) {
    const { node_id, object, data } = JSON.parse(message.data);
    if (node_id) {
      console.log({ node_id, object, data });
    } else {
      console.log(JSON.stringify({ object, data }, null, 2));
    }
  }
}
main();
