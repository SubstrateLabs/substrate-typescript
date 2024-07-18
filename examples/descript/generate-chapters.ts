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
const sample = "https://media.substrate.run/federer-dartmouth.m4a";
const substrate = new Substrate({ apiKey: process.env["SUBSTRATE_API_KEY"] });
const audio_uri = process.argv[2] || sample;
const outfile = process.argv[3] || "descript.html";
const opts = { cache_age: 60 * 60 * 24 * 7 };
async function main() {
  const transcribe = new TranscribeSpeech(
    { audio_uri, segment: true, align: true },
    opts,
  );
  const chapters = new ComputeJSON(
    {
      prompt: sb.concat(
        listChapters,
        "\n\nTRANSCRIPT:\n\n",
        transcribe.future.text,
      ),
      json_schema: proposedSchema,
      model: "Mixtral8x7BInstruct",
    },
    opts,
  );
  const timestamps = new ComputeJSON(
    {
      prompt: sb.concat(
        timestampPrompt,
        "SECTIONS: ",
        sb.jq<"string">(chapters.future.json_object, ".chapters | @json"),
        "\n\nTRANSCRIPT:\n\n",
        transcribe.future.text,
      ),
      json_schema: timestampedSchema,
      model: "Mixtral8x7BInstruct",
    },
    opts,
  );
  const res = await substrate.run(transcribe, chapters, timestamps);
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
