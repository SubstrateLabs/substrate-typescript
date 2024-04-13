#!/usr/bin/env -S npx ts-node --transpileOnly

import {
  Substrate,
  QueryVectorStore,
  ListVectorStores,
  JinaV2,
  CreateVectorStore,
  DeleteVectorStore,
  FetchVectors,
  UpdateVectors,
} from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api-staging.substrate.run",
  });

  const create = new CreateVectorStore({
    name: "vibes",
    model: "jina-v2",
  });

  const list = new ListVectorStores({});

  const insert = new JinaV2({
    items: [{ text: "tell me about celsius oasis vibe", doc_id: "celsius" }],
    store: "vibes",
  });

  const query = new QueryVectorStore({
    name: "vibes",
    model: "jina-v2",
    query_strings: ["celsius", "oasis vibe"],
  });

  const fetch = new FetchVectors({
    name: "vibes",
    model: "jina-v2",
    ids: ["celsius"],
  });

  const update = new UpdateVectors({
    name: "vibes",
    model: "jina-v2",
    vectors: [
      {
        id: "celsius",
        metadata: { some_metadata: "12345" },
      },
    ],
  });

  const destroy = new DeleteVectorStore({ name: "vibes", model: "jina-v2" });

  const res = await substrate.run(
    create,
    list,
    insert,
    query,
    fetch,
    update,
    destroy,
  );

  console.log("create", res.get(create));
  console.log("list", res.get(list));
  console.log("insert", res.get(insert));
  console.log("query", res.get(query));
  console.log("fetch", res.get(fetch));
  console.log("update", res.get(update));
  console.log("destroy", res.get(destroy));
}
main();
