/**
* ꩜ Substrate
* @generated file
* 20240405.20240409
*/

import * as OpenAPI from "substrate/OpenAPI";
import { Node } from "substrate/Node"
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

class FutureStringArray extends FutureArray {
  /** Returns `FutureString` at given index. */
  override at(index: number) { return new FutureString(this.directive.next(index)); }

  /** Returns the result for `FutureStringArray` once it's node has been run. */
  protected override async result(): Promise<FutureStringArray> { return super.result() as Promise<FutureStringArray>; }
}
class FutureNumberArray extends FutureArray {
  /** Returns `FutureNumber` at given index. */
  override at(index: number) { return new FutureNumber(this.directive.next(index)); }

  /** Returns the result for `FutureNumberArray` once it's node has been run. */
  protected override async result(): Promise<FutureNumberArray> { return super.result() as Promise<FutureNumberArray>; }
}
/**  */
class ErrorOutArray extends FutureArray {
  /** Returns `ErrorOut` at given index. */
  override at(index: number) { return new ErrorOut(this.directive.next(index)); }

  /** Returns the result for `ErrorOutArray` once it's node has been run. */
  protected override async result(): Promise<ErrorOutArray> { return super.result() as Promise<ErrorOutArray>; }
}
/** ErrorOut */
class ErrorOut extends FutureObject {
  /** The type of error returned. */
  get type() { return new FutureString(this.directive.next("type")); }
  /** A message providing more details about the error. */
  get message() { return new FutureString(this.directive.next("message")); }
  /** returns the result for `ErrorOut` once it's node has been run. */
  protected override async result(): Promise<ErrorOut> { return super.result() as Promise<ErrorOut>; }
}
/**  */
class GenerateTextInArray extends FutureArray {
  /** Returns `GenerateTextIn` at given index. */
  override at(index: number) { return new GenerateTextIn(this.directive.next(index)); }

  /** Returns the result for `GenerateTextInArray` once it's node has been run. */
  protected override async result(): Promise<GenerateTextInArray> { return super.result() as Promise<GenerateTextInArray>; }
}
/** GenerateTextIn */
class GenerateTextIn extends FutureObject {
  /** Input prompt. */
  get prompt() { return new FutureString(this.directive.next("prompt")); }
  /** (Optional) Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() { return new FutureNumber(this.directive.next("temperature")); }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() { return new FutureNumber(this.directive.next("max_tokens")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `GenerateTextIn` once it's node has been run. */
  protected override async result(): Promise<GenerateTextIn> { return super.result() as Promise<GenerateTextIn>; }
}
/**  */
class GenerateTextOutArray extends FutureArray {
  /** Returns `GenerateTextOut` at given index. */
  override at(index: number) { return new GenerateTextOut(this.directive.next(index)); }

  /** Returns the result for `GenerateTextOutArray` once it's node has been run. */
  protected override async result(): Promise<GenerateTextOutArray> { return super.result() as Promise<GenerateTextOutArray>; }
}
/** GenerateTextOut */
class GenerateTextOut extends FutureObject {
  /** Text response. */
  get text() { return new FutureString(this.directive.next("text")); }
  /** returns the result for `GenerateTextOut` once it's node has been run. */
  protected override async result(): Promise<GenerateTextOut> { return super.result() as Promise<GenerateTextOut>; }
}
/**  */
class GenerateJSONInArray extends FutureArray {
  /** Returns `GenerateJSONIn` at given index. */
  override at(index: number) { return new GenerateJSONIn(this.directive.next(index)); }

  /** Returns the result for `GenerateJSONInArray` once it's node has been run. */
  protected override async result(): Promise<GenerateJSONInArray> { return super.result() as Promise<GenerateJSONInArray>; }
}
/** GenerateJSONIn */
class GenerateJSONIn extends FutureObject {
  /** Input prompt. */
  get prompt() { return new FutureString(this.directive.next("prompt")); }
  /** JSON schema to guide `json_object` response. */
  get json_schema() { return new FutureAnyObject(this.directive.next("json_schema")); }
  /** (Optional) Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() { return new FutureNumber(this.directive.next("temperature")); }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() { return new FutureNumber(this.directive.next("max_tokens")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `GenerateJSONIn` once it's node has been run. */
  protected override async result(): Promise<GenerateJSONIn> { return super.result() as Promise<GenerateJSONIn>; }
}
/**  */
class GenerateJSONOutArray extends FutureArray {
  /** Returns `GenerateJSONOut` at given index. */
  override at(index: number) { return new GenerateJSONOut(this.directive.next(index)); }

  /** Returns the result for `GenerateJSONOutArray` once it's node has been run. */
  protected override async result(): Promise<GenerateJSONOutArray> { return super.result() as Promise<GenerateJSONOutArray>; }
}
/** GenerateJSONOut */
class GenerateJSONOut extends FutureObject {
  /** JSON response. */
  get json_object() { return new FutureAnyObject(this.directive.next("json_object")); }
  /** returns the result for `GenerateJSONOut` once it's node has been run. */
  protected override async result(): Promise<GenerateJSONOut> { return super.result() as Promise<GenerateJSONOut>; }
}
/**  */
class MultiGenerateTextInArray extends FutureArray {
  /** Returns `MultiGenerateTextIn` at given index. */
  override at(index: number) { return new MultiGenerateTextIn(this.directive.next(index)); }

  /** Returns the result for `MultiGenerateTextInArray` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateTextInArray> { return super.result() as Promise<MultiGenerateTextInArray>; }
}
/** MultiGenerateTextIn */
class MultiGenerateTextIn extends FutureObject {
  /** Input prompt. */
  get prompt() { return new FutureString(this.directive.next("prompt")); }
  /** Number of choices to generate. */
  get num_choices() { return new FutureNumber(this.directive.next("num_choices")); }
  /** (Optional) Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() { return new FutureNumber(this.directive.next("temperature")); }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() { return new FutureNumber(this.directive.next("max_tokens")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `MultiGenerateTextIn` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateTextIn> { return super.result() as Promise<MultiGenerateTextIn>; }
}
/**  */
class MultiGenerateTextOutArray extends FutureArray {
  /** Returns `MultiGenerateTextOut` at given index. */
  override at(index: number) { return new MultiGenerateTextOut(this.directive.next(index)); }

  /** Returns the result for `MultiGenerateTextOutArray` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateTextOutArray> { return super.result() as Promise<MultiGenerateTextOutArray>; }
}
/** MultiGenerateTextOut */
class MultiGenerateTextOut extends FutureObject {
  /** array */
  get choices() { return new MultiGenerateTextOutArray(this.directive.next("choices")); }
  /** returns the result for `MultiGenerateTextOut` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateTextOut> { return super.result() as Promise<MultiGenerateTextOut>; }
}
/**  */
class MultiGenerateJSONInArray extends FutureArray {
  /** Returns `MultiGenerateJSONIn` at given index. */
  override at(index: number) { return new MultiGenerateJSONIn(this.directive.next(index)); }

  /** Returns the result for `MultiGenerateJSONInArray` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateJSONInArray> { return super.result() as Promise<MultiGenerateJSONInArray>; }
}
/** MultiGenerateJSONIn */
class MultiGenerateJSONIn extends FutureObject {
  /** Input prompt. */
  get prompt() { return new FutureString(this.directive.next("prompt")); }
  /** JSON schema to guide `json_object` response. */
  get json_schema() { return new FutureAnyObject(this.directive.next("json_schema")); }
  /** Number of choices to generate. */
  get num_choices() { return new FutureNumber(this.directive.next("num_choices")); }
  /** (Optional) Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() { return new FutureNumber(this.directive.next("temperature")); }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() { return new FutureNumber(this.directive.next("max_tokens")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `MultiGenerateJSONIn` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateJSONIn> { return super.result() as Promise<MultiGenerateJSONIn>; }
}
/**  */
class MultiGenerateJSONOutArray extends FutureArray {
  /** Returns `MultiGenerateJSONOut` at given index. */
  override at(index: number) { return new MultiGenerateJSONOut(this.directive.next(index)); }

  /** Returns the result for `MultiGenerateJSONOutArray` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateJSONOutArray> { return super.result() as Promise<MultiGenerateJSONOutArray>; }
}
/** MultiGenerateJSONOut */
class MultiGenerateJSONOut extends FutureObject {
  /** array */
  get choices() { return new MultiGenerateJSONOutArray(this.directive.next("choices")); }
  /** returns the result for `MultiGenerateJSONOut` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateJSONOut> { return super.result() as Promise<MultiGenerateJSONOut>; }
}
/**  */
class Mistral7BInstructInArray extends FutureArray {
  /** Returns `Mistral7BInstructIn` at given index. */
  override at(index: number) { return new Mistral7BInstructIn(this.directive.next(index)); }

  /** Returns the result for `Mistral7BInstructInArray` once it's node has been run. */
  protected override async result(): Promise<Mistral7BInstructInArray> { return super.result() as Promise<Mistral7BInstructInArray>; }
}
/** Mistral7BInstructIn */
class Mistral7BInstructIn extends FutureObject {
  /** Input prompt. */
  get prompt() { return new FutureString(this.directive.next("prompt")); }
  /** Number of choices to generate. */
  get num_choices() { return new FutureNumber(this.directive.next("num_choices")); }
  /** (Optional) JSON schema to guide response. */
  get json_schema() { return new FutureAnyObject(this.directive.next("json_schema")); }
  /** (Optional) Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() { return new FutureNumber(this.directive.next("temperature")); }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() { return new FutureNumber(this.directive.next("max_tokens")); }
  /** returns the result for `Mistral7BInstructIn` once it's node has been run. */
  protected override async result(): Promise<Mistral7BInstructIn> { return super.result() as Promise<Mistral7BInstructIn>; }
}
/**  */
class Mistral7BInstructChoiceArray extends FutureArray {
  /** Returns `Mistral7BInstructChoice` at given index. */
  override at(index: number) { return new Mistral7BInstructChoice(this.directive.next(index)); }

  /** Returns the result for `Mistral7BInstructChoiceArray` once it's node has been run. */
  protected override async result(): Promise<Mistral7BInstructChoiceArray> { return super.result() as Promise<Mistral7BInstructChoiceArray>; }
}
/** Mistral7BInstructChoice */
class Mistral7BInstructChoice extends FutureObject {
  /** Text response, if `json_schema` was not provided. */
  get text() { return new FutureString(this.directive.next("text")); }
  /** JSON response, if `json_schema` was provided. */
  get json_object() { return new FutureAnyObject(this.directive.next("json_object")); }
  /** returns the result for `Mistral7BInstructChoice` once it's node has been run. */
  protected override async result(): Promise<Mistral7BInstructChoice> { return super.result() as Promise<Mistral7BInstructChoice>; }
}
/**  */
class Mistral7BInstructOutArray extends FutureArray {
  /** Returns `Mistral7BInstructOut` at given index. */
  override at(index: number) { return new Mistral7BInstructOut(this.directive.next(index)); }

  /** Returns the result for `Mistral7BInstructOutArray` once it's node has been run. */
  protected override async result(): Promise<Mistral7BInstructOutArray> { return super.result() as Promise<Mistral7BInstructOutArray>; }
}
/** Mistral7BInstructOut */
class Mistral7BInstructOut extends FutureObject {
  /** array */
  get choices() { return new Mistral7BInstructOutArray(this.directive.next("choices")); }
  /** returns the result for `Mistral7BInstructOut` once it's node has been run. */
  protected override async result(): Promise<Mistral7BInstructOut> { return super.result() as Promise<Mistral7BInstructOut>; }
}
/**  */
class GenerateTextVisionInArray extends FutureArray {
  /** Returns `GenerateTextVisionIn` at given index. */
  override at(index: number) { return new GenerateTextVisionIn(this.directive.next(index)); }

  /** Returns the result for `GenerateTextVisionInArray` once it's node has been run. */
  protected override async result(): Promise<GenerateTextVisionInArray> { return super.result() as Promise<GenerateTextVisionInArray>; }
}
/** GenerateTextVisionIn */
class GenerateTextVisionIn extends FutureObject {
  /** Text prompt. */
  get prompt() { return new FutureString(this.directive.next("prompt")); }
  /** Image prompts. */
  get image_uris() { return new FutureStringArray(this.directive.next("image_uris")); }
  /** (Optional) Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() { return new FutureNumber(this.directive.next("temperature")); }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() { return new FutureNumber(this.directive.next("max_tokens")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `GenerateTextVisionIn` once it's node has been run. */
  protected override async result(): Promise<GenerateTextVisionIn> { return super.result() as Promise<GenerateTextVisionIn>; }
}
/**  */
class GenerateTextVisionOutArray extends FutureArray {
  /** Returns `GenerateTextVisionOut` at given index. */
  override at(index: number) { return new GenerateTextVisionOut(this.directive.next(index)); }

