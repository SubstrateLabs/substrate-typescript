/**
 * ꩜ Substrate
 * @generated file
 * 20240411.20240411
 */

import * as OpenAPI from "substrate/OpenAPI";
import { Node, Options } from "substrate/Node";
import {
  Trace,
  Future,
  FutureString,
  FutureNumber,
  FutureBoolean,
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
type AlsoAcceptFutures<T> = T extends (infer U)[][]
  ? U extends string[]
    ? FutureString[][]
    : U extends number[]
      ? FutureNumber[][]
      : U extends boolean[]
        ? FutureBoolean[][]
        : Future[][] | FutureArray[]
  : T extends (infer U)[]
    ? U extends string
      ? FutureString[]
      : U extends number
        ? FutureNumber[]
        : U extends boolean
          ? FutureBoolean[]
          : Future[]
    : T extends object
      ? {
          [P in keyof T]:
            | AlsoAcceptFutures<T[P]>
            | (T[P] extends string
                ? FutureString
                : T[P] extends number
                  ? FutureNumber
                  : T[P] extends boolean
                    ? FutureBoolean
                    : Future)
            | T[P];
        }
      : T;

export class GenerateJSONInJsonSchema extends FutureAnyObject {}
export class GenerateJSONOutJsonObject extends FutureAnyObject {}
/** MultiGenerateTextOutChoices */
export class MultiGenerateTextOutChoices extends FutureArray {
  /** Returns `GenerateTextOut` at given index. */
  override at(index: number) {
    return new GenerateTextOut(this._directive.next(index));
  }
  /** Returns the result for `MultiGenerateTextOutChoices` once it's node has been run. */
  protected override async result(): Promise<GenerateTextOut[]> {
    return super.result() as Promise<GenerateTextOut[]>;
  }
}
export class MultiGenerateJSONInJsonSchema extends FutureAnyObject {}
/** MultiGenerateJSONOutChoices */
export class MultiGenerateJSONOutChoices extends FutureArray {
  /** Returns `GenerateJSONOut` at given index. */
  override at(index: number) {
    return new GenerateJSONOut(this._directive.next(index));
  }
  /** Returns the result for `MultiGenerateJSONOutChoices` once it's node has been run. */
  protected override async result(): Promise<GenerateJSONOut[]> {
    return super.result() as Promise<GenerateJSONOut[]>;
  }
}
export class Mistral7BInstructInJsonSchema extends FutureAnyObject {}
export class Mistral7BInstructChoiceJsonObject extends FutureAnyObject {}
/** Mistral7BInstructOutChoices */
export class Mistral7BInstructOutChoices extends FutureArray {
  /** Returns `Mistral7BInstructChoice` at given index. */
  override at(index: number) {
    return new Mistral7BInstructChoice(this._directive.next(index));
  }
  /** Returns the result for `Mistral7BInstructOutChoices` once it's node has been run. */
  protected override async result(): Promise<Mistral7BInstructChoice[]> {
    return super.result() as Promise<Mistral7BInstructChoice[]>;
  }
}
/** Image prompts. */
export class GenerateTextVisionInImageUris extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `GenerateTextVisionInImageUris` once it's node has been run. */
  protected override async result(): Promise<FutureString[]> {
    return super.result() as Promise<FutureString[]>;
  }
}
export class GenerateTextVisionInImageUrisItem extends FutureString {}
/** Image prompts. */
export class Firellava13BInImageUris extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `Firellava13BInImageUris` once it's node has been run. */
  protected override async result(): Promise<FutureString[]> {
    return super.result() as Promise<FutureString[]>;
  }
}
export class Firellava13BInImageUrisItem extends FutureString {}
/** MultiGenerateImageOutOutputs */
export class MultiGenerateImageOutOutputs extends FutureArray {
  /** Returns `GenerateImageOut` at given index. */
  override at(index: number) {
    return new GenerateImageOut(this._directive.next(index));
  }
  /** Returns the result for `MultiGenerateImageOutOutputs` once it's node has been run. */
  protected override async result(): Promise<GenerateImageOut[]> {
    return super.result() as Promise<GenerateImageOut[]>;
  }
}
/** Seeds for deterministic generation. Default is a random seed. */
export class StableDiffusionXLInSeeds extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLInSeeds` once it's node has been run. */
  protected override async result(): Promise<FutureNumber[]> {
    return super.result() as Promise<FutureNumber[]>;
  }
}
export class StableDiffusionXLInSeedsItem extends FutureNumber {}
/** StableDiffusionXLOutOutputs */
export class StableDiffusionXLOutOutputs extends FutureArray {
  /** Returns `StableDiffusionImage` at given index. */
  override at(index: number) {
    return new StableDiffusionImage(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLOutOutputs` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionImage[]> {
    return super.result() as Promise<StableDiffusionImage[]>;
  }
}
/** Seeds for deterministic generation. Default is a random seed. */
export class StableDiffusionXLLightningInSeeds extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLLightningInSeeds` once it's node has been run. */
  protected override async result(): Promise<FutureNumber[]> {
    return super.result() as Promise<FutureNumber[]>;
  }
}
export class StableDiffusionXLLightningInSeedsItem extends FutureNumber {}
/** StableDiffusionXLLightningOutOutputs */
export class StableDiffusionXLLightningOutOutputs extends FutureArray {
  /** Returns `StableDiffusionImage` at given index. */
  override at(index: number) {
    return new StableDiffusionImage(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLLightningOutOutputs` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionImage[]> {
    return super.result() as Promise<StableDiffusionImage[]>;
  }
}
/** Random noise seeds. Default is random seeds for each generation. */
export class StableDiffusionXLIPAdapterInSeeds extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLIPAdapterInSeeds` once it's node has been run. */
  protected override async result(): Promise<FutureNumber[]> {
    return super.result() as Promise<FutureNumber[]>;
  }
}
export class StableDiffusionXLIPAdapterInSeedsItem extends FutureNumber {}
/** StableDiffusionXLIPAdapterOutOutputs */
export class StableDiffusionXLIPAdapterOutOutputs extends FutureArray {
  /** Returns `StableDiffusionImage` at given index. */
  override at(index: number) {
    return new StableDiffusionImage(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLIPAdapterOutOutputs` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionImage[]> {
    return super.result() as Promise<StableDiffusionImage[]>;
  }
}
/** Random noise seeds. Default is random seeds for each generation. */
export class StableDiffusionXLControlNetInSeeds extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLControlNetInSeeds` once it's node has been run. */
  protected override async result(): Promise<FutureNumber[]> {
    return super.result() as Promise<FutureNumber[]>;
  }
}
export class StableDiffusionXLControlNetInSeedsItem extends FutureNumber {}
/** StableDiffusionXLControlNetOutOutputs */
export class StableDiffusionXLControlNetOutOutputs extends FutureArray {
  /** Returns `StableDiffusionImage` at given index. */
  override at(index: number) {
    return new StableDiffusionImage(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLControlNetOutOutputs` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionImage[]> {
    return super.result() as Promise<StableDiffusionImage[]>;
  }
}
/** MultiGenerativeEditImageOutOutputs */
export class MultiGenerativeEditImageOutOutputs extends FutureArray {
  /** Returns `GenerativeEditImageOut` at given index. */
  override at(index: number) {
    return new GenerativeEditImageOut(this._directive.next(index));
  }
  /** Returns the result for `MultiGenerativeEditImageOutOutputs` once it's node has been run. */
  protected override async result(): Promise<GenerativeEditImageOut[]> {
    return super.result() as Promise<GenerativeEditImageOut[]>;
  }
}
/** Random noise seeds. Default is random seeds for each generation. */
export class StableDiffusionXLInpaintInSeeds extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLInpaintInSeeds` once it's node has been run. */
  protected override async result(): Promise<FutureNumber[]> {
    return super.result() as Promise<FutureNumber[]>;
  }
}
export class StableDiffusionXLInpaintInSeedsItem extends FutureNumber {}
/** StableDiffusionXLInpaintOutOutputs */
export class StableDiffusionXLInpaintOutOutputs extends FutureArray {
  /** Returns `StableDiffusionImage` at given index. */
  override at(index: number) {
    return new StableDiffusionImage(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLInpaintOutOutputs` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionImage[]> {
    return super.result() as Promise<StableDiffusionImage[]>;
  }
}
/** Point prompts, to detect a segment under the point. One of `point_prompts` or `box_prompts` must be set. */
export class SegmentAnythingInPointPrompts extends FutureArray {
  /** Returns `Point` at given index. */
  override at(index: number) {
    return new Point(this._directive.next(index));
  }
  /** Returns the result for `SegmentAnythingInPointPrompts` once it's node has been run. */
  protected override async result(): Promise<Point[]> {
    return super.result() as Promise<Point[]>;
  }
}
/** Box prompts, to detect a segment within the bounding box. One of `point_prompts` or `box_prompts` must be set. */
export class SegmentAnythingInBoxPrompts extends FutureArray {
  /** Returns `BoundingBox` at given index. */
  override at(index: number) {
    return new BoundingBox(this._directive.next(index));
  }
  /** Returns the result for `SegmentAnythingInBoxPrompts` once it's node has been run. */
  protected override async result(): Promise<BoundingBox[]> {
    return super.result() as Promise<BoundingBox[]>;
  }
}
/** Aligned words, if `align` is enabled. */
export class TranscribedSegmentWords extends FutureArray {
  /** Returns `TranscribedWord` at given index. */
  override at(index: number) {
    return new TranscribedWord(this._directive.next(index));
  }
  /** Returns the result for `TranscribedSegmentWords` once it's node has been run. */
  protected override async result(): Promise<TranscribedWord[]> {
    return super.result() as Promise<TranscribedWord[]>;
  }
}
/** Transcribed segments, if `segment` is enabled. */
export class TranscribeMediaOutSegments extends FutureArray {
  /** Returns `TranscribedSegment` at given index. */
  override at(index: number) {
    return new TranscribedSegment(this._directive.next(index));
  }
  /** Returns the result for `TranscribeMediaOutSegments` once it's node has been run. */
  protected override async result(): Promise<TranscribedSegment[]> {
    return super.result() as Promise<TranscribedSegment[]>;
  }
}
/** Chapter markers, if `suggest_chapters` is enabled. */
export class TranscribeMediaOutChapters extends FutureArray {
  /** Returns `ChapterMarker` at given index. */
  override at(index: number) {
    return new ChapterMarker(this._directive.next(index));
  }
  /** Returns the result for `TranscribeMediaOutChapters` once it's node has been run. */
  protected override async result(): Promise<ChapterMarker[]> {
    return super.result() as Promise<ChapterMarker[]>;
  }
}
/** Embedding vector. */
export class EmbeddingVector extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `EmbeddingVector` once it's node has been run. */
  protected override async result(): Promise<FutureNumber[]> {
    return super.result() as Promise<FutureNumber[]>;
  }
}
export class EmbeddingVectorItem extends FutureNumber {}
export class EmbeddingMetadata extends FutureAnyObject {}
export class EmbedTextInMetadata extends FutureAnyObject {}
/** Choose keys from `metadata` to embed with text. */
export class EmbedTextInEmbeddedMetadataKeys extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `EmbedTextInEmbeddedMetadataKeys` once it's node has been run. */
  protected override async result(): Promise<FutureString[]> {
    return super.result() as Promise<FutureString[]>;
  }
}
export class EmbedTextInEmbeddedMetadataKeysItem extends FutureString {}
export class EmbedTextItemMetadata extends FutureAnyObject {}
/** Items to embed. */
export class MultiEmbedTextInItems extends FutureArray {
  /** Returns `EmbedTextItem` at given index. */
  override at(index: number) {
    return new EmbedTextItem(this._directive.next(index));
  }
  /** Returns the result for `MultiEmbedTextInItems` once it's node has been run. */
  protected override async result(): Promise<EmbedTextItem[]> {
    return super.result() as Promise<EmbedTextItem[]>;
  }
}
/** Choose keys from `metadata` to embed with text. */
export class MultiEmbedTextInEmbeddedMetadataKeys extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `MultiEmbedTextInEmbeddedMetadataKeys` once it's node has been run. */
  protected override async result(): Promise<FutureString[]> {
    return super.result() as Promise<FutureString[]>;
  }
}
export class MultiEmbedTextInEmbeddedMetadataKeysItem extends FutureString {}
/** Generated embeddings. */
export class MultiEmbedTextOutEmbeddings extends FutureArray {
  /** Returns `Embedding` at given index. */
  override at(index: number) {
    return new Embedding(this._directive.next(index));
  }
  /** Returns the result for `MultiEmbedTextOutEmbeddings` once it's node has been run. */
  protected override async result(): Promise<Embedding[]> {
    return super.result() as Promise<Embedding[]>;
  }
}
/** Items to embed. */
export class JinaV2InItems extends FutureArray {
  /** Returns `EmbedTextItem` at given index. */
  override at(index: number) {
    return new EmbedTextItem(this._directive.next(index));
  }
  /** Returns the result for `JinaV2InItems` once it's node has been run. */
  protected override async result(): Promise<EmbedTextItem[]> {
    return super.result() as Promise<EmbedTextItem[]>;
  }
}
/** Choose keys from `metadata` to embed with text. */
export class JinaV2InEmbeddedMetadataKeys extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `JinaV2InEmbeddedMetadataKeys` once it's node has been run. */
  protected override async result(): Promise<FutureString[]> {
    return super.result() as Promise<FutureString[]>;
  }
}
export class JinaV2InEmbeddedMetadataKeysItem extends FutureString {}
/** Generated embeddings. */
export class JinaV2OutEmbeddings extends FutureArray {
  /** Returns `Embedding` at given index. */
  override at(index: number) {
    return new Embedding(this._directive.next(index));
  }
  /** Returns the result for `JinaV2OutEmbeddings` once it's node has been run. */
  protected override async result(): Promise<Embedding[]> {
    return super.result() as Promise<Embedding[]>;
  }
}
export class EmbedTextOrImageItemMetadata extends FutureAnyObject {}
/** Items to embed. */
export class MultiEmbedImageInItems extends FutureArray {
  /** Returns `EmbedImageItem` at given index. */
  override at(index: number) {
    return new EmbedImageItem(this._directive.next(index));
  }
  /** Returns the result for `MultiEmbedImageInItems` once it's node has been run. */
  protected override async result(): Promise<EmbedImageItem[]> {
    return super.result() as Promise<EmbedImageItem[]>;
  }
}
/** Generated embeddings. */
export class MultiEmbedImageOutEmbeddings extends FutureArray {
  /** Returns `Embedding` at given index. */
  override at(index: number) {
    return new Embedding(this._directive.next(index));
  }
  /** Returns the result for `MultiEmbedImageOutEmbeddings` once it's node has been run. */
  protected override async result(): Promise<Embedding[]> {
    return super.result() as Promise<Embedding[]>;
  }
}
/** Items to embed. */
export class CLIPInItems extends FutureArray {
  /** Returns `EmbedTextOrImageItem` at given index. */
  override at(index: number) {
    return new EmbedTextOrImageItem(this._directive.next(index));
  }
  /** Returns the result for `CLIPInItems` once it's node has been run. */
  protected override async result(): Promise<EmbedTextOrImageItem[]> {
    return super.result() as Promise<EmbedTextOrImageItem[]>;
  }
}
/** Choose keys from `metadata` to embed with text, when embedding and storing text documents. */
export class CLIPInEmbeddedMetadataKeys extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `CLIPInEmbeddedMetadataKeys` once it's node has been run. */
  protected override async result(): Promise<FutureString[]> {
    return super.result() as Promise<FutureString[]>;
  }
}
export class CLIPInEmbeddedMetadataKeysItem extends FutureString {}
/** Generated embeddings. */
export class CLIPOutEmbeddings extends FutureArray {
  /** Returns `Embedding` at given index. */
  override at(index: number) {
    return new Embedding(this._directive.next(index));
  }
  /** Returns the result for `CLIPOutEmbeddings` once it's node has been run. */
  protected override async result(): Promise<Embedding[]> {
    return super.result() as Promise<Embedding[]>;
  }
}
/** List of vector stores. */
export class ListVectorStoresOutStores extends FutureArray {
  /** Returns `CreateVectorStoreOut` at given index. */
  override at(index: number) {
    return new CreateVectorStoreOut(this._directive.next(index));
  }
  /** Returns the result for `ListVectorStoresOutStores` once it's node has been run. */
  protected override async result(): Promise<CreateVectorStoreOut[]> {
    return super.result() as Promise<CreateVectorStoreOut[]>;
  }
}
/** Embedding vector. */
export class VectorVector extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `VectorVector` once it's node has been run. */
  protected override async result(): Promise<FutureNumber[]> {
    return super.result() as Promise<FutureNumber[]>;
  }
}
export class VectorVectorItem extends FutureNumber {}
export class VectorMetadata extends FutureAnyObject {}
/** Document IDs to retrieve. */
export class FetchVectorsInIds extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `FetchVectorsInIds` once it's node has been run. */
  protected override async result(): Promise<FutureString[]> {
    return super.result() as Promise<FutureString[]>;
  }
}
export class FetchVectorsInIdsItem extends FutureString {}
/** Retrieved vectors. */
export class FetchVectorsOutVectors extends FutureArray {
  /** Returns `Vector` at given index. */
  override at(index: number) {
    return new Vector(this._directive.next(index));
  }
  /** Returns the result for `FetchVectorsOutVectors` once it's node has been run. */
  protected override async result(): Promise<Vector[]> {
    return super.result() as Promise<Vector[]>;
  }
}
/** Embedding vector. */
export class UpdateVectorParamsVector extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `UpdateVectorParamsVector` once it's node has been run. */
  protected override async result(): Promise<FutureNumber[]> {
    return super.result() as Promise<FutureNumber[]>;
  }
}
export class UpdateVectorParamsVectorItem extends FutureNumber {}
export class UpdateVectorParamsMetadata extends FutureAnyObject {}
/** Vectors to upsert. */
export class UpdateVectorsInVectors extends FutureArray {
  /** Returns `UpdateVectorParams` at given index. */
  override at(index: number) {
    return new UpdateVectorParams(this._directive.next(index));
  }
  /** Returns the result for `UpdateVectorsInVectors` once it's node has been run. */
  protected override async result(): Promise<UpdateVectorParams[]> {
    return super.result() as Promise<UpdateVectorParams[]>;
  }
}
/** Document IDs to delete. */
export class DeleteVectorsInIds extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `DeleteVectorsInIds` once it's node has been run. */
  protected override async result(): Promise<FutureString[]> {
    return super.result() as Promise<FutureString[]>;
  }
}
export class DeleteVectorsInIdsItem extends FutureString {}
/** Document IDs to use for the query. */
export class QueryVectorStoreInQueryIds extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `QueryVectorStoreInQueryIds` once it's node has been run. */
  protected override async result(): Promise<FutureString[]> {
    return super.result() as Promise<FutureString[]>;
  }
}
export class QueryVectorStoreInQueryIdsItem extends FutureString {}
/** Image URIs to embed and use for the query. */
export class QueryVectorStoreInQueryImageUris extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `QueryVectorStoreInQueryImageUris` once it's node has been run. */
  protected override async result(): Promise<FutureString[]> {
    return super.result() as Promise<FutureString[]>;
  }
}
export class QueryVectorStoreInQueryImageUrisItem extends FutureString {}
/** Vector to use for the query. */
export class QueryVectorStoreInQueryVectors extends FutureArray {
  /** Returns `QueryVectorStoreInQueryVectorsItem` at given index. */
  override at(index: number) {
    return new QueryVectorStoreInQueryVectorsItem(this._directive.next(index));
  }
  /** Returns the result for `QueryVectorStoreInQueryVectors` once it's node has been run. */
  protected override async result(): Promise<QueryVectorStoreInQueryVectorsItem> {
    return super.result() as Promise<QueryVectorStoreInQueryVectorsItem>;
  }
}
/** QueryVectorStoreInQueryVectorsItem */
export class QueryVectorStoreInQueryVectorsItem extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `QueryVectorStoreInQueryVectorsItem` once it's node has been run. */
  protected override async result(): Promise<FutureNumber[]> {
    return super.result() as Promise<FutureNumber[]>;
  }
}
/** Texts to embed and use for the query. */
export class QueryVectorStoreInQueryStrings extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `QueryVectorStoreInQueryStrings` once it's node has been run. */
  protected override async result(): Promise<FutureString[]> {
    return super.result() as Promise<FutureString[]>;
  }
}
export class QueryVectorStoreInQueryStringsItem extends FutureString {}
export class QueryVectorStoreInFilters extends FutureAnyObject {}
/** Embedding vector. */
export class VectorStoreQueryResultVector extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `VectorStoreQueryResultVector` once it's node has been run. */
  protected override async result(): Promise<FutureNumber[]> {
    return super.result() as Promise<FutureNumber[]>;
  }
}
export class VectorStoreQueryResultVectorItem extends FutureNumber {}
export class VectorStoreQueryResultMetadata extends FutureAnyObject {}
/** Query results. */
export class QueryVectorStoreOutResults extends FutureArray {
  /** Returns `QueryVectorStoreOutResultsItem` at given index. */
  override at(index: number) {
    return new QueryVectorStoreOutResultsItem(this._directive.next(index));
  }
  /** Returns the result for `QueryVectorStoreOutResults` once it's node has been run. */
  protected override async result(): Promise<QueryVectorStoreOutResultsItem> {
    return super.result() as Promise<QueryVectorStoreOutResultsItem>;
  }
}
/** QueryVectorStoreOutResultsItem */
export class QueryVectorStoreOutResultsItem extends FutureArray {
  /** Returns `VectorStoreQueryResult` at given index. */
  override at(index: number) {
    return new VectorStoreQueryResult(this._directive.next(index));
  }
  /** Returns the result for `QueryVectorStoreOutResultsItem` once it's node has been run. */
  protected override async result(): Promise<VectorStoreQueryResult[]> {
    return super.result() as Promise<VectorStoreQueryResult[]>;
  }
}
/** ErrorOut */
export class ErrorOut extends FutureObject {
  /** The type of error returned. */
  get type() {
    return new FutureString(this._directive.next("type"));
  }
  /** A message providing more details about the error. */
  get message() {
    return new FutureString(this._directive.next("message"));
  }
  /** returns the result for `ErrorOut` once it's node has been run. */
  protected override async result(): Promise<ErrorOut> {
    return super.result() as Promise<ErrorOut>;
  }
}
/** GenerateTextIn */
export class GenerateTextIn extends FutureObject {
  /** Input prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** (Optional) Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() {
    return new FutureNumber(this._directive.next("temperature"));
  }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() {
    return new FutureNumber(this._directive.next("max_tokens"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `GenerateTextIn` once it's node has been run. */
  protected override async result(): Promise<GenerateTextIn> {
    return super.result() as Promise<GenerateTextIn>;
  }
}
/** GenerateTextOut */
export class GenerateTextOut extends FutureObject {
  /** Text response. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** returns the result for `GenerateTextOut` once it's node has been run. */
  protected override async result(): Promise<GenerateTextOut> {
    return super.result() as Promise<GenerateTextOut>;
  }
}
/** GenerateJSONIn */
export class GenerateJSONIn extends FutureObject {
  /** Input prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** JSON schema to guide `json_object` response. */
  get json_schema() {
    return new FutureAnyObject(this._directive.next("json_schema"));
  }
  /** (Optional) Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() {
    return new FutureNumber(this._directive.next("temperature"));
  }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() {
    return new FutureNumber(this._directive.next("max_tokens"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `GenerateJSONIn` once it's node has been run. */
  protected override async result(): Promise<GenerateJSONIn> {
    return super.result() as Promise<GenerateJSONIn>;
  }
}
/** GenerateJSONOut */
export class GenerateJSONOut extends FutureObject {
  /** JSON response. */
  get json_object() {
    return new FutureAnyObject(this._directive.next("json_object"));
  }
  /** returns the result for `GenerateJSONOut` once it's node has been run. */
  protected override async result(): Promise<GenerateJSONOut> {
    return super.result() as Promise<GenerateJSONOut>;
  }
}
/** MultiGenerateTextIn */
export class MultiGenerateTextIn extends FutureObject {
  /** Input prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** Number of choices to generate. */
  get num_choices() {
    return new FutureNumber(this._directive.next("num_choices"));
  }
  /** (Optional) Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() {
    return new FutureNumber(this._directive.next("temperature"));
  }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() {
    return new FutureNumber(this._directive.next("max_tokens"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `MultiGenerateTextIn` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateTextIn> {
    return super.result() as Promise<MultiGenerateTextIn>;
  }
}
/** MultiGenerateTextOut */
export class MultiGenerateTextOut extends FutureObject {
  /** array */
  get choices() {
    return new MultiGenerateTextOutChoices(this._directive.next("choices"));
  }
  /** returns the result for `MultiGenerateTextOut` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateTextOut> {
    return super.result() as Promise<MultiGenerateTextOut>;
  }
}
/** MultiGenerateJSONIn */
export class MultiGenerateJSONIn extends FutureObject {
  /** Input prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** JSON schema to guide `json_object` response. */
  get json_schema() {
    return new FutureAnyObject(this._directive.next("json_schema"));
  }
  /** Number of choices to generate. */
  get num_choices() {
    return new FutureNumber(this._directive.next("num_choices"));
  }
  /** (Optional) Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() {
    return new FutureNumber(this._directive.next("temperature"));
  }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() {
    return new FutureNumber(this._directive.next("max_tokens"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `MultiGenerateJSONIn` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateJSONIn> {
    return super.result() as Promise<MultiGenerateJSONIn>;
  }
}
/** MultiGenerateJSONOut */
export class MultiGenerateJSONOut extends FutureObject {
  /** array */
  get choices() {
    return new MultiGenerateJSONOutChoices(this._directive.next("choices"));
  }
  /** returns the result for `MultiGenerateJSONOut` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateJSONOut> {
    return super.result() as Promise<MultiGenerateJSONOut>;
  }
}
/** Mistral7BInstructIn */
export class Mistral7BInstructIn extends FutureObject {
  /** Input prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** Number of choices to generate. */
  get num_choices() {
    return new FutureNumber(this._directive.next("num_choices"));
  }
  /** (Optional) JSON schema to guide response. */
  get json_schema() {
    return new FutureAnyObject(this._directive.next("json_schema"));
  }
  /** (Optional) Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() {
    return new FutureNumber(this._directive.next("temperature"));
  }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() {
    return new FutureNumber(this._directive.next("max_tokens"));
  }
  /** returns the result for `Mistral7BInstructIn` once it's node has been run. */
  protected override async result(): Promise<Mistral7BInstructIn> {
    return super.result() as Promise<Mistral7BInstructIn>;
  }
}
/** Mistral7BInstructChoice */
export class Mistral7BInstructChoice extends FutureObject {
  /** Text response, if `json_schema` was not provided. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** JSON response, if `json_schema` was provided. */
  get json_object() {
    return new FutureAnyObject(this._directive.next("json_object"));
  }
  /** returns the result for `Mistral7BInstructChoice` once it's node has been run. */
  protected override async result(): Promise<Mistral7BInstructChoice> {
    return super.result() as Promise<Mistral7BInstructChoice>;
  }
}
/** Mistral7BInstructOut */
export class Mistral7BInstructOut extends FutureObject {
  /** array */
  get choices() {
    return new Mistral7BInstructOutChoices(this._directive.next("choices"));
  }
  /** returns the result for `Mistral7BInstructOut` once it's node has been run. */
  protected override async result(): Promise<Mistral7BInstructOut> {
    return super.result() as Promise<Mistral7BInstructOut>;
  }
}
/** GenerateTextVisionIn */
export class GenerateTextVisionIn extends FutureObject {
  /** Text prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }

  /** Image prompts. */
  get image_uris() {
    return new GenerateTextVisionInImageUris(
      this._directive.next("image_uris"),
    );
  }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() {
    return new FutureNumber(this._directive.next("max_tokens"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `GenerateTextVisionIn` once it's node has been run. */
  protected override async result(): Promise<GenerateTextVisionIn> {
    return super.result() as Promise<GenerateTextVisionIn>;
  }
}
/** GenerateTextVisionOut */
export class GenerateTextVisionOut extends FutureObject {
  /** Text response. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** returns the result for `GenerateTextVisionOut` once it's node has been run. */
  protected override async result(): Promise<GenerateTextVisionOut> {
    return super.result() as Promise<GenerateTextVisionOut>;
  }
}
/** Firellava13BIn */
export class Firellava13BIn extends FutureObject {
  /** Text prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }

  /** Image prompts. */
  get image_uris() {
    return new Firellava13BInImageUris(this._directive.next("image_uris"));
  }
  /** (Optional) Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() {
    return new FutureNumber(this._directive.next("temperature"));
  }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() {
    return new FutureNumber(this._directive.next("max_tokens"));
  }
  /** returns the result for `Firellava13BIn` once it's node has been run. */
  protected override async result(): Promise<Firellava13BIn> {
    return super.result() as Promise<Firellava13BIn>;
  }
}
/** Firellava13BOut */
export class Firellava13BOut extends FutureObject {
  /** Text response. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** returns the result for `Firellava13BOut` once it's node has been run. */
  protected override async result(): Promise<Firellava13BOut> {
    return super.result() as Promise<Firellava13BOut>;
  }
}
/** GenerateImageIn */
export class GenerateImageIn extends FutureObject {
  /** Text prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `GenerateImageIn` once it's node has been run. */
  protected override async result(): Promise<GenerateImageIn> {
    return super.result() as Promise<GenerateImageIn>;
  }
}
/** GenerateImageOut */
export class GenerateImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `GenerateImageOut` once it's node has been run. */
  protected override async result(): Promise<GenerateImageOut> {
    return super.result() as Promise<GenerateImageOut>;
  }
}
/** MultiGenerateImageIn */
export class MultiGenerateImageIn extends FutureObject {
  /** Text prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** Number of images to generate. */
  get num_images() {
    return new FutureNumber(this._directive.next("num_images"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `MultiGenerateImageIn` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateImageIn> {
    return super.result() as Promise<MultiGenerateImageIn>;
  }
}
/** MultiGenerateImageOut */
export class MultiGenerateImageOut extends FutureObject {
  /** array */
  get outputs() {
    return new MultiGenerateImageOutOutputs(this._directive.next("outputs"));
  }
  /** returns the result for `MultiGenerateImageOut` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateImageOut> {
    return super.result() as Promise<MultiGenerateImageOut>;
  }
}
/** StableDiffusionXLIn */
export class StableDiffusionXLIn extends FutureObject {
  /** Text prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** (Optional) Negative input prompt. */
  get negative_prompt() {
    return new FutureString(this._directive.next("negative_prompt"));
  }
  /** (Optional) Number of diffusion steps. */
  get steps() {
    return new FutureNumber(this._directive.next("steps"));
  }
  /** (Optional) Number of images to generate. */
  get num_images() {
    return new FutureNumber(this._directive.next("num_images"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Height of output image, in pixels. */
  get height() {
    return new FutureNumber(this._directive.next("height"));
  }
  /** (Optional) Width of output image, in pixels. */
  get width() {
    return new FutureNumber(this._directive.next("width"));
  }

  /** (Optional) Seeds for deterministic generation. Default is a random seed. */
  get seeds() {
    return new StableDiffusionXLInSeeds(this._directive.next("seeds"));
  }
  /** (Optional) Higher values adhere to the text prompt more strongly, typically at the expense of image quality. */
  get guidance_scale() {
    return new FutureNumber(this._directive.next("guidance_scale"));
  }
  /** returns the result for `StableDiffusionXLIn` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLIn> {
    return super.result() as Promise<StableDiffusionXLIn>;
  }
}
/** StableDiffusionImage */
export class StableDiffusionImage extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** The random noise seed used for generation. */
  get seed() {
    return new FutureNumber(this._directive.next("seed"));
  }
  /** returns the result for `StableDiffusionImage` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionImage> {
    return super.result() as Promise<StableDiffusionImage>;
  }
}
/** StableDiffusionXLOut */
export class StableDiffusionXLOut extends FutureObject {
  /** array */
  get outputs() {
    return new StableDiffusionXLOutOutputs(this._directive.next("outputs"));
  }
  /** returns the result for `StableDiffusionXLOut` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLOut> {
    return super.result() as Promise<StableDiffusionXLOut>;
  }
}
/** StableDiffusionXLLightningIn */
export class StableDiffusionXLLightningIn extends FutureObject {
  /** Text prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** (Optional) Negative input prompt. */
  get negative_prompt() {
    return new FutureString(this._directive.next("negative_prompt"));
  }
  /** (Optional) Number of images to generate. */
  get num_images() {
    return new FutureNumber(this._directive.next("num_images"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Height of output image, in pixels. */
  get height() {
    return new FutureNumber(this._directive.next("height"));
  }
  /** (Optional) Width of output image, in pixels. */
  get width() {
    return new FutureNumber(this._directive.next("width"));
  }

  /** (Optional) Seeds for deterministic generation. Default is a random seed. */
  get seeds() {
    return new StableDiffusionXLLightningInSeeds(this._directive.next("seeds"));
  }
  /** returns the result for `StableDiffusionXLLightningIn` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLLightningIn> {
    return super.result() as Promise<StableDiffusionXLLightningIn>;
  }
}
/** StableDiffusionXLLightningOut */
export class StableDiffusionXLLightningOut extends FutureObject {
  /** array */
  get outputs() {
    return new StableDiffusionXLLightningOutOutputs(
      this._directive.next("outputs"),
    );
  }
  /** returns the result for `StableDiffusionXLLightningOut` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLLightningOut> {
    return super.result() as Promise<StableDiffusionXLLightningOut>;
  }
}
/** StableDiffusionXLIPAdapterIn */
export class StableDiffusionXLIPAdapterIn extends FutureObject {
  /** Text prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** (Optional) Image prompt. */
  get image_prompt_uri() {
    return new FutureString(this._directive.next("image_prompt_uri"));
  }
  /** Number of images to generate. */
  get num_images() {
    return new FutureNumber(this._directive.next("num_images"));
  }
  /** (Optional) Controls the influence of the image prompt on the generated output. */
  get ip_adapter_scale() {
    return new FutureNumber(this._directive.next("ip_adapter_scale"));
  }
  /** (Optional) Negative input prompt. */
  get negative_prompt() {
    return new FutureString(this._directive.next("negative_prompt"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Width of output image, in pixels. */
  get width() {
    return new FutureNumber(this._directive.next("width"));
  }
  /** (Optional) Height of output image, in pixels. */
  get height() {
    return new FutureNumber(this._directive.next("height"));
  }

  /** (Optional) Random noise seeds. Default is random seeds for each generation. */
  get seeds() {
    return new StableDiffusionXLIPAdapterInSeeds(this._directive.next("seeds"));
  }
  /** returns the result for `StableDiffusionXLIPAdapterIn` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLIPAdapterIn> {
    return super.result() as Promise<StableDiffusionXLIPAdapterIn>;
  }
}
/** StableDiffusionXLIPAdapterOut */
export class StableDiffusionXLIPAdapterOut extends FutureObject {
  /** array */
  get outputs() {
    return new StableDiffusionXLIPAdapterOutOutputs(
      this._directive.next("outputs"),
    );
  }
  /** returns the result for `StableDiffusionXLIPAdapterOut` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLIPAdapterOut> {
    return super.result() as Promise<StableDiffusionXLIPAdapterOut>;
  }
}
/** StableDiffusionXLControlNetIn */
export class StableDiffusionXLControlNetIn extends FutureObject {
  /** Input image. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** Strategy to control generation using the input image. */
  get control_method() {
    return new FutureString(this._directive.next("control_method"));
  }
  /** Text prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** Number of images to generate. */
  get num_images() {
    return new FutureNumber(this._directive.next("num_images"));
  }
  /** (Optional) Resolution of the output image, in pixels. */
  get output_resolution() {
    return new FutureNumber(this._directive.next("output_resolution"));
  }
  /** (Optional) Negative input prompt. */
  get negative_prompt() {
    return new FutureString(this._directive.next("negative_prompt"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Controls the influence of the input image on the generated output. */
  get conditioning_scale() {
    return new FutureNumber(this._directive.next("conditioning_scale"));
  }

  /** (Optional) Random noise seeds. Default is random seeds for each generation. */
  get seeds() {
    return new StableDiffusionXLControlNetInSeeds(
      this._directive.next("seeds"),
    );
  }
  /** returns the result for `StableDiffusionXLControlNetIn` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLControlNetIn> {
    return super.result() as Promise<StableDiffusionXLControlNetIn>;
  }
}
/** StableDiffusionXLControlNetOut */
export class StableDiffusionXLControlNetOut extends FutureObject {
  /** array */
  get outputs() {
    return new StableDiffusionXLControlNetOutOutputs(
      this._directive.next("outputs"),
    );
  }
  /** returns the result for `StableDiffusionXLControlNetOut` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLControlNetOut> {
    return super.result() as Promise<StableDiffusionXLControlNetOut>;
  }
}
/** GenerativeEditImageIn */
export class GenerativeEditImageIn extends FutureObject {
  /** Original image. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** Text prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** (Optional) Mask image that controls which pixels are inpainted. If unset, the entire image is edited (image-to-image). */
  get mask_image_uri() {
    return new FutureString(this._directive.next("mask_image_uri"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `GenerativeEditImageIn` once it's node has been run. */
  protected override async result(): Promise<GenerativeEditImageIn> {
    return super.result() as Promise<GenerativeEditImageIn>;
  }
}
/** GenerativeEditImageOut */
export class GenerativeEditImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `GenerativeEditImageOut` once it's node has been run. */
  protected override async result(): Promise<GenerativeEditImageOut> {
    return super.result() as Promise<GenerativeEditImageOut>;
  }
}
/** MultiGenerativeEditImageIn */
export class MultiGenerativeEditImageIn extends FutureObject {
  /** Original image. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** Text prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** (Optional) Mask image that controls which pixels are edited (inpainting). If unset, the entire image is edited (image-to-image). */
  get mask_image_uri() {
    return new FutureString(this._directive.next("mask_image_uri"));
  }
  /** Number of images to generate. */
  get num_images() {
    return new FutureNumber(this._directive.next("num_images"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `MultiGenerativeEditImageIn` once it's node has been run. */
  protected override async result(): Promise<MultiGenerativeEditImageIn> {
    return super.result() as Promise<MultiGenerativeEditImageIn>;
  }
}
/** MultiGenerativeEditImageOut */
export class MultiGenerativeEditImageOut extends FutureObject {
  /** array */
  get outputs() {
    return new MultiGenerativeEditImageOutOutputs(
      this._directive.next("outputs"),
    );
  }
  /** returns the result for `MultiGenerativeEditImageOut` once it's node has been run. */
  protected override async result(): Promise<MultiGenerativeEditImageOut> {
    return super.result() as Promise<MultiGenerativeEditImageOut>;
  }
}
/** StableDiffusionXLInpaintIn */
export class StableDiffusionXLInpaintIn extends FutureObject {
  /** Original image. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** Text prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** (Optional) Mask image that controls which pixels are edited (inpainting). If unset, the entire image is edited (image-to-image). */
  get mask_image_uri() {
    return new FutureString(this._directive.next("mask_image_uri"));
  }
  /** Number of images to generate. */
  get num_images() {
    return new FutureNumber(this._directive.next("num_images"));
  }
  /** (Optional) Resolution of the output image, in pixels. */
  get output_resolution() {
    return new FutureNumber(this._directive.next("output_resolution"));
  }
  /** (Optional) Negative input prompt. */
  get negative_prompt() {
    return new FutureString(this._directive.next("negative_prompt"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Controls the strength of the generation process. */
  get strength() {
    return new FutureNumber(this._directive.next("strength"));
  }

  /** (Optional) Random noise seeds. Default is random seeds for each generation. */
  get seeds() {
    return new StableDiffusionXLInpaintInSeeds(this._directive.next("seeds"));
  }
  /** returns the result for `StableDiffusionXLInpaintIn` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLInpaintIn> {
    return super.result() as Promise<StableDiffusionXLInpaintIn>;
  }
}
/** StableDiffusionXLInpaintOut */
export class StableDiffusionXLInpaintOut extends FutureObject {
  /** array */
  get outputs() {
    return new StableDiffusionXLInpaintOutOutputs(
      this._directive.next("outputs"),
    );
  }
  /** returns the result for `StableDiffusionXLInpaintOut` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLInpaintOut> {
    return super.result() as Promise<StableDiffusionXLInpaintOut>;
  }
}
/** BoundingBox */
export class BoundingBox extends FutureObject {
  /** Top left corner x. */
  get x1() {
    return new FutureNumber(this._directive.next("x1"));
  }
  /** Top left corner y. */
  get y1() {
    return new FutureNumber(this._directive.next("y1"));
  }
  /** Bottom right corner x. */
  get x2() {
    return new FutureNumber(this._directive.next("x2"));
  }
  /** Bottom right corner y. */
  get y2() {
    return new FutureNumber(this._directive.next("y2"));
  }
  /** returns the result for `BoundingBox` once it's node has been run. */
  protected override async result(): Promise<BoundingBox> {
    return super.result() as Promise<BoundingBox>;
  }
}
/** Point */
export class Point extends FutureObject {
  /** X position. */
  get x() {
    return new FutureNumber(this._directive.next("x"));
  }
  /** Y position. */
  get y() {
    return new FutureNumber(this._directive.next("y"));
  }
  /** returns the result for `Point` once it's node has been run. */
  protected override async result(): Promise<Point> {
    return super.result() as Promise<Point>;
  }
}
/** FillMaskIn */
export class FillMaskIn extends FutureObject {
  /** Input image. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** Mask image that controls which pixels are inpainted. */
  get mask_image_uri() {
    return new FutureString(this._directive.next("mask_image_uri"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `FillMaskIn` once it's node has been run. */
  protected override async result(): Promise<FillMaskIn> {
    return super.result() as Promise<FillMaskIn>;
  }
}
/** FillMaskOut */
export class FillMaskOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `FillMaskOut` once it's node has been run. */
  protected override async result(): Promise<FillMaskOut> {
    return super.result() as Promise<FillMaskOut>;
  }
}
/** BigLaMaIn */
export class BigLaMaIn extends FutureObject {
  /** Input image. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** Mask image that controls which pixels are inpainted. */
  get mask_image_uri() {
    return new FutureString(this._directive.next("mask_image_uri"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `BigLaMaIn` once it's node has been run. */
  protected override async result(): Promise<BigLaMaIn> {
    return super.result() as Promise<BigLaMaIn>;
  }
}
/** BigLaMaOut */
export class BigLaMaOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `BigLaMaOut` once it's node has been run. */
  protected override async result(): Promise<BigLaMaOut> {
    return super.result() as Promise<BigLaMaOut>;
  }
}
/** RemoveBackgroundIn */
export class RemoveBackgroundIn extends FutureObject {
  /** Input image. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** (Optional) Return a mask image instead of the original content. */
  get return_mask() {
    return new FutureBoolean(this._directive.next("return_mask"));
  }
  /** (Optional) Hex value background color. Transparent if unset. */
  get background_color() {
    return new FutureString(this._directive.next("background_color"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `RemoveBackgroundIn` once it's node has been run. */
  protected override async result(): Promise<RemoveBackgroundIn> {
    return super.result() as Promise<RemoveBackgroundIn>;
  }
}
/** RemoveBackgroundOut */
export class RemoveBackgroundOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `RemoveBackgroundOut` once it's node has been run. */
  protected override async result(): Promise<RemoveBackgroundOut> {
    return super.result() as Promise<RemoveBackgroundOut>;
  }
}
/** DISISNetIn */
export class DISISNetIn extends FutureObject {
  /** Input image. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `DISISNetIn` once it's node has been run. */
  protected override async result(): Promise<DISISNetIn> {
    return super.result() as Promise<DISISNetIn>;
  }
}
/** DISISNetOut */
export class DISISNetOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `DISISNetOut` once it's node has been run. */
  protected override async result(): Promise<DISISNetOut> {
    return super.result() as Promise<DISISNetOut>;
  }
}
/** UpscaleImageIn */
export class UpscaleImageIn extends FutureObject {
  /** Input image. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `UpscaleImageIn` once it's node has been run. */
  protected override async result(): Promise<UpscaleImageIn> {
    return super.result() as Promise<UpscaleImageIn>;
  }
}
/** UpscaleImageOut */
export class UpscaleImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `UpscaleImageOut` once it's node has been run. */
  protected override async result(): Promise<UpscaleImageOut> {
    return super.result() as Promise<UpscaleImageOut>;
  }
}
/** RealESRGANIn */
export class RealESRGANIn extends FutureObject {
  /** Input image. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `RealESRGANIn` once it's node has been run. */
  protected override async result(): Promise<RealESRGANIn> {
    return super.result() as Promise<RealESRGANIn>;
  }
}
/** RealESRGANOut */
export class RealESRGANOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `RealESRGANOut` once it's node has been run. */
  protected override async result(): Promise<RealESRGANOut> {
    return super.result() as Promise<RealESRGANOut>;
  }
}
/** SegmentUnderPointIn */
export class SegmentUnderPointIn extends FutureObject {
  /** Input image. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** Point prompt. */
  get point() {
    return new Point(this._directive.next("point"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `SegmentUnderPointIn` once it's node has been run. */
  protected override async result(): Promise<SegmentUnderPointIn> {
    return super.result() as Promise<SegmentUnderPointIn>;
  }
}
/** SegmentUnderPointOut */
export class SegmentUnderPointOut extends FutureObject {
  /** Detected segments in 'mask image' format. Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get mask_image_uri() {
    return new FutureString(this._directive.next("mask_image_uri"));
  }
  /** returns the result for `SegmentUnderPointOut` once it's node has been run. */
  protected override async result(): Promise<SegmentUnderPointOut> {
    return super.result() as Promise<SegmentUnderPointOut>;
  }
}
/** SegmentAnythingIn */
export class SegmentAnythingIn extends FutureObject {
  /** Input image. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }

  /** (Optional) Point prompts, to detect a segment under the point. One of `point_prompts` or `box_prompts` must be set. */
  get point_prompts() {
    return new SegmentAnythingInPointPrompts(
      this._directive.next("point_prompts"),
    );
  }

  /** (Optional) Box prompts, to detect a segment within the bounding box. One of `point_prompts` or `box_prompts` must be set. */
  get box_prompts() {
    return new SegmentAnythingInBoxPrompts(this._directive.next("box_prompts"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `SegmentAnythingIn` once it's node has been run. */
  protected override async result(): Promise<SegmentAnythingIn> {
    return super.result() as Promise<SegmentAnythingIn>;
  }
}
/** SegmentAnythingOut */
export class SegmentAnythingOut extends FutureObject {
  /** Detected segments in 'mask image' format. Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get mask_image_uri() {
    return new FutureString(this._directive.next("mask_image_uri"));
  }
  /** returns the result for `SegmentAnythingOut` once it's node has been run. */
  protected override async result(): Promise<SegmentAnythingOut> {
    return super.result() as Promise<SegmentAnythingOut>;
  }
}
/** TranscribeMediaIn */
export class TranscribeMediaIn extends FutureObject {
  /** Input audio. */
  get audio_uri() {
    return new FutureString(this._directive.next("audio_uri"));
  }
  /** (Optional) Prompt to guide model on the content and context of input audio. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** (Optional) Language of input audio in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format. */
  get language() {
    return new FutureString(this._directive.next("language"));
  }
  /** (Optional) Segment the text into sentences with approximate timestamps. */
  get segment() {
    return new FutureBoolean(this._directive.next("segment"));
  }
  /** (Optional) Align transcription to produce more accurate sentence-level timestamps and word-level timestamps. An array of word segments will be included in each sentence segment. */
  get align() {
    return new FutureBoolean(this._directive.next("align"));
  }
  /** (Optional) Identify speakers for each segment. Speaker IDs will be included in each segment. */
  get diarize() {
    return new FutureBoolean(this._directive.next("diarize"));
  }
  /** (Optional) Suggest automatic chapter markers. */
  get suggest_chapters() {
    return new FutureBoolean(this._directive.next("suggest_chapters"));
  }
  /** returns the result for `TranscribeMediaIn` once it's node has been run. */
  protected override async result(): Promise<TranscribeMediaIn> {
    return super.result() as Promise<TranscribeMediaIn>;
  }
}
/** TranscribedWord */
export class TranscribedWord extends FutureObject {
  /** Text of word. */
  get word() {
    return new FutureString(this._directive.next("word"));
  }
  /** (Optional) Start time of word, in seconds. */
  get start() {
    return new FutureNumber(this._directive.next("start"));
  }
  /** (Optional) End time of word, in seconds. */
  get end() {
    return new FutureNumber(this._directive.next("end"));
  }
  /** (Optional) ID of speaker, if `diarize` is enabled. */
  get speaker() {
    return new FutureString(this._directive.next("speaker"));
  }
  /** returns the result for `TranscribedWord` once it's node has been run. */
  protected override async result(): Promise<TranscribedWord> {
    return super.result() as Promise<TranscribedWord>;
  }
}
/** TranscribedSegment */
export class TranscribedSegment extends FutureObject {
  /** Text of segment. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** Start time of segment, in seconds. */
  get start() {
    return new FutureNumber(this._directive.next("start"));
  }
  /** End time of segment, in seconds. */
  get end() {
    return new FutureNumber(this._directive.next("end"));
  }
  /** (Optional) ID of speaker, if `diarize` is enabled. */
  get speaker() {
    return new FutureString(this._directive.next("speaker"));
  }

  /** (Optional) Aligned words, if `align` is enabled. */
  get words() {
    return new TranscribedSegmentWords(this._directive.next("words"));
  }
  /** returns the result for `TranscribedSegment` once it's node has been run. */
  protected override async result(): Promise<TranscribedSegment> {
    return super.result() as Promise<TranscribedSegment>;
  }
}
/** ChapterMarker */
export class ChapterMarker extends FutureObject {
  /** Chapter title. */
  get title() {
    return new FutureString(this._directive.next("title"));
  }
  /** Start time of chapter, in seconds. */
  get start() {
    return new FutureNumber(this._directive.next("start"));
  }
  /** returns the result for `ChapterMarker` once it's node has been run. */
  protected override async result(): Promise<ChapterMarker> {
    return super.result() as Promise<ChapterMarker>;
  }
}
/** TranscribeMediaOut */
export class TranscribeMediaOut extends FutureObject {
  /** Transcribed text. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }

  /** (Optional) Transcribed segments, if `segment` is enabled. */
  get segments() {
    return new TranscribeMediaOutSegments(this._directive.next("segments"));
  }

  /** (Optional) Chapter markers, if `suggest_chapters` is enabled. */
  get chapters() {
    return new TranscribeMediaOutChapters(this._directive.next("chapters"));
  }
  /** returns the result for `TranscribeMediaOut` once it's node has been run. */
  protected override async result(): Promise<TranscribeMediaOut> {
    return super.result() as Promise<TranscribeMediaOut>;
  }
}
/** GenerateSpeechIn */
export class GenerateSpeechIn extends FutureObject {
  /** Input text. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** (Optional) Use "hosted" to return an audio URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the audio data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `GenerateSpeechIn` once it's node has been run. */
  protected override async result(): Promise<GenerateSpeechIn> {
    return super.result() as Promise<GenerateSpeechIn>;
  }
}
/** GenerateSpeechOut */
export class GenerateSpeechOut extends FutureObject {
  /** Base 64-encoded WAV audio bytes, or a hosted audio url if `store` is provided. */
  get audio_uri() {
    return new FutureString(this._directive.next("audio_uri"));
  }
  /** returns the result for `GenerateSpeechOut` once it's node has been run. */
  protected override async result(): Promise<GenerateSpeechOut> {
    return super.result() as Promise<GenerateSpeechOut>;
  }
}
/** XTTSV2In */
export class XTTSV2In extends FutureObject {
  /** Input text. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** (Optional) Reference audio used to synthesize the speaker. If unset, a default speaker voice will be used. */
  get audio_uri() {
    return new FutureString(this._directive.next("audio_uri"));
  }
  /** (Optional) Language of input text. Supported languages: `en, de, fr, es, it, pt, pl, zh, ar, cs, ru, nl, tr, hu, ko`. */
  get language() {
    return new FutureString(this._directive.next("language"));
  }
  /** (Optional) Use "hosted" to return an audio URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the audio data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `XTTSV2In` once it's node has been run. */
  protected override async result(): Promise<XTTSV2In> {
    return super.result() as Promise<XTTSV2In>;
  }
}
/** XTTSV2Out */
export class XTTSV2Out extends FutureObject {
  /** Base 64-encoded WAV audio bytes, or a hosted audio url if `store` is provided. */
  get audio_uri() {
    return new FutureString(this._directive.next("audio_uri"));
  }
  /** returns the result for `XTTSV2Out` once it's node has been run. */
  protected override async result(): Promise<XTTSV2Out> {
    return super.result() as Promise<XTTSV2Out>;
  }
}
/** Embedding */
export class Embedding extends FutureObject {
  /** Embedding vector. */
  get vector() {
    return new EmbeddingVector(this._directive.next("vector"));
  }
  /** (Optional) Vector store document ID. */
  get doc_id() {
    return new FutureString(this._directive.next("doc_id"));
  }
  /** (Optional) Vector store document metadata. */
  get metadata() {
    return new FutureAnyObject(this._directive.next("metadata"));
  }
  /** returns the result for `Embedding` once it's node has been run. */
  protected override async result(): Promise<Embedding> {
    return super.result() as Promise<Embedding>;
  }
}
/** EmbedTextIn */
export class EmbedTextIn extends FutureObject {
  /** Text to embed. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** (Optional) [Vector store](/docs/vector-stores) identifier. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Metadata that can be used to query the vector store. Ignored if `store` is unset. */
  get metadata() {
    return new FutureAnyObject(this._directive.next("metadata"));
  }

  /** (Optional) Choose keys from `metadata` to embed with text. */
  get embedded_metadata_keys() {
    return new EmbedTextInEmbeddedMetadataKeys(
      this._directive.next("embedded_metadata_keys"),
    );
  }
  /** (Optional) Vector store document ID. Ignored if `store` is unset. */
  get doc_id() {
    return new FutureString(this._directive.next("doc_id"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `EmbedTextIn` once it's node has been run. */
  protected override async result(): Promise<EmbedTextIn> {
    return super.result() as Promise<EmbedTextIn>;
  }
}
/** EmbedTextOut */
export class EmbedTextOut extends FutureObject {
  /** Generated embedding. */
  get embedding() {
    return new Embedding(this._directive.next("embedding"));
  }
  /** returns the result for `EmbedTextOut` once it's node has been run. */
  protected override async result(): Promise<EmbedTextOut> {
    return super.result() as Promise<EmbedTextOut>;
  }
}
/** EmbedTextItem */
export class EmbedTextItem extends FutureObject {
  /** Text to embed. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** (Optional) Metadata that can be used to query the vector store. Ignored if `store` is unset. */
  get metadata() {
    return new FutureAnyObject(this._directive.next("metadata"));
  }
  /** (Optional) Vector store document ID. Ignored if `store` is unset. */
  get doc_id() {
    return new FutureString(this._directive.next("doc_id"));
  }
  /** returns the result for `EmbedTextItem` once it's node has been run. */
  protected override async result(): Promise<EmbedTextItem> {
    return super.result() as Promise<EmbedTextItem>;
  }
}
/** MultiEmbedTextIn */
export class MultiEmbedTextIn extends FutureObject {
  /** Items to embed. */
  get items() {
    return new MultiEmbedTextInItems(this._directive.next("items"));
  }
  /** (Optional) [Vector store](/docs/vector-stores) identifier. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }

  /** (Optional) Choose keys from `metadata` to embed with text. */
  get embedded_metadata_keys() {
    return new MultiEmbedTextInEmbeddedMetadataKeys(
      this._directive.next("embedded_metadata_keys"),
    );
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `MultiEmbedTextIn` once it's node has been run. */
  protected override async result(): Promise<MultiEmbedTextIn> {
    return super.result() as Promise<MultiEmbedTextIn>;
  }
}
/** MultiEmbedTextOut */
export class MultiEmbedTextOut extends FutureObject {
  /** Generated embeddings. */
  get embeddings() {
    return new MultiEmbedTextOutEmbeddings(this._directive.next("embeddings"));
  }
  /** returns the result for `MultiEmbedTextOut` once it's node has been run. */
  protected override async result(): Promise<MultiEmbedTextOut> {
    return super.result() as Promise<MultiEmbedTextOut>;
  }
}
/** JinaV2In */
export class JinaV2In extends FutureObject {
  /** Items to embed. */
  get items() {
    return new JinaV2InItems(this._directive.next("items"));
  }
  /** (Optional) [Vector store](/docs/vector-stores) identifier. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }

  /** (Optional) Choose keys from `metadata` to embed with text. */
  get embedded_metadata_keys() {
    return new JinaV2InEmbeddedMetadataKeys(
      this._directive.next("embedded_metadata_keys"),
    );
  }
  /** returns the result for `JinaV2In` once it's node has been run. */
  protected override async result(): Promise<JinaV2In> {
    return super.result() as Promise<JinaV2In>;
  }
}
/** JinaV2Out */
export class JinaV2Out extends FutureObject {
  /** Generated embeddings. */
  get embeddings() {
    return new JinaV2OutEmbeddings(this._directive.next("embeddings"));
  }
  /** returns the result for `JinaV2Out` once it's node has been run. */
  protected override async result(): Promise<JinaV2Out> {
    return super.result() as Promise<JinaV2Out>;
  }
}
/** EmbedImageIn */
export class EmbedImageIn extends FutureObject {
  /** Image to embed. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** (Optional) [Vector store](/docs/vector-stores) identifier. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Vector store document ID. Ignored if `store` is unset. */
  get doc_id() {
    return new FutureString(this._directive.next("doc_id"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `EmbedImageIn` once it's node has been run. */
  protected override async result(): Promise<EmbedImageIn> {
    return super.result() as Promise<EmbedImageIn>;
  }
}
/** EmbedImageOut */
export class EmbedImageOut extends FutureObject {
  /** Generated embedding. */
  get embedding() {
    return new Embedding(this._directive.next("embedding"));
  }
  /** returns the result for `EmbedImageOut` once it's node has been run. */
  protected override async result(): Promise<EmbedImageOut> {
    return super.result() as Promise<EmbedImageOut>;
  }
}
/** EmbedImageItem */
export class EmbedImageItem extends FutureObject {
  /** Image to embed. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** (Optional) Vector store document ID. Ignored if `store` is unset. */
  get doc_id() {
    return new FutureString(this._directive.next("doc_id"));
  }
  /** returns the result for `EmbedImageItem` once it's node has been run. */
  protected override async result(): Promise<EmbedImageItem> {
    return super.result() as Promise<EmbedImageItem>;
  }
}
/** EmbedTextOrImageItem */
export class EmbedTextOrImageItem extends FutureObject {
  /** Image to embed. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** Text to embed. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** Metadata that can be used to query the vector store. Ignored if `store` is unset. */
  get metadata() {
    return new FutureAnyObject(this._directive.next("metadata"));
  }
  /** Vector store document ID. Ignored if `store` is unset. */
  get doc_id() {
    return new FutureString(this._directive.next("doc_id"));
  }
  /** returns the result for `EmbedTextOrImageItem` once it's node has been run. */
  protected override async result(): Promise<EmbedTextOrImageItem> {
    return super.result() as Promise<EmbedTextOrImageItem>;
  }
}
/** MultiEmbedImageIn */
export class MultiEmbedImageIn extends FutureObject {
  /** Items to embed. */
  get items() {
    return new MultiEmbedImageInItems(this._directive.next("items"));
  }
  /** (Optional) [Vector store](/docs/vector-stores) identifier. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Selected node. */
  get node() {
    return new FutureString(this._directive.next("node"));
  }
  /** returns the result for `MultiEmbedImageIn` once it's node has been run. */
  protected override async result(): Promise<MultiEmbedImageIn> {
    return super.result() as Promise<MultiEmbedImageIn>;
  }
}
/** MultiEmbedImageOut */
export class MultiEmbedImageOut extends FutureObject {
  /** Generated embeddings. */
  get embeddings() {
    return new MultiEmbedImageOutEmbeddings(this._directive.next("embeddings"));
  }
  /** returns the result for `MultiEmbedImageOut` once it's node has been run. */
  protected override async result(): Promise<MultiEmbedImageOut> {
    return super.result() as Promise<MultiEmbedImageOut>;
  }
}
/** CLIPIn */
export class CLIPIn extends FutureObject {
  /** Items to embed. */
  get items() {
    return new CLIPInItems(this._directive.next("items"));
  }

  /** (Optional) Choose keys from `metadata` to embed with text, when embedding and storing text documents. */
  get embedded_metadata_keys() {
    return new CLIPInEmbeddedMetadataKeys(
      this._directive.next("embedded_metadata_keys"),
    );
  }
  /** (Optional) [Vector store](/docs/vector-stores) identifier. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `CLIPIn` once it's node has been run. */
  protected override async result(): Promise<CLIPIn> {
    return super.result() as Promise<CLIPIn>;
  }
}
/** CLIPOut */
export class CLIPOut extends FutureObject {
  /** Generated embeddings. */
  get embeddings() {
    return new CLIPOutEmbeddings(this._directive.next("embeddings"));
  }
  /** returns the result for `CLIPOut` once it's node has been run. */
  protected override async result(): Promise<CLIPOut> {
    return super.result() as Promise<CLIPOut>;
  }
}
/** CreateVectorStoreIn */
export class CreateVectorStoreIn extends FutureObject {
  /** Vector store name. */
  get name() {
    return new FutureString(this._directive.next("name"));
  }
  /** Selected embedding model */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** (Optional) The max number of connections per layer for the index. */
  get m() {
    return new FutureNumber(this._directive.next("m"));
  }
  /** (Optional) The size of the dynamic candidate list for constructing the index graph. */
  get ef_construction() {
    return new FutureNumber(this._directive.next("ef_construction"));
  }
  /** (Optional) The distance metric to construct the index with. */
  get metric() {
    return new FutureString(this._directive.next("metric"));
  }
  /** returns the result for `CreateVectorStoreIn` once it's node has been run. */
  protected override async result(): Promise<CreateVectorStoreIn> {
    return super.result() as Promise<CreateVectorStoreIn>;
  }
}
/** CreateVectorStoreOut */
export class CreateVectorStoreOut extends FutureObject {
  /** Vector store name. */
  get name() {
    return new FutureString(this._directive.next("name"));
  }
  /** Selected embedding model */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** The max number of connections per layer for the index. */
  get m() {
    return new FutureNumber(this._directive.next("m"));
  }
  /** The size of the dynamic candidate list for constructing the index graph. */
  get ef_construction() {
    return new FutureNumber(this._directive.next("ef_construction"));
  }
  /** The distance metric to construct the index with. */
  get metric() {
    return new FutureString(this._directive.next("metric"));
  }
  /** returns the result for `CreateVectorStoreOut` once it's node has been run. */
  protected override async result(): Promise<CreateVectorStoreOut> {
    return super.result() as Promise<CreateVectorStoreOut>;
  }
}
/** ListVectorStoresIn */
export class ListVectorStoresIn extends FutureObject {
  /** returns the result for `ListVectorStoresIn` once it's node has been run. */
  protected override async result(): Promise<ListVectorStoresIn> {
    return super.result() as Promise<ListVectorStoresIn>;
  }
}
/** ListVectorStoresOut */
export class ListVectorStoresOut extends FutureObject {
  /** List of vector stores. */
  get stores() {
    return new ListVectorStoresOutStores(this._directive.next("stores"));
  }
  /** returns the result for `ListVectorStoresOut` once it's node has been run. */
  protected override async result(): Promise<ListVectorStoresOut> {
    return super.result() as Promise<ListVectorStoresOut>;
  }
}
/** DeleteVectorStoreIn */
export class DeleteVectorStoreIn extends FutureObject {
  /** Vector store name. */
  get name() {
    return new FutureString(this._directive.next("name"));
  }
  /** Selected embedding model */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `DeleteVectorStoreIn` once it's node has been run. */
  protected override async result(): Promise<DeleteVectorStoreIn> {
    return super.result() as Promise<DeleteVectorStoreIn>;
  }
}
/** DeleteVectorStoreOut */
export class DeleteVectorStoreOut extends FutureObject {
  /** Vector store name. */
  get name() {
    return new FutureString(this._directive.next("name"));
  }
  /** Selected embedding model */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `DeleteVectorStoreOut` once it's node has been run. */
  protected override async result(): Promise<DeleteVectorStoreOut> {
    return super.result() as Promise<DeleteVectorStoreOut>;
  }
}
/** Canonical representation of document with embedding vector. */
export class Vector extends FutureObject {
  /** Document ID. */
  get id() {
    return new FutureString(this._directive.next("id"));
  }

  /** Embedding vector. */
  get vector() {
    return new VectorVector(this._directive.next("vector"));
  }
  /** Document metadata. */
  get metadata() {
    return new FutureAnyObject(this._directive.next("metadata"));
  }
  /** returns the result for `Vector` once it's node has been run. */
  protected override async result(): Promise<Vector> {
    return super.result() as Promise<Vector>;
  }
}
/** FetchVectorsIn */
export class FetchVectorsIn extends FutureObject {
  /** Vector store name. */
  get name() {
    return new FutureString(this._directive.next("name"));
  }
  /** Selected embedding model */
  get model() {
    return new FutureString(this._directive.next("model"));
  }

  /** Document IDs to retrieve. */
  get ids() {
    return new FetchVectorsInIds(this._directive.next("ids"));
  }
  /** returns the result for `FetchVectorsIn` once it's node has been run. */
  protected override async result(): Promise<FetchVectorsIn> {
    return super.result() as Promise<FetchVectorsIn>;
  }
}
/** FetchVectorsOut */
export class FetchVectorsOut extends FutureObject {
  /** Retrieved vectors. */
  get vectors() {
    return new FetchVectorsOutVectors(this._directive.next("vectors"));
  }
  /** returns the result for `FetchVectorsOut` once it's node has been run. */
  protected override async result(): Promise<FetchVectorsOut> {
    return super.result() as Promise<FetchVectorsOut>;
  }
}
/** UpdateVectorsOut */
export class UpdateVectorsOut extends FutureObject {
  /** Number of vectors modified. */
  get count() {
    return new FutureNumber(this._directive.next("count"));
  }
  /** returns the result for `UpdateVectorsOut` once it's node has been run. */
  protected override async result(): Promise<UpdateVectorsOut> {
    return super.result() as Promise<UpdateVectorsOut>;
  }
}
/** DeleteVectorsOut */
export class DeleteVectorsOut extends FutureObject {
  /** Number of vectors modified. */
  get count() {
    return new FutureNumber(this._directive.next("count"));
  }
  /** returns the result for `DeleteVectorsOut` once it's node has been run. */
  protected override async result(): Promise<DeleteVectorsOut> {
    return super.result() as Promise<DeleteVectorsOut>;
  }
}
/** UpdateVectorParams */
export class UpdateVectorParams extends FutureObject {
  /** Document ID. */
  get id() {
    return new FutureString(this._directive.next("id"));
  }

  /** (Optional) Embedding vector. */
  get vector() {
    return new UpdateVectorParamsVector(this._directive.next("vector"));
  }
  /** (Optional) Document metadata. */
  get metadata() {
    return new FutureAnyObject(this._directive.next("metadata"));
  }
  /** returns the result for `UpdateVectorParams` once it's node has been run. */
  protected override async result(): Promise<UpdateVectorParams> {
    return super.result() as Promise<UpdateVectorParams>;
  }
}
/** UpdateVectorsIn */
export class UpdateVectorsIn extends FutureObject {
  /** Vector store name. */
  get name() {
    return new FutureString(this._directive.next("name"));
  }
  /** Selected embedding model */
  get model() {
    return new FutureString(this._directive.next("model"));
  }

  /** Vectors to upsert. */
  get vectors() {
    return new UpdateVectorsInVectors(this._directive.next("vectors"));
  }
  /** returns the result for `UpdateVectorsIn` once it's node has been run. */
  protected override async result(): Promise<UpdateVectorsIn> {
    return super.result() as Promise<UpdateVectorsIn>;
  }
}
/** DeleteVectorsIn */
export class DeleteVectorsIn extends FutureObject {
  /** Vector store name. */
  get name() {
    return new FutureString(this._directive.next("name"));
  }
  /** Selected embedding model */
  get model() {
    return new FutureString(this._directive.next("model"));
  }

  /** Document IDs to delete. */
  get ids() {
    return new DeleteVectorsInIds(this._directive.next("ids"));
  }
  /** returns the result for `DeleteVectorsIn` once it's node has been run. */
  protected override async result(): Promise<DeleteVectorsIn> {
    return super.result() as Promise<DeleteVectorsIn>;
  }
}
/** QueryVectorStoreIn */
export class QueryVectorStoreIn extends FutureObject {
  /** Vector store to query against. */
  get name() {
    return new FutureString(this._directive.next("name"));
  }
  /** Selected embedding model */
  get model() {
    return new FutureString(this._directive.next("model"));
  }

  /** (Optional) Document IDs to use for the query. */
  get query_ids() {
    return new QueryVectorStoreInQueryIds(this._directive.next("query_ids"));
  }

  /** (Optional) Image URIs to embed and use for the query. */
  get query_image_uris() {
    return new QueryVectorStoreInQueryImageUris(
      this._directive.next("query_image_uris"),
    );
  }

  /** (Optional) Vector to use for the query. */
  get query_vectors() {
    return new QueryVectorStoreInQueryVectors(
      this._directive.next("query_vectors"),
    );
  }

  /** (Optional) Texts to embed and use for the query. */
  get query_strings() {
    return new QueryVectorStoreInQueryStrings(
      this._directive.next("query_strings"),
    );
  }
  /** (Optional) Number of results to return. */
  get top_k() {
    return new FutureNumber(this._directive.next("top_k"));
  }
  /** (Optional) The size of the dynamic candidate list for searching the index graph. */
  get ef_search() {
    return new FutureNumber(this._directive.next("ef_search"));
  }
  /** (Optional) Include the values of the vectors in the response. */
  get include_values() {
    return new FutureBoolean(this._directive.next("include_values"));
  }
  /** (Optional) Include the metadata of the vectors in the response. */
  get include_metadata() {
    return new FutureBoolean(this._directive.next("include_metadata"));
  }
  /** (Optional) Filter metadata by key-value pairs. */
  get filters() {
    return new FutureAnyObject(this._directive.next("filters"));
  }
  /** (Optional) The distance metric used for the query. Defaults to the distance metric the vector store was created with. */
  get metric() {
    return new FutureString(this._directive.next("metric"));
  }
  /** returns the result for `QueryVectorStoreIn` once it's node has been run. */
  protected override async result(): Promise<QueryVectorStoreIn> {
    return super.result() as Promise<QueryVectorStoreIn>;
  }
}
/** VectorStoreQueryResult */
export class VectorStoreQueryResult extends FutureObject {
  /** Document ID. */
  get id() {
    return new FutureString(this._directive.next("id"));
  }
  /** Similarity score. */
  get distance() {
    return new FutureNumber(this._directive.next("distance"));
  }

  /** (Optional) Embedding vector. */
  get vector() {
    return new VectorStoreQueryResultVector(this._directive.next("vector"));
  }
  /** (Optional) Document metadata. */
  get metadata() {
    return new FutureAnyObject(this._directive.next("metadata"));
  }
  /** returns the result for `VectorStoreQueryResult` once it's node has been run. */
  protected override async result(): Promise<VectorStoreQueryResult> {
    return super.result() as Promise<VectorStoreQueryResult>;
  }
}
/** QueryVectorStoreOut */
export class QueryVectorStoreOut extends FutureObject {
  /** Query results. */
  get results() {
    return new QueryVectorStoreOutResults(this._directive.next("results"));
  }
  /** (Optional) Vector store name. */
  get name() {
    return new FutureString(this._directive.next("name"));
  }
  /** (Optional) Selected embedding model */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** (Optional) The distance metric used for the query. */
  get metric() {
    return new FutureString(this._directive.next("metric"));
  }
  /** returns the result for `QueryVectorStoreOut` once it's node has been run. */
  protected override async result(): Promise<QueryVectorStoreOut> {
    return super.result() as Promise<QueryVectorStoreOut>;
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerateText
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateTextIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerateText
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["GenerateTextOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["GenerateTextOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiGenerateText
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["MultiGenerateTextIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiGenerateText
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["MultiGenerateTextOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["MultiGenerateTextOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerateJSON
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateJSONIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerateJSON
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["GenerateJSONOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["GenerateJSONOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiGenerateJSON
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["MultiGenerateJSONIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiGenerateJSON
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["MultiGenerateJSONOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["MultiGenerateJSONOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerateTextVision
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["GenerateTextVisionIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerateTextVision
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["GenerateTextVisionOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["GenerateTextVisionOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#Mistral7BInstruct
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["Mistral7BInstructIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#Mistral7BInstruct
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["Mistral7BInstructOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["Mistral7BInstructOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#Firellava13B
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["Firellava13BIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#Firellava13B
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["Firellava13BOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["Firellava13BOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerateImage
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateImageIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerateImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["GenerateImageOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["GenerateImageOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiGenerateImage
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["MultiGenerateImageIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiGenerateImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["MultiGenerateImageOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["MultiGenerateImageOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerativeEditImage
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["GenerativeEditImageIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerativeEditImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["GenerativeEditImageOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["GenerativeEditImageOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiGenerativeEditImage
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["MultiGenerativeEditImageIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiGenerativeEditImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["MultiGenerativeEditImageOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["MultiGenerativeEditImageOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#StableDiffusionXL
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["StableDiffusionXLIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#StableDiffusionXL
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["StableDiffusionXLOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["StableDiffusionXLOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
 * Generate an image using [Stable Diffusion XL Lightning](https://arxiv.org/abs/2402.13929).
 *
 * https://substrate.run/library#StableDiffusionXLLightning
 */
export class StableDiffusionXLLightning extends Node {
  /**
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#StableDiffusionXLLightning
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["StableDiffusionXLLightningIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#StableDiffusionXLLightning
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["StableDiffusionXLLightningOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["StableDiffusionXLLightningOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#StableDiffusionXLInpaint
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["StableDiffusionXLInpaintIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#StableDiffusionXLInpaint
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#StableDiffusionXLIPAdapter
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#StableDiffusionXLIPAdapter
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#StableDiffusionXLControlNet
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["StableDiffusionXLControlNetIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#StableDiffusionXLControlNet
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["StableDiffusionXLControlNetOut"] | undefined
  > {
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
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#FillMask
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["FillMaskIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#FillMask
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["FillMaskOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["FillMaskOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#BigLaMa
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["BigLaMaIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#BigLaMa
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["BigLaMaOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["BigLaMaOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#UpscaleImage
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["UpscaleImageIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#UpscaleImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["UpscaleImageOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["UpscaleImageOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#RealESRGAN
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["RealESRGANIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#RealESRGAN
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["RealESRGANOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["RealESRGANOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#RemoveBackground
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["RemoveBackgroundIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#RemoveBackground
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["RemoveBackgroundOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["RemoveBackgroundOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#DISISNet
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["DISISNetIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#DISISNet
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["DISISNetOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["DISISNetOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#SegmentUnderPoint
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["SegmentUnderPointIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#SegmentUnderPoint
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["SegmentUnderPointOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["SegmentUnderPointOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#SegmentAnything
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["SegmentAnythingIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#SegmentAnything
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["SegmentAnythingOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["SegmentAnythingOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#TranscribeMedia
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["TranscribeMediaIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#TranscribeMedia
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["TranscribeMediaOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["TranscribeMediaOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerateSpeech
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateSpeechIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerateSpeech
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["GenerateSpeechOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["GenerateSpeechOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#XTTSV2
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["XTTSV2In"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#XTTSV2
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["XTTSV2Out"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["XTTSV2Out"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#EmbedText
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["EmbedTextIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#EmbedText
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["EmbedTextOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["EmbedTextOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiEmbedText
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiEmbedTextIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiEmbedText
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["MultiEmbedTextOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["MultiEmbedTextOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#EmbedImage
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["EmbedImageIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#EmbedImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["EmbedImageOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["EmbedImageOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiEmbedImage
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiEmbedImageIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiEmbedImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["MultiEmbedImageOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["MultiEmbedImageOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#JinaV2
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["JinaV2In"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#JinaV2
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["JinaV2Out"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["JinaV2Out"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#CLIP
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["CLIPIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#CLIP
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["CLIPOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["CLIPOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#CreateVectorStore
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["CreateVectorStoreIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#CreateVectorStore
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["CreateVectorStoreOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["CreateVectorStoreOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#ListVectorStores
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["ListVectorStoresIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#ListVectorStores
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["ListVectorStoresOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["ListVectorStoresOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#DeleteVectorStore
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["DeleteVectorStoreIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#DeleteVectorStore
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["DeleteVectorStoreOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["DeleteVectorStoreOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#QueryVectorStore
   */
  constructor(
    args: AlsoAcceptFutures<
      OpenAPI.components["schemas"]["QueryVectorStoreIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#QueryVectorStore
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["QueryVectorStoreOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["QueryVectorStoreOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#FetchVectors
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["FetchVectorsIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#FetchVectors
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["FetchVectorsOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["FetchVectorsOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#UpdateVectors
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["UpdateVectorsIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#UpdateVectors
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["UpdateVectorsOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["UpdateVectorsOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
   * Input arguments: TODO
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#DeleteVectors
   */
  constructor(
    args: AlsoAcceptFutures<OpenAPI.components["schemas"]["DeleteVectorsIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#DeleteVectors
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["DeleteVectorsOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["DeleteVectorsOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: TODO
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
