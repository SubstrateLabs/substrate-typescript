import { z } from "zod";
import { componentsSchema } from "./OpenAPIZod";

export const IdSchema = z.string().min(1);
export type Id = z.infer<typeof IdSchema>;

export const AnySchema = z.any();
export const UnknownSchema = z.unknown();

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
  })
  .strict();
export type BaseNode = z.infer<typeof BaseNodeSchema>;

export const ModelNodeSchema = BaseNodeSchema.extend({
  class: z.literal("ModelNode"),
}).strict();
export type ModelNodeInput = BaseNodeInput;
export type ModelNode = z.infer<typeof ModelNodeSchema>;

export const MistralArgsSchema = componentsSchema.shape.schemas.MistralIn;
// export const MistralArgsSchema = z
//   .object({
//     input_prompts: z.union([z.string(), z.string().array()]),
//     system: z.string().optional(),
//     presence_penalty: z.number().optional().default(1.1),
//     frequency_penalty: z.number().optional().default(0.0),
//     repetition_penalty: z.number().optional().default(1.0),
//     temperature: z.number().optional().default(0.75),
//     top_p: z.number().optional().default(1.0),
//     max_tokens: z.number().optional().default(800),
//   })
//   .strict();
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
    // store_info: StoreInfoSchema.optional(),
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

// NOTE: may be deprecated soon.
// see: https://github.com/colinhacks/zod/issues/2106
export const NodeSchema = z.discriminatedUnion("class", [
  BaseNodeSchema,
  ModelNodeSchema,
  MistralSchema,
  JinaSchema,
  StableDiffusionSchema,
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

export type GraphResult = { [key: string]: any };
