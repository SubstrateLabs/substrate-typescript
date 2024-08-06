/**
 * 𐃏 Substrate
 * @generated file
 * 20240617.20240806
 */

import * as OpenAPI from "substrate/OpenAPI";
import { Node, Options } from "substrate/Node";
import {
  Trace,
  FutureString,
  FutureNumber,
  FutureBoolean,
  FutureArray,
  FutureObject,
  FutureAnyObject,
} from "substrate/Future";

// The following type helpers are used to "expand" Node input types to allow them to also accept
// instances of their corresponding "Future" types.

type FutureExpandScalar<T> = T extends string
  ? string | FutureString
  : T extends number
    ? number | FutureNumber
    : T extends boolean
      ? boolean | FutureBoolean
      : T;

type FutureExpandObject<T> = T extends object
  ? { [P in keyof T]: FutureExpandAny<T[P]> } | FutureObject
  : T;

type FutureExpandArray<T> = T extends (infer U)[]
  ? FutureExpandAny<U>[] | FutureArray
  : FutureExpandAny<T>;

type FutureExpandAny<T> = T extends (infer U)[][]
  ? FutureExpandArray<U>[][] | FutureArray[]
  : T extends (infer U)[]
    ? FutureExpandArray<U>[] | FutureArray
    : T extends object
      ? FutureExpandObject<T>
      : FutureExpandScalar<T>;

export class ExperimentalInArgs extends FutureAnyObject {}
export class ExperimentalOutOutput extends FutureAnyObject {}
/** Image prompts. */
export class ComputeTextInImageUris extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `ComputeTextInImageUris` once it's node has been run. */
  protected override async _result(): Promise<FutureString[]> {
    return super._result() as Promise<FutureString[]>;
  }
}
export class ComputeTextInImageUrisItem extends FutureString {}
export class ComputeJSONInJsonSchema extends FutureAnyObject {}
export class ComputeJSONOutJsonObject extends FutureAnyObject {}
/** Response choices. */
export class MultiComputeTextOutChoices extends FutureArray {
  /** Returns `ComputeTextOut` at given index. */
  override at(index: number) {
    return new ComputeTextOut(this._directive.next(index));
  }
  /** Returns the result for `MultiComputeTextOutChoices` once it's node has been run. */
  protected override async _result(): Promise<ComputeTextOut[]> {
    return super._result() as Promise<ComputeTextOut[]>;
  }
}
/** Batch input prompts. */
export class BatchComputeTextInPrompts extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `BatchComputeTextInPrompts` once it's node has been run. */
  protected override async _result(): Promise<FutureString[]> {
    return super._result() as Promise<FutureString[]>;
  }
}
export class BatchComputeTextInPromptsItem extends FutureString {}
/** Batch outputs. */
export class BatchComputeTextOutOutputs extends FutureArray {
  /** Returns `ComputeTextOut` at given index. */
  override at(index: number) {
    return new ComputeTextOut(this._directive.next(index));
  }
  /** Returns the result for `BatchComputeTextOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<ComputeTextOut[]> {
    return super._result() as Promise<ComputeTextOut[]>;
  }
}
export class MultiComputeJSONInJsonSchema extends FutureAnyObject {}
/** Response choices. */
export class MultiComputeJSONOutChoices extends FutureArray {
  /** Returns `ComputeJSONOut` at given index. */
  override at(index: number) {
    return new ComputeJSONOut(this._directive.next(index));
  }
  /** Returns the result for `MultiComputeJSONOutChoices` once it's node has been run. */
  protected override async _result(): Promise<ComputeJSONOut[]> {
    return super._result() as Promise<ComputeJSONOut[]>;
  }
}
/** Batch input prompts. */
export class BatchComputeJSONInPrompts extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `BatchComputeJSONInPrompts` once it's node has been run. */
  protected override async _result(): Promise<FutureString[]> {
    return super._result() as Promise<FutureString[]>;
  }
}
export class BatchComputeJSONInPromptsItem extends FutureString {}
export class BatchComputeJSONInJsonSchema extends FutureAnyObject {}
/** Batch outputs. */
export class BatchComputeJSONOutOutputs extends FutureArray {
  /** Returns `ComputeJSONOut` at given index. */
  override at(index: number) {
    return new ComputeJSONOut(this._directive.next(index));
  }
  /** Returns the result for `BatchComputeJSONOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<ComputeJSONOut[]> {
    return super._result() as Promise<ComputeJSONOut[]>;
  }
}
export class Mistral7BInstructInJsonSchema extends FutureAnyObject {}
export class Mistral7BInstructChoiceJsonObject extends FutureAnyObject {}
/** Response choices. */
export class Mistral7BInstructOutChoices extends FutureArray {
  /** Returns `Mistral7BInstructChoice` at given index. */
  override at(index: number) {
    return new Mistral7BInstructChoice(this._directive.next(index));
  }
  /** Returns the result for `Mistral7BInstructOutChoices` once it's node has been run. */
  protected override async _result(): Promise<Mistral7BInstructChoice[]> {
    return super._result() as Promise<Mistral7BInstructChoice[]>;
  }
}
export class Mixtral8x7BInstructInJsonSchema extends FutureAnyObject {}
export class Mixtral8x7BChoiceJsonObject extends FutureAnyObject {}
/** Response choices. */
export class Mixtral8x7BInstructOutChoices extends FutureArray {
  /** Returns `Mixtral8x7BChoice` at given index. */
  override at(index: number) {
    return new Mixtral8x7BChoice(this._directive.next(index));
  }
  /** Returns the result for `Mixtral8x7BInstructOutChoices` once it's node has been run. */
  protected override async _result(): Promise<Mixtral8x7BChoice[]> {
    return super._result() as Promise<Mixtral8x7BChoice[]>;
  }
}
export class Llama3Instruct8BInJsonSchema extends FutureAnyObject {}
export class Llama3Instruct8BChoiceJsonObject extends FutureAnyObject {}
/** Response choices. */
export class Llama3Instruct8BOutChoices extends FutureArray {
  /** Returns `Llama3Instruct8BChoice` at given index. */
  override at(index: number) {
    return new Llama3Instruct8BChoice(this._directive.next(index));
  }
  /** Returns the result for `Llama3Instruct8BOutChoices` once it's node has been run. */
  protected override async _result(): Promise<Llama3Instruct8BChoice[]> {
    return super._result() as Promise<Llama3Instruct8BChoice[]>;
  }
}
/** Response choices. */
export class Llama3Instruct70BOutChoices extends FutureArray {
  /** Returns `Llama3Instruct70BChoice` at given index. */
  override at(index: number) {
    return new Llama3Instruct70BChoice(this._directive.next(index));
  }
  /** Returns the result for `Llama3Instruct70BOutChoices` once it's node has been run. */
  protected override async _result(): Promise<Llama3Instruct70BChoice[]> {
    return super._result() as Promise<Llama3Instruct70BChoice[]>;
  }
}
/** Image prompts. */
export class Firellava13BInImageUris extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `Firellava13BInImageUris` once it's node has been run. */
  protected override async _result(): Promise<FutureString[]> {
    return super._result() as Promise<FutureString[]>;
  }
}
export class Firellava13BInImageUrisItem extends FutureString {}
/** Generated images. */
export class MultiGenerateImageOutOutputs extends FutureArray {
  /** Returns `GenerateImageOut` at given index. */
  override at(index: number) {
    return new GenerateImageOut(this._directive.next(index));
  }
  /** Returns the result for `MultiGenerateImageOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<GenerateImageOut[]> {
    return super._result() as Promise<GenerateImageOut[]>;
  }
}
/** Seeds for deterministic generation. Default is a random seed. */
export class StableDiffusionXLInSeeds extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLInSeeds` once it's node has been run. */
  protected override async _result(): Promise<FutureNumber[]> {
    return super._result() as Promise<FutureNumber[]>;
  }
}
export class StableDiffusionXLInSeedsItem extends FutureNumber {}
/** Generated images. */
export class StableDiffusionXLOutOutputs extends FutureArray {
  /** Returns `StableDiffusionImage` at given index. */
  override at(index: number) {
    return new StableDiffusionImage(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionImage[]> {
    return super._result() as Promise<StableDiffusionImage[]>;
  }
}
/** Seeds for deterministic generation. Default is a random seed. */
export class StableDiffusionXLLightningInSeeds extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLLightningInSeeds` once it's node has been run. */
  protected override async _result(): Promise<FutureNumber[]> {
    return super._result() as Promise<FutureNumber[]>;
  }
}
export class StableDiffusionXLLightningInSeedsItem extends FutureNumber {}
/** Generated images. */
export class StableDiffusionXLLightningOutOutputs extends FutureArray {
  /** Returns `StableDiffusionImage` at given index. */
  override at(index: number) {
    return new StableDiffusionImage(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLLightningOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionImage[]> {
    return super._result() as Promise<StableDiffusionImage[]>;
  }
}
/** Random noise seeds. Default is random seeds for each generation. */
export class StableDiffusionXLIPAdapterInSeeds extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLIPAdapterInSeeds` once it's node has been run. */
  protected override async _result(): Promise<FutureNumber[]> {
    return super._result() as Promise<FutureNumber[]>;
  }
}
export class StableDiffusionXLIPAdapterInSeedsItem extends FutureNumber {}
/** Generated images. */
export class StableDiffusionXLIPAdapterOutOutputs extends FutureArray {
  /** Returns `StableDiffusionImage` at given index. */
  override at(index: number) {
    return new StableDiffusionImage(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLIPAdapterOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionImage[]> {
    return super._result() as Promise<StableDiffusionImage[]>;
  }
}
/** Random noise seeds. Default is random seeds for each generation. */
export class StableDiffusionXLControlNetInSeeds extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLControlNetInSeeds` once it's node has been run. */
  protected override async _result(): Promise<FutureNumber[]> {
    return super._result() as Promise<FutureNumber[]>;
  }
}
export class StableDiffusionXLControlNetInSeedsItem extends FutureNumber {}
/** Generated images. */
export class StableDiffusionXLControlNetOutOutputs extends FutureArray {
  /** Returns `StableDiffusionImage` at given index. */
  override at(index: number) {
    return new StableDiffusionImage(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLControlNetOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionImage[]> {
    return super._result() as Promise<StableDiffusionImage[]>;
  }
}
/** Generated frames. */
export class StableVideoDiffusionOutFrameUris extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `StableVideoDiffusionOutFrameUris` once it's node has been run. */
  protected override async _result(): Promise<FutureString[]> {
    return super._result() as Promise<FutureString[]>;
  }
}
export class StableVideoDiffusionOutFrameUrisItem extends FutureString {}
/** Frames. */
export class InterpolateFramesInFrameUris extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `InterpolateFramesInFrameUris` once it's node has been run. */
  protected override async _result(): Promise<FutureString[]> {
    return super._result() as Promise<FutureString[]>;
  }
}
export class InterpolateFramesInFrameUrisItem extends FutureString {}
/** Output frames. */
export class InterpolateFramesOutFrameUris extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `InterpolateFramesOutFrameUris` once it's node has been run. */
  protected override async _result(): Promise<FutureString[]> {
    return super._result() as Promise<FutureString[]>;
  }
}
export class InterpolateFramesOutFrameUrisItem extends FutureString {}
/** Generated images. */
export class MultiInpaintImageOutOutputs extends FutureArray {
  /** Returns `InpaintImageOut` at given index. */
  override at(index: number) {
    return new InpaintImageOut(this._directive.next(index));
  }
  /** Returns the result for `MultiInpaintImageOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<InpaintImageOut[]> {
    return super._result() as Promise<InpaintImageOut[]>;
  }
}
/** Random noise seeds. Default is random seeds for each generation. */
export class StableDiffusionXLInpaintInSeeds extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLInpaintInSeeds` once it's node has been run. */
  protected override async _result(): Promise<FutureNumber[]> {
    return super._result() as Promise<FutureNumber[]>;
  }
}
export class StableDiffusionXLInpaintInSeedsItem extends FutureNumber {}
/** Generated images. */
export class StableDiffusionXLInpaintOutOutputs extends FutureArray {
  /** Returns `StableDiffusionImage` at given index. */
  override at(index: number) {
    return new StableDiffusionImage(this._directive.next(index));
  }
  /** Returns the result for `StableDiffusionXLInpaintOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionImage[]> {
    return super._result() as Promise<StableDiffusionImage[]>;
  }
}
/** Point prompts, to detect a segment under the point. One of `point_prompts` or `box_prompts` must be set. */
export class SegmentAnythingInPointPrompts extends FutureArray {
  /** Returns `Point` at given index. */
  override at(index: number) {
    return new Point(this._directive.next(index));
  }
  /** Returns the result for `SegmentAnythingInPointPrompts` once it's node has been run. */
  protected override async _result(): Promise<Point[]> {
    return super._result() as Promise<Point[]>;
  }
}
/** Box prompts, to detect a segment within the bounding box. One of `point_prompts` or `box_prompts` must be set. */
export class SegmentAnythingInBoxPrompts extends FutureArray {
  /** Returns `BoundingBox` at given index. */
  override at(index: number) {
    return new BoundingBox(this._directive.next(index));
  }
  /** Returns the result for `SegmentAnythingInBoxPrompts` once it's node has been run. */
  protected override async _result(): Promise<BoundingBox[]> {
    return super._result() as Promise<BoundingBox[]>;
  }
}
/** Aligned words, if `align` is enabled. */
export class TranscribedSegmentWords extends FutureArray {
  /** Returns `TranscribedWord` at given index. */
  override at(index: number) {
    return new TranscribedWord(this._directive.next(index));
  }
  /** Returns the result for `TranscribedSegmentWords` once it's node has been run. */
  protected override async _result(): Promise<TranscribedWord[]> {
    return super._result() as Promise<TranscribedWord[]>;
  }
}
/** Transcribed segments, if `segment` is enabled. */
export class TranscribeSpeechOutSegments extends FutureArray {
  /** Returns `TranscribedSegment` at given index. */
  override at(index: number) {
    return new TranscribedSegment(this._directive.next(index));
  }
  /** Returns the result for `TranscribeSpeechOutSegments` once it's node has been run. */
  protected override async _result(): Promise<TranscribedSegment[]> {
    return super._result() as Promise<TranscribedSegment[]>;
  }
}
/** Chapter markers, if `suggest_chapters` is enabled. */
export class TranscribeSpeechOutChapters extends FutureArray {
  /** Returns `ChapterMarker` at given index. */
  override at(index: number) {
    return new ChapterMarker(this._directive.next(index));
  }
  /** Returns the result for `TranscribeSpeechOutChapters` once it's node has been run. */
  protected override async _result(): Promise<ChapterMarker[]> {
    return super._result() as Promise<ChapterMarker[]>;
  }
}
/** Embedding vector. */
export class EmbeddingVector extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `EmbeddingVector` once it's node has been run. */
  protected override async _result(): Promise<FutureNumber[]> {
    return super._result() as Promise<FutureNumber[]>;
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
  protected override async _result(): Promise<FutureString[]> {
    return super._result() as Promise<FutureString[]>;
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
  protected override async _result(): Promise<EmbedTextItem[]> {
    return super._result() as Promise<EmbedTextItem[]>;
  }
}
/** Choose keys from `metadata` to embed with text. */
export class MultiEmbedTextInEmbeddedMetadataKeys extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `MultiEmbedTextInEmbeddedMetadataKeys` once it's node has been run. */
  protected override async _result(): Promise<FutureString[]> {
    return super._result() as Promise<FutureString[]>;
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
  protected override async _result(): Promise<Embedding[]> {
    return super._result() as Promise<Embedding[]>;
  }
}
/** Items to embed. */
export class JinaV2InItems extends FutureArray {
  /** Returns `EmbedTextItem` at given index. */
  override at(index: number) {
    return new EmbedTextItem(this._directive.next(index));
  }
  /** Returns the result for `JinaV2InItems` once it's node has been run. */
  protected override async _result(): Promise<EmbedTextItem[]> {
    return super._result() as Promise<EmbedTextItem[]>;
  }
}
/** Choose keys from `metadata` to embed with text. */
export class JinaV2InEmbeddedMetadataKeys extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `JinaV2InEmbeddedMetadataKeys` once it's node has been run. */
  protected override async _result(): Promise<FutureString[]> {
    return super._result() as Promise<FutureString[]>;
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
  protected override async _result(): Promise<Embedding[]> {
    return super._result() as Promise<Embedding[]>;
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
  protected override async _result(): Promise<EmbedImageItem[]> {
    return super._result() as Promise<EmbedImageItem[]>;
  }
}
/** Generated embeddings. */
export class MultiEmbedImageOutEmbeddings extends FutureArray {
  /** Returns `Embedding` at given index. */
  override at(index: number) {
    return new Embedding(this._directive.next(index));
  }
  /** Returns the result for `MultiEmbedImageOutEmbeddings` once it's node has been run. */
  protected override async _result(): Promise<Embedding[]> {
    return super._result() as Promise<Embedding[]>;
  }
}
/** Items to embed. */
export class CLIPInItems extends FutureArray {
  /** Returns `EmbedTextOrImageItem` at given index. */
  override at(index: number) {
    return new EmbedTextOrImageItem(this._directive.next(index));
  }
  /** Returns the result for `CLIPInItems` once it's node has been run. */
  protected override async _result(): Promise<EmbedTextOrImageItem[]> {
    return super._result() as Promise<EmbedTextOrImageItem[]>;
  }
}
/** Choose keys from `metadata` to embed with text. Only applies to text items. */
export class CLIPInEmbeddedMetadataKeys extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `CLIPInEmbeddedMetadataKeys` once it's node has been run. */
  protected override async _result(): Promise<FutureString[]> {
    return super._result() as Promise<FutureString[]>;
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
  protected override async _result(): Promise<Embedding[]> {
    return super._result() as Promise<Embedding[]>;
  }
}
/** List of vector stores. */
export class ListVectorStoresOutItems extends FutureArray {
  /** Returns `FindOrCreateVectorStoreOut` at given index. */
  override at(index: number) {
    return new FindOrCreateVectorStoreOut(this._directive.next(index));
  }
  /** Returns the result for `ListVectorStoresOutItems` once it's node has been run. */
  protected override async _result(): Promise<FindOrCreateVectorStoreOut[]> {
    return super._result() as Promise<FindOrCreateVectorStoreOut[]>;
  }
}
/** Embedding vector. */
export class VectorVector extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `VectorVector` once it's node has been run. */
  protected override async _result(): Promise<FutureNumber[]> {
    return super._result() as Promise<FutureNumber[]>;
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
  protected override async _result(): Promise<FutureString[]> {
    return super._result() as Promise<FutureString[]>;
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
  protected override async _result(): Promise<Vector[]> {
    return super._result() as Promise<Vector[]>;
  }
}
/** Embedding vector. */
export class UpdateVectorParamsVector extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `UpdateVectorParamsVector` once it's node has been run. */
  protected override async _result(): Promise<FutureNumber[]> {
    return super._result() as Promise<FutureNumber[]>;
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
  protected override async _result(): Promise<UpdateVectorParams[]> {
    return super._result() as Promise<UpdateVectorParams[]>;
  }
}
/** Document IDs to delete. */
export class DeleteVectorsInIds extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `DeleteVectorsInIds` once it's node has been run. */
  protected override async _result(): Promise<FutureString[]> {
    return super._result() as Promise<FutureString[]>;
  }
}
export class DeleteVectorsInIdsItem extends FutureString {}
/** Texts to embed and use for the query. */
export class QueryVectorStoreInQueryStrings extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `QueryVectorStoreInQueryStrings` once it's node has been run. */
  protected override async _result(): Promise<FutureString[]> {
    return super._result() as Promise<FutureString[]>;
  }
}
export class QueryVectorStoreInQueryStringsItem extends FutureString {}
/** Image URIs to embed and use for the query. */
export class QueryVectorStoreInQueryImageUris extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `QueryVectorStoreInQueryImageUris` once it's node has been run. */
  protected override async _result(): Promise<FutureString[]> {
    return super._result() as Promise<FutureString[]>;
  }
}
export class QueryVectorStoreInQueryImageUrisItem extends FutureString {}
/** Vectors to use for the query. */
export class QueryVectorStoreInQueryVectors extends FutureArray {
  /** Returns `QueryVectorStoreInQueryVectorsItem` at given index. */
  override at(index: number) {
    return new QueryVectorStoreInQueryVectorsItem(this._directive.next(index));
  }
  /** Returns the result for `QueryVectorStoreInQueryVectors` once it's node has been run. */
  protected override async _result(): Promise<QueryVectorStoreInQueryVectorsItem> {
    return super._result() as Promise<QueryVectorStoreInQueryVectorsItem>;
  }
}
/** QueryVectorStoreInQueryVectorsItem */
export class QueryVectorStoreInQueryVectorsItem extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `QueryVectorStoreInQueryVectorsItem` once it's node has been run. */
  protected override async _result(): Promise<FutureNumber[]> {
    return super._result() as Promise<FutureNumber[]>;
  }
}
/** Document IDs to use for the query. */
export class QueryVectorStoreInQueryIds extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `QueryVectorStoreInQueryIds` once it's node has been run. */
  protected override async _result(): Promise<FutureString[]> {
    return super._result() as Promise<FutureString[]>;
  }
}
export class QueryVectorStoreInQueryIdsItem extends FutureString {}
export class QueryVectorStoreInFilters extends FutureAnyObject {}
/** Embedding vector. */
export class VectorStoreQueryResultVector extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) {
    return new FutureNumber(this._directive.next(index));
  }
  /** Returns the result for `VectorStoreQueryResultVector` once it's node has been run. */
  protected override async _result(): Promise<FutureNumber[]> {
    return super._result() as Promise<FutureNumber[]>;
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
  protected override async _result(): Promise<QueryVectorStoreOutResultsItem> {
    return super._result() as Promise<QueryVectorStoreOutResultsItem>;
  }
}
/** QueryVectorStoreOutResultsItem */
export class QueryVectorStoreOutResultsItem extends FutureArray {
  /** Returns `VectorStoreQueryResult` at given index. */
  override at(index: number) {
    return new VectorStoreQueryResult(this._directive.next(index));
  }
  /** Returns the result for `QueryVectorStoreOutResultsItem` once it's node has been run. */
  protected override async _result(): Promise<VectorStoreQueryResult[]> {
    return super._result() as Promise<VectorStoreQueryResult[]>;
  }
}
export class SplitDocumentInMetadata extends FutureAnyObject {}
/** Document chunks */
export class SplitDocumentOutItems extends FutureArray {
  /** Returns `EmbedTextItem` at given index. */
  override at(index: number) {
    return new EmbedTextItem(this._directive.next(index));
  }
  /** Returns the result for `SplitDocumentOutItems` once it's node has been run. */
  protected override async _result(): Promise<EmbedTextItem[]> {
    return super._result() as Promise<EmbedTextItem[]>;
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
  /** (Optional) The HTTP status code for the error. */
  get status_code() {
    return new FutureNumber(this._directive.next("status_code"));
  }
  /** returns the result for `ErrorOut` once it's node has been run. */
  protected override async _result(): Promise<ErrorOut> {
    return super._result() as Promise<ErrorOut>;
  }
}
/** ExperimentalIn */
export class ExperimentalIn extends FutureObject {
  /** Identifier. */
  get name() {
    return new FutureString(this._directive.next("name"));
  }
  /** Arguments. */
  get args() {
    return new FutureAnyObject(this._directive.next("args"));
  }
  /** (Optional) Timeout in seconds. */
  get timeout() {
    return new FutureNumber(this._directive.next("timeout"));
  }
  /** returns the result for `ExperimentalIn` once it's node has been run. */
  protected override async _result(): Promise<ExperimentalIn> {
    return super._result() as Promise<ExperimentalIn>;
  }
}
/** ExperimentalOut */
export class ExperimentalOut extends FutureObject {
  /** Response. */
  get output() {
    return new FutureAnyObject(this._directive.next("output"));
  }
  /** returns the result for `ExperimentalOut` once it's node has been run. */
  protected override async _result(): Promise<ExperimentalOut> {
    return super._result() as Promise<ExperimentalOut>;
  }
}
/** BoxIn */
export class BoxIn extends FutureObject {
  /** Values to box. */
  get value() {
    return new FutureAnyObject(this._directive.next("value"));
  }
  /** returns the result for `BoxIn` once it's node has been run. */
  protected override async _result(): Promise<BoxIn> {
    return super._result() as Promise<BoxIn>;
  }
}
/** BoxOut */
export class BoxOut extends FutureObject {
  /** The evaluated result. */
  get value() {
    return new FutureAnyObject(this._directive.next("value"));
  }
  /** returns the result for `BoxOut` once it's node has been run. */
  protected override async _result(): Promise<BoxOut> {
    return super._result() as Promise<BoxOut>;
  }
}
/** IfIn */
export class IfIn extends FutureObject {
  /** Condition. */
  get condition() {
    return new FutureBoolean(this._directive.next("condition"));
  }

