#!/usr/bin/env -S npx ts-node --transpileOnly

import { Substrate, Box } from "substrate";

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

  // One way to see that the edges determine the node run order is to use the RunPython node to print the
  // timestamp of when the node was run. Because the RunPython node isn't available in the TypeScript SDK
  // I've taken a pickled python function that does a `print(time.time())` and am overriding the nodes
  // here to be RunPython nodes instead.
  const toRunPython = (node: Box) => {
    node.node = "RunPython";
    node.args = {
      pkl_function:
        "gAWV5QEAAAAAAACMF2Nsb3VkcGlja2xlLmNsb3VkcGlja2xllIwOX21ha2VfZnVuY3Rpb26Uk5QoaACMDV9idWlsdGluX3R5cGWUk5SMCENvZGVUeXBllIWUUpQoSwBLAEsASwFLAktDQxBkAWQAbAB9AHwAoAChAFMAlE5LAIaUjAR0aW1llIWUaAuMOC9Vc2Vycy9saWFtL3dvcmsvc3Vic3RyYXRlLXB5dGhvbi9leGFtcGxlcy9ydW5fcHl0aG9uLnB5lIwKcHJpbnRfdGltZZRLKEMECAEIAZQpKXSUUpR9lCiMC19fcGFja2FnZV9flE6MCF9fbmFtZV9flIwIX19tYWluX1+UjAhfX2ZpbGVfX5RoDHVOTk50lFKUaACMEl9mdW5jdGlvbl9zZXRzdGF0ZZSTlGgXfZR9lChoE2gNjAxfX3F1YWxuYW1lX1+UaA2MD19fYW5ub3RhdGlvbnNfX5R9lIwOX19rd2RlZmF1bHRzX1+UTowMX19kZWZhdWx0c19flE6MCl9fbW9kdWxlX1+UjAhfX21haW5fX5SMB19fZG9jX1+UTowLX19jbG9zdXJlX1+UTowXX2Nsb3VkcGlja2xlX3N1Ym1vZHVsZXOUXZSMC19fZ2xvYmFsc19flH2UdYaUhlIwLg==",
      kwargs: {},
      pip_install: null,
      python_version: "3.10.13",
    };
    return node;
  };

  const a = toRunPython(new Box({ value: "" }, { id: "a" }));

  const b = toRunPython(new Box({ value: "" }, { id: "b", depends: [a] }));

  const c = toRunPython(new Box({ value: "" }, { id: "c", depends: [b] }));

  const res = await substrate.run(c, a, b);
  console.log(res.json);
}
main();