  /** Returns the result for `GenerateTextVisionOutArray` once it's node has been run. */
  protected override async result(): Promise<GenerateTextVisionOutArray> { return super.result() as Promise<GenerateTextVisionOutArray>; }
}
/** GenerateTextVisionOut */
class GenerateTextVisionOut extends FutureObject {
  /** Text response. */
  get text() { return new FutureString(this.directive.next("text")); }
  /** returns the result for `GenerateTextVisionOut` once it's node has been run. */
  protected override async result(): Promise<GenerateTextVisionOut> { return super.result() as Promise<GenerateTextVisionOut>; }
}
/**  */
class Firellava13BInArray extends FutureArray {
  /** Returns `Firellava13BIn` at given index. */
  override at(index: number) { return new Firellava13BIn(this.directive.next(index)); }

  /** Returns the result for `Firellava13BInArray` once it's node has been run. */
  protected override async result(): Promise<Firellava13BInArray> { return super.result() as Promise<Firellava13BInArray>; }
}
/** Firellava13BIn */
class Firellava13BIn extends FutureObject {
  /** Text prompt. */
  get prompt() { return new FutureString(this.directive.next("prompt")); }
  /** Image prompts. */
  get image_uris() { return new FutureStringArray(this.directive.next("image_uris")); }
  /** (Optional) Sampling temperature to use. Higher values make the output more random, lower values make the output more deterministic. */
  get temperature() { return new FutureNumber(this.directive.next("temperature")); }
  /** (Optional) Maximum number of tokens to generate. */
  get max_tokens() { return new FutureNumber(this.directive.next("max_tokens")); }
  /** returns the result for `Firellava13BIn` once it's node has been run. */
  protected override async result(): Promise<Firellava13BIn> { return super.result() as Promise<Firellava13BIn>; }
}
/**  */
class Firellava13BOutArray extends FutureArray {
  /** Returns `Firellava13BOut` at given index. */
  override at(index: number) { return new Firellava13BOut(this.directive.next(index)); }

  /** Returns the result for `Firellava13BOutArray` once it's node has been run. */
  protected override async result(): Promise<Firellava13BOutArray> { return super.result() as Promise<Firellava13BOutArray>; }
}
/** Firellava13BOut */
class Firellava13BOut extends FutureObject {
  /** Text response. */
  get text() { return new FutureString(this.directive.next("text")); }
  /** returns the result for `Firellava13BOut` once it's node has been run. */
  protected override async result(): Promise<Firellava13BOut> { return super.result() as Promise<Firellava13BOut>; }
}
/**  */
class GenerateImageInArray extends FutureArray {
  /** Returns `GenerateImageIn` at given index. */
  override at(index: number) { return new GenerateImageIn(this.directive.next(index)); }

  /** Returns the result for `GenerateImageInArray` once it's node has been run. */
  protected override async result(): Promise<GenerateImageInArray> { return super.result() as Promise<GenerateImageInArray>; }
}
/** GenerateImageIn */
class GenerateImageIn extends FutureObject {
  /** Text prompt. */
  get prompt() { return new FutureString(this.directive.next("prompt")); }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `GenerateImageIn` once it's node has been run. */
  protected override async result(): Promise<GenerateImageIn> { return super.result() as Promise<GenerateImageIn>; }
}
/**  */
class GenerateImageOutArray extends FutureArray {
  /** Returns `GenerateImageOut` at given index. */
  override at(index: number) { return new GenerateImageOut(this.directive.next(index)); }

  /** Returns the result for `GenerateImageOutArray` once it's node has been run. */
  protected override async result(): Promise<GenerateImageOutArray> { return super.result() as Promise<GenerateImageOutArray>; }
}
/** GenerateImageOut */
class GenerateImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** returns the result for `GenerateImageOut` once it's node has been run. */
  protected override async result(): Promise<GenerateImageOut> { return super.result() as Promise<GenerateImageOut>; }
}
/**  */
class MultiGenerateImageInArray extends FutureArray {
  /** Returns `MultiGenerateImageIn` at given index. */
  override at(index: number) { return new MultiGenerateImageIn(this.directive.next(index)); }

  /** Returns the result for `MultiGenerateImageInArray` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateImageInArray> { return super.result() as Promise<MultiGenerateImageInArray>; }
}
/** MultiGenerateImageIn */
class MultiGenerateImageIn extends FutureObject {
  /** Text prompt. */
  get prompt() { return new FutureString(this.directive.next("prompt")); }
  /** Number of images to generate. */
  get num_images() { return new FutureNumber(this.directive.next("num_images")); }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `MultiGenerateImageIn` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateImageIn> { return super.result() as Promise<MultiGenerateImageIn>; }
}
/**  */
class MultiGenerateImageOutArray extends FutureArray {
  /** Returns `MultiGenerateImageOut` at given index. */
  override at(index: number) { return new MultiGenerateImageOut(this.directive.next(index)); }

  /** Returns the result for `MultiGenerateImageOutArray` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateImageOutArray> { return super.result() as Promise<MultiGenerateImageOutArray>; }
}
/** MultiGenerateImageOut */
class MultiGenerateImageOut extends FutureObject {
  /** array */
  get outputs() { return new MultiGenerateImageOutArray(this.directive.next("outputs")); }
  /** returns the result for `MultiGenerateImageOut` once it's node has been run. */
  protected override async result(): Promise<MultiGenerateImageOut> { return super.result() as Promise<MultiGenerateImageOut>; }
}
/**  */
class StableDiffusionXLInArray extends FutureArray {
  /** Returns `StableDiffusionXLIn` at given index. */
  override at(index: number) { return new StableDiffusionXLIn(this.directive.next(index)); }

  /** Returns the result for `StableDiffusionXLInArray` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLInArray> { return super.result() as Promise<StableDiffusionXLInArray>; }
}
/** StableDiffusionXLIn */
class StableDiffusionXLIn extends FutureObject {
  /** Text prompt. */
  get prompt() { return new FutureString(this.directive.next("prompt")); }
  /** (Optional) Negative input prompt. */
  get negative_prompt() { return new FutureString(this.directive.next("negative_prompt")); }
  /** (Optional) Number of diffusion steps. */
  get steps() { return new FutureNumber(this.directive.next("steps")); }
  /** (Optional) Number of images to generate. */
  get num_images() { return new FutureNumber(this.directive.next("num_images")); }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Height of output image, in pixels. */
  get height() { return new FutureNumber(this.directive.next("height")); }
  /** (Optional) Width of output image, in pixels. */
  get width() { return new FutureNumber(this.directive.next("width")); }
  /** (Optional) Seeds for deterministic generation. Default is a random seed. */
  get seeds() { return new FutureNumberArray(this.directive.next("seeds")); }
  /** (Optional) Higher values adhere to the text prompt more strongly, typically at the expense of image quality. */
  get guidance_scale() { return new FutureNumber(this.directive.next("guidance_scale")); }
  /** returns the result for `StableDiffusionXLIn` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLIn> { return super.result() as Promise<StableDiffusionXLIn>; }
}
/**  */
class StableDiffusionImageArray extends FutureArray {
  /** Returns `StableDiffusionImage` at given index. */
  override at(index: number) { return new StableDiffusionImage(this.directive.next(index)); }

  /** Returns the result for `StableDiffusionImageArray` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionImageArray> { return super.result() as Promise<StableDiffusionImageArray>; }
}
/** StableDiffusionImage */
class StableDiffusionImage extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** The random noise seed used for generation. */
  get seed() { return new FutureNumber(this.directive.next("seed")); }
  /** returns the result for `StableDiffusionImage` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionImage> { return super.result() as Promise<StableDiffusionImage>; }
}
/**  */
class StableDiffusionXLOutArray extends FutureArray {
  /** Returns `StableDiffusionXLOut` at given index. */
  override at(index: number) { return new StableDiffusionXLOut(this.directive.next(index)); }

  /** Returns the result for `StableDiffusionXLOutArray` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLOutArray> { return super.result() as Promise<StableDiffusionXLOutArray>; }
}
/** StableDiffusionXLOut */
class StableDiffusionXLOut extends FutureObject {
  /** array */
  get outputs() { return new StableDiffusionXLOutArray(this.directive.next("outputs")); }
  /** returns the result for `StableDiffusionXLOut` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLOut> { return super.result() as Promise<StableDiffusionXLOut>; }
}
/**  */
class StableDiffusionXLIPAdapterInArray extends FutureArray {
  /** Returns `StableDiffusionXLIPAdapterIn` at given index. */
  override at(index: number) { return new StableDiffusionXLIPAdapterIn(this.directive.next(index)); }

  /** Returns the result for `StableDiffusionXLIPAdapterInArray` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLIPAdapterInArray> { return super.result() as Promise<StableDiffusionXLIPAdapterInArray>; }
}
/** StableDiffusionXLIPAdapterIn */
class StableDiffusionXLIPAdapterIn extends FutureObject {
  /** Text prompt. */
  get prompt() { return new FutureString(this.directive.next("prompt")); }
  /** (Optional) Image prompt. */
  get image_prompt_uri() { return new FutureString(this.directive.next("image_prompt_uri")); }
  /** Number of images to generate. */
  get num_images() { return new FutureNumber(this.directive.next("num_images")); }
  /** (Optional) Controls the influence of the image prompt on the generated output. */
  get ip_adapter_scale() { return new FutureNumber(this.directive.next("ip_adapter_scale")); }
  /** (Optional) Negative input prompt. */
  get negative_prompt() { return new FutureString(this.directive.next("negative_prompt")); }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Width of output image, in pixels. */
  get width() { return new FutureNumber(this.directive.next("width")); }
  /** (Optional) Height of output image, in pixels. */
  get height() { return new FutureNumber(this.directive.next("height")); }
  /** (Optional) Random noise seeds. Default is random seeds for each generation. */
  get seeds() { return new FutureNumberArray(this.directive.next("seeds")); }
  /** returns the result for `StableDiffusionXLIPAdapterIn` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLIPAdapterIn> { return super.result() as Promise<StableDiffusionXLIPAdapterIn>; }
}
/**  */
class StableDiffusionXLIPAdapterOutArray extends FutureArray {
  /** Returns `StableDiffusionXLIPAdapterOut` at given index. */
  override at(index: number) { return new StableDiffusionXLIPAdapterOut(this.directive.next(index)); }

  /** Returns the result for `StableDiffusionXLIPAdapterOutArray` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLIPAdapterOutArray> { return super.result() as Promise<StableDiffusionXLIPAdapterOutArray>; }
}
/** StableDiffusionXLIPAdapterOut */
class StableDiffusionXLIPAdapterOut extends FutureObject {
  /** array */
  get outputs() { return new StableDiffusionXLIPAdapterOutArray(this.directive.next("outputs")); }
  /** returns the result for `StableDiffusionXLIPAdapterOut` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLIPAdapterOut> { return super.result() as Promise<StableDiffusionXLIPAdapterOut>; }
}
/**  */
class StableDiffusionXLControlNetInArray extends FutureArray {
  /** Returns `StableDiffusionXLControlNetIn` at given index. */
  override at(index: number) { return new StableDiffusionXLControlNetIn(this.directive.next(index)); }

  /** Returns the result for `StableDiffusionXLControlNetInArray` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLControlNetInArray> { return super.result() as Promise<StableDiffusionXLControlNetInArray>; }
}
/** StableDiffusionXLControlNetIn */
class StableDiffusionXLControlNetIn extends FutureObject {
  /** Input image. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** Strategy to control generation using the input image. */
  get control_method() { return new FutureString(this.directive.next("control_method")); }
  /** Text prompt. */
  get prompt() { return new FutureString(this.directive.next("prompt")); }
  /** Number of images to generate. */
  get num_images() { return new FutureNumber(this.directive.next("num_images")); }
  /** (Optional) Resolution of the output image, in pixels. */
  get output_resolution() { return new FutureNumber(this.directive.next("output_resolution")); }
  /** (Optional) Negative input prompt. */
  get negative_prompt() { return new FutureString(this.directive.next("negative_prompt")); }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Controls the influence of the input image on the generated output. */
  get conditioning_scale() { return new FutureNumber(this.directive.next("conditioning_scale")); }
  /** (Optional) Random noise seeds. Default is random seeds for each generation. */
  get seeds() { return new FutureNumberArray(this.directive.next("seeds")); }
  /** returns the result for `StableDiffusionXLControlNetIn` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLControlNetIn> { return super.result() as Promise<StableDiffusionXLControlNetIn>; }
}
/**  */
class StableDiffusionXLControlNetOutArray extends FutureArray {
  /** Returns `StableDiffusionXLControlNetOut` at given index. */
  override at(index: number) { return new StableDiffusionXLControlNetOut(this.directive.next(index)); }

