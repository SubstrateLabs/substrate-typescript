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
  StableDiffusionXLTurbo,
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

const id = (name) => `kitchen-sink-${name}`;

const examples = [
  new GenerateText({
    prompt: "Who is Don Quixote?",
    temperature: 4,
  }),
  new MultiGenerateText({
    prompt: "Who is Don Quixote?",
    num_choices: 2,
    temperature: 4,
  }),
  new GenerateJSON({
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
    temperature: 4,
    max_tokens: 100,
  }),
  new MultiGenerateJSON({
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
    temperature: 4,
    max_tokens: 100,
  }),
  // NOTE: only supported on backend v1
  new GenerateTextVision({
    prompt: "what are these paintings of and who made them?",
    image_uris: [
      "https://media.substrate.run/docs-fuji-red.jpg",
      "https://media.substrate.run/docs-fuji-blue.png",
    ],
  }),
  new Mistral7BInstruct({
    prompt: "Who is Don Quixote?",
    num_choices: 2,
    temperature: 0.5,
    max_tokens: 100,
  }),
  // NOTE: only supported on backend v1
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
  new GenerativeEditImage({
    image_uri: "https://media.substrate.run/docs-seurat.jpg",
    mask_image_uri: "https://media.substrate.run/spiral-logo.jpeg",
    prompt:
      "detailed cyberpunk anime characters in a futuristic city park by a pond at night, neon lights, dark noir cinematic HD",
    store: "hosted",
  }),
  new MultiGenerativeEditImage({
    image_uri: "https://media.substrate.run/docs-klimt-park.jpg",
    mask_image_uri: "https://media.substrate.run/spiral-logo.jpeg",
    prompt:
      "large tropical colorful bright anime birds in a dark jungle full of vines, high resolution",
    num_images: 2,
    store: "hosted",
  }),
  new StableDiffusionXL({
    prompt:
      "hokusai futuristic supercell spiral cloud with glowing core over turbulent ocean",
    store: "hosted",
    guidance_scale: 20,
    num_images: 2,
  }),
  new StableDiffusionXLLightning({
    prompt:
      "hokusai futuristic supercell spiral cloud with glowing core over turbulent ocean",
    store: "hosted",
    num_images: 2,
  }),
  new StableDiffusionXLTurbo({
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
  // FIXME: https://us5.datadoghq.com/logs?query=%40http.status_code%3A5%2A%2A%20-%40usr.id%3Ausr_H7YaaLJ3Zqx30cr8%20&agg_m=count&agg_q=%40evt.name&agg_t=count&cols=host%2Cservice&event=AgAAAY7OB0hCq4FLwAAAAAAAAAAYAAAAAEFZN09CMGhDQUFEZVR5bGU5ZmVrbVFBQQAAACQAAAAAMDE4ZWNlMDktM2JkZC00MTFkLWJkNTgtM2YyOGJjNTczMmI1&fromUser=true&index=%2A&messageDisplay=inline&refresh_mode=sliding&source=monitor_notif&storage=hot&stream_sort=desc&viz=stream&from_ts=1712853291000&to_ts=1712853591000&live=false
  new StableDiffusionXLControlNet({
    image_uri: "https://media.substrate.run/spiral-logo.jpeg",
    prompt:
      "the futuristic solarpunk city of atlantis at sunset, cinematic bokeh HD",
    control_method: "illusion",
    num_images: 2,
    store: "hosted",
  }),
  new StableDiffusionXLIPAdapter({
    prompt:
      "A blue and white painting of a large wave with a boat in the middle",
    image_prompt_uri: "https://guides.substrate.run/hokusai.jpeg",
    store: "hosted",
    num_images: 2,
  }),
  // FIXME: https://us5.datadoghq.com/logs?query=%40http.status_code%3A5%2A%2A%20-%40usr.id%3Ausr_H7YaaLJ3Zqx30cr8%20&agg_m=count&agg_q=%40evt.name&agg_t=count&cols=host%2Cservice&event=AgAAAY7OBr0hs6MY1QAAAAAAAAAYAAAAAEFZN09CcjBoQUFEbUZYcEZYYWliendBQQAAACQAAAAAMDE4ZWNlMDktM2JkZC00MTFkLWJkNTgtM2YyOGJjNTczMmI1&fromUser=true&index=%2A&messageDisplay=inline&refresh_mode=sliding&source=monitor_notif&storage=hot&stream_sort=desc&viz=stream&from_ts=1712853291000&to_ts=1712853591000&live=false
  new FillMask({
    image_uri: "https://media.substrate.run/docs-klimt-park.jpg",
    mask_image_uri: "https://media.substrate.run/spiral-logo.jpeg",
    store: "hosted",
  }),
  new EmbedText({
    text: "Your text to embed",
    store: "test",
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
    store: "test",
  }),
  new EmbedImage({
    image_uri: "https://media.substrate.run/docs-fuji-red.jpg",
  }),
  new MultiEmbedImage({
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
  // FIXME: https://us5.datadoghq.com/logs?query=%40http.status_code%3A5%2A%2A%20-%40usr.id%3Ausr_H7YaaLJ3Zqx30cr8%20&agg_m=count&agg_q=%40evt.name&agg_t=count&cols=host%2Cservice&event=AgAAAY7OA35DPM99fQAAAAAAAAAYAAAAAEFZN09BMzVEQUFCc3RkUHhPM1B4NWdBQQAAACQAAAAAMDE4ZWNlMDktM2JkZC00MTFkLWJkNTgtM2YyOGJjNTczMmI1&fromUser=true&index=%2A&messageDisplay=inline&refresh_mode=sliding&source=monitor_notif&storage=hot&stream_sort=desc&viz=stream&from_ts=1712853291000&to_ts=1712853591000&live=false
  new JinaV2({
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
  new CLIP({
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
  new CreateVectorStore({
    name: "comments",
    model: "jina-v2",
  }),
  new ListVectorStores({}),
  new QueryVectorStore({
    name: "comments",
    model: "clip",
    query_strings: ["first_comment_body", "second_comment_body"],
  }),
  new FetchVectors({
    name: "comments",
    model: "jina-v2",
    ids: ["bar", "baz"],
  }),
  new UpdateVectors({
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
  new DeleteVectors({
    name: "comments",
    model: "jina-v2",
    ids: ["bar", "baz"],
  }),
  new DeleteVectorStore({
    name: "comments",
    model: "jina-v2",
  }),
  new TranscribeMedia({
    audio_uri: "https://media.substrate.run/dfw-10m.mp3",
    prompt:
      "David Foster Wallace interviewed about US culture, and Infinite Jest",
    segment: true,
    align: true,
    diarize: true,
  }),
  new GenerateSpeech({
    text: "Substrate: an underlying substance or layer.",
    store: "hosted",
  }),
  new XTTSV2({
    text: "Substrate: an underlying substance or layer.",
    audio_uri: "https://media.substrate.run/docs-speaker.wav",
    store: "hosted",
  }),
  new RemoveBackground({
    image_uri: "https://media.substrate.run/docs-seurat.jpg",
    background_color: "002244",
    store: "hosted",
  }),
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
  new DISISNet({
    image_uri: "https://media.substrate.run/docs-seurat.jpg",
    store: "hosted",
  }),
  // FIXME: https://us5.datadoghq.com/logs?query=%40http.status_code%3A5%2A%2A%20-%40usr.id%3Ausr_H7YaaLJ3Zqx30cr8%20&agg_m=count&agg_q=%40evt.name&agg_t=count&cols=host%2Cservice&event=AgAAAY7OBr6k_ZIcSQAAAAAAAAAYAAAAAEFZN09CcjZrQUFBV2hiQU12SFhPNlFBQQAAACQAAAAAMDE4ZWNlMDktM2JkZC00MTFkLWJkNTgtM2YyOGJjNTczMmI1&fromUser=true&index=%2A&messageDisplay=inline&refresh_mode=sliding&source=monitor_notif&storage=hot&stream_sort=desc&viz=stream&from_ts=1712853291000&to_ts=1712853591000&live=false
  new BigLaMa({
    image_uri: "https://media.substrate.run/docs-seurat.jpg",
    mask_image_uri: "https://media.substrate.run/spiral-logo.jpeg",
    store: "hosted",
  }),
  new RealESRGAN({
    image_uri: "https://media.substrate.run/docs-seurat.jpg",
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
    store: "hosted",
  }),
];

const ok = (message: string, ...rest: any[]) =>
  console.log(`\x1b[32m✓ ${message}\x1b[0m`, ...rest);
const error = (message: string, ...rest: any[]) =>
  console.log(`\x1b[31mx ${message}\x1b[0m`, ...rest);

async function main() {
  const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

  const substrate = new Substrate({
    apiKey: SUBSTRATE_API_KEY,
    // baseUrl: "https://api-staging.substrate.run",
    backend: "v1",
  });

  const run = async (example: any) => {
    try {
      const res = await substrate.run(example);
      const output = res.get(example);
      ok(example.node, Object.keys(output));
    } catch (err: any) {
      error(example.node, err?.type, err.message);
    }
  };

  for (let example of examples) run(example);
}
main();
