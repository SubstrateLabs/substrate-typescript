#!/usr/bin/env -S npx ts-node --transpileOnly

import {
  Substrate,
  QueryVectorStore,
  EmbedText,
  GenerateText,
} from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];
  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api.substrate.run",
    backend: "v1",
  });
  const joke = new GenerateText({
    prompt: "tell me a joke",
  });
  const jokeEmb = new EmbedText({
    text: joke.future.text,
  });
  const query = new QueryVectorStore({
    name: "feed_embeddings",
    model: "jina-v2",
    query_vectors: [jokeEmb.future.embedding.vector],
    // query_strings: ["hello world"],
  });
  const res = await substrate.run(query, joke, jokeEmb);
  console.log(res.get(query));
}

main()
  .then(() => process.exit(0))
  .catch(console.error);
