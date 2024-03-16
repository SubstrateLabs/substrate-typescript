/**
* @GENERATED FILE ꩜ SUBSTRATE
* 20240315.20240316
*/

import * as OpenAPI from "substrate/OpenAPI";
import { Node } from "substrate/Node"
import { SubstrateResponse } from "./SubstrateResponse";


/**
 * Generate text using a language model.
 *
 * Input arguments:
 * - `prompt` 
 * - `model` (optional)
 * - `response_format` (optional)
 * - `temperature` (optional)
 * - `max_tokens` (optional)
 * 
 * Output fields:
 * - `text` (optional)
 * - `json_object` (optional)
 * 
 * https://substrate.run/library#GenerateText
 */
export class GenerateText extends Node {
  /**
   * Generate text using a language model.
   *
   * Input arguments:
   * - `prompt` 
   * - `model` (optional)
   * - `response_format` (optional)
   * - `temperature` (optional)
   * - `max_tokens` (optional)
   * 
   * https://substrate.run/library#GenerateText
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["GenerateTextIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `text` (optional)
   * - `json_object` (optional)
   * 
   * https://substrate.run/library#GenerateText
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["GenerateTextOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `text` (optional)
   * - `json_object` (optional)
   * 
   * https://substrate.run/library#GenerateText
   */
  override get future(): OpenAPI.components["schemas"]["GenerateTextOut"] {
    return super.future;
  }
}

/**
 * Generate multiple text choices using a language model.
 *
 * Input arguments:
 * - `prompt` 
 * - `num_choices` 
 * - `model` (optional)
 * - `response_format` (optional)
 * - `temperature` (optional)
 * - `max_tokens` (optional)
 * 
 * Output fields:
 * - `choices` 
 * 
 * https://substrate.run/library#MultiGenerateText
 */
export class MultiGenerateText extends Node {
  /**
   * Generate multiple text choices using a language model.
   *
   * Input arguments:
   * - `prompt` 
   * - `num_choices` 
   * - `model` (optional)
   * - `response_format` (optional)
   * - `temperature` (optional)
   * - `max_tokens` (optional)
   * 
   * https://substrate.run/library#MultiGenerateText
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["MultiGenerateTextIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `choices` 
   * 
   * https://substrate.run/library#MultiGenerateText
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["MultiGenerateTextOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `choices` 
   * 
   * https://substrate.run/library#MultiGenerateText
   */
  override get future(): OpenAPI.components["schemas"]["MultiGenerateTextOut"] {
    return super.future;
  }
}

/**
 * Generate text by prompting with text and images using a vision-language model.
 *
 * Input arguments:
 * - `prompt` 
 * - `image_uris` (optional)
 * - `model` (optional)
 * - `temperature` (optional)
 * - `max_tokens` (optional)
 * 
 * Output fields:
 * - `text` 
 * 
 * https://substrate.run/library#GenerateTextVision
 */
export class GenerateTextVision extends Node {
  /**
   * Generate text by prompting with text and images using a vision-language model.
   *
   * Input arguments:
   * - `prompt` 
   * - `image_uris` (optional)
   * - `model` (optional)
   * - `temperature` (optional)
   * - `max_tokens` (optional)
   * 
   * https://substrate.run/library#GenerateTextVision
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["GenerateTextVisionIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `text` 
   * 
   * https://substrate.run/library#GenerateTextVision
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["GenerateTextVisionOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `text` 
   * 
   * https://substrate.run/library#GenerateTextVision
   */
  override get future(): OpenAPI.components["schemas"]["GenerateTextVisionOut"] {
    return super.future;
  }
}

/**
 * Generate an image.
 *
 * Input arguments:
 * - `prompt` 
 * - `image_prompt_uri` (optional)
 * - `model` (optional)
 * - `image_influence` (optional)
 * - `negative_prompt` (optional)
 * - `store` (optional)
 * - `width` (optional)
 * - `height` (optional)
 * - `seed` (optional)
 * 
 * Output fields:
 * - `image_uri` 
 * - `seed` 
 * 
 * https://substrate.run/library#GenerateImage
 */
export class GenerateImage extends Node {
  /**
   * Generate an image.
   *
   * Input arguments:
   * - `prompt` 
   * - `image_prompt_uri` (optional)
   * - `model` (optional)
   * - `image_influence` (optional)
   * - `negative_prompt` (optional)
   * - `store` (optional)
   * - `width` (optional)
   * - `height` (optional)
   * - `seed` (optional)
   * 
   * https://substrate.run/library#GenerateImage
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["GenerateImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `image_uri` 
   * - `seed` 
   * 
   * https://substrate.run/library#GenerateImage
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["GenerateImageOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `image_uri` 
   * - `seed` 
   * 
   * https://substrate.run/library#GenerateImage
   */
  override get future(): OpenAPI.components["schemas"]["GenerateImageOut"] {
    return super.future;
  }
}

