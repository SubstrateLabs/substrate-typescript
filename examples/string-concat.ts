#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, GenerateText, GenerateJSON, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api.substrate.run",
    backend: "v1",
  });

  const a = new GenerateText({
    prompt:
      "Respond simply with a random capital city in the form: City, Country",
    max_tokens: 8,
  });

  const j = new GenerateJSON({
    prompt: "Respond with json for a random capital city",
    temperature: 0.7,
    json_schema: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "The city name",
        },
        country: {
          type: "string",
          description: "The country name",
        },
      },
    },
    max_tokens: 50,
  });

  const concatenated = sb.concat(
    "tell me about visiting ",
    j.future.json_object.get("city"),
    " in ",
    j.future.json_object.get("country"),
  );

  // const b = new GenerateText({ prompt: concatenated, max_tokens: 64 });

  const res = await substrate.run(a, j);

  console.log({ a: res.get(a), j: res.get(j) });
}
main();