  /** Returns the result for `StableDiffusionXLControlNetOutArray` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLControlNetOutArray> { return super.result() as Promise<StableDiffusionXLControlNetOutArray>; }
}
/** StableDiffusionXLControlNetOut */
class StableDiffusionXLControlNetOut extends FutureObject {
  /** array */
  get outputs() { return new StableDiffusionXLControlNetOutArray(this.directive.next("outputs")); }
  /** returns the result for `StableDiffusionXLControlNetOut` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLControlNetOut> { return super.result() as Promise<StableDiffusionXLControlNetOut>; }
}
/**  */
class GenerativeEditImageInArray extends FutureArray {
  /** Returns `GenerativeEditImageIn` at given index. */
  override at(index: number) { return new GenerativeEditImageIn(this.directive.next(index)); }

  /** Returns the result for `GenerativeEditImageInArray` once it's node has been run. */
  protected override async result(): Promise<GenerativeEditImageInArray> { return super.result() as Promise<GenerativeEditImageInArray>; }
}
/** GenerativeEditImageIn */
class GenerativeEditImageIn extends FutureObject {
  /** Original image. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** Text prompt. */
  get prompt() { return new FutureString(this.directive.next("prompt")); }
  /** (Optional) Mask image that controls which pixels are inpainted. If unset, the entire image is edited (image-to-image). */
  get mask_image_uri() { return new FutureString(this.directive.next("mask_image_uri")); }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `GenerativeEditImageIn` once it's node has been run. */
  protected override async result(): Promise<GenerativeEditImageIn> { return super.result() as Promise<GenerativeEditImageIn>; }
}
/**  */
class GenerativeEditImageOutArray extends FutureArray {
  /** Returns `GenerativeEditImageOut` at given index. */
  override at(index: number) { return new GenerativeEditImageOut(this.directive.next(index)); }

  /** Returns the result for `GenerativeEditImageOutArray` once it's node has been run. */
  protected override async result(): Promise<GenerativeEditImageOutArray> { return super.result() as Promise<GenerativeEditImageOutArray>; }
}
/** GenerativeEditImageOut */
class GenerativeEditImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** returns the result for `GenerativeEditImageOut` once it's node has been run. */
  protected override async result(): Promise<GenerativeEditImageOut> { return super.result() as Promise<GenerativeEditImageOut>; }
}
/**  */
class MultiGenerativeEditImageInArray extends FutureArray {
  /** Returns `MultiGenerativeEditImageIn` at given index. */
  override at(index: number) { return new MultiGenerativeEditImageIn(this.directive.next(index)); }

  /** Returns the result for `MultiGenerativeEditImageInArray` once it's node has been run. */
  protected override async result(): Promise<MultiGenerativeEditImageInArray> { return super.result() as Promise<MultiGenerativeEditImageInArray>; }
}
/** MultiGenerativeEditImageIn */
class MultiGenerativeEditImageIn extends FutureObject {
  /** Original image. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** Text prompt. */
  get prompt() { return new FutureString(this.directive.next("prompt")); }
  /** (Optional) Mask image that controls which pixels are edited (inpainting). If unset, the entire image is edited (image-to-image). */
  get mask_image_uri() { return new FutureString(this.directive.next("mask_image_uri")); }
  /** Number of images to generate. */
  get num_images() { return new FutureNumber(this.directive.next("num_images")); }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `MultiGenerativeEditImageIn` once it's node has been run. */
  protected override async result(): Promise<MultiGenerativeEditImageIn> { return super.result() as Promise<MultiGenerativeEditImageIn>; }
}
/**  */
class MultiGenerativeEditImageOutArray extends FutureArray {
  /** Returns `MultiGenerativeEditImageOut` at given index. */
  override at(index: number) { return new MultiGenerativeEditImageOut(this.directive.next(index)); }

  /** Returns the result for `MultiGenerativeEditImageOutArray` once it's node has been run. */
  protected override async result(): Promise<MultiGenerativeEditImageOutArray> { return super.result() as Promise<MultiGenerativeEditImageOutArray>; }
}
/** MultiGenerativeEditImageOut */
class MultiGenerativeEditImageOut extends FutureObject {
  /** array */
  get outputs() { return new MultiGenerativeEditImageOutArray(this.directive.next("outputs")); }
  /** returns the result for `MultiGenerativeEditImageOut` once it's node has been run. */
  protected override async result(): Promise<MultiGenerativeEditImageOut> { return super.result() as Promise<MultiGenerativeEditImageOut>; }
}
/**  */
class StableDiffusionXLInpaintInArray extends FutureArray {
  /** Returns `StableDiffusionXLInpaintIn` at given index. */
  override at(index: number) { return new StableDiffusionXLInpaintIn(this.directive.next(index)); }

  /** Returns the result for `StableDiffusionXLInpaintInArray` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLInpaintInArray> { return super.result() as Promise<StableDiffusionXLInpaintInArray>; }
}
/** StableDiffusionXLInpaintIn */
class StableDiffusionXLInpaintIn extends FutureObject {
  /** Original image. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** Text prompt. */
  get prompt() { return new FutureString(this.directive.next("prompt")); }
  /** (Optional) Mask image that controls which pixels are edited (inpainting). If unset, the entire image is edited (image-to-image). */
  get mask_image_uri() { return new FutureString(this.directive.next("mask_image_uri")); }
  /** Number of images to generate. */
  get num_images() { return new FutureNumber(this.directive.next("num_images")); }
  /** (Optional) Resolution of the output image, in pixels. */
  get output_resolution() { return new FutureNumber(this.directive.next("output_resolution")); }
  /** (Optional) Negative input prompt. */
  get negative_prompt() { return new FutureString(this.directive.next("negative_prompt")); }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Controls the strength of the generation process. */
  get strength() { return new FutureNumber(this.directive.next("strength")); }
  /** (Optional) Random noise seeds. Default is random seeds for each generation. */
  get seeds() { return new FutureNumberArray(this.directive.next("seeds")); }
  /** returns the result for `StableDiffusionXLInpaintIn` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLInpaintIn> { return super.result() as Promise<StableDiffusionXLInpaintIn>; }
}
/**  */
class StableDiffusionXLInpaintOutArray extends FutureArray {
  /** Returns `StableDiffusionXLInpaintOut` at given index. */
  override at(index: number) { return new StableDiffusionXLInpaintOut(this.directive.next(index)); }

  /** Returns the result for `StableDiffusionXLInpaintOutArray` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLInpaintOutArray> { return super.result() as Promise<StableDiffusionXLInpaintOutArray>; }
}
/** StableDiffusionXLInpaintOut */
class StableDiffusionXLInpaintOut extends FutureObject {
  /** array */
  get outputs() { return new StableDiffusionXLInpaintOutArray(this.directive.next("outputs")); }
  /** returns the result for `StableDiffusionXLInpaintOut` once it's node has been run. */
  protected override async result(): Promise<StableDiffusionXLInpaintOut> { return super.result() as Promise<StableDiffusionXLInpaintOut>; }
}
/**  */
class BoundingBoxArray extends FutureArray {
  /** Returns `BoundingBox` at given index. */
  override at(index: number) { return new BoundingBox(this.directive.next(index)); }

  /** Returns the result for `BoundingBoxArray` once it's node has been run. */
  protected override async result(): Promise<BoundingBoxArray> { return super.result() as Promise<BoundingBoxArray>; }
}
/** BoundingBox */
class BoundingBox extends FutureObject {
  /** Top left corner x. */
  get x1() { return new FutureNumber(this.directive.next("x1")); }
  /** Top left corner y. */
  get y1() { return new FutureNumber(this.directive.next("y1")); }
  /** Bottom right corner x. */
  get x2() { return new FutureNumber(this.directive.next("x2")); }
  /** Bottom right corner y. */
  get y2() { return new FutureNumber(this.directive.next("y2")); }
  /** returns the result for `BoundingBox` once it's node has been run. */
  protected override async result(): Promise<BoundingBox> { return super.result() as Promise<BoundingBox>; }
}
/**  */
class PointArray extends FutureArray {
  /** Returns `Point` at given index. */
  override at(index: number) { return new Point(this.directive.next(index)); }

  /** Returns the result for `PointArray` once it's node has been run. */
  protected override async result(): Promise<PointArray> { return super.result() as Promise<PointArray>; }
}
/** Point */
class Point extends FutureObject {
  /** X position. */
  get x() { return new FutureNumber(this.directive.next("x")); }
  /** Y position. */
  get y() { return new FutureNumber(this.directive.next("y")); }
  /** returns the result for `Point` once it's node has been run. */
  protected override async result(): Promise<Point> { return super.result() as Promise<Point>; }
}
/**  */
class FillMaskInArray extends FutureArray {
  /** Returns `FillMaskIn` at given index. */
  override at(index: number) { return new FillMaskIn(this.directive.next(index)); }

  /** Returns the result for `FillMaskInArray` once it's node has been run. */
  protected override async result(): Promise<FillMaskInArray> { return super.result() as Promise<FillMaskInArray>; }
}
/** FillMaskIn */
class FillMaskIn extends FutureObject {
  /** Input image. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** Mask image that controls which pixels are inpainted. */
  get mask_image_uri() { return new FutureString(this.directive.next("mask_image_uri")); }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `FillMaskIn` once it's node has been run. */
  protected override async result(): Promise<FillMaskIn> { return super.result() as Promise<FillMaskIn>; }
}
/**  */
class FillMaskOutArray extends FutureArray {
  /** Returns `FillMaskOut` at given index. */
  override at(index: number) { return new FillMaskOut(this.directive.next(index)); }

  /** Returns the result for `FillMaskOutArray` once it's node has been run. */
  protected override async result(): Promise<FillMaskOutArray> { return super.result() as Promise<FillMaskOutArray>; }
}
/** FillMaskOut */
class FillMaskOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** returns the result for `FillMaskOut` once it's node has been run. */
  protected override async result(): Promise<FillMaskOut> { return super.result() as Promise<FillMaskOut>; }
}
/**  */
class BigLaMaInArray extends FutureArray {
  /** Returns `BigLaMaIn` at given index. */
  override at(index: number) { return new BigLaMaIn(this.directive.next(index)); }

  /** Returns the result for `BigLaMaInArray` once it's node has been run. */
  protected override async result(): Promise<BigLaMaInArray> { return super.result() as Promise<BigLaMaInArray>; }
}
/** BigLaMaIn */
class BigLaMaIn extends FutureObject {
  /** Input image. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** Mask image that controls which pixels are inpainted. */
  get mask_image_uri() { return new FutureString(this.directive.next("mask_image_uri")); }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** returns the result for `BigLaMaIn` once it's node has been run. */
  protected override async result(): Promise<BigLaMaIn> { return super.result() as Promise<BigLaMaIn>; }
}
/**  */
class BigLaMaOutArray extends FutureArray {
  /** Returns `BigLaMaOut` at given index. */
  override at(index: number) { return new BigLaMaOut(this.directive.next(index)); }

  /** Returns the result for `BigLaMaOutArray` once it's node has been run. */
  protected override async result(): Promise<BigLaMaOutArray> { return super.result() as Promise<BigLaMaOutArray>; }
}
/** BigLaMaOut */
class BigLaMaOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** returns the result for `BigLaMaOut` once it's node has been run. */
  protected override async result(): Promise<BigLaMaOut> { return super.result() as Promise<BigLaMaOut>; }
}
/**  */
class RemoveBackgroundInArray extends FutureArray {
  /** Returns `RemoveBackgroundIn` at given index. */
  override at(index: number) { return new RemoveBackgroundIn(this.directive.next(index)); }

  /** Returns the result for `RemoveBackgroundInArray` once it's node has been run. */
  protected override async result(): Promise<RemoveBackgroundInArray> { return super.result() as Promise<RemoveBackgroundInArray>; }
}
/** RemoveBackgroundIn */
class RemoveBackgroundIn extends FutureObject {
  /** Input image. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** (Optional) Return a mask image instead of the original content. */
  get return_mask() { return new (this.directive.next("return_mask")); }
  /** (Optional) Hex value background color. Transparent if unset. */
  get background_color() { return new FutureString(this.directive.next("background_color")); }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `RemoveBackgroundIn` once it's node has been run. */
  protected override async result(): Promise<RemoveBackgroundIn> { return super.result() as Promise<RemoveBackgroundIn>; }
}
/**  */
class RemoveBackgroundOutArray extends FutureArray {
  /** Returns `RemoveBackgroundOut` at given index. */
  override at(index: number) { return new RemoveBackgroundOut(this.directive.next(index)); }

