#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, StableDiffusion, Graph } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const args: StableDiffusion.Args = {
  prompt:
    "cinematic film still of a translucent (cybernetic chip data center predatory spiral Conus Conidae shell)1.5, (glowing veins)1.3 (cables going into body, circuits)1.3, extremely detailed, vignette, highly detailed, high budget, bokeh, moody, epic, gorgeous, film grain, grainy",
  negative_prompt:
    "(humanoid)1.3, anime, cartoon, graphic, text, painting, crayon, graphite, ugly, (nipples)1.5, woman, girl, female, oversaturated, blur, blurry",
  width: 1024,
  height: 1024,
  use_refiner: true,
  steps: 40,
  return_base64: true,
};

const sdxl = new StableDiffusion({ args }).setOutput();

const graph = new Graph().withNode(sdxl);

const result = await substrate.compose(graph);
console.log(JSON.stringify(result));
