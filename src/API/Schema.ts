/**
 * There's some cruft here from previous verions
 * Remove the adapter + old model schemas
 * Think about autogeneration
 * */
import { z } from "zod";
// import * as OpenAPIZod from "substrate/API/OpenAPIZod";

export const IdSchema = z.string().min(1);
export type Id = z.infer<typeof IdSchema>;

export const AnySchema = z.any();
export const UnknownSchema = z.unknown();

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
  transform_args: z.object({ path: z.string(), map: z.boolean().optional() }),
});
export type GetAdapter = z.infer<typeof GetAdapterSchema>;

export const WrapInListAdapterSchema = BaseAdapterSchema.extend({
  source_key: z.string(),
  transform: z.literal("wrap_in_list"),
  transform_args: z.object({}),
});
export type WrapInListAdapter = z.infer<typeof WrapInListAdapterSchema>;

export const PickAdapterSchema = BaseAdapterSchema.extend({
  transform: z.literal("pick"),
  transform_args: z.object({ keys: z.string().array().nonempty() }),
});
export type PickAdapter = z.infer<typeof PickAdapterSchema>;

export const PopAdapterSchema = BaseAdapterSchema.extend({
  source_key: z.string(),
  transform: z.literal("pop"),
  transform_args: z.object({}),
});
export type PopAdapter = z.infer<typeof PopAdapterSchema>;

export const ConcatAdapterSchema = BaseAdapterSchema.extend({
  source_key: z.string(),
  transform: z.literal("concat"),
  transform_args: z.object({ target: z.string() }),
});
export type ConcatAdapter = z.infer<typeof ConcatAdapterSchema>;

export const PrependAdapterSchema = BaseAdapterSchema.extend({
  source_key: z.string(),
  transform: z.literal("prepend"),
  transform_args: z.object({ target: z.string() }),
});
export type PrependAdapter = z.infer<typeof PrependAdapterSchema>;

export const WrapInDictAdapterSchema = BaseAdapterSchema.extend({
  source_key: z.string(),
  transform: z.literal("wrap_in_dict"),
  transform_args: z.object({ key: z.string() }),
});
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
    args: BaseNodeArgsSchema.partial(),
    extra_args: z.object({}),
    node: z.string(),
    _should_output_globally: z.boolean().optional(),
    _to_adapters: z.array(AdapterSchema).optional(),
    _from_adapters: z.array(AdapterSchema).optional(),
  })
  .strict();
export type BaseNode = z.infer<typeof BaseNodeSchema>;

// NOTE: new node schemas - ben
export const GenerateImageSchema = BaseNodeSchema.strict();
export type GenerateImage = z.infer<typeof GenerateImageSchema>;
export const GenerateTextSchema = BaseNodeSchema.strict();
export type GenerateText = z.infer<typeof GenerateTextSchema>;

export const ModelNodeSchema = BaseNodeSchema.extend({});
export type ModelNodeInput = BaseNodeInput;
export type ModelNode = z.infer<typeof ModelNodeSchema>;

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

// NOTE: may be deprecated soon.
// see: https://github.com/colinhacks/zod/issues/2106
export const NodeSchema = z.union([BaseNodeSchema, ModelNodeSchema]);
export type Node = z.infer<typeof NodeSchema>;

export const AdapterCodeSchema = z.object({
  code: z.string(),
  runtime: z.enum(["deno", "python"]),
  runtime_version: z.string().optional(),
});
export type AdapterCode = z.infer<typeof AdapterCodeSchema>;

export const EdgeDataSchema = z
  .object({
    adapter: AdapterCodeSchema.optional(),
  })
  .strict();

export const EdgeSchema = z.tuple([NodeSchema, NodeSchema, EdgeDataSchema]);
export type Edge = z.infer<typeof EdgeSchema>;

const EdgeIdsSchema = z.tuple([IdSchema, IdSchema, EdgeDataSchema]);
export type EdgeIds = z.infer<typeof EdgeIdsSchema>;

export const GraphSchema = z
  .object({
    nodes: z.array(NodeSchema),
    edges: z.array(EdgeIdsSchema),
    // Could be anything, initial args that are inputted into the root node
    initial_args: z.object({}),
  })
  .strict();
export type Graph = z.infer<typeof GraphSchema>;

export const ComposeArgsSchema = z
  .object({
    dag: GraphSchema,
  })
  .strict();
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
  completions: TextCompletionSchema.array().nonempty(),
  token_count: z.number(),
  token_input_count: z.number(),
});
export type TextGeneration = z.infer<typeof TextGenerationSchema>;

export type GraphResult = { [key: string]: any };
