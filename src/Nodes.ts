/**
 * ꩜ Substrate
 * @generated file
 * 20240403.20240403
 */

import * as OpenAPI from "substrate/OpenAPI";
import { Node } from "substrate/Node";
import {
  Trace,
  Future,
  FutureString,
  FutureNumber,
  FutureArray,
  FutureObject,
  FutureAnyObject,
} from "substrate/Future";

// Type that extends some other type T (recursively) and expands it to also accept our
// Future types too.
//
// For example, if a `string` is found it will be changed to `string | FutureString`.
//
// There may still be some edge cases here, so this will also allow for any `Future` when it makes sense.
type AlsoAcceptFutures<T> = T extends (infer U)[]
  ? U extends string
    ? FutureString[]
    : U extends number
      ? FutureNumber[]
      : Future[]
  : T extends object
    ? {
        [P in keyof T]:
          | AlsoAcceptFutures<T[P]>
          | (T[P] extends string
              ? FutureString
              : T[P] extends number
                ? FutureNumber
                : Future)
          | T[P];
      }
    : T;

/** TODO: StableDiffusionXLControlNetOut description */
class StableDiffusionXLControlNetOut extends FutureObject {
  /** TODO: Outputs description */
  get outputs() {
    return new Outputs(this.directive.next("outputs"));
  }
  /** Returns the result for `StableDiffusionXLControlNetOut` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLControlNetOut> {
    return super.result() as Promise<StableDiffusionXLControlNetOut>;
  }
}

/** TODO: StableDiffusionXLInpaintOut description */
class StableDiffusionXLInpaintOut extends FutureObject {
  /** TODO: Outputs description */
  get outputs() {
    return new Outputs(this.directive.next("outputs"));
  }
  /** Returns the result for `StableDiffusionXLInpaintOut` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLInpaintOut> {
    return super.result() as Promise<StableDiffusionXLInpaintOut>;
  }
}

/** TODO: GenerativeEditImageOut description */
class GenerativeEditImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this.directive.next("image_uri"));
  }
  /** Returns the result for `GenerativeEditImageOut` once it's node has been run. */
  protected override async result(): Promise<GenerativeEditImageOut> {
    return super.result() as Promise<GenerativeEditImageOut>;
  }
}

/** Generated embedding. */
class Embedding extends FutureAnyObject {
  /** Returns the result for `Embedding` once it's node has been run. */
  protected override async result(): Promise<Embedding> {
    return super.result() as Promise<Embedding>;
  }
}

/** Choices Array Item */
class ChoicesItem extends FutureAnyObject {
  /** Returns the result for `ChoicesItem` once it's node has been run. */
  protected override async result(): Promise<ChoicesItem> {
    return super.result() as Promise<ChoicesItem>;
  }
}

/** TODO: UpscaleImageOut description */
class UpscaleImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this.directive.next("image_uri"));
  }
  /** Returns the result for `UpscaleImageOut` once it's node has been run. */
  protected override async result(): Promise<UpscaleImageOut> {
    return super.result() as Promise<UpscaleImageOut>;
  }
}

/** TODO: GenerateTextOut description */
class GenerateTextOut extends FutureObject {
  /** (Optional) Text response. */
  get text() {
    return new FutureString(this.directive.next("text"));
  }
  /** Returns the result for `GenerateTextOut` once it's node has been run. */
  protected override async result(): Promise<GenerateTextOut> {
    return super.result() as Promise<GenerateTextOut>;
  }
}

