#!/usr/bin/env -S npx ts-node --transpileOnly
import fs from "fs";
import { Substrate, TranscribeSpeech } from "substrate";
import { currentDir } from "./util";

/**
 * Other hosted audio files:
 * https://media.substrate.run/federer-dartmouth.m4a
 * https://media.substrate.run/kaufman-bafta-short.mp3
 * https://media.substrate.run/dfw-clip.m4a
 */
const audio_uri = "https://media.substrate.run/my-dinner-andre.m4a";
const substrate = new Substrate({ apiKey: process.env["SUBSTRATE_API_KEY"] });

const outfile = process.argv[2] || "descript.html";
async function main() {
  const transcribe = new TranscribeSpeech(
    { audio_uri, segment: true, align: true },
    { cache_age: 60 * 60 * 24 * 7 },
  );
  const res = await substrate.run(transcribe);
  const transcript = res.get(transcribe);
  const htmlTemplate = fs.readFileSync(`${currentDir}/index.html`, "utf8");
  const html = htmlTemplate
    .replace('"{{ transcriptData }}"', JSON.stringify(transcript, null, 2))
    .replace("{{ audioUrl }}", audio_uri);
  fs.writeFileSync(outfile, html);
}

main().then(() => console.log(`꩜ Done. View by running \`open ${outfile}\``));
