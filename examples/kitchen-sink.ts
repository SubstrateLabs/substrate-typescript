#!/usr/bin/env -S npx ts-node --transpileOnly

import {
  Substrate,
  GenerateText,
  MultiGenerateText,
  GenerateJSON,
  MultiGenerateJSON,
  GenerateTextVision,
  Mistral7BInstruct,
  Firellava13B,
  GenerateImage,
  MultiGenerateImage,
  GenerativeEditImage,
  MultiGenerativeEditImage,
  StableDiffusionXL,
  StableDiffusionXLLightning,
  StableDiffusionXLInpaint,
  StableDiffusionXLIPAdapter,
  StableDiffusionXLControlNet,
  FillMask,
  BigLaMa,
  UpscaleImage,
  RealESRGAN,
  RemoveBackground,
  DISISNet,
  SegmentUnderPoint,
  SegmentAnything,
  TranscribeMedia,
  GenerateSpeech,
  XTTSV2,
  EmbedText,
  MultiEmbedText,
  EmbedImage,
  MultiEmbedImage,
  JinaV2,
  CLIP,
  CreateVectorStore,
  ListVectorStores,
  DeleteVectorStore,
  QueryVectorStore,
  FetchVectors,
  UpdateVectors,
  DeleteVectors,
} from "substrate";

const urls = {
  staging: { name: "staging", value: "https://api-staging.substrate.run" },
  production: { name: "production", value: "https://api.substrate.run" },
};
const backends = {
  v0: { name: "v0", value: "v0" as const },
  v1: { name: "v1", value: "v1" as const },
};

// Not all nodes are available in all backend+env combinations yet, so
// in order to only test nodes that should be operational we can target
// them specifically.
const STAGING_V0 = { url: urls.staging, backend: backends.v0 };
const STAGING_V1 = { url: urls.staging, backend: backends.v1 };
const PRODUCTION_V0 = { url: urls.production, backend: backends.v0 };
const PRODUCTION_V1 = { url: urls.production, backend: backends.v1 };
const ALL_ENVS = [STAGING_V0, STAGING_V1, PRODUCTION_V0, PRODUCTION_V1];

// Some state-changing interactions will create a store or modify it's contents
// and some other calls require the store to exist to property work (eg embed to store).
// We'll be creating this store as one of the first examples for the other calls to
// use for this reason.
const VECTOR_STORE = "kitchen-sink";

