/**
* ꩜ Substrate
* @generated file
* 20240315.20240321
*/

import * as OpenAPI from "substrate/OpenAPI";
import { Node } from "substrate/Node"
import { SubstrateResponse } from "./SubstrateResponse";
import { Trace, Future, FutureString, FutureNumber, FutureArray, FutureObject, FutureAnyObject } from "substrate/Future";

// Type that extends some other type T (recursively) and expands it to also accept our
// Future types too.
// 
// For example, if a `string` is found it will be changed to `string | FutureString`.
// 
// There may still be some edge cases here, so this will also allow for any `Future` when it makes sense.
type AlsoAcceptFutures<T> =
  T extends (infer U)[] 
    ? U extends string ? FutureString[] : U extends number ? FutureNumber[] : Future[]
    : T extends object
      ? { [P in keyof T]: AlsoAcceptFutures<T[P]> | (T[P] extends string ? FutureString : T[P] extends number ? FutureNumber : Future) | T[P] }
      : T;


/** TODO: TranscribeMediaOut description */
class TranscribeMediaOut extends FutureObject {
  /** Transcribed text. */
  get text() { return new FutureString(this.directive.next('text')) }
  /** (Optional) Transcribed segments, if `segment` is enabled. */
  get segments() { return new Segments(this.directive.next('segments')) }
  /** (Optional) Chapter markers, if `suggest_chapters` is enabled. */
  get chapters() { return new Chapters(this.directive.next('chapters')) }
}

/** TODO: MultiGenerativeEditImageOut description */
class MultiGenerativeEditImageOut extends FutureObject {
  /** TODO: Outputs description */
  get outputs() { return new Outputs(this.directive.next('outputs')) }
}

/** (Optional) Chapter markers, if `suggest_chapters` is enabled. */
class Chapters extends FutureArray {
  override at(index: number) { return new ChaptersItem(this.directive.next(index)) }
}

/** TODO: MultiEmbedTextOut description */
class MultiEmbedTextOut extends FutureObject {
  /** Generated embeddings. */
  get embeddings() { return new Embeddings(this.directive.next('embeddings')) }
}

/** TODO: GenerateTextVisionOut description */
class GenerateTextVisionOut extends FutureObject {
  /** Text response. */
  get text() { return new FutureString(this.directive.next('text')) }
}

/** Segments Array Item */
class SegmentsItem extends FutureAnyObject {}
/** TODO: EmbedTextOut description */
class EmbedTextOut extends FutureObject {
  /** Generated embedding. */
  get embedding() { return new Embedding(this.directive.next('embedding')) }
}

/** TODO: Choices description */
class Choices extends FutureArray {
  override at(index: number) { return new ChoicesItem(this.directive.next(index)) }
}

/** Generated embedding. */
class Embedding extends FutureAnyObject {}
/** TODO: EmbedImageOut description */
class EmbedImageOut extends FutureObject {
  /** Generated embedding. */
  get embedding() { return new Embedding(this.directive.next('embedding')) }
}

/** Generated embeddings. */
class Embeddings extends FutureArray {
  override at(index: number) { return new EmbeddingsItem(this.directive.next(index)) }
}

/** (Optional) JSON response. */
class JsonObject extends FutureAnyObject {}
/** TODO: MultiGenerateTextOut description */
class MultiGenerateTextOut extends FutureObject {
  /** TODO: Choices description */
  get choices() { return new Choices(this.directive.next('choices')) }
}

/** TODO: MultiGenerateImageOut description */
class MultiGenerateImageOut extends FutureObject {
  /** TODO: Outputs description */
  get outputs() { return new Outputs(this.directive.next('outputs')) }
}

/** TODO: Outputs description */
class Outputs extends FutureArray {
  override at(index: number) { return new OutputsItem(this.directive.next(index)) }
}

/** TODO: GenerateImageOut description */
class GenerateImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() { return new FutureString(this.directive.next('image_uri')) }
  /** The random noise seed used for generation. */
  get seed() { return new Seed(this.directive.next('seed')) }
}

/** Outputs Array Item */
class OutputsItem extends FutureAnyObject {}
/** TODO: RemoveBackgroundOut description */
class RemoveBackgroundOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() { return new FutureString(this.directive.next('image_uri')) }
}