/** TODO: MultiGenerateJSONOut description */
class MultiGenerateJSONOut extends FutureObject {
  /** TODO: Choices description */
  get choices() {
    return new Choices(this.directive.next("choices"));
  }
  /** Returns the result for `MultiGenerateJSONOut` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateJSONOut> {
    return super.result() as Promise<MultiGenerateJSONOut>;
  }
}

/** TODO: Mistral7BInstructOut description */
class Mistral7BInstructOut extends FutureObject {
  /** TODO: Choices description */
  get choices() {
    return new Choices(this.directive.next("choices"));
  }
  /** Returns the result for `Mistral7BInstructOut` once it's node has been run. */
  protected override async result(): Promise<Mistral7BInstructOut> {
    return super.result() as Promise<Mistral7BInstructOut>;
  }
}

/** TODO: GenerateSpeechOut description */
class GenerateSpeechOut extends FutureObject {
  /** Base 64-encoded WAV audio bytes, or a hosted audio url if `store` is provided. */
  get audio_uri() {
    return new FutureString(this.directive.next("audio_uri"));
  }
  /** Returns the result for `GenerateSpeechOut` once it's node has been run. */
  protected override async result(): Promise<GenerateSpeechOut> {
    return super.result() as Promise<GenerateSpeechOut>;
  }
}

/** TODO: EmbedTextOut description */
class EmbedTextOut extends FutureObject {
  /** Generated embedding. */
  get embedding() {
    return new Embedding(this.directive.next("embedding"));
  }
  /** Returns the result for `EmbedTextOut` once it's node has been run. */
  protected override async result(): Promise<EmbedTextOut> {
    return super.result() as Promise<EmbedTextOut>;
  }
}

/** TODO: MultiEmbedTextOut description */
class MultiEmbedTextOut extends FutureObject {
  /** Generated embeddings. */
  get embeddings() {
    return new Embeddings(this.directive.next("embeddings"));
  }
  /** Returns the result for `MultiEmbedTextOut` once it's node has been run. */
  protected override async result(): Promise<MultiEmbedTextOut> {
    return super.result() as Promise<MultiEmbedTextOut>;
  }
}

/** TODO: StableDiffusionXLIPAdapterOut description */
class StableDiffusionXLIPAdapterOut extends FutureObject {
  /** TODO: Outputs description */
  get outputs() {
    return new Outputs(this.directive.next("outputs"));
  }
  /** Returns the result for `StableDiffusionXLIPAdapterOut` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLIPAdapterOut> {
    return super.result() as Promise<StableDiffusionXLIPAdapterOut>;
  }
}

/** TODO: Choices description */
class Choices extends FutureArray {
  override at(index: number) {
    return new ChoicesItem(this.directive.next(index));
  }
  /** Returns the result for `Choices` once it's node has been run. */
  protected override async result(): Promise<ChoicesItem[]> {
    return super.result() as Promise<ChoicesItem[]>;
  }
}

/** TODO: Firellava13BOut description */
class Firellava13BOut extends FutureObject {
  /** Text response. */
  get text() {
    return new FutureString(this.directive.next("text"));
  }
  /** Returns the result for `Firellava13BOut` once it's node has been run. */
  protected override async result(): Promise<Firellava13BOut> {
    return super.result() as Promise<Firellava13BOut>;
  }
}

/** TODO: DetectSegmentsOut description */
class DetectSegmentsOut extends FutureObject {
  /** Detected segments in 'mask image' format. Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get mask_image_uri() {
    return new FutureString(this.directive.next("mask_image_uri"));
  }
  /** Returns the result for `DetectSegmentsOut` once it's node has been run. */
  protected override async result(): Promise<DetectSegmentsOut> {
    return super.result() as Promise<DetectSegmentsOut>;
  }
}

/** TODO: MultiGenerateTextOut description */
class MultiGenerateTextOut extends FutureObject {
  /** TODO: Choices description */
  get choices() {
    return new Choices(this.directive.next("choices"));
  }
  /** Returns the result for `MultiGenerateTextOut` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateTextOut> {
    return super.result() as Promise<MultiGenerateTextOut>;
  }
}

/** Segments Array Item */
class SegmentsItem extends FutureAnyObject {
  /** Returns the result for `SegmentsItem` once it's node has been run. */
  protected override async result(): Promise<SegmentsItem> {
    return super.result() as Promise<SegmentsItem>;
  }
}

/** TODO: RemoveBackgroundOut description */
class RemoveBackgroundOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this.directive.next("image_uri"));
  }
  /** Returns the result for `RemoveBackgroundOut` once it's node has been run. */
  protected override async result(): Promise<RemoveBackgroundOut> {
    return super.result() as Promise<RemoveBackgroundOut>;
  }
}

/** (Optional) Transcribed segments, if `segment` is enabled. */
class Segments extends FutureArray {
  override at(index: number) {
    return new SegmentsItem(this.directive.next(index));
  }
  /** Returns the result for `Segments` once it's node has been run. */
  protected override async result(): Promise<SegmentsItem[]> {
    return super.result() as Promise<SegmentsItem[]>;
  }
}

/** TODO: TranscribeMediaOut description */
class TranscribeMediaOut extends FutureObject {
  /** Transcribed text. */
  get text() {
    return new FutureString(this.directive.next("text"));
  }
  /** (Optional) Transcribed segments, if `segment` is enabled. */
  get segments() {
    return new Segments(this.directive.next("segments"));
  }
  /** (Optional) Chapter markers, if `suggest_chapters` is enabled. */
  get chapters() {
    return new Chapters(this.directive.next("chapters"));
  }
  /** Returns the result for `TranscribeMediaOut` once it's node has been run. */
  protected override async result(): Promise<TranscribeMediaOut> {
    return super.result() as Promise<TranscribeMediaOut>;
  }
}