const examples = [
  {
    node: new CreateVectorStore({
      name: VECTOR_STORE,
      model: "jina-v2",
    }),
    envs: [STAGING_V1, PRODUCTION_V1],
  },
  {
    node: new GenerateText({
      prompt: "Who is Don Quixote?",
      temperature: 0.4,
    }),
    envs: ALL_ENVS,
  },
  {
    node: new MultiGenerateText({
      prompt: "Who is Don Quixote?",
      num_choices: 2,
      temperature: 0.4,
    }),
    envs: ALL_ENVS,
  },
  {
    node: new GenerateJSON({
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
    envs: ALL_ENVS,
  },
  {
    node: new MultiGenerateJSON({
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
    envs: ALL_ENVS,
  },
  {
    // NOTE: mainly supported on backend v1, but v0 works for legacy use
    // NOTE: the input types are not the same between v0 and v1 and we want to keep it that way for legacy support
    node: new GenerateTextVision({
      prompt: "what are these paintings of and who made them?",
      image_uris: [
        "https://media.substrate.run/docs-fuji-red.jpg",
        "https://media.substrate.run/docs-fuji-blue.jpg",
      ],
    }),
    envs: [STAGING_V1, PRODUCTION_V1],
  },
  {
    node: new Mistral7BInstruct({
      prompt: "Who is Don Quixote?",
      num_choices: 2,
      temperature: 0.5,
      max_tokens: 100,
    }),
    envs: [STAGING_V0, PRODUCTION_V0],
  },
  {
    // NOTE: mainly supported on backend v1, but v0 works for legacy use (see next node)
    // NOTE: the input types are not the same between v0 and v1.
    // FIXME: there seems to be an issue with v0 now though, when using either the new or
    //        the old params and the v0 node doesn't work with either.
    node: new Firellava13B({
      prompt: "what are these paintings of and who made them?",
      image_uris: [
        "https://media.substrate.run/docs-fuji-red.jpg",
        "https://media.substrate.run/docs-fuji-blue.jpg",
      ],
    }),
    envs: [STAGING_V1, PRODUCTION_V1],
  },
  {
    // NOTE: only supported by v0
    node: new GenerateImage({
      prompt:
        "hokusai futuristic supercell spiral cloud with glowing core over turbulent ocean",
      store: "hosted",
    }),
    envs: [STAGING_V0, PRODUCTION_V0],
  },
  {
    // NOTE: only supported by v0
    node: new MultiGenerateImage({
      prompt:
        "hokusai futuristic supercell spiral cloud with glowing neon core over turbulent ocean",
      store: "hosted",
      num_images: 2,
    }),
    envs: [STAGING_V0, PRODUCTION_V0],
  },
  {
    // NOTE: only supported by v0
    node: new GenerativeEditImage({
      image_uri: "https://media.substrate.run/docs-seurat.jpg",
      mask_image_uri: "https://media.substrate.run/spiral-logo.jpeg",
      prompt:
        "detailed cyberpunk anime characters in a futuristic city park by a pond at night, neon lights, dark noir cinematic HD",
      store: "hosted",
    }),
    envs: [STAGING_V0, PRODUCTION_V0],
  },
  {
    // NOTE: only supported by v0
    node: new MultiGenerativeEditImage({
      image_uri: "https://media.substrate.run/docs-klimt-park.jpg",
      mask_image_uri: "https://media.substrate.run/spiral-logo.jpeg",
      prompt:
        "large tropical colorful bright anime birds in a dark jungle full of vines, high resolution",
      num_images: 2,
      store: "hosted",
    }),
    envs: [STAGING_V0, PRODUCTION_V0],
  },
  {
    // NOTE: only supported by v0
    node: new StableDiffusionXL({
      prompt:
        "hokusai futuristic supercell spiral cloud with glowing core over turbulent ocean",
      store: "hosted",
      guidance_scale: 20,
      num_images: 2,
    }),
    envs: [STAGING_V0, PRODUCTION_V0],
  },
  {
    // NOTE: only supported by v0
    node: new StableDiffusionXLLightning({
      prompt:
        "hokusai futuristic supercell spiral cloud with glowing core over turbulent ocean",
      store: "hosted",
      num_images: 2,
    }),
    envs: [STAGING_V0, PRODUCTION_V0],
  },
  {
    // NOTE: only supported by v0
    node: new StableDiffusionXLInpaint({
      image_uri: "https://media.substrate.run/docs-klimt-park.jpg",
      mask_image_uri: "https://media.substrate.run/spiral-logo.jpeg",
      prompt:
        "large tropical colorful bright anime birds in a dark jungle full of vines, high resolution",
      num_images: 2,
    }),
    envs: [STAGING_V0, PRODUCTION_V0],
  },
  {
    // FIXME: Running into the following error, this node does not seem operational yet
    // error: cannot reshape tensor of 0 elements into shape [0, -1, 1, 512] because the unspecified dimension size -1 can be any value and is ambiguous
    node: new StableDiffusionXLControlNet({
      image_uri: "https://media.substrate.run/spiral-logo.jpeg",
      prompt:
        "the futuristic solarpunk city of atlantis at sunset, cinematic bokeh HD",
      control_method: "illusion",
      num_images: 2,
      store: "hosted",
    }),
    envs: [],
  },
  {
    // NOTE: only supported by v0
    node: new StableDiffusionXLIPAdapter({
      prompt:
        "A blue and white painting of a large wave with a boat in the middle",
      image_prompt_uri: "https://guides.substrate.run/hokusai.jpeg",
      store: "hosted",
      num_images: 2,
    }),
    envs: [STAGING_V0, PRODUCTION_V0],
  },
  {
    // FIXME: As far as I can tell this is based on BigLama, which isn't yet operational
    node: new FillMask({
      image_uri: "https://media.substrate.run/docs-klimt-park.jpg",
      mask_image_uri: "https://media.substrate.run/spiral-logo.jpeg",
      store: "hosted",
    }),
    envs: [],
  },
  {
    node: new EmbedText({
      text: "Your text to embed",
      store: VECTOR_STORE,
    }),
    envs: ALL_ENVS,
  },
  {
    node: new MultiEmbedText({
      items: [
        {
          text: "Some text",
        },
        {
          text: "Other text",
        },
      ],
      store: VECTOR_STORE,
    }),
    envs: ALL_ENVS,
  },
  {
    node: new EmbedImage({
      image_uri: "https://media.substrate.run/docs-fuji-red.jpg",
    }),
    envs: ALL_ENVS,
  },
  {
    // FIXME: This one works without the Vector Store. Presumably because the VectorStore only supports Jina and Embed Image relies on CLIP
    node: new MultiEmbedImage({
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
    envs: ALL_ENVS,
  },
  {
    // FIXME: This mostly works, but I'm running into issues using VectorStore here.
    // It seems to only fail for me on staging v1 (maybe some state problem there?)
    node: new JinaV2({
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
    envs: ALL_ENVS,
  },
  {
    node: new CLIP({
      items: [
        {
          image_uri: "https://media.substrate.run/docs-fuji-red.jpg",
        },
        {
          image_uri: "https://media.substrate.run/docs-fuji-blue.jpg",
        },
      ],
    }),
    envs: ALL_ENVS,
  },
  {
    // NOTE: only supported by v1
    node: new ListVectorStores({}),
    envs: [STAGING_V1, PRODUCTION_V1],
  },
  {
    // NOTE: only supported by v1
    node: new QueryVectorStore({
      name: VECTOR_STORE,
      model: "jina-v2",
      query_strings: ["first_comment_body", "second_comment_body"],
    }),
    envs: [STAGING_V1, PRODUCTION_V1],
  },
  {
    // NOTE: only supported by v1
    node: new FetchVectors({
      name: VECTOR_STORE,
      model: "jina-v2",
      ids: ["bar", "baz"],
    }),
    envs: [STAGING_V1, PRODUCTION_V1],
  },
  {
    // NOTE: only supported by v1
    node: new UpdateVectors({
      name: VECTOR_STORE,
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
    envs: [STAGING_V1, PRODUCTION_V1],
  },
  {
    // NOTE: only supported by v1
    node: new DeleteVectors({
      name: VECTOR_STORE,
      model: "jina-v2",
      ids: ["bar", "baz"],
    }),
    envs: [STAGING_V1, PRODUCTION_V1],
  },
  {
    // NOTE: only supported by v0
    node: new TranscribeMedia({
      audio_uri: "https://media.substrate.run/dfw-10m.mp3",
      prompt:
        "David Foster Wallace interviewed about US culture, and Infinite Jest",
      segment: true,
      align: true,
      diarize: true,
    }),
    envs: [STAGING_V0, PRODUCTION_V0],
  },
  {
    // FIXME: it looks like this should work in v0 and v1, but I'm seeing errors here from the server and haven't
    // been able to track down any server side errors to understand what the problem is.
    node: new GenerateSpeech({
      text: "Substrate: an underlying substance or layer.",
      store: "hosted",
    }),
    envs: [STAGING_V0, STAGING_V1],
  },
  {
    // FIXME: it looks like this should work for v1, but doesn't yet
    node: new XTTSV2({
      text: "Substrate: an underlying substance or layer.",
      audio_uri: "https://media.substrate.run/docs-speaker.wav",
      store: "hosted",
    }),
    envs: [STAGING_V0, STAGING_V1],
  },
  {
    // FIXME: it looks like this should work for v1, but doesn't yet
    node: new RemoveBackground({
      image_uri: "https://media.substrate.run/docs-seurat.jpg",
      background_color: "002244",
      store: "hosted",
    }),
    envs: [STAGING_V0, STAGING_V1],
  },
  {
    // FIXME: it looks like this should work for v1, but doesn't yet
    node: new UpscaleImage({
      image_uri: "https://media.substrate.run/docs-seurat.jpg",
      store: "hosted",
    }),
    envs: [STAGING_V0, STAGING_V1],
  },
  {
    node: new SegmentUnderPoint({
      image_uri: "https://media.substrate.run/docs-vg-bedroom.jpg",
      point: {
        x: 100,
        y: 200,
      },
      store: "hosted",
    }),
    envs: ALL_ENVS,
  },
  {
    // FIXME: it looks like this should work for v1, but doesn't yet
    node: new DISISNet({
      image_uri: "https://media.substrate.run/docs-seurat.jpg",
      store: "hosted",
    }),
    envs: [STAGING_V0, PRODUCTION_V1],
  },
  {
    // FIXME: From what I can gather on Modal this throws a runtime error,
    //        on Ray we don't have the biglama_app up and running.
    node: new BigLaMa({
      image_uri: "https://media.substrate.run/docs-seurat.jpg",
      mask_image_uri: "https://media.substrate.run/spiral-logo.jpeg",
      store: "hosted",
    }),
    envs: [],
  },
  {
    // FIXME: it looks like this should work for v1, but doesn't yet
    node: new RealESRGAN({
      image_uri: "https://media.substrate.run/docs-seurat.jpg",
      store: "hosted",
    }),
    envs: [STAGING_V0, PRODUCTION_V0],
  },
  {
    // FIXME: it looks like this should work for v1, but doesn't yet
    node: new SegmentAnything({
      image_uri: "https://media.substrate.run/docs-vg-bedroom.jpg",
      point_prompts: [
        {
          x: 100,
          y: 200,
        },
      ],
      store: "hosted",
    }),
    envs: [STAGING_V0, PRODUCTION_V0],
  },
  {
    node: new DeleteVectorStore({
      name: VECTOR_STORE,
      model: "jina-v2",
    }),
    envs: [STAGING_V1, PRODUCTION_V1],
  },
];

const noColor = process.argv.includes("--no-color");
const green = (s: string) => `\x1b[32m${s}\x1b[0m`;
const red = (s: string) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s: string) => `\x1b[33m${s}\x1b[0m`;
const ok = (message: string, ...rest: any[]) =>
  noColor
    ? console.log(`✓ ${message}`, ...rest)
    : console.log(green(`✓ ${message}`), ...rest);
const warn = (message: string, ...rest: any[]) =>
  noColor
    ? console.warn(`● ${message}`, ...rest)
    : console.warn(yellow(`● ${message}`), ...rest);
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

  for (let { node, envs } of examples) {
    // const except = []
    // if (except.includes(node.node)) continue;

    const only = ["GenerateJSON"];
    if (!only.includes(node.node)) continue;

    if (envs.length === 0) {
      warn(node.node, "Not enabled for any env.");
    }

    for (let env of envs) {
    // for (let env of ALL_ENVS) {
      // if (env.url.name === "staging") {
      //   if (env.backend.value !== "v1") continue;
      // }
      // if (env.url.name === "production") {
      //   if (env.backend.value !== "v0") continue;
      // }

      const substrate = new Substrate({
        apiKey: SUBSTRATE_API_KEY,
        baseUrl: env.url.value,
        backend: env.backend.value,
      });
      const tag = `[${env.url.name}:${env.backend.value}]`;

      // NOTE: measure doesn't throw
      const res = await measure(substrate.run(node));

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
  }
  console.info("🌀 Finished.");
}
main();
