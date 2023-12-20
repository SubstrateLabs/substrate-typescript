#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, StableDiffusion } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const args: StableDiffusion.Input = {
  prompt:
    "cinematic film still of a translucent (cybernetic chip data center predatory spiral Conus Conidae shell)1.5, (glowing veins)1.3 (cables going into body, circuits)1.3, extremely detailed, vignette, highly detailed, high budget, bokeh, moody, epic, gorgeous, film grain, grainy",
  negative_prompt:
    "(humanoid)1.3, anime, cartoon, graphic, text, painting, crayon, graphite, ugly, oversaturated, blur, blurry",
  width: 512,
  height: 512,
  use_hosted_url: false,
  use_turbo: true,
  use_llm: false,
  use_ssd: false,
  guidance_scale: 0,
  steps: 4,
  return_base64: true,
};

const result = await substrate.models.StableDiffusion(args);
console.log(JSON.stringify(result));