/** TODO: GenerateJSONOut description */
class GenerateJSONOut extends FutureObject {
  /** (Optional) JSON response. */
  get json_object() {
    return new JsonObject(this.directive.next("json_object"));
  }
  /** Returns the result for `GenerateJSONOut` once it's node has been run. */
  protected override async result(): Promise<GenerateJSONOut> {
    return super.result() as Promise<GenerateJSONOut>;
  }
}

/** Outputs Array Item */
class OutputsItem extends FutureAnyObject {
  /** Returns the result for `OutputsItem` once it's node has been run. */
  protected override async result(): Promise<OutputsItem> {
    return super.result() as Promise<OutputsItem>;
  }
}

/** TODO: EmbedImageOut description */
class EmbedImageOut extends FutureObject {
  /** Generated embedding. */
  get embedding() {
    return new Embedding(this.directive.next("embedding"));
  }
  /** Returns the result for `EmbedImageOut` once it's node has been run. */
  protected override async result(): Promise<EmbedImageOut> {
    return super.result() as Promise<EmbedImageOut>;
  }
}

/** Generated embeddings. */
class Embeddings extends FutureArray {
  override at(index: number) {
    return new EmbeddingsItem(this.directive.next(index));
  }
  /** Returns the result for `Embeddings` once it's node has been run. */
  protected override async result(): Promise<EmbeddingsItem[]> {
    return super.result() as Promise<EmbeddingsItem[]>;
  }
}

/** Chapters Array Item */
class ChaptersItem extends FutureAnyObject {
  /** Returns the result for `ChaptersItem` once it's node has been run. */
  protected override async result(): Promise<ChaptersItem> {
    return super.result() as Promise<ChaptersItem>;
  }
}

/** TODO: StableDiffusionXLOut description */
class StableDiffusionXLOut extends FutureObject {
  /** TODO: Outputs description */
  get outputs() {
    return new Outputs(this.directive.next("outputs"));
  }
  /** Returns the result for `StableDiffusionXLOut` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLOut> {
    return super.result() as Promise<StableDiffusionXLOut>;
  }
}

/** TODO: FillMaskOut description */
class FillMaskOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this.directive.next("image_uri"));
  }
  /** Returns the result for `FillMaskOut` once it's node has been run. */
  protected override async result(): Promise<FillMaskOut> {
    return super.result() as Promise<FillMaskOut>;
  }
}

/** TODO: CLIPOut description */
class CLIPOut extends FutureObject {
  /** Generated embeddings. */
  get embeddings() {
    return new Embeddings(this.directive.next("embeddings"));
  }
  /** Returns the result for `CLIPOut` once it's node has been run. */
  protected override async result(): Promise<CLIPOut> {
    return super.result() as Promise<CLIPOut>;
  }
}

/** TODO: MultiGenerateImageOut description */
class MultiGenerateImageOut extends FutureObject {
  /** TODO: Outputs description */
  get outputs() {
    return new Outputs(this.directive.next("outputs"));
  }
  /** Returns the result for `MultiGenerateImageOut` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateImageOut> {
    return super.result() as Promise<MultiGenerateImageOut>;
  }
}

/** (Optional) JSON response. */
class JsonObject extends FutureAnyObject {
  /** Returns the result for `JsonObject` once it's node has been run. */
  protected override async result(): Promise<JsonObject> {
    return super.result() as Promise<JsonObject>;
  }
}

/** (Optional) Chapter markers, if `suggest_chapters` is enabled. */
class Chapters extends FutureArray {
  override at(index: number) {
    return new ChaptersItem(this.directive.next(index));
  }
  /** Returns the result for `Chapters` once it's node has been run. */
  protected override async result(): Promise<ChaptersItem[]> {
    return super.result() as Promise<ChaptersItem[]>;
  }
}

/** TODO: GenerateTextVisionOut description */
class GenerateTextVisionOut extends FutureObject {
  /** Text response. */
  get text() {
    return new FutureString(this.directive.next("text"));
  }
  /** Returns the result for `GenerateTextVisionOut` once it's node has been run. */
  protected override async result(): Promise<GenerateTextVisionOut> {
    return super.result() as Promise<GenerateTextVisionOut>;
  }
}

/** TODO: MultiGenerativeEditImageOut description */
class MultiGenerativeEditImageOut extends FutureObject {
  /** TODO: Outputs description */
  get outputs() {
    return new Outputs(this.directive.next("outputs"));
  }
  /** Returns the result for `MultiGenerativeEditImageOut` once it's node has been run. */
  protected override async result(): Promise<MultiGenerativeEditImageOut> {
    return super.result() as Promise<MultiGenerativeEditImageOut>;
  }
}

/** TODO: Outputs description */
class Outputs extends FutureArray {
  override at(index: number) {
    return new OutputsItem(this.directive.next(index));
  }
  /** Returns the result for `Outputs` once it's node has been run. */
  protected override async result(): Promise<OutputsItem[]> {
    return super.result() as Promise<OutputsItem[]>;
  }
}

/** Embeddings Array Item */
class EmbeddingsItem extends FutureAnyObject {
  /** Returns the result for `EmbeddingsItem` once it's node has been run. */
  protected override async result(): Promise<EmbeddingsItem> {
    return super.result() as Promise<EmbeddingsItem>;
  }
}

/** TODO: GenerateImageOut description */
class GenerateImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this.directive.next("image_uri"));
  }
  /** Returns the result for `GenerateImageOut` once it's node has been run. */
  protected override async result(): Promise<GenerateImageOut> {
    return super.result() as Promise<GenerateImageOut>;
  }
}