  /** Returns the result for `RemoveBackgroundOutArray` once it's node has been run. */
  protected override async result(): Promise<RemoveBackgroundOutArray> { return super.result() as Promise<RemoveBackgroundOutArray>; }
}
/** RemoveBackgroundOut */
class RemoveBackgroundOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** returns the result for `RemoveBackgroundOut` once it's node has been run. */
  protected override async result(): Promise<RemoveBackgroundOut> { return super.result() as Promise<RemoveBackgroundOut>; }
}
/**  */
class DISISNetInArray extends FutureArray {
  /** Returns `DISISNetIn` at given index. */
  override at(index: number) { return new DISISNetIn(this.directive.next(index)); }

  /** Returns the result for `DISISNetInArray` once it's node has been run. */
  protected override async result(): Promise<DISISNetInArray> { return super.result() as Promise<DISISNetInArray>; }
}
/** DISISNetIn */
class DISISNetIn extends FutureObject {
  /** Input image. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** returns the result for `DISISNetIn` once it's node has been run. */
  protected override async result(): Promise<DISISNetIn> { return super.result() as Promise<DISISNetIn>; }
}
/**  */
class DISISNetOutArray extends FutureArray {
  /** Returns `DISISNetOut` at given index. */
  override at(index: number) { return new DISISNetOut(this.directive.next(index)); }

  /** Returns the result for `DISISNetOutArray` once it's node has been run. */
  protected override async result(): Promise<DISISNetOutArray> { return super.result() as Promise<DISISNetOutArray>; }
}
/** DISISNetOut */
class DISISNetOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** returns the result for `DISISNetOut` once it's node has been run. */
  protected override async result(): Promise<DISISNetOut> { return super.result() as Promise<DISISNetOut>; }
}
/**  */
class UpscaleImageInArray extends FutureArray {
  /** Returns `UpscaleImageIn` at given index. */
  override at(index: number) { return new UpscaleImageIn(this.directive.next(index)); }

  /** Returns the result for `UpscaleImageInArray` once it's node has been run. */
  protected override async result(): Promise<UpscaleImageInArray> { return super.result() as Promise<UpscaleImageInArray>; }
}
/** UpscaleImageIn */
class UpscaleImageIn extends FutureObject {
  /** Input image. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `UpscaleImageIn` once it's node has been run. */
  protected override async result(): Promise<UpscaleImageIn> { return super.result() as Promise<UpscaleImageIn>; }
}
/**  */
class UpscaleImageOutArray extends FutureArray {
  /** Returns `UpscaleImageOut` at given index. */
  override at(index: number) { return new UpscaleImageOut(this.directive.next(index)); }

  /** Returns the result for `UpscaleImageOutArray` once it's node has been run. */
  protected override async result(): Promise<UpscaleImageOutArray> { return super.result() as Promise<UpscaleImageOutArray>; }
}
/** UpscaleImageOut */
class UpscaleImageOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** returns the result for `UpscaleImageOut` once it's node has been run. */
  protected override async result(): Promise<UpscaleImageOut> { return super.result() as Promise<UpscaleImageOut>; }
}
/**  */
class RealESRGANInArray extends FutureArray {
  /** Returns `RealESRGANIn` at given index. */
  override at(index: number) { return new RealESRGANIn(this.directive.next(index)); }

  /** Returns the result for `RealESRGANInArray` once it's node has been run. */
  protected override async result(): Promise<RealESRGANInArray> { return super.result() as Promise<RealESRGANInArray>; }
}
/** RealESRGANIn */
class RealESRGANIn extends FutureObject {
  /** Input image. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** returns the result for `RealESRGANIn` once it's node has been run. */
  protected override async result(): Promise<RealESRGANIn> { return super.result() as Promise<RealESRGANIn>; }
}
/**  */
class RealESRGANOutArray extends FutureArray {
  /** Returns `RealESRGANOut` at given index. */
  override at(index: number) { return new RealESRGANOut(this.directive.next(index)); }

  /** Returns the result for `RealESRGANOutArray` once it's node has been run. */
  protected override async result(): Promise<RealESRGANOutArray> { return super.result() as Promise<RealESRGANOutArray>; }
}
/** RealESRGANOut */
class RealESRGANOut extends FutureObject {
  /** Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** returns the result for `RealESRGANOut` once it's node has been run. */
  protected override async result(): Promise<RealESRGANOut> { return super.result() as Promise<RealESRGANOut>; }
}
/**  */
class SegmentUnderPointInArray extends FutureArray {
  /** Returns `SegmentUnderPointIn` at given index. */
  override at(index: number) { return new SegmentUnderPointIn(this.directive.next(index)); }

  /** Returns the result for `SegmentUnderPointInArray` once it's node has been run. */
  protected override async result(): Promise<SegmentUnderPointInArray> { return super.result() as Promise<SegmentUnderPointInArray>; }
}
/** SegmentUnderPointIn */
class SegmentUnderPointIn extends FutureObject {
  /** Input image. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** Point prompt. */
  get point() { return new (this.directive.next("point")); }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `SegmentUnderPointIn` once it's node has been run. */
  protected override async result(): Promise<SegmentUnderPointIn> { return super.result() as Promise<SegmentUnderPointIn>; }
}
/**  */
class SegmentUnderPointOutArray extends FutureArray {
  /** Returns `SegmentUnderPointOut` at given index. */
  override at(index: number) { return new SegmentUnderPointOut(this.directive.next(index)); }

  /** Returns the result for `SegmentUnderPointOutArray` once it's node has been run. */
  protected override async result(): Promise<SegmentUnderPointOutArray> { return super.result() as Promise<SegmentUnderPointOutArray>; }
}
/** SegmentUnderPointOut */
class SegmentUnderPointOut extends FutureObject {
  /** Detected segments in 'mask image' format. Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get mask_image_uri() { return new FutureString(this.directive.next("mask_image_uri")); }
  /** returns the result for `SegmentUnderPointOut` once it's node has been run. */
  protected override async result(): Promise<SegmentUnderPointOut> { return super.result() as Promise<SegmentUnderPointOut>; }
}
/**  */
class SegmentAnythingInArray extends FutureArray {
  /** Returns `SegmentAnythingIn` at given index. */
  override at(index: number) { return new SegmentAnythingIn(this.directive.next(index)); }

  /** Returns the result for `SegmentAnythingInArray` once it's node has been run. */
  protected override async result(): Promise<SegmentAnythingInArray> { return super.result() as Promise<SegmentAnythingInArray>; }
}
/** SegmentAnythingIn */
class SegmentAnythingIn extends FutureObject {
  /** Input image. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** (Optional) Point prompts, to detect a segment under the point. One of `point_prompts` or `box_prompts` must be set. */
  get point_prompts() { return new SegmentAnythingInArray(this.directive.next("point_prompts")); }
  /** (Optional) Box prompts, to detect a segment within the bounding box. One of `point_prompts` or `box_prompts` must be set. */
  get box_prompts() { return new SegmentAnythingInArray(this.directive.next("box_prompts")); }
  /** (Optional) Use "hosted" to return an image URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the image data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** returns the result for `SegmentAnythingIn` once it's node has been run. */
  protected override async result(): Promise<SegmentAnythingIn> { return super.result() as Promise<SegmentAnythingIn>; }
}
/**  */
class SegmentAnythingOutArray extends FutureArray {
  /** Returns `SegmentAnythingOut` at given index. */
  override at(index: number) { return new SegmentAnythingOut(this.directive.next(index)); }

  /** Returns the result for `SegmentAnythingOutArray` once it's node has been run. */
  protected override async result(): Promise<SegmentAnythingOutArray> { return super.result() as Promise<SegmentAnythingOutArray>; }
}
/** SegmentAnythingOut */
class SegmentAnythingOut extends FutureObject {
  /** Detected segments in 'mask image' format. Base 64-encoded JPEG image bytes, or a hosted image url if `store` is provided. */
  get mask_image_uri() { return new FutureString(this.directive.next("mask_image_uri")); }
  /** returns the result for `SegmentAnythingOut` once it's node has been run. */
  protected override async result(): Promise<SegmentAnythingOut> { return super.result() as Promise<SegmentAnythingOut>; }
}
/**  */
class TranscribeMediaInArray extends FutureArray {
  /** Returns `TranscribeMediaIn` at given index. */
  override at(index: number) { return new TranscribeMediaIn(this.directive.next(index)); }

  /** Returns the result for `TranscribeMediaInArray` once it's node has been run. */
  protected override async result(): Promise<TranscribeMediaInArray> { return super.result() as Promise<TranscribeMediaInArray>; }
}
/** TranscribeMediaIn */
class TranscribeMediaIn extends FutureObject {
  /** Input audio. */
  get audio_uri() { return new FutureString(this.directive.next("audio_uri")); }
  /** (Optional) Prompt to guide model on the content and context of input audio. */
  get prompt() { return new FutureString(this.directive.next("prompt")); }
  /** (Optional) Language of input audio in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format. */
  get language() { return new FutureString(this.directive.next("language")); }
  /** (Optional) Segment the text into sentences with approximate timestamps. */
  get segment() { return new (this.directive.next("segment")); }
  /** (Optional) Align transcription to produce more accurate sentence-level timestamps and word-level timestamps. An array of word segments will be included in each sentence segment. */
  get align() { return new (this.directive.next("align")); }
  /** (Optional) Identify speakers for each segment. Speaker IDs will be included in each segment. */
  get diarize() { return new (this.directive.next("diarize")); }
  /** (Optional) Suggest automatic chapter markers. */
  get suggest_chapters() { return new (this.directive.next("suggest_chapters")); }
  /** returns the result for `TranscribeMediaIn` once it's node has been run. */
  protected override async result(): Promise<TranscribeMediaIn> { return super.result() as Promise<TranscribeMediaIn>; }
}
/**  */
class TranscribedWordArray extends FutureArray {
  /** Returns `TranscribedWord` at given index. */
  override at(index: number) { return new TranscribedWord(this.directive.next(index)); }

  /** Returns the result for `TranscribedWordArray` once it's node has been run. */
  protected override async result(): Promise<TranscribedWordArray> { return super.result() as Promise<TranscribedWordArray>; }
}
/** TranscribedWord */
class TranscribedWord extends FutureObject {
  /** Text of word. */
  get word() { return new FutureString(this.directive.next("word")); }
  /** (Optional) Start time of word, in seconds. */
  get start() { return new FutureNumber(this.directive.next("start")); }
  /** (Optional) End time of word, in seconds. */
  get end() { return new FutureNumber(this.directive.next("end")); }
  /** (Optional) ID of speaker, if `diarize` is enabled. */
  get speaker() { return new FutureString(this.directive.next("speaker")); }
  /** returns the result for `TranscribedWord` once it's node has been run. */
  protected override async result(): Promise<TranscribedWord> { return super.result() as Promise<TranscribedWord>; }
}
/**  */
class TranscribedSegmentArray extends FutureArray {
  /** Returns `TranscribedSegment` at given index. */
  override at(index: number) { return new TranscribedSegment(this.directive.next(index)); }

  /** Returns the result for `TranscribedSegmentArray` once it's node has been run. */
  protected override async result(): Promise<TranscribedSegmentArray> { return super.result() as Promise<TranscribedSegmentArray>; }
}
/** TranscribedSegment */
class TranscribedSegment extends FutureObject {
  /** Text of segment. */
  get text() { return new FutureString(this.directive.next("text")); }
  /** Start time of segment, in seconds. */
  get start() { return new FutureNumber(this.directive.next("start")); }
  /** End time of segment, in seconds. */
  get end() { return new FutureNumber(this.directive.next("end")); }
  /** (Optional) ID of speaker, if `diarize` is enabled. */
  get speaker() { return new FutureString(this.directive.next("speaker")); }
  /** (Optional) Aligned words, if `align` is enabled. */
  get words() { return new TranscribedSegmentArray(this.directive.next("words")); }
  /** returns the result for `TranscribedSegment` once it's node has been run. */
  protected override async result(): Promise<TranscribedSegment> { return super.result() as Promise<TranscribedSegment>; }
}
/**  */
class ChapterMarkerArray extends FutureArray {
  /** Returns `ChapterMarker` at given index. */
  override at(index: number) { return new ChapterMarker(this.directive.next(index)); }

