#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, EmbedText, GenerateText } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api.substrate.run",
    backend: "v1",
  });

  const prompt = "expand this search query: rodger federer";
  const query = new GenerateText({ prompt, temperature: 1 });
  const emb = new EmbedText({ text: query.future.text });
  const res = await substrate.run(query, emb);
  console.log({
    prompt,
    a: res.get(query),
    b: res.get(emb).embedding.vector.slice(0, 10),
  });
}

main()
  .then(() => process.exit(0))
  .catch(console.error);
