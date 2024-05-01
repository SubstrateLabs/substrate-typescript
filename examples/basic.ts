#!/usr/bin/env -S npx ts-node --transpileOnly

import * as sb from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new sb.Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api.substrate.run",
    backend: "v1",
  });

  // "prompt": "Give me a character description for a Cyberpunk game I am making",
  //   "node": "Mixtral8x7BInstruct",
  //   "temperature": 1.0,
  //   "max_tokens": 1000,
  //   "json_schema": {
  //   "type": "object",
  //     "properties": {
  //     "name": {"type": "string"},
  //     "one_sentence_bio": {"type": "string", "maxLength": 180},
  //     "skills": {"type": "array", "minItems": 2, "maxItems": 4, "items": {"type": "string", "maxLength": 10}},
  //     "physical_description": {"type": "string", "maxLength": 180},
  //   },
  // },

  const a = new sb.GenerateJSON({
    prompt: "Give me a character description for a Cyberpunk game I am making",
    node: "Mixtral8x7BInstruct",
    temperature: 1.0,
    max_tokens: 1000,
    json_schema: {
      type: "object",
      properties: {
        name: { type: "string" },
        one_sentence_bio: { type: "string", maxLength: 180 },
        skills: {
          type: "array",
          minItems: 2,
          maxItems: 4,
          items: { type: "string", maxLength: 10 },
        },
        physical_description: { type: "string", maxLength: 180 },
      },
    },
  });
  //   img = sb.GenerateImage(
  //     {
  // # "prompt": sb.sb.concat("Cyberpunk character: ", char_def.future.json_object["one_sentence_bio"]),
  //     "prompt": sb.sb.concat("Cyberpunk character: ", sb.sb.jq(char_def.future.json_object, ".physical_description")),
  // }
  // )
  const img = new sb.GenerateImage({
    prompt: sb.sb.concat(
      "Cyberpunk character: ",
      sb.sb.jq<"string">(
        ".physical_description",
        a.future.json_object,
        "string",
      ),
    ),
  });

  const res = await substrate.run(a, img);

  // const output: GenerateText.Output = res.get(b);

  console.log({ a: res.get(a), img: res.get(img) });
}
main();
