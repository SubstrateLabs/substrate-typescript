#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, ComputeJSON, ComputeText, sb } from "substrate";
import fs from "fs";
import { currentDir, jsonSchema } from "./util";
const sampleBook = "War and Peace by Tolstoy";
const book = process.argv[2] || sampleBook;
const substrate = new Substrate({ apiKey: process.env["SUBSTRATE_API_KEY"] });

const opts = { cache_age: 60 * 60 * 24 * 7 };
async function main() {
  const initialList = new ComputeText(
    {
      prompt: `List all the main characters in "${book}", then for all the meaningful relationships between them, provide a short label for the relationship`,
      model: "Llama3Instruct405B",
    },
    opts,
  );
  const graph = new ComputeJSON(
    {
      prompt: sb.interpolate`Make a JSON graph composed of the characters in ${book} that illustrates the relationships between them. 
Use this context:
${initialList.future.text}`,
      json_schema: jsonSchema,
      temperature: 0.2,
      model: "Llama3Instruct8B",
    },
    opts,
  );
  const res = await substrate.run(graph);
  const jsonOut = res.get(graph).json_object;
  const htmlTemplate = fs.readFileSync(`${currentDir}/index.html`, "utf8");
  const html = htmlTemplate
    .replace('"{{ graphData }}"', JSON.stringify(jsonOut, null, 2))
    .replaceAll("{{ title }}", book);
  fs.writeFileSync("knowledge-graph.html", html);
}
main();