/**
 * Generate multiple images.
 *
 * Input arguments:
 * - `prompt` 
 * - `image_prompt_uri` (optional)
 * - `num_images` 
 * - `model` (optional)
 * - `image_influence` (optional)
 * - `negative_prompt` (optional)
 * - `store` (optional)
 * - `width` (optional)
 * - `height` (optional)
 * - `seeds` (optional)
 * 
 * Output fields:
 * - `outputs` 
 * 
 * https://substrate.run/library#MultiGenerateImage
 */
export class MultiGenerateImage extends Node {
  /**
   * Generate multiple images.
   *
   * Input arguments:
   * - `prompt` 
   * - `image_prompt_uri` (optional)
   * - `num_images` 
   * - `model` (optional)
   * - `image_influence` (optional)
   * - `negative_prompt` (optional)
   * - `store` (optional)
   * - `width` (optional)
   * - `height` (optional)
   * - `seeds` (optional)
   * 
   * https://substrate.run/library#MultiGenerateImage
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["MultiGenerateImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `outputs` 
   * 
   * https://substrate.run/library#MultiGenerateImage
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["MultiGenerateImageOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `outputs` 
   * 
   * https://substrate.run/library#MultiGenerateImage
   */
  override get future(): OpenAPI.components["schemas"]["MultiGenerateImageOut"] {
    return super.future;
  }
}

/**
 * Generate an image with generation controlled by an input image.
 *
 * Input arguments:
 * - `image_uri` 
 * - `control_method` 
 * - `prompt` 
 * - `output_resolution` (optional)
 * - `model` (optional)
 * - `negative_prompt` (optional)
 * - `store` (optional)
 * - `image_influence` (optional)
 * - `seed` (optional)
 * 
 * Output fields:
 * - `image_uri` 
 * - `seed` 
 * 
 * https://substrate.run/library#ControlledGenerateImage
 */
export class ControlledGenerateImage extends Node {
  /**
   * Generate an image with generation controlled by an input image.
   *
   * Input arguments:
   * - `image_uri` 
   * - `control_method` 
   * - `prompt` 
   * - `output_resolution` (optional)
   * - `model` (optional)
   * - `negative_prompt` (optional)
   * - `store` (optional)
   * - `image_influence` (optional)
   * - `seed` (optional)
   * 
   * https://substrate.run/library#ControlledGenerateImage
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["ControlledGenerateImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `image_uri` 
   * - `seed` 
   * 
   * https://substrate.run/library#ControlledGenerateImage
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["ControlledGenerateImageOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `image_uri` 
   * - `seed` 
   * 
   * https://substrate.run/library#ControlledGenerateImage
   */
  override get future(): OpenAPI.components["schemas"]["ControlledGenerateImageOut"] {
    return super.future;
  }
}

/**
 * Generate multiple image outputs with generation controlled by an input image.
 *
 * Input arguments:
 * - `image_uri` 
 * - `control_method` 
 * - `prompt` 
 * - `num_images` 
 * - `output_resolution` (optional)
 * - `model` (optional)
 * - `negative_prompt` (optional)
 * - `store` (optional)
 * - `image_influence` (optional)
 * - `seeds` (optional)
 * 
 * Output fields:
 * - `outputs` 
 * 
 * https://substrate.run/library#MultiControlledGenerateImage
 */
export class MultiControlledGenerateImage extends Node {
  /**
   * Generate multiple image outputs with generation controlled by an input image.
   *
   * Input arguments:
   * - `image_uri` 
   * - `control_method` 
   * - `prompt` 
   * - `num_images` 
   * - `output_resolution` (optional)
   * - `model` (optional)
   * - `negative_prompt` (optional)
   * - `store` (optional)
   * - `image_influence` (optional)
   * - `seeds` (optional)
   * 
   * https://substrate.run/library#MultiControlledGenerateImage
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["MultiControlledGenerateImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `outputs` 
   * 
   * https://substrate.run/library#MultiControlledGenerateImage
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["MultiControlledGenerateImageOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `outputs` 
   * 
   * https://substrate.run/library#MultiControlledGenerateImage
   */
  override get future(): OpenAPI.components["schemas"]["MultiControlledGenerateImageOut"] {
    return super.future;
  }
}

