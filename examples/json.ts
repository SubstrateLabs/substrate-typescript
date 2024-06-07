#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, GenerateJSON, GenerateText, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const author = new GenerateJSON({
    prompt: "Who wrote Don Quixote?",
    json_schema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "The name of the author.",
        },
        bio: {
          type: "string",
          description: "Concise biography of the author.",
        },
      },
    },
    temperature: 0.4,
    max_tokens: 800,
  });

  const name = author.future.json_object.get("name");
  const bio = author.future.json_object.get("bio");

  const report = new GenerateText({
    prompt: sb.interpolate`Write a short summary about ${name} and make sure to use the following bio: ${bio}`,
  });

  const res = await substrate.run(author, report);
  console.log(JSON.stringify(res.json, null, 2));
}
main();