/** TODO: MultiEmbedImageOut description */
class MultiEmbedImageOut extends FutureObject {
  /** Generated embeddings. */
  get embeddings() { return new Embeddings(this.directive.next('embeddings')) }
}

/** TODO: GenerateTextOut description */
class GenerateTextOut extends FutureObject {
  /** (Optional) Text response. */
  get text() { return new FutureString(this.directive.next('text')) }
  /** (Optional) JSON response. */
  get json_object() { return new JsonObject(this.directive.next('json_object')) }
}

/** The random noise seed used for generation. */
class Seed extends FutureAnyObject {}
/** TODO: MultiControlledGenerateImageOut description */
class MultiControlledGenerateImageOut extends FutureObject {
  /** TODO: Outputs description */
  get outputs() { return new Outputs(this.directive.next('outputs')) }
}

/** TODO: GenerateSpeechOut description */
class GenerateSpeechOut extends FutureObject {
  /** Base 64-encoded WAV audio bytes, or a hosted audio url if `store` is provided. */
  get audio_uri() { return new FutureString(this.directive.next('audio_uri')) }
}

/** Choices Array Item */
class ChoicesItem extends FutureAnyObject {}
/** TODO: UpscaleImageOut description */
class UpscaleImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() { return new FutureString(this.directive.next('image_uri')) }
}

/** Chapters Array Item */
class ChaptersItem extends FutureAnyObject {}
/** TODO: DetectSegmentsOut description */
class DetectSegmentsOut extends FutureObject {
  /** Detected segments in 'mask image' format. Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get mask_image_uri() { return new FutureString(this.directive.next('mask_image_uri')) }
}

/** TODO: FillMaskOut description */
class FillMaskOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() { return new FutureString(this.directive.next('image_uri')) }
}

/** Embeddings Array Item */
class EmbeddingsItem extends FutureAnyObject {}
/** (Optional) Transcribed segments, if `segment` is enabled. */
class Segments extends FutureArray {
  override at(index: number) { return new SegmentsItem(this.directive.next(index)) }
}

/** TODO: ControlledGenerateImageOut description */
class ControlledGenerateImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() { return new FutureString(this.directive.next('image_uri')) }
  /** The random noise seed used for generation. */
  get seed() { return new Seed(this.directive.next('seed')) }
}

/** TODO: GenerativeEditImageOut description */
class GenerativeEditImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() { return new FutureString(this.directive.next('image_uri')) }
  /** The random noise seed used for generation. */
  get seed() { return new Seed(this.directive.next('seed')) }
}

/**
 * Generate text using a language model.
 *
 * https://substrate.run/library#GenerateText
 */
