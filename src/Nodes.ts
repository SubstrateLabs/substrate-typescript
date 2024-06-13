/**
 * 𐃏 Substrate
 * @generated file
 * 20240612.20240613
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
export class RunPythonInKwargs extends FutureAnyObject {}
/** Python packages to install. You must import them in your code. */
export class RunPythonInPipInstall extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `RunPythonInPipInstall` once it's node has been run. */
  protected override async result(): Promise<FutureString[]> {
    return super.result() as Promise<FutureString[]>;
  }
}
export class RunPythonInPipInstallItem extends FutureString {}
/** Image prompts. */
export class GenerateTextInImageUris extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `GenerateTextInImageUris` once it's node has been run. */
  protected override async result(): Promise<FutureString[]> {
    return super.result() as Promise<FutureString[]>;
  }
}
export class GenerateTextInImageUrisItem extends FutureString {}
export class GenerateJSONInJsonSchema extends FutureAnyObject {}
export class GenerateJSONOutJsonObject extends FutureAnyObject {}
/** Response choices. */
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
/** Batch input prompts. */
export class BatchGenerateTextInPrompts extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `BatchGenerateTextInPrompts` once it's node has been run. */
  protected override async result(): Promise<FutureString[]> {
    return super.result() as Promise<FutureString[]>;
  }
}
export class BatchGenerateTextInPromptsItem extends FutureString {}
/** Batch outputs. */
export class BatchGenerateTextOutOutputs extends FutureArray {
  /** Returns `GenerateTextOut` at given index. */
  override at(index: number) {
    return new GenerateTextOut(this._directive.next(index));
  }
  /** Returns the result for `BatchGenerateTextOutOutputs` once it's node has been run. */
  protected override async result(): Promise<GenerateTextOut[]> {
    return super.result() as Promise<GenerateTextOut[]>;
  }
}
export class MultiGenerateJSONInJsonSchema extends FutureAnyObject {}
/** Response choices. */
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
/** Batch input prompts. */
export class BatchGenerateJSONInPrompts extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) {
    return new FutureString(this._directive.next(index));
  }
  /** Returns the result for `BatchGenerateJSONInPrompts` once it's node has been run. */
  protected override async result(): Promise<FutureString[]> {
    return super.result() as Promise<FutureString[]>;
  }
}
export class BatchGenerateJSONInPromptsItem extends FutureString {}
export class BatchGenerateJSONInJsonSchema extends FutureAnyObject {}
/** Batch outputs. */
export class BatchGenerateJSONOutOutputs extends FutureArray {
  /** Returns `GenerateJSONOut` at given index. */
  override at(index: number) {
    return new GenerateJSONOut(this._directive.next(index));
  }
  /** Returns the result for `BatchGenerateJSONOutOutputs` once it's node has been run. */
  protected override async result(): Promise<GenerateJSONOut[]> {
    return super.result() as Promise<GenerateJSONOut[]>;
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
  protected override async result(): Promise<Mistral7BInstructChoice[]> {
    return super.result() as Promise<Mistral7BInstructChoice[]>;
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
  protected override async result(): Promise<Mixtral8x7BChoice[]> {
    return super.result() as Promise<Mixtral8x7BChoice[]>;
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
  protected override async result(): Promise<Llama3Instruct8BChoice[]> {
    return super.result() as Promise<Llama3Instruct8BChoice[]>;
  }
}
/** Response choices. */
export class Llama3Instruct70BOutChoices extends FutureArray {
  /** Returns `Llama3Instruct70BChoice` at given index. */
  override at(index: number) {
    return new Llama3Instruct70BChoice(this._directive.next(index));
  }
  /** Returns the result for `Llama3Instruct70BOutChoices` once it's node has been run. */
  protected override async result(): Promise<Llama3Instruct70BChoice[]> {
    return super.result() as Promise<Llama3Instruct70BChoice[]>;
  }
}
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
/** Generated images. */
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
/** Generated images. */
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
/** Generated images. */
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
/** Generated images. */
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
/** Generated images. */
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
/** Generated images. */
export class MultiInpaintImageOutOutputs extends FutureArray {
  /** Returns `InpaintImageOut` at given index. */
  override at(index: number) {
    return new InpaintImageOut(this._directive.next(index));
  }
  /** Returns the result for `MultiInpaintImageOutOutputs` once it's node has been run. */
  protected override async result(): Promise<InpaintImageOut[]> {
    return super.result() as Promise<InpaintImageOut[]>;
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
/** Generated images. */
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
export class TranscribeSpeechOutSegments extends FutureArray {
  /** Returns `TranscribedSegment` at given index. */
  override at(index: number) {
    return new TranscribedSegment(this._directive.next(index));
  }
  /** Returns the result for `TranscribeSpeechOutSegments` once it's node has been run. */
  protected override async result(): Promise<TranscribedSegment[]> {
    return super.result() as Promise<TranscribedSegment[]>;
  }
}
/** Chapter markers, if `suggest_chapters` is enabled. */
export class TranscribeSpeechOutChapters extends FutureArray {
  /** Returns `ChapterMarker` at given index. */
  override at(index: number) {
    return new ChapterMarker(this._directive.next(index));
  }
  /** Returns the result for `TranscribeSpeechOutChapters` once it's node has been run. */
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
/** Choose keys from `metadata` to embed with text. Only applies to text items. */
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
export class ListVectorStoresOutItems extends FutureArray {
  /** Returns `FindOrCreateVectorStoreOut` at given index. */
  override at(index: number) {
    return new FindOrCreateVectorStoreOut(this._directive.next(index));
  }
  /** Returns the result for `ListVectorStoresOutItems` once it's node has been run. */
  protected override async result(): Promise<FindOrCreateVectorStoreOut[]> {
    return super.result() as Promise<FindOrCreateVectorStoreOut[]>;
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
/** Vectors to use for the query. */
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
  protected override async result(): Promise<ExperimentalIn> {
    return super.result() as Promise<ExperimentalIn>;
  }
}
/** ExperimentalOut */
export class ExperimentalOut extends FutureObject {
  /** Response. */
  get output() {
    return new FutureAnyObject(this._directive.next("output"));
  }
  /** returns the result for `ExperimentalOut` once it's node has been run. */
  protected override async result(): Promise<ExperimentalOut> {
    return super.result() as Promise<ExperimentalOut>;
  }
}
/** RunPythonIn */
export class RunPythonIn extends FutureObject {
  /** (Optional) Pickled function. */
  get pkl_function() {
    return new FutureString(this._directive.next("pkl_function"));
  }
  /** Keyword arguments to your function. */
  get kwargs() {
    return new FutureAnyObject(this._directive.next("kwargs"));
  }
  /** (Optional) Python version. */
  get python_version() {
    return new FutureString(this._directive.next("python_version"));
  }

  /** (Optional) Python packages to install. You must import them in your code. */
  get pip_install() {
    return new RunPythonInPipInstall(this._directive.next("pip_install"));
  }
  /** returns the result for `RunPythonIn` once it's node has been run. */
  protected override async result(): Promise<RunPythonIn> {
    return super.result() as Promise<RunPythonIn>;
  }
}
/** RunPythonOut */
export class RunPythonOut extends FutureObject {
  /** (Optional) Return value of your function. */
  get output() {
    return new (this._directive.next("output"))();
  }
  /** (Optional) Pickled return value. */
  get pkl_output() {
    return new FutureString(this._directive.next("pkl_output"));
  }
  /** Everything printed to stdout while running your code. */
  get stdout() {
    return new FutureString(this._directive.next("stdout"));
  }
  /** Contents of stderr if your code did not run successfully. */
  get stderr() {
    return new FutureString(this._directive.next("stderr"));
  }
  /** returns the result for `RunPythonOut` once it's node has been run. */
  protected override async result(): Promise<RunPythonOut> {
    return super.result() as Promise<RunPythonOut>;
  }
}
/** GenerateTextIn */
export class GenerateTextIn extends FutureObject {
  /** Input prompt. */
  get prompt() {
    return new FutureString(this._directive.next("prompt"));
  }

  /** (Optional) Image prompts. */
  get image_uris() {
    return new GenerateTextInImageUris(this._directive.next("image_uris"));
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
  /** (Optional) Selected model. */
  get model() {
    return new FutureString(this._directive.next("model"));
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
  /** If the model output could not be parsed to JSON, this is the raw text output. */
  get text() {
    return new FutureString(this._directive.next("text"));
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
  /** (Optional) Selected model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `MultiGenerateTextIn` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateTextIn> {
    return super.result() as Promise<MultiGenerateTextIn>;
  }
}
/** MultiGenerateTextOut */
export class MultiGenerateTextOut extends FutureObject {
  /** Response choices. */
  get choices() {
    return new MultiGenerateTextOutChoices(this._directive.next("choices"));
  }
  /** returns the result for `MultiGenerateTextOut` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateTextOut> {
    return super.result() as Promise<MultiGenerateTextOut>;
  }
}
/** BatchGenerateTextIn */
export class BatchGenerateTextIn extends FutureObject {
  /** Batch input prompts. */
  get prompts() {
    return new BatchGenerateTextInPrompts(this._directive.next("prompts"));
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
  /** returns the result for `BatchGenerateTextIn` once it's node has been run. */
  protected override async result(): Promise<BatchGenerateTextIn> {
    return super.result() as Promise<BatchGenerateTextIn>;
  }
}
/** BatchGenerateTextOut */
export class BatchGenerateTextOut extends FutureObject {
  /** Batch outputs. */
  get outputs() {
    return new BatchGenerateTextOutOutputs(this._directive.next("outputs"));
  }
  /** returns the result for `BatchGenerateTextOut` once it's node has been run. */
  protected override async result(): Promise<BatchGenerateTextOut> {
    return super.result() as Promise<BatchGenerateTextOut>;
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
  /** (Optional) Selected model. */
  get model() {
    return new FutureString(this._directive.next("model"));
  }
  /** returns the result for `MultiGenerateJSONIn` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateJSONIn> {
    return super.result() as Promise<MultiGenerateJSONIn>;
  }
}
/** MultiGenerateJSONOut */
export class MultiGenerateJSONOut extends FutureObject {
  /** Response choices. */
  get choices() {
    return new MultiGenerateJSONOutChoices(this._directive.next("choices"));
  }
  /** returns the result for `MultiGenerateJSONOut` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateJSONOut> {
    return super.result() as Promise<MultiGenerateJSONOut>;
  }
}
/** BatchGenerateJSONIn */
export class BatchGenerateJSONIn extends FutureObject {
  /** Batch input prompts. */
  get prompts() {
    return new BatchGenerateJSONInPrompts(this._directive.next("prompts"));
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
  /** returns the result for `BatchGenerateJSONIn` once it's node has been run. */
  protected override async result(): Promise<BatchGenerateJSONIn> {
    return super.result() as Promise<BatchGenerateJSONIn>;
  }
}
/** BatchGenerateJSONOut */
export class BatchGenerateJSONOut extends FutureObject {
  /** Batch outputs. */
  get outputs() {
    return new BatchGenerateJSONOutOutputs(this._directive.next("outputs"));
  }
  /** returns the result for `BatchGenerateJSONOut` once it's node has been run. */
  protected override async result(): Promise<BatchGenerateJSONOut> {
    return super.result() as Promise<BatchGenerateJSONOut>;
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
  /** Response choices. */
  get choices() {
    return new Mistral7BInstructOutChoices(this._directive.next("choices"));
  }
  /** returns the result for `Mistral7BInstructOut` once it's node has been run. */
  protected override async result(): Promise<Mistral7BInstructOut> {
    return super.result() as Promise<Mistral7BInstructOut>;
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
  protected override async result(): Promise<Mixtral8x7BInstructIn> {
    return super.result() as Promise<Mixtral8x7BInstructIn>;
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
  protected override async result(): Promise<Mixtral8x7BChoice> {
    return super.result() as Promise<Mixtral8x7BChoice>;
  }
}
/** Mixtral8x7BInstructOut */
export class Mixtral8x7BInstructOut extends FutureObject {
  /** Response choices. */
  get choices() {
    return new Mixtral8x7BInstructOutChoices(this._directive.next("choices"));
  }
  /** returns the result for `Mixtral8x7BInstructOut` once it's node has been run. */
  protected override async result(): Promise<Mixtral8x7BInstructOut> {
    return super.result() as Promise<Mixtral8x7BInstructOut>;
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
  protected override async result(): Promise<Llama3Instruct8BIn> {
    return super.result() as Promise<Llama3Instruct8BIn>;
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
  protected override async result(): Promise<Llama3Instruct8BChoice> {
    return super.result() as Promise<Llama3Instruct8BChoice>;
  }
}
/** Llama3Instruct8BOut */
export class Llama3Instruct8BOut extends FutureObject {
  /** Response choices. */
  get choices() {
    return new Llama3Instruct8BOutChoices(this._directive.next("choices"));
  }
  /** returns the result for `Llama3Instruct8BOut` once it's node has been run. */
  protected override async result(): Promise<Llama3Instruct8BOut> {
    return super.result() as Promise<Llama3Instruct8BOut>;
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
  protected override async result(): Promise<Llama3Instruct70BIn> {
    return super.result() as Promise<Llama3Instruct70BIn>;
  }
}
/** Llama3Instruct70BChoice */
export class Llama3Instruct70BChoice extends FutureObject {
  /** Text response. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** returns the result for `Llama3Instruct70BChoice` once it's node has been run. */
  protected override async result(): Promise<Llama3Instruct70BChoice> {
    return super.result() as Promise<Llama3Instruct70BChoice>;
  }
}
/** Llama3Instruct70BOut */
export class Llama3Instruct70BOut extends FutureObject {
  /** Response choices. */
  get choices() {
    return new Llama3Instruct70BOutChoices(this._directive.next("choices"));
  }
  /** returns the result for `Llama3Instruct70BOut` once it's node has been run. */
  protected override async result(): Promise<Llama3Instruct70BOut> {
    return super.result() as Promise<Llama3Instruct70BOut>;
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `MultiGenerateImageIn` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateImageIn> {
    return super.result() as Promise<MultiGenerateImageIn>;
  }
}
/** MultiGenerateImageOut */
export class MultiGenerateImageOut extends FutureObject {
  /** Generated images. */
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
  /** Number of images to generate. */
  get num_images() {
    return new FutureNumber(this._directive.next("num_images"));
  }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the image data will be returned as a base64-encoded string. */
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
  /** Generated images. */
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the image data will be returned as a base64-encoded string. */
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
  /** Generated images. */
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the image data will be returned as a base64-encoded string. */
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
  /** Generated images. */
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the image data will be returned as a base64-encoded string. */
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
  protected override async result(): Promise<StableDiffusionXLControlNetIn> {
    return super.result() as Promise<StableDiffusionXLControlNetIn>;
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
  protected override async result(): Promise<StableDiffusionXLControlNetOut> {
    return super.result() as Promise<StableDiffusionXLControlNetOut>;
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `InpaintImageIn` once it's node has been run. */
  protected override async result(): Promise<InpaintImageIn> {
    return super.result() as Promise<InpaintImageIn>;
  }
}
/** InpaintImageOut */
export class InpaintImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `InpaintImageOut` once it's node has been run. */
  protected override async result(): Promise<InpaintImageOut> {
    return super.result() as Promise<InpaintImageOut>;
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `MultiInpaintImageIn` once it's node has been run. */
  protected override async result(): Promise<MultiInpaintImageIn> {
    return super.result() as Promise<MultiInpaintImageIn>;
  }
}
/** MultiInpaintImageOut */
export class MultiInpaintImageOut extends FutureObject {
  /** Generated images. */
  get outputs() {
    return new MultiInpaintImageOutOutputs(this._directive.next("outputs"));
  }
  /** returns the result for `MultiInpaintImageOut` once it's node has been run. */
  protected override async result(): Promise<MultiInpaintImageOut> {
    return super.result() as Promise<MultiInpaintImageOut>;
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the image data will be returned as a base64-encoded string. */
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
  /** Generated images. */
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
  }
  /** returns the result for `EraseImageIn` once it's node has been run. */
  protected override async result(): Promise<EraseImageIn> {
    return super.result() as Promise<EraseImageIn>;
  }
}
/** EraseImageOut */
export class EraseImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    return new FutureString(this._directive.next("image_uri"));
  }
  /** returns the result for `EraseImageOut` once it's node has been run. */
  protected override async result(): Promise<EraseImageOut> {
    return super.result() as Promise<EraseImageOut>;
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the image data will be returned as a base64-encoded string. */
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the image data will be returned as a base64-encoded string. */
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the image data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
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
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the image data will be returned as a base64-encoded string. */
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
  protected override async result(): Promise<TranscribeSpeechIn> {
    return super.result() as Promise<TranscribeSpeechIn>;
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
  protected override async result(): Promise<TranscribeSpeechOut> {
    return super.result() as Promise<TranscribeSpeechOut>;
  }
}
/** GenerateSpeechIn */
export class GenerateSpeechIn extends FutureObject {
  /** Input text. */
  get text() {
    return new FutureString(this._directive.next("text"));
  }
  /** (Optional) Use "hosted" to return an audio URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the audio data will be returned as a base64-encoded string. */
  get store() {
    return new FutureString(this._directive.next("store"));
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
  /** (Optional) Use "hosted" to return an audio URL hosted on Substrate. You can also provide a URL to a registered [file store](https://guides.substrate.run/guides/external-file-storage). If unset, the audio data will be returned as a base64-encoded string. */
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
  /** (Optional) Metadata that can be used to query the vector store. Ignored if `collection_name` is unset. */
  get metadata() {
    return new FutureAnyObject(this._directive.next("metadata"));
  }
  /** (Optional) Vector store document ID. Ignored if `collection_name` is unset. */
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
  /** (Optional) Vector store document ID. Ignored if `collection_name` is unset. */
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
  /** Metadata that can be used to query the vector store. Ignored if `collection_name` is unset. */
  get metadata() {
    return new FutureAnyObject(this._directive.next("metadata"));
  }
  /** Vector store document ID. Ignored if `collection_name` is unset. */
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
  /** (Optional) Vector store name. */
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }
  /** (Optional) Selected embedding model. */
  get model() {
    return new FutureString(this._directive.next("model"));
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
  protected override async result(): Promise<FindOrCreateVectorStoreIn> {
    return super.result() as Promise<FindOrCreateVectorStoreIn>;
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
  /** returns the result for `FindOrCreateVectorStoreOut` once it's node has been run. */
  protected override async result(): Promise<FindOrCreateVectorStoreOut> {
    return super.result() as Promise<FindOrCreateVectorStoreOut>;
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
  get items() {
    return new ListVectorStoresOutItems(this._directive.next("items"));
  }
  /** returns the result for `ListVectorStoresOut` once it's node has been run. */
  protected override async result(): Promise<ListVectorStoresOut> {
    return super.result() as Promise<ListVectorStoresOut>;
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
  protected override async result(): Promise<DeleteVectorStoreIn> {
    return super.result() as Promise<DeleteVectorStoreIn>;
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
  protected override async result(): Promise<UpdateVectorsIn> {
    return super.result() as Promise<UpdateVectorsIn>;
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
  protected override async result(): Promise<DeleteVectorsIn> {
    return super.result() as Promise<DeleteVectorsIn>;
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
  get collection_name() {
    return new FutureString(this._directive.next("collection_name"));
  }
  /** (Optional) Selected embedding model. */
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
export namespace GenerateText {
  /**
   * GenerateText Input
   * https://www.substrate.run/nodes#GenerateText
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["GenerateTextIn"]
  >;

  /**
   * GenerateText Output
   * https://www.substrate.run/nodes#GenerateText
   */
  export type Output = OpenAPI.components["schemas"]["GenerateTextOut"];
}

/**
 * Generate text using a language model.
 *
 * https://www.substrate.run/nodes#GenerateText
 */
export class GenerateText extends Node {
  /**
   * Input arguments: `prompt`, `image_uris` (optional), `temperature` (optional), `max_tokens` (optional), `model` (optional)
   *
   * Output fields: `text`
   *
   * https://www.substrate.run/nodes#GenerateText
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["GenerateTextIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `text`
   *
   * https://www.substrate.run/nodes#GenerateText
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
   * Output fields: `text`
   *
   * https://www.substrate.run/nodes#GenerateText
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
   * https://www.substrate.run/nodes#MultiGenerateText
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["MultiGenerateTextIn"]
  >;

  /**
   * MultiGenerateText Output
   * https://www.substrate.run/nodes#MultiGenerateText
   */
  export type Output = OpenAPI.components["schemas"]["MultiGenerateTextOut"];
}

/**
 * Generate multiple text choices using a language model.
 *
 * https://www.substrate.run/nodes#MultiGenerateText
 */
export class MultiGenerateText extends Node {
  /**
   * Input arguments: `prompt`, `num_choices`, `temperature` (optional), `max_tokens` (optional), `model` (optional)
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#MultiGenerateText
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["MultiGenerateTextIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#MultiGenerateText
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
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#MultiGenerateText
   */
  override get future(): MultiGenerateTextOut {
    return new MultiGenerateTextOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["MultiGenerateTextOut"] {
    return super.output() as OpenAPI.components["schemas"]["MultiGenerateTextOut"];
  }
}
export namespace BatchGenerateText {
  /**
   * BatchGenerateText Input
   * https://www.substrate.run/nodes#BatchGenerateText
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["BatchGenerateTextIn"]
  >;

  /**
   * BatchGenerateText Output
   * https://www.substrate.run/nodes#BatchGenerateText
   */
  export type Output = OpenAPI.components["schemas"]["BatchGenerateTextOut"];
}

/**
 * Generate text for multiple prompts in batch using a language model.
 *
 * https://www.substrate.run/nodes#BatchGenerateText
 */
export class BatchGenerateText extends Node {
  /**
   * Input arguments: `prompts`, `temperature` (optional), `max_tokens` (optional), `model` (optional)
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#BatchGenerateText
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["BatchGenerateTextIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#BatchGenerateText
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["BatchGenerateTextOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["BatchGenerateTextOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#BatchGenerateText
   */
  override get future(): BatchGenerateTextOut {
    return new BatchGenerateTextOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["BatchGenerateTextOut"] {
    return super.output() as OpenAPI.components["schemas"]["BatchGenerateTextOut"];
  }
}
export namespace BatchGenerateJSON {
  /**
   * BatchGenerateJSON Input
   * https://www.substrate.run/nodes#BatchGenerateJSON
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["BatchGenerateJSONIn"]
  >;

  /**
   * BatchGenerateJSON Output
   * https://www.substrate.run/nodes#BatchGenerateJSON
   */
  export type Output = OpenAPI.components["schemas"]["BatchGenerateJSONOut"];
}

/**
 * Generate JSON for multiple prompts in batch using a language model.
 *
 * https://www.substrate.run/nodes#BatchGenerateJSON
 */
export class BatchGenerateJSON extends Node {
  /**
   * Input arguments: `prompts`, `json_schema`, `temperature` (optional), `max_tokens` (optional), `model` (optional)
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#BatchGenerateJSON
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["BatchGenerateJSONIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#BatchGenerateJSON
   */
  protected override async result(): Promise<
    OpenAPI.components["schemas"]["BatchGenerateJSONOut"] | undefined
  > {
    return Promise.resolve(
      this._response ? this._response.get(this) : undefined,
    ) as Promise<
      OpenAPI.components["schemas"]["BatchGenerateJSONOut"] | undefined
    >;
  }

  /**
   * Future reference to this node's output.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#BatchGenerateJSON
   */
  override get future(): BatchGenerateJSONOut {
    return new BatchGenerateJSONOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["BatchGenerateJSONOut"] {
    return super.output() as OpenAPI.components["schemas"]["BatchGenerateJSONOut"];
  }
}
export namespace GenerateJSON {
  /**
   * GenerateJSON Input
   * https://www.substrate.run/nodes#GenerateJSON
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["GenerateJSONIn"]
  >;

  /**
   * GenerateJSON Output
   * https://www.substrate.run/nodes#GenerateJSON
   */
  export type Output = OpenAPI.components["schemas"]["GenerateJSONOut"];
}

/**
 * Generate JSON using a language model.
 *
 * https://www.substrate.run/nodes#GenerateJSON
 */
export class GenerateJSON extends Node {
  /**
   * Input arguments: `prompt`, `json_schema`, `temperature` (optional), `max_tokens` (optional), `model` (optional)
   *
   * Output fields: `json_object` (optional), `text` (optional)
   *
   * https://www.substrate.run/nodes#GenerateJSON
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["GenerateJSONIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `json_object` (optional), `text` (optional)
   *
   * https://www.substrate.run/nodes#GenerateJSON
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
   * Output fields: `json_object` (optional), `text` (optional)
   *
   * https://www.substrate.run/nodes#GenerateJSON
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
   * https://www.substrate.run/nodes#MultiGenerateJSON
   */
  export type Input = FutureExpandAny<
    OpenAPI.components["schemas"]["MultiGenerateJSONIn"]
  >;

  /**
   * MultiGenerateJSON Output
   * https://www.substrate.run/nodes#MultiGenerateJSON
   */
  export type Output = OpenAPI.components["schemas"]["MultiGenerateJSONOut"];
}

/**
 * Generate multiple JSON choices using a language model.
 *
 * https://www.substrate.run/nodes#MultiGenerateJSON
 */
export class MultiGenerateJSON extends Node {
  /**
   * Input arguments: `prompt`, `json_schema`, `num_choices`, `temperature` (optional), `max_tokens` (optional), `model` (optional)
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#MultiGenerateJSON
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["MultiGenerateJSONIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#MultiGenerateJSON
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
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#MultiGenerateJSON
   */
  override get future(): MultiGenerateJSONOut {
    return new MultiGenerateJSONOut(new Trace([], this));
  }

  protected override output(): OpenAPI.components["schemas"]["MultiGenerateJSONOut"] {
    return super.output() as OpenAPI.components["schemas"]["MultiGenerateJSONOut"];
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
 * Generate text using [Mistral 7B Instruct](https://mistral.ai/news/announcing-mistral-7b).
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
 * Generate text using instruct-tuned [Mixtral 8x7B](https://mistral.ai/news/mixtral-of-experts/).
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
 * Generate text using instruct-tuned [Llama 3 8B](https://llama.meta.com/llama3/).
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
 * Generate text using instruct-tuned [Llama 3 70B](https://llama.meta.com/llama3/).
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
 * Generate text with image input using [FireLLaVA 13B](https://fireworks.ai/blog/firellava-the-first-commercially-permissive-oss-llava-model).
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
   * Input arguments: `image_uri`, `return_mask` (optional), `background_color` (optional), `store` (optional)
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
 * Erase the masked part of an image, e.g. to 'remove' an object.
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
   * Output fields: `collection_name`, `model`
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
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `collection_name`, `model`
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
   * Output fields: `collection_name`, `model`
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
   * Input arguments: `collection_name`, `model`, `query_strings` (optional), `query_image_uris` (optional), `query_vectors` (optional), `query_ids` (optional), `top_k` (optional), `ef_search` (optional), `include_values` (optional), `include_metadata` (optional), `filters` (optional)
   *
   * Output fields: `results`, `collection_name` (optional), `model` (optional), `metric` (optional)
   *
   * https://www.substrate.run/nodes#QueryVectorStore
   */
  constructor(
    args: FutureExpandAny<OpenAPI.components["schemas"]["QueryVectorStoreIn"]>,
    options?: Options,
  ) {
    super(args, options);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: `results`, `collection_name` (optional), `model` (optional), `metric` (optional)
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
   * Output fields: `results`, `collection_name` (optional), `model` (optional), `metric` (optional)
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
  | GenerateText
  | MultiGenerateText
  | BatchGenerateText
  | BatchGenerateJSON
  | GenerateJSON
  | MultiGenerateJSON
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
  | TranscribeSpeech
  | GenerateSpeech
  | RemoveBackground
  | EraseImage
  | UpscaleImage
  | SegmentUnderPoint
  | SegmentAnything
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
  : T extends GenerateText
    ? OpenAPI.components["schemas"]["GenerateTextOut"]
    : T extends MultiGenerateText
      ? OpenAPI.components["schemas"]["MultiGenerateTextOut"]
      : T extends BatchGenerateText
        ? OpenAPI.components["schemas"]["BatchGenerateTextOut"]
        : T extends BatchGenerateJSON
          ? OpenAPI.components["schemas"]["BatchGenerateJSONOut"]
          : T extends GenerateJSON
            ? OpenAPI.components["schemas"]["GenerateJSONOut"]
            : T extends MultiGenerateJSON
              ? OpenAPI.components["schemas"]["MultiGenerateJSONOut"]
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
