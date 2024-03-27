#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, GenerateText } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const a = new GenerateText({
  prompt:
    "in very few words describe an incredible historcal technical achievement",
}).run(substrate);

console.log({ text: await a.future.text.result() });
