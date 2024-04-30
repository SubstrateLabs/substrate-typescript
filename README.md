# ꩜ Substrate TypeScript SDK

[![NPM version](https://img.shields.io/npm/v/substrate.svg)](https://npmjs.org/package/substrate)

The Substrate TypeScript SDK is the recommended way to interact with the Substrate API from server-side TypeScript or JavaScript.

## Documentation

If you're just getting started, head to [guides.substrate.run](https://guides.substrate.run/). 

For a detailed API reference covering the nodes available on Substrate, see [substrate.run/nodes](https://www.substrate.run/nodes).

For an interactive reference, check out [explore.substrate.run](https://explore.substrate.run/). You can call `Substrate.visualize(...nodes...)` to generate an [interactive visualization](https://explore.substrate.run/s/eNqNUstOwzAQ_BXLyjGVaEEFcgNKy0uiakEcULUyyZKaOnawN4UQ5d-xmwpVohLc1rOe2fGsG65Nho4nzw2XGU82xz5cwvC9nPeGPN4AHp-gRisIH_CTPCps7kkNL60pSvJ9QqVYgUwwR8bWvI05uKWpVAamorIiyJV5EUrVPCFbYRvvDBzA7al-Gn307v49sOEAUTQ_h8nsbHoF91O4HkURgGe-VlRZPIRZf_x4MC7fePunmUW8Ze0k8Usm5pm0mJJcY5hPdRl8OrJS573U6FQEo5Kw6FQ6AQhiulIq5muhAqEqCmHlFzJaStfFxaRmRiNzqAl1ignjIaAdhW09gN7N8exodHLBt3pBul20P3nuubfPNlmRou8ZK3OpIYQO-z-AKcGRSFf737TCerP9bklpis4Z6xFBZHnw5aPFLN8E60upJUmhYLvOtv0GiZraBQ) of any graph.


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