  /** Returns the result for `ChapterMarkerArray` once it's node has been run. */
  protected override async result(): Promise<ChapterMarkerArray> { return super.result() as Promise<ChapterMarkerArray>; }
}
/** ChapterMarker */
class ChapterMarker extends FutureObject {
  /** Chapter title. */
  get title() { return new FutureString(this.directive.next("title")); }
  /** Start time of chapter, in seconds. */
  get start() { return new FutureNumber(this.directive.next("start")); }
  /** returns the result for `ChapterMarker` once it's node has been run. */
  protected override async result(): Promise<ChapterMarker> { return super.result() as Promise<ChapterMarker>; }
}
/**  */
class TranscribeMediaOutArray extends FutureArray {
  /** Returns `TranscribeMediaOut` at given index. */
  override at(index: number) { return new TranscribeMediaOut(this.directive.next(index)); }

  /** Returns the result for `TranscribeMediaOutArray` once it's node has been run. */
  protected override async result(): Promise<TranscribeMediaOutArray> { return super.result() as Promise<TranscribeMediaOutArray>; }
}
/** TranscribeMediaOut */
class TranscribeMediaOut extends FutureObject {
  /** Transcribed text. */
  get text() { return new FutureString(this.directive.next("text")); }
  /** (Optional) Transcribed segments, if `segment` is enabled. */
  get segments() { return new TranscribeMediaOutArray(this.directive.next("segments")); }
  /** (Optional) Chapter markers, if `suggest_chapters` is enabled. */
  get chapters() { return new TranscribeMediaOutArray(this.directive.next("chapters")); }
  /** returns the result for `TranscribeMediaOut` once it's node has been run. */
  protected override async result(): Promise<TranscribeMediaOut> { return super.result() as Promise<TranscribeMediaOut>; }
}
/**  */
class GenerateSpeechInArray extends FutureArray {
  /** Returns `GenerateSpeechIn` at given index. */
  override at(index: number) { return new GenerateSpeechIn(this.directive.next(index)); }

  /** Returns the result for `GenerateSpeechInArray` once it's node has been run. */
  protected override async result(): Promise<GenerateSpeechInArray> { return super.result() as Promise<GenerateSpeechInArray>; }
}
/** GenerateSpeechIn */
class GenerateSpeechIn extends FutureObject {
  /** Input text. */
  get text() { return new FutureString(this.directive.next("text")); }
  /** (Optional) Use "hosted" to return an audio URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the audio data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `GenerateSpeechIn` once it's node has been run. */
  protected override async result(): Promise<GenerateSpeechIn> { return super.result() as Promise<GenerateSpeechIn>; }
}
/**  */
class GenerateSpeechOutArray extends FutureArray {
  /** Returns `GenerateSpeechOut` at given index. */
  override at(index: number) { return new GenerateSpeechOut(this.directive.next(index)); }

  /** Returns the result for `GenerateSpeechOutArray` once it's node has been run. */
  protected override async result(): Promise<GenerateSpeechOutArray> { return super.result() as Promise<GenerateSpeechOutArray>; }
}
/** GenerateSpeechOut */
class GenerateSpeechOut extends FutureObject {
  /** Base 64-encoded WAV audio bytes, or a hosted audio url if `store` is provided. */
  get audio_uri() { return new FutureString(this.directive.next("audio_uri")); }
  /** returns the result for `GenerateSpeechOut` once it's node has been run. */
  protected override async result(): Promise<GenerateSpeechOut> { return super.result() as Promise<GenerateSpeechOut>; }
}
/**  */
class XTTSV2InArray extends FutureArray {
  /** Returns `XTTSV2In` at given index. */
  override at(index: number) { return new XTTSV2In(this.directive.next(index)); }

  /** Returns the result for `XTTSV2InArray` once it's node has been run. */
  protected override async result(): Promise<XTTSV2InArray> { return super.result() as Promise<XTTSV2InArray>; }
}
/** XTTSV2In */
class XTTSV2In extends FutureObject {
  /** Input text. */
  get text() { return new FutureString(this.directive.next("text")); }
  /** (Optional) Reference audio used to synthesize the speaker. If unset, a default speaker voice will be used. */
  get audio_uri() { return new FutureString(this.directive.next("audio_uri")); }
  /** (Optional) Language of input text. Supported languages: `en, de, fr, es, it, pt, pl, zh, ar, cs, ru, nl, tr, hu, ko`. */
  get language() { return new FutureString(this.directive.next("language")); }
  /** (Optional) Use "hosted" to return an audio URL hosted on Substrate. You can also provide a URL to a registered [file store](/docs/file-stores). If unset, the audio data will be returned as a base64-encoded string. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** returns the result for `XTTSV2In` once it's node has been run. */
  protected override async result(): Promise<XTTSV2In> { return super.result() as Promise<XTTSV2In>; }
}
/**  */
class XTTSV2OutArray extends FutureArray {
  /** Returns `XTTSV2Out` at given index. */
  override at(index: number) { return new XTTSV2Out(this.directive.next(index)); }

  /** Returns the result for `XTTSV2OutArray` once it's node has been run. */
  protected override async result(): Promise<XTTSV2OutArray> { return super.result() as Promise<XTTSV2OutArray>; }
}
/** XTTSV2Out */
class XTTSV2Out extends FutureObject {
  /** Base 64-encoded WAV audio bytes, or a hosted audio url if `store` is provided. */
  get audio_uri() { return new FutureString(this.directive.next("audio_uri")); }
  /** returns the result for `XTTSV2Out` once it's node has been run. */
  protected override async result(): Promise<XTTSV2Out> { return super.result() as Promise<XTTSV2Out>; }
}
/**  */
class EmbeddingArray extends FutureArray {
  /** Returns `Embedding` at given index. */
  override at(index: number) { return new Embedding(this.directive.next(index)); }

  /** Returns the result for `EmbeddingArray` once it's node has been run. */
  protected override async result(): Promise<EmbeddingArray> { return super.result() as Promise<EmbeddingArray>; }
}
/** Embedding */
class Embedding extends FutureObject {
  /** Embedding vector. */
  get vector() { return new FutureNumberArray(this.directive.next("vector")); }
  /** (Optional) Vector store document ID. */
  get doc_id() { return new FutureString(this.directive.next("doc_id")); }
  /** (Optional) Vector store document metadata. */
  get metadata() { return new FutureAnyObject(this.directive.next("metadata")); }
  /** returns the result for `Embedding` once it's node has been run. */
  protected override async result(): Promise<Embedding> { return super.result() as Promise<Embedding>; }
}
/**  */
class EmbedTextInArray extends FutureArray {
  /** Returns `EmbedTextIn` at given index. */
  override at(index: number) { return new EmbedTextIn(this.directive.next(index)); }

