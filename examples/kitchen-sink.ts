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

const urls = [
  { name: "staging", value: "https://api-staging.substrate.run" },
  { name: "production", value: "https://api-staging.substrate.run" },
];
const backends = [
  { name: "v0 (modal)", value: "v0" as const },
  { name: "v1 (ray)", value: "v1" as const },
];

// Not all nodes are available in all backend+env combinations yet, so
// in order to only test nodes that should be operational we can target
// them specifically.0
const STAGING_V0 = { url: urls[0]!, backend: backends[0]! };
const STAGING_V1 = { url: urls[0]!, backend: backends[1]! };
const PRODUCTION_V0 = { url: urls[1]!, backend: backends[0]! };
const PRODUCTION_V1 = { url: urls[1]!, backend: backends[1]! };
const ALL_ENVS = [STAGING_V0, STAGING_V1, PRODUCTION_V0, PRODUCTION_V1];

const examples = [
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
      max_tokens: 100,
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
  // NOTE: only supported on backend v1
  {
    node: new GenerateTextVision({
      prompt: "what are these paintings of and who made them?",
      image_uris: [
        "https://media.substrate.run/docs-fuji-red.jpg",
        "https://media.substrate.run/docs-fuji-blue.png",
      ],
    }),
    envs: ALL_ENVS,
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
  // NOTE: only supported on backend v1
  {
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
    node: new GenerateImage({
      prompt:
        "hokusai futuristic supercell spiral cloud with glowing core over turbulent ocean",
      store: "hosted",
    }),
    envs: [STAGING_V0, STAGING_V1],
  },
  {
    node: new MultiGenerateImage({
      prompt:
        "hokusai futuristic supercell spiral cloud with glowing neon core over turbulent ocean",
      store: "hosted",
      num_images: 2,
    }),
    envs: [STAGING_V0, STAGING_V1],
  },
  {
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
    node: new StableDiffusionXLLightning({
      prompt:
        "hokusai futuristic supercell spiral cloud with glowing core over turbulent ocean",
      store: "hosted",
      num_images: 2,
    }),
    envs: [STAGING_V0, PRODUCTION_V0],
  },
  {
    node: new StableDiffusionXLInpaint({
      image_uri: "https://media.substrate.run/docs-klimt-park.jpg",
      mask_image_uri: "https://media.substrate.run/spiral-logo.jpeg",
      prompt:
        "large tropical colorful bright anime birds in a dark jungle full of vines, high resolution",
      num_images: 2,
    }),
    envs: [STAGING_V0, PRODUCTION_V0],
  },
  // FIXME: https://us5.datadoghq.com/logs?query=%40http.status_code%3A5%2A%2A%20-%40usr.id%3Ausr_H7YaaLJ3Zqx30cr8%20&agg_m=count&agg_q=%40evt.name&agg_t=count&cols=host%2Cservice&event=AgAAAY7OB0hCq4FLwAAAAAAAAAAYAAAAAEFZN09CMGhDQUFEZVR5bGU5ZmVrbVFBQQAAACQAAAAAMDE4ZWNlMDktM2JkZC00MTFkLWJkNTgtM2YyOGJjNTczMmI1&fromUser=true&index=%2A&messageDisplay=inline&refresh_mode=sliding&source=monitor_notif&storage=hot&stream_sort=desc&viz=stream&from_ts=1712853291000&to_ts=1712853591000&live=false
  {
    node: new StableDiffusionXLControlNet({
      image_uri: "https://media.substrate.run/spiral-logo.jpeg",
      prompt:
        "the futuristic solarpunk city of atlantis at sunset, cinematic bokeh HD",
      control_method: "illusion",
      num_images: 2,
      store: "hosted",
    }),
    envs: [STAGING_V0, PRODUCTION_V0],
  },
  {
    node: new StableDiffusionXLIPAdapter({
      prompt:
        "A blue and white painting of a large wave with a boat in the middle",
      image_prompt_uri: "https://guides.substrate.run/hokusai.jpeg",
      store: "hosted",
      num_images: 2,
    }),
    envs: [STAGING_V0, PRODUCTION_V0],
  },
  // FIXME: https://us5.datadoghq.com/logs?query=%40http.status_code%3A5%2A%2A%20-%40usr.id%3Ausr_H7YaaLJ3Zqx30cr8%20&agg_m=count&agg_q=%40evt.name&agg_t=count&cols=host%2Cservice&event=AgAAAY7OBr0hs6MY1QAAAAAAAAAYAAAAAEFZN09CcjBoQUFEbUZYcEZYYWliendBQQAAACQAAAAAMDE4ZWNlMDktM2JkZC00MTFkLWJkNTgtM2YyOGJjNTczMmI1&fromUser=true&index=%2A&messageDisplay=inline&refresh_mode=sliding&source=monitor_notif&storage=hot&stream_sort=desc&viz=stream&from_ts=1712853291000&to_ts=1712853591000&live=false
  {
    node: new FillMask({
      image_uri: "https://media.substrate.run/docs-klimt-park.jpg",
      mask_image_uri: "https://media.substrate.run/spiral-logo.jpeg",
      store: "hosted",
    }),
    envs: ALL_ENVS,
  },
  {
    node: new EmbedText({
      text: "Your text to embed",
      store: "test",
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
      store: "test",
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
    node: new MultiEmbedImage({
      items: [
        {
          image_uri: "https://media.substrate.run/docs-fuji-red.jpg",
        },
        {
          image_uri: "https://media.substrate.run/docs-fuji-blue.jpg",
        },
      ],
      store: "test",
    }),
    envs: ALL_ENVS,
  },
  // FIXME: https://us5.datadoghq.com/logs?query=%40http.status_code%3A5%2A%2A%20-%40usr.id%3Ausr_H7YaaLJ3Zqx30cr8%20&agg_m=count&agg_q=%40evt.name&agg_t=count&cols=host%2Cservice&event=AgAAAY7OA35DPM99fQAAAAAAAAAYAAAAAEFZN09BMzVEQUFCc3RkUHhPM1B4NWdBQQAAACQAAAAAMDE4ZWNlMDktM2JkZC00MTFkLWJkNTgtM2YyOGJjNTczMmI1&fromUser=true&index=%2A&messageDisplay=inline&refresh_mode=sliding&source=monitor_notif&storage=hot&stream_sort=desc&viz=stream&from_ts=1712853291000&to_ts=1712853591000&live=false
  {
    node: new JinaV2({
      items: [
        {
          text: "Some text",
        },
        {
          text: "Other text",
        },
      ],
      store: "test",
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
      store: "test",
    }),
    envs: ALL_ENVS,
  },
  {
    node: new CreateVectorStore({
      name: "comments",
      model: "jina-v2",
    }),
    envs: [STAGING_V1, PRODUCTION_V1],
  },
  { node: new ListVectorStores({}), envs: [STAGING_V1, PRODUCTION_V1] },
  {
    node: new QueryVectorStore({
      name: "comments",
      model: "clip",
      query_strings: ["first_comment_body", "second_comment_body"],
    }),
    envs: [STAGING_V1, PRODUCTION_V1],
  },
  {
    node: new FetchVectors({
      name: "comments",
      model: "jina-v2",
      ids: ["bar", "baz"],
    }),
    envs: [STAGING_V1, PRODUCTION_V1],
  },
  {
    node: new UpdateVectors({
      name: "comments",
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
    node: new DeleteVectors({
      name: "comments",
      model: "jina-v2",
      ids: ["bar", "baz"],
    }),
    envs: [STAGING_V1, PRODUCTION_V1],
  },
  {
    node: new DeleteVectorStore({
      name: "comments",
      model: "jina-v2",
    }),
    envs: [STAGING_V1, PRODUCTION_V1],
  },
  {
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
    node: new GenerateSpeech({
      text: "Substrate: an underlying substance or layer.",
      store: "hosted",
    }),
    envs: ALL_ENVS,
  },
  {
    node: new XTTSV2({
      text: "Substrate: an underlying substance or layer.",
      audio_uri: "https://media.substrate.run/docs-speaker.wav",
      store: "hosted",
    }),
    envs: ALL_ENVS,
  },
  {
    node: new RemoveBackground({
      image_uri: "https://media.substrate.run/docs-seurat.jpg",
      background_color: "002244",
      store: "hosted",
    }),
    envs: ALL_ENVS,
  },
  {
    node: new UpscaleImage({
      image_uri: "https://media.substrate.run/docs-seurat.jpg",
      store: "hosted",
    }),
    envs: ALL_ENVS,
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
    node: new DISISNet({
      image_uri: "https://media.substrate.run/docs-seurat.jpg",
      store: "hosted",
    }),
    envs: ALL_ENVS,
  },
  // FIXME: https://us5.datadoghq.com/logs?query=%40http.status_code%3A5%2A%2A%20-%40usr.id%3Ausr_H7YaaLJ3Zqx30cr8%20&agg_m=count&agg_q=%40evt.name&agg_t=count&cols=host%2Cservice&event=AgAAAY7OBr6k_ZIcSQAAAAAAAAAYAAAAAEFZN09CcjZrQUFBV2hiQU12SFhPNlFBQQAAACQAAAAAMDE4ZWNlMDktM2JkZC00MTFkLWJkNTgtM2YyOGJjNTczMmI1&fromUser=true&index=%2A&messageDisplay=inline&refresh_mode=sliding&source=monitor_notif&storage=hot&stream_sort=desc&viz=stream&from_ts=1712853291000&to_ts=1712853591000&live=false
  {
    node: new BigLaMa({
      image_uri: "https://media.substrate.run/docs-seurat.jpg",
      mask_image_uri: "https://media.substrate.run/spiral-logo.jpeg",
      store: "hosted",
    }),
    envs: ALL_ENVS,
  },
  {
    node: new RealESRGAN({
      image_uri: "https://media.substrate.run/docs-seurat.jpg",
      store: "hosted",
    }),
    envs: ALL_ENVS,
  },
  {
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
    envs: ALL_ENVS,
  },
];

const ok = (message: string, ...rest: any[]) =>
  console.log(`\x1b[32m✓ ${message}\x1b[0m`, ...rest);
const error = (message: string, ...rest: any[]) =>
  console.log(`\x1b[31mx ${message}\x1b[0m`, ...rest);

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  for (let { node, envs } of examples) {
    for (let env of envs) {
      const substrate = new Substrate({
        apiKey: SUBSTRATE_API_KEY,
        baseUrl: env.url.value,
        backend: env.backend.value,
      });
      const tag = `[${env.url.name}:${env.backend.value}]`;
      try {
        const res = await substrate.run(node);
        const err = res.getError(node);
        if (err) {
          error(node.node, tag, {
            via: "res.getError()",
            type: err.type,
            msg: err.message,
          });
        } else {
          ok(node.node, tag);
        }
      } catch (err: any) {
        error(node.node, tag, { via: "substrate.run()", msg: err.message });
      }
    }
  }
}
main();
