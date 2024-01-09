import { z } from "zod";

export const IdSchema = z.string().min(1);
export type Id = z.infer<typeof IdSchema>;

export const AnySchema = z.any();
export const UnknownSchema = z.unknown();

export const LanguageCodeSchema = z.enum([
  "arb",
  "ben",
  "cat",
  "ces",
  "cmn",
  "cym",
  "dan",
  "deu",
  "eng",
  "est",
  "fin",
  "fra",
  "hin",
  "ind",
  "ita",
  "jpn",
  "kan",
  "kor",
  "mlt",
  "nld",
  "pes",
  "pol",
  "por",
  "ron",
  "rus",
  "slk",
  "spa",
  "swe",
  "swh",
  "tam",
  "tel",
  "tgl",
  "tha",
  "tur",
  "ukr",
  "urd",
  "uzn",
  "vie",
]);

export const StoreInfoSchema = z
  .object({
    collection: z.string(),
    user_id: z.string().optional(),
    organization_id: z.string().optional(),
    full_metadata: z.array(z.object({})).optional(),
  })
  .strict();

const BaseAdapterSchema = z.object({
  source_key: z.string().nullable(),
  dest_key: z.string().nullable(),
  transform: z.string(),
  transform_args: z.object({}),
});

export const GetAdapterSchema = BaseAdapterSchema.extend({
  source_key: z.string(),
  transform: z.literal("get"),
  transform_args: z
    .object({ path: z.string(), map: z.boolean().optional() })
    .strict(),
}).strict();
export type GetAdapter = z.infer<typeof GetAdapterSchema>;

export const WrapInListAdapterSchema = BaseAdapterSchema.extend({
  source_key: z.string(),
  transform: z.literal("wrap_in_list"),
  transform_args: z.object({}).strict(),
}).strict();
export type WrapInListAdapter = z.infer<typeof WrapInListAdapterSchema>;

export const PickAdapterSchema = BaseAdapterSchema.extend({
  transform: z.literal("pick"),
  transform_args: z.object({ keys: z.string().array().nonempty() }).strict(),
}).strict();
export type PickAdapter = z.infer<typeof PickAdapterSchema>;

export const PopAdapterSchema = BaseAdapterSchema.extend({
  source_key: z.string(),
  transform: z.literal("pop"),
  transform_args: z.object({}).strict(),
}).strict();
export type PopAdapter = z.infer<typeof PopAdapterSchema>;

export const ConcatAdapterSchema = BaseAdapterSchema.extend({
  source_key: z.string(),
  transform: z.literal("concat"),
  transform_args: z.object({ target: z.string() }).strict(),
}).strict();
export type ConcatAdapter = z.infer<typeof ConcatAdapterSchema>;

export const PrependAdapterSchema = BaseAdapterSchema.extend({
  source_key: z.string(),
  transform: z.literal("prepend"),
  transform_args: z.object({ target: z.string() }).strict(),
}).strict();
export type PrependAdapter = z.infer<typeof PrependAdapterSchema>;

export const WrapInDictAdapterSchema = BaseAdapterSchema.extend({
  source_key: z.string(),
  transform: z.literal("wrap_in_dict"),
  transform_args: z.object({ key: z.string() }).strict(),
}).strict();
export type WrapInDictAdapter = z.infer<typeof WrapInDictAdapterSchema>;

export const AdapterSchema = z.discriminatedUnion("transform", [
  GetAdapterSchema,
  WrapInListAdapterSchema,
  PickAdapterSchema,
  PopAdapterSchema,
  ConcatAdapterSchema,
  PrependAdapterSchema,
  WrapInDictAdapterSchema,
]);
export type Adapter = z.infer<typeof AdapterSchema>;

export const BaseNodeArgsSchema = z.object({});
export type BaseNodeInput = z.infer<typeof BaseNodeArgsSchema>;

export const BaseNodeSchema = z
  .object({
    id: IdSchema,
    class: z.literal("Node"),
    args: BaseNodeArgsSchema.partial(),
    extra_args: z.object({}),
    _global_output_keys: z.array(z.string()).optional(),
    _should_output_globally: z.boolean().optional(),
    _to_adapters: z.array(AdapterSchema).optional(),
    _from_adapters: z.array(AdapterSchema).optional(),
  })
  .strict();
export type BaseNode = z.infer<typeof BaseNodeSchema>;

// // TBD: maybe this is still experimental?
// export const AdapterNodeSchema = BaseNodeSchema.extend({
//   class: z.literal("AdapterNode"),
//   _adapters: z.array(AdapterSchema),
// });
// export type AdapterNode = z.infer<typeof AdapterNodeSchema>;

