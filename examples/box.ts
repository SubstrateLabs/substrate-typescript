#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, ComputeText, Box, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const languages = ["swedish", "ukranian", "thai", "turkish"] as const;

  const texts: Record<string, ComputeText> = languages.reduce(
    (nodes, language) => {
      return {
        ...nodes,
        [language]: new ComputeText({
          prompt: sb.interpolate`count to 10 in ${language}`,
          max_tokens: 50,
        }),
      };
    },
    {},
  );

  const box = new Box({
    value: languages.reduce((obj, language) => {
      return {
        ...obj,
        [language]: texts[language]!.future.text,
      };
    }, {}),
  });

  const res = await substrate.run(box);

  console.log({ box: res.get(box) });
}
main();
