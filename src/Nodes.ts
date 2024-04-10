/**
 * ꩜ Substrate
 * @generated file
 * 20240405.20240410
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

/** Results Array Item */
class ResultsItem extends FutureAnyObject {
  /** Returns the result for `ResultsItem` once it's node has been run. */
  protected override async result(): Promise<ResultsItem> {
    return super.result() as Promise<ResultsItem>;
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

/** Stores Array Item */
class StoresItem extends FutureAnyObject {
  /** Returns the result for `StoresItem` once it's node has been run. */
  protected override async result(): Promise<StoresItem> {
    return super.result() as Promise<StoresItem>;
  }
}

/** Number of vectors modified. */
class Count extends FutureAnyObject {
  /** Returns the result for `Count` once it's node has been run. */
  protected override async result(): Promise<Count> {
    return super.result() as Promise<Count>;
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

/** (Optional) List of vector stores. */
class Stores extends FutureArray {
  override at(index: number) {
    return new StoresItem(this.directive.next(index));
  }
  /** Returns the result for `Stores` once it's node has been run. */
  protected override async result(): Promise<StoresItem[]> {
    return super.result() as Promise<StoresItem[]>;
  }
}

/** TODO: BigLaMaOut description */
class BigLaMaOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this.directive.next("image_uri"));
  }
  /** Returns the result for `BigLaMaOut` once it's node has been run. */
  protected override async result(): Promise<BigLaMaOut> {
    return super.result() as Promise<BigLaMaOut>;
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

/** Segments Array Item */
class SegmentsItem extends FutureAnyObject {
  /** Returns the result for `SegmentsItem` once it's node has been run. */
  protected override async result(): Promise<SegmentsItem> {
    return super.result() as Promise<SegmentsItem>;
  }
}

/** TODO: StableDiffusionXLLightningOut description */
class StableDiffusionXLLightningOut extends FutureObject {
  /** TODO: Outputs description */
  get outputs() {
    return new Outputs(this.directive.next("outputs"));
  }
  /** Returns the result for `StableDiffusionXLLightningOut` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLLightningOut> {
    return super.result() as Promise<StableDiffusionXLLightningOut>;
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

/** TODO: SegmentUnderPointOut description */
class SegmentUnderPointOut extends FutureObject {
  /** Detected segments in 'mask image' format. Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get mask_image_uri() {
    return new FutureString(this.directive.next("mask_image_uri"));
  }
  /** Returns the result for `SegmentUnderPointOut` once it's node has been run. */
  protected override async result(): Promise<SegmentUnderPointOut> {
    return super.result() as Promise<SegmentUnderPointOut>;
  }
}

/** Retrieved vectors. */
class Vectors extends FutureArray {
  override at(index: number) {
    return new VectorsItem(this.directive.next(index));
  }
  /** Returns the result for `Vectors` once it's node has been run. */
  protected override async result(): Promise<VectorsItem[]> {
    return super.result() as Promise<VectorsItem[]>;
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

/** Embeddings Array Item */
class EmbeddingsItem extends FutureAnyObject {
  /** Returns the result for `EmbeddingsItem` once it's node has been run. */
  protected override async result(): Promise<EmbeddingsItem> {
    return super.result() as Promise<EmbeddingsItem>;
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

/** TODO: SegmentAnythingOut description */
class SegmentAnythingOut extends FutureObject {
  /** Detected segments in 'mask image' format. Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get mask_image_uri() {
    return new FutureString(this.directive.next("mask_image_uri"));
  }
  /** Returns the result for `SegmentAnythingOut` once it's node has been run. */
  protected override async result(): Promise<SegmentAnythingOut> {
    return super.result() as Promise<SegmentAnythingOut>;
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

/** TODO: XTTSV2Out description */
class XTTSV2Out extends FutureObject {
  /** Base 64-encoded WAV audio bytes, or a hosted audio url if `store` is provided. */
  get audio_uri() {
    return new FutureString(this.directive.next("audio_uri"));
  }
  /** Returns the result for `XTTSV2Out` once it's node has been run. */
  protected override async result(): Promise<XTTSV2Out> {
    return super.result() as Promise<XTTSV2Out>;
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

/** TODO: DISISNetOut description */
class DISISNetOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this.directive.next("image_uri"));
  }
  /** Returns the result for `DISISNetOut` once it's node has been run. */
  protected override async result(): Promise<DISISNetOut> {
    return super.result() as Promise<DISISNetOut>;
  }
}

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

/** TODO: QueryVectorStoreOut description */
class QueryVectorStoreOut extends FutureObject {
  /** Query results. */
  get results() {
    return new Results(this.directive.next("results"));
  }
  /** (Optional) Vector store name. */
  get name() {
    return new FutureString(this.directive.next("name"));
  }
  /** (Optional) Selected embedding model */
  get model() {
    return new FutureString(this.directive.next("model"));
  }
  /** (Optional) The distance metric used for the query. */
  get metric() {
    return new FutureString(this.directive.next("metric"));
  }
  /** Returns the result for `QueryVectorStoreOut` once it's node has been run. */
  protected override async result(): Promise<QueryVectorStoreOut> {
    return super.result() as Promise<QueryVectorStoreOut>;
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

/** TODO: DeleteVectorStoreOut description */
class DeleteVectorStoreOut extends FutureObject {
  /** Vector store name. */
  get name() {
    return new FutureString(this.directive.next("name"));
  }
  /** Selected embedding model */
  get model() {
    return new FutureString(this.directive.next("model"));
  }
  /** Returns the result for `DeleteVectorStoreOut` once it's node has been run. */
  protected override async result(): Promise<DeleteVectorStoreOut> {
    return super.result() as Promise<DeleteVectorStoreOut>;
  }
}

/** Choices Array Item */
class ChoicesItem extends FutureAnyObject {
  /** Returns the result for `ChoicesItem` once it's node has been run. */
  protected override async result(): Promise<ChoicesItem> {
    return super.result() as Promise<ChoicesItem>;
  }
}

/** Chapters Array Item */
class ChaptersItem extends FutureAnyObject {
  /** Returns the result for `ChaptersItem` once it's node has been run. */
  protected override async result(): Promise<ChaptersItem> {
    return super.result() as Promise<ChaptersItem>;
  }
}

/** TODO: RealESRGANOut description */
class RealESRGANOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this.directive.next("image_uri"));
  }
  /** Returns the result for `RealESRGANOut` once it's node has been run. */
  protected override async result(): Promise<RealESRGANOut> {
    return super.result() as Promise<RealESRGANOut>;
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

/** Query results. */
class Results extends FutureArray {
  override at(index: number) {
    return new ResultsItem(this.directive.next(index));
  }
  /** Returns the result for `Results` once it's node has been run. */
  protected override async result(): Promise<ResultsItem[]> {
    return super.result() as Promise<ResultsItem[]>;
  }
}

/** TODO: ListVectorStoresOut description */
class ListVectorStoresOut extends FutureObject {
  /** (Optional) List of vector stores. */
  get stores() {
    return new Stores(this.directive.next("stores"));
  }
  /** Returns the result for `ListVectorStoresOut` once it's node has been run. */
  protected override async result(): Promise<ListVectorStoresOut> {
    return super.result() as Promise<ListVectorStoresOut>;
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

/** Generated embedding. */
class Embedding extends FutureAnyObject {
  /** Returns the result for `Embedding` once it's node has been run. */
  protected override async result(): Promise<Embedding> {
    return super.result() as Promise<Embedding>;
  }
}

/** Vectors Array Item */
class VectorsItem extends FutureAnyObject {
  /** Returns the result for `VectorsItem` once it's node has been run. */
  protected override async result(): Promise<VectorsItem> {
    return super.result() as Promise<VectorsItem>;
  }
}

/** Outputs Array Item */
class OutputsItem extends FutureAnyObject {
  /** Returns the result for `OutputsItem` once it's node has been run. */
  protected override async result(): Promise<OutputsItem> {
    return super.result() as Promise<OutputsItem>;
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

/** (Optional) JSON response. */
class JsonObject extends FutureAnyObject {
  /** Returns the result for `JsonObject` once it's node has been run. */
  protected override async result(): Promise<JsonObject> {
    return super.result() as Promise<JsonObject>;
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

/** The size of the dynamic candidate list for constructing the index graph. */
class EfConstruction extends FutureAnyObject {
  /** Returns the result for `EfConstruction` once it's node has been run. */
  protected override async result(): Promise<EfConstruction> {
    return super.result() as Promise<EfConstruction>;
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

/** The max number of connections per layer for the index. */
class M extends FutureAnyObject {
  /** Returns the result for `M` once it's node has been run. */
  protected override async result(): Promise<M> {
    return super.result() as Promise<M>;
  }
}

/** TODO: StableDiffusionXLTurboOut description */
class StableDiffusionXLTurboOut extends FutureObject {
  /** TODO: Outputs description */
  get outputs() {
    return new Outputs(this.directive.next("outputs"));
  }
  /** Returns the result for `StableDiffusionXLTurboOut` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLTurboOut> {
    return super.result() as Promise<StableDiffusionXLTurboOut>;
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

/** TODO: FetchVectorsOut description */
class FetchVectorsOut extends FutureObject {
  /** Retrieved vectors. */
  get vectors() {
    return new Vectors(this.directive.next("vectors"));
  }
  /** Returns the result for `FetchVectorsOut` once it's node has been run. */
  protected override async result(): Promise<FetchVectorsOut> {
    return super.result() as Promise<FetchVectorsOut>;
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

/** TODO: CreateVectorStoreOut description */
class CreateVectorStoreOut extends FutureObject {
  /** Vector store name. */
  get name() {
    return new FutureString(this.directive.next("name"));
  }
  /** Selected embedding model */
  get model() {
    return new FutureString(this.directive.next("model"));
  }
  /** The max number of connections per layer for the index. */
  get m() {
    return new M(this.directive.next("m"));
  }
  /** The size of the dynamic candidate list for constructing the index graph. */
  get ef_construction() {
    return new EfConstruction(this.directive.next("ef_construction"));
  }
  /** The distance metric to construct the index with. */
  get metric() {
    return new FutureString(this.directive.next("metric"));
  }
  /** Returns the result for `CreateVectorStoreOut` once it's node has been run. */
  protected override async result(): Promise<CreateVectorStoreOut> {
    return super.result() as Promise<CreateVectorStoreOut>;
  }
}

/** TODO: UpdateVectorsOut description */
class UpdateVectorsOut extends FutureObject {
  /** Number of vectors modified. */
  get count() {
    return new Count(this.directive.next("count"));
  }
  /** Returns the result for `UpdateVectorsOut` once it's node has been run. */
  protected override async result(): Promise<UpdateVectorsOut> {
    return super.result() as Promise<UpdateVectorsOut>;
  }
}

/** TODO: DeleteVectorsOut description */
class DeleteVectorsOut extends FutureObject {
  /** Number of vectors modified. */
  get count() {
    return new Count(this.directive.next("count"));
  }
  /** Returns the result for `DeleteVectorsOut` once it's node has been run. */
  protected override async result(): Promise<DeleteVectorsOut> {
    return super.result() as Promise<DeleteVectorsOut>;
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

export namespace GenerateText {
  /**
   * GenerateText Input
   * https://substrate.run/library#GenerateText
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["GenerateTextIn"]
  >;

  /**
   * GenerateText Output
   * https://substrate.run/library#GenerateText
   */
  export type Output = OpenAPI.components["schemas"]["GenerateTextOut"];
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
export namespace MultiGenerateText {
  /**
   * MultiGenerateText Input
   * https://substrate.run/library#MultiGenerateText
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["MultiGenerateTextIn"]
  >;

  /**
   * MultiGenerateText Output
   * https://substrate.run/library#MultiGenerateText
   */
  export type Output = OpenAPI.components["schemas"]["MultiGenerateTextOut"];
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
export namespace GenerateJSON {
  /**
   * GenerateJSON Input
   * https://substrate.run/library#GenerateJSON
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["GenerateJSONIn"]
  >;

  /**
   * GenerateJSON Output
   * https://substrate.run/library#GenerateJSON
   */
  export type Output = OpenAPI.components["schemas"]["GenerateJSONOut"];
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
export namespace MultiGenerateJSON {
  /**
   * MultiGenerateJSON Input
   * https://substrate.run/library#MultiGenerateJSON
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["MultiGenerateJSONIn"]
  >;

  /**
   * MultiGenerateJSON Output
   * https://substrate.run/library#MultiGenerateJSON
   */
  export type Output = OpenAPI.components["schemas"]["MultiGenerateJSONOut"];
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
export namespace GenerateTextVision {
  /**
   * GenerateTextVision Input
   * https://substrate.run/library#GenerateTextVision
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["GenerateTextVisionIn"]
  >;

  /**
   * GenerateTextVision Output
   * https://substrate.run/library#GenerateTextVision
   */
  export type Output = OpenAPI.components["schemas"]["GenerateTextVisionOut"];
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
export namespace Mistral7BInstruct {
  /**
   * Mistral7BInstruct Input
   * https://substrate.run/library#Mistral7BInstruct
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["Mistral7BInstructIn"]
  >;

  /**
   * Mistral7BInstruct Output
   * https://substrate.run/library#Mistral7BInstruct
   */
  export type Output = OpenAPI.components["schemas"]["Mistral7BInstructOut"];
}

/**
 * Generate text using [Mistral 7B Instruct](https://mistral.ai/news/announcing-mistral-7b).
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
export namespace Firellava13B {
  /**
   * Firellava13B Input
   * https://substrate.run/library#Firellava13B
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["Firellava13BIn"]
  >;

  /**
   * Firellava13B Output
   * https://substrate.run/library#Firellava13B
   */
  export type Output = OpenAPI.components["schemas"]["Firellava13BOut"];
}

/**
 * Generate text with image input using [FireLLaVA 13B](https://fireworks.ai/blog/firellava-the-first-commercially-permissive-oss-llava-model).
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
export namespace GenerateImage {
  /**
   * GenerateImage Input
   * https://substrate.run/library#GenerateImage
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["GenerateImageIn"]
  >;

  /**
   * GenerateImage Output
   * https://substrate.run/library#GenerateImage
   */
  export type Output = OpenAPI.components["schemas"]["GenerateImageOut"];
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
export namespace MultiGenerateImage {
  /**
   * MultiGenerateImage Input
   * https://substrate.run/library#MultiGenerateImage
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["MultiGenerateImageIn"]
  >;

  /**
   * MultiGenerateImage Output
   * https://substrate.run/library#MultiGenerateImage
   */
  export type Output = OpenAPI.components["schemas"]["MultiGenerateImageOut"];
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
export namespace GenerativeEditImage {
  /**
   * GenerativeEditImage Input
   * https://substrate.run/library#GenerativeEditImage
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["GenerativeEditImageIn"]
  >;

  /**
   * GenerativeEditImage Output
   * https://substrate.run/library#GenerativeEditImage
   */
  export type Output = OpenAPI.components["schemas"]["GenerativeEditImageOut"];
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
export namespace MultiGenerativeEditImage {
  /**
   * MultiGenerativeEditImage Input
   * https://substrate.run/library#MultiGenerativeEditImage
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["MultiGenerativeEditImageIn"]
  >;

  /**
   * MultiGenerativeEditImage Output
   * https://substrate.run/library#MultiGenerativeEditImage
   */
  export type Output =
    OpenAPI.components["schemas"]["MultiGenerativeEditImageOut"];
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
export namespace StableDiffusionXL {
  /**
   * StableDiffusionXL Input
   * https://substrate.run/library#StableDiffusionXL
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["StableDiffusionXLIn"]
  >;

  /**
   * StableDiffusionXL Output
   * https://substrate.run/library#StableDiffusionXL
   */
  export type Output = OpenAPI.components["schemas"]["StableDiffusionXLOut"];
}

/**
 * Generate an image using [Stable Diffusion XL](https://arxiv.org/abs/2307.01952).
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
export namespace StableDiffusionXLLightning {
  /**
   * StableDiffusionXLLightning Input
   * https://substrate.run/library#StableDiffusionXLLightning
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["StableDiffusionXLLightningIn"]
  >;

  /**
   * StableDiffusionXLLightning Output
   * https://substrate.run/library#StableDiffusionXLLightning
   */
  export type Output =
    OpenAPI.components["schemas"]["StableDiffusionXLLightningOut"];
}

/**
 * Generate an image using [Stable Diffusion XL](https://arxiv.org/abs/2307.01952) Lightning.
 *
 * https://substrate.run/library#StableDiffusionXLLightning
 */
export class StableDiffusionXLLightning extends Node {
  /**
   * Input arguments: `prompt`, `negative_prompt` (optional), `num_images` (optional), `store` (optional), `height` (optional), `width` (optional), `seeds` (optional)
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXLLightning
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["StableDiffusionXLLightningIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXLLightning
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["StableDiffusionXLLightningOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["StableDiffusionXLLightningOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["StableDiffusionXLLightningOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXLLightning
   */
  override get future(): StableDiffusionXLLightningOut {
    return new StableDiffusionXLLightningOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["StableDiffusionXLLightningOut"] {
    return super.output() as OpenAPI.components["schemas"]["StableDiffusionXLLightningOut"];
  }
}
export namespace StableDiffusionXLTurbo {
  /**
   * StableDiffusionXLTurbo Input
   * https://substrate.run/library#StableDiffusionXLTurbo
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["StableDiffusionXLTurboIn"]
  >;

  /**
   * StableDiffusionXLTurbo Output
   * https://substrate.run/library#StableDiffusionXLTurbo
   */
  export type Output =
    OpenAPI.components["schemas"]["StableDiffusionXLTurboOut"];
}

/**
 * Generate an image using [Stable Diffusion XL](https://arxiv.org/abs/2307.01952) Turbo.
 *
 * https://substrate.run/library#StableDiffusionXLTurbo
 */
export class StableDiffusionXLTurbo extends Node {
  /**
   * Input arguments: `prompt`, `negative_prompt` (optional), `num_images` (optional), `store` (optional), `height` (optional), `width` (optional), `seeds` (optional)
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXLTurbo
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["StableDiffusionXLTurboIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXLTurbo
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["StableDiffusionXLTurboOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["StableDiffusionXLTurboOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["StableDiffusionXLTurboOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.outputs`
   *
   * https://substrate.run/library#StableDiffusionXLTurbo
   */
  override get future(): StableDiffusionXLTurboOut {
    return new StableDiffusionXLTurboOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["StableDiffusionXLTurboOut"] {
    return super.output() as OpenAPI.components["schemas"]["StableDiffusionXLTurboOut"];
  }
}
export namespace StableDiffusionXLInpaint {
  /**
   * StableDiffusionXLInpaint Input
   * https://substrate.run/library#StableDiffusionXLInpaint
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["StableDiffusionXLInpaintIn"]
  >;

  /**
   * StableDiffusionXLInpaint Output
   * https://substrate.run/library#StableDiffusionXLInpaint
   */
  export type Output =
    OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"];
}

/**
 * Edit an image using [Stable Diffusion XL](https://arxiv.org/abs/2307.01952). Supports inpainting (edit part of the image with a mask) and image-to-image (edit the full image).
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
export namespace StableDiffusionXLIPAdapter {
  /**
   * StableDiffusionXLIPAdapter Input
   * https://substrate.run/library#StableDiffusionXLIPAdapter
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterIn"]
  >;

  /**
   * StableDiffusionXLIPAdapter Output
   * https://substrate.run/library#StableDiffusionXLIPAdapter
   */
  export type Output =
    OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterOut"];
}

/**
 * Generate an image with an image prompt, using Stable Diffusion XL with [IP-Adapter](https://arxiv.org/abs/2308.06721).
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
export namespace StableDiffusionXLControlNet {
  /**
   * StableDiffusionXLControlNet Input
   * https://substrate.run/library#StableDiffusionXLControlNet
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["StableDiffusionXLControlNetIn"]
  >;

  /**
   * StableDiffusionXLControlNet Output
   * https://substrate.run/library#StableDiffusionXLControlNet
   */
  export type Output =
    OpenAPI.components["schemas"]["StableDiffusionXLControlNetOut"];
}

/**
 * Generate an image with generation structured by an input image, using Stable Diffusion XL with [ControlNet](https://arxiv.org/abs/2302.05543).
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
export namespace FillMask {
  /**
   * FillMask Input
   * https://substrate.run/library#FillMask
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["FillMaskIn"]
  >;

  /**
   * FillMask Output
   * https://substrate.run/library#FillMask
   */
  export type Output = OpenAPI.components["schemas"]["FillMaskOut"];
}

/**
 * Fill (inpaint) part of an image, e.g. to 'remove' an object.
 *
 * https://substrate.run/library#FillMask
 */
export class FillMask extends Node {
  /**
   * Input arguments: `image_uri`, `mask_image_uri`, `store` (optional), `node` (optional)
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
export namespace BigLaMa {
  /**
   * BigLaMa Input
   * https://substrate.run/library#BigLaMa
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["BigLaMaIn"]
  >;

  /**
   * BigLaMa Output
   * https://substrate.run/library#BigLaMa
   */
  export type Output = OpenAPI.components["schemas"]["BigLaMaOut"];
}

/**
 * Inpaint a mask using [LaMa](https://github.com/advimman/lama).
 *
 * https://substrate.run/library#BigLaMa
 */
export class BigLaMa extends Node {
  /**
   * Input arguments: `image_uri`, `mask_image_uri`, `store` (optional)
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#BigLaMa
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["BigLaMaIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#BigLaMa
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["BigLaMaOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["BigLaMaOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["BigLaMaOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#BigLaMa
   */
  override get future(): BigLaMaOut {
    return new BigLaMaOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["BigLaMaOut"] {
    return super.output() as OpenAPI.components["schemas"]["BigLaMaOut"];
  }
}
export namespace UpscaleImage {
  /**
   * UpscaleImage Input
   * https://substrate.run/library#UpscaleImage
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["UpscaleImageIn"]
  >;

  /**
   * UpscaleImage Output
   * https://substrate.run/library#UpscaleImage
   */
  export type Output = OpenAPI.components["schemas"]["UpscaleImageOut"];
}

/**
 * Upscale an image.
 *
 * https://substrate.run/library#UpscaleImage
 */
export class UpscaleImage extends Node {
  /**
   * Input arguments: `image_uri`, `store` (optional), `node` (optional)
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
export namespace RealESRGAN {
  /**
   * RealESRGAN Input
   * https://substrate.run/library#RealESRGAN
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["RealESRGANIn"]
  >;

  /**
   * RealESRGAN Output
   * https://substrate.run/library#RealESRGAN
   */
  export type Output = OpenAPI.components["schemas"]["RealESRGANOut"];
}

/**
 * Upscale an image using [RealESRGAN](https://github.com/xinntao/Real-ESRGAN).
 *
 * https://substrate.run/library#RealESRGAN
 */
export class RealESRGAN extends Node {
  /**
   * Input arguments: `image_uri`, `store` (optional)
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#RealESRGAN
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["RealESRGANIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#RealESRGAN
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["RealESRGANOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["RealESRGANOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["RealESRGANOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#RealESRGAN
   */
  override get future(): RealESRGANOut {
    return new RealESRGANOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["RealESRGANOut"] {
    return super.output() as OpenAPI.components["schemas"]["RealESRGANOut"];
  }
}
export namespace RemoveBackground {
  /**
   * RemoveBackground Input
   * https://substrate.run/library#RemoveBackground
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["RemoveBackgroundIn"]
  >;

  /**
   * RemoveBackground Output
   * https://substrate.run/library#RemoveBackground
   */
  export type Output = OpenAPI.components["schemas"]["RemoveBackgroundOut"];
}

/**
 * Remove the background from an image, with the option to return the foreground as a mask.
 *
 * https://substrate.run/library#RemoveBackground
 */
export class RemoveBackground extends Node {
  /**
   * Input arguments: `image_uri`, `return_mask` (optional), `background_color` (optional), `store` (optional), `node` (optional)
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
export namespace DISISNet {
  /**
   * DISISNet Input
   * https://substrate.run/library#DISISNet
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["DISISNetIn"]
  >;

  /**
   * DISISNet Output
   * https://substrate.run/library#DISISNet
   */
  export type Output = OpenAPI.components["schemas"]["DISISNetOut"];
}

/**
 * Segment image foreground using [DIS IS-Net](https://github.com/xuebinqin/DIS).
 *
 * https://substrate.run/library#DISISNet
 */
export class DISISNet extends Node {
  /**
   * Input arguments: `image_uri`, `store` (optional)
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#DISISNet
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["DISISNetIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#DISISNet
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["DISISNetOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["DISISNetOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["DISISNetOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.image_uri`
   *
   * https://substrate.run/library#DISISNet
   */
  override get future(): DISISNetOut {
    return new DISISNetOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["DISISNetOut"] {
    return super.output() as OpenAPI.components["schemas"]["DISISNetOut"];
  }
}
export namespace SegmentUnderPoint {
  /**
   * SegmentUnderPoint Input
   * https://substrate.run/library#SegmentUnderPoint
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["SegmentUnderPointIn"]
  >;

  /**
   * SegmentUnderPoint Output
   * https://substrate.run/library#SegmentUnderPoint
   */
  export type Output = OpenAPI.components["schemas"]["SegmentUnderPointOut"];
}

/**
 * Segment an image under a point and return the segment.
 *
 * https://substrate.run/library#SegmentUnderPoint
 */
export class SegmentUnderPoint extends Node {
  /**
   * Input arguments: `image_uri`, `point`, `store` (optional), `node` (optional)
   *
   * Output fields: `future.mask_image_uri`
   *
   * https://substrate.run/library#SegmentUnderPoint
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["SegmentUnderPointIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.mask_image_uri`
   *
   * https://substrate.run/library#SegmentUnderPoint
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["SegmentUnderPointOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["SegmentUnderPointOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["SegmentUnderPointOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.mask_image_uri`
   *
   * https://substrate.run/library#SegmentUnderPoint
   */
  override get future(): SegmentUnderPointOut {
    return new SegmentUnderPointOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["SegmentUnderPointOut"] {
    return super.output() as OpenAPI.components["schemas"]["SegmentUnderPointOut"];
  }
}
export namespace SegmentAnything {
  /**
   * SegmentAnything Input
   * https://substrate.run/library#SegmentAnything
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["SegmentAnythingIn"]
  >;

  /**
   * SegmentAnything Output
   * https://substrate.run/library#SegmentAnything
   */
  export type Output = OpenAPI.components["schemas"]["SegmentAnythingOut"];
}

/**
 * Segment an image using [SegmentAnything](https://github.com/facebookresearch/segment-anything).
 *
 * https://substrate.run/library#SegmentAnything
 */
export class SegmentAnything extends Node {
  /**
   * Input arguments: `image_uri`, `point_prompts` (optional), `box_prompts` (optional), `store` (optional)
   *
   * Output fields: `future.mask_image_uri`
   *
   * https://substrate.run/library#SegmentAnything
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["SegmentAnythingIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.mask_image_uri`
   *
   * https://substrate.run/library#SegmentAnything
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["SegmentAnythingOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["SegmentAnythingOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["SegmentAnythingOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.mask_image_uri`
   *
   * https://substrate.run/library#SegmentAnything
   */
  override get future(): SegmentAnythingOut {
    return new SegmentAnythingOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["SegmentAnythingOut"] {
    return super.output() as OpenAPI.components["schemas"]["SegmentAnythingOut"];
  }
}
export namespace TranscribeMedia {
  /**
   * TranscribeMedia Input
   * https://substrate.run/library#TranscribeMedia
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["TranscribeMediaIn"]
  >;

  /**
   * TranscribeMedia Output
   * https://substrate.run/library#TranscribeMedia
   */
  export type Output = OpenAPI.components["schemas"]["TranscribeMediaOut"];
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
export namespace GenerateSpeech {
  /**
   * GenerateSpeech Input
   * https://substrate.run/library#GenerateSpeech
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["GenerateSpeechIn"]
  >;

  /**
   * GenerateSpeech Output
   * https://substrate.run/library#GenerateSpeech
   */
  export type Output = OpenAPI.components["schemas"]["GenerateSpeechOut"];
}

/**
 * Generate speech from text.
 *
 * https://substrate.run/library#GenerateSpeech
 */
export class GenerateSpeech extends Node {
  /**
   * Input arguments: `text`, `store` (optional), `node` (optional)
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
export namespace XTTSV2 {
  /**
   * XTTSV2 Input
   * https://substrate.run/library#XTTSV2
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["XTTSV2In"]
  >;

  /**
   * XTTSV2 Output
   * https://substrate.run/library#XTTSV2
   */
  export type Output = OpenAPI.components["schemas"]["XTTSV2Out"];
}

/**
 * Generate speech from text using [XTTS v2](https://docs.coqui.ai/en/latest/models/xtts.html).
 *
 * https://substrate.run/library#XTTSV2
 */
export class XTTSV2 extends Node {
  /**
   * Input arguments: `text`, `audio_uri` (optional), `language` (optional), `store` (optional)
   *
   * Output fields: `future.audio_uri`
   *
   * https://substrate.run/library#XTTSV2
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["XTTSV2In"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.audio_uri`
   *
   * https://substrate.run/library#XTTSV2
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["XTTSV2Out"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["XTTSV2Out"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["XTTSV2Out"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.audio_uri`
   *
   * https://substrate.run/library#XTTSV2
   */
  override get future(): XTTSV2Out {
    return new XTTSV2Out(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["XTTSV2Out"] {
    return super.output() as OpenAPI.components["schemas"]["XTTSV2Out"];
  }
}
export namespace EmbedText {
  /**
   * EmbedText Input
   * https://substrate.run/library#EmbedText
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["EmbedTextIn"]
  >;

  /**
   * EmbedText Output
   * https://substrate.run/library#EmbedText
   */
  export type Output = OpenAPI.components["schemas"]["EmbedTextOut"];
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
export namespace MultiEmbedText {
  /**
   * MultiEmbedText Input
   * https://substrate.run/library#MultiEmbedText
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["MultiEmbedTextIn"]
  >;

  /**
   * MultiEmbedText Output
   * https://substrate.run/library#MultiEmbedText
   */
  export type Output = OpenAPI.components["schemas"]["MultiEmbedTextOut"];
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
export namespace EmbedImage {
  /**
   * EmbedImage Input
   * https://substrate.run/library#EmbedImage
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["EmbedImageIn"]
  >;

  /**
   * EmbedImage Output
   * https://substrate.run/library#EmbedImage
   */
  export type Output = OpenAPI.components["schemas"]["EmbedImageOut"];
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
export namespace MultiEmbedImage {
  /**
   * MultiEmbedImage Input
   * https://substrate.run/library#MultiEmbedImage
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["MultiEmbedImageIn"]
  >;

  /**
   * MultiEmbedImage Output
   * https://substrate.run/library#MultiEmbedImage
   */
  export type Output = OpenAPI.components["schemas"]["MultiEmbedImageOut"];
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
export namespace JinaV2 {
  /**
   * JinaV2 Input
   * https://substrate.run/library#JinaV2
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["JinaV2In"]
  >;

  /**
   * JinaV2 Output
   * https://substrate.run/library#JinaV2
   */
  export type Output = OpenAPI.components["schemas"]["JinaV2Out"];
}

/**
 * Generate embeddings for multiple text documents using [Jina Embeddings 2](https://arxiv.org/abs/2310.19923).
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
export namespace CLIP {
  /**
   * CLIP Input
   * https://substrate.run/library#CLIP
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["CLIPIn"]
  >;

  /**
   * CLIP Output
   * https://substrate.run/library#CLIP
   */
  export type Output = OpenAPI.components["schemas"]["CLIPOut"];
}

/**
 * Generate embeddings for text or images using [CLIP](https://openai.com/research/clip).
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
export namespace CreateVectorStore {
  /**
   * CreateVectorStore Input
   * https://substrate.run/library#CreateVectorStore
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["CreateVectorStoreIn"]
  >;

  /**
   * CreateVectorStore Output
   * https://substrate.run/library#CreateVectorStore
   */
  export type Output = OpenAPI.components["schemas"]["CreateVectorStoreOut"];
}

/**
 * Create a vector store for storing and querying embeddings.
 *
 * https://substrate.run/library#CreateVectorStore
 */
export class CreateVectorStore extends Node {
  /**
   * Input arguments: `name`, `model`, `m` (optional), `ef_construction` (optional), `metric` (optional)
   *
   * Output fields: `future.name`, `future.model`, `future.m`, `future.ef_construction`, `future.metric`
   *
   * https://substrate.run/library#CreateVectorStore
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["CreateVectorStoreIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.name`, `future.model`, `future.m`, `future.ef_construction`, `future.metric`
   *
   * https://substrate.run/library#CreateVectorStore
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["CreateVectorStoreOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["CreateVectorStoreOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["CreateVectorStoreOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.name`, `future.model`, `future.m`, `future.ef_construction`, `future.metric`
   *
   * https://substrate.run/library#CreateVectorStore
   */
  override get future(): CreateVectorStoreOut {
    return new CreateVectorStoreOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["CreateVectorStoreOut"] {
    return super.output() as OpenAPI.components["schemas"]["CreateVectorStoreOut"];
  }
}
export namespace ListVectorStores {
  /**
   * ListVectorStores Input
   * https://substrate.run/library#ListVectorStores
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["ListVectorStoresIn"]
  >;

  /**
   * ListVectorStores Output
   * https://substrate.run/library#ListVectorStores
   */
  export type Output = OpenAPI.components["schemas"]["ListVectorStoresOut"];
}

/**
 * List all vector stores.
 *
 * https://substrate.run/library#ListVectorStores
 */
export class ListVectorStores extends Node {
  /**
   * Input arguments:
   *
   * Output fields: `future.stores` (optional)
   *
   * https://substrate.run/library#ListVectorStores
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["ListVectorStoresIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.stores` (optional)
   *
   * https://substrate.run/library#ListVectorStores
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["ListVectorStoresOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["ListVectorStoresOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["ListVectorStoresOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.stores` (optional)
   *
   * https://substrate.run/library#ListVectorStores
   */
  override get future(): ListVectorStoresOut {
    return new ListVectorStoresOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["ListVectorStoresOut"] {
    return super.output() as OpenAPI.components["schemas"]["ListVectorStoresOut"];
  }
}
export namespace DeleteVectorStore {
  /**
   * DeleteVectorStore Input
   * https://substrate.run/library#DeleteVectorStore
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["DeleteVectorStoreIn"]
  >;

  /**
   * DeleteVectorStore Output
   * https://substrate.run/library#DeleteVectorStore
   */
  export type Output = OpenAPI.components["schemas"]["DeleteVectorStoreOut"];
}

/**
 * Delete a vector store.
 *
 * https://substrate.run/library#DeleteVectorStore
 */
export class DeleteVectorStore extends Node {
  /**
   * Input arguments: `name`, `model`
   *
   * Output fields: `future.name`, `future.model`
   *
   * https://substrate.run/library#DeleteVectorStore
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["DeleteVectorStoreIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.name`, `future.model`
   *
   * https://substrate.run/library#DeleteVectorStore
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["DeleteVectorStoreOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["DeleteVectorStoreOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["DeleteVectorStoreOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.name`, `future.model`
   *
   * https://substrate.run/library#DeleteVectorStore
   */
  override get future(): DeleteVectorStoreOut {
    return new DeleteVectorStoreOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["DeleteVectorStoreOut"] {
    return super.output() as OpenAPI.components["schemas"]["DeleteVectorStoreOut"];
  }
}
export namespace QueryVectorStore {
  /**
   * QueryVectorStore Input
   * https://substrate.run/library#QueryVectorStore
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["QueryVectorStoreIn"]
  >;

  /**
   * QueryVectorStore Output
   * https://substrate.run/library#QueryVectorStore
   */
  export type Output = OpenAPI.components["schemas"]["QueryVectorStoreOut"];
}

/**
 * Query a vector store for similar vectors.
 *
 * https://substrate.run/library#QueryVectorStore
 */
export class QueryVectorStore extends Node {
  /**
   * Input arguments: `name`, `model`, `query_ids` (optional), `query_image_uris` (optional), `query_vectors` (optional), `query_strings` (optional), `top_k` (optional), `ef_search` (optional), `include_values` (optional), `include_metadata` (optional), `filters` (optional)
   *
   * Output fields: `future.results`, `future.name` (optional), `future.model` (optional), `future.metric` (optional)
   *
   * https://substrate.run/library#QueryVectorStore
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["QueryVectorStoreIn"]
    >,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.results`, `future.name` (optional), `future.model` (optional), `future.metric` (optional)
   *
   * https://substrate.run/library#QueryVectorStore
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["QueryVectorStoreOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["QueryVectorStoreOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["QueryVectorStoreOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.results`, `future.name` (optional), `future.model` (optional), `future.metric` (optional)
   *
   * https://substrate.run/library#QueryVectorStore
   */
  override get future(): QueryVectorStoreOut {
    return new QueryVectorStoreOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["QueryVectorStoreOut"] {
    return super.output() as OpenAPI.components["schemas"]["QueryVectorStoreOut"];
  }
}
export namespace FetchVectors {
  /**
   * FetchVectors Input
   * https://substrate.run/library#FetchVectors
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["FetchVectorsIn"]
  >;

  /**
   * FetchVectors Output
   * https://substrate.run/library#FetchVectors
   */
  export type Output = OpenAPI.components["schemas"]["FetchVectorsOut"];
}

/**
 * Fetch vectors from a vector store.
 *
 * https://substrate.run/library#FetchVectors
 */
export class FetchVectors extends Node {
  /**
   * Input arguments: `name`, `model`, `ids`
   *
   * Output fields: `future.vectors`
   *
   * https://substrate.run/library#FetchVectors
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["FetchVectorsIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.vectors`
   *
   * https://substrate.run/library#FetchVectors
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["FetchVectorsOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["FetchVectorsOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["FetchVectorsOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.vectors`
   *
   * https://substrate.run/library#FetchVectors
   */
  override get future(): FetchVectorsOut {
    return new FetchVectorsOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["FetchVectorsOut"] {
    return super.output() as OpenAPI.components["schemas"]["FetchVectorsOut"];
  }
}
export namespace UpdateVectors {
  /**
   * UpdateVectors Input
   * https://substrate.run/library#UpdateVectors
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["UpdateVectorsIn"]
  >;

  /**
   * UpdateVectors Output
   * https://substrate.run/library#UpdateVectors
   */
  export type Output = OpenAPI.components["schemas"]["UpdateVectorsOut"];
}

/**
 * Update vectors in a vector store.
 *
 * https://substrate.run/library#UpdateVectors
 */
export class UpdateVectors extends Node {
  /**
   * Input arguments: `name`, `model`, `vectors`
   *
   * Output fields: `future.count`
   *
   * https://substrate.run/library#UpdateVectors
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["UpdateVectorsIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.count`
   *
   * https://substrate.run/library#UpdateVectors
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["UpdateVectorsOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["UpdateVectorsOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["UpdateVectorsOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.count`
   *
   * https://substrate.run/library#UpdateVectors
   */
  override get future(): UpdateVectorsOut {
    return new UpdateVectorsOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["UpdateVectorsOut"] {
    return super.output() as OpenAPI.components["schemas"]["UpdateVectorsOut"];
  }
}
export namespace DeleteVectors {
  /**
   * DeleteVectors Input
   * https://substrate.run/library#DeleteVectors
   */
  export type Input = AlsoAcceptFutures<
    OpenAPI.components["schemas"]["DeleteVectorsIn"]
  >;

  /**
   * DeleteVectors Output
   * https://substrate.run/library#DeleteVectors
   */
  export type Output = OpenAPI.components["schemas"]["DeleteVectorsOut"];
}

/**
 * Delete vectors in a vector store.
 *
 * https://substrate.run/library#DeleteVectors
 */
export class DeleteVectors extends Node {
  /**
   * Input arguments: `name`, `model`, `ids`
   *
   * Output fields: `future.count`
   *
   * https://substrate.run/library#DeleteVectors
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["DeleteVectorsIn"]>,
  ) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `future.count`
   *
   * https://substrate.run/library#DeleteVectors
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["DeleteVectorsOut"] | undefined
  > {
    //return super.result() as Promise<OpenAPI.components["schemas"]["DeleteVectorsOut"]>;
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["DeleteVectorsOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `future.count`
   *
   * https://substrate.run/library#DeleteVectors
   */
  override get future(): DeleteVectorsOut {
    return new DeleteVectorsOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["DeleteVectorsOut"] {
    return super.output() as OpenAPI.components["schemas"]["DeleteVectorsOut"];
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
  | StableDiffusionXLLightning
  | StableDiffusionXLTurbo
  | StableDiffusionXLInpaint
  | StableDiffusionXLIPAdapter
  | StableDiffusionXLControlNet
  | FillMask
  | BigLaMa
  | UpscaleImage
  | RealESRGAN
  | RemoveBackground
  | DISISNet
  | SegmentUnderPoint
  | SegmentAnything
  | TranscribeMedia
  | GenerateSpeech
  | XTTSV2
  | EmbedText
  | MultiEmbedText
  | EmbedImage
  | MultiEmbedImage
  | JinaV2
  | CLIP
  | CreateVectorStore
  | ListVectorStores
  | DeleteVectorStore
  | QueryVectorStore
  | FetchVectors
  | UpdateVectors
  | DeleteVectors;

export type NodeOutput<T> = T extends GenerateText
  ? OpenAPI.components["schemas"]["GenerateTextOut"]
  : T extends MultiGenerateText
    ? OpenAPI.components["schemas"]["MultiGenerateTextOut"]
    : T extends GenerateJSON
      ? OpenAPI.components["schemas"]["GenerateJSONOut"]
      : T extends MultiGenerateJSON
        ? OpenAPI.components["schemas"]["MultiGenerateJSONOut"]
        : T extends GenerateTextVision
          ? OpenAPI.components["schemas"]["GenerateTextVisionOut"]
          : T extends Mistral7BInstruct
            ? OpenAPI.components["schemas"]["Mistral7BInstructOut"]
            : T extends Firellava13B
              ? OpenAPI.components["schemas"]["Firellava13BOut"]
              : T extends GenerateImage
                ? OpenAPI.components["schemas"]["GenerateImageOut"]
                : T extends MultiGenerateImage
                  ? OpenAPI.components["schemas"]["MultiGenerateImageOut"]
                  : T extends GenerativeEditImage
                    ? OpenAPI.components["schemas"]["GenerativeEditImageOut"]
                    : T extends MultiGenerativeEditImage
                      ? OpenAPI.components["schemas"]["MultiGenerativeEditImageOut"]
                      : T extends StableDiffusionXL
                        ? OpenAPI.components["schemas"]["StableDiffusionXLOut"]
                        : T extends StableDiffusionXLLightning
                          ? OpenAPI.components["schemas"]["StableDiffusionXLLightningOut"]
                          : T extends StableDiffusionXLTurbo
                            ? OpenAPI.components["schemas"]["StableDiffusionXLTurboOut"]
                            : T extends StableDiffusionXLInpaint
                              ? OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"]
                              : T extends StableDiffusionXLIPAdapter
                                ? OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterOut"]
                                : T extends StableDiffusionXLControlNet
                                  ? OpenAPI.components["schemas"]["StableDiffusionXLControlNetOut"]
                                  : T extends FillMask
                                    ? OpenAPI.components["schemas"]["FillMaskOut"]
                                    : T extends BigLaMa
                                      ? OpenAPI.components["schemas"]["BigLaMaOut"]
                                      : T extends UpscaleImage
                                        ? OpenAPI.components["schemas"]["UpscaleImageOut"]
                                        : T extends RealESRGAN
                                          ? OpenAPI.components["schemas"]["RealESRGANOut"]
                                          : T extends RemoveBackground
                                            ? OpenAPI.components["schemas"]["RemoveBackgroundOut"]
                                            : T extends DISISNet
                                              ? OpenAPI.components["schemas"]["DISISNetOut"]
                                              : T extends SegmentUnderPoint
                                                ? OpenAPI.components["schemas"]["SegmentUnderPointOut"]
                                                : T extends SegmentAnything
                                                  ? OpenAPI.components["schemas"]["SegmentAnythingOut"]
                                                  : T extends TranscribeMedia
                                                    ? OpenAPI.components["schemas"]["TranscribeMediaOut"]
                                                    : T extends GenerateSpeech
                                                      ? OpenAPI.components["schemas"]["GenerateSpeechOut"]
                                                      : T extends XTTSV2
                                                        ? OpenAPI.components["schemas"]["XTTSV2Out"]
                                                        : T extends EmbedText
                                                          ? OpenAPI.components["schemas"]["EmbedTextOut"]
                                                          : T extends MultiEmbedText
                                                            ? OpenAPI.components["schemas"]["MultiEmbedTextOut"]
                                                            : T extends EmbedImage
                                                              ? OpenAPI.components["schemas"]["EmbedImageOut"]
                                                              : T extends MultiEmbedImage
                                                                ? OpenAPI.components["schemas"]["MultiEmbedImageOut"]
                                                                : T extends JinaV2
                                                                  ? OpenAPI.components["schemas"]["JinaV2Out"]
                                                                  : T extends CLIP
                                                                    ? OpenAPI.components["schemas"]["CLIPOut"]
                                                                    : T extends CreateVectorStore
                                                                      ? OpenAPI.components["schemas"]["CreateVectorStoreOut"]
                                                                      : T extends ListVectorStores
                                                                        ? OpenAPI.components["schemas"]["ListVectorStoresOut"]
                                                                        : T extends DeleteVectorStore
                                                                          ? OpenAPI.components["schemas"]["DeleteVectorStoreOut"]
                                                                          : T extends QueryVectorStore
                                                                            ? OpenAPI.components["schemas"]["QueryVectorStoreOut"]
                                                                            : T extends FetchVectors
                                                                              ? OpenAPI.components["schemas"]["FetchVectorsOut"]
                                                                              : T extends UpdateVectors
                                                                                ? OpenAPI.components["schemas"]["UpdateVectorsOut"]
                                                                                : T extends DeleteVectors
                                                                                  ? OpenAPI.components["schemas"]["DeleteVectorsOut"]
                                                                                  : never;
