#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, ComputeText, sb, ComputeJSON } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const a = new ComputeJSON({
    prompt: "Give me an African capital city and its approximate population.",
    json_schema: {
      type: "object",
      properties: {
        cityName: { type: "string" },
        country: { type: "string" },
        approximatePopulation: { type: "number", greaterThan: 100000 },
      },
      required: ["text"],
    },
  });

  const b = new ComputeText({
    prompt: sb.concat(
      "give me the leader of the country: ",
      sb.jq<string>(a.future.json_object, ".country"),
    ),
  });

  const res = await substrate.run(a, b);
  console.log({ a: res.get(a), b: res.get(b) });
}
main();
