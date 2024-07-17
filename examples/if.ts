#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, ComputeJSON, Box, If, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const planets = ["Jupiter", "Mars"];

  const sizes = planets.map((planet) => {
    return new ComputeJSON({
      prompt: sb.interpolate`How big is ${planet}?`,
      json_schema: {
        type: "object",
        properties: {
          planetName: {
            type: "string",
            description: "The name of the planet",
            enum: planets,
          },
          radius: {
            type: "string",
            description: "The radius of the planet in kilometers",
          },
        },
      },
    });
  });

  const [jupiter, mars] = sizes as [ComputeJSON, ComputeJSON];
  const radius = (p: ComputeJSON) => p.future.json_object.radius;

  const comparison = new ComputeJSON({
    prompt: sb.interpolate`Is ${radius(jupiter)} > ${radius(mars)}?`,
    json_schema: {
      type: "object",
      properties: {
        isGreaterThan: {
          type: "boolean",
        },
      },
    },
  });

  const planetName = new If({
    condition: comparison.future.json_object.isGreaterThan,
    value_if_true: jupiter.future.json_object.planetName,
    value_if_false: mars.future.json_object.planetName,
  });

  const output = new Box({
    value: sb.interpolate`The bigger planet is ${planetName.future.result}!`,
  });

  const res = await substrate.run(output);
  console.log(res.get(output));
}
main();
