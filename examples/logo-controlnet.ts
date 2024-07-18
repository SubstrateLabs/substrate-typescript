#!/usr/bin/env -S npx ts-node --transpileOnly

import {
  Substrate,
  StableDiffusionXLControlNet,
  RemoveBackground,
} from "substrate";

async function main() {
  const substrate = new Substrate({ apiKey: process.env["SUBSTRATE_API_KEY"] });
  const image_uri =
    "https://substackcdn.com/image/fetch/w_500,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Fsubstack.png";
  const mask = new RemoveBackground({
    image_uri,
    return_mask: true,
    store: "hosted",
  });
  const controlnet = new StableDiffusionXLControlNet({
    prompt: "sunlit bright birds-eye view of the ocean, turbulent choppy waves",
    image_uri: mask.future.image_uri,
    control_method: "illusion",
    num_images: 4,
    store: "hosted",
    conditioning_scale: 1,
  });

  const res = await substrate.run(controlnet);
  console.log(res.get(controlnet));
}
main();
