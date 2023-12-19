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
import { Substrate, Adapter, Graph, Mistral, Jina } from "substrate";

// Create a Substrate API client using your API Key
const substrate = new Substrate({ apiKey: "SUBSTRATE_API_KEY" });

async function main() {
    const text = "Something you want to summarize...";

    // Create a `Mistral` node that can summarize your input text
    const mistral = new Mistral({ id: "summary" })
        .withArgs({ input_prompts: [`Summarize the following: ${text}`] })
        .setOutput()
        .setAdapters([
            Adapter.Get.path("completions[0].text", "texts"),
            Adapter.WrapInList.key("texts"),
            Adapter.Pick.keys(["texts"]),
        ]);

    // Create a `Jina` node that accepts `texts` inputs from `Mistral` node and creates an embedding
    const jina = new Jina({ id: "embedding" }).setOutput();

    // Create a `Graph` that connects the two nodes together
    const graph = new Graph().withEdge([mistral, jina, {}]);

    // Run the `Graph` on the Substrate platform and see the result
    const result = await substrate.compose(graph);
    console.log(result);
}

main();
```

## Requirements

TypeScript 4.5+ (?)

Supported runtimes:
* Node.js 18+
* ...