/**
 * Edit an image with a generative model.
 *
 * Input arguments:
 * - `image_uri` 
 * - `prompt` 
 * - `mask_image_uri` (optional)
 * - `image_prompt_uri` (optional)
 * - `output_resolution` (optional)
 * - `model` (optional)
 * - `strength` (optional)
 * - `image_prompt_influence` (optional)
 * - `negative_prompt` (optional)
 * - `store` (optional)
 * - `seed` (optional)
 * 
 * Output fields:
 * - `image_uri` 
 * - `seed` 
 * 
 * https://substrate.run/library#GenerativeEditImage
 */
export class GenerativeEditImage extends Node {
  /**
   * Edit an image with a generative model.
   *
   * Input arguments:
   * - `image_uri` 
   * - `prompt` 
   * - `mask_image_uri` (optional)
   * - `image_prompt_uri` (optional)
   * - `output_resolution` (optional)
   * - `model` (optional)
   * - `strength` (optional)
   * - `image_prompt_influence` (optional)
   * - `negative_prompt` (optional)
   * - `store` (optional)
   * - `seed` (optional)
   * 
   * https://substrate.run/library#GenerativeEditImage
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["GenerativeEditImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `image_uri` 
   * - `seed` 
   * 
   * https://substrate.run/library#GenerativeEditImage
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["GenerativeEditImageOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `image_uri` 
   * - `seed` 
   * 
   * https://substrate.run/library#GenerativeEditImage
   */
  override get future(): OpenAPI.components["schemas"]["GenerativeEditImageOut"] {
    return super.future;
  }
}

/**
 * Generate multiple image outputs modifying part of an image using a mask.
 *
 * Input arguments:
 * - `image_uri` 
 * - `prompt` 
 * - `mask_image_uri` (optional)
 * - `image_prompt_uri` (optional)
 * - `num_images` 
 * - `output_resolution` (optional)
 * - `model` (optional)
 * - `negative_prompt` (optional)
 * - `store` (optional)
 * - `strength` (optional)
 * - `image_prompt_influence` (optional)
 * - `seeds` (optional)
 * 
 * Output fields:
 * - `outputs` 
 * 
 * https://substrate.run/library#MultiGenerativeEditImage
 */
export class MultiGenerativeEditImage extends Node {
  /**
   * Generate multiple image outputs modifying part of an image using a mask.
   *
   * Input arguments:
   * - `image_uri` 
   * - `prompt` 
   * - `mask_image_uri` (optional)
   * - `image_prompt_uri` (optional)
   * - `num_images` 
   * - `output_resolution` (optional)
   * - `model` (optional)
   * - `negative_prompt` (optional)
   * - `store` (optional)
   * - `strength` (optional)
   * - `image_prompt_influence` (optional)
   * - `seeds` (optional)
   * 
   * https://substrate.run/library#MultiGenerativeEditImage
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["MultiGenerativeEditImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `outputs` 
   * 
   * https://substrate.run/library#MultiGenerativeEditImage
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["MultiGenerativeEditImageOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `outputs` 
   * 
   * https://substrate.run/library#MultiGenerativeEditImage
   */
  override get future(): OpenAPI.components["schemas"]["MultiGenerativeEditImageOut"] {
    return super.future;
  }
}

/**
 * Edit an image with a generative model.
 *
 * Input arguments:
 * - `image_uri` 
 * - `mask_image_uri` 
 * - `model` (optional)
 * - `store` (optional)
 * 
 * Output fields:
 * - `image_uri` 
 * 
 * https://substrate.run/library#FillMask
 */
export class FillMask extends Node {
  /**
   * Edit an image with a generative model.
   *
   * Input arguments:
   * - `image_uri` 
   * - `mask_image_uri` 
   * - `model` (optional)
   * - `store` (optional)
   * 
   * https://substrate.run/library#FillMask
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["FillMaskIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `image_uri` 
   * 
   * https://substrate.run/library#FillMask
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["FillMaskOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `image_uri` 
   * 
   * https://substrate.run/library#FillMask
   */
  override get future(): OpenAPI.components["schemas"]["FillMaskOut"] {
    return super.future;
  }
}

/**
 * Upscale an image.
 *
 * Input arguments:
 * - `image_uri` 
 * - `model` (optional)
 * - `store` (optional)
 * 
 * Output fields:
 * - `image_uri` 
 * 
 * https://substrate.run/library#UpscaleImage
 */
