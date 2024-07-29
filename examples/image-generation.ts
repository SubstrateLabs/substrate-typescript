#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, ComputeText, GenerateImage } from "substrate";

async function main() {
  const substrate = new Substrate({ apiKey: process.env["SUBSTRATE_API_KEY"] });

  const scene = new ComputeText({
    prompt:
      "describe a highly detailed forest scene with something surprising happening in one sentence, be concise, like Hemingway would write it.",
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

  const res = await substrate.run(scene, ...images);

  console.log({
    scene: res.get(scene),
    images: images.map((node, i: number) => ({
      style: styles[i],
      image: res.get(node).image_uri,
    })),
  });
}
main();
