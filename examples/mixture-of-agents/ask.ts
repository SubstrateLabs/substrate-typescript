#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, Box, sb, ComputeText } from "substrate";
import fs from "fs";
import { currentDir, sampleQuestion, aggregate, jqList } from "./util";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];
const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const models = [
  "Llama3Instruct405B",
  "claude-3-5-sonnet-20240620",
  "Llama3Instruct70B",
  "gpt-4o-mini",
  "Llama3Instruct8B",
  "Mixtral8x7BInstruct",
];
const aggregatorModel = "claude-3-5-sonnet-20240620";
const max_tokens = 400;
const temperature = 0.4;
const opts = { cache_age: 60 * 60 * 24 * 7 };

const numLayers = 3;
const question = process.argv[2] || sampleQuestion;

function getPrompt(prev: any = null) {
  return prev
    ? sb.concat(
        aggregate,
        "\n\nuser query: ",
        question,
        "\n\nprevious responses:\n\n",
        prev,
      )
    : question;
}

function getMixture(prev: any = null) {
  return new Box({
    value: models.map(
      (model) =>
        new ComputeText(
          { prompt: getPrompt(prev), model, max_tokens, temperature },
          opts,
        ).future.text,
    ),
  });
}

function getLastLayer(layers: Box[]) {
  return sb.jq<"string">(layers[layers.length - 1]!.future.value, jqList);
}

async function main() {
  const layers: Box[] = [getMixture(question)];
  for (let i = 0; i < numLayers - 1; i++) {
    layers.push(getMixture(getLastLayer(layers)));
  }
  const final = new ComputeText(
    {
      prompt: getPrompt(getLastLayer(layers)),
      model: aggregatorModel,
      max_tokens: 800,
      temperature,
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