export class UpscaleImage extends Node {
  /**
   * Upscale an image.
   *
   * Input arguments:
   * - `image_uri` 
   * - `model` (optional)
   * - `store` (optional)
   * 
   * https://substrate.run/library#UpscaleImage
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["UpscaleImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `image_uri` 
   * 
   * https://substrate.run/library#UpscaleImage
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["UpscaleImageOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `image_uri` 
   * 
   * https://substrate.run/library#UpscaleImage
   */
  override get future(): OpenAPI.components["schemas"]["UpscaleImageOut"] {
    return super.future;
  }
}

/**
 * Remove the background from an image, with the option to return the foreground as a mask.
 *
 * Input arguments:
 * - `image_uri` 
 * - `return_mask` (optional)
 * - `background_color` (optional)
 * - `model` (optional)
 * - `store` (optional)
 * 
 * Output fields:
 * - `image_uri` 
 * 
 * https://substrate.run/library#RemoveBackground
 */
export class RemoveBackground extends Node {
  /**
   * Remove the background from an image, with the option to return the foreground as a mask.
   *
   * Input arguments:
   * - `image_uri` 
   * - `return_mask` (optional)
   * - `background_color` (optional)
   * - `model` (optional)
   * - `store` (optional)
   * 
   * https://substrate.run/library#RemoveBackground
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["RemoveBackgroundIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `image_uri` 
   * 
   * https://substrate.run/library#RemoveBackground
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["RemoveBackgroundOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `image_uri` 
   * 
   * https://substrate.run/library#RemoveBackground
   */
  override get future(): OpenAPI.components["schemas"]["RemoveBackgroundOut"] {
    return super.future;
  }
}

/**
 * Detect segments in an image given point(s) or bounding box(es).
 *
 * Input arguments:
 * - `image_uri` 
 * - `point_prompts` (optional)
 * - `box_prompts` (optional)
 * - `model` (optional)
 * - `store` (optional)
 * 
 * Output fields:
 * - `mask_image_uri` 
 * 
 * https://substrate.run/library#DetectSegments
 */
export class DetectSegments extends Node {
  /**
   * Detect segments in an image given point(s) or bounding box(es).
   *
   * Input arguments:
   * - `image_uri` 
   * - `point_prompts` (optional)
   * - `box_prompts` (optional)
   * - `model` (optional)
   * - `store` (optional)
   * 
   * https://substrate.run/library#DetectSegments
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["DetectSegmentsIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `mask_image_uri` 
   * 
   * https://substrate.run/library#DetectSegments
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["DetectSegmentsOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `mask_image_uri` 
   * 
   * https://substrate.run/library#DetectSegments
   */
  override get future(): OpenAPI.components["schemas"]["DetectSegmentsOut"] {
    return super.future;
  }
}

/**
 * Transcribe speech in an audio or video file.
 *
 * Input arguments:
 * - `audio_uri` 
 * - `prompt` (optional)
 * - `language` (optional)
 * - `segment` (optional)
 * - `align` (optional)
 * - `diarize` (optional)
 * - `suggest_chapters` (optional)
 * 
 * Output fields:
 * - `text` 
 * - `segments` (optional)
 * - `chapters` (optional)
 * 
 * https://substrate.run/library#TranscribeMedia
 */
export class TranscribeMedia extends Node {
  /**
   * Transcribe speech in an audio or video file.
   *
   * Input arguments:
   * - `audio_uri` 
   * - `prompt` (optional)
   * - `language` (optional)
   * - `segment` (optional)
   * - `align` (optional)
   * - `diarize` (optional)
   * - `suggest_chapters` (optional)
   * 
   * https://substrate.run/library#TranscribeMedia
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["TranscribeMediaIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `text` 
   * - `segments` (optional)
   * - `chapters` (optional)
   * 
   * https://substrate.run/library#TranscribeMedia
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["TranscribeMediaOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `text` 
   * - `segments` (optional)
   * - `chapters` (optional)
   * 
   * https://substrate.run/library#TranscribeMedia
   */
  override get future(): OpenAPI.components["schemas"]["TranscribeMediaOut"] {
    return super.future;
  }
}

/**
 * Generate speech from text.
 *
 * Input arguments:
 * - `text` 
 * - `audio_uri` (optional)
 * - `language` (optional)
 * - `store` (optional)
 * 
 * Output fields:
 * - `audio_uri` 
 * 
 * https://substrate.run/library#GenerateSpeech
 */
