#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, Box, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const data = new Box(
    {
      value: {
        letters: ["a", "b"],
        index: 0,
      },
    }
  );

  const selected = new Box(
    {
      value: ob4: sb.get<string>(
          data.future.value.object,
          data.future.value.letters[1],
        ),
      },
    },
    { id: "selected" },
  );

  // console.log(JSON.stringify(Substrate.serialize(selected), null, 2));
  // return;

  const res = await substrate.run(selected);
  console.log(JSON.stringify(res.json, null, 2));
}
main();
