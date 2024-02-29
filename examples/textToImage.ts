#!/usr/bin/env -S npm run ts-node --transpileOnly

import {
  // Substrate,
  GenerateText,
  GenerateImage,
  // Graph,
} from "@substratelabs/substrate-typescript";

// const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

// const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const txtArgs: GenerateText.Args = {
  prompt:
    "generate a caption describing a cat, no additional text, keep it concise, just one sentence",
};

const genTxt = new GenerateText().setArgs(txtArgs).setOutput();

const imgArgs: GenerateImage.Args = {
  prompt: genTxt.ref.text,
};
// const ref = genTxt.ref.text;
// const ref = genTxt.ref.text[0];
// console.log(ref);
const genImg = new GenerateImage({ args: imgArgs }).setOutput();
console.log(genImg);

// const imgArgs: GenerateImage.Args = ;
// const genImg = new GenerateImage({ prompt = genTxt.ref.text })
//   // .setArgs(imgArgs)
//   .setOutput();

// const graph = new Graph().withNode(genImg);
// console.log(graph.toJSON());

// const result = await substrate.compose(graph);
// console.log(JSON.stringify(result));