  /** Returns the result for `EmbedTextInArray` once it's node has been run. */
  protected override async result(): Promise<EmbedTextInArray> { return super.result() as Promise<EmbedTextInArray>; }
}
/** EmbedTextIn */
class EmbedTextIn extends FutureObject {
  /** Text to embed. */
  get text() { return new FutureString(this.directive.next("text")); }
  /** (Optional) [Vector store](/docs/vector-stores) identifier. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Metadata that can be used to query the vector store. Ignored if `store` is unset. */
  get metadata() { return new FutureAnyObject(this.directive.next("metadata")); }
  /** (Optional) Choose keys from `metadata` to embed with text. */
  get embedded_metadata_keys() { return new FutureStringArray(this.directive.next("embedded_metadata_keys")); }
  /** (Optional) Vector store document ID. Ignored if `store` is unset. */
  get doc_id() { return new FutureString(this.directive.next("doc_id")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `EmbedTextIn` once it's node has been run. */
  protected override async result(): Promise<EmbedTextIn> { return super.result() as Promise<EmbedTextIn>; }
}
/**  */
class EmbedTextOutArray extends FutureArray {
  /** Returns `EmbedTextOut` at given index. */
  override at(index: number) { return new EmbedTextOut(this.directive.next(index)); }

  /** Returns the result for `EmbedTextOutArray` once it's node has been run. */
  protected override async result(): Promise<EmbedTextOutArray> { return super.result() as Promise<EmbedTextOutArray>; }
}
/** EmbedTextOut */
class EmbedTextOut extends FutureObject {
  /** Generated embedding. */
  get embedding() { return new Embedding(this.directive.next("embedding")); }
  /** returns the result for `EmbedTextOut` once it's node has been run. */
  protected override async result(): Promise<EmbedTextOut> { return super.result() as Promise<EmbedTextOut>; }
}
/**  */
class NoneArray extends FutureArray {
  /** Returns `None` at given index. */
  override at(index: number) { return new None(this.directive.next(index)); }

  /** Returns the result for `NoneArray` once it's node has been run. */
  protected override async result(): Promise<NoneArray> { return super.result() as Promise<NoneArray>; }
}
/** None */
class None extends FutureObject {
  /** Text to embed. */
  get text() { return new FutureString(this.directive.next("text")); }
  /** (Optional) Metadata that can be used to query the vector store. Ignored if `store` is unset. */
  get metadata() { return new FutureAnyObject(this.directive.next("metadata")); }
  /** (Optional) Vector store document ID. Ignored if `store` is unset. */
  get doc_id() { return new FutureString(this.directive.next("doc_id")); }
  /** returns the result for `None` once it's node has been run. */
  protected override async result(): Promise<None> { return super.result() as Promise<None>; }
}
/**  */
class MultiEmbedTextInArray extends FutureArray {
  /** Returns `MultiEmbedTextIn` at given index. */
  override at(index: number) { return new MultiEmbedTextIn(this.directive.next(index)); }

  /** Returns the result for `MultiEmbedTextInArray` once it's node has been run. */
  protected override async result(): Promise<MultiEmbedTextInArray> { return super.result() as Promise<MultiEmbedTextInArray>; }
}
/** MultiEmbedTextIn */
class MultiEmbedTextIn extends FutureObject {
  /** Items to embed. */
  get items() { return new MultiEmbedTextInArray(this.directive.next("items")); }
  /** (Optional) [Vector store](/docs/vector-stores) identifier. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Choose keys from `metadata` to embed with text. */
  get embedded_metadata_keys() { return new FutureStringArray(this.directive.next("embedded_metadata_keys")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `MultiEmbedTextIn` once it's node has been run. */
  protected override async result(): Promise<MultiEmbedTextIn> { return super.result() as Promise<MultiEmbedTextIn>; }
}
/**  */
class MultiEmbedTextOutArray extends FutureArray {
  /** Returns `MultiEmbedTextOut` at given index. */
  override at(index: number) { return new MultiEmbedTextOut(this.directive.next(index)); }

  /** Returns the result for `MultiEmbedTextOutArray` once it's node has been run. */
  protected override async result(): Promise<MultiEmbedTextOutArray> { return super.result() as Promise<MultiEmbedTextOutArray>; }
}
/** MultiEmbedTextOut */
class MultiEmbedTextOut extends FutureObject {
  /** Generated embeddings. */
  get embeddings() { return new MultiEmbedTextOutArray(this.directive.next("embeddings")); }
  /** returns the result for `MultiEmbedTextOut` once it's node has been run. */
  protected override async result(): Promise<MultiEmbedTextOut> { return super.result() as Promise<MultiEmbedTextOut>; }
}
/**  */
class JinaV2InArray extends FutureArray {
  /** Returns `JinaV2In` at given index. */
  override at(index: number) { return new JinaV2In(this.directive.next(index)); }

  /** Returns the result for `JinaV2InArray` once it's node has been run. */
  protected override async result(): Promise<JinaV2InArray> { return super.result() as Promise<JinaV2InArray>; }
}
/** JinaV2In */
class JinaV2In extends FutureObject {
  /** Items to embed. */
  get items() { return new JinaV2InArray(this.directive.next("items")); }
  /** (Optional) [Vector store](/docs/vector-stores) identifier. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Choose keys from `metadata` to embed with text. */
  get embedded_metadata_keys() { return new FutureStringArray(this.directive.next("embedded_metadata_keys")); }
  /** returns the result for `JinaV2In` once it's node has been run. */
  protected override async result(): Promise<JinaV2In> { return super.result() as Promise<JinaV2In>; }
}
/**  */
class JinaV2OutArray extends FutureArray {
  /** Returns `JinaV2Out` at given index. */
  override at(index: number) { return new JinaV2Out(this.directive.next(index)); }

  /** Returns the result for `JinaV2OutArray` once it's node has been run. */
  protected override async result(): Promise<JinaV2OutArray> { return super.result() as Promise<JinaV2OutArray>; }
}
/** JinaV2Out */
class JinaV2Out extends FutureObject {
  /** Generated embeddings. */
  get embeddings() { return new JinaV2OutArray(this.directive.next("embeddings")); }
  /** returns the result for `JinaV2Out` once it's node has been run. */
  protected override async result(): Promise<JinaV2Out> { return super.result() as Promise<JinaV2Out>; }
}
/**  */
class EmbedImageInArray extends FutureArray {
  /** Returns `EmbedImageIn` at given index. */
  override at(index: number) { return new EmbedImageIn(this.directive.next(index)); }

  /** Returns the result for `EmbedImageInArray` once it's node has been run. */
  protected override async result(): Promise<EmbedImageInArray> { return super.result() as Promise<EmbedImageInArray>; }
}
/** EmbedImageIn */
class EmbedImageIn extends FutureObject {
  /** Image to embed. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** (Optional) [Vector store](/docs/vector-stores) identifier. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Vector store document ID. Ignored if `store` is unset. */
  get doc_id() { return new FutureString(this.directive.next("doc_id")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `EmbedImageIn` once it's node has been run. */
  protected override async result(): Promise<EmbedImageIn> { return super.result() as Promise<EmbedImageIn>; }
}
/**  */
class EmbedImageOutArray extends FutureArray {
  /** Returns `EmbedImageOut` at given index. */
  override at(index: number) { return new EmbedImageOut(this.directive.next(index)); }

  /** Returns the result for `EmbedImageOutArray` once it's node has been run. */
  protected override async result(): Promise<EmbedImageOutArray> { return super.result() as Promise<EmbedImageOutArray>; }
}
/** EmbedImageOut */
class EmbedImageOut extends FutureObject {
  /** Generated embedding. */
  get embedding() { return new Embedding(this.directive.next("embedding")); }
  /** returns the result for `EmbedImageOut` once it's node has been run. */
  protected override async result(): Promise<EmbedImageOut> { return super.result() as Promise<EmbedImageOut>; }
}
/**  */
class NoneArray extends FutureArray {
  /** Returns `None` at given index. */
  override at(index: number) { return new None(this.directive.next(index)); }

  /** Returns the result for `NoneArray` once it's node has been run. */
  protected override async result(): Promise<NoneArray> { return super.result() as Promise<NoneArray>; }
}
/** None */
class None extends FutureObject {
  /** Image to embed. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** (Optional) Vector store document ID. Ignored if `store` is unset. */
  get doc_id() { return new FutureString(this.directive.next("doc_id")); }
  /** returns the result for `None` once it's node has been run. */
  protected override async result(): Promise<None> { return super.result() as Promise<None>; }
}
/**  */
class NoneArray extends FutureArray {
  /** Returns `None` at given index. */
  override at(index: number) { return new None(this.directive.next(index)); }

  /** Returns the result for `NoneArray` once it's node has been run. */
  protected override async result(): Promise<NoneArray> { return super.result() as Promise<NoneArray>; }
}
/** None */
class None extends FutureObject {
  /** Image to embed. */
  get image_uri() { return new FutureString(this.directive.next("image_uri")); }
  /** Text to embed. */
  get text() { return new FutureString(this.directive.next("text")); }
  /** Metadata that can be used to query the vector store. Ignored if `store` is unset. */
  get metadata() { return new FutureAnyObject(this.directive.next("metadata")); }
  /** Vector store document ID. Ignored if `store` is unset. */
  get doc_id() { return new FutureString(this.directive.next("doc_id")); }
  /** returns the result for `None` once it's node has been run. */
  protected override async result(): Promise<None> { return super.result() as Promise<None>; }
}
/**  */
class MultiEmbedImageInArray extends FutureArray {
  /** Returns `MultiEmbedImageIn` at given index. */
  override at(index: number) { return new MultiEmbedImageIn(this.directive.next(index)); }

  /** Returns the result for `MultiEmbedImageInArray` once it's node has been run. */
  protected override async result(): Promise<MultiEmbedImageInArray> { return super.result() as Promise<MultiEmbedImageInArray>; }
}
/** MultiEmbedImageIn */
class MultiEmbedImageIn extends FutureObject {
  /** Items to embed. */
  get items() { return new MultiEmbedImageInArray(this.directive.next("items")); }
  /** (Optional) [Vector store](/docs/vector-stores) identifier. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** (Optional) Selected node. */
  get node() { return new FutureString(this.directive.next("node")); }
  /** returns the result for `MultiEmbedImageIn` once it's node has been run. */
  protected override async result(): Promise<MultiEmbedImageIn> { return super.result() as Promise<MultiEmbedImageIn>; }
}
/**  */
class MultiEmbedImageOutArray extends FutureArray {
  /** Returns `MultiEmbedImageOut` at given index. */
  override at(index: number) { return new MultiEmbedImageOut(this.directive.next(index)); }

  /** Returns the result for `MultiEmbedImageOutArray` once it's node has been run. */
  protected override async result(): Promise<MultiEmbedImageOutArray> { return super.result() as Promise<MultiEmbedImageOutArray>; }
}
/** MultiEmbedImageOut */
class MultiEmbedImageOut extends FutureObject {
  /** Generated embeddings. */
  get embeddings() { return new MultiEmbedImageOutArray(this.directive.next("embeddings")); }
  /** returns the result for `MultiEmbedImageOut` once it's node has been run. */
  protected override async result(): Promise<MultiEmbedImageOut> { return super.result() as Promise<MultiEmbedImageOut>; }
}
/**  */
class CLIPInArray extends FutureArray {
  /** Returns `CLIPIn` at given index. */
  override at(index: number) { return new CLIPIn(this.directive.next(index)); }

  /** Returns the result for `CLIPInArray` once it's node has been run. */
  protected override async result(): Promise<CLIPInArray> { return super.result() as Promise<CLIPInArray>; }
}
/** CLIPIn */
class CLIPIn extends FutureObject {
  /** Items to embed. */
  get items() { return new CLIPInArray(this.directive.next("items")); }
  /** (Optional) Choose keys from `metadata` to embed with text, when embedding and storing text documents. */
  get embedded_metadata_keys() { return new FutureStringArray(this.directive.next("embedded_metadata_keys")); }
  /** (Optional) [Vector store](/docs/vector-stores) identifier. */
  get store() { return new FutureString(this.directive.next("store")); }
  /** returns the result for `CLIPIn` once it's node has been run. */
  protected override async result(): Promise<CLIPIn> { return super.result() as Promise<CLIPIn>; }
}
/**  */
class CLIPOutArray extends FutureArray {
  /** Returns `CLIPOut` at given index. */
  override at(index: number) { return new CLIPOut(this.directive.next(index)); }

  /** Returns the result for `CLIPOutArray` once it's node has been run. */
  protected override async result(): Promise<CLIPOutArray> { return super.result() as Promise<CLIPOutArray>; }
}
/** CLIPOut */
class CLIPOut extends FutureObject {
  /** Generated embeddings. */
  get embeddings() { return new CLIPOutArray(this.directive.next("embeddings")); }
  /** returns the result for `CLIPOut` once it's node has been run. */
  protected override async result(): Promise<CLIPOut> { return super.result() as Promise<CLIPOut>; }
}
/**  */
class CreateVectorStoreInArray extends FutureArray {
  /** Returns `CreateVectorStoreIn` at given index. */
  override at(index: number) { return new CreateVectorStoreIn(this.directive.next(index)); }

  /** Returns the result for `CreateVectorStoreInArray` once it's node has been run. */
  protected override async result(): Promise<CreateVectorStoreInArray> { return super.result() as Promise<CreateVectorStoreInArray>; }
}
/** CreateVectorStoreIn */
class CreateVectorStoreIn extends FutureObject {
  /** Vector store name. */
  get name() { return new FutureString(this.directive.next("name")); }
  /** Selected embedding model */
  get model() { return new FutureString(this.directive.next("model")); }
  /** (Optional) The max number of connections per layer for the index. */
  get m() { return new FutureNumber(this.directive.next("m")); }
  /** (Optional) The size of the dynamic candidate list for constructing the index graph. */
  get ef_construction() { return new FutureNumber(this.directive.next("ef_construction")); }
  /** (Optional) The distance metric to construct the index with. */
  get metric() { return new FutureString(this.directive.next("metric")); }
  /** returns the result for `CreateVectorStoreIn` once it's node has been run. */
  protected override async result(): Promise<CreateVectorStoreIn> { return super.result() as Promise<CreateVectorStoreIn>; }
}
/**  */
class CreateVectorStoreOutArray extends FutureArray {
  /** Returns `CreateVectorStoreOut` at given index. */
  override at(index: number) { return new CreateVectorStoreOut(this.directive.next(index)); }

  /** Returns the result for `CreateVectorStoreOutArray` once it's node has been run. */
  protected override async result(): Promise<CreateVectorStoreOutArray> { return super.result() as Promise<CreateVectorStoreOutArray>; }
}
/** CreateVectorStoreOut */
class CreateVectorStoreOut extends FutureObject {
  /** Vector store name. */
  get name() { return new FutureString(this.directive.next("name")); }
  /** Selected embedding model */
  get model() { return new FutureString(this.directive.next("model")); }
  /** The max number of connections per layer for the index. */
  get m() { return new FutureNumber(this.directive.next("m")); }
  /** The size of the dynamic candidate list for constructing the index graph. */
  get ef_construction() { return new FutureNumber(this.directive.next("ef_construction")); }
  /** The distance metric to construct the index with. */
  get metric() { return new FutureString(this.directive.next("metric")); }
  /** returns the result for `CreateVectorStoreOut` once it's node has been run. */
  protected override async result(): Promise<CreateVectorStoreOut> { return super.result() as Promise<CreateVectorStoreOut>; }
}
/**  */
class ListVectorStoresInArray extends FutureArray {
  /** Returns `ListVectorStoresIn` at given index. */
  override at(index: number) { return new ListVectorStoresIn(this.directive.next(index)); }

  /** Returns the result for `ListVectorStoresInArray` once it's node has been run. */
  protected override async result(): Promise<ListVectorStoresInArray> { return super.result() as Promise<ListVectorStoresInArray>; }
}
/** ListVectorStoresIn */
class ListVectorStoresIn extends FutureObject {
  /** returns the result for `ListVectorStoresIn` once it's node has been run. */
  protected override async result(): Promise<ListVectorStoresIn> { return super.result() as Promise<ListVectorStoresIn>; }
}
/**  */
class ListVectorStoresOutArray extends FutureArray {
  /** Returns `ListVectorStoresOut` at given index. */
  override at(index: number) { return new ListVectorStoresOut(this.directive.next(index)); }

  /** Returns the result for `ListVectorStoresOutArray` once it's node has been run. */
  protected override async result(): Promise<ListVectorStoresOutArray> { return super.result() as Promise<ListVectorStoresOutArray>; }
}
/** ListVectorStoresOut */
class ListVectorStoresOut extends FutureObject {
  /** List of vector stores. */
  get stores() { return new ListVectorStoresOutArray(this.directive.next("stores")); }
  /** returns the result for `ListVectorStoresOut` once it's node has been run. */
  protected override async result(): Promise<ListVectorStoresOut> { return super.result() as Promise<ListVectorStoresOut>; }
}
/**  */
class DeleteVectorStoreInArray extends FutureArray {
  /** Returns `DeleteVectorStoreIn` at given index. */
  override at(index: number) { return new DeleteVectorStoreIn(this.directive.next(index)); }

  /** Returns the result for `DeleteVectorStoreInArray` once it's node has been run. */
  protected override async result(): Promise<DeleteVectorStoreInArray> { return super.result() as Promise<DeleteVectorStoreInArray>; }
}
/** DeleteVectorStoreIn */
class DeleteVectorStoreIn extends FutureObject {
  /** Vector store name. */
  get name() { return new FutureString(this.directive.next("name")); }
  /** Selected embedding model */
  get model() { return new FutureString(this.directive.next("model")); }
  /** returns the result for `DeleteVectorStoreIn` once it's node has been run. */
  protected override async result(): Promise<DeleteVectorStoreIn> { return super.result() as Promise<DeleteVectorStoreIn>; }
}
/**  */
class DeleteVectorStoreOutArray extends FutureArray {
  /** Returns `DeleteVectorStoreOut` at given index. */
  override at(index: number) { return new DeleteVectorStoreOut(this.directive.next(index)); }

  /** Returns the result for `DeleteVectorStoreOutArray` once it's node has been run. */
  protected override async result(): Promise<DeleteVectorStoreOutArray> { return super.result() as Promise<DeleteVectorStoreOutArray>; }
}
/** DeleteVectorStoreOut */
class DeleteVectorStoreOut extends FutureObject {
  /** Vector store name. */
  get name() { return new FutureString(this.directive.next("name")); }
  /** Selected embedding model */
  get model() { return new FutureString(this.directive.next("model")); }
  /** returns the result for `DeleteVectorStoreOut` once it's node has been run. */
  protected override async result(): Promise<DeleteVectorStoreOut> { return super.result() as Promise<DeleteVectorStoreOut>; }
}
/** Canonical representation of document with embedding vector. */
class VectorArray extends FutureArray {
  /** Returns `Vector` at given index. */
  override at(index: number) { return new Vector(this.directive.next(index)); }

  /** Returns the result for `VectorArray` once it's node has been run. */
  protected override async result(): Promise<VectorArray> { return super.result() as Promise<VectorArray>; }
}
/** Canonical representation of document with embedding vector. */
class Vector extends FutureObject {
  /** Document ID. */
  get id() { return new FutureString(this.directive.next("id")); }
  /** Embedding vector. */
  get vector() { return new FutureNumberArray(this.directive.next("vector")); }
  /** Document metadata. */
  get metadata() { return new FutureAnyObject(this.directive.next("metadata")); }
  /** returns the result for `Vector` once it's node has been run. */
  protected override async result(): Promise<Vector> { return super.result() as Promise<Vector>; }
}
/**  */
class FetchVectorsInArray extends FutureArray {
  /** Returns `FetchVectorsIn` at given index. */
  override at(index: number) { return new FetchVectorsIn(this.directive.next(index)); }

  /** Returns the result for `FetchVectorsInArray` once it's node has been run. */
  protected override async result(): Promise<FetchVectorsInArray> { return super.result() as Promise<FetchVectorsInArray>; }
}
/** FetchVectorsIn */
class FetchVectorsIn extends FutureObject {
  /** Vector store name. */
  get name() { return new FutureString(this.directive.next("name")); }
  /** Selected embedding model */
  get model() { return new FutureString(this.directive.next("model")); }
  /** Document IDs to retrieve. */
  get ids() { return new FutureStringArray(this.directive.next("ids")); }
  /** returns the result for `FetchVectorsIn` once it's node has been run. */
  protected override async result(): Promise<FetchVectorsIn> { return super.result() as Promise<FetchVectorsIn>; }
}
/**  */
class FetchVectorsOutArray extends FutureArray {
  /** Returns `FetchVectorsOut` at given index. */
  override at(index: number) { return new FetchVectorsOut(this.directive.next(index)); }

  /** Returns the result for `FetchVectorsOutArray` once it's node has been run. */
  protected override async result(): Promise<FetchVectorsOutArray> { return super.result() as Promise<FetchVectorsOutArray>; }
}
/** FetchVectorsOut */
class FetchVectorsOut extends FutureObject {
  /** Retrieved vectors. */
  get vectors() { return new FetchVectorsOutArray(this.directive.next("vectors")); }
  /** returns the result for `FetchVectorsOut` once it's node has been run. */
  protected override async result(): Promise<FetchVectorsOut> { return super.result() as Promise<FetchVectorsOut>; }
}
/**  */
class UpdateVectorsOutArray extends FutureArray {
  /** Returns `UpdateVectorsOut` at given index. */
  override at(index: number) { return new UpdateVectorsOut(this.directive.next(index)); }

  /** Returns the result for `UpdateVectorsOutArray` once it's node has been run. */
  protected override async result(): Promise<UpdateVectorsOutArray> { return super.result() as Promise<UpdateVectorsOutArray>; }
}
/** UpdateVectorsOut */
class UpdateVectorsOut extends FutureObject {
  /** Number of vectors modified. */
  get count() { return new FutureNumber(this.directive.next("count")); }
  /** returns the result for `UpdateVectorsOut` once it's node has been run. */
  protected override async result(): Promise<UpdateVectorsOut> { return super.result() as Promise<UpdateVectorsOut>; }
}
/**  */
class DeleteVectorsOutArray extends FutureArray {
  /** Returns `DeleteVectorsOut` at given index. */
  override at(index: number) { return new DeleteVectorsOut(this.directive.next(index)); }

  /** Returns the result for `DeleteVectorsOutArray` once it's node has been run. */
  protected override async result(): Promise<DeleteVectorsOutArray> { return super.result() as Promise<DeleteVectorsOutArray>; }
}
/** DeleteVectorsOut */
class DeleteVectorsOut extends FutureObject {
  /** Number of vectors modified. */
  get count() { return new FutureNumber(this.directive.next("count")); }
  /** returns the result for `DeleteVectorsOut` once it's node has been run. */
  protected override async result(): Promise<DeleteVectorsOut> { return super.result() as Promise<DeleteVectorsOut>; }
}
/**  */
class UpdateVectorParamsArray extends FutureArray {
  /** Returns `UpdateVectorParams` at given index. */
  override at(index: number) { return new UpdateVectorParams(this.directive.next(index)); }

  /** Returns the result for `UpdateVectorParamsArray` once it's node has been run. */
  protected override async result(): Promise<UpdateVectorParamsArray> { return super.result() as Promise<UpdateVectorParamsArray>; }
}
/** UpdateVectorParams */
class UpdateVectorParams extends FutureObject {
  /** Document ID. */
  get id() { return new FutureString(this.directive.next("id")); }
  /** (Optional) Embedding vector. */
  get vector() { return new FutureNumberArray(this.directive.next("vector")); }
  /** (Optional) Document metadata. */
  get metadata() { return new FutureAnyObject(this.directive.next("metadata")); }
  /** returns the result for `UpdateVectorParams` once it's node has been run. */
  protected override async result(): Promise<UpdateVectorParams> { return super.result() as Promise<UpdateVectorParams>; }
}
/**  */
class UpdateVectorsParamsArray extends FutureArray {
  /** Returns `UpdateVectorsParams` at given index. */
  override at(index: number) { return new UpdateVectorsParams(this.directive.next(index)); }

  /** Returns the result for `UpdateVectorsParamsArray` once it's node has been run. */
  protected override async result(): Promise<UpdateVectorsParamsArray> { return super.result() as Promise<UpdateVectorsParamsArray>; }
}
/** UpdateVectorsParams */
class UpdateVectorsParams extends FutureObject {
  /** Vector store name. */
  get name() { return new FutureString(this.directive.next("name")); }
  /** Selected embedding model */
  get model() { return new FutureString(this.directive.next("model")); }
  /** Vectors to upsert. */
  get vectors() { return new UpdateVectorsParamsArray(this.directive.next("vectors")); }
  /** returns the result for `UpdateVectorsParams` once it's node has been run. */
  protected override async result(): Promise<UpdateVectorsParams> { return super.result() as Promise<UpdateVectorsParams>; }
}
/**  */
class DeleteVectorsInArray extends FutureArray {
  /** Returns `DeleteVectorsIn` at given index. */
  override at(index: number) { return new DeleteVectorsIn(this.directive.next(index)); }

  /** Returns the result for `DeleteVectorsInArray` once it's node has been run. */
  protected override async result(): Promise<DeleteVectorsInArray> { return super.result() as Promise<DeleteVectorsInArray>; }
}
/** DeleteVectorsIn */
class DeleteVectorsIn extends FutureObject {
  /** Vector store name. */
  get name() { return new FutureString(this.directive.next("name")); }
  /** Selected embedding model */
  get model() { return new FutureString(this.directive.next("model")); }
  /** Document IDs to delete. */
  get ids() { return new FutureStringArray(this.directive.next("ids")); }
  /** returns the result for `DeleteVectorsIn` once it's node has been run. */
  protected override async result(): Promise<DeleteVectorsIn> { return super.result() as Promise<DeleteVectorsIn>; }
}
/**  */
class QueryVectorStoreInArray extends FutureArray {
  /** Returns `QueryVectorStoreIn` at given index. */
  override at(index: number) { return new QueryVectorStoreIn(this.directive.next(index)); }

  /** Returns the result for `QueryVectorStoreInArray` once it's node has been run. */
  protected override async result(): Promise<QueryVectorStoreInArray> { return super.result() as Promise<QueryVectorStoreInArray>; }
}
/** QueryVectorStoreIn */
class QueryVectorStoreIn extends FutureObject {
  /** Vector store to query against. */
  get name() { return new FutureString(this.directive.next("name")); }
  /** Selected embedding model */
  get model() { return new FutureString(this.directive.next("model")); }
  /** (Optional) Document IDs to use for the query. */
  get query_ids() { return new FutureStringArray(this.directive.next("query_ids")); }
  /** (Optional) Image URIs to embed and use for the query. */
  get query_image_uris() { return new FutureStringArray(this.directive.next("query_image_uris")); }
  /** (Optional) Vector to use for the query. */
  get query_vectors() { return new FutureArrayArray(this.directive.next("query_vectors")); }
  /** (Optional) Texts to embed and use for the query. */
  get query_strings() { return new FutureStringArray(this.directive.next("query_strings")); }
  /** (Optional) Number of results to return. */
  get top_k() { return new FutureNumber(this.directive.next("top_k")); }
  /** (Optional) The size of the dynamic candidate list for searching the index graph. */
  get ef_search() { return new FutureNumber(this.directive.next("ef_search")); }
  /** (Optional) Include the values of the vectors in the response. */
  get include_values() { return new (this.directive.next("include_values")); }
  /** (Optional) Include the metadata of the vectors in the response. */
  get include_metadata() { return new (this.directive.next("include_metadata")); }
  /** (Optional) Filter metadata by key-value pairs. */
  get filters() { return new FutureAnyObject(this.directive.next("filters")); }
  /** returns the result for `QueryVectorStoreIn` once it's node has been run. */
  protected override async result(): Promise<QueryVectorStoreIn> { return super.result() as Promise<QueryVectorStoreIn>; }
}
/**  */
class VectorStoreQueryResultArray extends FutureArray {
  /** Returns `VectorStoreQueryResult` at given index. */
  override at(index: number) { return new VectorStoreQueryResult(this.directive.next(index)); }

  /** Returns the result for `VectorStoreQueryResultArray` once it's node has been run. */
  protected override async result(): Promise<VectorStoreQueryResultArray> { return super.result() as Promise<VectorStoreQueryResultArray>; }
}
/** VectorStoreQueryResult */
class VectorStoreQueryResult extends FutureObject {
  /** Document ID. */
  get id() { return new FutureString(this.directive.next("id")); }
  /** Similarity score. */
  get distance() { return new FutureNumber(this.directive.next("distance")); }
  /** (Optional) Embedding vector. */
  get vector() { return new FutureNumberArray(this.directive.next("vector")); }
  /** (Optional) Document metadata. */
  get metadata() { return new FutureAnyObject(this.directive.next("metadata")); }
  /** returns the result for `VectorStoreQueryResult` once it's node has been run. */
  protected override async result(): Promise<VectorStoreQueryResult> { return super.result() as Promise<VectorStoreQueryResult>; }
}
/**  */
class QueryVectorStoreOutArray extends FutureArray {
  /** Returns `QueryVectorStoreOut` at given index. */
  override at(index: number) { return new QueryVectorStoreOut(this.directive.next(index)); }

  /** Returns the result for `QueryVectorStoreOutArray` once it's node has been run. */
  protected override async result(): Promise<QueryVectorStoreOutArray> { return super.result() as Promise<QueryVectorStoreOutArray>; }
}
/** QueryVectorStoreOut */
class QueryVectorStoreOut extends FutureObject {
  /** Query results. */
  get results() { return new FutureArrayArray(this.directive.next("results")); }
  /** (Optional) Vector store name. */
  get name() { return new FutureString(this.directive.next("name")); }
  /** (Optional) Selected embedding model */
  get model() { return new FutureString(this.directive.next("model")); }
  /** (Optional) The distance metric used for the query. */
  get metric() { return new FutureString(this.directive.next("metric")); }
  /** returns the result for `QueryVectorStoreOut` once it's node has been run. */
  protected override async result(): Promise<QueryVectorStoreOut> { return super.result() as Promise<QueryVectorStoreOut>; }
}
export namespace GenerateText {
  /**
   * GenerateText Input
   * https://substrate.run/library#GenerateText
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateTextIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateTextIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerateText
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["GenerateTextOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["GenerateTextOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["GenerateTextOut"]
  }
}
export namespace MultiGenerateText {
  /**
   * MultiGenerateText Input
   * https://substrate.run/library#MultiGenerateText
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiGenerateTextIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiGenerateTextIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiGenerateText
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["MultiGenerateTextOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["MultiGenerateTextOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["MultiGenerateTextOut"]
  }
}
export namespace GenerateJSON {
  /**
   * GenerateJSON Input
   * https://substrate.run/library#GenerateJSON
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateJSONIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateJSONIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerateJSON
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["GenerateJSONOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["GenerateJSONOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["GenerateJSONOut"]
  }
}
export namespace MultiGenerateJSON {
  /**
   * MultiGenerateJSON Input
   * https://substrate.run/library#MultiGenerateJSON
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiGenerateJSONIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiGenerateJSONIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiGenerateJSON
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["MultiGenerateJSONOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["MultiGenerateJSONOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["MultiGenerateJSONOut"]
  }
}
export namespace GenerateTextVision {
  /**
   * GenerateTextVision Input
   * https://substrate.run/library#GenerateTextVision
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateTextVisionIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateTextVisionIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerateTextVision
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["GenerateTextVisionOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["GenerateTextVisionOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["GenerateTextVisionOut"]
  }
}
export namespace Mistral7BInstruct {
  /**
   * Mistral7BInstruct Input
   * https://substrate.run/library#Mistral7BInstruct
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["Mistral7BInstructIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["Mistral7BInstructIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#Mistral7BInstruct
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["Mistral7BInstructOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["Mistral7BInstructOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["Mistral7BInstructOut"]
  }
}
export namespace Firellava13B {
  /**
   * Firellava13B Input
   * https://substrate.run/library#Firellava13B
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["Firellava13BIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["Firellava13BIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#Firellava13B
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["Firellava13BOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["Firellava13BOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["Firellava13BOut"]
  }
}
export namespace GenerateImage {
  /**
   * GenerateImage Input
   * https://substrate.run/library#GenerateImage
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateImageIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateImageIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerateImage
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["GenerateImageOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["GenerateImageOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["GenerateImageOut"]
  }
}
export namespace MultiGenerateImage {
  /**
   * MultiGenerateImage Input
   * https://substrate.run/library#MultiGenerateImage
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiGenerateImageIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiGenerateImageIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiGenerateImage
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["MultiGenerateImageOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["MultiGenerateImageOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["MultiGenerateImageOut"]
  }
}
export namespace GenerativeEditImage {
  /**
   * GenerativeEditImage Input
   * https://substrate.run/library#GenerativeEditImage
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerativeEditImageIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerativeEditImageIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerativeEditImage
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["GenerativeEditImageOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["GenerativeEditImageOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["GenerativeEditImageOut"]
  }
}
export namespace MultiGenerativeEditImage {
  /**
   * MultiGenerativeEditImage Input
   * https://substrate.run/library#MultiGenerativeEditImage
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiGenerativeEditImageIn"]>;

  /**
   * MultiGenerativeEditImage Output
   * https://substrate.run/library#MultiGenerativeEditImage
   */
  export type Output = OpenAPI.components["schemas"]["MultiGenerativeEditImageOut"];
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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiGenerativeEditImageIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiGenerativeEditImage
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["MultiGenerativeEditImageOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["MultiGenerativeEditImageOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["MultiGenerativeEditImageOut"]
  }
}
export namespace StableDiffusionXL {
  /**
   * StableDiffusionXL Input
   * https://substrate.run/library#StableDiffusionXL
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["StableDiffusionXLIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["StableDiffusionXLIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#StableDiffusionXL
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["StableDiffusionXLOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["StableDiffusionXLOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["StableDiffusionXLOut"]
  }
}
export namespace StableDiffusionXLInpaint {
  /**
   * StableDiffusionXLInpaint Input
   * https://substrate.run/library#StableDiffusionXLInpaint
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["StableDiffusionXLInpaintIn"]>;

  /**
   * StableDiffusionXLInpaint Output
   * https://substrate.run/library#StableDiffusionXLInpaint
   */
  export type Output = OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"];
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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["StableDiffusionXLInpaintIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#StableDiffusionXLInpaint
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["StableDiffusionXLInpaintOut"]
  }
}
export namespace StableDiffusionXLIPAdapter {
  /**
   * StableDiffusionXLIPAdapter Input
   * https://substrate.run/library#StableDiffusionXLIPAdapter
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterIn"]>;

  /**
   * StableDiffusionXLIPAdapter Output
   * https://substrate.run/library#StableDiffusionXLIPAdapter
   */
  export type Output = OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterOut"];
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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#StableDiffusionXLIPAdapter
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["StableDiffusionXLIPAdapterOut"]
  }
}
export namespace StableDiffusionXLControlNet {
  /**
   * StableDiffusionXLControlNet Input
   * https://substrate.run/library#StableDiffusionXLControlNet
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["StableDiffusionXLControlNetIn"]>;

  /**
   * StableDiffusionXLControlNet Output
   * https://substrate.run/library#StableDiffusionXLControlNet
   */
  export type Output = OpenAPI.components["schemas"]["StableDiffusionXLControlNetOut"];
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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["StableDiffusionXLControlNetIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#StableDiffusionXLControlNet
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["StableDiffusionXLControlNetOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["StableDiffusionXLControlNetOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["StableDiffusionXLControlNetOut"]
  }
}
export namespace FillMask {
  /**
   * FillMask Input
   * https://substrate.run/library#FillMask
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["FillMaskIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["FillMaskIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#FillMask
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["FillMaskOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["FillMaskOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["FillMaskOut"]
  }
}
export namespace BigLaMa {
  /**
   * BigLaMa Input
   * https://substrate.run/library#BigLaMa
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["BigLaMaIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["BigLaMaIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#BigLaMa
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["BigLaMaOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["BigLaMaOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["BigLaMaOut"]
  }
}
export namespace UpscaleImage {
  /**
   * UpscaleImage Input
   * https://substrate.run/library#UpscaleImage
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["UpscaleImageIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["UpscaleImageIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#UpscaleImage
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["UpscaleImageOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["UpscaleImageOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["UpscaleImageOut"]
  }
}
export namespace RealESRGAN {
  /**
   * RealESRGAN Input
   * https://substrate.run/library#RealESRGAN
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["RealESRGANIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["RealESRGANIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#RealESRGAN
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["RealESRGANOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["RealESRGANOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["RealESRGANOut"]
  }
}
export namespace RemoveBackground {
  /**
   * RemoveBackground Input
   * https://substrate.run/library#RemoveBackground
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["RemoveBackgroundIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["RemoveBackgroundIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#RemoveBackground
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["RemoveBackgroundOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["RemoveBackgroundOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["RemoveBackgroundOut"]
  }
}
export namespace DISISNet {
  /**
   * DISISNet Input
   * https://substrate.run/library#DISISNet
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["DISISNetIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["DISISNetIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#DISISNet
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["DISISNetOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["DISISNetOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["DISISNetOut"]
  }
}
export namespace SegmentUnderPoint {
  /**
   * SegmentUnderPoint Input
   * https://substrate.run/library#SegmentUnderPoint
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["SegmentUnderPointIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["SegmentUnderPointIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#SegmentUnderPoint
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["SegmentUnderPointOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["SegmentUnderPointOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["SegmentUnderPointOut"]
  }
}
export namespace SegmentAnything {
  /**
   * SegmentAnything Input
   * https://substrate.run/library#SegmentAnything
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["SegmentAnythingIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["SegmentAnythingIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#SegmentAnything
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["SegmentAnythingOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["SegmentAnythingOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["SegmentAnythingOut"]
  }
}
export namespace TranscribeMedia {
  /**
   * TranscribeMedia Input
   * https://substrate.run/library#TranscribeMedia
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["TranscribeMediaIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["TranscribeMediaIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#TranscribeMedia
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["TranscribeMediaOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["TranscribeMediaOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["TranscribeMediaOut"]
  }
}
export namespace GenerateSpeech {
  /**
   * GenerateSpeech Input
   * https://substrate.run/library#GenerateSpeech
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateSpeechIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["GenerateSpeechIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#GenerateSpeech
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["GenerateSpeechOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["GenerateSpeechOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["GenerateSpeechOut"]
  }
}
export namespace XTTSV2 {
  /**
   * XTTSV2 Input
   * https://substrate.run/library#XTTSV2
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["XTTSV2In"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["XTTSV2In"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#XTTSV2
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["XTTSV2Out"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["XTTSV2Out"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["XTTSV2Out"]
  }
}
export namespace EmbedText {
  /**
   * EmbedText Input
   * https://substrate.run/library#EmbedText
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["EmbedTextIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["EmbedTextIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#EmbedText
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["EmbedTextOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["EmbedTextOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["EmbedTextOut"]
  }
}
export namespace MultiEmbedText {
  /**
   * MultiEmbedText Input
   * https://substrate.run/library#MultiEmbedText
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiEmbedTextIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiEmbedTextIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiEmbedText
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["MultiEmbedTextOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["MultiEmbedTextOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["MultiEmbedTextOut"]
  }
}
export namespace EmbedImage {
  /**
   * EmbedImage Input
   * https://substrate.run/library#EmbedImage
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["EmbedImageIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["EmbedImageIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#EmbedImage
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["EmbedImageOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["EmbedImageOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["EmbedImageOut"]
  }
}
export namespace MultiEmbedImage {
  /**
   * MultiEmbedImage Input
   * https://substrate.run/library#MultiEmbedImage
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiEmbedImageIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["MultiEmbedImageIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#MultiEmbedImage
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["MultiEmbedImageOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["MultiEmbedImageOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["MultiEmbedImageOut"]
  }
}
export namespace JinaV2 {
  /**
   * JinaV2 Input
   * https://substrate.run/library#JinaV2
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["JinaV2In"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["JinaV2In"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#JinaV2
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["JinaV2Out"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["JinaV2Out"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["JinaV2Out"]
  }
}
export namespace CLIP {
  /**
   * CLIP Input
   * https://substrate.run/library#CLIP
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["CLIPIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["CLIPIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#CLIP
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["CLIPOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["CLIPOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["CLIPOut"]
  }
}
export namespace CreateVectorStore {
  /**
   * CreateVectorStore Input
   * https://substrate.run/library#CreateVectorStore
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["CreateVectorStoreIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["CreateVectorStoreIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#CreateVectorStore
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["CreateVectorStoreOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["CreateVectorStoreOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["CreateVectorStoreOut"]
  }
}
export namespace ListVectorStores {
  /**
   * ListVectorStores Input
   * https://substrate.run/library#ListVectorStores
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["ListVectorStoresIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["ListVectorStoresIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#ListVectorStores
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["ListVectorStoresOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["ListVectorStoresOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["ListVectorStoresOut"]
  }
}
export namespace DeleteVectorStore {
  /**
   * DeleteVectorStore Input
   * https://substrate.run/library#DeleteVectorStore
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["DeleteVectorStoreIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["DeleteVectorStoreIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#DeleteVectorStore
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["DeleteVectorStoreOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["DeleteVectorStoreOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["DeleteVectorStoreOut"]
  }
}
export namespace QueryVectorStore {
  /**
   * QueryVectorStore Input
   * https://substrate.run/library#QueryVectorStore
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["QueryVectorStoreIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["QueryVectorStoreIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#QueryVectorStore
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["QueryVectorStoreOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["QueryVectorStoreOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["QueryVectorStoreOut"]
  }
}
export namespace FetchVectors {
  /**
   * FetchVectors Input
   * https://substrate.run/library#FetchVectors
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["FetchVectorsIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["FetchVectorsIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#FetchVectors
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["FetchVectorsOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["FetchVectorsOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["FetchVectorsOut"]
  }
}
export namespace UpdateVectors {
  /**
   * UpdateVectors Input
   * https://substrate.run/library#UpdateVectors
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["UpdateVectorsIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["UpdateVectorsParams"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#UpdateVectors
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["UpdateVectorsOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["UpdateVectorsOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["UpdateVectorsOut"]
  }
}
export namespace DeleteVectors {
  /**
   * DeleteVectors Input
   * https://substrate.run/library#DeleteVectors
   */
  export type Input = AlsoAcceptFutures<OpenAPI.components["schemas"]["DeleteVectorsIn"]>;

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
  constructor(args: AlsoAcceptFutures<OpenAPI.components["schemas"]["DeleteVectorsIn"]>) {
    super(args);
  }

  /**
   * Retrieve this node's output from a response.
   *
   * Output fields: TODO
   *
   * https://substrate.run/library#DeleteVectors
   */
  protected override async result(): Promise<OpenAPI.components["schemas"]["DeleteVectorsOut"] | undefined> {
    return Promise.resolve(this._response ? this._response.get(this) : undefined) as Promise<OpenAPI.components["schemas"]["DeleteVectorsOut"] | undefined>
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
    return super.output() as OpenAPI.components["schemas"]["DeleteVectorsOut"]
  }
}
