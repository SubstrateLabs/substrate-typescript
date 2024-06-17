#!/usr/bin/env -S npx ts-node --transpileOnly

import {
  Substrate,
  ComputeText,
  MultiComputeText,
  ComputeJSON,
  MultiComputeJSON,
  Mistral7BInstruct,
  Firellava13B,
  GenerateImage,
  MultiGenerateImage,
  InpaintImage,
  MultiInpaintImage,
  StableDiffusionXLLightning,
  StableDiffusionXLInpaint,
  StableDiffusionXLControlNet,
  UpscaleImage,
  RemoveBackground,
  SegmentUnderPoint,
  SegmentAnything,
  TranscribeSpeech,
  GenerateSpeech,
  EmbedText,
  MultiEmbedText,
  EmbedImage,
  MultiEmbedImage,
  JinaV2,
  CLIP,
  FindOrCreateVectorStore,
  ListVectorStores,
  DeleteVectorStore,
  QueryVectorStore,
  FetchVectors,
  UpdateVectors,
  DeleteVectors,
  Mixtral8x7BInstruct,
  Llama3Instruct8B,
  Llama3Instruct70B,
  EraseImage,
} from "substrate";

// Some state-changing interactions will create a store or modify it's contents
// and some other calls require the store to exist to property work (eg embed to store).
// We'll be creating this store as one of the first examples for the other calls to
// use for this reason.
const VECTOR_STORE = "kitchen-sink";

const examples = [
  new FindOrCreateVectorStore({
    collection_name: VECTOR_STORE,
    model: "jina-v2",
  }),
  new ComputeText({
    prompt: "Who is Don Quixote?",
    temperature: 0.4,
  }),
  new MultiComputeText({
    prompt: "Who is Don Quixote?",
    num_choices: 2,
    temperature: 0.4,
  }),
  new ComputeJSON({
    prompt: "Who is Don Quixote?",
    json_schema: {
      title: "Person",
      type: "object",
      properties: {
        firstName: {
          type: "string",
          description: "The person's first name.",
        },
        lastName: {
          type: "string",
          description: "The person's last name.",
        },
        occupation: {
          type: "string",
          description: "The person's occupation.",
        },
      },
    },
    temperature: 0.4,
    max_tokens: 300,
  }),
  new MultiComputeJSON({
    prompt: "Who is Don Quixote?",
    json_schema: {
      title: "Person",
      type: "object",
      properties: {
        firstName: {
          type: "string",
          description: "The person's first name.",
        },
        lastName: {
          type: "string",
          description: "The person's last name.",
        },
        occupation: {
          type: "string",
          description: "The person's occupation.",
        },
      },
    },
    num_choices: 2,
    temperature: 0.4,
    max_tokens: 100,
  }),
  new Mistral7BInstruct({
    prompt: "Who is Don Quixote?",
    num_choices: 2,
    temperature: 0.5,
    max_tokens: 100,
  }),
  new Firellava13B({
    prompt: "what are these paintings of and who made them?",
    image_uris: [
      "https://media.substrate.run/docs-fuji-red.jpg",
      "https://media.substrate.run/docs-fuji-blue.jpg",
    ],
  }),
  new GenerateImage({
    prompt:
      "hokusai futuristic supercell spiral cloud with glowing core over turbulent ocean",
    store: "hosted",
  }),
  new MultiGenerateImage({
    prompt:
      "hokusai futuristic supercell spiral cloud with glowing neon core over turbulent ocean",
    store: "hosted",
    num_images: 2,
  }),
  new InpaintImage({
    image_uri: "https://media.substrate.run/docs-seurat.jpg",
    mask_image_uri: "https://media.substrate.run/spiral-logo.jpeg",
    prompt:
      "detailed cyberpunk anime characters in a futuristic city park by a pond at night, neon lights, dark noir cinematic HD",
    store: "hosted",
  }),
  new MultiInpaintImage({
    image_uri: "https://media.substrate.run/docs-klimt-park.jpg",
    mask_image_uri: "https://media.substrate.run/spiral-logo.jpeg",
    prompt:
      "large tropical colorful bright anime birds in a dark jungle full of vines, high resolution",
    num_images: 2,
    store: "hosted",
  }),
  new StableDiffusionXLLightning({
    prompt:
      "hokusai futuristic supercell spiral cloud with glowing core over turbulent ocean",
    store: "hosted",
    num_images: 2,
  }),
  new StableDiffusionXLInpaint({
    image_uri: "https://media.substrate.run/docs-klimt-park.jpg",
    mask_image_uri: "https://media.substrate.run/spiral-logo.jpeg",
    prompt:
      "large tropical colorful bright anime birds in a dark jungle full of vines, high resolution",
    num_images: 2,
  }),
  // FIXME: Running into the following error, this node does not seem operational yet
  // error: cannot reshape tensor of 0 elements into shape [0, -1, 1, 512] because the unspecified dimension size -1 can be any value and is ambiguous
  new StableDiffusionXLControlNet({
    image_uri: "https://media.substrate.run/spiral-logo.jpeg",
    prompt:
      "the futuristic solarpunk city of atlantis at sunset, cinematic bokeh HD",
    control_method: "illusion",
    num_images: 2,
    store: "hosted",
  }),
  // FIXME: As far as I can tell this is based on BigLama, which isn't yet operational
  new EraseImage({
    image_uri: "https://media.substrate.run/docs-klimt-park.jpg",
    mask_image_uri: "https://media.substrate.run/spiral-logo.jpeg",
    store: "hosted",
  }),
  new EmbedText({
    text: "Your text to embed",
    collection_name: VECTOR_STORE,
  }),
  new MultiEmbedText({
    items: [
      {
        text: "Some text",
      },
      {
        text: "Other text",
      },
    ],
    collection_name: VECTOR_STORE,
  }),
  new EmbedImage({
    image_uri: "https://media.substrate.run/docs-fuji-red.jpg",
  }),
  // FIXME: This one works without the Vector Store. Presumably because the VectorStore only supports Jina and Embed Image relies on CLIP
  new MultiEmbedImage({
    items: [
      {
        image_uri: "https://media.substrate.run/docs-fuji-red.jpg",
      },
      {
        image_uri: "https://media.substrate.run/docs-fuji-blue.jpg",
      },
    ],
    // store: VECTOR_STORE,
  }),
  // FIXME: This mostly works, but I'm running into issues using VectorStore here.
  // It seems to only fail for me on staging v1 (maybe some state problem there?)
  new JinaV2({
    items: [
      {
        text: "Some text",
      },
      {
        text: "Other text",
      },
    ],
    // store: VECTOR_STORE,
  }),
  new CLIP({
    items: [
      {
        image_uri: "https://media.substrate.run/docs-fuji-red.jpg",
      },
      {
        image_uri: "https://media.substrate.run/docs-fuji-blue.jpg",
      },
    ],
  }),
  // NOTE: only supported by v1
  new ListVectorStores({}),
  // NOTE: only supported by v1
  new QueryVectorStore({
    collection_name: VECTOR_STORE,
    model: "jina-v2",
    query_strings: ["first_comment_body", "second_comment_body"],
  }),
  // NOTE: only supported by v1
  new FetchVectors({
    collection_name: VECTOR_STORE,
    model: "jina-v2",
    ids: ["bar", "baz"],
  }),
  // NOTE: only supported by v1
  new UpdateVectors({
    collection_name: VECTOR_STORE,
    model: "jina-v2",
    vectors: [
      {
        id: "bar",
        vector: [0.1, -1.5],
        metadata: { title: "new_title" },
      },
      {
        id: "baz",
        vector: [-0.05, 1.01],
        metadata: {
          title: "title",
        },
      },
    ],
  }),
  // NOTE: only supported by v1
  new DeleteVectors({
    collection_name: VECTOR_STORE,
    model: "jina-v2",
    ids: ["bar", "baz"],
  }),
  // NOTE: only supported by v0
  new TranscribeSpeech({
    audio_uri: "https://media.substrate.run/dfw-10m.mp3",
    prompt:
      "David Foster Wallace interviewed about US culture, and Infinite Jest",
    segment: true,
    align: true,
    diarize: true,
  }),
  // FIXME: it looks like this should work in v0 and v1, but I'm seeing errors here from the server and haven't
  // been able to track down any server side errors to understand what the problem is.
  new GenerateSpeech({
    text: "Substrate: an underlying substance or layer.",
    store: "hosted",
  }),
  // FIXME: it looks like this should work for v1, but doesn't yet
  new RemoveBackground({
    image_uri: "https://media.substrate.run/docs-seurat.jpg",
    background_color: "002244",
    store: "hosted",
  }),
  // FIXME: it looks like this should work for v1, but doesn't yet
  new UpscaleImage({
    image_uri: "https://media.substrate.run/docs-seurat.jpg",
    store: "hosted",
  }),
  new SegmentUnderPoint({
    image_uri: "https://media.substrate.run/docs-vg-bedroom.jpg",
    point: {
      x: 100,
      y: 200,
    },
    store: "hosted",
  }),
  new SegmentAnything({
    image_uri: "https://media.substrate.run/docs-vg-bedroom.jpg",
    point_prompts: [
      {
        x: 100,
        y: 200,
      },
    ],
    // store: "hosted", // FIXME: not working yet
  }),
  new DeleteVectorStore({
    collection_name: VECTOR_STORE,
    model: "jina-v2",
  }),
  new Mixtral8x7BInstruct({
    prompt: "what does quixotic mean?",
  }),
  new Llama3Instruct70B({
    prompt: "what does quixotic mean?",
  }),
  new Llama3Instruct8B({
    prompt: "what does quixotic mean?",
  }),
];