/** TODO: MultiEmbedImageOut description */
class MultiEmbedImageOut extends FutureObject {
  /** Generated embeddings. */
  get embeddings() {
    return new Embeddings(this.directive.next("embeddings"));
  }
  /** Returns the result for `MultiEmbedImageOut` once it's node has been run. */
  protected override async result(): Promise<MultiEmbedImageOut> {
    return super.result() as Promise<MultiEmbedImageOut>;
  }
}

/** TODO: JinaV2Out description */
class JinaV2Out extends FutureObject {
  /** Generated embeddings. */
  get embeddings() {
    return new Embeddings(this.directive.next("embeddings"));
  }
  /** Returns the result for `JinaV2Out` once it's node has been run. */
  protected override async result(): Promise<JinaV2Out> {
    return super.result() as Promise<JinaV2Out>;
  }
}

/**
 * Generate text using a language model.
 *
 * https://substrate.run/library#GenerateText
 */
export class GenerateText extends Node {
  /**
   * Input arguments: `prompt`, `temperature` (optional), `max_tokens` (optional), `node` (optional)
   *
   * Output fields: `future.text` (optional)
   *
   * https://substrate.run/library#GenerateText
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateTextIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.text` (optional)
   *
   * https://substrate.run/library#GenerateText
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["GenerateTextOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["GenerateTextOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["GenerateTextOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.text` (optional)
   *
   * https://substrate.run/library#GenerateText
   */
  override get future(): GenerateTextOut {
    return new GenerateTextOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["GenerateTextOut"] {
    return super.output() as OpenAPI.components["schemas"]["GenerateTextOut"];
  }
}
/**
 * Generate multiple text choices using a language model.
 *
 * https://substrate.run/library#MultiGenerateText
 */
export class MultiGenerateText extends Node {
  /**
   * Input arguments: `prompt`, `num_choices`, `temperature` (optional), `max_tokens` (optional), `node` (optional)
   *
   * Output fields: `future.choices`
   *
   * https://substrate.run/library#MultiGenerateText
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["MultiGenerateTextIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.choices`
   *
   * https://substrate.run/library#MultiGenerateText
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["MultiGenerateTextOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["MultiGenerateTextOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["MultiGenerateTextOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.choices`
   *
   * https://substrate.run/library#MultiGenerateText
   */
  override get future(): MultiGenerateTextOut {
    return new MultiGenerateTextOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["MultiGenerateTextOut"] {
    return super.output() as OpenAPI.components["schemas"]["MultiGenerateTextOut"];
  }
}
/**
 * Generate JSON using a language model.
 *
 * https://substrate.run/library#GenerateJSON
 */
export class GenerateJSON extends Node {
  /**
   * Input arguments: `prompt`, `json_schema`, `temperature` (optional), `max_tokens` (optional), `node` (optional)
   *
   * Output fields: `future.json_object` (optional)
   *
   * https://substrate.run/library#GenerateJSON
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateJSONIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.json_object` (optional)
   *
   * https://substrate.run/library#GenerateJSON
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["GenerateJSONOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["GenerateJSONOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["GenerateJSONOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.json_object` (optional)
   *
   * https://substrate.run/library#GenerateJSON
   */
  override get future(): GenerateJSONOut {
    return new GenerateJSONOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["GenerateJSONOut"] {
    return super.output() as OpenAPI.components["schemas"]["GenerateJSONOut"];
  }
}
/**
 * Generate multiple JSON choices using a language model.
 *
 * https://substrate.run/library#MultiGenerateJSON
 */
export class MultiGenerateJSON extends Node {
  /**
   * Input arguments: `prompt`, `json_schema`, `num_choices`, `temperature` (optional), `max_tokens` (optional), `node` (optional)
   *
   * Output fields: `future.choices`
   *
   * https://substrate.run/library#MultiGenerateJSON
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["MultiGenerateJSONIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.choices`
   *
   * https://substrate.run/library#MultiGenerateJSON
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["MultiGenerateJSONOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["MultiGenerateJSONOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["MultiGenerateJSONOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.choices`
   *
   * https://substrate.run/library#MultiGenerateJSON
   */
  override get future(): MultiGenerateJSONOut {
    return new MultiGenerateJSONOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["MultiGenerateJSONOut"] {
    return super.output() as OpenAPI.components["schemas"]["MultiGenerateJSONOut"];
  }
}
/**
 * Generate text with image input.
 *
 * https://substrate.run/library#GenerateTextVision
 */
export class GenerateTextVision extends Node {
  /**
   * Input arguments: `prompt`, `image_uris`, `temperature` (optional), `max_tokens` (optional), `node` (optional)
   *
   * Output fields: `future.text`
   *
   * https://substrate.run/library#GenerateTextVision
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["GenerateTextVisionIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.text`
   *
   * https://substrate.run/library#GenerateTextVision
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["GenerateTextVisionOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["GenerateTextVisionOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["GenerateTextVisionOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.text`
   *
   * https://substrate.run/library#GenerateTextVision
   */
  override get future(): GenerateTextVisionOut {
    return new GenerateTextVisionOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["GenerateTextVisionOut"] {
    return super.output() as OpenAPI.components["schemas"]["GenerateTextVisionOut"];
  }
}
/**
 * Generate text using Mistral 7B Instruct.
 *
 * https://substrate.run/library#Mistral7BInstruct
 */
export class Mistral7BInstruct extends Node {
  /**
   * Input arguments: `prompt`, `num_choices`, `json_schema` (optional), `temperature` (optional), `max_tokens` (optional)
   *
   * Output fields: `future.choices`
   *
   * https://substrate.run/library#Mistral7BInstruct
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["Mistral7BInstructIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.choices`
   *
   * https://substrate.run/library#Mistral7BInstruct
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["Mistral7BInstructOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["Mistral7BInstructOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["Mistral7BInstructOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.choices`
   *
   * https://substrate.run/library#Mistral7BInstruct
   */
  override get future(): Mistral7BInstructOut {
    return new Mistral7BInstructOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["Mistral7BInstructOut"] {
    return super.output() as OpenAPI.components["schemas"]["Mistral7BInstructOut"];
  }
}
/**
 * Generate text with image input using FireLLaVA 13B.
 *
 * https://substrate.run/library#Firellava13B
 */
export class Firellava13B extends Node {
  /**
   * Input arguments: `prompt`, `image_uris`, `temperature` (optional), `max_tokens` (optional)
   *
   * Output fields: `future.text`
   *
   * https://substrate.run/library#Firellava13B
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["Firellava13BIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.text`
   *
   * https://substrate.run/library#Firellava13B
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["Firellava13BOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["Firellava13BOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["Firellava13BOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.text`
   *
   * https://substrate.run/library#Firellava13B
   */
  override get future(): Firellava13BOut {
    return new Firellava13BOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["Firellava13BOut"] {
    return super.output() as OpenAPI.components["schemas"]["Firellava13BOut"];
  }
}
/**
 * Generate an image.
 *
 * https://substrate.run/library#GenerateImage
 */
export class GenerateImage extends Node {
  /**
   * Input arguments: `prompt`, `store` (optional), `node` (optional)
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#GenerateImage
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateImageIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#GenerateImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["GenerateImageOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["GenerateImageOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["GenerateImageOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#GenerateImage
   */
  override get future(): GenerateImageOut {
    return new GenerateImageOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["GenerateImageOut"] {
    return super.output() as OpenAPI.components["schemas"]["GenerateImageOut"];
  }
}
/**
 * Generate multiple images.
 *
 * https://substrate.run/library#MultiGenerateImage
 */
export class MultiGenerateImage extends Node {
  /**
   * Input arguments: `prompt`, `num_images`, `store` (optional), `node` (optional)
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#MultiGenerateImage
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["MultiGenerateImageIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#MultiGenerateImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["MultiGenerateImageOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["MultiGenerateImageOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["MultiGenerateImageOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#MultiGenerateImage
   */
  override get future(): MultiGenerateImageOut {
    return new MultiGenerateImageOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["MultiGenerateImageOut"] {
    return super.output() as OpenAPI.components["schemas"]["MultiGenerateImageOut"];
  }
}
/**
 * Edit an image using image generation.
 *
 * https://substrate.run/library#GenerativeEditImage
 */
export class GenerativeEditImage extends Node {
  /**
   * Input arguments: `image_uri`, `prompt`, `mask_image_uri` (optional), `store` (optional), `node` (optional)
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#GenerativeEditImage
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["GenerativeEditImageIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#GenerativeEditImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["GenerativeEditImageOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["GenerativeEditImageOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["GenerativeEditImageOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#GenerativeEditImage
   */
  override get future(): GenerativeEditImageOut {
    return new GenerativeEditImageOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["GenerativeEditImageOut"] {
    return super.output() as OpenAPI.components["schemas"]["GenerativeEditImageOut"];
  }
}
/**
 * Edit multiple images using image generation.
 *
 * https://substrate.run/library#MultiGenerativeEditImage
 */
export class MultiGenerativeEditImage extends Node {
  /**
   * Input arguments: `image_uri`, `prompt`, `mask_image_uri` (optional), `num_images`, `store` (optional), `node` (optional)
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#MultiGenerativeEditImage
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["MultiGenerativeEditImageIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#MultiGenerativeEditImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["MultiGenerativeEditImageOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["MultiGenerativeEditImageOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["MultiGenerativeEditImageOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#MultiGenerativeEditImage
   */
  override get future(): MultiGenerativeEditImageOut {
    return new MultiGenerativeEditImageOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["MultiGenerativeEditImageOut"] {
    return super.output() as OpenAPI.components["schemas"]["MultiGenerativeEditImageOut"];
  }
}
/**
 * Generate an image using Stable Diffusion XL.
 *
 * https://substrate.run/library#StableDiffusionXL
 */
export class StableDiffusionXL extends Node {
  /**
   * Input arguments: `prompt`, `negative_prompt` (optional), `steps` (optional), `num_images` (optional), `store` (optional), `height` (optional), `width` (optional), `seeds` (optional), `guidance_scale` (optional)
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXL
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["StableDiffusionXLIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXL
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["StableDiffusionXLOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["StableDiffusionXLOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["StableDiffusionXLOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXL
   */
  override get future(): StableDiffusionXLOut {
    return new StableDiffusionXLOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["StableDiffusionXLOut"] {
    return super.output() as OpenAPI.components["schemas"]["StableDiffusionXLOut"];
  }
}
/**
 * Inpaint an image using Stable Diffusion XL.
 *
 * https://substrate.run/library#StableDiffusionXLInpaint
 */
export class StableDiffusionXLInpaint extends Node {
  /**
   * Input arguments: `image_uri`, `prompt`, `mask_image_uri` (optional), `num_images`, `output_resolution` (optional), `negative_prompt` (optional), `store` (optional), `strength` (optional), `seeds` (optional)
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXLInpaint
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["StableDiffusionXLInpaintIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXLInpaint
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXLInpaint
   */
  override get future(): StableDiffusionXLInpaintOut {
    return new StableDiffusionXLInpaintOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"] {
    return super.output() as OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"];
  }
}
/**
 * Generate an image using Stable Diffusion XL with an image prompt.
 *
 * https://substrate.run/library#StableDiffusionXLIPAdapter
 */
export class StableDiffusionXLIPAdapter extends Node {
  /**
   * Input arguments: `prompt`, `image_prompt_uri` (optional), `num_images`, `ip_adapter_scale` (optional), `negative_prompt` (optional), `store` (optional), `width` (optional), `height` (optional), `seeds` (optional)
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXLIPAdapter
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXLIPAdapter
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXLIPAdapter
   */
  override get future(): StableDiffusionXLIPAdapterOut {
    return new StableDiffusionXLIPAdapterOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterOut"] {
    return super.output() as OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterOut"];
  }
}
/**
 * Generate an image using Stable Diffusion XL structuring generation with an input image.
 *
 * https://substrate.run/library#StableDiffusionXLControlNet
 */
export class StableDiffusionXLControlNet extends Node {
  /**
   * Input arguments: `image_uri`, `control_method`, `prompt`, `num_images`, `output_resolution` (optional), `negative_prompt` (optional), `store` (optional), `conditioning_scale` (optional), `seeds` (optional)
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXLControlNet
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["StableDiffusionXLControlNetIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXLControlNet
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["StableDiffusionXLControlNetOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["StableDiffusionXLControlNetOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      | OpenAPI.components["schemas"]["StableDiffusionXLControlNetOut"]
      | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXLControlNet
   */
  override get future(): StableDiffusionXLControlNetOut {
    return new StableDiffusionXLControlNetOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["StableDiffusionXLControlNetOut"] {
    return super.output() as OpenAPI.components["schemas"]["StableDiffusionXLControlNetOut"];
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
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["FillMaskIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#FillMask
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["FillMaskOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["FillMaskOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["FillMaskOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#FillMask
   */
  override get future(): FillMaskOut {
    return new FillMaskOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["FillMaskOut"] {
    return super.output() as OpenAPI.components["schemas"]["FillMaskOut"];
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
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["UpscaleImageIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#UpscaleImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["UpscaleImageOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["UpscaleImageOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["UpscaleImageOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#UpscaleImage
   */
  override get future(): UpscaleImageOut {
    return new UpscaleImageOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["UpscaleImageOut"] {
    return super.output() as OpenAPI.components["schemas"]["UpscaleImageOut"];
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
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["RemoveBackgroundIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#RemoveBackground
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["RemoveBackgroundOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["RemoveBackgroundOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["RemoveBackgroundOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#RemoveBackground
   */
  override get future(): RemoveBackgroundOut {
    return new RemoveBackgroundOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["RemoveBackgroundOut"] {
    return super.output() as OpenAPI.components["schemas"]["RemoveBackgroundOut"];
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
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["DetectSegmentsIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.mask_image_uri`
   *
   * https://substrate.run/library#DetectSegments
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["DetectSegmentsOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["DetectSegmentsOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["DetectSegmentsOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.mask_image_uri`
   *
   * https://substrate.run/library#DetectSegments
   */
  override get future(): DetectSegmentsOut {
    return new DetectSegmentsOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["DetectSegmentsOut"] {
    return super.output() as OpenAPI.components["schemas"]["DetectSegmentsOut"];
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
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["TranscribeMediaIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.text`, `future.segments` (optional), `future.chapters` (optional)
   *
   * https://substrate.run/library#TranscribeMedia
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["TranscribeMediaOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["TranscribeMediaOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["TranscribeMediaOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.text`, `future.segments` (optional), `future.chapters` (optional)
   *
   * https://substrate.run/library#TranscribeMedia
   */
  override get future(): TranscribeMediaOut {
    return new TranscribeMediaOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["TranscribeMediaOut"] {
    return super.output() as OpenAPI.components["schemas"]["TranscribeMediaOut"];
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
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateSpeechIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.audio_uri`
   *
   * https://substrate.run/library#GenerateSpeech
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["GenerateSpeechOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["GenerateSpeechOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["GenerateSpeechOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.audio_uri`
   *
   * https://substrate.run/library#GenerateSpeech
   */
  override get future(): GenerateSpeechOut {
    return new GenerateSpeechOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["GenerateSpeechOut"] {
    return super.output() as OpenAPI.components["schemas"]["GenerateSpeechOut"];
  }
}
/**
 * Generate embedding for a text document.
 *
 * https://substrate.run/library#EmbedText
 */
export class EmbedText extends Node {
  /**
   * Input arguments: `text`, `store` (optional), `metadata` (optional), `embedded_metadata_keys` (optional), `doc_id` (optional), `node` (optional)
   *
   * Output fields: `future.embedding`
   *
   * https://substrate.run/library#EmbedText
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["EmbedTextIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.embedding`
   *
   * https://substrate.run/library#EmbedText
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["EmbedTextOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["EmbedTextOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["EmbedTextOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.embedding`
   *
   * https://substrate.run/library#EmbedText
   */
  override get future(): EmbedTextOut {
    return new EmbedTextOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["EmbedTextOut"] {
    return super.output() as OpenAPI.components["schemas"]["EmbedTextOut"];
  }
}
/**
 * Generate embeddings for multiple text documents.
 *
 * https://substrate.run/library#MultiEmbedText
 */
export class MultiEmbedText extends Node {
  /**
   * Input arguments: `items`, `store` (optional), `embedded_metadata_keys` (optional), `node` (optional)
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#MultiEmbedText
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiEmbedTextIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#MultiEmbedText
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["MultiEmbedTextOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["MultiEmbedTextOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["MultiEmbedTextOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#MultiEmbedText
   */
  override get future(): MultiEmbedTextOut {
    return new MultiEmbedTextOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["MultiEmbedTextOut"] {
    return super.output() as OpenAPI.components["schemas"]["MultiEmbedTextOut"];
  }
}
/**
 * Generate embedding for an image.
 *
 * https://substrate.run/library#EmbedImage
 */
export class EmbedImage extends Node {
  /**
   * Input arguments: `image_uri`, `store` (optional), `doc_id` (optional), `node` (optional)
   *
   * Output fields: `future.embedding`
   *
   * https://substrate.run/library#EmbedImage
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["EmbedImageIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.embedding`
   *
   * https://substrate.run/library#EmbedImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["EmbedImageOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["EmbedImageOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["EmbedImageOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.embedding`
   *
   * https://substrate.run/library#EmbedImage
   */
  override get future(): EmbedImageOut {
    return new EmbedImageOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["EmbedImageOut"] {
    return super.output() as OpenAPI.components["schemas"]["EmbedImageOut"];
  }
}
/**
 * Generate embeddings for multiple images.
 *
 * https://substrate.run/library#MultiEmbedImage
 */
export class MultiEmbedImage extends Node {
  /**
   * Input arguments: `items`, `store` (optional), `node` (optional)
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#MultiEmbedImage
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiEmbedImageIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#MultiEmbedImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["MultiEmbedImageOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["MultiEmbedImageOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["MultiEmbedImageOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#MultiEmbedImage
   */
  override get future(): MultiEmbedImageOut {
    return new MultiEmbedImageOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["MultiEmbedImageOut"] {
    return super.output() as OpenAPI.components["schemas"]["MultiEmbedImageOut"];
  }
}
/**
 * Generate embeddings for multiple text documents using Jina V2.
 *
 * https://substrate.run/library#JinaV2
 */
export class JinaV2 extends Node {
  /**
   * Input arguments: `items`, `store` (optional), `embedded_metadata_keys` (optional)
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#JinaV2
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["JinaV2In"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#JinaV2
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["JinaV2Out"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["JinaV2Out"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["JinaV2Out"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#JinaV2
   */
  override get future(): JinaV2Out {
    return new JinaV2Out(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["JinaV2Out"] {
    return super.output() as OpenAPI.components["schemas"]["JinaV2Out"];
  }
}
/**
 * Generate embeddings for text or images using CLIP.
 *
 * https://substrate.run/library#CLIP
 */
export class CLIP extends Node {
  /**
   * Input arguments: `items`, `embedded_metadata_keys` (optional), `store` (optional)
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#CLIP
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["CLIPIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#CLIP
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["CLIPOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["CLIPOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["CLIPOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.embeddings`
   *
   * https://substrate.run/library#CLIP
   */
  override get future(): CLIPOut {
    return new CLIPOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["CLIPOut"] {
    return super.output() as OpenAPI.components["schemas"]["CLIPOut"];
  }
}
export type AnyNode =
  | GenerateText
  | MultiGenerateText
  | GenerateJSON
  | MultiGenerateJSON
  | GenerateTextVision
  | Mistral7BInstruct
  | Firellava13B
  | GenerateImage
  | MultiGenerateImage
  | GenerativeEditImage
  | MultiGenerativeEditImage
  | StableDiffusionXL
  | StableDiffusionXLInpaint
  | StableDiffusionXLIPAdapter
  | StableDiffusionXLControlNet
  | FillMask
  | UpscaleImage
  | RemoveBackground
  | DetectSegments
  | TranscribeMedia
  | GenerateSpeech
  | EmbedText
  | MultiEmbedText
  | EmbedImage
  | MultiEmbedImage
  | JinaV2
  | CLIP;

export type NodeOutput<T> = T extends GenerateText
  ? GenerateTextOut
  : T extends MultiGenerateText
    ? MultiGenerateTextOut
    : T extends GenerateJSON
      ? GenerateJSONOut
      : T extends MultiGenerateJSON
        ? MultiGenerateJSONOut
        : T extends GenerateTextVision
          ? GenerateTextVisionOut
          : T extends Mistral7BInstruct
            ? Mistral7BInstructOut
            : T extends Firellava13B
              ? Firellava13BOut
              : T extends GenerateImage
                ? GenerateImageOut
                : T extends MultiGenerateImage
                  ? MultiGenerateImageOut
                  : T extends GenerativeEditImage
                    ? GenerativeEditImageOut
                    : T extends MultiGenerativeEditImage
                      ? MultiGenerativeEditImageOut
                      : T extends StableDiffusionXL
                        ? StableDiffusionXLOut
                        : T extends StableDiffusionXLInpaint
                          ? StableDiffusionXLInpaintOut
                          : T extends StableDiffusionXLIPAdapter
                            ? StableDiffusionXLIPAdapterOut
                            : T extends StableDiffusionXLControlNet
                              ? StableDiffusionXLControlNetOut
                              : T extends FillMask
                                ? FillMaskOut
                                : T extends UpscaleImage
                                  ? UpscaleImageOut
                                  : T extends RemoveBackground
                                    ? RemoveBackgroundOut
                                    : T extends DetectSegments
                                      ? DetectSegmentsOut
                                      : T extends TranscribeMedia
                                        ? TranscribeMediaOut
                                        : T extends GenerateSpeech
                                          ? GenerateSpeechOut
                                          : T extends EmbedText
                                            ? EmbedTextOut
                                            : T extends MultiEmbedText
                                              ? MultiEmbedTextOut
                                              : T extends EmbedImage
                                                ? EmbedImageOut
                                                : T extends MultiEmbedImage
                                                  ? MultiEmbedImageOut
                                                  : T extends JinaV2
                                                    ? JinaV2Out
                                                    : T extends CLIP
                                                      ? CLIPOut
                                                      : never;

export type NodeOutput2<T> = T extends { output: () => infer R } ? R : never;
