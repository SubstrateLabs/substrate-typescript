#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, Box, ComputeText, ComputeJSON, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
  });

  const numbers = new Box({
    value: [0, 1],
  });

  const latin = new Box({
    value: ["a", "b"],
  });

  const greek = new Box({
    value: {
      a: "α",
      b: "β",
    },
  });

  const proxyAccessor = new Box({ value: { property: "text" } });

  const d = new ComputeText({
    prompt: "What is the character for the Latin 'D' in the Cyrillic alphabet? (just tell me the character only)",
    max_tokens: 1,
  });

  const three = new ComputeText({
    prompt: "What number comes after '2'? (just tell me the character only)",
    max_tokens: 1,
  });
  const number3 = sb.jq<number>(three.future, ".text | tonumber");

  const hebrew = new ComputeJSON({
    prompt: "what are the characters of the Hebrew alphabet (in unicode, eg. א )?",
    json_schema: {
      type: "object",
      properties: {
        characters: {
          type: "array",
          items: {
            type: "string",
            description: "single character",
          }
        }
      }
    }
  });

  const result = new Box({
    value: {
      a: latin.future.value[numbers.future.value[0]],
      b: greek.future.value[latin.future.value[1]],
      c: hebrew.future.json_object.characters[number3 as any],
      ab: sb.concat(greek.future.value.a, greek.future.value.b),
      d: sb.get<string>(d.future, proxyAccessor.future.value.property),
    },
  });

  const res = await substrate.run(result);
  console.log(res.get(result));
}
main();
