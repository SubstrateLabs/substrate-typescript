#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, Box, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const data = new Box({
    value: {
      letters: ["a", "b"],
      index: 0,
    },
  });

  const selected = new Box({
    value: {
      example1: sb.concat(
        data.future.value.letters[0],
        data.future.value.letters[1],
      ),
      // example2: data.future.value.letters[data.future.value.index],
    },
  });

  const res = await substrate.run(selected);
  console.log(JSON.stringify(res.json, null, 2));
}
main();
