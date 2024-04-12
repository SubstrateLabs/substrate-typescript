#!/usr/bin/env -S npx ts-node --transpileOnly

// import { Substrate, JinaV2, CreateVectorStore } from "substrate";
//
// async function main() {
//   const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];
//
//   const substrate = new Substrate({
//     apiKey: SUBSTRATE_API_KEY,
//     backend: "v1",
//   });
//
//   // const a = new CreateVectorStore({ name: "rob-test-vec", model: "jina-v2" });
//   const items = new Array(100).fill(0).map((_, i) => ({
//     text: `test ${i}`,
//     doc_id: `1234-robtestskdjflksdj ${i}`,
//     metadata: { foo: "bar" },
//   }));
//   const a = new JinaV2({
//     items: items,
//     store: "rob-test-vec",
//   });
//   const res = await substrate.run(a);
//   console.log(res.get(a));
// }
// main();

import { Substrate, GenerateJSON } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    backend: "v1",
  });

  const input: GenerateJSON.Input = {
    prompt: `The following posts are all related to a single trending topic. Respond with a json object for a single hashtag that relates to all of the post. Starts with a # hash and no spaces. POSTS:

- "This post discusses how Israel can improve its public relations strategy to counter international criticism and negative media coverage during times of conflict, specifically in relation to Hamas in Gaza."
- "The author, Joanna Landau, reflects on the six-month anniversary of a tragic event in Israel and her feelings of no longer being unique in her grief. She discusses the current state of the Israeli-Palestinian conflict and the demands for a ceasefire."
- "This essay explores the convergence of progressive and regressive extremism, also known as the 'Red-Green Alliance', and its impact on Western institutions and foreign policy towards Israel and other countries."
- "In this post, Francisco shares his experience of being awake but blind and deaf, describing the strange sensations and thoughts that arise in such a state."
- "The author urges Israel to take a stronger stance against Iran in response to its involvement in various conflicts, including the October 7th attack and the ongoing situation in Gaza. The author is pleased with Israel's recent actions against Hezbollah and Iran's oil infrastructure, but believes that more needs to be done to deter Iran from becoming a nuclear power and regional hegemon."
- "Janie, a default parent who always puts her family first, is looking forward to a rare night out. But when her husband Jake is late from work, she's left feeling disappointed and overlooked once again."
`,
    max_tokens: 40,
    temperature: 0.5,
    json_schema: {
      type: "object",
      properties: {
        hash_tag: {
          type: "string",
          description: "A hashtag that relates to all these posts, e.g. #MyTag",
          maxLength: 27,
          pattern: "^#[^\\s]+$",
        },
      },
      required: ["hash_tag"],
    },
  };

  const a = new GenerateJSON(input);
  const res = await substrate.run(a);
  console.log(res.get(a));
}
main();