export const ModelNodeSchema = BaseNodeSchema.extend({
  class: z.literal("ModelNode"),
}).strict();
export type ModelNodeInput = BaseNodeInput;
export type ModelNode = z.infer<typeof ModelNodeSchema>;

export const MistralArgsSchema = z
  .object({
    input_prompts: z.union([z.string(), z.string().array()]),
    system: z.string().optional(),
    presence_penalty: z.number().optional().default(1.1),
    frequency_penalty: z.number().optional().default(0.0),
    repetition_penalty: z.number().optional().default(1.0),
    temperature: z.number().optional().default(0.75),
    top_p: z.number().optional().default(1.0),
    max_tokens: z.number().optional().default(800),
  })
  .strict();
export type MistralInput = z.infer<typeof MistralArgsSchema>;

export const MistralSchema = ModelNodeSchema.omit({ class: true })
  .extend({
    class: z.literal("Mistral"),
    args: MistralArgsSchema.partial(),
    extra_args: z
      .object({
        model: z.enum(["mistral-7b-instruct"]),
      })
      .strict(),
  })
  .strict();
export type Mistral = z.infer<typeof MistralSchema>;

export const JinaArgsSchema = z
  .object({
    texts: z.string().array(),
    embed_metadata_keys: z.array(z.string()).optional(),
    provider_ids: z.array(z.string()).optional(),
    split: z.boolean().optional(), // false
    store_info: StoreInfoSchema.optional(),
  })
  .strict();
export type JinaInput = z.infer<typeof JinaArgsSchema>;

export const JinaSchema = ModelNodeSchema.omit({ class: true }).extend({
  class: z.literal("Jina"),
  args: JinaArgsSchema.partial(),
  extra_args: z.object({
    model: z.enum(["jina-base-v2"]),
  }),
});
export type Jina = z.infer<typeof JinaSchema>;

export const StableDiffusionArgsSchema = z.object({
  prompt: z.string(),
  steps: z.number().optional(), // .default(40),
  num_images: z.number().optional(), // .default(1),
  height: z.number().optional(),
  width: z.number().optional(),
  manual_seed: z.number().optional(),
  negative_prompt: z.string().optional(),
  high_noise_frac: z.number().optional(), // .default(0.8),
  run_safety_check: z.boolean().optional(), // .default(false),
  return_bytes: z.boolean().optional(), // .default(false),
  use_refiner: z.boolean().optional(), // .default(false),
  return_base64: z.boolean().optional(), // .default(false),
  use_hosted_url: z.boolean().optional(), // .default(false),
  use_turbo: z.boolean().optional(), // .default(false),
  use_llm: z.boolean().optional(), // .default(false),
  use_ssd: z.boolean().optional(), // .default(false),
  guidance_scale: z.number().optional(),
});
export type StableDiffusionInput = z.infer<typeof StableDiffusionArgsSchema>;

export const StableDiffusionSchema = ModelNodeSchema.omit({
  class: true,
}).extend({
  class: z.literal("SDXL"),
  args: StableDiffusionArgsSchema.partial(),
  extra_args: z.object({
    model: z.enum(["sdxl"]),
  }),
});
export type StableDiffusion = z.infer<typeof StableDiffusionSchema>;

// export const SAMSchema = ModelNodeSchema.extend({
//   class: z.literal("SAM"),
//   args: z.object({
//     // prompt: z.string(),
//     image_url: z.string(),
//     imgsz: z.number().optional().default(1024),
//     text_prompt: z.string().optional(),
//     point_prompt: z.array(z.array(z.number())).optional(),
//   }),
//   extra_args: z.object({
//     model: z.enum(["FastSAM"]),
//   }),
// });

// export const SeamlessSchema = ModelNodeSchema.extend({
//   class: z.literal("Seamless"),
//   args: z.object({
//     input_audio: z.string(),
//     target_language_code: LanguageCodeSchema,
//     source_language_code: LanguageCodeSchema.optional().default("eng"),
//   }),
//   extra_args: z.object({
//     model: z.enum(["FastSAM"]),
//   }),
// });

// export const PythonNodeSchema = BaseNodeSchema.extend({
//   class: z.literal("PythonNode"),
//   code: z.string(),
//   pip_deps: z.array(z.string()).optional(),
//   apt_deps: z.array(z.string()).optional(),
//   python_version: z.string().optional().default("3.10"),
//   // attr: z.object({}).optional(), // ?
// });

// NOTE: may be deprecated soon.
// see: https://github.com/colinhacks/zod/issues/2106
export const NodeSchema = z.discriminatedUnion("class", [
  BaseNodeSchema,
  ModelNodeSchema,
  MistralSchema,
  JinaSchema,
  StableDiffusionSchema,
  // BakllavaSchema,
  // SDXLSchema,
  // SAMSchema,
  // SeamlessSchema,
  // PythonNodeSchema,
  // MapNodeSchema,
  // AdapterNodeSchema,
]);
export type Node = z.infer<typeof NodeSchema>;

