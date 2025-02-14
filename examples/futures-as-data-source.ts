#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, Box, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const f = sb.jq<"object">({ foo: { bar: "baz" } }, ".", "object");

  const a = new Box({
    value: {
      x: f,
      y: f.get("foo.bar"),
    },
  });

  const res = await substrate.run(a);
  console.log(JSON.stringify(res.json.data, null, 2));
}
main();
