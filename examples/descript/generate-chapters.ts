#!/usr/bin/env -S npx ts-node --transpileOnly --esm
import fs from "fs";
import { ComputeJSON, sb, Substrate, TranscribeSpeech } from "substrate";
import {
  currentDir,
  listChapters,
  proposedSchema,
  timestampedSchema,
  timestampPrompt,
} from "./util";

/**
 * Other hosted audio files:
 * https://media.substrate.run/federer-dartmouth.m4a
 * https://media.substrate.run/kaufman-bafta-short.mp3
 * https://media.substrate.run/dfw-clip.m4a
 */
// const audio_uri = "https://media.substrate.run/my-dinner-andre.m4a";
const audio_uri = "https://media.substrate.run/federer-dartmouth.m4a";
const substrate = new Substrate({
  apiKey: process.env["SUBSTRATE_API_KEY"],
});

const outfile = process.argv[2] || "descript.html";
async function main() {
  const transcribe = new TranscribeSpeech(
    { audio_uri, segment: true, align: true },
    { cache_age: 60 * 60 * 24 * 7 },
  );
  const chapters = new ComputeJSON({
    prompt: sb.concat(
      listChapters,
      "\n\nTRANSCRIPT:\n\n",
      transcribe.future.text,
    ),
    json_schema: proposedSchema,
    model: "Mixtral8x7BInstruct",
  });
  const timestamps = new ComputeJSON({
    prompt: sb.concat(
      timestampPrompt,
      "SECTIONS: ",
      sb.jq<"string">(chapters.future.json_object, ".chapters | @json"),
      "\n\nTRANSCRIPT:\n\n",
      transcribe.future.text,
    ),
    json_schema: timestampedSchema,
    model: "Mixtral8x7BInstruct",
  });
  const res = await substrate.run(transcribe, chapters, timestamps);
  console.log(JSON.stringify(res.get(timestamps), null, 2));
  const transcript = res.get(transcribe);
  // @ts-ignore
  const timestampedChapters = res.get(timestamps).json_object?.chapters;
  const htmlTemplate = fs.readFileSync(`${currentDir}/index.html`, "utf8");
  const html = htmlTemplate
    .replace('"{{ segments }}"', JSON.stringify(transcript.segments, null, 2))
    .replace('"{{ chapters }}"', JSON.stringify(timestampedChapters, null, 2))
    .replace("{{ audioUrl }}", audio_uri);
  fs.writeFileSync(outfile, html);
}

main().then(() => console.log(`꩜ Done. View by running \`open ${outfile}\``));
