#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, GenerateImage, Graph } from "@substratelabs/substrate-typescript";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const args: GenerateImage.Args = {
  prompt:
    "cinematic film still of a translucent (cybernetic chip data center predatory spiral Conus Conidae shell)1.5, (glowing veins)1.3 (cables going into body, circuits)1.3, extremely detailed, vignette, highly detailed, high budget, bokeh, moody, epic, gorgeous, film grain, grainy",
  negative_prompt:
    "(humanoid)1.3, anime, cartoon, graphic, text, painting, crayon, graphite, ugly, oversaturated, blur, blurry",
  width: 512,
  height: 512,
  refinement: 8,
};

const genImg = new GenerateImage()
  .setArgs(args)
  .setOutput();

const graph = new Graph().withNode(genImg)

const result = await substrate.compose(graph);
console.log(JSON.stringify(result));
