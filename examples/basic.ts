#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, ComputeText, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const story = new ComputeText({ prompt: "tell me a story" });
  const summary = new ComputeText({
    prompt: sb.interpolate`summarize this story in one sentence: ${story.future.text}`,
  });

  const res = await substrate.run(story, summary);

  const summaryOut = res.get(summary);
  console.log(summaryOut.text);

  const visualize = Substrate.visualize(story, summary);
  console.log(visualize);
}
main();
