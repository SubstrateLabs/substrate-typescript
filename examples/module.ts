#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, Box, Module, sb } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];
  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  const x = sb.var({ type: "string", default: "hello" });
  const y = sb.var({ type: "string" });
  const z = sb.var({ type: "object", properties: {} });

  const a = new Box({ value: { a: x, z: z, array: [x, x, x] } }, { id: "A" });
  const b = new Box(
    { value: { b: sb.interpolate`x=${a.future.value.get("a")}, y=${y}` } },
    { id: "B" },
  );

  // publish the module on substrate.run
  const publication = await substrate.module.publish({
    name: "my reusable graph",
    nodes: [a, b],
    inputs: { x, y, z },
  });
  console.log("published:", publication.json);

  // using the module from JSON
  const mod = new Module({
    module_json: substrate.module.serialize({
      nodes: [a, b],
      inputs: { x, y, z },
    }),
    inputs: {
      // when commented will use "hello" because it is defined as the default above
      // x: 123,
      y: "yyy",
      z: {
        arr: ["123"],
      },
    },
  });

  // using the module from publication/module id
  // const mod = new Module({
  //   module_id: publication.id,
  //   inputs: { y: "yyy", z: { arr: ["123"] } },
  // });

  const c = new Box(
    {
      value: {
        "1": mod.future.get("A.value.z.arr[0]"),
        "2": mod.future.get("B.value.b"),
      },
    },
    { id: "C" },
  );

  const res = await substrate.run(mod, c);
  console.log(JSON.stringify(res.json, null, 2));
}
main();
