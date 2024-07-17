/**
 * 𐃏 Substrate
 * @generated file
 * 20240617.20240715
 */

import * as OpenAPI from "substrate/OpenAPI";
import { Node, Options } from "substrate/Node";
import { Trace, Future } from "substrate/Future";
import { proxyFactory } from "substrate/ProxiedFuture";

// The following type helpers are used to "expand" Node input types to allow them to also accept
// instances of their corresponding "Future" types.

type FutureExpandItem<T> = T extends string
  ? string | Future<string>
  : T extends number
    ? number | Future<number>
    : T extends boolean
      ? boolean | Future<boolean>
      : T;

type FutureExpandObject<T> = T extends object
  ? { [P in keyof T]: FutureExpandAny<T[P]> } | Future<Object>
  : T;

type FutureExpandArray<T> = T extends (infer U)[]
  ? FutureExpandAny<U>[] | Future<U[]>
  : FutureExpandAny<T>;

type FutureExpandAny<T> = T extends (infer U)[]
  ? FutureExpandArray<U>[] | Future<U[]>
  : T extends object
    ? FutureExpandObject<T>
    : FutureExpandItem<T>;

/** Image prompts. */

export class ComputeTextInImageUris extends Future<string[]> {
  /** Returns `Future<string>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<string>(this._directive.next(index));
  }
  /** @internal Returns the result for `ComputeTextInImageUris` once it's node has been run. */
  protected override async _result(): Promise<string[]> {
    return super._result() as Promise<string[]>;
  }
}

/** Response choices. */

export class MultiComputeTextOutChoices extends Future<ComputeTextOut[]> {
  /** Returns `ComputeTextOut` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new ComputeTextOut(this._directive.next(index));
  }
  /** @internal Returns the result for `MultiComputeTextOutChoices` once it's node has been run. */
  protected override async _result(): Promise<ComputeTextOut[]> {
    return super._result() as Promise<ComputeTextOut[]>;
  }
}

/** Batch input prompts. */

export class BatchComputeTextInPrompts extends Future<string[]> {
  /** Returns `Future<string>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<string>(this._directive.next(index));
  }
  /** @internal Returns the result for `BatchComputeTextInPrompts` once it's node has been run. */
  protected override async _result(): Promise<string[]> {
    return super._result() as Promise<string[]>;
  }
}

/** Batch outputs. */

