// Generated by ts-to-zod
import { z } from "zod";

export const componentsSchema = z.object({
  schemas: z.object({
    ErrorOut: z.object({
      type: z
        .union([z.literal("api_error"), z.literal("invalid_request_error")])
        .describe("The type of error returned."),
      message: z
        .string()
        .describe("A message providing more details about the error."),
    }),
    ResponseFormat: z.object({
      type: z
        .union([z.literal("json_object"), z.literal("text")])
        .describe("Type of response.")
        .default("text"),
      json_schema: z
        .record(
          z.never().describe("JSON schema to guide `json_object` response."),
        )
        .optional()
        .describe("JSON schema to guide `json_object` response."),
    }),
    GenerateTextIn: z.object({
      prompt: z.string().describe("Input prompt."),
      model: z
        .literal("mistral-7b-instruct")
        .optional()
        .describe("Selected model.")
        .default("mistral-7b-instruct"),
      response_format: z
        .object({
          type: z
            .union([z.literal("json_object"), z.literal("text")])
            .describe("Type of response.")
            .default("text"),
          json_schema: z
            .record(
              z
                .never()
                .describe("JSON schema to guide `json_object` response."),
            )
            .optional()
            .describe("JSON schema to guide `json_object` response."),
        })
        .optional(),
      temperature: z
        .number()
        .optional()
        .describe(
          "Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic.",
        )
        .default(4),
      max_tokens: z
        .number()
        .optional()
        .describe("Maximum number of tokens to generate.")
        .default(800),
    }),
    MultiGenerateTextIn: z.object({
      prompt: z.string().describe("Input prompt."),
      num_choices: z.number().describe("Number of choices to generate."),
      model: z
        .literal("mistral-7b-instruct")
        .optional()
        .describe("Selected model.")
        .default("mistral-7b-instruct"),
      response_format: z
        .object({
          type: z
            .union([z.literal("json_object"), z.literal("text")])
            .describe("Type of response.")
            .default("text"),
          json_schema: z
            .record(
              z
                .never()
                .describe("JSON schema to guide `json_object` response."),
            )
            .optional()
            .describe("JSON schema to guide `json_object` response."),
        })
        .optional(),
      temperature: z
        .number()
        .optional()
        .describe(
          "Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic.",
        )
        .default(4),
      max_tokens: z
        .number()
        .optional()
        .describe("Maximum number of tokens to generate.")
        .default(800),
    }),
    GenerateTextOut: z.object({
      text: z.string().optional().describe("Text response."),
      json_object: z
        .record(z.never().describe("JSON response."))
        .optional()
        .describe("JSON response."),
    }),
    MultiGenerateTextOut: z.object({
      choices: z.array(
        z.object({
          text: z.string().optional().describe("Text response."),
          json_object: z
            .record(z.never().describe("JSON response."))
            .optional()
            .describe("JSON response."),
        }),
      ),
    }),
    GenerateTextVisionIn: z.object({
      prompt: z.string().describe("Text prompt."),
      image_uris: z.array(z.string()).optional().describe("Image prompts."),
      model: z
        .literal("firellava-13b")
        .optional()
        .describe("Selected model.")
        .default("firellava-13b"),
      temperature: z
        .number()
        .optional()
        .describe(
          "Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic.",
        )
        .default(4),
      max_tokens: z
        .number()
        .optional()
        .describe("Maximum number of tokens to generate.")
        .default(800),
    }),
    GenerateTextVisionOut: z.object({
      text: z.string().describe("Text response."),
    }),
    GenerateImageIn: z.object({
      prompt: z.string().describe("Input prompt."),
      model: z
        .union([
          z.literal("stablediffusion-xl"),
          z.literal("stablediffusion-1.5"),
        ])
        .optional()
        .describe("Selected model.")
        .default("stablediffusion-xl"),
      negative_prompt: z.string().optional().describe("Negative input prompt."),
      store: z
        .string()
        .optional()
        .describe(
          'Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string.',
        ),
      width: z
        .number()
        .optional()
        .describe("Width of output image, in pixels."),
      height: z
        .number()
        .optional()
        .describe("Height of output image, in pixels."),
      refinement: z
        .number()
        .optional()
        .describe("Controls how long to run the image refinement process.")
        .default(6),
      prompt_influence: z
        .number()
        .optional()
        .describe(
          "Controls the influence of the input prompt on the generated output.",
        )
        .default(2),
      seed: z
        .number()
        .optional()
        .describe(
          "Seed for deterministic generation. Default is a random seed.",
        ),
    }),
    GenerateImageOut: z.object({
      image_uri: z
        .string()
        .describe(
          "Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided.",
        ),
      seed: z.number().describe("The random noise seed used for generation."),
    }),
    MultiGenerateImageIn: z.object({
      prompt: z.string().describe("Input prompt."),
      num_images: z.number().describe("Number of images to generate."),
      model: z
        .union([
          z.literal("stablediffusion-xl"),
          z.literal("stablediffusion-1.5"),
        ])
        .optional()
        .describe("Selected model.")
        .default("stablediffusion-xl"),
      negative_prompt: z.string().optional().describe("Negative input prompt."),
      store: z
        .string()
        .optional()
        .describe(
          'Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string.',
        ),
      width: z
        .number()
        .optional()
        .describe("Width of output image, in pixels."),
      height: z
        .number()
        .optional()
        .describe("Height of output image, in pixels."),
      refinement: z
        .number()
        .optional()
        .describe("Controls how long to run the image refinement process.")
        .default(6),
      prompt_influence: z
        .number()
        .optional()
        .describe(
          "Controls the influence of the input prompt on the generated output.",
        ),
      seeds: z
        .array(z.number())
        .optional()
        .describe(
          "Random noise seeds. Default is random seeds for each generation.",
        ),
    }),
    MultiGenerateImageOut: z.object({
      outputs: z.array(
        z.object({
          image_uri: z
            .string()
            .describe(
              "Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided.",
            ),
          seed: z
            .number()
            .describe("The random noise seed used for generation."),
        }),
      ),
    }),
    ControlledGenerateImageIn: z.object({
      image_uri: z.string().describe("Input image."),
      control_method: z
        .union([
          z.literal("edge"),
          z.literal("upscale"),
          z.literal("depth"),
          z.literal("qr"),
        ])
        .describe("Strategy to control generation using the input image."),
      prompt: z.string().describe("Input prompt."),
      output_resolution: z
        .number()
        .optional()
        .describe("Resolution of the output image, in pixels.")
        .default(1024),
      model: z
        .union([
          z.literal("stablediffusion-1.5"),
          z.literal("stablediffusion-xl"),
        ])
        .optional()
        .describe("Selected model.")
        .default("stablediffusion-xl"),
      negative_prompt: z.string().optional().describe("Negative input prompt."),
      store: z
        .string()
        .optional()
        .describe(
          'Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string.',
        ),
      refinement: z
        .number()
        .optional()
        .describe("Controls how long to run the image refinement process.")
        .default(6),
      image_influence: z
        .number()
        .optional()
        .describe(
          "Controls the influence of the input image on the generated output.",
        )
        .default(9),
      prompt_influence: z
        .number()
        .optional()
        .describe(
          "Controls the influence of the input prompt on the generated output.",
        )
        .default(2),
      seed: z
        .number()
        .optional()
        .describe(
          "Seed for deterministic generation. Default is a random seed.",
        ),
    }),
    ControlledGenerateImageOut: z.object({
      image_uri: z
        .string()
        .describe(
          "Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided.",
        ),
      seed: z.number().describe("The random noise seed used for generation."),
    }),
    MultiControlledGenerateImageIn: z.object({
      image_uri: z.string().describe("Input image."),
      control_method: z
        .union([
          z.literal("edge"),
          z.literal("upscale"),
          z.literal("depth"),
          z.literal("qr"),
        ])
        .describe("Strategy to control generation using the input image."),
      prompt: z.string().describe("Input prompt."),
      num_images: z.number().describe("Number of images to generate."),
      output_resolution: z
        .number()
        .optional()
        .describe("Resolution of the output image, in pixels.")
        .default(1024),
      model: z
        .literal("stablediffusion-1.5")
        .optional()
        .describe("Selected model.")
        .default("stablediffusion-1.5"),
      negative_prompt: z.string().optional().describe("Negative input prompt."),
      store: z
        .string()
        .optional()
        .describe(
          'Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string.',
        ),
      refinement: z
        .number()
        .optional()
        .describe("Controls how long to run the image refinement process.")
        .default(6),
      image_influence: z
        .number()
        .optional()
        .describe(
          "Controls the influence of the input image on the generated output.",
        )
        .default(9),
      prompt_influence: z
        .number()
        .optional()
        .describe(
          "Controls the influence of the input prompt on the generated output.",
        )
        .default(2),
      seeds: z
        .array(z.number())
        .optional()
        .describe(
          "Random noise seeds. Default is random seeds for each generation.",
        ),
    }),
    MultiControlledGenerateImageOut: z.object({
      outputs: z.array(
        z.object({
          image_uri: z
            .string()
            .describe(
              "Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided.",
            ),
          seed: z
            .number()
            .describe("The random noise seed used for generation."),
        }),
      ),
    }),
    GenerativeEditImageIn: z.object({
      image_uri: z.string().describe("Input image."),
      mask_image_uri: z
        .string()
        .optional()
        .describe(
          "Mask image that controls which pixels are inpainted. If unset, the entire image is edited (image-to-image).",
        ),
      prompt: z.string().describe("Input prompt."),
      output_resolution: z
        .number()
        .optional()
        .describe("Resolution of the output image, in pixels.")
        .default(1024),
      model: z
        .literal("stablediffusion-xl")
        .optional()
        .describe("Selected model.")
        .default("stablediffusion-xl"),
      negative_prompt: z.string().optional().describe("Negative input prompt."),
      store: z
        .string()
        .optional()
        .describe(
          'Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string.',
        ),
      refinement: z
        .number()
        .optional()
        .describe("Controls how long to run the image refinement process.")
        .default(6),
      prompt_influence: z
        .number()
        .optional()
        .describe(
          "Controls the influence of the input prompt on the generated output.",
        )
        .default(5),
      seed: z
        .number()
        .optional()
        .describe(
          "Seed for deterministic generation. Default is a random seed.",
        ),
    }),
    GenerativeEditImageOut: z.object({
      image_uri: z
        .string()
        .describe(
          "Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided.",
        ),
      seed: z.number().describe("The random noise seed used for generation."),
    }),
    MultiGenerativeEditImageIn: z.object({
      image_uri: z.string().describe("Input image."),
      mask_image_uri: z
        .string()
        .optional()
        .describe(
          "Mask image that controls which pixels are edited (inpainting). If unset, the entire image is edited (image-to-image).",
        ),
      prompt: z.string().describe("Input prompt."),
      num_images: z.number().describe("Number of images to generate."),
      output_resolution: z
        .number()
        .optional()
        .describe("Resolution of the output image, in pixels.")
        .default(1024),
      model: z
        .literal("stablediffusion-1.5")
        .optional()
        .describe("Selected model.")
        .default("stablediffusion-1.5"),
      negative_prompt: z.string().optional().describe("Negative input prompt."),
      store: z
        .string()
        .optional()
        .describe(
          'Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string.',
        ),
      refinement: z
        .number()
        .optional()
        .describe("Controls how long to run the image refinement process.")
        .default(6),
      image_influence: z
        .number()
        .optional()
        .describe(
          "Controls the influence of the input image on the generated output.",
        )
        .default(9),
      prompt_influence: z
        .number()
        .optional()
        .describe(
          "Controls the influence of the input prompt on the generated output.",
        )
        .default(2),
      seeds: z
        .array(z.number())
        .optional()
        .describe(
          "Random noise seeds. Default is random seeds for each generation.",
        ),
    }),
    MultiGenerativeEditImageOut: z.object({
      outputs: z.array(
        z.object({
          image_uri: z
            .string()
            .describe(
              "Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided.",
            ),
          seed: z
            .number()
            .describe("The random noise seed used for generation."),
        }),
      ),
    }),
    BoundingBox: z.object({
      x1: z.number().describe("Top left corner x."),
      y1: z.number().describe("Top left corner y."),
      x2: z.number().describe("Bottom right corner x."),
      y2: z.number().describe("Bottom right corner y."),
    }),
    Point: z.object({
      x: z.number().describe("X position."),
      y: z.number().describe("Y position."),
    }),
    FillMaskIn: z.object({
      image_uri: z.string().describe("Input image."),
      mask_image_uri: z
        .string()
        .describe("Mask image that controls which pixels are inpainted."),
      model: z
        .literal("big-lama")
        .optional()
        .describe("Selected model.")
        .default("big-lama"),
      store: z
        .string()
        .optional()
        .describe(
          'Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string.',
        ),
    }),
    FillMaskOut: z.object({
      image_uri: z
        .string()
        .describe(
          "Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided.",
        ),
    }),
    RemoveBackgroundIn: z.object({
      image_uri: z.string().describe("Input image."),
      return_mask: z
        .boolean()
        .optional()
        .describe("Return a mask image instead of the original content."),
      background_color: z
        .string()
        .optional()
        .describe("Hex value background color. Transparent if unset."),
      model: z
        .literal("isnet")
        .optional()
        .describe("Selected model.")
        .default("isnet"),
      store: z
        .string()
        .optional()
        .describe(
          'Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string.',
        ),
    }),
    RemoveBackgroundOut: z.object({
      image_uri: z
        .string()
        .describe(
          "Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided.",
        ),
    }),
    UpscaleImageIn: z.object({
      image_uri: z.string().describe("Input image."),
      model: z
        .literal("real-esrgan-x4")
        .optional()
        .describe("Selected model.")
        .default("real-esrgan-x4"),
      store: z
        .string()
        .optional()
        .describe(
          'Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string.',
        ),
    }),
    UpscaleImageOut: z.object({
      image_uri: z
        .string()
        .describe(
          "Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided.",
        ),
    }),
    DetectSegmentIn: z.object({
      image_uri: z.string().describe("Input image."),
      point_prompt: z
        .object({
          x: z.number().describe("X position."),
          y: z.number().describe("Y position."),
        })
        .optional(),
      box_prompt: z
        .object({
          x1: z.number().describe("Top left corner x."),
          y1: z.number().describe("Top left corner y."),
          x2: z.number().describe("Bottom right corner x."),
          y2: z.number().describe("Bottom right corner y."),
        })
        .optional(),
      store: z
        .string()
        .optional()
        .describe(
          'Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string.',
        ),
    }),
    DetectSegmentOut: z.object({
      mask_image_uri: z
        .string()
        .optional()
        .describe(
          "Detected segment in 'mask image' format. Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided.",
        ),
    }),
    TranscribeMediaIn: z.object({
      audio_uri: z.string().describe("Input audio."),
      prompt: z
        .string()
        .optional()
        .describe(
          "Prompt to guide model on the content and context of input audio.",
        ),
      language: z
        .string()
        .optional()
        .describe(
          "Language of input audio in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.",
        )
        .default("en"),
      segment: z
        .boolean()
        .optional()
        .describe(
          "Segment the text into sentences with approximate timestamps.",
        )
        .default(false),
      align: z
        .boolean()
        .optional()
        .describe(
          "Align transcription to produce more accurate sentence-level timestamps and word-level timestamps. An array of word segments will be included in each sentence segment.",
        )
        .default(false),
      diarize: z
        .boolean()
        .optional()
        .describe(
          "Identify speakers for each segment. Speaker IDs will be included in each segment.",
        )
        .default(false),
      suggest_chapters: z
        .boolean()
        .optional()
        .describe("Suggest automatic chapter markers.")
        .default(false),
    }),
    TranscribedWord: z.object({
      word: z.string().describe("Text of word."),
      start: z.number().optional().describe("Start time of word, in seconds."),
      end: z.number().optional().describe("End time of word, in seconds."),
      speaker: z
        .string()
        .optional()
        .describe("ID of speaker, if `diarize` is enabled."),
    }),
    TranscribedSegment: z.object({
      text: z.string().describe("Text of segment."),
      start: z.number().describe("Start time of segment, in seconds."),
      end: z.number().describe("End time of segment, in seconds."),
      speaker: z
        .string()
        .optional()
        .describe("ID of speaker, if `diarize` is enabled."),
      words: z
        .array(
          z.object({
            word: z.string().describe("Text of word."),
            start: z
              .number()
              .optional()
              .describe("Start time of word, in seconds."),
            end: z
              .number()
              .optional()
              .describe("End time of word, in seconds."),
            speaker: z
              .string()
              .optional()
              .describe("ID of speaker, if `diarize` is enabled."),
          }),
        )
        .optional()
        .describe("Aligned words, if `align` is enabled."),
    }),
    ChapterMarker: z.object({
      title: z.string().describe("Chapter title."),
      start: z.number().describe("Start time of chapter, in seconds."),
    }),
    TranscribeMediaOut: z.object({
      text: z.string().describe("Transcribed text."),
      segments: z
        .array(
          z.object({
            text: z.string().describe("Text of segment."),
            start: z.number().describe("Start time of segment, in seconds."),
            end: z.number().describe("End time of segment, in seconds."),
            speaker: z
              .string()
              .optional()
              .describe("ID of speaker, if `diarize` is enabled."),
            words: z
              .array(
                z.object({
                  word: z.string().describe("Text of word."),
                  start: z
                    .number()
                    .optional()
                    .describe("Start time of word, in seconds."),
                  end: z
                    .number()
                    .optional()
                    .describe("End time of word, in seconds."),
                  speaker: z
                    .string()
                    .optional()
                    .describe("ID of speaker, if `diarize` is enabled."),
                }),
              )
              .optional()
              .describe("Aligned words, if `align` is enabled."),
          }),
        )
        .optional()
        .describe("Transcribed segments, if `segment` is enabled."),
      chapters: z
        .array(
          z.object({
            title: z.string().describe("Chapter title."),
            start: z.number().describe("Start time of chapter, in seconds."),
          }),
        )
        .optional()
        .describe("Chapter markers, if `suggest_chapters` is enabled."),
    }),
    GenerateSpeechIn: z.object({
      text: z.string().describe("Input text."),
      audio_uri: z
        .string()
        .optional()
        .describe(
          "Reference audio used to synthesize the speaker. If unset, a default speaker voice will be used.",
        ),
      language: z
        .string()
        .optional()
        .describe(
          "Language of input text. Supported languages: `en, de, fr, es, it, pt, pl, zh, ar, cs, ru, nl, tr, hu, ko`.",
        )
        .default("en"),
      store: z
        .string()
        .optional()
        .describe(
          'Use "hosted" to return an audio URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the audio data will be returned as a base64-encoded string.',
        ),
    }),
    GenerateSpeechOut: z.object({
      audio_uri: z
        .string()
        .describe(
          "Base 64-encoded WAV audio bytes, or a hosted audio url if `store` is provided.",
        ),
    }),
    Embedding: z.object({
      vector: z.string().describe("Embedding vector."),
    }),
    EmbedTextIn: z.object({
      text: z.string().describe("Text to embed."),
      model: z
        .union([z.literal("jina-v2"), z.literal("clip")])
        .optional()
        .describe("Selected model.")
        .default("jina-v2"),
      store: z
        .string()
        .optional()
        .describe("[Vector store](/docs/vector-stores) identifier."),
      metadata: z
        .record(
          z
            .never()
            .describe(
              "Metadata that can be used to query the vector store. Ignored if `store` is unset.",
            ),
        )
        .optional()
        .describe(
          "Metadata that can be used to query the vector store. Ignored if `store` is unset.",
        ),
      embedded_metadata: z
        .object({
          include_keys: z
            .array(z.string())
            .optional()
            .describe("Keys to embed with text."),
          exclude_keys: z
            .array(z.string())
            .optional()
            .describe(
              "Keys to exclude. All other keys will be embedded with text.",
            ),
        })
        .optional(),
    }),
    EmbedTextOut: z.object({
      embedding: z.object({
        vector: z.string().describe("Embedding vector."),
      }),
    }),
    EmbedTextItem: z.object({
      text: z.string().describe("Text to embed."),
      metadata: z
        .record(
          z
            .never()
            .describe(
              "Metadata that can be used to query the vector store. Ignored if `store` is unset.",
            ),
        )
        .optional()
        .describe(
          "Metadata that can be used to query the vector store. Ignored if `store` is unset.",
        ),
    }),
    MultiEmbedTextIn: z.object({
      items: z
        .array(
          z.object({
            text: z.string().describe("Text to embed."),
            metadata: z
              .record(
                z
                  .never()
                  .describe(
                    "Metadata that can be used to query the vector store. Ignored if `store` is unset.",
                  ),
              )
              .optional()
              .describe(
                "Metadata that can be used to query the vector store. Ignored if `store` is unset.",
              ),
          }),
        )
        .describe("Items to embed."),
      model: z
        .union([z.literal("jina-v2"), z.literal("clip")])
        .optional()
        .describe("Selected model.")
        .default("jina-v2"),
      store: z
        .string()
        .optional()
        .describe("[Vector store](/docs/vector-stores) identifier."),
      embedded_metadata: z
        .object({
          include_keys: z
            .array(z.string())
            .optional()
            .describe("Keys to embed with text."),
          exclude_keys: z
            .array(z.string())
            .optional()
            .describe(
              "Keys to exclude. All other keys will be embedded with text.",
            ),
        })
        .optional(),
    }),
    MultiEmbedTextOut: z.object({
      embeddings: z
        .array(
          z.object({
            vector: z.string().describe("Embedding vector."),
          }),
        )
        .describe("Generated embeddings."),
    }),
    EmbeddedMetadataSelect: z.object({
      include_keys: z
        .array(z.string())
        .optional()
        .describe("Keys to embed with text."),
      exclude_keys: z
        .array(z.string())
        .optional()
        .describe(
          "Keys to exclude. All other keys will be embedded with text.",
        ),
    }),
    EmbedImageIn: z.object({
      image_uri: z.string().describe("Image to embed."),
      model: z
        .literal("clip")
        .optional()
        .describe("Selected model.")
        .default("clip"),
      store: z
        .string()
        .optional()
        .describe("[Vector store](/docs/vector-stores) identifier."),
    }),
    EmbedImageOut: z.object({
      embedding: z.object({
        vector: z.string().describe("Embedding vector."),
      }),
    }),
    EmbedImageItem: z.object({
      image_uri: z.string().describe("Image to embed."),
    }),
    MultiEmbedImageIn: z.object({
      items: z
        .array(
          z.object({
            image_uri: z.string().describe("Image to embed."),
          }),
        )
        .describe("Items to embed."),
      store: z
        .string()
        .optional()
        .describe("[Vector store](/docs/vector-stores) identifier."),
      model: z
        .literal("clip")
        .optional()
        .describe("Selected model.")
        .default("clip"),
    }),
    MultiEmbedImageOut: z.object({
      embeddings: z
        .array(
          z.object({
            vector: z.string().describe("Embedding vector."),
          }),
        )
        .describe("Generated embeddings."),
    }),
    VectorStoreParams: z
      .object({
        name: z.string().describe("Vector store name."),
        model: z
          .union([z.literal("jina-v2"), z.literal("clip")])
          .describe("Selected embedding model"),
        m: z
          .number()
          .optional()
          .describe("The max number of connections per layer for the index.")
          .default(16),
        ef_construction: z
          .number()
          .optional()
          .describe(
            "The size of the dynamic candidate list for constructing the index graph.",
          )
          .default(64),
        metric: z
          .union([z.literal("cosine"), z.literal("l2"), z.literal("inner")])
          .optional()
          .describe("The distance metric to construct the index with.")
          .default("inner"),
      })
      .describe("Fields describing a vector store and its associated index."),
    DeleteVectorStoreParams: z.object({
      name: z.string().describe("Vector store name."),
      model: z
        .union([z.literal("jina-v2"), z.literal("clip")])
        .describe("Selected embedding model"),
    }),
    Vector: z
      .object({
        id: z.string().describe("Document ID."),
        vector: z.array(z.number()).describe("Embedding vector."),
        metadata: z
          .record(z.never().describe("Document metadata.").default("{}"))
          .describe("Document metadata.")
          .default("{}"),
      })
      .describe("Canonical representation of document with embedding vector."),
    GetVectorsParams: z.object({
      name: z.string().describe("Vector store name."),
      model: z
        .union([z.literal("jina-v2"), z.literal("clip")])
        .describe("Selected embedding model"),
      ids: z.array(z.string()).describe("Document IDs to retrieve."),
    }),
    GetVectorsResponse: z.object({
      vectors: z
        .array(
          z.object({
            id: z.string().describe("Document ID."),
            vector: z.array(z.number()).describe("Embedding vector."),
            metadata: z
              .record(z.never().describe("Document metadata.").default("{}"))
              .describe("Document metadata.")
              .default("{}"),
          }),
        )
        .describe("Retrieved vectors."),
    }),
    VectorUpdateCountResponse: z.object({
      count: z.number().describe("Number of vectors modified."),
    }),
    UpdateVectorParams: z
      .object({
        id: z.string().describe("Document ID."),
        vector: z.array(z.number()).optional().describe("Embedding vector."),
        metadata: z
          .record(z.never().describe("Document metadata.").default("{}"))
          .optional()
          .describe("Document metadata.")
          .default("{}"),
      })
      .describe("Document to update."),
    UpdateVectorsParams: z.object({
      name: z.string().describe("Vector store name."),
      model: z
        .union([z.literal("jina-v2"), z.literal("clip")])
        .describe("Selected embedding model"),
      vectors: z
        .array(
          z.object({
            id: z.string().describe("Document ID."),
            vector: z
              .array(z.number())
              .optional()
              .describe("Embedding vector."),
            metadata: z
              .record(z.never().describe("Document metadata.").default("{}"))
              .optional()
              .describe("Document metadata.")
              .default("{}"),
          }),
        )
        .describe("Vectors to upsert."),
    }),
    DeleteVectorsParams: z.object({
      name: z.string().describe("Vector store name."),
      model: z
        .union([z.literal("jina-v2"), z.literal("clip")])
        .describe("Selected embedding model"),
      ids: z.array(z.string()).describe("Document IDs to delete."),
    }),
    QueryVectorStoreParams: z.object({
      name: z.string().describe("Vector store to query against."),
      model: z
        .union([z.literal("jina-v2"), z.literal("clip")])
        .describe("Selected embedding model"),
      query_ids: z
        .array(z.string())
        .optional()
        .describe("Document IDs to use for the query."),
      query_image_uris: z
        .array(z.string())
        .optional()
        .describe("Image URIs to embed and use for the query."),
      query_vectors: z
        .array(z.array(z.number()))
        .optional()
        .describe("Vector to use for the query."),
      query_strings: z
        .array(z.string())
        .optional()
        .describe("Text to embed and use for the query."),
      top_k: z
        .number()
        .optional()
        .describe("Number of results to return.")
        .default(10),
      ef_search: z
        .number()
        .optional()
        .describe(
          "The size of the dynamic candidate list for searching the index graph.",
        )
        .default(40),
      include_values: z
        .boolean()
        .optional()
        .describe("Include the values of the vectors in the response.")
        .default(false),
      include_metadata: z
        .boolean()
        .optional()
        .describe("Include the metadata of the vectors in the response.")
        .default(false),
      filters: z
        .record(z.never().describe("Filter metadata by key-value pairs."))
        .optional()
        .describe("Filter metadata by key-value pairs."),
    }),
    VectorStoreQueryResult: z.object({
      id: z.string().describe("Document ID."),
      distance: z.number().describe("Similarity score."),
      vector: z.array(z.number()).optional().describe("Embedding vector."),
      metadata: z
        .record(z.never().describe("Document metadata."))
        .optional()
        .describe("Document metadata."),
    }),
    QueryVectorStoreResponse: z.object({
      results: z
        .array(
          z.array(
            z.object({
              id: z.string().describe("Document ID."),
              distance: z.number().describe("Similarity score."),
              vector: z
                .array(z.number())
                .optional()
                .describe("Embedding vector."),
              metadata: z
                .record(z.never().describe("Document metadata."))
                .optional()
                .describe("Document metadata."),
            }),
          ),
        )
        .describe("Query results."),
      name: z.string().optional().describe("Vector store name."),
      model: z
        .union([z.literal("jina-v2"), z.literal("clip")])
        .optional()
        .describe("Selected embedding model"),
      metric: z
        .union([z.literal("cosine"), z.literal("l2"), z.literal("inner")])
        .optional()
        .describe("The distance metric used for the query."),
    }),
  }),
  responses: z.never(),
  parameters: z.never(),
  requestBodies: z.never(),
  headers: z.never(),
  pathItems: z.never(),
});
