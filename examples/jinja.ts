#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, Box, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api-staging.substrate.run",
  });

  const a = new Box({ value: ["a", "b"] });
  const b = new Box({ value: { x: "x" } });

  const f = sb.jinja(
    'as=[{% for a in as %}{{a}},{% endfor%}], b={{b["x"]}}, c={{c}}',
    {
      as: a.future.value,
      b: b.future.value,
      c: "1234",
    },
  );

  const c = new Box({ value: f });

  const res = await substrate.run(a, b, c);
  console.log(JSON.stringify(res.json, null, 2));
}
main();
