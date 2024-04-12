#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, GenerateText } from "substrate";

const hashPrompt = `The following posts are all related to a single trending topic. Please compute a single hashtag that relates all these posts, e.g. #TaylorSwift".


- "This post discusses how Israel can improve its public relations strategy to counter international criticism and negative media coverage during times of conflict, specifically in relation to Hamas in Gaza."
- "The author, Joanna Landau, reflects on the six-month anniversary of a tragic event in Israel and her feelings of no longer being unique in her grief. She discusses the current state of the Israeli-Palestinian conflict and the demands for a ceasefire."
- "This essay explores the convergence of progressive and regressive extremism, also known as the 'Red-Green Alliance', and its impact on Western institutions and foreign policy towards Israel and other countries."
- "In this post, Francisco shares his experience of being awake but blind and deaf, describing the strange sensations and thoughts that arise in such a state."
- "The author urges Israel to take a stronger stance against Iran in response to its involvement in various conflicts, including the October 7th attack and the ongoing situation in Gaza. The author is pleased with Israel's recent actions against Hezbollah and Iran's oil infrastructure, but believes that more needs to be done to deter Iran from becoming a nuclear power and regional hegemon."
- "Janie, a default parent who always puts her family first, is looking forward to a rare night out. But when her husband Jake is late from work, she's left feeling disappointed and overlooked once again."
`;

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    baseUrl: "https://api.substrate.run",
    backend: "v1",
  });

  const a = new GenerateText({
    prompt: hashPrompt,
    // "in very few words describe an incredible historcal technical achievement",
    max_tokens: 5,
  });

  const res = await substrate.run(a);

  const ar = res.get(a);
  console.log(ar);
}
main();
