#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, Box, sb, ComputeText } from "substrate";
import fs from "fs";
import { currentDir, sampleQuestion, aggregate, jqList } from "./util";

const models = [
  "Mistral7BInstruct",
  "Mixtral8x7BInstruct",
  "Llama3Instruct8B",
  "Llama3Instruct70B",
];
const max_tokens = 800;
const opts = { cache_age: 60 * 60 * 24 * 7 };

const numLayers = 3;
const question = process.argv[2] || sampleQuestion;

function getMixture(q: string, prev: any = null) {
  const prompt = prev
    ? sb.concat(aggregate, "\n\nquestion: ", q, "\n\nprevious:\n\n", prev)
    : q;
  return new Box({
    value: models.map(
      (model) =>
        new ComputeText({ prompt, model, max_tokens }, opts).future.text,
    ),
  });
}

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];
  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });
  const layers: Box[] = [getMixture(question)];
  const lastLayer = () =>
    sb.jq<"string">(layers[layers.length - 1]!.future.value, jqList);

  for (let i = 0; i < numLayers - 1; i++) {
    layers.push(getMixture(question, lastLayer()));
  }

  const final = new ComputeText(
    {
      prompt: sb.concat(aggregate, "\n\n", lastLayer()),
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

  const htmlTemplate = fs.readFileSync(`${currentDir}/index.html`, "utf8");
  const html = htmlTemplate
    .replace('"{{ individual }}"', JSON.stringify(jsonOut.layers, null, 2))
    .replace('"{{ question }}"', JSON.stringify(question))
    .replace('"{{ summaries }}"', `[${JSON.stringify(jsonOut.final)}]`);
  fs.writeFileSync("moa.html", html);
}

main().then(() => console.log(`꩜ Done. View by running \`open moa.html\``));