const noColor = process.argv.includes("--no-color");
const green = (s: string) => `\x1b[32m${s}\x1b[0m`;
const red = (s: string) => `\x1b[31m${s}\x1b[0m`;
const ok = (message: string, ...rest: any[]) =>
  noColor
    ? console.log(`✓ ${message}`, ...rest)
    : console.log(green(`✓ ${message}`), ...rest);
const error = (message: string, ...rest: any[]) =>
  noColor
    ? console.error(`x ${message}`, ...rest)
    : console.error(red(`x ${message}`), ...rest);

const measure = async (fn: any): Promise<any> => {
  const startTime = new Date();
  const time = (ms: any) => `${ms}ms`;
  try {
    const result = await fn;
    const endTime = new Date();
    // @ts-ignore: lazy
    return { error: null, result, time: time(endTime - startTime) };
  } catch (error) {
    const endTime = new Date();
    // @ts-ignore: lazy
    return { error, result: null, time: time(endTime - startTime) };
  }
};

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  for (let node of examples) {
    const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

    // NOTE: measure doesn't throw
    const res = await measure(substrate.run(node));
    const tag = `[${res.requestId}]`;

    if (res.error) {
      error(node.node, tag, `RequestError("${res.error.message}")`, res.time);
    } else {
      const err = res.result.getError(node);
      if (err) {
        error(
          node.node,
          tag,
          `NodeError("${err.message}", ${err.request_id})`,
          res.time,
        );
      } else {
        ok(node.node, tag, res.time);
      }
    }
  }
  console.info("🌀 Finished.");
}
main();