export const AdapterCodeSchema = z.object({
  code: z.string(),
  runtime: z.enum(["deno", "python"]),
  runtime_version: z.string().optional(),
});
export type AdapterCode = z.infer<typeof AdapterCodeSchema>;

export const EdgeDataSchema = z.object({
  adapter: AdapterCodeSchema.optional(),
});

export const EdgeSchema = z.tuple([NodeSchema, NodeSchema, EdgeDataSchema]);
export type Edge = z.infer<typeof EdgeSchema>;

const EdgeIdsSchema = z.tuple([IdSchema, IdSchema, EdgeDataSchema]);
export type EdgeIds = z.infer<typeof EdgeIdsSchema>;

export const GraphSchema = z.object({
  nodes: z.array(NodeSchema),
  edges: z.array(EdgeIdsSchema),
  // Could be anything, initial args that are inputted into the root node
  initial_args: z.object({}),
});
export type Graph = z.infer<typeof GraphSchema>;

export const ComposeArgsSchema = z.object({
  dag: GraphSchema,
});
export type ComposeArgs = z.infer<typeof ComposeArgsSchema>;

export const EmbeddingMetaSchema = z.object({
  doc_id: z.string(),
  doc: z.string(),

  // TODO:
  // class Config:
  //     extra = Extra.allow
});

export const EmbeddingRowSchema = z.object({
  id: z.string(),
  vec: z.array(z.number()),
  doc: z.object({}),
});

export const EmbeddingGenerationSchema = z.array(z.array(EmbeddingRowSchema));
export type EmbeddingGeneration = z.infer<typeof EmbeddingGenerationSchema>;

export const ImageGenerationSchema = z.object({
  uri: z.string(),
  seed: z.number().optional(),
});
export type ImageGeneration = z.infer<typeof ImageGenerationSchema>;

export const TextCompletionSchema = z.object({
  text: z.string(),
  token_count: z.number(),
});

export const TextGenerationSchema = z.object({
  completions:TextCompletionSchema.array().nonempty(),
  token_count: z.number(),
  token_input_count: z.number(),
});
export type TextGeneration = z.infer<typeof TextGenerationSchema>;

export const AssistantChatCompletionSchema = z.object({
  message: z.string(),
  prompt_tokens: z.number(),
  completion_tokens: z.number(),
  total_tokens: z.number(),
});

export const SAMSegmentSchema = z.object({
  image: z.string(),
});

export const SeamlessOutSchema = z.object({
  audio_uri: z.string(),
  text: z.string(),
});

// TBD: Input Args standardization
//
// export const ImageGenerationArgsSchema = z.object({
//   prompt: z.string(),
//   steps: z.number().optional(),
//   num_images: z.number().optional(),
//   width: z.number().optional(),
//   height: z.number().optional(),
//   manual_seed: z.number().optional(),
//   negative_prompt: z.string().optional(),
//   guidance_scale: z.number().optional(),
//   init_img_url: z.string().url().optional(),
//   mask_img_url: z.string().url().optional(),
//   strength: z.number().optional(),
//   use_refiner: z.boolean().default(false),
//   use_lcm: z.boolean().default(false),
//   use_ssd: z.boolean().default(true),
//   use_turbo: z.boolean().default(false),
//   use_hosted_url: z.boolean().default(false),
// });
//
// export const EmbeddingArgsSchema = z.object({
//   texts: z.array(z.string()),
//   embed_metadata_keys: z.array(z.string()).optional(),
//   collection: z.string().optional(),
//   metadatas: z.array(z.object({})).optional(),
//   ids: z.array(z.string()).optional(),
//   split: z.boolean().optional().default(false),
// });
//
// export const TextGenerationArgsSchema = z.object({
//   prompts: z.array(z.string()).optional(),
//   prompt: z.string().optional(),
//   system: z.string().optional().default(""),
//   temperature: z.number().optional().default(0.8),
//   presence_penalty: z.number().optional().default(1.0),
//   frequency_penalty: z.number().optional().default(0.3),
//   repetition_penalty: z.number().optional().default(1.0),
//   top_p: z.number().optional().default(1.0),
//   max_tokens: z.number().optional(),
// });
//
// export const QueryArgsSchema = z.object({
//   texts: z.array(z.string()),
//   collection: z.string(),
//   limit: z.number().optional().default(10),
//   ef_search: z.number().optional(),
//   returning: z.array(z.string()).optional(),
// });

export type GraphResult = { [key: string]: any };