export class BatchComputeTextOutOutputs extends Future<ComputeTextOut[]> {
  /** Returns `ComputeTextOut` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new ComputeTextOut(this._directive.next(index));
  }
  /** @internal Returns the result for `BatchComputeTextOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<ComputeTextOut[]> {
    return super._result() as Promise<ComputeTextOut[]>;
  }
}

/** Response choices. */

export class MultiComputeJSONOutChoices extends Future<ComputeJSONOut[]> {
  /** Returns `ComputeJSONOut` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new ComputeJSONOut(this._directive.next(index));
  }
  /** @internal Returns the result for `MultiComputeJSONOutChoices` once it's node has been run. */
  protected override async _result(): Promise<ComputeJSONOut[]> {
    return super._result() as Promise<ComputeJSONOut[]>;
  }
}

/** Batch input prompts. */

export class BatchComputeJSONInPrompts extends Future<string[]> {
  /** Returns `Future<string>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<string>(this._directive.next(index));
  }
  /** @internal Returns the result for `BatchComputeJSONInPrompts` once it's node has been run. */
  protected override async _result(): Promise<string[]> {
    return super._result() as Promise<string[]>;
  }
}

/** Batch outputs. */

export class BatchComputeJSONOutOutputs extends Future<ComputeJSONOut[]> {
  /** Returns `ComputeJSONOut` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new ComputeJSONOut(this._directive.next(index));
  }
  /** @internal Returns the result for `BatchComputeJSONOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<ComputeJSONOut[]> {
    return super._result() as Promise<ComputeJSONOut[]>;
  }
}

/** Response choices. */

export class Mistral7BInstructOutChoices extends Future<
  Mistral7BInstructChoice[]
> {
  /** Returns `Mistral7BInstructChoice` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Mistral7BInstructChoice(this._directive.next(index));
  }
  /** @internal Returns the result for `Mistral7BInstructOutChoices` once it's node has been run. */
  protected override async _result(): Promise<Mistral7BInstructChoice[]> {
    return super._result() as Promise<Mistral7BInstructChoice[]>;
  }
}

/** Response choices. */

export class Mixtral8x7BInstructOutChoices extends Future<Mixtral8x7BChoice[]> {
  /** Returns `Mixtral8x7BChoice` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Mixtral8x7BChoice(this._directive.next(index));
  }
  /** @internal Returns the result for `Mixtral8x7BInstructOutChoices` once it's node has been run. */
  protected override async _result(): Promise<Mixtral8x7BChoice[]> {
    return super._result() as Promise<Mixtral8x7BChoice[]>;
  }
}

/** Response choices. */

export class Llama3Instruct8BOutChoices extends Future<
  Llama3Instruct8BChoice[]
> {
  /** Returns `Llama3Instruct8BChoice` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Llama3Instruct8BChoice(this._directive.next(index));
  }
  /** @internal Returns the result for `Llama3Instruct8BOutChoices` once it's node has been run. */
  protected override async _result(): Promise<Llama3Instruct8BChoice[]> {
    return super._result() as Promise<Llama3Instruct8BChoice[]>;
  }
}

/** Response choices. */

export class Llama3Instruct70BOutChoices extends Future<
  Llama3Instruct70BChoice[]
> {
  /** Returns `Llama3Instruct70BChoice` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Llama3Instruct70BChoice(this._directive.next(index));
  }
  /** @internal Returns the result for `Llama3Instruct70BOutChoices` once it's node has been run. */
  protected override async _result(): Promise<Llama3Instruct70BChoice[]> {
    return super._result() as Promise<Llama3Instruct70BChoice[]>;
  }
}

/** Image prompts. */

export class Firellava13BInImageUris extends Future<string[]> {
  /** Returns `Future<string>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<string>(this._directive.next(index));
  }
  /** @internal Returns the result for `Firellava13BInImageUris` once it's node has been run. */
  protected override async _result(): Promise<string[]> {
    return super._result() as Promise<string[]>;
  }
}

/** Generated images. */

export class MultiGenerateImageOutOutputs extends Future<GenerateImageOut[]> {
  /** Returns `GenerateImageOut` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new GenerateImageOut(this._directive.next(index));
  }
  /** @internal Returns the result for `MultiGenerateImageOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<GenerateImageOut[]> {
    return super._result() as Promise<GenerateImageOut[]>;
  }
}

/** Seeds for deterministic generation. Default is a random seed. */

export class StableDiffusionXLInSeeds extends Future<number[]> {
  /** Returns `Future<number>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<number>(this._directive.next(index));
  }
  /** @internal Returns the result for `StableDiffusionXLInSeeds` once it's node has been run. */
  protected override async _result(): Promise<number[]> {
    return super._result() as Promise<number[]>;
  }
}

/** Generated images. */

export class StableDiffusionXLOutOutputs extends Future<
  StableDiffusionImage[]
> {
  /** Returns `StableDiffusionImage` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new StableDiffusionImage(this._directive.next(index));
  }
  /** @internal Returns the result for `StableDiffusionXLOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionImage[]> {
    return super._result() as Promise<StableDiffusionImage[]>;
  }
}

/** Seeds for deterministic generation. Default is a random seed. */

export class StableDiffusionXLLightningInSeeds extends Future<number[]> {
  /** Returns `Future<number>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<number>(this._directive.next(index));
  }
  /** @internal Returns the result for `StableDiffusionXLLightningInSeeds` once it's node has been run. */
  protected override async _result(): Promise<number[]> {
    return super._result() as Promise<number[]>;
  }
}

/** Generated images. */

export class StableDiffusionXLLightningOutOutputs extends Future<
  StableDiffusionImage[]
> {
  /** Returns `StableDiffusionImage` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new StableDiffusionImage(this._directive.next(index));
  }
  /** @internal Returns the result for `StableDiffusionXLLightningOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionImage[]> {
    return super._result() as Promise<StableDiffusionImage[]>;
  }
}

/** Random noise seeds. Default is random seeds for each generation. */

export class StableDiffusionXLIPAdapterInSeeds extends Future<number[]> {
  /** Returns `Future<number>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<number>(this._directive.next(index));
  }
  /** @internal Returns the result for `StableDiffusionXLIPAdapterInSeeds` once it's node has been run. */
  protected override async _result(): Promise<number[]> {
    return super._result() as Promise<number[]>;
  }
}

/** Generated images. */

export class StableDiffusionXLIPAdapterOutOutputs extends Future<
  StableDiffusionImage[]
> {
  /** Returns `StableDiffusionImage` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new StableDiffusionImage(this._directive.next(index));
  }
  /** @internal Returns the result for `StableDiffusionXLIPAdapterOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionImage[]> {
    return super._result() as Promise<StableDiffusionImage[]>;
  }
}

/** Random noise seeds. Default is random seeds for each generation. */

export class StableDiffusionXLControlNetInSeeds extends Future<number[]> {
  /** Returns `Future<number>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<number>(this._directive.next(index));
  }
  /** @internal Returns the result for `StableDiffusionXLControlNetInSeeds` once it's node has been run. */
  protected override async _result(): Promise<number[]> {
    return super._result() as Promise<number[]>;
  }
}

/** Generated images. */

export class StableDiffusionXLControlNetOutOutputs extends Future<
  StableDiffusionImage[]
> {
  /** Returns `StableDiffusionImage` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new StableDiffusionImage(this._directive.next(index));
  }
  /** @internal Returns the result for `StableDiffusionXLControlNetOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionImage[]> {
    return super._result() as Promise<StableDiffusionImage[]>;
  }
}

/** Generated images. */

export class MultiInpaintImageOutOutputs extends Future<InpaintImageOut[]> {
  /** Returns `InpaintImageOut` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new InpaintImageOut(this._directive.next(index));
  }
  /** @internal Returns the result for `MultiInpaintImageOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<InpaintImageOut[]> {
    return super._result() as Promise<InpaintImageOut[]>;
  }
}

/** Random noise seeds. Default is random seeds for each generation. */

export class StableDiffusionXLInpaintInSeeds extends Future<number[]> {
  /** Returns `Future<number>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<number>(this._directive.next(index));
  }
  /** @internal Returns the result for `StableDiffusionXLInpaintInSeeds` once it's node has been run. */
  protected override async _result(): Promise<number[]> {
    return super._result() as Promise<number[]>;
  }
}

/** Generated images. */

export class StableDiffusionXLInpaintOutOutputs extends Future<
  StableDiffusionImage[]
> {
  /** Returns `StableDiffusionImage` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new StableDiffusionImage(this._directive.next(index));
  }
  /** @internal Returns the result for `StableDiffusionXLInpaintOutOutputs` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionImage[]> {
    return super._result() as Promise<StableDiffusionImage[]>;
  }
}

/** Point prompts, to detect a segment under the point. One of `point_prompts` or `box_prompts` must be set. */

export class SegmentAnythingInPointPrompts extends Future<Point[]> {
  /** Returns `Point` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Point(this._directive.next(index));
  }
  /** @internal Returns the result for `SegmentAnythingInPointPrompts` once it's node has been run. */
  protected override async _result(): Promise<Point[]> {
    return super._result() as Promise<Point[]>;
  }
}

/** Box prompts, to detect a segment within the bounding box. One of `point_prompts` or `box_prompts` must be set. */

export class SegmentAnythingInBoxPrompts extends Future<BoundingBox[]> {
  /** Returns `BoundingBox` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new BoundingBox(this._directive.next(index));
  }
  /** @internal Returns the result for `SegmentAnythingInBoxPrompts` once it's node has been run. */
  protected override async _result(): Promise<BoundingBox[]> {
    return super._result() as Promise<BoundingBox[]>;
  }
}

/** Aligned words, if `align` is enabled. */

export class TranscribedSegmentWords extends Future<TranscribedWord[]> {
  /** Returns `TranscribedWord` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new TranscribedWord(this._directive.next(index));
  }
  /** @internal Returns the result for `TranscribedSegmentWords` once it's node has been run. */
  protected override async _result(): Promise<TranscribedWord[]> {
    return super._result() as Promise<TranscribedWord[]>;
  }
}

/** Transcribed segments, if `segment` is enabled. */

export class TranscribeSpeechOutSegments extends Future<TranscribedSegment[]> {
  /** Returns `TranscribedSegment` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new TranscribedSegment(this._directive.next(index));
  }
  /** @internal Returns the result for `TranscribeSpeechOutSegments` once it's node has been run. */
  protected override async _result(): Promise<TranscribedSegment[]> {
    return super._result() as Promise<TranscribedSegment[]>;
  }
}

/** Chapter markers, if `suggest_chapters` is enabled. */

export class TranscribeSpeechOutChapters extends Future<ChapterMarker[]> {
  /** Returns `ChapterMarker` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new ChapterMarker(this._directive.next(index));
  }
  /** @internal Returns the result for `TranscribeSpeechOutChapters` once it's node has been run. */
  protected override async _result(): Promise<ChapterMarker[]> {
    return super._result() as Promise<ChapterMarker[]>;
  }
}

/** Embedding vector. */

export class EmbeddingVector extends Future<number[]> {
  /** Returns `Future<number>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<number>(this._directive.next(index));
  }
  /** @internal Returns the result for `EmbeddingVector` once it's node has been run. */
  protected override async _result(): Promise<number[]> {
    return super._result() as Promise<number[]>;
  }
}

/** Choose keys from `metadata` to embed with text. */

export class EmbedTextInEmbeddedMetadataKeys extends Future<string[]> {
  /** Returns `Future<string>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<string>(this._directive.next(index));
  }
  /** @internal Returns the result for `EmbedTextInEmbeddedMetadataKeys` once it's node has been run. */
  protected override async _result(): Promise<string[]> {
    return super._result() as Promise<string[]>;
  }
}

/** Items to embed. */

export class MultiEmbedTextInItems extends Future<EmbedTextItem[]> {
  /** Returns `EmbedTextItem` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new EmbedTextItem(this._directive.next(index));
  }
  /** @internal Returns the result for `MultiEmbedTextInItems` once it's node has been run. */
  protected override async _result(): Promise<EmbedTextItem[]> {
    return super._result() as Promise<EmbedTextItem[]>;
  }
}

/** Choose keys from `metadata` to embed with text. */

export class MultiEmbedTextInEmbeddedMetadataKeys extends Future<string[]> {
  /** Returns `Future<string>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<string>(this._directive.next(index));
  }
  /** @internal Returns the result for `MultiEmbedTextInEmbeddedMetadataKeys` once it's node has been run. */
  protected override async _result(): Promise<string[]> {
    return super._result() as Promise<string[]>;
  }
}

/** Generated embeddings. */

export class MultiEmbedTextOutEmbeddings extends Future<Embedding[]> {
  /** Returns `Embedding` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Embedding(this._directive.next(index));
  }
  /** @internal Returns the result for `MultiEmbedTextOutEmbeddings` once it's node has been run. */
  protected override async _result(): Promise<Embedding[]> {
    return super._result() as Promise<Embedding[]>;
  }
}

/** Items to embed. */

export class JinaV2InItems extends Future<EmbedTextItem[]> {
  /** Returns `EmbedTextItem` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new EmbedTextItem(this._directive.next(index));
  }
  /** @internal Returns the result for `JinaV2InItems` once it's node has been run. */
  protected override async _result(): Promise<EmbedTextItem[]> {
    return super._result() as Promise<EmbedTextItem[]>;
  }
}

/** Choose keys from `metadata` to embed with text. */

export class JinaV2InEmbeddedMetadataKeys extends Future<string[]> {
  /** Returns `Future<string>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<string>(this._directive.next(index));
  }
  /** @internal Returns the result for `JinaV2InEmbeddedMetadataKeys` once it's node has been run. */
  protected override async _result(): Promise<string[]> {
    return super._result() as Promise<string[]>;
  }
}

/** Generated embeddings. */

export class JinaV2OutEmbeddings extends Future<Embedding[]> {
  /** Returns `Embedding` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Embedding(this._directive.next(index));
  }
  /** @internal Returns the result for `JinaV2OutEmbeddings` once it's node has been run. */
  protected override async _result(): Promise<Embedding[]> {
    return super._result() as Promise<Embedding[]>;
  }
}

/** Items to embed. */

export class MultiEmbedImageInItems extends Future<EmbedImageItem[]> {
  /** Returns `EmbedImageItem` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new EmbedImageItem(this._directive.next(index));
  }
  /** @internal Returns the result for `MultiEmbedImageInItems` once it's node has been run. */
  protected override async _result(): Promise<EmbedImageItem[]> {
    return super._result() as Promise<EmbedImageItem[]>;
  }
}

/** Generated embeddings. */

export class MultiEmbedImageOutEmbeddings extends Future<Embedding[]> {
  /** Returns `Embedding` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Embedding(this._directive.next(index));
  }
  /** @internal Returns the result for `MultiEmbedImageOutEmbeddings` once it's node has been run. */
  protected override async _result(): Promise<Embedding[]> {
    return super._result() as Promise<Embedding[]>;
  }
}

/** Items to embed. */

export class CLIPInItems extends Future<EmbedTextOrImageItem[]> {
  /** Returns `EmbedTextOrImageItem` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new EmbedTextOrImageItem(this._directive.next(index));
  }
  /** @internal Returns the result for `CLIPInItems` once it's node has been run. */
  protected override async _result(): Promise<EmbedTextOrImageItem[]> {
    return super._result() as Promise<EmbedTextOrImageItem[]>;
  }
}

/** Choose keys from `metadata` to embed with text. Only applies to text items. */

export class CLIPInEmbeddedMetadataKeys extends Future<string[]> {
  /** Returns `Future<string>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<string>(this._directive.next(index));
  }
  /** @internal Returns the result for `CLIPInEmbeddedMetadataKeys` once it's node has been run. */
  protected override async _result(): Promise<string[]> {
    return super._result() as Promise<string[]>;
  }
}

/** Generated embeddings. */

export class CLIPOutEmbeddings extends Future<Embedding[]> {
  /** Returns `Embedding` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Embedding(this._directive.next(index));
  }
  /** @internal Returns the result for `CLIPOutEmbeddings` once it's node has been run. */
  protected override async _result(): Promise<Embedding[]> {
    return super._result() as Promise<Embedding[]>;
  }
}

/** List of vector stores. */

export class ListVectorStoresOutItems extends Future<
  FindOrCreateVectorStoreOut[]
> {
  /** Returns `FindOrCreateVectorStoreOut` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new FindOrCreateVectorStoreOut(this._directive.next(index));
  }
  /** @internal Returns the result for `ListVectorStoresOutItems` once it's node has been run. */
  protected override async _result(): Promise<FindOrCreateVectorStoreOut[]> {
    return super._result() as Promise<FindOrCreateVectorStoreOut[]>;
  }
}

/** Embedding vector. */

export class VectorVector extends Future<number[]> {
  /** Returns `Future<number>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<number>(this._directive.next(index));
  }
  /** @internal Returns the result for `VectorVector` once it's node has been run. */
  protected override async _result(): Promise<number[]> {
    return super._result() as Promise<number[]>;
  }
}

/** Document IDs to retrieve. */

export class FetchVectorsInIds extends Future<string[]> {
  /** Returns `Future<string>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<string>(this._directive.next(index));
  }
  /** @internal Returns the result for `FetchVectorsInIds` once it's node has been run. */
  protected override async _result(): Promise<string[]> {
    return super._result() as Promise<string[]>;
  }
}

/** Retrieved vectors. */

export class FetchVectorsOutVectors extends Future<Vector[]> {
  /** Returns `Vector` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Vector(this._directive.next(index));
  }
  /** @internal Returns the result for `FetchVectorsOutVectors` once it's node has been run. */
  protected override async _result(): Promise<Vector[]> {
    return super._result() as Promise<Vector[]>;
  }
}

/** Embedding vector. */

export class UpdateVectorParamsVector extends Future<number[]> {
  /** Returns `Future<number>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<number>(this._directive.next(index));
  }
  /** @internal Returns the result for `UpdateVectorParamsVector` once it's node has been run. */
  protected override async _result(): Promise<number[]> {
    return super._result() as Promise<number[]>;
  }
}

/** Vectors to upsert. */

export class UpdateVectorsInVectors extends Future<UpdateVectorParams[]> {
  /** Returns `UpdateVectorParams` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new UpdateVectorParams(this._directive.next(index));
  }
  /** @internal Returns the result for `UpdateVectorsInVectors` once it's node has been run. */
  protected override async _result(): Promise<UpdateVectorParams[]> {
    return super._result() as Promise<UpdateVectorParams[]>;
  }
}

/** Document IDs to delete. */

export class DeleteVectorsInIds extends Future<string[]> {
  /** Returns `Future<string>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<string>(this._directive.next(index));
  }
  /** @internal Returns the result for `DeleteVectorsInIds` once it's node has been run. */
  protected override async _result(): Promise<string[]> {
    return super._result() as Promise<string[]>;
  }
}

/** Texts to embed and use for the query. */

export class QueryVectorStoreInQueryStrings extends Future<string[]> {
  /** Returns `Future<string>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<string>(this._directive.next(index));
  }
  /** @internal Returns the result for `QueryVectorStoreInQueryStrings` once it's node has been run. */
  protected override async _result(): Promise<string[]> {
    return super._result() as Promise<string[]>;
  }
}

/** Image URIs to embed and use for the query. */

export class QueryVectorStoreInQueryImageUris extends Future<string[]> {
  /** Returns `Future<string>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<string>(this._directive.next(index));
  }
  /** @internal Returns the result for `QueryVectorStoreInQueryImageUris` once it's node has been run. */
  protected override async _result(): Promise<string[]> {
    return super._result() as Promise<string[]>;
  }
}

/** Vectors to use for the query. */
// this is an n-dimensional array and for now we're generating another array type with "Item" appended

export class QueryVectorStoreInQueryVectors extends Future<QueryVectorStoreInQueryVectorsItem> {
  /** Returns `QueryVectorStoreInQueryVectorsItem` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new QueryVectorStoreInQueryVectorsItem(this._directive.next(index));
  }
  /** @internal Returns the result for `QueryVectorStoreInQueryVectors` once it's node has been run. */
  protected override async _result(): Promise<QueryVectorStoreInQueryVectorsItem> {
    return super._result() as Promise<QueryVectorStoreInQueryVectorsItem>;
  }
}

/** QueryVectorStoreInQueryVectorsItem */

export class QueryVectorStoreInQueryVectorsItem extends Future<number[]> {
  /** Returns `Future<number>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<number>(this._directive.next(index));
  }
  /** @internal Returns the result for `QueryVectorStoreInQueryVectorsItem` once it's node has been run. */
  protected override async _result(): Promise<number[]> {
    return super._result() as Promise<number[]>;
  }
}

/** Document IDs to use for the query. */

export class QueryVectorStoreInQueryIds extends Future<string[]> {
  /** Returns `Future<string>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<string>(this._directive.next(index));
  }
  /** @internal Returns the result for `QueryVectorStoreInQueryIds` once it's node has been run. */
  protected override async _result(): Promise<string[]> {
    return super._result() as Promise<string[]>;
  }
}

/** Embedding vector. */

export class VectorStoreQueryResultVector extends Future<number[]> {
  /** Returns `Future<number>` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new Future<number>(this._directive.next(index));
  }
  /** @internal Returns the result for `VectorStoreQueryResultVector` once it's node has been run. */
  protected override async _result(): Promise<number[]> {
    return super._result() as Promise<number[]>;
  }
}

/** Query results. */
// this is an n-dimensional array and for now we're generating another array type with "Item" appended

export class QueryVectorStoreOutResults extends Future<QueryVectorStoreOutResultsItem> {
  /** Returns `QueryVectorStoreOutResultsItem` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new QueryVectorStoreOutResultsItem(this._directive.next(index));
  }
  /** @internal Returns the result for `QueryVectorStoreOutResults` once it's node has been run. */
  protected override async _result(): Promise<QueryVectorStoreOutResultsItem> {
    return super._result() as Promise<QueryVectorStoreOutResultsItem>;
  }
}

/** QueryVectorStoreOutResultsItem */

export class QueryVectorStoreOutResultsItem extends Future<
  VectorStoreQueryResult[]
> {
  /** Returns `VectorStoreQueryResult` at given index. */
  at(index: number | Future<number>) {
    // @ts-ignore
    if (index instanceof Future) index._runtimeHint = "number";
    // @ts-ignore
    return new VectorStoreQueryResult(this._directive.next(index));
  }
  /** @internal Returns the result for `QueryVectorStoreOutResultsItem` once it's node has been run. */
  protected override async _result(): Promise<VectorStoreQueryResult[]> {
    return super._result() as Promise<VectorStoreQueryResult[]>;
  }
}

/** ErrorOut */
export class ErrorOut extends Future<Object> {
  // prop = type
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** The type of error returned. */
  get type() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("type"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = message
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** A message providing more details about the error. */
  get message() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("message"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `ErrorOut` once it's node has been run. */
  protected override async _result(): Promise<ErrorOut> {
    return super._result() as Promise<ErrorOut>;
  }
}

/** ExperimentalOut */
export class ExperimentalOut extends Future<Object> {
  // prop = output
  // prop.type = object
  // prop.ref = None
  // prop_return_class = Future<Object>
  // use_proxy = True

  /** Response. */
  get output() {
    // @ts-ignore
    const future = new Future<Object>(this._directive.next("output"));
    // @ts-ignore
    future._runtimeHint = "object";

    return proxyFactory.makeProxy(future);
  }

  /** @internal returns the result for `ExperimentalOut` once it's node has been run. */
  protected override async _result(): Promise<ExperimentalOut> {
    return super._result() as Promise<ExperimentalOut>;
  }
}

/** BoxOut */
export class BoxOut extends Future<Object> {
  // prop = value
  // prop.type = None
  // prop.ref = None
  // prop_return_class = Future<Object>
  // use_proxy = True

  /** The evaluated result. */
  get value() {
    // @ts-ignore
    const future = new Future<Object>(this._directive.next("value"));
    // @ts-ignore
    future._runtimeHint = "object";

    return proxyFactory.makeProxy(future);
  }

  /** @internal returns the result for `BoxOut` once it's node has been run. */
  protected override async _result(): Promise<BoxOut> {
    return super._result() as Promise<BoxOut>;
  }
}

/** IfOut */
export class IfOut extends Future<Object> {
  // prop = result
  // prop.type = None
  // prop.ref = None
  // prop_return_class = Future<Object>
  // use_proxy = True

  /** Result. Null if `value_if_false` is not provided and `condition` is false. */
  get result() {
    // @ts-ignore
    const future = new Future<Object>(this._directive.next("result"));
    // @ts-ignore
    future._runtimeHint = "object";

    return proxyFactory.makeProxy(future);
  }

  /** @internal returns the result for `IfOut` once it's node has been run. */
  protected override async _result(): Promise<IfOut> {
    return super._result() as Promise<IfOut>;
  }
}

/** ComputeTextOut */
export class ComputeTextOut extends Future<Object> {
  // prop = text
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Text response. */
  get text() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("text"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `ComputeTextOut` once it's node has been run. */
  protected override async _result(): Promise<ComputeTextOut> {
    return super._result() as Promise<ComputeTextOut>;
  }
}

/** ComputeJSONOut */
export class ComputeJSONOut extends Future<Object> {
  // prop = json_object
  // prop.type = object
  // prop.ref = None
  // prop_return_class = Future<Object>
  // use_proxy = True

  /** JSON response. */
  get json_object() {
    // @ts-ignore
    const future = new Future<Object>(this._directive.next("json_object"));
    // @ts-ignore
    future._runtimeHint = "object";

    return proxyFactory.makeProxy(future);
  }

  // prop = text
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** If the model output could not be parsed to JSON, this is the raw text output. */
  get text() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("text"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `ComputeJSONOut` once it's node has been run. */
  protected override async _result(): Promise<ComputeJSONOut> {
    return super._result() as Promise<ComputeJSONOut>;
  }
}

/** MultiComputeTextOut */
export class MultiComputeTextOut extends Future<Object> {
  // prop = choices
  // prop.type = array
  // prop.ref = None
  // prop_return_class = MultiComputeTextOutChoices
  // use_proxy = False

  /** Response choices. */
  get choices() {
    // @ts-ignore
    const future = new MultiComputeTextOutChoices(
      this._directive.next("choices"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `MultiComputeTextOut` once it's node has been run. */
  protected override async _result(): Promise<MultiComputeTextOut> {
    return super._result() as Promise<MultiComputeTextOut>;
  }
}

/** BatchComputeTextOut */
export class BatchComputeTextOut extends Future<Object> {
  // prop = outputs
  // prop.type = array
  // prop.ref = None
  // prop_return_class = BatchComputeTextOutOutputs
  // use_proxy = False

  /** Batch outputs. */
  get outputs() {
    // @ts-ignore
    const future = new BatchComputeTextOutOutputs(
      this._directive.next("outputs"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `BatchComputeTextOut` once it's node has been run. */
  protected override async _result(): Promise<BatchComputeTextOut> {
    return super._result() as Promise<BatchComputeTextOut>;
  }
}

/** MultiComputeJSONOut */
export class MultiComputeJSONOut extends Future<Object> {
  // prop = choices
  // prop.type = array
  // prop.ref = None
  // prop_return_class = MultiComputeJSONOutChoices
  // use_proxy = False

  /** Response choices. */
  get choices() {
    // @ts-ignore
    const future = new MultiComputeJSONOutChoices(
      this._directive.next("choices"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `MultiComputeJSONOut` once it's node has been run. */
  protected override async _result(): Promise<MultiComputeJSONOut> {
    return super._result() as Promise<MultiComputeJSONOut>;
  }
}

/** BatchComputeJSONOut */
export class BatchComputeJSONOut extends Future<Object> {
  // prop = outputs
  // prop.type = array
  // prop.ref = None
  // prop_return_class = BatchComputeJSONOutOutputs
  // use_proxy = False

  /** Batch outputs. */
  get outputs() {
    // @ts-ignore
    const future = new BatchComputeJSONOutOutputs(
      this._directive.next("outputs"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `BatchComputeJSONOut` once it's node has been run. */
  protected override async _result(): Promise<BatchComputeJSONOut> {
    return super._result() as Promise<BatchComputeJSONOut>;
  }
}

/** Mistral7BInstructChoice */
export class Mistral7BInstructChoice extends Future<Object> {
  // prop = text
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Text response, if `json_schema` was not provided. */
  get text() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("text"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = json_object
  // prop.type = object
  // prop.ref = None
  // prop_return_class = Future<Object>
  // use_proxy = True

  /** JSON response, if `json_schema` was provided. */
  get json_object() {
    // @ts-ignore
    const future = new Future<Object>(this._directive.next("json_object"));
    // @ts-ignore
    future._runtimeHint = "object";

    return proxyFactory.makeProxy(future);
  }

  /** @internal returns the result for `Mistral7BInstructChoice` once it's node has been run. */
  protected override async _result(): Promise<Mistral7BInstructChoice> {
    return super._result() as Promise<Mistral7BInstructChoice>;
  }
}

/** Mistral7BInstructOut */
export class Mistral7BInstructOut extends Future<Object> {
  // prop = choices
  // prop.type = array
  // prop.ref = None
  // prop_return_class = Mistral7BInstructOutChoices
  // use_proxy = False

  /** Response choices. */
  get choices() {
    // @ts-ignore
    const future = new Mistral7BInstructOutChoices(
      this._directive.next("choices"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `Mistral7BInstructOut` once it's node has been run. */
  protected override async _result(): Promise<Mistral7BInstructOut> {
    return super._result() as Promise<Mistral7BInstructOut>;
  }
}

/** Mixtral8x7BChoice */
export class Mixtral8x7BChoice extends Future<Object> {
  // prop = text
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Text response, if `json_schema` was not provided. */
  get text() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("text"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = json_object
  // prop.type = object
  // prop.ref = None
  // prop_return_class = Future<Object>
  // use_proxy = True

  /** JSON response, if `json_schema` was provided. */
  get json_object() {
    // @ts-ignore
    const future = new Future<Object>(this._directive.next("json_object"));
    // @ts-ignore
    future._runtimeHint = "object";

    return proxyFactory.makeProxy(future);
  }

  /** @internal returns the result for `Mixtral8x7BChoice` once it's node has been run. */
  protected override async _result(): Promise<Mixtral8x7BChoice> {
    return super._result() as Promise<Mixtral8x7BChoice>;
  }
}

/** Mixtral8x7BInstructOut */
export class Mixtral8x7BInstructOut extends Future<Object> {
  // prop = choices
  // prop.type = array
  // prop.ref = None
  // prop_return_class = Mixtral8x7BInstructOutChoices
  // use_proxy = False

  /** Response choices. */
  get choices() {
    // @ts-ignore
    const future = new Mixtral8x7BInstructOutChoices(
      this._directive.next("choices"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `Mixtral8x7BInstructOut` once it's node has been run. */
  protected override async _result(): Promise<Mixtral8x7BInstructOut> {
    return super._result() as Promise<Mixtral8x7BInstructOut>;
  }
}

/** Llama3Instruct8BChoice */
export class Llama3Instruct8BChoice extends Future<Object> {
  // prop = text
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Text response. */
  get text() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("text"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = json_object
  // prop.type = object
  // prop.ref = None
  // prop_return_class = Future<Object>
  // use_proxy = True

  /** JSON response, if `json_schema` was provided. */
  get json_object() {
    // @ts-ignore
    const future = new Future<Object>(this._directive.next("json_object"));
    // @ts-ignore
    future._runtimeHint = "object";

    return proxyFactory.makeProxy(future);
  }

  /** @internal returns the result for `Llama3Instruct8BChoice` once it's node has been run. */
  protected override async _result(): Promise<Llama3Instruct8BChoice> {
    return super._result() as Promise<Llama3Instruct8BChoice>;
  }
}

/** Llama3Instruct8BOut */
export class Llama3Instruct8BOut extends Future<Object> {
  // prop = choices
  // prop.type = array
  // prop.ref = None
  // prop_return_class = Llama3Instruct8BOutChoices
  // use_proxy = False

  /** Response choices. */
  get choices() {
    // @ts-ignore
    const future = new Llama3Instruct8BOutChoices(
      this._directive.next("choices"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `Llama3Instruct8BOut` once it's node has been run. */
  protected override async _result(): Promise<Llama3Instruct8BOut> {
    return super._result() as Promise<Llama3Instruct8BOut>;
  }
}

/** Llama3Instruct70BChoice */
export class Llama3Instruct70BChoice extends Future<Object> {
  // prop = text
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Text response. */
  get text() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("text"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `Llama3Instruct70BChoice` once it's node has been run. */
  protected override async _result(): Promise<Llama3Instruct70BChoice> {
    return super._result() as Promise<Llama3Instruct70BChoice>;
  }
}

/** Llama3Instruct70BOut */
export class Llama3Instruct70BOut extends Future<Object> {
  // prop = choices
  // prop.type = array
  // prop.ref = None
  // prop_return_class = Llama3Instruct70BOutChoices
  // use_proxy = False

  /** Response choices. */
  get choices() {
    // @ts-ignore
    const future = new Llama3Instruct70BOutChoices(
      this._directive.next("choices"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `Llama3Instruct70BOut` once it's node has been run. */
  protected override async _result(): Promise<Llama3Instruct70BOut> {
    return super._result() as Promise<Llama3Instruct70BOut>;
  }
}

/** Firellava13BOut */
export class Firellava13BOut extends Future<Object> {
  // prop = text
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Text response. */
  get text() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("text"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `Firellava13BOut` once it's node has been run. */
  protected override async _result(): Promise<Firellava13BOut> {
    return super._result() as Promise<Firellava13BOut>;
  }
}

/** GenerateImageOut */
export class GenerateImageOut extends Future<Object> {
  // prop = image_uri
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("image_uri"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `GenerateImageOut` once it's node has been run. */
  protected override async _result(): Promise<GenerateImageOut> {
    return super._result() as Promise<GenerateImageOut>;
  }
}

/** MultiGenerateImageOut */
export class MultiGenerateImageOut extends Future<Object> {
  // prop = outputs
  // prop.type = array
  // prop.ref = None
  // prop_return_class = MultiGenerateImageOutOutputs
  // use_proxy = False

  /** Generated images. */
  get outputs() {
    // @ts-ignore
    const future = new MultiGenerateImageOutOutputs(
      this._directive.next("outputs"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `MultiGenerateImageOut` once it's node has been run. */
  protected override async _result(): Promise<MultiGenerateImageOut> {
    return super._result() as Promise<MultiGenerateImageOut>;
  }
}

/** StableDiffusionImage */
export class StableDiffusionImage extends Future<Object> {
  // prop = image_uri
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("image_uri"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = seed
  // prop.type = integer
  // prop.ref = None
  // prop_return_class = Future<number>
  // use_proxy = False

  /** The random noise seed used for generation. */
  get seed() {
    // @ts-ignore
    const future = new Future<number>(this._directive.next("seed"));
    // @ts-ignore
    future._runtimeHint = "number";

    return future;
  }

  /** @internal returns the result for `StableDiffusionImage` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionImage> {
    return super._result() as Promise<StableDiffusionImage>;
  }
}

/** StableDiffusionXLOut */
export class StableDiffusionXLOut extends Future<Object> {
  // prop = outputs
  // prop.type = array
  // prop.ref = None
  // prop_return_class = StableDiffusionXLOutOutputs
  // use_proxy = False

  /** Generated images. */
  get outputs() {
    // @ts-ignore
    const future = new StableDiffusionXLOutOutputs(
      this._directive.next("outputs"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `StableDiffusionXLOut` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionXLOut> {
    return super._result() as Promise<StableDiffusionXLOut>;
  }
}

/** StableDiffusionXLLightningOut */
export class StableDiffusionXLLightningOut extends Future<Object> {
  // prop = outputs
  // prop.type = array
  // prop.ref = None
  // prop_return_class = StableDiffusionXLLightningOutOutputs
  // use_proxy = False

  /** Generated images. */
  get outputs() {
    // @ts-ignore
    const future = new StableDiffusionXLLightningOutOutputs(
      this._directive.next("outputs"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `StableDiffusionXLLightningOut` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionXLLightningOut> {
    return super._result() as Promise<StableDiffusionXLLightningOut>;
  }
}

/** StableDiffusionXLIPAdapterOut */
export class StableDiffusionXLIPAdapterOut extends Future<Object> {
  // prop = outputs
  // prop.type = array
  // prop.ref = None
  // prop_return_class = StableDiffusionXLIPAdapterOutOutputs
  // use_proxy = False

  /** Generated images. */
  get outputs() {
    // @ts-ignore
    const future = new StableDiffusionXLIPAdapterOutOutputs(
      this._directive.next("outputs"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `StableDiffusionXLIPAdapterOut` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionXLIPAdapterOut> {
    return super._result() as Promise<StableDiffusionXLIPAdapterOut>;
  }
}

/** StableDiffusionXLControlNetOut */
export class StableDiffusionXLControlNetOut extends Future<Object> {
  // prop = outputs
  // prop.type = array
  // prop.ref = None
  // prop_return_class = StableDiffusionXLControlNetOutOutputs
  // use_proxy = False

  /** Generated images. */
  get outputs() {
    // @ts-ignore
    const future = new StableDiffusionXLControlNetOutOutputs(
      this._directive.next("outputs"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `StableDiffusionXLControlNetOut` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionXLControlNetOut> {
    return super._result() as Promise<StableDiffusionXLControlNetOut>;
  }
}

/** InpaintImageOut */
export class InpaintImageOut extends Future<Object> {
  // prop = image_uri
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("image_uri"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `InpaintImageOut` once it's node has been run. */
  protected override async _result(): Promise<InpaintImageOut> {
    return super._result() as Promise<InpaintImageOut>;
  }
}

/** MultiInpaintImageOut */
export class MultiInpaintImageOut extends Future<Object> {
  // prop = outputs
  // prop.type = array
  // prop.ref = None
  // prop_return_class = MultiInpaintImageOutOutputs
  // use_proxy = False

  /** Generated images. */
  get outputs() {
    // @ts-ignore
    const future = new MultiInpaintImageOutOutputs(
      this._directive.next("outputs"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `MultiInpaintImageOut` once it's node has been run. */
  protected override async _result(): Promise<MultiInpaintImageOut> {
    return super._result() as Promise<MultiInpaintImageOut>;
  }
}

/** StableDiffusionXLInpaintOut */
export class StableDiffusionXLInpaintOut extends Future<Object> {
  // prop = outputs
  // prop.type = array
  // prop.ref = None
  // prop_return_class = StableDiffusionXLInpaintOutOutputs
  // use_proxy = False

  /** Generated images. */
  get outputs() {
    // @ts-ignore
    const future = new StableDiffusionXLInpaintOutOutputs(
      this._directive.next("outputs"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `StableDiffusionXLInpaintOut` once it's node has been run. */
  protected override async _result(): Promise<StableDiffusionXLInpaintOut> {
    return super._result() as Promise<StableDiffusionXLInpaintOut>;
  }
}

/** BoundingBox */
export class BoundingBox extends Future<Object> {
  // prop = x1
  // prop.type = number
  // prop.ref = None
  // prop_return_class = Future<number>
  // use_proxy = False

  /** Top left corner x. */
  get x1() {
    // @ts-ignore
    const future = new Future<number>(this._directive.next("x1"));
    // @ts-ignore
    future._runtimeHint = "number";

    return future;
  }

  // prop = y1
  // prop.type = number
  // prop.ref = None
  // prop_return_class = Future<number>
  // use_proxy = False

  /** Top left corner y. */
  get y1() {
    // @ts-ignore
    const future = new Future<number>(this._directive.next("y1"));
    // @ts-ignore
    future._runtimeHint = "number";

    return future;
  }

  // prop = x2
  // prop.type = number
  // prop.ref = None
  // prop_return_class = Future<number>
  // use_proxy = False

  /** Bottom right corner x. */
  get x2() {
    // @ts-ignore
    const future = new Future<number>(this._directive.next("x2"));
    // @ts-ignore
    future._runtimeHint = "number";

    return future;
  }

  // prop = y2
  // prop.type = number
  // prop.ref = None
  // prop_return_class = Future<number>
  // use_proxy = False

  /** Bottom right corner y. */
  get y2() {
    // @ts-ignore
    const future = new Future<number>(this._directive.next("y2"));
    // @ts-ignore
    future._runtimeHint = "number";

    return future;
  }

  /** @internal returns the result for `BoundingBox` once it's node has been run. */
  protected override async _result(): Promise<BoundingBox> {
    return super._result() as Promise<BoundingBox>;
  }
}

/** Point */
export class Point extends Future<Object> {
  // prop = x
  // prop.type = integer
  // prop.ref = None
  // prop_return_class = Future<number>
  // use_proxy = False

  /** X position. */
  get x() {
    // @ts-ignore
    const future = new Future<number>(this._directive.next("x"));
    // @ts-ignore
    future._runtimeHint = "number";

    return future;
  }

  // prop = y
  // prop.type = integer
  // prop.ref = None
  // prop_return_class = Future<number>
  // use_proxy = False

  /** Y position. */
  get y() {
    // @ts-ignore
    const future = new Future<number>(this._directive.next("y"));
    // @ts-ignore
    future._runtimeHint = "number";

    return future;
  }

  /** @internal returns the result for `Point` once it's node has been run. */
  protected override async _result(): Promise<Point> {
    return super._result() as Promise<Point>;
  }
}

/** EraseImageOut */
export class EraseImageOut extends Future<Object> {
  // prop = image_uri
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("image_uri"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `EraseImageOut` once it's node has been run. */
  protected override async _result(): Promise<EraseImageOut> {
    return super._result() as Promise<EraseImageOut>;
  }
}

/** BigLaMaOut */
export class BigLaMaOut extends Future<Object> {
  // prop = image_uri
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("image_uri"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `BigLaMaOut` once it's node has been run. */
  protected override async _result(): Promise<BigLaMaOut> {
    return super._result() as Promise<BigLaMaOut>;
  }
}

/** RemoveBackgroundOut */
export class RemoveBackgroundOut extends Future<Object> {
  // prop = image_uri
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("image_uri"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `RemoveBackgroundOut` once it's node has been run. */
  protected override async _result(): Promise<RemoveBackgroundOut> {
    return super._result() as Promise<RemoveBackgroundOut>;
  }
}

/** DISISNetOut */
export class DISISNetOut extends Future<Object> {
  // prop = image_uri
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("image_uri"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `DISISNetOut` once it's node has been run. */
  protected override async _result(): Promise<DISISNetOut> {
    return super._result() as Promise<DISISNetOut>;
  }
}

/** UpscaleImageOut */
export class UpscaleImageOut extends Future<Object> {
  // prop = image_uri
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("image_uri"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `UpscaleImageOut` once it's node has been run. */
  protected override async _result(): Promise<UpscaleImageOut> {
    return super._result() as Promise<UpscaleImageOut>;
  }
}

/** SegmentUnderPointOut */
export class SegmentUnderPointOut extends Future<Object> {
  // prop = mask_image_uri
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Detected segments in 'mask image' format. Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get mask_image_uri() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("mask_image_uri"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `SegmentUnderPointOut` once it's node has been run. */
  protected override async _result(): Promise<SegmentUnderPointOut> {
    return super._result() as Promise<SegmentUnderPointOut>;
  }
}

/** SegmentAnythingOut */
export class SegmentAnythingOut extends Future<Object> {
  // prop = mask_image_uri
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Detected segments in 'mask image' format. Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get mask_image_uri() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("mask_image_uri"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `SegmentAnythingOut` once it's node has been run. */
  protected override async _result(): Promise<SegmentAnythingOut> {
    return super._result() as Promise<SegmentAnythingOut>;
  }
}

/** TranscribedWord */
export class TranscribedWord extends Future<Object> {
  // prop = word
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Text of word. */
  get word() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("word"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = start
  // prop.type = number
  // prop.ref = None
  // prop_return_class = Future<number>
  // use_proxy = False

  /** (Optional) Start time of word, in seconds. */
  get start() {
    // @ts-ignore
    const future = new Future<number>(this._directive.next("start"));
    // @ts-ignore
    future._runtimeHint = "number";

    return future;
  }

  // prop = end
  // prop.type = number
  // prop.ref = None
  // prop_return_class = Future<number>
  // use_proxy = False

  /** (Optional) End time of word, in seconds. */
  get end() {
    // @ts-ignore
    const future = new Future<number>(this._directive.next("end"));
    // @ts-ignore
    future._runtimeHint = "number";

    return future;
  }

  // prop = speaker
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** (Optional) ID of speaker, if `diarize` is enabled. */
  get speaker() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("speaker"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `TranscribedWord` once it's node has been run. */
  protected override async _result(): Promise<TranscribedWord> {
    return super._result() as Promise<TranscribedWord>;
  }
}

/** TranscribedSegment */
export class TranscribedSegment extends Future<Object> {
  // prop = text
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Text of segment. */
  get text() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("text"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = start
  // prop.type = number
  // prop.ref = None
  // prop_return_class = Future<number>
  // use_proxy = False

  /** Start time of segment, in seconds. */
  get start() {
    // @ts-ignore
    const future = new Future<number>(this._directive.next("start"));
    // @ts-ignore
    future._runtimeHint = "number";

    return future;
  }

  // prop = end
  // prop.type = number
  // prop.ref = None
  // prop_return_class = Future<number>
  // use_proxy = False

  /** End time of segment, in seconds. */
  get end() {
    // @ts-ignore
    const future = new Future<number>(this._directive.next("end"));
    // @ts-ignore
    future._runtimeHint = "number";

    return future;
  }

  // prop = speaker
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** (Optional) ID of speaker, if `diarize` is enabled. */
  get speaker() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("speaker"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = words
  // prop.type = array
  // prop.ref = None
  // prop_return_class = TranscribedSegmentWords
  // use_proxy = False

  /** (Optional) Aligned words, if `align` is enabled. */
  get words() {
    // @ts-ignore
    const future = new TranscribedSegmentWords(this._directive.next("words"));
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `TranscribedSegment` once it's node has been run. */
  protected override async _result(): Promise<TranscribedSegment> {
    return super._result() as Promise<TranscribedSegment>;
  }
}

/** ChapterMarker */
export class ChapterMarker extends Future<Object> {
  // prop = title
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Chapter title. */
  get title() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("title"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = start
  // prop.type = number
  // prop.ref = None
  // prop_return_class = Future<number>
  // use_proxy = False

  /** Start time of chapter, in seconds. */
  get start() {
    // @ts-ignore
    const future = new Future<number>(this._directive.next("start"));
    // @ts-ignore
    future._runtimeHint = "number";

    return future;
  }

  /** @internal returns the result for `ChapterMarker` once it's node has been run. */
  protected override async _result(): Promise<ChapterMarker> {
    return super._result() as Promise<ChapterMarker>;
  }
}

/** TranscribeSpeechOut */
export class TranscribeSpeechOut extends Future<Object> {
  // prop = text
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Transcribed text. */
  get text() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("text"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = segments
  // prop.type = array
  // prop.ref = None
  // prop_return_class = TranscribeSpeechOutSegments
  // use_proxy = False

  /** (Optional) Transcribed segments, if `segment` is enabled. */
  get segments() {
    // @ts-ignore
    const future = new TranscribeSpeechOutSegments(
      this._directive.next("segments"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  // prop = chapters
  // prop.type = array
  // prop.ref = None
  // prop_return_class = TranscribeSpeechOutChapters
  // use_proxy = False

  /** (Optional) Chapter markers, if `suggest_chapters` is enabled. */
  get chapters() {
    // @ts-ignore
    const future = new TranscribeSpeechOutChapters(
      this._directive.next("chapters"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `TranscribeSpeechOut` once it's node has been run. */
  protected override async _result(): Promise<TranscribeSpeechOut> {
    return super._result() as Promise<TranscribeSpeechOut>;
  }
}

/** GenerateSpeechOut */
export class GenerateSpeechOut extends Future<Object> {
  // prop = audio_uri
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Base 64-encoded WAV audio bytes, or a hosted audio url if `store` is provided. */
  get audio_uri() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("audio_uri"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `GenerateSpeechOut` once it's node has been run. */
  protected override async _result(): Promise<GenerateSpeechOut> {
    return super._result() as Promise<GenerateSpeechOut>;
  }
}

/** XTTSV2Out */
export class XTTSV2Out extends Future<Object> {
  // prop = audio_uri
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Base 64-encoded WAV audio bytes, or a hosted audio url if `store` is provided. */
  get audio_uri() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("audio_uri"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `XTTSV2Out` once it's node has been run. */
  protected override async _result(): Promise<XTTSV2Out> {
    return super._result() as Promise<XTTSV2Out>;
  }
}

/** Embedding */
export class Embedding extends Future<Object> {
  // prop = vector
  // prop.type = array
  // prop.ref = None
  // prop_return_class = EmbeddingVector
  // use_proxy = False

  /** Embedding vector. */
  get vector() {
    // @ts-ignore
    const future = new EmbeddingVector(this._directive.next("vector"));
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  // prop = doc_id
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** (Optional) Vector store document ID. */
  get doc_id() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("doc_id"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = metadata
  // prop.type = object
  // prop.ref = None
  // prop_return_class = Future<Object>
  // use_proxy = True

  /** (Optional) Vector store document metadata. */
  get metadata() {
    // @ts-ignore
    const future = new Future<Object>(this._directive.next("metadata"));
    // @ts-ignore
    future._runtimeHint = "object";

    return proxyFactory.makeProxy(future);
  }

  /** @internal returns the result for `Embedding` once it's node has been run. */
  protected override async _result(): Promise<Embedding> {
    return super._result() as Promise<Embedding>;
  }
}

/** EmbedTextOut */
export class EmbedTextOut extends Future<Object> {
  // prop = embedding
  // prop.type = object
  // prop.ref = #/components/schemas/Embedding
  // prop_return_class = Embedding
  // use_proxy = False

  /** Generated embedding. */
  get embedding() {
    // @ts-ignore
    const future = new Embedding(this._directive.next("embedding"));
    // @ts-ignore
    future._runtimeHint = "object";

    return future;
  }

  /** @internal returns the result for `EmbedTextOut` once it's node has been run. */
  protected override async _result(): Promise<EmbedTextOut> {
    return super._result() as Promise<EmbedTextOut>;
  }
}

/** EmbedTextItem */
export class EmbedTextItem extends Future<Object> {
  // prop = text
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Text to embed. */
  get text() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("text"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = metadata
  // prop.type = object
  // prop.ref = None
  // prop_return_class = Future<Object>
  // use_proxy = True

  /** (Optional) Metadata that can be used to query the vector store. Ignored if `collection_name` is unset. */
  get metadata() {
    // @ts-ignore
    const future = new Future<Object>(this._directive.next("metadata"));
    // @ts-ignore
    future._runtimeHint = "object";

    return proxyFactory.makeProxy(future);
  }

  // prop = doc_id
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** (Optional) Vector store document ID. Ignored if `collection_name` is unset. */
  get doc_id() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("doc_id"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `EmbedTextItem` once it's node has been run. */
  protected override async _result(): Promise<EmbedTextItem> {
    return super._result() as Promise<EmbedTextItem>;
  }
}

/** MultiEmbedTextOut */
export class MultiEmbedTextOut extends Future<Object> {
  // prop = embeddings
  // prop.type = array
  // prop.ref = None
  // prop_return_class = MultiEmbedTextOutEmbeddings
  // use_proxy = False

  /** Generated embeddings. */
  get embeddings() {
    // @ts-ignore
    const future = new MultiEmbedTextOutEmbeddings(
      this._directive.next("embeddings"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `MultiEmbedTextOut` once it's node has been run. */
  protected override async _result(): Promise<MultiEmbedTextOut> {
    return super._result() as Promise<MultiEmbedTextOut>;
  }
}

/** JinaV2Out */
export class JinaV2Out extends Future<Object> {
  // prop = embeddings
  // prop.type = array
  // prop.ref = None
  // prop_return_class = JinaV2OutEmbeddings
  // use_proxy = False

  /** Generated embeddings. */
  get embeddings() {
    // @ts-ignore
    const future = new JinaV2OutEmbeddings(this._directive.next("embeddings"));
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `JinaV2Out` once it's node has been run. */
  protected override async _result(): Promise<JinaV2Out> {
    return super._result() as Promise<JinaV2Out>;
  }
}

/** EmbedImageOut */
export class EmbedImageOut extends Future<Object> {
  // prop = embedding
  // prop.type = object
  // prop.ref = #/components/schemas/Embedding
  // prop_return_class = Embedding
  // use_proxy = False

  /** Generated embedding. */
  get embedding() {
    // @ts-ignore
    const future = new Embedding(this._directive.next("embedding"));
    // @ts-ignore
    future._runtimeHint = "object";

    return future;
  }

  /** @internal returns the result for `EmbedImageOut` once it's node has been run. */
  protected override async _result(): Promise<EmbedImageOut> {
    return super._result() as Promise<EmbedImageOut>;
  }
}

/** EmbedImageItem */
export class EmbedImageItem extends Future<Object> {
  // prop = image_uri
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Image to embed. */
  get image_uri() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("image_uri"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = doc_id
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** (Optional) Vector store document ID. Ignored if `collection_name` is unset. */
  get doc_id() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("doc_id"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `EmbedImageItem` once it's node has been run. */
  protected override async _result(): Promise<EmbedImageItem> {
    return super._result() as Promise<EmbedImageItem>;
  }
}

/** EmbedTextOrImageItem */
export class EmbedTextOrImageItem extends Future<Object> {
  // prop = image_uri
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Image to embed. */
  get image_uri() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("image_uri"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = text
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Text to embed. */
  get text() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("text"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = metadata
  // prop.type = object
  // prop.ref = None
  // prop_return_class = Future<Object>
  // use_proxy = True

  /** Metadata that can be used to query the vector store. Ignored if `collection_name` is unset. */
  get metadata() {
    // @ts-ignore
    const future = new Future<Object>(this._directive.next("metadata"));
    // @ts-ignore
    future._runtimeHint = "object";

    return proxyFactory.makeProxy(future);
  }

  // prop = doc_id
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Vector store document ID. Ignored if `collection_name` is unset. */
  get doc_id() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("doc_id"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `EmbedTextOrImageItem` once it's node has been run. */
  protected override async _result(): Promise<EmbedTextOrImageItem> {
    return super._result() as Promise<EmbedTextOrImageItem>;
  }
}

/** MultiEmbedImageOut */
export class MultiEmbedImageOut extends Future<Object> {
  // prop = embeddings
  // prop.type = array
  // prop.ref = None
  // prop_return_class = MultiEmbedImageOutEmbeddings
  // use_proxy = False

  /** Generated embeddings. */
  get embeddings() {
    // @ts-ignore
    const future = new MultiEmbedImageOutEmbeddings(
      this._directive.next("embeddings"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `MultiEmbedImageOut` once it's node has been run. */
  protected override async _result(): Promise<MultiEmbedImageOut> {
    return super._result() as Promise<MultiEmbedImageOut>;
  }
}

/** CLIPOut */
export class CLIPOut extends Future<Object> {
  // prop = embeddings
  // prop.type = array
  // prop.ref = None
  // prop_return_class = CLIPOutEmbeddings
  // use_proxy = False

  /** Generated embeddings. */
  get embeddings() {
    // @ts-ignore
    const future = new CLIPOutEmbeddings(this._directive.next("embeddings"));
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `CLIPOut` once it's node has been run. */
  protected override async _result(): Promise<CLIPOut> {
    return super._result() as Promise<CLIPOut>;
  }
}

/** FindOrCreateVectorStoreOut */
export class FindOrCreateVectorStoreOut extends Future<Object> {
  // prop = collection_name
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Vector store name. */
  get collection_name() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("collection_name"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = model
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Selected embedding model. */
  get model() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("model"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `FindOrCreateVectorStoreOut` once it's node has been run. */
  protected override async _result(): Promise<FindOrCreateVectorStoreOut> {
    return super._result() as Promise<FindOrCreateVectorStoreOut>;
  }
}

/** ListVectorStoresOut */
export class ListVectorStoresOut extends Future<Object> {
  // prop = items
  // prop.type = array
  // prop.ref = None
  // prop_return_class = ListVectorStoresOutItems
  // use_proxy = False

  /** List of vector stores. */
  get items() {
    // @ts-ignore
    const future = new ListVectorStoresOutItems(this._directive.next("items"));
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `ListVectorStoresOut` once it's node has been run. */
  protected override async _result(): Promise<ListVectorStoresOut> {
    return super._result() as Promise<ListVectorStoresOut>;
  }
}

/** DeleteVectorStoreOut */
export class DeleteVectorStoreOut extends Future<Object> {
  // prop = collection_name
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Vector store name. */
  get collection_name() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("collection_name"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = model
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Selected embedding model. */
  get model() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("model"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `DeleteVectorStoreOut` once it's node has been run. */
  protected override async _result(): Promise<DeleteVectorStoreOut> {
    return super._result() as Promise<DeleteVectorStoreOut>;
  }
}

/** Canonical representation of document with embedding vector. */
export class Vector extends Future<Object> {
  // prop = id
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Document ID. */
  get id() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("id"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = vector
  // prop.type = array
  // prop.ref = None
  // prop_return_class = VectorVector
  // use_proxy = False

  /** Embedding vector. */
  get vector() {
    // @ts-ignore
    const future = new VectorVector(this._directive.next("vector"));
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  // prop = metadata
  // prop.type = object
  // prop.ref = None
  // prop_return_class = Future<Object>
  // use_proxy = True

  /** Document metadata. */
  get metadata() {
    // @ts-ignore
    const future = new Future<Object>(this._directive.next("metadata"));
    // @ts-ignore
    future._runtimeHint = "object";

    return proxyFactory.makeProxy(future);
  }

  /** @internal returns the result for `Vector` once it's node has been run. */
  protected override async _result(): Promise<Vector> {
    return super._result() as Promise<Vector>;
  }
}

/** FetchVectorsOut */
export class FetchVectorsOut extends Future<Object> {
  // prop = vectors
  // prop.type = array
  // prop.ref = None
  // prop_return_class = FetchVectorsOutVectors
  // use_proxy = False

  /** Retrieved vectors. */
  get vectors() {
    // @ts-ignore
    const future = new FetchVectorsOutVectors(this._directive.next("vectors"));
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  /** @internal returns the result for `FetchVectorsOut` once it's node has been run. */
  protected override async _result(): Promise<FetchVectorsOut> {
    return super._result() as Promise<FetchVectorsOut>;
  }
}

/** UpdateVectorsOut */
export class UpdateVectorsOut extends Future<Object> {
  // prop = count
  // prop.type = integer
  // prop.ref = None
  // prop_return_class = Future<number>
  // use_proxy = False

  /** Number of vectors modified. */
  get count() {
    // @ts-ignore
    const future = new Future<number>(this._directive.next("count"));
    // @ts-ignore
    future._runtimeHint = "number";

    return future;
  }

  /** @internal returns the result for `UpdateVectorsOut` once it's node has been run. */
  protected override async _result(): Promise<UpdateVectorsOut> {
    return super._result() as Promise<UpdateVectorsOut>;
  }
}

/** DeleteVectorsOut */
export class DeleteVectorsOut extends Future<Object> {
  // prop = count
  // prop.type = integer
  // prop.ref = None
  // prop_return_class = Future<number>
  // use_proxy = False

  /** Number of vectors modified. */
  get count() {
    // @ts-ignore
    const future = new Future<number>(this._directive.next("count"));
    // @ts-ignore
    future._runtimeHint = "number";

    return future;
  }

  /** @internal returns the result for `DeleteVectorsOut` once it's node has been run. */
  protected override async _result(): Promise<DeleteVectorsOut> {
    return super._result() as Promise<DeleteVectorsOut>;
  }
}

/** UpdateVectorParams */
export class UpdateVectorParams extends Future<Object> {
  // prop = id
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Document ID. */
  get id() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("id"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = vector
  // prop.type = array
  // prop.ref = None
  // prop_return_class = UpdateVectorParamsVector
  // use_proxy = False

  /** (Optional) Embedding vector. */
  get vector() {
    // @ts-ignore
    const future = new UpdateVectorParamsVector(this._directive.next("vector"));
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  // prop = metadata
  // prop.type = object
  // prop.ref = None
  // prop_return_class = Future<Object>
  // use_proxy = True

  /** (Optional) Document metadata. */
  get metadata() {
    // @ts-ignore
    const future = new Future<Object>(this._directive.next("metadata"));
    // @ts-ignore
    future._runtimeHint = "object";

    return proxyFactory.makeProxy(future);
  }

  /** @internal returns the result for `UpdateVectorParams` once it's node has been run. */
  protected override async _result(): Promise<UpdateVectorParams> {
    return super._result() as Promise<UpdateVectorParams>;
  }
}

/** VectorStoreQueryResult */
export class VectorStoreQueryResult extends Future<Object> {
  // prop = id
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** Document ID. */
  get id() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("id"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = distance
  // prop.type = number
  // prop.ref = None
  // prop_return_class = Future<number>
  // use_proxy = False

  /** Similarity score. */
  get distance() {
    // @ts-ignore
    const future = new Future<number>(this._directive.next("distance"));
    // @ts-ignore
    future._runtimeHint = "number";

    return future;
  }

  // prop = vector
  // prop.type = array
  // prop.ref = None
  // prop_return_class = VectorStoreQueryResultVector
  // use_proxy = False

  /** (Optional) Embedding vector. */
  get vector() {
    // @ts-ignore
    const future = new VectorStoreQueryResultVector(
      this._directive.next("vector"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  // prop = metadata
  // prop.type = object
  // prop.ref = None
  // prop_return_class = Future<Object>
  // use_proxy = True

  /** (Optional) Document metadata. */
  get metadata() {
    // @ts-ignore
    const future = new Future<Object>(this._directive.next("metadata"));
    // @ts-ignore
    future._runtimeHint = "object";

    return proxyFactory.makeProxy(future);
  }

  /** @internal returns the result for `VectorStoreQueryResult` once it's node has been run. */
  protected override async _result(): Promise<VectorStoreQueryResult> {
    return super._result() as Promise<VectorStoreQueryResult>;
  }
}

/** QueryVectorStoreOut */
export class QueryVectorStoreOut extends Future<Object> {
  // prop = results
  // prop.type = array
  // prop.ref = None
  // prop_return_class = QueryVectorStoreOutResults
  // use_proxy = False

  /** Query results. */
  get results() {
    // @ts-ignore
    const future = new QueryVectorStoreOutResults(
      this._directive.next("results"),
    );
    // @ts-ignore
    future._runtimeHint = "array";

    return future;
  }

  // prop = collection_name
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** (Optional) Vector store name. */
  get collection_name() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("collection_name"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  // prop = model
  // prop.type = string
  // prop.ref = None
  // prop_return_class = Future<string>
  // use_proxy = False

  /** (Optional) Selected embedding model. */
  get model() {
    // @ts-ignore
    const future = new Future<string>(this._directive.next("model"));
    // @ts-ignore
    future._runtimeHint = "string";

    return future;
  }

  /** @internal returns the result for `QueryVectorStoreOut` once it's node has been run. */
  protected override async _result(): Promise<QueryVectorStoreOut> {
    return super._result() as Promise<QueryVectorStoreOut>;
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
   * Future reference to this node's output.
   *
   * Output fields: `output`
   *
   * https://www.substrate.run/nodes#Experimental
   */
  override get future(): ExperimentalOut {
    return new ExperimentalOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `value`
   *
   * https://www.substrate.run/nodes#Box
   */
  override get future(): BoxOut {
    return new BoxOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `result`
   *
   * https://www.substrate.run/nodes#If
   */
  override get future(): IfOut {
    return new IfOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `text`
   *
   * https://www.substrate.run/nodes#ComputeText
   */
  override get future(): ComputeTextOut {
    return new ComputeTextOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#MultiComputeText
   */
  override get future(): MultiComputeTextOut {
    return new MultiComputeTextOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#BatchComputeText
   */
  override get future(): BatchComputeTextOut {
    return new BatchComputeTextOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#BatchComputeJSON
   */
  override get future(): BatchComputeJSONOut {
    return new BatchComputeJSONOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `json_object` (optional), `text` (optional)
   *
   * https://www.substrate.run/nodes#ComputeJSON
   */
  override get future(): ComputeJSONOut {
    return new ComputeJSONOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#MultiComputeJSON
   */
  override get future(): MultiComputeJSONOut {
    return new MultiComputeJSONOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#Mistral7BInstruct
   */
  override get future(): Mistral7BInstructOut {
    return new Mistral7BInstructOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#Mixtral8x7BInstruct
   */
  override get future(): Mixtral8x7BInstructOut {
    return new Mixtral8x7BInstructOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#Llama3Instruct8B
   */
  override get future(): Llama3Instruct8BOut {
    return new Llama3Instruct8BOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `choices`
   *
   * https://www.substrate.run/nodes#Llama3Instruct70B
   */
  override get future(): Llama3Instruct70BOut {
    return new Llama3Instruct70BOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `text`
   *
   * https://www.substrate.run/nodes#Firellava13B
   */
  override get future(): Firellava13BOut {
    return new Firellava13BOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#GenerateImage
   */
  override get future(): GenerateImageOut {
    return new GenerateImageOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#MultiGenerateImage
   */
  override get future(): MultiGenerateImageOut {
    return new MultiGenerateImageOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#InpaintImage
   */
  override get future(): InpaintImageOut {
    return new InpaintImageOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#MultiInpaintImage
   */
  override get future(): MultiInpaintImageOut {
    return new MultiInpaintImageOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#StableDiffusionXLLightning
   */
  override get future(): StableDiffusionXLLightningOut {
    return new StableDiffusionXLLightningOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#StableDiffusionXLInpaint
   */
  override get future(): StableDiffusionXLInpaintOut {
    return new StableDiffusionXLInpaintOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `outputs`
   *
   * https://www.substrate.run/nodes#StableDiffusionXLControlNet
   */
  override get future(): StableDiffusionXLControlNetOut {
    return new StableDiffusionXLControlNetOut(new Trace([], this));
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
    this.node = "TranscribeSpeech";
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
   * Future reference to this node's output.
   *
   * Output fields: `audio_uri`
   *
   * https://www.substrate.run/nodes#GenerateSpeech
   */
  override get future(): GenerateSpeechOut {
    return new GenerateSpeechOut(new Trace([], this));
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
    this.node = "RemoveBackground";
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
   * Future reference to this node's output.
   *
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#EraseImage
   */
  override get future(): EraseImageOut {
    return new EraseImageOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `image_uri`
   *
   * https://www.substrate.run/nodes#UpscaleImage
   */
  override get future(): UpscaleImageOut {
    return new UpscaleImageOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `mask_image_uri`
   *
   * https://www.substrate.run/nodes#SegmentUnderPoint
   */
  override get future(): SegmentUnderPointOut {
    return new SegmentUnderPointOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `mask_image_uri`
   *
   * https://www.substrate.run/nodes#SegmentAnything
   */
  override get future(): SegmentAnythingOut {
    return new SegmentAnythingOut(new Trace([], this));
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
    this.node = "EmbedText";
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
   * Future reference to this node's output.
   *
   * Output fields: `embeddings`
   *
   * https://www.substrate.run/nodes#MultiEmbedText
   */
  override get future(): MultiEmbedTextOut {
    return new MultiEmbedTextOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `embedding`
   *
   * https://www.substrate.run/nodes#EmbedImage
   */
  override get future(): EmbedImageOut {
    return new EmbedImageOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `embeddings`
   *
   * https://www.substrate.run/nodes#MultiEmbedImage
   */
  override get future(): MultiEmbedImageOut {
    return new MultiEmbedImageOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `embeddings`
   *
   * https://www.substrate.run/nodes#JinaV2
   */
  override get future(): JinaV2Out {
    return new JinaV2Out(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `embeddings`
   *
   * https://www.substrate.run/nodes#CLIP
   */
  override get future(): CLIPOut {
    return new CLIPOut(new Trace([], this));
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
    this.node = "FindOrCreateVectorStore";
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
   * Future reference to this node's output.
   *
   * Output fields: `items` (optional)
   *
   * https://www.substrate.run/nodes#ListVectorStores
   */
  override get future(): ListVectorStoresOut {
    return new ListVectorStoresOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `collection_name`, `model`
   *
   * https://www.substrate.run/nodes#DeleteVectorStore
   */
  override get future(): DeleteVectorStoreOut {
    return new DeleteVectorStoreOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `results`, `collection_name` (optional), `model` (optional)
   *
   * https://www.substrate.run/nodes#QueryVectorStore
   */
  override get future(): QueryVectorStoreOut {
    return new QueryVectorStoreOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `vectors`
   *
   * https://www.substrate.run/nodes#FetchVectors
   */
  override get future(): FetchVectorsOut {
    return new FetchVectorsOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `count`
   *
   * https://www.substrate.run/nodes#UpdateVectors
   */
  override get future(): UpdateVectorsOut {
    return new UpdateVectorsOut(new Trace([], this));
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
   * Future reference to this node's output.
   *
   * Output fields: `count`
   *
   * https://www.substrate.run/nodes#DeleteVectors
   */
  override get future(): DeleteVectorsOut {
    return new DeleteVectorsOut(new Trace([], this));
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
