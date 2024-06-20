#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, ComputeText, JinaV2 } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api-staging.substrate.run",
  });

  const a = new ComputeText({ prompt: "hi" });

  const input: JinaV2.Input = {
    items: [
      {
        text: a.future.text,
        doc_id: "doc_id",
        metadata: {
          updated_at: "updated_at",
        },
      },
    ],
  };

  const b = new JinaV2(input);

  const res = await substrate.run(b);

  console.log(res.json);
}
main();
