#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, RunPython } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const node = new RunPython({
    code: "import numpy as np; print(SB_IN['foo']); SB_OUT['result']=np.sum([1,2]).item()",
    input: {
      foo: "bar",
    },
    pip_install: ["numpy"],
  });

  const res = await substrate.run(node);

  console.log(res.get(node));
}
main();