  /** Result when condition is true. */
  get value_if_true() {
    return new FutureAnyObject(this._directive.next("value_if_true"));
  }

  /** (Optional) Result when condition is false. */
  get value_if_false() {
    return new FutureAnyObject(this._directive.next("value_if_false"));
  }
  /** returns the result for `IfIn` once it's node has been run. */
  protected override async _result(): Promise<IfIn> {
    return super._result() as Promise<IfIn>;
  }
}
/** IfOut */
export class IfOut extends FutureObject {
  /** Result. Null if `value_if_false` is not provided and `condition` is false. */
  get result() {
    return new FutureAnyObject(this._directive.next("result"));
  }
  /** returns the result for `IfOut` once it's node has been run. */
  protected override async _result(): Promise<IfOut> {
    return super._result() as Promise<IfOut>;
  }
}
/** ComputeTextIn */
export class ComputeTextIn extends FutureObject {
  /** Input prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }

  /** (Optional) Image prompts. */
  get image_uris() {
    return new ComputeTextInImageUris(this._directive.next("image_uris"));
  }
  /** (Optional) Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() {
    return new FutureNumber(this._directive.next("temperature"));
  }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() {
    return new FutureNumber(this._directive.next("max_tokens"));
  }
  /** (Optional) Selected model. `Firellava13B` is automatically selected when `image_uris` is provided. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `ComputeTextIn` once it's node has been run. */
  protected override async _result(): Promise<ComputeTextIn> {
    return super._result() as Promise<ComputeTextIn>;
  }
}
/** ComputeTextOut */
export class ComputeTextOut extends FutureObject {
  /** Text response. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** returns the result for `ComputeTextOut` once it's node has been run. */
  protected override async _result(): Promise<ComputeTextOut> {
    return super._result() as Promise<ComputeTextOut>;
  }
}
/** ComputeJSONIn */
export class ComputeJSONIn extends FutureObject {
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
  /** (Optional) Selected model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `ComputeJSONIn` once it's node has been run. */
  protected override async _result(): Promise<ComputeJSONIn> {
    return super._result() as Promise<ComputeJSONIn>;
  }
}
/** ComputeJSONOut */
export class ComputeJSONOut extends FutureObject {
  /** JSON response. */
  get json_object() {
    return new FutureAnyObject(this._directive.next("json_object"));
  }
  /** If the model output could not be parsed to JSON, this is the raw text output. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** returns the result for `ComputeJSONOut` once it's node has been run. */
  protected override async _result(): Promise<ComputeJSONOut> {
    return super._result() as Promise<ComputeJSONOut>;
  }
}
/** MultiComputeTextIn */
export class MultiComputeTextIn extends FutureObject {
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
  /** (Optional) Selected model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `MultiComputeTextIn` once it's node has been run. */
  protected override async _result(): Promise<MultiComputeTextIn> {
    return super._result() as Promise<MultiComputeTextIn>;
  }
}
/** MultiComputeTextOut */
export class MultiComputeTextOut extends FutureObject {
  /** Response choices. */
  get choices() {
    return new MultiComputeTextOutChoices(this._directive.next("choices"));
  }
  /** returns the result for `MultiComputeTextOut` once it's node has been run. */
  protected override async _result(): Promise<MultiComputeTextOut> {
    return super._result() as Promise<MultiComputeTextOut>;
  }
}
/** BatchComputeTextIn */
export class BatchComputeTextIn extends FutureObject {
  /** Batch input prompts. */
  get prompts() {
    return new BatchComputeTextInPrompts(this._directive.next("prompts"));
  }
  /** (Optional) Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() {
    return new FutureNumber(this._directive.next("temperature"));
  }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() {
    return new FutureNumber(this._directive.next("max_tokens"));
  }
  /** (Optional) Selected model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `BatchComputeTextIn` once it's node has been run. */
  protected override async _result(): Promise<BatchComputeTextIn> {
    return super._result() as Promise<BatchComputeTextIn>;
  }
}
/** BatchComputeTextOut */
export class BatchComputeTextOut extends FutureObject {
  /** Batch outputs. */
  get outputs() {
    return new BatchComputeTextOutOutputs(this._directive.next("outputs"));
  }
  /** returns the result for `BatchComputeTextOut` once it's node has been run. */
  protected override async _result(): Promise<BatchComputeTextOut> {
    return super._result() as Promise<BatchComputeTextOut>;
  }
}
/** MultiComputeJSONIn */
export class MultiComputeJSONIn extends FutureObject {
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
  /** (Optional) Selected model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `MultiComputeJSONIn` once it's node has been run. */
  protected override async _result(): Promise<MultiComputeJSONIn> {
    return super._result() as Promise<MultiComputeJSONIn>;
  }
}
/** MultiComputeJSONOut */
export class MultiComputeJSONOut extends FutureObject {
  /** Response choices. */
  get choices() {
    return new MultiComputeJSONOutChoices(this._directive.next("choices"));
  }
  /** returns the result for `MultiComputeJSONOut` once it's node has been run. */
  protected override async _result(): Promise<MultiComputeJSONOut> {
    return super._result() as Promise<MultiComputeJSONOut>;
  }
}
/** BatchComputeJSONIn */
export class BatchComputeJSONIn extends FutureObject {
  /** Batch input prompts. */
  get prompts() {
    return new BatchComputeJSONInPrompts(this._directive.next("prompts"));
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
  /** (Optional) Selected model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `BatchComputeJSONIn` once it's node has been run. */
  protected override async _result(): Promise<BatchComputeJSONIn> {
    return super._result() as Promise<BatchComputeJSONIn>;
  }
}
/** BatchComputeJSONOut */
export class BatchComputeJSONOut extends FutureObject {
  /** Batch outputs. */
  get outputs() {
    return new BatchComputeJSONOutOutputs(this._directive.next("outputs"));
  }
  /** returns the result for `BatchComputeJSONOut` once it's node has been run. */
  protected override async _result(): Promise<BatchComputeJSONOut> {
    return super._result() as Promise<BatchComputeJSONOut>;
  }
}
/** Mistral7BInstructIn */
export class Mistral7BInstructIn extends FutureObject {
  /** Input prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** (Optional) System prompt. */
  get system_prompt() {
    return new FutureString(this._directive.next("system_prompt"));
  }
  /** (Optional) Number of choices to generate. */
  get num_choices() {
    return new FutureNumber(this._directive.next("num_choices"));
  }
  /** (Optional) JSON schema to guide response. */
  get json_schema() {
    return new FutureAnyObject(this._directive.next("json_schema"));
  }
  /** (Optional) Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() {
    return new FutureNumber(this._directive.next("temperature"));
  }
  /** (Optional) Higher values decrease the likelihood of repeating previous tokens. */
  get frequency_penalty() {
    return new FutureNumber(this._directive.next("frequency_penalty"));
  }
  /** (Optional) Higher values decrease the likelihood of repeated sequences. */
  get repetition_penalty() {
    return new FutureNumber(this._directive.next("repetition_penalty"));
  }
  /** (Optional) Higher values increase the likelihood of new topics appearing. */
  get presence_penalty() {
    return new FutureNumber(this._directive.next("presence_penalty"));
  }
  /** (Optional) Probability below which less likely tokens are filtered out. */
  get top_p() {
    return new FutureNumber(this._directive.next("top_p"));
  }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() {
    return new FutureNumber(this._directive.next("max_tokens"));
  }
  /** returns the result for `Mistral7BInstructIn` once it's node has been run. */
  protected override async _result(): Promise<Mistral7BInstructIn> {
    return super._result() as Promise<Mistral7BInstructIn>;
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
  protected override async _result(): Promise<Mistral7BInstructChoice> {
    return super._result() as Promise<Mistral7BInstructChoice>;
  }
}
/** Mistral7BInstructOut */
export class Mistral7BInstructOut extends FutureObject {
  /** Response choices. */
  get choices() {
    return new Mistral7BInstructOutChoices(this._directive.next("choices"));
  }
  /** returns the result for `Mistral7BInstructOut` once it's node has been run. */
  protected override async _result(): Promise<Mistral7BInstructOut> {
    return super._result() as Promise<Mistral7BInstructOut>;
  }
}
/** Mixtral8x7BInstructIn */
export class Mixtral8x7BInstructIn extends FutureObject {
  /** Input prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** (Optional) System prompt. */
  get system_prompt() {
    return new FutureString(this._directive.next("system_prompt"));
  }
  /** (Optional) Number of choices to generate. */
  get num_choices() {
    return new FutureNumber(this._directive.next("num_choices"));
  }
  /** (Optional) JSON schema to guide response. */
  get json_schema() {
    return new FutureAnyObject(this._directive.next("json_schema"));
  }
  /** (Optional) Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() {
    return new FutureNumber(this._directive.next("temperature"));
  }
  /** (Optional) Higher values decrease the likelihood of repeating previous tokens. */
  get frequency_penalty() {
    return new FutureNumber(this._directive.next("frequency_penalty"));
  }
  /** (Optional) Higher values decrease the likelihood of repeated sequences. */
  get repetition_penalty() {
    return new FutureNumber(this._directive.next("repetition_penalty"));
  }
  /** (Optional) Higher values increase the likelihood of new topics appearing. */
  get presence_penalty() {
    return new FutureNumber(this._directive.next("presence_penalty"));
  }
  /** (Optional) Probability below which less likely tokens are filtered out. */
  get top_p() {
    return new FutureNumber(this._directive.next("top_p"));
  }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() {
    return new FutureNumber(this._directive.next("max_tokens"));
  }
  /** returns the result for `Mixtral8x7BInstructIn` once it's node has been run. */
  protected override async _result(): Promise<Mixtral8x7BInstructIn> {
    return super._result() as Promise<Mixtral8x7BInstructIn>;
  }
}
/** Mixtral8x7BChoice */
export class Mixtral8x7BChoice extends FutureObject {
  /** Text response, if `json_schema` was not provided. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** JSON response, if `json_schema` was provided. */
  get json_object() {
    return new FutureAnyObject(this._directive.next("json_object"));
  }
  /** returns the result for `Mixtral8x7BChoice` once it's node has been run. */
  protected override async _result(): Promise<Mixtral8x7BChoice> {
    return super._result() as Promise<Mixtral8x7BChoice>;
  }
}
/** Mixtral8x7BInstructOut */
export class Mixtral8x7BInstructOut extends FutureObject {
  /** Response choices. */
  get choices() {
    return new Mixtral8x7BInstructOutChoices(this._directive.next("choices"));
  }
  /** returns the result for `Mixtral8x7BInstructOut` once it's node has been run. */
  protected override async _result(): Promise<Mixtral8x7BInstructOut> {
    return super._result() as Promise<Mixtral8x7BInstructOut>;
  }
}
/** Llama3Instruct8BIn */
export class Llama3Instruct8BIn extends FutureObject {
  /** Input prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** (Optional) System prompt. */
  get system_prompt() {
    return new FutureString(this._directive.next("system_prompt"));
  }
  /** (Optional) Number of choices to generate. */
  get num_choices() {
    return new FutureNumber(this._directive.next("num_choices"));
  }
  /** (Optional) Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() {
    return new FutureNumber(this._directive.next("temperature"));
  }
  /** (Optional) Higher values decrease the likelihood of repeating previous tokens. */
  get frequency_penalty() {
    return new FutureNumber(this._directive.next("frequency_penalty"));
  }
  /** (Optional) Higher values decrease the likelihood of repeated sequences. */
  get repetition_penalty() {
    return new FutureNumber(this._directive.next("repetition_penalty"));
  }
  /** (Optional) Higher values increase the likelihood of new topics appearing. */
  get presence_penalty() {
    return new FutureNumber(this._directive.next("presence_penalty"));
  }
  /** (Optional) Probability below which less likely tokens are filtered out. */
  get top_p() {
    return new FutureNumber(this._directive.next("top_p"));
  }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() {
    return new FutureNumber(this._directive.next("max_tokens"));
  }
  /** (Optional) JSON schema to guide response. */
  get json_schema() {
    return new FutureAnyObject(this._directive.next("json_schema"));
  }
  /** returns the result for `Llama3Instruct8BIn` once it's node has been run. */
  protected override async _result(): Promise<Llama3Instruct8BIn> {
    return super._result() as Promise<Llama3Instruct8BIn>;
  }
}
/** Llama3Instruct8BChoice */
export class Llama3Instruct8BChoice extends FutureObject {
  /** Text response. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** JSON response, if `json_schema` was provided. */
  get json_object() {
    return new FutureAnyObject(this._directive.next("json_object"));
  }
  /** returns the result for `Llama3Instruct8BChoice` once it's node has been run. */
  protected override async _result(): Promise<Llama3Instruct8BChoice> {
    return super._result() as Promise<Llama3Instruct8BChoice>;
  }
}
/** Llama3Instruct8BOut */
export class Llama3Instruct8BOut extends FutureObject {
  /** Response choices. */
  get choices() {
    return new Llama3Instruct8BOutChoices(this._directive.next("choices"));
  }
  /** returns the result for `Llama3Instruct8BOut` once it's node has been run. */
  protected override async _result(): Promise<Llama3Instruct8BOut> {
    return super._result() as Promise<Llama3Instruct8BOut>;
  }
}
/** Llama3Instruct70BIn */
export class Llama3Instruct70BIn extends FutureObject {
  /** Input prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** (Optional) System prompt. */
  get system_prompt() {
    return new FutureString(this._directive.next("system_prompt"));
  }
  /** (Optional) Number of choices to generate. */
  get num_choices() {
    return new FutureNumber(this._directive.next("num_choices"));
  }
  /** (Optional) Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() {
    return new FutureNumber(this._directive.next("temperature"));
  }
  /** (Optional) Higher values decrease the likelihood of repeating previous tokens. */
  get frequency_penalty() {
    return new FutureNumber(this._directive.next("frequency_penalty"));
  }
  /** (Optional) Higher values decrease the likelihood of repeated sequences. */
  get repetition_penalty() {
    return new FutureNumber(this._directive.next("repetition_penalty"));
  }
  /** (Optional) Higher values increase the likelihood of new topics appearing. */
  get presence_penalty() {
    return new FutureNumber(this._directive.next("presence_penalty"));
  }
  /** (Optional) Probability below which less likely tokens are filtered out. */
  get top_p() {
    return new FutureNumber(this._directive.next("top_p"));
  }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() {
    return new FutureNumber(this._directive.next("max_tokens"));
  }
  /** returns the result for `Llama3Instruct70BIn` once it's node has been run. */
  protected override async _result(): Promise<Llama3Instruct70BIn> {
    return super._result() as Promise<Llama3Instruct70BIn>;
  }
}
/** Llama3Instruct70BChoice */
export class Llama3Instruct70BChoice extends FutureObject {
  /** Text response. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** returns the result for `Llama3Instruct70BChoice` once it's node has been run. */
  protected override async _result(): Promise<Llama3Instruct70BChoice> {
    return super._result() as Promise<Llama3Instruct70BChoice>;
  }
}
/** Llama3Instruct70BOut */
export class Llama3Instruct70BOut extends FutureObject {
  /** Response choices. */
  get choices() {
    return new Llama3Instruct70BOutChoices(this._directive.next("choices"));
  }
  /** returns the result for `Llama3Instruct70BOut` once it's node has been run. */
  protected override async _result(): Promise<Llama3Instruct70BOut> {
    return super._result() as Promise<Llama3Instruct70BOut>;
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
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() {
    return new FutureNumber(this._directive.next("max_tokens"));
  }
  /** returns the result for `Firellava13BIn` once it's node has been run. */
  protected override async _result(): Promise<Firellava13BIn> {
    return super._result() as Promise<Firellava13BIn>;
  }
}
/** Firellava13BOut */
export class Firellava13BOut extends FutureObject {
  /** Text response. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** returns the result for `Firellava13BOut` once it's node has been run. */
  protected override async _result(): Promise<Firellava13BOut> {
    return super._result() as Promise<Firellava13BOut>;
  }
}
/** GenerateImageIn */
export class GenerateImageIn extends FutureObject {
  /** Text prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `GenerateImageIn` once it's node has been run. */
  protected override async _result(): Promise<GenerateImageIn> {
    return super._result() as Promise<GenerateImageIn>;
  }
}
/** GenerateImageOut */
export class GenerateImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `GenerateImageOut` once it's node has been run. */
  protected override async _result(): Promise<GenerateImageOut> {
    return super._result() as Promise<GenerateImageOut>;
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `MultiGenerateImageIn` once it's node has been run. */
  protected override async _result(): Promise<MultiGenerateImageIn> {
    return super._result() as Promise<MultiGenerateImageIn>;
  }
}
/** MultiGenerateImageOut */
export class MultiGenerateImageOut extends FutureObject {
  /** Generated images. */
  get outputs() {
    return new MultiGenerateImageOutOutputs(this._directive.next("outputs"));
  }
  /** returns the result for `MultiGenerateImageOut` once it's node has been run. */
  protected override async _result(): Promise<MultiGenerateImageOut> {
    return super._result() as Promise<MultiGenerateImageOut>;
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
  /** Number of images to generate. */
  get num_images() {
    return new FutureNumber(this._directive.next("num_images"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the image data will be returned as a base64-encoded string. */
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
  protected override async _result(): Promise<StableDiffusionXLIn> {
    return super._result() as Promise<StableDiffusionXLIn>;
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
  protected override async _result(): Promise<StableDiffusionImage> {
    return super._result() as Promise<StableDiffusionImage>;
  }
}
/** StableDiffusionXLOut */
export class StableDiffusionXLOut extends FutureObject {
  /** Generated images. */
  get outputs() {
    return new StableDiffusionXLOutOutputs(this._directive.next("outputs"));
  }
  /** returns the result for `StableDiffusionXLOut` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionXLOut> {
    return super._result() as Promise<StableDiffusionXLOut>;
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the image data will be returned as a base64-encoded string. */
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
  protected override async _result(): Promise<StableDiffusionXLLightningIn> {
    return super._result() as Promise<StableDiffusionXLLightningIn>;
  }
}
/** StableDiffusionXLLightningOut */
export class StableDiffusionXLLightningOut extends FutureObject {
  /** Generated images. */
  get outputs() {
    return new StableDiffusionXLLightningOutOutputs(
      this._directive.next("outputs"),
    );
  }
  /** returns the result for `StableDiffusionXLLightningOut` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionXLLightningOut> {
    return super._result() as Promise<StableDiffusionXLLightningOut>;
  }
}
/** StableDiffusionXLIPAdapterIn */
export class StableDiffusionXLIPAdapterIn extends FutureObject {
  /** Text prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** Image prompt. */
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the image data will be returned as a base64-encoded string. */
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
  protected override async _result(): Promise<StableDiffusionXLIPAdapterIn> {
    return super._result() as Promise<StableDiffusionXLIPAdapterIn>;
  }
}
/** StableDiffusionXLIPAdapterOut */
export class StableDiffusionXLIPAdapterOut extends FutureObject {
  /** Generated images. */
  get outputs() {
    return new StableDiffusionXLIPAdapterOutOutputs(
      this._directive.next("outputs"),
    );
  }
  /** returns the result for `StableDiffusionXLIPAdapterOut` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionXLIPAdapterOut> {
    return super._result() as Promise<StableDiffusionXLIPAdapterOut>;
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Controls the influence of the input image on the generated output. */
  get conditioning_scale() {
    return new FutureNumber(this._directive.next("conditioning_scale"));
  }
  /** (Optional) Controls how much to transform the input image. */
  get strength() {
    return new FutureNumber(this._directive.next("strength"));
  }

  /** (Optional) Random noise seeds. Default is random seeds for each generation. */
  get seeds() {
    return new StableDiffusionXLControlNetInSeeds(
      this._directive.next("seeds"),
    );
  }
  /** returns the result for `StableDiffusionXLControlNetIn` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionXLControlNetIn> {
    return super._result() as Promise<StableDiffusionXLControlNetIn>;
  }
}
/** StableDiffusionXLControlNetOut */
export class StableDiffusionXLControlNetOut extends FutureObject {
  /** Generated images. */
  get outputs() {
    return new StableDiffusionXLControlNetOutOutputs(
      this._directive.next("outputs"),
    );
  }
  /** returns the result for `StableDiffusionXLControlNetOut` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionXLControlNetOut> {
    return super._result() as Promise<StableDiffusionXLControlNetOut>;
  }
}
/** StableVideoDiffusionIn */
export class StableVideoDiffusionIn extends FutureObject {
  /** Original image. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** (Optional) Use "hosted" to return a video URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the video data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Output video format. */
  get output_format() {
    return new FutureString(this._directive.next("output_format"));
  }
  /** (Optional) Seed for deterministic generation. Default is a random seed. */
  get seed() {
    return new FutureNumber(this._directive.next("seed"));
  }
  /** (Optional) Frames per second of the generated video. Ignored if output format is `frames`. */
  get fps() {
    return new FutureNumber(this._directive.next("fps"));
  }
  /** (Optional) The motion bucket id to use for the generated video. This can be used to control the motion of the generated video. Increasing the motion bucket id increases the motion of the generated video. */
  get motion_bucket_id() {
    return new FutureNumber(this._directive.next("motion_bucket_id"));
  }
  /** (Optional) The amount of noise added to the conditioning image. The higher the values the less the video resembles the conditioning image. Increasing this value also increases the motion of the generated video. */
  get noise() {
    return new FutureNumber(this._directive.next("noise"));
  }
  /** returns the result for `StableVideoDiffusionIn` once it's node has been run. */
  protected override async _result(): Promise<StableVideoDiffusionIn> {
    return super._result() as Promise<StableVideoDiffusionIn>;
  }
}
/** StableVideoDiffusionOut */
export class StableVideoDiffusionOut extends FutureObject {
  /** Generated video. */
  get video_uri() {
    return new FutureString(this._directive.next("video_uri"));
  }

  /** Generated frames. */
  get frame_uris() {
    return new StableVideoDiffusionOutFrameUris(
      this._directive.next("frame_uris"),
    );
  }
  /** returns the result for `StableVideoDiffusionOut` once it's node has been run. */
  protected override async _result(): Promise<StableVideoDiffusionOut> {
    return super._result() as Promise<StableVideoDiffusionOut>;
  }
}
/** InterpolateFramesIn */
export class InterpolateFramesIn extends FutureObject {
  /** Frames. */
  get frame_uris() {
    return new InterpolateFramesInFrameUris(this._directive.next("frame_uris"));
  }
  /** (Optional) Use "hosted" to return a video URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the video data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** (Optional) Output video format. */
  get output_format() {
    return new FutureString(this._directive.next("output_format"));
  }
  /** (Optional) Frames per second of the generated video. Ignored if output format is `frames`. */
  get fps() {
    return new FutureNumber(this._directive.next("fps"));
  }
  /** (Optional) Number of interpolation steps. Each step adds an interpolated frame between adjacent frames. For example, 2 steps over 2 frames produces 5 frames. */
  get num_steps() {
    return new FutureNumber(this._directive.next("num_steps"));
  }
  /** returns the result for `InterpolateFramesIn` once it's node has been run. */
  protected override async _result(): Promise<InterpolateFramesIn> {
    return super._result() as Promise<InterpolateFramesIn>;
  }
}
/** InterpolateFramesOut */
export class InterpolateFramesOut extends FutureObject {
  /** Generated video. */
  get video_uri() {
    return new FutureString(this._directive.next("video_uri"));
  }

  /** Output frames. */
  get frame_uris() {
    return new InterpolateFramesOutFrameUris(
      this._directive.next("frame_uris"),
    );
  }
  /** returns the result for `InterpolateFramesOut` once it's node has been run. */
  protected override async _result(): Promise<InterpolateFramesOut> {
    return super._result() as Promise<InterpolateFramesOut>;
  }
}
/** InpaintImageIn */
export class InpaintImageIn extends FutureObject {
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `InpaintImageIn` once it's node has been run. */
  protected override async _result(): Promise<InpaintImageIn> {
    return super._result() as Promise<InpaintImageIn>;
  }
}
/** InpaintImageOut */
export class InpaintImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `InpaintImageOut` once it's node has been run. */
  protected override async _result(): Promise<InpaintImageOut> {
    return super._result() as Promise<InpaintImageOut>;
  }
}
/** MultiInpaintImageIn */
export class MultiInpaintImageIn extends FutureObject {
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `MultiInpaintImageIn` once it's node has been run. */
  protected override async _result(): Promise<MultiInpaintImageIn> {
    return super._result() as Promise<MultiInpaintImageIn>;
  }
}
/** MultiInpaintImageOut */
export class MultiInpaintImageOut extends FutureObject {
  /** Generated images. */
  get outputs() {
    return new MultiInpaintImageOutOutputs(this._directive.next("outputs"));
  }
  /** returns the result for `MultiInpaintImageOut` once it's node has been run. */
  protected override async _result(): Promise<MultiInpaintImageOut> {
    return super._result() as Promise<MultiInpaintImageOut>;
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the image data will be returned as a base64-encoded string. */
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
  protected override async _result(): Promise<StableDiffusionXLInpaintIn> {
    return super._result() as Promise<StableDiffusionXLInpaintIn>;
  }
}
/** StableDiffusionXLInpaintOut */
export class StableDiffusionXLInpaintOut extends FutureObject {
  /** Generated images. */
  get outputs() {
    return new StableDiffusionXLInpaintOutOutputs(
      this._directive.next("outputs"),
    );
  }
  /** returns the result for `StableDiffusionXLInpaintOut` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionXLInpaintOut> {
    return super._result() as Promise<StableDiffusionXLInpaintOut>;
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
  protected override async _result(): Promise<BoundingBox> {
    return super._result() as Promise<BoundingBox>;
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
  protected override async _result(): Promise<Point> {
    return super._result() as Promise<Point>;
  }
}
/** EraseImageIn */
export class EraseImageIn extends FutureObject {
  /** Input image. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** Mask image that controls which pixels are inpainted. */
  get mask_image_uri() {
    return new FutureString(this._directive.next("mask_image_uri"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `EraseImageIn` once it's node has been run. */
  protected override async _result(): Promise<EraseImageIn> {
    return super._result() as Promise<EraseImageIn>;
  }
}
/** EraseImageOut */
export class EraseImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `EraseImageOut` once it's node has been run. */
  protected override async _result(): Promise<EraseImageOut> {
    return super._result() as Promise<EraseImageOut>;
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `BigLaMaIn` once it's node has been run. */
  protected override async _result(): Promise<BigLaMaIn> {
    return super._result() as Promise<BigLaMaIn>;
  }
}
/** BigLaMaOut */
export class BigLaMaOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `BigLaMaOut` once it's node has been run. */
  protected override async _result(): Promise<BigLaMaOut> {
    return super._result() as Promise<BigLaMaOut>;
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
  /** (Optional) Invert the mask image. Only takes effect if `return_mask` is true. */
  get invert_mask() {
    return new FutureBoolean(this._directive.next("invert_mask"));
  }
  /** (Optional) Hex value background color. Transparent if unset. */
  get background_color() {
    return new FutureString(this._directive.next("background_color"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `RemoveBackgroundIn` once it's node has been run. */
  protected override async _result(): Promise<RemoveBackgroundIn> {
    return super._result() as Promise<RemoveBackgroundIn>;
  }
}
/** RemoveBackgroundOut */
export class RemoveBackgroundOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `RemoveBackgroundOut` once it's node has been run. */
  protected override async _result(): Promise<RemoveBackgroundOut> {
    return super._result() as Promise<RemoveBackgroundOut>;
  }
}
/** DISISNetIn */
export class DISISNetIn extends FutureObject {
  /** Input image. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `DISISNetIn` once it's node has been run. */
  protected override async _result(): Promise<DISISNetIn> {
    return super._result() as Promise<DISISNetIn>;
  }
}
/** DISISNetOut */
export class DISISNetOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `DISISNetOut` once it's node has been run. */
  protected override async _result(): Promise<DISISNetOut> {
    return super._result() as Promise<DISISNetOut>;
  }
}
/** UpscaleImageIn */
export class UpscaleImageIn extends FutureObject {
  /** (Optional) Prompt to guide model on the content of image to upscale. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }
  /** Input image. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** (Optional) Resolution of the output image, in pixels. */
  get output_resolution() {
    return new FutureNumber(this._directive.next("output_resolution"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `UpscaleImageIn` once it's node has been run. */
  protected override async _result(): Promise<UpscaleImageIn> {
    return super._result() as Promise<UpscaleImageIn>;
  }
}
/** UpscaleImageOut */
export class UpscaleImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `UpscaleImageOut` once it's node has been run. */
  protected override async _result(): Promise<UpscaleImageOut> {
    return super._result() as Promise<UpscaleImageOut>;
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `SegmentUnderPointIn` once it's node has been run. */
  protected override async _result(): Promise<SegmentUnderPointIn> {
    return super._result() as Promise<SegmentUnderPointIn>;
  }
}
/** SegmentUnderPointOut */
export class SegmentUnderPointOut extends FutureObject {
  /** Detected segments in 'mask image' format. Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get mask_image_uri() {
    return new FutureString(this._directive.next("mask_image_uri"));
  }
  /** returns the result for `SegmentUnderPointOut` once it's node has been run. */
  protected override async _result(): Promise<SegmentUnderPointOut> {
    return super._result() as Promise<SegmentUnderPointOut>;
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `SegmentAnythingIn` once it's node has been run. */
  protected override async _result(): Promise<SegmentAnythingIn> {
    return super._result() as Promise<SegmentAnythingIn>;
  }
}
/** SegmentAnythingOut */
export class SegmentAnythingOut extends FutureObject {
  /** Detected segments in 'mask image' format. Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get mask_image_uri() {
    return new FutureString(this._directive.next("mask_image_uri"));
  }
  /** returns the result for `SegmentAnythingOut` once it's node has been run. */
  protected override async _result(): Promise<SegmentAnythingOut> {
    return super._result() as Promise<SegmentAnythingOut>;
  }
}
/** TranscribeSpeechIn */
export class TranscribeSpeechIn extends FutureObject {
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
  /** returns the result for `TranscribeSpeechIn` once it's node has been run. */
  protected override async _result(): Promise<TranscribeSpeechIn> {
    return super._result() as Promise<TranscribeSpeechIn>;
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
  protected override async _result(): Promise<TranscribedWord> {
    return super._result() as Promise<TranscribedWord>;
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
  protected override async _result(): Promise<TranscribedSegment> {
    return super._result() as Promise<TranscribedSegment>;
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
  protected override async _result(): Promise<ChapterMarker> {
    return super._result() as Promise<ChapterMarker>;
  }
}
/** TranscribeSpeechOut */
export class TranscribeSpeechOut extends FutureObject {
  /** Transcribed text. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }

  /** (Optional) Transcribed segments, if `segment` is enabled. */
  get segments() {
    return new TranscribeSpeechOutSegments(this._directive.next("segments"));
  }

  /** (Optional) Chapter markers, if `suggest_chapters` is enabled. */
  get chapters() {
    return new TranscribeSpeechOutChapters(this._directive.next("chapters"));
  }
  /** returns the result for `TranscribeSpeechOut` once it's node has been run. */
  protected override async _result(): Promise<TranscribeSpeechOut> {
    return super._result() as Promise<TranscribeSpeechOut>;
  }
}
/** GenerateSpeechIn */
export class GenerateSpeechIn extends FutureObject {
  /** Input text. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** (Optional) Use "hosted" to return an audio URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the audio data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `GenerateSpeechIn` once it's node has been run. */
  protected override async _result(): Promise<GenerateSpeechIn> {
    return super._result() as Promise<GenerateSpeechIn>;
  }
}
/** GenerateSpeechOut */
export class GenerateSpeechOut extends FutureObject {
  /** Base 64-encoded WAV audio bytes, or a hosted audio url if `store` is provided. */
  get audio_uri() {
    return new FutureString(this._directive.next("audio_uri"));
  }
  /** returns the result for `GenerateSpeechOut` once it's node has been run. */
  protected override async _result(): Promise<GenerateSpeechOut> {
    return super._result() as Promise<GenerateSpeechOut>;
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
  /** (Optional) Use "hosted" to return an audio URL hosted on Substrate. You can also provide a URL to a registered [file store](https://docs.substrate.run/reference/external-files). If unset, the audio data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `XTTSV2In` once it's node has been run. */
  protected override async _result(): Promise<XTTSV2In> {
    return super._result() as Promise<XTTSV2In>;
  }
}
/** XTTSV2Out */
export class XTTSV2Out extends FutureObject {
  /** Base 64-encoded WAV audio bytes, or a hosted audio url if `store` is provided. */
  get audio_uri() {
    return new FutureString(this._directive.next("audio_uri"));
  }
  /** returns the result for `XTTSV2Out` once it's node has been run. */
  protected override async _result(): Promise<XTTSV2Out> {
    return super._result() as Promise<XTTSV2Out>;
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
  protected override async _result(): Promise<Embedding> {
    return super._result() as Promise<Embedding>;
  }
}
/** EmbedTextIn */
export class EmbedTextIn extends FutureObject {
  /** Text to embed. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** (Optional) Vector store name. */
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }
  /** (Optional) Metadata that can be used to query the vector store. Ignored if `collection_name` is unset. */
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
  /** (Optional) Selected embedding model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `EmbedTextIn` once it's node has been run. */
  protected override async _result(): Promise<EmbedTextIn> {
    return super._result() as Promise<EmbedTextIn>;
  }
}
/** EmbedTextOut */
export class EmbedTextOut extends FutureObject {
  /** Generated embedding. */
  get embedding() {
    return new Embedding(this._directive.next("embedding"));
  }
  /** returns the result for `EmbedTextOut` once it's node has been run. */
  protected override async _result(): Promise<EmbedTextOut> {
    return super._result() as Promise<EmbedTextOut>;
  }
}
/** EmbedTextItem */
export class EmbedTextItem extends FutureObject {
  /** Text to embed. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** (Optional) Metadata that can be used to query the vector store. Ignored if `collection_name` is unset. */
  get metadata() {
    return new FutureAnyObject(this._directive.next("metadata"));
  }
  /** (Optional) Vector store document ID. Ignored if `collection_name` is unset. */
  get doc_id() {
    return new FutureString(this._directive.next("doc_id"));
  }
  /** returns the result for `EmbedTextItem` once it's node has been run. */
  protected override async _result(): Promise<EmbedTextItem> {
    return super._result() as Promise<EmbedTextItem>;
  }
}
/** MultiEmbedTextIn */
export class MultiEmbedTextIn extends FutureObject {
  /** Items to embed. */
  get items() {
    return new MultiEmbedTextInItems(this._directive.next("items"));
  }
  /** (Optional) Vector store name. */
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }

  /** (Optional) Choose keys from `metadata` to embed with text. */
  get embedded_metadata_keys() {
    return new MultiEmbedTextInEmbeddedMetadataKeys(
      this._directive.next("embedded_metadata_keys"),
    );
  }
  /** (Optional) Selected embedding model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `MultiEmbedTextIn` once it's node has been run. */
  protected override async _result(): Promise<MultiEmbedTextIn> {
    return super._result() as Promise<MultiEmbedTextIn>;
  }
}
/** MultiEmbedTextOut */
export class MultiEmbedTextOut extends FutureObject {
  /** Generated embeddings. */
  get embeddings() {
    return new MultiEmbedTextOutEmbeddings(this._directive.next("embeddings"));
  }
  /** returns the result for `MultiEmbedTextOut` once it's node has been run. */
  protected override async _result(): Promise<MultiEmbedTextOut> {
    return super._result() as Promise<MultiEmbedTextOut>;
  }
}
/** JinaV2In */
export class JinaV2In extends FutureObject {
  /** Items to embed. */
  get items() {
    return new JinaV2InItems(this._directive.next("items"));
  }
  /** (Optional) Vector store name. */
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }

  /** (Optional) Choose keys from `metadata` to embed with text. */
  get embedded_metadata_keys() {
    return new JinaV2InEmbeddedMetadataKeys(
      this._directive.next("embedded_metadata_keys"),
    );
  }
  /** returns the result for `JinaV2In` once it's node has been run. */
  protected override async _result(): Promise<JinaV2In> {
    return super._result() as Promise<JinaV2In>;
  }
}
/** JinaV2Out */
export class JinaV2Out extends FutureObject {
  /** Generated embeddings. */
  get embeddings() {
    return new JinaV2OutEmbeddings(this._directive.next("embeddings"));
  }
  /** returns the result for `JinaV2Out` once it's node has been run. */
  protected override async _result(): Promise<JinaV2Out> {
    return super._result() as Promise<JinaV2Out>;
  }
}
/** EmbedImageIn */
export class EmbedImageIn extends FutureObject {
  /** Image to embed. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** (Optional) Vector store name. */
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }
  /** (Optional) Vector store document ID. Ignored if `collection_name` is unset. */
  get doc_id() {
    return new FutureString(this._directive.next("doc_id"));
  }
  /** (Optional) Selected embedding model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `EmbedImageIn` once it's node has been run. */
  protected override async _result(): Promise<EmbedImageIn> {
    return super._result() as Promise<EmbedImageIn>;
  }
}
/** EmbedImageOut */
export class EmbedImageOut extends FutureObject {
  /** Generated embedding. */
  get embedding() {
    return new Embedding(this._directive.next("embedding"));
  }
  /** returns the result for `EmbedImageOut` once it's node has been run. */
  protected override async _result(): Promise<EmbedImageOut> {
    return super._result() as Promise<EmbedImageOut>;
  }
}
/** EmbedImageItem */
export class EmbedImageItem extends FutureObject {
  /** Image to embed. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** (Optional) Vector store document ID. Ignored if `collection_name` is unset. */
  get doc_id() {
    return new FutureString(this._directive.next("doc_id"));
  }
  /** returns the result for `EmbedImageItem` once it's node has been run. */
  protected override async _result(): Promise<EmbedImageItem> {
    return super._result() as Promise<EmbedImageItem>;
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
  /** Metadata that can be used to query the vector store. Ignored if `collection_name` is unset. */
  get metadata() {
    return new FutureAnyObject(this._directive.next("metadata"));
  }
  /** Vector store document ID. Ignored if `collection_name` is unset. */
  get doc_id() {
    return new FutureString(this._directive.next("doc_id"));
  }
  /** returns the result for `EmbedTextOrImageItem` once it's node has been run. */
  protected override async _result(): Promise<EmbedTextOrImageItem> {
    return super._result() as Promise<EmbedTextOrImageItem>;
  }
}
/** MultiEmbedImageIn */
export class MultiEmbedImageIn extends FutureObject {
  /** Items to embed. */
  get items() {
    return new MultiEmbedImageInItems(this._directive.next("items"));
  }
  /** (Optional) Vector store name. */
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }
  /** (Optional) Selected embedding model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `MultiEmbedImageIn` once it's node has been run. */
  protected override async _result(): Promise<MultiEmbedImageIn> {
    return super._result() as Promise<MultiEmbedImageIn>;
  }
}
/** MultiEmbedImageOut */
export class MultiEmbedImageOut extends FutureObject {
  /** Generated embeddings. */
  get embeddings() {
    return new MultiEmbedImageOutEmbeddings(this._directive.next("embeddings"));
  }
  /** returns the result for `MultiEmbedImageOut` once it's node has been run. */
  protected override async _result(): Promise<MultiEmbedImageOut> {
    return super._result() as Promise<MultiEmbedImageOut>;
  }
}
/** CLIPIn */
export class CLIPIn extends FutureObject {
  /** Items to embed. */
  get items() {
    return new CLIPInItems(this._directive.next("items"));
  }
  /** (Optional) Vector store name. */
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }

  /** (Optional) Choose keys from `metadata` to embed with text. Only applies to text items. */
  get embedded_metadata_keys() {
    return new CLIPInEmbeddedMetadataKeys(
      this._directive.next("embedded_metadata_keys"),
    );
  }
  /** returns the result for `CLIPIn` once it's node has been run. */
  protected override async _result(): Promise<CLIPIn> {
    return super._result() as Promise<CLIPIn>;
  }
}
/** CLIPOut */
export class CLIPOut extends FutureObject {
  /** Generated embeddings. */
  get embeddings() {
    return new CLIPOutEmbeddings(this._directive.next("embeddings"));
  }
  /** returns the result for `CLIPOut` once it's node has been run. */
  protected override async _result(): Promise<CLIPOut> {
    return super._result() as Promise<CLIPOut>;
  }
}
/** FindOrCreateVectorStoreIn */
export class FindOrCreateVectorStoreIn extends FutureObject {
  /** Vector store name. */
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }
  /** Selected embedding model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `FindOrCreateVectorStoreIn` once it's node has been run. */
  protected override async _result(): Promise<FindOrCreateVectorStoreIn> {
    return super._result() as Promise<FindOrCreateVectorStoreIn>;
  }
}
/** FindOrCreateVectorStoreOut */
export class FindOrCreateVectorStoreOut extends FutureObject {
  /** Vector store name. */
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }
  /** Selected embedding model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** (Optional) Number of leaves in the vector store. */
  get num_leaves() {
    return new FutureNumber(this._directive.next("num_leaves"));
  }
  /** returns the result for `FindOrCreateVectorStoreOut` once it's node has been run. */
  protected override async _result(): Promise<FindOrCreateVectorStoreOut> {
    return super._result() as Promise<FindOrCreateVectorStoreOut>;
  }
}
/** ListVectorStoresIn */
export class ListVectorStoresIn extends FutureObject {
  /** returns the result for `ListVectorStoresIn` once it's node has been run. */
  protected override async _result(): Promise<ListVectorStoresIn> {
    return super._result() as Promise<ListVectorStoresIn>;
  }
}
/** ListVectorStoresOut */
export class ListVectorStoresOut extends FutureObject {
  /** List of vector stores. */
  get items() {
    return new ListVectorStoresOutItems(this._directive.next("items"));
  }
  /** returns the result for `ListVectorStoresOut` once it's node has been run. */
  protected override async _result(): Promise<ListVectorStoresOut> {
    return super._result() as Promise<ListVectorStoresOut>;
  }
}
/** DeleteVectorStoreIn */
export class DeleteVectorStoreIn extends FutureObject {
  /** Vector store name. */
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }
  /** Selected embedding model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `DeleteVectorStoreIn` once it's node has been run. */
  protected override async _result(): Promise<DeleteVectorStoreIn> {
    return super._result() as Promise<DeleteVectorStoreIn>;
  }
}
/** DeleteVectorStoreOut */
export class DeleteVectorStoreOut extends FutureObject {
  /** Vector store name. */
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }
  /** Selected embedding model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `DeleteVectorStoreOut` once it's node has been run. */
  protected override async _result(): Promise<DeleteVectorStoreOut> {
    return super._result() as Promise<DeleteVectorStoreOut>;
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
  protected override async _result(): Promise<Vector> {
    return super._result() as Promise<Vector>;
  }
}
/** FetchVectorsIn */
export class FetchVectorsIn extends FutureObject {
  /** Vector store name. */
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }
  /** Selected embedding model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }

  /** Document IDs to retrieve. */
  get ids() {
    return new FetchVectorsInIds(this._directive.next("ids"));
  }
  /** returns the result for `FetchVectorsIn` once it's node has been run. */
  protected override async _result(): Promise<FetchVectorsIn> {
    return super._result() as Promise<FetchVectorsIn>;
  }
}
/** FetchVectorsOut */
export class FetchVectorsOut extends FutureObject {
  /** Retrieved vectors. */
  get vectors() {
    return new FetchVectorsOutVectors(this._directive.next("vectors"));
  }
  /** returns the result for `FetchVectorsOut` once it's node has been run. */
  protected override async _result(): Promise<FetchVectorsOut> {
    return super._result() as Promise<FetchVectorsOut>;
  }
}
/** UpdateVectorsOut */
export class UpdateVectorsOut extends FutureObject {
  /** Number of vectors modified. */
  get count() {
    return new FutureNumber(this._directive.next("count"));
  }
  /** returns the result for `UpdateVectorsOut` once it's node has been run. */
  protected override async _result(): Promise<UpdateVectorsOut> {
    return super._result() as Promise<UpdateVectorsOut>;
  }
}
/** DeleteVectorsOut */
export class DeleteVectorsOut extends FutureObject {
  /** Number of vectors modified. */
  get count() {
    return new FutureNumber(this._directive.next("count"));
  }
  /** returns the result for `DeleteVectorsOut` once it's node has been run. */
  protected override async _result(): Promise<DeleteVectorsOut> {
    return super._result() as Promise<DeleteVectorsOut>;
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
  protected override async _result(): Promise<UpdateVectorParams> {
    return super._result() as Promise<UpdateVectorParams>;
  }
}
/** UpdateVectorsIn */
export class UpdateVectorsIn extends FutureObject {
  /** Vector store name. */
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }
  /** Selected embedding model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }

  /** Vectors to upsert. */
  get vectors() {
    return new UpdateVectorsInVectors(this._directive.next("vectors"));
  }
  /** returns the result for `UpdateVectorsIn` once it's node has been run. */
  protected override async _result(): Promise<UpdateVectorsIn> {
    return super._result() as Promise<UpdateVectorsIn>;
  }
}
/** DeleteVectorsIn */
export class DeleteVectorsIn extends FutureObject {
  /** Vector store name. */
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }
  /** Selected embedding model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }

  /** Document IDs to delete. */
  get ids() {
    return new DeleteVectorsInIds(this._directive.next("ids"));
  }
  /** returns the result for `DeleteVectorsIn` once it's node has been run. */
  protected override async _result(): Promise<DeleteVectorsIn> {
    return super._result() as Promise<DeleteVectorsIn>;
  }
}
/** QueryVectorStoreIn */
export class QueryVectorStoreIn extends FutureObject {
  /** Vector store to query against. */
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }
  /** Selected embedding model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }

  /** (Optional) Texts to embed and use for the query. */
  get query_strings() {
    return new QueryVectorStoreInQueryStrings(
      this._directive.next("query_strings"),
    );
  }

  /** (Optional) Image URIs to embed and use for the query. */
  get query_image_uris() {
    return new QueryVectorStoreInQueryImageUris(
      this._directive.next("query_image_uris"),
    );
  }

  /** (Optional) Vectors to use for the query. */
  get query_vectors() {
    return new QueryVectorStoreInQueryVectors(
      this._directive.next("query_vectors"),
    );
  }

  /** (Optional) Document IDs to use for the query. */
  get query_ids() {
    return new QueryVectorStoreInQueryIds(this._directive.next("query_ids"));
  }
  /** (Optional) Number of results to return. */
  get top_k() {
    return new FutureNumber(this._directive.next("top_k"));
  }
  /** (Optional) The size of the dynamic candidate list for searching the index graph. */
  get ef_search() {
    return new FutureNumber(this._directive.next("ef_search"));
  }
  /** (Optional) The number of leaves in the index tree to search. */
  get num_leaves_to_search() {
    return new FutureNumber(this._directive.next("num_leaves_to_search"));
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
  /** returns the result for `QueryVectorStoreIn` once it's node has been run. */
  protected override async _result(): Promise<QueryVectorStoreIn> {
    return super._result() as Promise<QueryVectorStoreIn>;
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
  protected override async _result(): Promise<VectorStoreQueryResult> {
    return super._result() as Promise<VectorStoreQueryResult>;
  }
}
/** QueryVectorStoreOut */
export class QueryVectorStoreOut extends FutureObject {
  /** Query results. */
  get results() {
    return new QueryVectorStoreOutResults(this._directive.next("results"));
  }
  /** (Optional) Vector store name. */
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }
  /** (Optional) Selected embedding model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `QueryVectorStoreOut` once it's node has been run. */
  protected override async _result(): Promise<QueryVectorStoreOut> {
    return super._result() as Promise<QueryVectorStoreOut>;
  }
}
/** SplitDocumentIn */
export class SplitDocumentIn extends FutureObject {
  /** URI of the document. */
  get uri() {
    return new FutureString(this._directive.next("uri"));
  }
  /** (Optional) Document ID. */
  get doc_id() {
    return new FutureString(this._directive.next("doc_id"));
  }
  /** (Optional) Document metadata. */
  get metadata() {
    return new FutureAnyObject(this._directive.next("metadata"));
  }
  /** (Optional) Maximum number of units per chunk. Defaults to 1024 tokens for text or 40 lines for code. */
  get chunk_size() {
    return new FutureNumber(this._directive.next("chunk_size"));
  }
  /** (Optional) Number of units to overlap between chunks. Defaults to 200 tokens for text or 15 lines for code. */
  get chunk_overlap() {
    return new FutureNumber(this._directive.next("chunk_overlap"));
  }
  /** returns the result for `SplitDocumentIn` once it's node has been run. */
  protected override async _result(): Promise<SplitDocumentIn> {
    return super._result() as Promise<SplitDocumentIn>;
  }
}
/** SplitDocumentOut */
export class SplitDocumentOut extends FutureObject {
  /** Document chunks */
  get items() {
    return new SplitDocumentOutItems(this._directive.next("items"));
  }
  /** returns the result for `SplitDocumentOut` once it's node has been run. */
  protected override async _result(): Promise<SplitDocumentOut> {
    return super._result() as Promise<SplitDocumentOut>;
  }
}
export namespace Experimental {
  /**
   * Experimental Input
   * https://www.substrate.run/nodes#Experimental
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["ExperimentalIn"]
  >;

  /**
   * Experimental Output
   * https://www.substrate.run/nodes#Experimental
   */
  export type Output = OpenAPI.components["schemas"]["ExperimentalOut"];
}

/**
 * Experimental node.
 *
 * https://www.substrate.run/nodes#Experimental
 */
export class Experimental extends Node {
  /**
   * Input arguments: `name`, `args`, `timeout` (optional)
   *
   * Output fields: `output`
   *
   * https://www.substrate.run/nodes#Experimental
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["ExperimentalIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "Experimental";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `output`
   *
   * https://www.substrate.run/nodes#Experimental
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["ExperimentalOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["ExperimentalOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `output`
   *
   * https://www.substrate.run/nodes#Experimental
   */
  override get future(): ExperimentalOut {
    return new ExperimentalOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["ExperimentalOut"] {
    return super.output() as OpenAPI.components["schemas"]["ExperimentalOut"];
  }
}
export namespace Box {
  /**
   * Box Input
   * https://www.substrate.run/nodes#Box
   */
  export type Input = FutureExpandAny<OpenAPI.components["schemas"]["BoxIn"]>;

  /**
   * Box Output
   * https://www.substrate.run/nodes#Box
   */
  export type Output = OpenAPI.components["schemas"]["BoxOut"];
}

/**
 * Combine multiple values into a single output.
 *
 * https://www.substrate.run/nodes#Box
 */
export class Box extends Node {
  /**
   * Input arguments: `value`
   *
   * Output fields: `value`
   *
   * https://www.substrate.run/nodes#Box
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["BoxIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "Box";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `value`
   *
   * https://www.substrate.run/nodes#Box
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["BoxOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["BoxOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `value`
   *
   * https://www.substrate.run/nodes#Box
   */
  override get future(): BoxOut {
    return new BoxOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["BoxOut"] {
    return super.output() as OpenAPI.components["schemas"]["BoxOut"];
  }
}
export namespace If {
  /**
   * If Input
   * https://www.substrate.run/nodes#If
   */
  export type Input = FutureExpandAny<OpenAPI.components["schemas"]["IfIn"]>;

  /**
   * If Output
   * https://www.substrate.run/nodes#If
   */
  export type Output = OpenAPI.components["schemas"]["IfOut"];
}

/**
 * Return one of two options based on a condition.
 *
 * https://www.substrate.run/nodes#If
 */
export class If extends Node {
  /**
   * Input arguments: `condition`, `value_if_true`, `value_if_false` (optional)
   *
   * Output fields: `result`
   *
   * https://www.substrate.run/nodes#If
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["IfIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "LogicalIf";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `result`
   *
   * https://www.substrate.run/nodes#If
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["IfOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["IfOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `result`
   *
   * https://www.substrate.run/nodes#If
   */
  override get future(): IfOut {
    return new IfOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["IfOut"] {
    return super.output() as OpenAPI.components["schemas"]["IfOut"];
  }
}
export namespace ComputeText {
  /**
   * ComputeText Input
   * https://www.substrate.run/nodes#ComputeText
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["ComputeTextIn"]
  >;

  /**
   * ComputeText Output
   * https://www.substrate.run/nodes#ComputeText
   */
  export type Output = OpenAPI.components["schemas"]["ComputeTextOut"];
}

/**
 * Compute text using a language model.
 *
 * https://www.substrate.run/nodes#ComputeText
 */
export class ComputeText extends Node {
  /**
   * Input arguments: `prompt`, `image_uris` (optional), `temperature` (optional), `max_tokens` (optional), `model` (optional)
   *
   * Output fields: `text`
   *
   * https://www.substrate.run/nodes#ComputeText
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["ComputeTextIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "ComputeText";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `text`
   *
   * https://www.substrate.run/nodes#ComputeText
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["ComputeTextOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["ComputeTextOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `text`
   *
   * https://www.substrate.run/nodes#ComputeText
   */
  override get future(): ComputeTextOut {
    return new ComputeTextOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["ComputeTextOut"] {
    return super.output() as OpenAPI.components["schemas"]["ComputeTextOut"];
  }
}
export namespace MultiComputeText {
  /**
   * MultiComputeText Input
   * https://www.substrate.run/nodes#MultiComputeText
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["MultiComputeTextIn"]
  >;

  /**
   * MultiComputeText Output
   * https://www.substrate.run/nodes#MultiComputeText
   */
  export type Output = OpenAPI.components["schemas"]["MultiComputeTextOut"];
}

/**
 * Generate multiple text choices using a language model.
 *
 * https://www.substrate.run/nodes#MultiComputeText
 */
export class MultiComputeText extends Node {
  /**
   * Input arguments: `prompt`, `num_choices`, `temperature` (optional), `max_tokens` (optional), `model` (optional)
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#MultiComputeText
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["MultiComputeTextIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "MultiComputeText";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#MultiComputeText
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["MultiComputeTextOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["MultiComputeTextOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#MultiComputeText
   */
  override get future(): MultiComputeTextOut {
    return new MultiComputeTextOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["MultiComputeTextOut"] {
    return super.output() as OpenAPI.components["schemas"]["MultiComputeTextOut"];
  }
}
export namespace BatchComputeText {
  /**
   * BatchComputeText Input
   * https://www.substrate.run/nodes#BatchComputeText
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["BatchComputeTextIn"]
  >;

  /**
   * BatchComputeText Output
   * https://www.substrate.run/nodes#BatchComputeText
   */
  export type Output = OpenAPI.components["schemas"]["BatchComputeTextOut"];
}

/**
 * Compute text for multiple prompts in batch using a language model.
 *
 * https://www.substrate.run/nodes#BatchComputeText
 */
export class BatchComputeText extends Node {
  /**
   * Input arguments: `prompts`, `temperature` (optional), `max_tokens` (optional), `model` (optional)
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#BatchComputeText
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["BatchComputeTextIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "BatchComputeText";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#BatchComputeText
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["BatchComputeTextOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["BatchComputeTextOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#BatchComputeText
   */
  override get future(): BatchComputeTextOut {
    return new BatchComputeTextOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["BatchComputeTextOut"] {
    return super.output() as OpenAPI.components["schemas"]["BatchComputeTextOut"];
  }
}
export namespace BatchComputeJSON {
  /**
   * BatchComputeJSON Input
   * https://www.substrate.run/nodes#BatchComputeJSON
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["BatchComputeJSONIn"]
  >;

  /**
   * BatchComputeJSON Output
   * https://www.substrate.run/nodes#BatchComputeJSON
   */
  export type Output = OpenAPI.components["schemas"]["BatchComputeJSONOut"];
}

/**
 * Compute JSON for multiple prompts in batch using a language model.
 *
 * https://www.substrate.run/nodes#BatchComputeJSON
 */
export class BatchComputeJSON extends Node {
  /**
   * Input arguments: `prompts`, `json_schema`, `temperature` (optional), `max_tokens` (optional), `model` (optional)
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#BatchComputeJSON
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["BatchComputeJSONIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "BatchComputeJSON";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#BatchComputeJSON
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["BatchComputeJSONOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["BatchComputeJSONOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#BatchComputeJSON
   */
  override get future(): BatchComputeJSONOut {
    return new BatchComputeJSONOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["BatchComputeJSONOut"] {
    return super.output() as OpenAPI.components["schemas"]["BatchComputeJSONOut"];
  }
}
export namespace ComputeJSON {
  /**
   * ComputeJSON Input
   * https://www.substrate.run/nodes#ComputeJSON
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["ComputeJSONIn"]
  >;

  /**
   * ComputeJSON Output
   * https://www.substrate.run/nodes#ComputeJSON
   */
  export type Output = OpenAPI.components["schemas"]["ComputeJSONOut"];
}

/**
 * Compute JSON using a language model.
 *
 * https://www.substrate.run/nodes#ComputeJSON
 */
export class ComputeJSON extends Node {
  /**
   * Input arguments: `prompt`, `json_schema`, `temperature` (optional), `max_tokens` (optional), `model` (optional)
   *
   * Output fields: `json_object` (optional), `text` (optional)
   *
   * https://www.substrate.run/nodes#ComputeJSON
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["ComputeJSONIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "ComputeJSON";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `json_object` (optional), `text` (optional)
   *
   * https://www.substrate.run/nodes#ComputeJSON
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["ComputeJSONOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["ComputeJSONOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `json_object` (optional), `text` (optional)
   *
   * https://www.substrate.run/nodes#ComputeJSON
   */
  override get future(): ComputeJSONOut {
    return new ComputeJSONOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["ComputeJSONOut"] {
    return super.output() as OpenAPI.components["schemas"]["ComputeJSONOut"];
  }
}
export namespace MultiComputeJSON {
  /**
   * MultiComputeJSON Input
   * https://www.substrate.run/nodes#MultiComputeJSON
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["MultiComputeJSONIn"]
  >;

  /**
   * MultiComputeJSON Output
   * https://www.substrate.run/nodes#MultiComputeJSON
   */
  export type Output = OpenAPI.components["schemas"]["MultiComputeJSONOut"];
}

/**
 * Compute multiple JSON choices using a language model.
 *
 * https://www.substrate.run/nodes#MultiComputeJSON
 */
export class MultiComputeJSON extends Node {
  /**
   * Input arguments: `prompt`, `json_schema`, `num_choices`, `temperature` (optional), `max_tokens` (optional), `model` (optional)
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#MultiComputeJSON
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["MultiComputeJSONIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "MultiComputeJSON";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#MultiComputeJSON
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["MultiComputeJSONOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["MultiComputeJSONOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#MultiComputeJSON
   */
  override get future(): MultiComputeJSONOut {
    return new MultiComputeJSONOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["MultiComputeJSONOut"] {
    return super.output() as OpenAPI.components["schemas"]["MultiComputeJSONOut"];
  }
}
export namespace Mistral7BInstruct {
  /**
   * Mistral7BInstruct Input
   * https://www.substrate.run/nodes#Mistral7BInstruct
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["Mistral7BInstructIn"]
  >;

  /**
   * Mistral7BInstruct Output
   * https://www.substrate.run/nodes#Mistral7BInstruct
   */
  export type Output = OpenAPI.components["schemas"]["Mistral7BInstructOut"];
}

/**
 * Compute text using [Mistral 7B Instruct](https://mistral.ai/news/announcing-mistral-7b).
 *
 * https://www.substrate.run/nodes#Mistral7BInstruct
 */
export class Mistral7BInstruct extends Node {
  /**
   * Input arguments: `prompt`, `system_prompt` (optional), `num_choices` (optional), `json_schema` (optional), `temperature` (optional), `frequency_penalty` (optional), `repetition_penalty` (optional), `presence_penalty` (optional), `top_p` (optional), `max_tokens` (optional)
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#Mistral7BInstruct
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["Mistral7BInstructIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "Mistral7BInstruct";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#Mistral7BInstruct
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
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#Mistral7BInstruct
   */
  override get future(): Mistral7BInstructOut {
    return new Mistral7BInstructOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["Mistral7BInstructOut"] {
    return super.output() as OpenAPI.components["schemas"]["Mistral7BInstructOut"];
  }
}
export namespace Mixtral8x7BInstruct {
  /**
   * Mixtral8x7BInstruct Input
   * https://www.substrate.run/nodes#Mixtral8x7BInstruct
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["Mixtral8x7BInstructIn"]
  >;

  /**
   * Mixtral8x7BInstruct Output
   * https://www.substrate.run/nodes#Mixtral8x7BInstruct
   */
  export type Output = OpenAPI.components["schemas"]["Mixtral8x7BInstructOut"];
}

/**
 * Compute text using instruct-tuned [Mixtral 8x7B](https://mistral.ai/news/mixtral-of-experts/).
 *
 * https://www.substrate.run/nodes#Mixtral8x7BInstruct
 */
export class Mixtral8x7BInstruct extends Node {
  /**
   * Input arguments: `prompt`, `system_prompt` (optional), `num_choices` (optional), `json_schema` (optional), `temperature` (optional), `frequency_penalty` (optional), `repetition_penalty` (optional), `presence_penalty` (optional), `top_p` (optional), `max_tokens` (optional)
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#Mixtral8x7BInstruct
   */
  constructor(
    args: FutureExpandAny<
      OpenAPI.components["schemas"]["Mixtral8x7BInstructIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
    this.node = "Mixtral8x7BInstruct";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#Mixtral8x7BInstruct
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["Mixtral8x7BInstructOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["Mixtral8x7BInstructOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#Mixtral8x7BInstruct
   */
  override get future(): Mixtral8x7BInstructOut {
    return new Mixtral8x7BInstructOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["Mixtral8x7BInstructOut"] {
    return super.output() as OpenAPI.components["schemas"]["Mixtral8x7BInstructOut"];
  }
}
export namespace Llama3Instruct8B {
  /**
   * Llama3Instruct8B Input
   * https://www.substrate.run/nodes#Llama3Instruct8B
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["Llama3Instruct8BIn"]
  >;

  /**
   * Llama3Instruct8B Output
   * https://www.substrate.run/nodes#Llama3Instruct8B
   */
  export type Output = OpenAPI.components["schemas"]["Llama3Instruct8BOut"];
}

/**
 * Compute text using instruct-tuned [Llama 3 8B](https://llama.meta.com/llama3/).
 *
 * https://www.substrate.run/nodes#Llama3Instruct8B
 */
export class Llama3Instruct8B extends Node {
  /**
   * Input arguments: `prompt`, `system_prompt` (optional), `num_choices` (optional), `temperature` (optional), `frequency_penalty` (optional), `repetition_penalty` (optional), `presence_penalty` (optional), `top_p` (optional), `max_tokens` (optional), `json_schema` (optional)
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#Llama3Instruct8B
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["Llama3Instruct8BIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "Llama3Instruct8B";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#Llama3Instruct8B
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["Llama3Instruct8BOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["Llama3Instruct8BOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#Llama3Instruct8B
   */
  override get future(): Llama3Instruct8BOut {
    return new Llama3Instruct8BOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["Llama3Instruct8BOut"] {
    return super.output() as OpenAPI.components["schemas"]["Llama3Instruct8BOut"];
  }
}
export namespace Llama3Instruct70B {
  /**
   * Llama3Instruct70B Input
   * https://www.substrate.run/nodes#Llama3Instruct70B
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["Llama3Instruct70BIn"]
  >;

  /**
   * Llama3Instruct70B Output
   * https://www.substrate.run/nodes#Llama3Instruct70B
   */
  export type Output = OpenAPI.components["schemas"]["Llama3Instruct70BOut"];
}

/**
 * Compute text using instruct-tuned [Llama 3 70B](https://llama.meta.com/llama3/).
 *
 * https://www.substrate.run/nodes#Llama3Instruct70B
 */
export class Llama3Instruct70B extends Node {
  /**
   * Input arguments: `prompt`, `system_prompt` (optional), `num_choices` (optional), `temperature` (optional), `frequency_penalty` (optional), `repetition_penalty` (optional), `presence_penalty` (optional), `top_p` (optional), `max_tokens` (optional)
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#Llama3Instruct70B
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["Llama3Instruct70BIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "Llama3Instruct70B";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#Llama3Instruct70B
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["Llama3Instruct70BOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["Llama3Instruct70BOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#Llama3Instruct70B
   */
  override get future(): Llama3Instruct70BOut {
    return new Llama3Instruct70BOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["Llama3Instruct70BOut"] {
    return super.output() as OpenAPI.components["schemas"]["Llama3Instruct70BOut"];
  }
}
export namespace Firellava13B {
  /**
   * Firellava13B Input
   * https://www.substrate.run/nodes#Firellava13B
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["Firellava13BIn"]
  >;

  /**
   * Firellava13B Output
   * https://www.substrate.run/nodes#Firellava13B
   */
  export type Output = OpenAPI.components["schemas"]["Firellava13BOut"];
}

/**
 * Compute text with image input using [FireLLaVA 13B](https://fireworks.ai/blog/firellava-the-first-commercially-permissive-oss-llava-model).
 *
 * https://www.substrate.run/nodes#Firellava13B
 */
export class Firellava13B extends Node {
  /**
   * Input arguments: `prompt`, `image_uris`, `max_tokens` (optional)
   *
   * Output fields: `text`
   *
   * https://www.substrate.run/nodes#Firellava13B
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["Firellava13BIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "Firellava13B";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `text`
   *
   * https://www.substrate.run/nodes#Firellava13B
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
   * Output fields: `text`
   *
   * https://www.substrate.run/nodes#Firellava13B
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
   * https://www.substrate.run/nodes#GenerateImage
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["GenerateImageIn"]
  >;

  /**
   * GenerateImage Output
   * https://www.substrate.run/nodes#GenerateImage
   */
  export type Output = OpenAPI.components["schemas"]["GenerateImageOut"];
}

/**
 * Generate an image.
 *
 * https://www.substrate.run/nodes#GenerateImage
 */
export class GenerateImage extends Node {
  /**
   * Input arguments: `prompt`, `store` (optional)
   *
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#GenerateImage
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["GenerateImageIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "GenerateImage";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#GenerateImage
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
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#GenerateImage
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
   * https://www.substrate.run/nodes#MultiGenerateImage
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["MultiGenerateImageIn"]
  >;

  /**
   * MultiGenerateImage Output
   * https://www.substrate.run/nodes#MultiGenerateImage
   */
  export type Output = OpenAPI.components["schemas"]["MultiGenerateImageOut"];
}

/**
 * Generate multiple images.
 *
 * https://www.substrate.run/nodes#MultiGenerateImage
 */
export class MultiGenerateImage extends Node {
  /**
   * Input arguments: `prompt`, `num_images`, `store` (optional)
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#MultiGenerateImage
   */
  constructor(
    args: FutureExpandAny<
      OpenAPI.components["schemas"]["MultiGenerateImageIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
    this.node = "MultiGenerateImage";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#MultiGenerateImage
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
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#MultiGenerateImage
   */
  override get future(): MultiGenerateImageOut {
    return new MultiGenerateImageOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["MultiGenerateImageOut"] {
    return super.output() as OpenAPI.components["schemas"]["MultiGenerateImageOut"];
  }
}
export namespace InpaintImage {
  /**
   * InpaintImage Input
   * https://www.substrate.run/nodes#InpaintImage
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["InpaintImageIn"]
  >;

  /**
   * InpaintImage Output
   * https://www.substrate.run/nodes#InpaintImage
   */
  export type Output = OpenAPI.components["schemas"]["InpaintImageOut"];
}

/**
 * Edit an image using image generation inside part of the image or the full image.
 *
 * https://www.substrate.run/nodes#InpaintImage
 */
export class InpaintImage extends Node {
  /**
   * Input arguments: `image_uri`, `prompt`, `mask_image_uri` (optional), `store` (optional)
   *
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#InpaintImage
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["InpaintImageIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "InpaintImage";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#InpaintImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["InpaintImageOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["InpaintImageOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#InpaintImage
   */
  override get future(): InpaintImageOut {
    return new InpaintImageOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["InpaintImageOut"] {
    return super.output() as OpenAPI.components["schemas"]["InpaintImageOut"];
  }
}
export namespace MultiInpaintImage {
  /**
   * MultiInpaintImage Input
   * https://www.substrate.run/nodes#MultiInpaintImage
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["MultiInpaintImageIn"]
  >;

  /**
   * MultiInpaintImage Output
   * https://www.substrate.run/nodes#MultiInpaintImage
   */
  export type Output = OpenAPI.components["schemas"]["MultiInpaintImageOut"];
}

/**
 * Edit multiple images using image generation.
 *
 * https://www.substrate.run/nodes#MultiInpaintImage
 */
export class MultiInpaintImage extends Node {
  /**
   * Input arguments: `image_uri`, `prompt`, `mask_image_uri` (optional), `num_images`, `store` (optional)
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#MultiInpaintImage
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["MultiInpaintImageIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "MultiInpaintImage";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#MultiInpaintImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["MultiInpaintImageOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["MultiInpaintImageOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#MultiInpaintImage
   */
  override get future(): MultiInpaintImageOut {
    return new MultiInpaintImageOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["MultiInpaintImageOut"] {
    return super.output() as OpenAPI.components["schemas"]["MultiInpaintImageOut"];
  }
}
export namespace StableDiffusionXLLightning {
  /**
   * StableDiffusionXLLightning Input
   * https://www.substrate.run/nodes#StableDiffusionXLLightning
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["StableDiffusionXLLightningIn"]
  >;

  /**
   * StableDiffusionXLLightning Output
   * https://www.substrate.run/nodes#StableDiffusionXLLightning
   */
  export type Output =
    OpenAPI.components["schemas"]["StableDiffusionXLLightningOut"];
}

/**
 * Generate an image using [Stable Diffusion XL Lightning](https://arxiv.org/abs/2402.13929).
 *
 * https://www.substrate.run/nodes#StableDiffusionXLLightning
 */
export class StableDiffusionXLLightning extends Node {
  /**
   * Input arguments: `prompt`, `negative_prompt` (optional), `num_images` (optional), `store` (optional), `height` (optional), `width` (optional), `seeds` (optional)
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#StableDiffusionXLLightning
   */
  constructor(
    args: FutureExpandAny<
      OpenAPI.components["schemas"]["StableDiffusionXLLightningIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
    this.node = "StableDiffusionXLLightning";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#StableDiffusionXLLightning
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
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#StableDiffusionXLLightning
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
   * https://www.substrate.run/nodes#StableDiffusionXLInpaint
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["StableDiffusionXLInpaintIn"]
  >;

  /**
   * StableDiffusionXLInpaint Output
   * https://www.substrate.run/nodes#StableDiffusionXLInpaint
   */
  export type Output =
    OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"];
}

/**
 * Edit an image using [Stable Diffusion XL](https://arxiv.org/abs/2307.01952). Supports inpainting (edit part of the image with a mask) and image-to-image (edit the full image).
 *
 * https://www.substrate.run/nodes#StableDiffusionXLInpaint
 */
export class StableDiffusionXLInpaint extends Node {
  /**
   * Input arguments: `image_uri`, `prompt`, `mask_image_uri` (optional), `num_images`, `output_resolution` (optional), `negative_prompt` (optional), `store` (optional), `strength` (optional), `seeds` (optional)
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#StableDiffusionXLInpaint
   */
  constructor(
    args: FutureExpandAny<
      OpenAPI.components["schemas"]["StableDiffusionXLInpaintIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
    this.node = "StableDiffusionXLInpaint";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#StableDiffusionXLInpaint
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
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#StableDiffusionXLInpaint
   */
  override get future(): StableDiffusionXLInpaintOut {
    return new StableDiffusionXLInpaintOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"] {
    return super.output() as OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"];
  }
}
export namespace StableDiffusionXLControlNet {
  /**
   * StableDiffusionXLControlNet Input
   * https://www.substrate.run/nodes#StableDiffusionXLControlNet
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["StableDiffusionXLControlNetIn"]
  >;

  /**
   * StableDiffusionXLControlNet Output
   * https://www.substrate.run/nodes#StableDiffusionXLControlNet
   */
  export type Output =
    OpenAPI.components["schemas"]["StableDiffusionXLControlNetOut"];
}

/**
 * Generate an image with generation structured by an input image, using Stable Diffusion XL with [ControlNet](https://arxiv.org/abs/2302.05543).
 *
 * https://www.substrate.run/nodes#StableDiffusionXLControlNet
 */
export class StableDiffusionXLControlNet extends Node {
  /**
   * Input arguments: `image_uri`, `control_method`, `prompt`, `num_images`, `output_resolution` (optional), `negative_prompt` (optional), `store` (optional), `conditioning_scale` (optional), `strength` (optional), `seeds` (optional)
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#StableDiffusionXLControlNet
   */
  constructor(
    args: FutureExpandAny<
      OpenAPI.components["schemas"]["StableDiffusionXLControlNetIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
    this.node = "StableDiffusionXLControlNet";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#StableDiffusionXLControlNet
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
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#StableDiffusionXLControlNet
   */
  override get future(): StableDiffusionXLControlNetOut {
    return new StableDiffusionXLControlNetOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["StableDiffusionXLControlNetOut"] {
    return super.output() as OpenAPI.components["schemas"]["StableDiffusionXLControlNetOut"];
  }
}
export namespace StableVideoDiffusion {
  /**
   * StableVideoDiffusion Input
   * https://www.substrate.run/nodes#StableVideoDiffusion
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["StableVideoDiffusionIn"]
  >;

  /**
   * StableVideoDiffusion Output
   * https://www.substrate.run/nodes#StableVideoDiffusion
   */
  export type Output = OpenAPI.components["schemas"]["StableVideoDiffusionOut"];
}

/**
 * Generates a video using a still image as conditioning frame.
 *
 * https://www.substrate.run/nodes#StableVideoDiffusion
 */
export class StableVideoDiffusion extends Node {
  /**
   * Input arguments: `image_uri`, `store` (optional), `output_format` (optional), `seed` (optional), `fps` (optional), `motion_bucket_id` (optional), `noise` (optional)
   *
   * Output fields: `video_uri` (optional), `frame_uris` (optional)
   *
   * https://www.substrate.run/nodes#StableVideoDiffusion
   */
  constructor(
    args: FutureExpandAny<
      OpenAPI.components["schemas"]["StableVideoDiffusionIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
    this.node = "StableVideoDiffusion";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `video_uri` (optional), `frame_uris` (optional)
   *
   * https://www.substrate.run/nodes#StableVideoDiffusion
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["StableVideoDiffusionOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["StableVideoDiffusionOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `video_uri` (optional), `frame_uris` (optional)
   *
   * https://www.substrate.run/nodes#StableVideoDiffusion
   */
  override get future(): StableVideoDiffusionOut {
    return new StableVideoDiffusionOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["StableVideoDiffusionOut"] {
    return super.output() as OpenAPI.components["schemas"]["StableVideoDiffusionOut"];
  }
}
export namespace InterpolateFrames {
  /**
   * InterpolateFrames Input
   * https://www.substrate.run/nodes#InterpolateFrames
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["InterpolateFramesIn"]
  >;

  /**
   * InterpolateFrames Output
   * https://www.substrate.run/nodes#InterpolateFrames
   */
  export type Output = OpenAPI.components["schemas"]["InterpolateFramesOut"];
}

/**
 * Generates a interpolation frames between each adjacent frames.
 *
 * https://www.substrate.run/nodes#InterpolateFrames
 */
export class InterpolateFrames extends Node {
  /**
   * Input arguments: `frame_uris`, `store` (optional), `output_format` (optional), `fps` (optional), `num_steps` (optional)
   *
   * Output fields: `video_uri` (optional), `frame_uris` (optional)
   *
   * https://www.substrate.run/nodes#InterpolateFrames
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["InterpolateFramesIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "InterpolateFrames";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `video_uri` (optional), `frame_uris` (optional)
   *
   * https://www.substrate.run/nodes#InterpolateFrames
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["InterpolateFramesOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["InterpolateFramesOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `video_uri` (optional), `frame_uris` (optional)
   *
   * https://www.substrate.run/nodes#InterpolateFrames
   */
  override get future(): InterpolateFramesOut {
    return new InterpolateFramesOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["InterpolateFramesOut"] {
    return super.output() as OpenAPI.components["schemas"]["InterpolateFramesOut"];
  }
}
export namespace TranscribeSpeech {
  /**
   * TranscribeSpeech Input
   * https://www.substrate.run/nodes#TranscribeSpeech
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["TranscribeSpeechIn"]
  >;

  /**
   * TranscribeSpeech Output
   * https://www.substrate.run/nodes#TranscribeSpeech
   */
  export type Output = OpenAPI.components["schemas"]["TranscribeSpeechOut"];
}

/**
 * Transcribe speech in an audio or video file.
 *
 * https://www.substrate.run/nodes#TranscribeSpeech
 */
export class TranscribeSpeech extends Node {
  /**
   * Input arguments: `audio_uri`, `prompt` (optional), `language` (optional), `segment` (optional), `align` (optional), `diarize` (optional), `suggest_chapters` (optional)
   *
   * Output fields: `text`, `segments` (optional), `chapters` (optional)
   *
   * https://www.substrate.run/nodes#TranscribeSpeech
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["TranscribeSpeechIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "TranscribeSpeech";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `text`, `segments` (optional), `chapters` (optional)
   *
   * https://www.substrate.run/nodes#TranscribeSpeech
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["TranscribeSpeechOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["TranscribeSpeechOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `text`, `segments` (optional), `chapters` (optional)
   *
   * https://www.substrate.run/nodes#TranscribeSpeech
   */
  override get future(): TranscribeSpeechOut {
    return new TranscribeSpeechOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["TranscribeSpeechOut"] {
    return super.output() as OpenAPI.components["schemas"]["TranscribeSpeechOut"];
  }
}
export namespace GenerateSpeech {
  /**
   * GenerateSpeech Input
   * https://www.substrate.run/nodes#GenerateSpeech
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["GenerateSpeechIn"]
  >;

  /**
   * GenerateSpeech Output
   * https://www.substrate.run/nodes#GenerateSpeech
   */
  export type Output = OpenAPI.components["schemas"]["GenerateSpeechOut"];
}

/**
 * Generate speech from text.
 *
 * https://www.substrate.run/nodes#GenerateSpeech
 */
export class GenerateSpeech extends Node {
  /**
   * Input arguments: `text`, `store` (optional)
   *
   * Output fields: `audio_uri`
   *
   * https://www.substrate.run/nodes#GenerateSpeech
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["GenerateSpeechIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "GenerateSpeech";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `audio_uri`
   *
   * https://www.substrate.run/nodes#GenerateSpeech
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
   * Output fields: `audio_uri`
   *
   * https://www.substrate.run/nodes#GenerateSpeech
   */
  override get future(): GenerateSpeechOut {
    return new GenerateSpeechOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["GenerateSpeechOut"] {
    return super.output() as OpenAPI.components["schemas"]["GenerateSpeechOut"];
  }
}
export namespace RemoveBackground {
  /**
   * RemoveBackground Input
   * https://www.substrate.run/nodes#RemoveBackground
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["RemoveBackgroundIn"]
  >;

  /**
   * RemoveBackground Output
   * https://www.substrate.run/nodes#RemoveBackground
   */
  export type Output = OpenAPI.components["schemas"]["RemoveBackgroundOut"];
}

/**
 * Remove the background from an image and return the foreground segment as a cut-out or a mask.
 *
 * https://www.substrate.run/nodes#RemoveBackground
 */
export class RemoveBackground extends Node {
  /**
   * Input arguments: `image_uri`, `return_mask` (optional), `invert_mask` (optional), `background_color` (optional), `store` (optional)
   *
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#RemoveBackground
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["RemoveBackgroundIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "RemoveBackground";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#RemoveBackground
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
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#RemoveBackground
   */
  override get future(): RemoveBackgroundOut {
    return new RemoveBackgroundOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["RemoveBackgroundOut"] {
    return super.output() as OpenAPI.components["schemas"]["RemoveBackgroundOut"];
  }
}
export namespace EraseImage {
  /**
   * EraseImage Input
   * https://www.substrate.run/nodes#EraseImage
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["EraseImageIn"]
  >;

  /**
   * EraseImage Output
   * https://www.substrate.run/nodes#EraseImage
   */
  export type Output = OpenAPI.components["schemas"]["EraseImageOut"];
}

/**
 * Erase the masked part of an image, e.g. to remove an object by inpainting.
 *
 * https://www.substrate.run/nodes#EraseImage
 */
export class EraseImage extends Node {
  /**
   * Input arguments: `image_uri`, `mask_image_uri`, `store` (optional)
   *
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#EraseImage
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["EraseImageIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "EraseImage";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#EraseImage
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["EraseImageOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["EraseImageOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#EraseImage
   */
  override get future(): EraseImageOut {
    return new EraseImageOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["EraseImageOut"] {
    return super.output() as OpenAPI.components["schemas"]["EraseImageOut"];
  }
}
export namespace UpscaleImage {
  /**
   * UpscaleImage Input
   * https://www.substrate.run/nodes#UpscaleImage
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["UpscaleImageIn"]
  >;

  /**
   * UpscaleImage Output
   * https://www.substrate.run/nodes#UpscaleImage
   */
  export type Output = OpenAPI.components["schemas"]["UpscaleImageOut"];
}

/**
 * Upscale an image using image generation.
 *
 * https://www.substrate.run/nodes#UpscaleImage
 */
export class UpscaleImage extends Node {
  /**
   * Input arguments: `prompt` (optional), `image_uri`, `output_resolution` (optional), `store` (optional)
   *
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#UpscaleImage
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["UpscaleImageIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "UpscaleImage";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#UpscaleImage
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
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#UpscaleImage
   */
  override get future(): UpscaleImageOut {
    return new UpscaleImageOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["UpscaleImageOut"] {
    return super.output() as OpenAPI.components["schemas"]["UpscaleImageOut"];
  }
}
export namespace SegmentUnderPoint {
  /**
   * SegmentUnderPoint Input
   * https://www.substrate.run/nodes#SegmentUnderPoint
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["SegmentUnderPointIn"]
  >;

  /**
   * SegmentUnderPoint Output
   * https://www.substrate.run/nodes#SegmentUnderPoint
   */
  export type Output = OpenAPI.components["schemas"]["SegmentUnderPointOut"];
}

/**
 * Segment an image under a point and return the segment.
 *
 * https://www.substrate.run/nodes#SegmentUnderPoint
 */
export class SegmentUnderPoint extends Node {
  /**
   * Input arguments: `image_uri`, `point`, `store` (optional)
   *
   * Output fields: `mask_image_uri`
   *
   * https://www.substrate.run/nodes#SegmentUnderPoint
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["SegmentUnderPointIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "SegmentUnderPoint";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `mask_image_uri`
   *
   * https://www.substrate.run/nodes#SegmentUnderPoint
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
   * Output fields: `mask_image_uri`
   *
   * https://www.substrate.run/nodes#SegmentUnderPoint
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
   * https://www.substrate.run/nodes#SegmentAnything
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["SegmentAnythingIn"]
  >;

  /**
   * SegmentAnything Output
   * https://www.substrate.run/nodes#SegmentAnything
   */
  export type Output = OpenAPI.components["schemas"]["SegmentAnythingOut"];
}

/**
 * Segment an image using [SegmentAnything](https://github.com/facebookresearch/segment-anything).
 *
 * https://www.substrate.run/nodes#SegmentAnything
 */
export class SegmentAnything extends Node {
  /**
   * Input arguments: `image_uri`, `point_prompts` (optional), `box_prompts` (optional), `store` (optional)
   *
   * Output fields: `mask_image_uri`
   *
   * https://www.substrate.run/nodes#SegmentAnything
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["SegmentAnythingIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "SegmentAnything";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `mask_image_uri`
   *
   * https://www.substrate.run/nodes#SegmentAnything
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
   * Output fields: `mask_image_uri`
   *
   * https://www.substrate.run/nodes#SegmentAnything
   */
  override get future(): SegmentAnythingOut {
    return new SegmentAnythingOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["SegmentAnythingOut"] {
    return super.output() as OpenAPI.components["schemas"]["SegmentAnythingOut"];
  }
}
export namespace SplitDocument {
  /**
   * SplitDocument Input
   * https://www.substrate.run/nodes#SplitDocument
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["SplitDocumentIn"]
  >;

  /**
   * SplitDocument Output
   * https://www.substrate.run/nodes#SplitDocument
   */
  export type Output = OpenAPI.components["schemas"]["SplitDocumentOut"];
}

/**
 * Split document into text segments.
 *
 * https://www.substrate.run/nodes#SplitDocument
 */
export class SplitDocument extends Node {
  /**
   * Input arguments: `uri`, `doc_id` (optional), `metadata` (optional), `chunk_size` (optional), `chunk_overlap` (optional)
   *
   * Output fields: `items`
   *
   * https://www.substrate.run/nodes#SplitDocument
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["SplitDocumentIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "SplitDocument";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `items`
   *
   * https://www.substrate.run/nodes#SplitDocument
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["SplitDocumentOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<OpenAPI.components["schemas"]["SplitDocumentOut"] | undefined>;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `items`
   *
   * https://www.substrate.run/nodes#SplitDocument
   */
  override get future(): SplitDocumentOut {
    return new SplitDocumentOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["SplitDocumentOut"] {
    return super.output() as OpenAPI.components["schemas"]["SplitDocumentOut"];
  }
}
export namespace EmbedText {
  /**
   * EmbedText Input
   * https://www.substrate.run/nodes#EmbedText
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["EmbedTextIn"]
  >;

  /**
   * EmbedText Output
   * https://www.substrate.run/nodes#EmbedText
   */
  export type Output = OpenAPI.components["schemas"]["EmbedTextOut"];
}

/**
 * Generate embedding for a text document.
 *
 * https://www.substrate.run/nodes#EmbedText
 */
export class EmbedText extends Node {
  /**
   * Input arguments: `text`, `collection_name` (optional), `metadata` (optional), `embedded_metadata_keys` (optional), `doc_id` (optional), `model` (optional)
   *
   * Output fields: `embedding`
   *
   * https://www.substrate.run/nodes#EmbedText
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["EmbedTextIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "EmbedText";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `embedding`
   *
   * https://www.substrate.run/nodes#EmbedText
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
   * Output fields: `embedding`
   *
   * https://www.substrate.run/nodes#EmbedText
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
   * https://www.substrate.run/nodes#MultiEmbedText
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["MultiEmbedTextIn"]
  >;

  /**
   * MultiEmbedText Output
   * https://www.substrate.run/nodes#MultiEmbedText
   */
  export type Output = OpenAPI.components["schemas"]["MultiEmbedTextOut"];
}

/**
 * Generate embeddings for multiple text documents.
 *
 * https://www.substrate.run/nodes#MultiEmbedText
 */
export class MultiEmbedText extends Node {
  /**
   * Input arguments: `items`, `collection_name` (optional), `embedded_metadata_keys` (optional), `model` (optional)
   *
   * Output fields: `embeddings`
   *
   * https://www.substrate.run/nodes#MultiEmbedText
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["MultiEmbedTextIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "MultiEmbedText";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `embeddings`
   *
   * https://www.substrate.run/nodes#MultiEmbedText
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
   * Output fields: `embeddings`
   *
   * https://www.substrate.run/nodes#MultiEmbedText
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
   * https://www.substrate.run/nodes#EmbedImage
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["EmbedImageIn"]
  >;

  /**
   * EmbedImage Output
   * https://www.substrate.run/nodes#EmbedImage
   */
  export type Output = OpenAPI.components["schemas"]["EmbedImageOut"];
}

/**
 * Generate embedding for an image.
 *
 * https://www.substrate.run/nodes#EmbedImage
 */
export class EmbedImage extends Node {
  /**
   * Input arguments: `image_uri`, `collection_name` (optional), `doc_id` (optional), `model` (optional)
   *
   * Output fields: `embedding`
   *
   * https://www.substrate.run/nodes#EmbedImage
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["EmbedImageIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "EmbedImage";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `embedding`
   *
   * https://www.substrate.run/nodes#EmbedImage
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
   * Output fields: `embedding`
   *
   * https://www.substrate.run/nodes#EmbedImage
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
   * https://www.substrate.run/nodes#MultiEmbedImage
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["MultiEmbedImageIn"]
  >;

  /**
   * MultiEmbedImage Output
   * https://www.substrate.run/nodes#MultiEmbedImage
   */
  export type Output = OpenAPI.components["schemas"]["MultiEmbedImageOut"];
}

/**
 * Generate embeddings for multiple images.
 *
 * https://www.substrate.run/nodes#MultiEmbedImage
 */
export class MultiEmbedImage extends Node {
  /**
   * Input arguments: `items`, `collection_name` (optional), `model` (optional)
   *
   * Output fields: `embeddings`
   *
   * https://www.substrate.run/nodes#MultiEmbedImage
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["MultiEmbedImageIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "MultiEmbedImage";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `embeddings`
   *
   * https://www.substrate.run/nodes#MultiEmbedImage
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
   * Output fields: `embeddings`
   *
   * https://www.substrate.run/nodes#MultiEmbedImage
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
   * https://www.substrate.run/nodes#JinaV2
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["JinaV2In"]
  >;

  /**
   * JinaV2 Output
   * https://www.substrate.run/nodes#JinaV2
   */
  export type Output = OpenAPI.components["schemas"]["JinaV2Out"];
}

/**
 * Generate embeddings for multiple text documents using [Jina Embeddings 2](https://arxiv.org/abs/2310.19923).
 *
 * https://www.substrate.run/nodes#JinaV2
 */
export class JinaV2 extends Node {
  /**
   * Input arguments: `items`, `collection_name` (optional), `embedded_metadata_keys` (optional)
   *
   * Output fields: `embeddings`
   *
   * https://www.substrate.run/nodes#JinaV2
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["JinaV2In"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "JinaV2";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `embeddings`
   *
   * https://www.substrate.run/nodes#JinaV2
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
   * Output fields: `embeddings`
   *
   * https://www.substrate.run/nodes#JinaV2
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
   * https://www.substrate.run/nodes#CLIP
   */
  export type Input = FutureExpandAny<OpenAPI.components["schemas"]["CLIPIn"]>;

  /**
   * CLIP Output
   * https://www.substrate.run/nodes#CLIP
   */
  export type Output = OpenAPI.components["schemas"]["CLIPOut"];
}

/**
 * Generate embeddings for text or images using [CLIP](https://openai.com/research/clip).
 *
 * https://www.substrate.run/nodes#CLIP
 */
export class CLIP extends Node {
  /**
   * Input arguments: `items`, `collection_name` (optional), `embedded_metadata_keys` (optional)
   *
   * Output fields: `embeddings`
   *
   * https://www.substrate.run/nodes#CLIP
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["CLIPIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "CLIP";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `embeddings`
   *
   * https://www.substrate.run/nodes#CLIP
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
   * Output fields: `embeddings`
   *
   * https://www.substrate.run/nodes#CLIP
   */
  override get future(): CLIPOut {
    return new CLIPOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["CLIPOut"] {
    return super.output() as OpenAPI.components["schemas"]["CLIPOut"];
  }
}
export namespace FindOrCreateVectorStore {
  /**
   * FindOrCreateVectorStore Input
   * https://www.substrate.run/nodes#FindOrCreateVectorStore
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["FindOrCreateVectorStoreIn"]
  >;

  /**
   * FindOrCreateVectorStore Output
   * https://www.substrate.run/nodes#FindOrCreateVectorStore
   */
  export type Output =
    OpenAPI.components["schemas"]["FindOrCreateVectorStoreOut"];
}

/**
 * Find a vector store matching the given collection name, or create a new vector store.
 *
 * https://www.substrate.run/nodes#FindOrCreateVectorStore
 */
export class FindOrCreateVectorStore extends Node {
  /**
   * Input arguments: `collection_name`, `model`
   *
   * Output fields: `collection_name`, `model`, `num_leaves` (optional)
   *
   * https://www.substrate.run/nodes#FindOrCreateVectorStore
   */
  constructor(
    args: FutureExpandAny<
      OpenAPI.components["schemas"]["FindOrCreateVectorStoreIn"]
    >,
    options?: Options,
  ) {
    super(args, options);
    this.node = "FindOrCreateVectorStore";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `collection_name`, `model`, `num_leaves` (optional)
   *
   * https://www.substrate.run/nodes#FindOrCreateVectorStore
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["FindOrCreateVectorStoreOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["FindOrCreateVectorStoreOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `collection_name`, `model`, `num_leaves` (optional)
   *
   * https://www.substrate.run/nodes#FindOrCreateVectorStore
   */
  override get future(): FindOrCreateVectorStoreOut {
    return new FindOrCreateVectorStoreOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["FindOrCreateVectorStoreOut"] {
    return super.output() as OpenAPI.components["schemas"]["FindOrCreateVectorStoreOut"];
  }
}
export namespace ListVectorStores {
  /**
   * ListVectorStores Input
   * https://www.substrate.run/nodes#ListVectorStores
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["ListVectorStoresIn"]
  >;

  /**
   * ListVectorStores Output
   * https://www.substrate.run/nodes#ListVectorStores
   */
  export type Output = OpenAPI.components["schemas"]["ListVectorStoresOut"];
}

/**
 * List all vector stores.
 *
 * https://www.substrate.run/nodes#ListVectorStores
 */
export class ListVectorStores extends Node {
  /**
   * Input arguments:
   *
   * Output fields: `items` (optional)
   *
   * https://www.substrate.run/nodes#ListVectorStores
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["ListVectorStoresIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "ListVectorStores";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `items` (optional)
   *
   * https://www.substrate.run/nodes#ListVectorStores
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
   * Output fields: `items` (optional)
   *
   * https://www.substrate.run/nodes#ListVectorStores
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
   * https://www.substrate.run/nodes#DeleteVectorStore
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["DeleteVectorStoreIn"]
  >;

  /**
   * DeleteVectorStore Output
   * https://www.substrate.run/nodes#DeleteVectorStore
   */
  export type Output = OpenAPI.components["schemas"]["DeleteVectorStoreOut"];
}

/**
 * Delete a vector store.
 *
 * https://www.substrate.run/nodes#DeleteVectorStore
 */
export class DeleteVectorStore extends Node {
  /**
   * Input arguments: `collection_name`, `model`
   *
   * Output fields: `collection_name`, `model`
   *
   * https://www.substrate.run/nodes#DeleteVectorStore
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["DeleteVectorStoreIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "DeleteVectorStore";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `collection_name`, `model`
   *
   * https://www.substrate.run/nodes#DeleteVectorStore
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
   * Output fields: `collection_name`, `model`
   *
   * https://www.substrate.run/nodes#DeleteVectorStore
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
   * https://www.substrate.run/nodes#QueryVectorStore
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["QueryVectorStoreIn"]
  >;

  /**
   * QueryVectorStore Output
   * https://www.substrate.run/nodes#QueryVectorStore
   */
  export type Output = OpenAPI.components["schemas"]["QueryVectorStoreOut"];
}

/**
 * Query a vector store for similar vectors.
 *
 * https://www.substrate.run/nodes#QueryVectorStore
 */
export class QueryVectorStore extends Node {
  /**
   * Input arguments: `collection_name`, `model`, `query_strings` (optional), `query_image_uris` (optional), `query_vectors` (optional), `query_ids` (optional), `top_k` (optional), `ef_search` (optional), `num_leaves_to_search` (optional), `include_values` (optional), `include_metadata` (optional), `filters` (optional)
   *
   * Output fields: `results`, `collection_name` (optional), `model` (optional)
   *
   * https://www.substrate.run/nodes#QueryVectorStore
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["QueryVectorStoreIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "QueryVectorStore";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `results`, `collection_name` (optional), `model` (optional)
   *
   * https://www.substrate.run/nodes#QueryVectorStore
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
   * Output fields: `results`, `collection_name` (optional), `model` (optional)
   *
   * https://www.substrate.run/nodes#QueryVectorStore
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
   * https://www.substrate.run/nodes#FetchVectors
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["FetchVectorsIn"]
  >;

  /**
   * FetchVectors Output
   * https://www.substrate.run/nodes#FetchVectors
   */
  export type Output = OpenAPI.components["schemas"]["FetchVectorsOut"];
}

/**
 * Fetch vectors from a vector store.
 *
 * https://www.substrate.run/nodes#FetchVectors
 */
export class FetchVectors extends Node {
  /**
   * Input arguments: `collection_name`, `model`, `ids`
   *
   * Output fields: `vectors`
   *
   * https://www.substrate.run/nodes#FetchVectors
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["FetchVectorsIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "FetchVectors";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `vectors`
   *
   * https://www.substrate.run/nodes#FetchVectors
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
   * Output fields: `vectors`
   *
   * https://www.substrate.run/nodes#FetchVectors
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
   * https://www.substrate.run/nodes#UpdateVectors
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["UpdateVectorsIn"]
  >;

  /**
   * UpdateVectors Output
   * https://www.substrate.run/nodes#UpdateVectors
   */
  export type Output = OpenAPI.components["schemas"]["UpdateVectorsOut"];
}

/**
 * Update vectors in a vector store.
 *
 * https://www.substrate.run/nodes#UpdateVectors
 */
export class UpdateVectors extends Node {
  /**
   * Input arguments: `collection_name`, `model`, `vectors`
   *
   * Output fields: `count`
   *
   * https://www.substrate.run/nodes#UpdateVectors
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["UpdateVectorsIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "UpdateVectors";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `count`
   *
   * https://www.substrate.run/nodes#UpdateVectors
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
   * Output fields: `count`
   *
   * https://www.substrate.run/nodes#UpdateVectors
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
   * https://www.substrate.run/nodes#DeleteVectors
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["DeleteVectorsIn"]
  >;

  /**
   * DeleteVectors Output
   * https://www.substrate.run/nodes#DeleteVectors
   */
  export type Output = OpenAPI.components["schemas"]["DeleteVectorsOut"];
}

/**
 * Delete vectors in a vector store.
 *
 * https://www.substrate.run/nodes#DeleteVectors
 */
export class DeleteVectors extends Node {
  /**
   * Input arguments: `collection_name`, `model`, `ids`
   *
   * Output fields: `count`
   *
   * https://www.substrate.run/nodes#DeleteVectors
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["DeleteVectorsIn"]>,
    options?: Options,
  ) {
    super(args, options);
    this.node = "DeleteVectors";
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `count`
   *
   * https://www.substrate.run/nodes#DeleteVectors
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
   * Output fields: `count`
   *
   * https://www.substrate.run/nodes#DeleteVectors
   */
  override get future(): DeleteVectorsOut {
    return new DeleteVectorsOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["DeleteVectorsOut"] {
    return super.output() as OpenAPI.components["schemas"]["DeleteVectorsOut"];
  }
}
export type AnyNode =
  | Experimental
  | Box
  | If
  | ComputeText
  | MultiComputeText
  | BatchComputeText
  | BatchComputeJSON
  | ComputeJSON
  | MultiComputeJSON
  | Mistral7BInstruct
  | Mixtral8x7BInstruct
  | Llama3Instruct8B
  | Llama3Instruct70B
  | Firellava13B
  | GenerateImage
  | MultiGenerateImage
  | InpaintImage
  | MultiInpaintImage
  | StableDiffusionXLLightning
  | StableDiffusionXLInpaint
  | StableDiffusionXLControlNet
  | StableVideoDiffusion
  | InterpolateFrames
  | TranscribeSpeech
  | GenerateSpeech
  | RemoveBackground
  | EraseImage
  | UpscaleImage
  | SegmentUnderPoint
  | SegmentAnything
  | SplitDocument
  | EmbedText
  | MultiEmbedText
  | EmbedImage
  | MultiEmbedImage
  | JinaV2
  | CLIP
  | FindOrCreateVectorStore
  | ListVectorStores
  | DeleteVectorStore
  | QueryVectorStore
  | FetchVectors
  | UpdateVectors
  | DeleteVectors;

export type NodeOutput<T> = T extends Experimental
  ? OpenAPI.components["schemas"]["ExperimentalOut"]
  : T extends Box
    ? OpenAPI.components["schemas"]["BoxOut"]
    : T extends If
      ? OpenAPI.components["schemas"]["IfOut"]
      : T extends ComputeText
        ? OpenAPI.components["schemas"]["ComputeTextOut"]
        : T extends MultiComputeText
          ? OpenAPI.components["schemas"]["MultiComputeTextOut"]
          : T extends BatchComputeText
            ? OpenAPI.components["schemas"]["BatchComputeTextOut"]
            : T extends BatchComputeJSON
              ? OpenAPI.components["schemas"]["BatchComputeJSONOut"]
              : T extends ComputeJSON
                ? OpenAPI.components["schemas"]["ComputeJSONOut"]
                : T extends MultiComputeJSON
                  ? OpenAPI.components["schemas"]["MultiComputeJSONOut"]
                  : T extends Mistral7BInstruct
                    ? OpenAPI.components["schemas"]["Mistral7BInstructOut"]
                    : T extends Mixtral8x7BInstruct
                      ? OpenAPI.components["schemas"]["Mixtral8x7BInstructOut"]
                      : T extends Llama3Instruct8B
                        ? OpenAPI.components["schemas"]["Llama3Instruct8BOut"]
                        : T extends Llama3Instruct70B
                          ? OpenAPI.components["schemas"]["Llama3Instruct70BOut"]
                          : T extends Firellava13B
                            ? OpenAPI.components["schemas"]["Firellava13BOut"]
                            : T extends GenerateImage
                              ? OpenAPI.components["schemas"]["GenerateImageOut"]
                              : T extends MultiGenerateImage
                                ? OpenAPI.components["schemas"]["MultiGenerateImageOut"]
                                : T extends InpaintImage
                                  ? OpenAPI.components["schemas"]["InpaintImageOut"]
                                  : T extends MultiInpaintImage
                                    ? OpenAPI.components["schemas"]["MultiInpaintImageOut"]
                                    : T extends StableDiffusionXLLightning
                                      ? OpenAPI.components["schemas"]["StableDiffusionXLLightningOut"]
                                      : T extends StableDiffusionXLInpaint
                                        ? OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"]
                                        : T extends StableDiffusionXLControlNet
                                          ? OpenAPI.components["schemas"]["StableDiffusionXLControlNetOut"]
                                          : T extends StableVideoDiffusion
                                            ? OpenAPI.components["schemas"]["StableVideoDiffusionOut"]
                                            : T extends InterpolateFrames
                                              ? OpenAPI.components["schemas"]["InterpolateFramesOut"]
                                              : T extends TranscribeSpeech
                                                ? OpenAPI.components["schemas"]["TranscribeSpeechOut"]
                                                : T extends GenerateSpeech
                                                  ? OpenAPI.components["schemas"]["GenerateSpeechOut"]
                                                  : T extends RemoveBackground
                                                    ? OpenAPI.components["schemas"]["RemoveBackgroundOut"]
                                                    : T extends EraseImage
                                                      ? OpenAPI.components["schemas"]["EraseImageOut"]
                                                      : T extends UpscaleImage
                                                        ? OpenAPI.components["schemas"]["UpscaleImageOut"]
                                                        : T extends SegmentUnderPoint
                                                          ? OpenAPI.components["schemas"]["SegmentUnderPointOut"]
                                                          : T extends SegmentAnything
                                                            ? OpenAPI.components["schemas"]["SegmentAnythingOut"]
                                                            : T extends SplitDocument
                                                              ? OpenAPI.components["schemas"]["SplitDocumentOut"]
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
                                                                          : T extends FindOrCreateVectorStore
                                                                            ? OpenAPI.components["schemas"]["FindOrCreateVectorStoreOut"]
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
