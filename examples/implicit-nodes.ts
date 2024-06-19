#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, ComputeText } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const a = new ComputeText(
    { prompt: "tell me about windmills" },
    { id: "a" },
  );
  const b = new ComputeText({ prompt: a.future.text }, { id: "b" });
  const c = new ComputeText({ prompt: b.future.text }, { id: "c" });

  // Because the `c` is the the final node in the graph we can find nodes it depends
  // on through the relationships created via the input arguments.
  const res = await substrate.run(d);
  console.log(res.json);
}
main();