export class GenerateText extends Node {
  /**
   * Input arguments: `prompt`, `model` (optional), `response_format` (optional), `temperature` (optional), `max_tokens` (optional)
   *
   * Output fields: `future.text` (optional), `future.json_object` (optional)
   *
   * https://substrate.run/library#GenerateText
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateTextIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.text` (optional), `future.json_object` (optional)
   *
   * https://substrate.run/library#GenerateText
   */
  override get output(): OpenAPI.components["schemas"]["GenerateTextOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.text` (optional), `future.json_object` (optional)
   *
   * https://substrate.run/library#GenerateText
   */
  override get future(): GenerateTextOut {
    return new GenerateTextOut(new Trace([], this.id));
  }
}

/**
 * Generate multiple text choices using a language model.
 *
 * https://substrate.run/library#MultiGenerateText
 */
export class MultiGenerateText extends Node {
  /**
   * Input arguments: `prompt`, `num_choices`, `model` (optional), `response_format` (optional), `temperature` (optional), `max_tokens` (optional)
   *
   * Output fields: `future.choices`
   *
   * https://substrate.run/library#MultiGenerateText
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiGenerateTextIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.choices`
   *
   * https://substrate.run/library#MultiGenerateText
   */
  override get output(): OpenAPI.components["schemas"]["MultiGenerateTextOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.choices`
   *
   * https://substrate.run/library#MultiGenerateText
   */
  override get future(): MultiGenerateTextOut {
    return new MultiGenerateTextOut(new Trace([], this.id));
  }
}

/**
 * Generate text by prompting with text and images using a vision-language model.
 *
 * https://substrate.run/library#GenerateTextVision
 */
export class GenerateTextVision extends Node {
  /**
   * Input arguments: `prompt`, `image_uris` (optional), `model` (optional), `temperature` (optional), `max_tokens` (optional)
   *
   * Output fields: `future.text`
   *
   * https://substrate.run/library#GenerateTextVision
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateTextVisionIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.text`
   *
   * https://substrate.run/library#GenerateTextVision
   */
  override get output(): OpenAPI.components["schemas"]["GenerateTextVisionOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.text`
   *
   * https://substrate.run/library#GenerateTextVision
   */
  override get future(): GenerateTextVisionOut {
    return new GenerateTextVisionOut(new Trace([], this.id));
  }
}

/**
 * Generate an image.
 *
 * https://substrate.run/library#GenerateImage
 */
export class GenerateImage extends Node {
  /**
   * Input arguments: `prompt`, `image_prompt_uri` (optional), `model` (optional), `image_influence` (optional), `negative_prompt` (optional), `store` (optional), `width` (optional), `height` (optional), `seed` (optional)
   *
   * Output fields: `future.image_uri`, `future.seed`
   *
   * https://substrate.run/library#GenerateImage
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.image_uri`, `future.seed`
   *
   * https://substrate.run/library#GenerateImage
   */
  override get output(): OpenAPI.components["schemas"]["GenerateImageOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.image_uri`, `future.seed`
   *
   * https://substrate.run/library#GenerateImage
   */
  override get future(): GenerateImageOut {
    return new GenerateImageOut(new Trace([], this.id));
  }
}

/**
 * Generate multiple images.
 *
 * https://substrate.run/library#MultiGenerateImage
 */
export class MultiGenerateImage extends Node {
  /**
   * Input arguments: `prompt`, `image_prompt_uri` (optional), `num_images`, `model` (optional), `image_influence` (optional), `negative_prompt` (optional), `store` (optional), `width` (optional), `height` (optional), `seeds` (optional)
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#MultiGenerateImage
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiGenerateImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#MultiGenerateImage
   */
  override get output(): OpenAPI.components["schemas"]["MultiGenerateImageOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#MultiGenerateImage
   */
  override get future(): MultiGenerateImageOut {
    return new MultiGenerateImageOut(new Trace([], this.id));
  }
}

/**
 * Generate an image with generation controlled by an input image.
 *
 * https://substrate.run/library#ControlledGenerateImage
 */
export class ControlledGenerateImage extends Node {
  /**
   * Input arguments: `image_uri`, `control_method`, `prompt`, `output_resolution` (optional), `model` (optional), `negative_prompt` (optional), `store` (optional), `image_influence` (optional), `seed` (optional)
   *
   * Output fields: `future.image_uri`, `future.seed`
   *
   * https://substrate.run/library#ControlledGenerateImage
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["ControlledGenerateImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.image_uri`, `future.seed`
   *
   * https://substrate.run/library#ControlledGenerateImage
   */
  override get output(): OpenAPI.components["schemas"]["ControlledGenerateImageOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.image_uri`, `future.seed`
   *
   * https://substrate.run/library#ControlledGenerateImage
   */
  override get future(): ControlledGenerateImageOut {
    return new ControlledGenerateImageOut(new Trace([], this.id));
  }
}

/**
 * Generate multiple image outputs with generation controlled by an input image.
 *
 * https://substrate.run/library#MultiControlledGenerateImage
 */
export class MultiControlledGenerateImage extends Node {
  /**
   * Input arguments: `image_uri`, `control_method`, `prompt`, `num_images`, `output_resolution` (optional), `model` (optional), `negative_prompt` (optional), `store` (optional), `image_influence` (optional), `seeds` (optional)
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#MultiControlledGenerateImage
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiControlledGenerateImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#MultiControlledGenerateImage
   */
  override get output(): OpenAPI.components["schemas"]["MultiControlledGenerateImageOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#MultiControlledGenerateImage
   */
  override get future(): MultiControlledGenerateImageOut {
    return new MultiControlledGenerateImageOut(new Trace([], this.id));
  }
}

/**
 * Edit an image with a generative model.
 *
 * https://substrate.run/library#GenerativeEditImage
 */
export class GenerativeEditImage extends Node {
  /**
   * Input arguments: `image_uri`, `prompt`, `mask_image_uri` (optional), `image_prompt_uri` (optional), `output_resolution` (optional), `model` (optional), `strength` (optional), `image_prompt_influence` (optional), `negative_prompt` (optional), `store` (optional), `seed` (optional)
   *
   * Output fields: `future.image_uri`, `future.seed`
   *
   * https://substrate.run/library#GenerativeEditImage
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerativeEditImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.image_uri`, `future.seed`
   *
   * https://substrate.run/library#GenerativeEditImage
   */
  override get output(): OpenAPI.components["schemas"]["GenerativeEditImageOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.image_uri`, `future.seed`
   *
   * https://substrate.run/library#GenerativeEditImage
   */
  override get future(): GenerativeEditImageOut {
    return new GenerativeEditImageOut(new Trace([], this.id));
  }
}

/**
 * Generate multiple image outputs modifying part of an image using a mask.
 *
 * https://substrate.run/library#MultiGenerativeEditImage
 */
export class MultiGenerativeEditImage extends Node {
  /**
   * Input arguments: `image_uri`, `prompt`, `mask_image_uri` (optional), `image_prompt_uri` (optional), `num_images`, `output_resolution` (optional), `model` (optional), `negative_prompt` (optional), `store` (optional), `strength` (optional), `image_prompt_influence` (optional), `seeds` (optional)
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#MultiGenerativeEditImage
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiGenerativeEditImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#MultiGenerativeEditImage
   */
  override get output(): OpenAPI.components["schemas"]["MultiGenerativeEditImageOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#MultiGenerativeEditImage
   */
  override get future(): MultiGenerativeEditImageOut {
    return new MultiGenerativeEditImageOut(new Trace([], this.id));
  }
}

/**
 * Edit an image with a generative model.
 *
 * https://substrate.run/library#FillMask
 */
export class FillMask extends Node {
  /**
   * Input arguments: `image_uri`, `mask_image_uri`, `model` (optional), `store` (optional)
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#FillMask
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["FillMaskIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#FillMask
   */
  override get output(): OpenAPI.components["schemas"]["FillMaskOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#FillMask
   */
  override get future(): FillMaskOut {
    return new FillMaskOut(new Trace([], this.id));
  }
}

/**
 * Upscale an image.
 *
 * https://substrate.run/library#UpscaleImage
 */
export class UpscaleImage extends Node {
  /**
   * Input arguments: `image_uri`, `model` (optional), `store` (optional)
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#UpscaleImage
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["UpscaleImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#UpscaleImage
   */
  override get output(): OpenAPI.components["schemas"]["UpscaleImageOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#UpscaleImage
   */
  override get future(): UpscaleImageOut {
    return new UpscaleImageOut(new Trace([], this.id));
  }
}

/**
 * Remove the background from an image, with the option to return the foreground as a mask.
 *
 * https://substrate.run/library#RemoveBackground
 */
export class RemoveBackground extends Node {
  /**
   * Input arguments: `image_uri`, `return_mask` (optional), `background_color` (optional), `model` (optional), `store` (optional)
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#RemoveBackground
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["RemoveBackgroundIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#RemoveBackground
   */
  override get output(): OpenAPI.components["schemas"]["RemoveBackgroundOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#RemoveBackground
   */
  override get future(): RemoveBackgroundOut {
    return new RemoveBackgroundOut(new Trace([], this.id));
  }
}

/**
 * Detect segments in an image given point(s) or bounding box(es).
 *
 * https://substrate.run/library#DetectSegments
 */
export class DetectSegments extends Node {
  /**
   * Input arguments: `image_uri`, `point_prompts` (optional), `box_prompts` (optional), `model` (optional), `store` (optional)
   *
   * Output fields: `future.mask_image_uri`
   *
   * https://substrate.run/library#DetectSegments
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["DetectSegmentsIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.mask_image_uri`
   *
   * https://substrate.run/library#DetectSegments
   */
  override get output(): OpenAPI.components["schemas"]["DetectSegmentsOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.mask_image_uri`
   *
   * https://substrate.run/library#DetectSegments
   */
  override get future(): DetectSegmentsOut {
    return new DetectSegmentsOut(new Trace([], this.id));
  }
}

/**
 * Transcribe speech in an audio or video file.
 *
 * https://substrate.run/library#TranscribeMedia
 */
export class TranscribeMedia extends Node {
  /**
   * Input arguments: `audio_uri`, `prompt` (optional), `language` (optional), `segment` (optional), `align` (optional), `diarize` (optional), `suggest_chapters` (optional)
   *
   * Output fields: `future.text`, `future.segments` (optional), `future.chapters` (optional)
   *
   * https://substrate.run/library#TranscribeMedia
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["TranscribeMediaIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.text`, `future.segments` (optional), `future.chapters` (optional)
   *
   * https://substrate.run/library#TranscribeMedia
   */
  override get output(): OpenAPI.components["schemas"]["TranscribeMediaOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.text`, `future.segments` (optional), `future.chapters` (optional)
   *
   * https://substrate.run/library#TranscribeMedia
   */
  override get future(): TranscribeMediaOut {
    return new TranscribeMediaOut(new Trace([], this.id));
  }
}

/**
 * Generate speech from text.
 *
 * https://substrate.run/library#GenerateSpeech
 */
export class GenerateSpeech extends Node {
  /**
   * Input arguments: `text`, `audio_uri` (optional), `language` (optional), `store` (optional)
   *
   * Output fields: `future.audio_uri`
   *
   * https://substrate.run/library#GenerateSpeech
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateSpeechIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.audio_uri`
   *
   * https://substrate.run/library#GenerateSpeech
   */
  override get output(): OpenAPI.components["schemas"]["GenerateSpeechOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.audio_uri`
   *
   * https://substrate.run/library#GenerateSpeech
   */
  override get future(): GenerateSpeechOut {
    return new GenerateSpeechOut(new Trace([], this.id));
  }
}

/**
 * Generate vector embedding for a text document.
 *
 * https://substrate.run/library#EmbedText
 */
export class EmbedText extends Node {
  /**
   * Input arguments: `text`, `model` (optional), `store` (optional), `metadata` (optional), `embedded_metadata_keys` (optional), `document_id` (optional)
   *
   * Output fields: `future.embedding`
   *
   * https://substrate.run/library#EmbedText
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["EmbedTextIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.embedding`
   *
   * https://substrate.run/library#EmbedText
   */
  override get output(): OpenAPI.components["schemas"]["EmbedTextOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.embedding`
   *
   * https://substrate.run/library#EmbedText
   */
  override get future(): EmbedTextOut {
    return new EmbedTextOut(new Trace([], this.id));
  }
}

/**
 * Generate vector embeddings for multiple text documents.
 *
 * https://substrate.run/library#MultiEmbedText
 */
export class MultiEmbedText extends Node {
  /**
   * Input arguments: `items`, `model` (optional), `store` (optional), `embedded_metadata_keys` (optional)
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#MultiEmbedText
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiEmbedTextIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#MultiEmbedText
   */
  override get output(): OpenAPI.components["schemas"]["MultiEmbedTextOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#MultiEmbedText
   */
  override get future(): MultiEmbedTextOut {
    return new MultiEmbedTextOut(new Trace([], this.id));
  }
}

/**
 * Generate vector embedding for an image, and optionally store the embedding.
 *
 * https://substrate.run/library#EmbedImage
 */
export class EmbedImage extends Node {
  /**
   * Input arguments: `image_uri`, `model` (optional), `store` (optional), `document_id` (optional)
   *
   * Output fields: `future.embedding`
   *
   * https://substrate.run/library#EmbedImage
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["EmbedImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.embedding`
   *
   * https://substrate.run/library#EmbedImage
   */
  override get output(): OpenAPI.components["schemas"]["EmbedImageOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.embedding`
   *
   * https://substrate.run/library#EmbedImage
   */
  override get future(): EmbedImageOut {
    return new EmbedImageOut(new Trace([], this.id));
  }
}

/**
 * Generate vector embeddings for multiple images, and optionally store the embeddings.
 *
 * https://substrate.run/library#MultiEmbedImage
 */
export class MultiEmbedImage extends Node {
  /**
   * Input arguments: `items`, `store` (optional), `model` (optional)
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#MultiEmbedImage
   */
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiEmbedImageIn"]>) {
    super(args);
  }

  /*
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#MultiEmbedImage
   */
  override get output(): OpenAPI.components["schemas"]["MultiEmbedImageOut"] {
    return super.output;
  }

  override set output(response: SubstrateResponse) {
    super.output = response;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#MultiEmbedImage
   */
  override get future(): MultiEmbedImageOut {
    return new MultiEmbedImageOut(new Trace([], this.id));
  }
}

