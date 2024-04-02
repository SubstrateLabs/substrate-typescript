#!/usr/bin/env -S npx ts-node --transpileOnly

/**
 * Demonstrates how node results behave when they are run multiple times.
 *
 * Whenever you call `.result()` (on a Node or Future) you will get access to
 * the *last* resolved result if there is one, otherwise you will get a
 * pending result which will resolve eventually when the node is run.
 */

import { Substrate, GenerateText } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const a = new GenerateText({
  prompt:
    "in very few words describe an incredible moment in sports history, be extremely concise",
});

a.result().then((result) => {
  // we can access a node's result before the node is run.
  // when it eventually resolves we'll have access to it's
  // value here.
  console.log("[2]", result.text);
});

// we can also grab a reference to the pending result here
// because the has has not been run yet
const f1 = a.future.text.result();

// we can run the node, but not block
substrate.run(a);
console.log("[1]", "Running node for the first time!");

// and then wait on the first result
console.log("[3]", await f1);

// at this point the node has some resolved result and so
// when we access it's result again, we will get the same
// value we had in `f1`
let f2 = a.future.text.result();
console.log("[4]", "await f1 === await f2 =", (await f1) === (await f2)); // true

// now let's run the node again
await substrate.run(a);
console.log("[5]", "Running node a second time!");

// since we waited for the result to come back from the
// last run, we are expecting to get the latest value,
// and it should be different than the first
let f3 = a.future.text.result();
console.log("[6]", await f3);
console.log("[7]", "await f1 !== await f3 =", (await f1) !== (await f3)); // true

// if we look back at the previous results we should see
// that the first two are still the same, but the third
// is the result of our second run.
console.log("[8]", "value from first run =", await f1);
console.log("[9]", "value from first run =", await f2);
console.log("[10]", "value from second run =", await f3);
