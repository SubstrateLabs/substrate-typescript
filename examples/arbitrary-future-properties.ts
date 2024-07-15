#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, Box, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
  });

  const numbers = new Box(
    {
      value: [0, 1],
    },
  );

  const latin = new Box(
    {
      value: ["a", "b"],
    },
  );

  const greek = new Box(
    {
      value: {
        a: "α",
        b: "β",
      }
    },
  );

  const result = new Box(
    {
      value: {
        a: latin.future.value[numbers.future.value[0]],
        b: greek.future.value[latin.future.value[1]],
        ab: sb.concat(greek.future.value.a, greek.future.value.b),
      },
    }
  );

  const res = await substrate.run(result);
  console.log(res.get(result));
}
main();
