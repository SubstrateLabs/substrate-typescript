# Substrate TypeScript SDK

[![NPM version](https://img.shields.io/npm/v/substrate.svg)](https://npmjs.org/package/substrate)

The Substrate TypeScript SDK is the recommended way to interact with the Substrate API from server-side TypeScript or JavaScript.

## Documentation

If you're just getting started, head to [docs.substrate.run](https://docs.substrate.run/).

For a detailed API reference covering the nodes available on Substrate, see [substrate.run/nodes](https://www.substrate.run/nodes).

## Installation

```sh
npm install substrate
```

## Usage

```typescript
import { Substrate, ComputeText, sb } from "substrate";
```

Initialize the Substrate client.

```typescript
const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });
```

Generate a story using the [`ComputeText`](https://www.substrate.run/nodes#ComputeText) node.

```typescript
const story = new ComputeText({ prompt: "tell me a story" });
```

Summarize the output of the `story` node using another `ComputeText` node. Because `story` has not yet been run, we use `sb.interpolate` to work with its future output.

```typescript
const summary = new ComputeText({
  prompt: sb.interpolate`summarize this story in one sentence: ${story.future.text}`,
});
```

Run the graph chaining `story` → `summary` by passing the terminal node to `substrate.run`.

```typescript
const response = await substrate.run(summary);
```

Get the output of the summary node by passing it to `response.get`.

```typescript
const summaryOut = response.get(summary);
console.log(summaryOut.text);
// Princess Lily, a kind-hearted young princess, discovers a book of spells and uses it to grant her family and kingdom happiness.
```

## Examples

We're always creating new JS examples on [val.town](https://www.val.town/u/substrate/folders/Examples?folderId=61e21628-4209-11ef-bf47-de64eea55b61).

Many examples are also included in the `examples` directory.
