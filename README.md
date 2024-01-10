# Substrate TypeScript SDK

Welcome to the [**Substrate SDK for TypeScript & JavaScript**]()!

This library provides code to allow for simple integrations of the [Substrate API]() into your applications.

## Installation

```sh
npm install substrate --save
# or
yarn add substrate
```

## Usage

See our [Guides]() and [API Reference]() for more examples and use cases.

```typescript
import { Substrate, Graph, Mistral, Jina } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

// Create a Substrate API client
const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const text = "Something you want to summarize...";

// Create a Mistral summarization node
const mistral = new Mistral({ id: "summary" })
  .setArgs({ prompts: [{ prompt: `Summarize the following: ${text}` }] })
  .setOutput();

// Create a Jina embedding node
const jina = new Jina({ id: "embedding" }).setOutput();

// Create a Graph that connects the two together
const graph = new Graph().withEdge([
  mistral,
  jina,
  ({ data }: Mistral.Output): Jina.Args => ({
    docs: data!.flatMap(({ completions }) =>
      completions.map((completion) => ({ text: completion })),
    ),
  }),
]);

// Run the Graph and see print the result
const result = await substrate.compose(graph);
console.log(result);
```

## Requirements

TypeScript 4.5+ (?)

Supported runtimes:
* Node.js 18+
* ...
