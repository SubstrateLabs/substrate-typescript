#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, StableDiffusionXLControlNet } from "substrate";

async function main() {
  const substrate = new Substrate({ apiKey: process.env["SUBSTRATE_API_KEY"] });
  const image_uri = "https://media.substrate.run/logo-nopad-bg-white.png";
  const controlnet = new StableDiffusionXLControlNet({
    prompt: "sunlit bright birds-eye view of the ocean, turbulent choppy waves",
    image_uri: image_uri,
    control_method: "illusion",
    num_images: 4,
    store: "hosted",
    conditioning_scale: 1,
  });
  const res = await substrate.run(controlnet);
  console.log(res.get(controlnet));
}
main();
