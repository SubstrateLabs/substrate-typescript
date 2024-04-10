#!/usr/bin/env -S npx ts-node --transpileOnly

import {
  Substrate,
  StableDiffusionXLLightning,
  StableDiffusionXLTurbo,
} from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api.substrate.run",
  });

  const prompt = "swimming in jelly and having a great time";

  const a = new StableDiffusionXLLightning({
    prompt,
    height: 512,
    width: 800,
    store: "hosted",
  });

  const b = new StableDiffusionXLTurbo({
    prompt,
    height: 512,
    width: 800,
    store: "hosted",
  });

  const res = await substrate.run(a, b);

  console.log({
    a: res.get(a).outputs.at(0)?.image_uri,
    b: res.get(b).outputs.at(0)?.image_uri,
  });
}
main();
