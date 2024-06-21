#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, Box, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const node = new Box({
    value: {
      a: "b",
      c: {
        d: [1, 2, 3],
      },
    },
  });
  const res = await substrate.run(node);
  console.log(res.apiResponse.status);
  console.log(JSON.stringify(res.json));
}
main();
