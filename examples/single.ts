#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, GenerateText, GenerateImage, sb } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const a = new GenerateText({ prompt: "in very few words describe an incredible historcal technical achievement" });

const imagePrompt = await sb.concat("polaroid photo of: ", a.future.text).result();

const b = new GenerateImage({ prompt: imagePrompt, store: "hosted" }).run(substrate);

console.log(await b.future.image_uri.result());