export class GenerateSpeech extends Node {
  /**
   * Generate speech from text.
   *
   * Input arguments:
   * - `text` 
   * - `audio_uri` (optional)
   * - `language` (optional)
   * - `store` (optional)
   * 
   * https://substrate.run/library#GenerateSpeech
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["GenerateSpeechIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `audio_uri` 
   * 
   * https://substrate.run/library#GenerateSpeech
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["GenerateSpeechOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `audio_uri` 
   * 
   * https://substrate.run/library#GenerateSpeech
   */
  override get future(): OpenAPI.components["schemas"]["GenerateSpeechOut"] {
    return super.future;
  }
}

/**
 * Generate vector embedding for a text document.
 *
 * Input arguments:
 * - `text` 
 * - `model` (optional)
 * - `store` (optional)
 * - `metadata` (optional)
 * - `embedded_metadata` (optional)
 * 
 * Output fields:
 * - `embedding` 
 * 
 * https://substrate.run/library#EmbedText
 */
export class EmbedText extends Node {
  /**
   * Generate vector embedding for a text document.
   *
   * Input arguments:
   * - `text` 
   * - `model` (optional)
   * - `store` (optional)
   * - `metadata` (optional)
   * - `embedded_metadata` (optional)
   * 
   * https://substrate.run/library#EmbedText
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["EmbedTextIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `embedding` 
   * 
   * https://substrate.run/library#EmbedText
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["EmbedTextOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `embedding` 
   * 
   * https://substrate.run/library#EmbedText
   */
  override get future(): OpenAPI.components["schemas"]["EmbedTextOut"] {
    return super.future;
  }
}

/**
 * Generate vector embeddings for multiple text documents.
 *
 * Input arguments:
 * - `items` 
 * - `model` (optional)
 * - `store` (optional)
 * - `embedded_metadata` (optional)
 * 
 * Output fields:
 * - `embeddings` 
 * 
 * https://substrate.run/library#MultiEmbedText
 */
export class MultiEmbedText extends Node {
  /**
   * Generate vector embeddings for multiple text documents.
   *
   * Input arguments:
   * - `items` 
   * - `model` (optional)
   * - `store` (optional)
   * - `embedded_metadata` (optional)
   * 
   * https://substrate.run/library#MultiEmbedText
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["MultiEmbedTextIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `embeddings` 
   * 
   * https://substrate.run/library#MultiEmbedText
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["MultiEmbedTextOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `embeddings` 
   * 
   * https://substrate.run/library#MultiEmbedText
   */
  override get future(): OpenAPI.components["schemas"]["MultiEmbedTextOut"] {
    return super.future;
  }
}

/**
 * Generate vector embedding for an image, and optionally store the embedding.
 *
 * Input arguments:
 * - `image_uri` 
 * - `model` (optional)
 * - `store` (optional)
 * 
 * Output fields:
 * - `embedding` 
 * 
 * https://substrate.run/library#EmbedImage
 */
export class EmbedImage extends Node {
  /**
   * Generate vector embedding for an image, and optionally store the embedding.
   *
   * Input arguments:
   * - `image_uri` 
   * - `model` (optional)
   * - `store` (optional)
   * 
   * https://substrate.run/library#EmbedImage
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["EmbedImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `embedding` 
   * 
   * https://substrate.run/library#EmbedImage
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["EmbedImageOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `embedding` 
   * 
   * https://substrate.run/library#EmbedImage
   */
  override get future(): OpenAPI.components["schemas"]["EmbedImageOut"] {
    return super.future;
  }
}

/**
 * Generate vector embeddings for multiple images, and optionally store the embeddings.
 *
 * Input arguments:
 * - `items` 
 * - `store` (optional)
 * - `model` (optional)
 * 
 * Output fields:
 * - `embeddings` 
 * 
 * https://substrate.run/library#MultiEmbedImage
 */
export class MultiEmbedImage extends Node {
  /**
   * Generate vector embeddings for multiple images, and optionally store the embeddings.
   *
   * Input arguments:
   * - `items` 
   * - `store` (optional)
   * - `model` (optional)
   * 
   * https://substrate.run/library#MultiEmbedImage
   */
  constructor(args: Partial<OpenAPI.components["schemas"]["MultiEmbedImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields:
   * - `embeddings` 
   * 
   * https://substrate.run/library#MultiEmbedImage
   */
  override output(
    response: SubstrateResponse,
  ): OpenAPI.components["schemas"]["MultiEmbedImageOut"] {
    return super.output(response);
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields:
   * - `embeddings` 
   * 
   * https://substrate.run/library#MultiEmbedImage
   */
  override get future(): OpenAPI.components["schemas"]["MultiEmbedImageOut"] {
    return super.future;
  }
}

