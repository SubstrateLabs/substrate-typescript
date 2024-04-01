#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, GenerateText, GenerateImage } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({
  apiKey: SUBSTRATE_API_KEY,
  baseUrl: "https://api.substrate.run",
});

const scene = new GenerateText({
  prompt:
    "describe a highly detailed forest scene with something suprising happening in one sentence, be concise, like hemmingway would write it.",
});

const styles = [
  "whimsical post-impressionist watercolor",
  "1960's saturday cartoon",
  "woodblock printed",
  "art nouveau poster",
  "low-res 8-bit video game graphics",
];

const images = styles.map((style) => {
  return new GenerateImage({
    prompt: scene.future.text.concat(` render in a ((${style})) style`),
    store: "hosted",
  });
});

await substrate.run(scene, ...images);

console.log({
  scene: await scene.future.text.result(),
  images: (await Promise.all(images.map((i) => i.result()))).map(
    ({ image_uri }, i: number) => ({
      style: styles[i],
      image_uri,
    }),
  ),
});