# ꩜ Substrate TypeScript SDK

[![NPM version](https://img.shields.io/npm/v/substrate.svg)](https://npmjs.org/package/substrate)

The Substrate TypeScript SDK is the recommended way to interact with the Substrate API from server-side TypeScript or JavaScript.

## Documentation

If you're just getting started, head to [guides.substrate.run](https://guides.substrate.run/). 

For a detailed API reference covering the nodes available on Substrate, see [substrate.run/nodes](https://www.substrate.run/nodes).

For an interactive reference, check out [explore.substrate.run](https://explore.substrate.run/). You can call `substrate.visualize(...nodes...)` to generate an [interactive visualization](https://explore.substrate.run/s/eNrFU11LAzEQ_CtH6OP1oa0f0DetcFbqt6IissTceg2XS45kUzzL_XeTtkilVRQE35JJZnYyu5kzbXJ0bPg4ZzJnw8W2B-Z08jC-La9YugACnqFGywlv8JUCym0RSHNWW1PVFM4JlUoqTHjiyNiGtSkDNzVe5WA81Z6gUOaZK9WwIVmPbbpWsA9Z_TKhER_8uOCcAXQ614eQXR1cHMP5BYyPOh2AwHzx5C0OwHUzr-4vz1j7KzMD2J-Jomiy8d-Z2QPV34PTbnn5AzNP6Yq11paNN6UslxYFyRnG-tTU0acjK3XRFUYLHo1KwmqpshSAKKa9UimbcRUJvqq4lW-YRI50qJpE6sRoTBxqQi1wmLCYz5rAat2HXkN-cnuu2UouKrdP7UecW-5tc02WCwxnxspCaoiZw_ZhNDU44qLc_qQSm8UkLnskBDpnbEA4kWWbvtaa8kdpBlCH-MiEbzDlsvRfZrcLdzuj45N-b_p9dp_u_Wt2YSoxLxYzGZZSS5JcweontO07U4J3WQ) of any graph.

## Installation

```sh
npm install substrate
```

## Usage

```typescript
import { Substrate, GenerateText, sb } from "substrate";
```

Initialize the Substrate client.
```typescript
const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY })
```

Generate a story using the [`GenerateText`](https://www.substrate.run/nodes#GenerateText) node.
```typescript
const story = new GenerateText({ prompt: "tell me a story" });
```

Summarize the output of the `story` node using another `GenerateText` node. Because `story` has not yet been run, we use `sb.interpolate` to work with its future output.
```typescript
const summary = new GenerateText({
  prompt: sb.interpolate`summarize this story in one sentence: ${story.future.text}`,
});
```

Run the graph chaining `story` → `summary`. This is a simple example, but you can easily build arbitrarily complex branching workflows.
```typescript
const response = await substrate.run(story, summary);
```

Get the output of the summary node by passing it to `response.get`.
```typescript
const summaryOut = response.get(summary);
console.log(summaryOut.text);
// Princess Lily, a kind-hearted young princess, discovers a book of spells and uses it to grant her family and kingdom happiness.
```

