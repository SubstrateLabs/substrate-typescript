#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, Box, sb, ComputeText } from "substrate";
import fs from "fs";
const question =
  "What was Arendt's notion of Freedom? How did she distinguish it from Action?";
const aggregate = `You have been provided with a set of responses from various open-source models to the latest user query. Your task is to synthesize these responses into a single, high-quality response. It is crucial to critically evaluate the information provided in these responses, recognizing that some of it may be biased or incorrect. Your response should not simply replicate the given answers but should offer a refined, accurate, and comprehensive reply to the instruction. Ensure your response is well-structured, well-considered, and adheres to the highest standards of accuracy and reliability. Do not respond as if we're having a conversation, just output an objective response.`;
const jqList = (offset: number) =>
  `to_entries | map(((.key + ${offset} + 1) | tostring) + ". " + .value) | join("\n")`;
const numLayers = 3;
const models = [
  "Mistral7BInstruct",
  "Mixtral8x7BInstruct",
  "Llama3Instruct8B",
  "Llama3Instruct70B",
];
const max_tokens = 800;
const opts = { cache_age: 60 * 60 * 24 * 7 };

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];
  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });
  const layers: Box[] = [getMixture(question)];
  const getPrev = () =>
    sb.concat(
      ...layers
        .map((l, i) =>
          sb.jq<"string">(l.future.value, jqList(i * models.length)),
        )
        .flatMap((x) => [x, "\n"])
        .slice(0, -1),
    );

  for (let i = 0; i < numLayers - 1; i++) {
    layers.push(getMixture(question, getPrev()));
  }

  const final = new ComputeText(
    {
      prompt: sb.interpolate`${aggregate}\n\n${getPrev()}`,
      model: "Llama3Instruct70B",
      max_tokens,
    },
    opts,
  );
  const box = new Box({
    value: {
      layers: layers.map((l) => l.future.value),
      final: final.future.text,
    },
  });

  const res = await substrate.run(box);
  const jsonOut: any = res.get(box).value;

  const htmlTemplate = fs.readFileSync("moe.html", "utf8");
  const html = htmlTemplate
    .replace('"{{ individual }}"', JSON.stringify(jsonOut.layers, null, 2))
    .replace('"{{ question }}"', JSON.stringify(question))
    .replace('"{{ summaries }}"', `[${JSON.stringify(jsonOut.final)}]`);
  fs.writeFileSync("moe.json", JSON.stringify(jsonOut, null, 2));
  fs.writeFileSync("moe-result.html", html);

  const visualize = Substrate.visualize(box);
  console.log(visualize);
}

function getMixture(q: string, prev: any = null) {
  const prompt = prev
    ? sb.interpolate`${aggregate}\n\nquestion: ${q}\n\nprevious:\n\n${prev}`
    : q;
  const answers = models.map(
    (model) => new ComputeText({ prompt, model, max_tokens }, opts),
  );
  return new Box({ value: answers.map((a) => a.future.text) });
}

main();
