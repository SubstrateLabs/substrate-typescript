#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, ComputeJSON, ComputeText, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const author = new ComputeJSON({
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

  const name = author.future.json_object.name;
  const bio = author.future.json_object.bio;

  const report = new ComputeText({
    prompt: sb.interpolate`Write a short summary about ${name} and make sure to use the following bio: ${bio}`,
  });

  const res = await substrate.run(author, report);
  console.log(JSON.stringify(res.json, null, 2));
}
main();
