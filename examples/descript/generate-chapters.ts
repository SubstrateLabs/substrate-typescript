#!/usr/bin/env -S npx ts-node --transpileOnly --esm
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { ComputeJSON, sb, Substrate, TranscribeSpeech } from "substrate";
import { listChapters, proposedSchema } from "./util";

// @ts-ignore
const dir = dirname(fileURLToPath(import.meta.url));
/**
 * Other hosted audio files:
 * https://media.substrate.run/federer-dartmouth.m4a
 * https://media.substrate.run/kaufman-bafta-short.mp3
 * https://media.substrate.run/dfw-clip.m4a
 */
const audio_uri = "https://media.substrate.run/my-dinner-andre.m4a";
const substrate = new Substrate({
  apiKey: process.env["SUBSTRATE_API_KEY"],
  additionalHeaders: { "x-substrate-debug": "1" },
});

const outfile = process.argv[2] || "descript.html";
async function main() {
  const transcribe = new TranscribeSpeech(
    { audio_uri, segment: true, align: true },
    { cache_age: 60 * 60 * 24 * 7 },
  );
  const chapters = new ComputeJSON({
    prompt: sb.interpolate`${listChapters}TRANSCRIPT:${transcribe.future.text}`,
    json_schema: proposedSchema,
    model: "Mixtral8x7BInstruct",
  });
  const res = await substrate.run(transcribe, chapters);
  console.log(JSON.stringify(res.get(chapters), null, 2));
  const transcript = res.get(transcribe);
  const htmlTemplate = fs.readFileSync(`${dir}/index.html`, "utf8");
  const html = htmlTemplate
    .replace('"{{ transcriptData }}"', JSON.stringify(transcript, null, 2))
    .replace("{{ audioUrl }}", audio_uri);
  fs.writeFileSync(outfile, html);
}

main().then(() => console.log(`꩜ Done. View by running \`open ${outfile}\``));
