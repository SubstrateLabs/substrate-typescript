import * as Schema from "substrate/Schema";
import { AbstractNode } from "substrate/AbstractNode";

type Params = {
  id?: Schema.Id;
  args?: StableDiffusion.Args;
};

/**
 * [StableDiffusion](https://www.substrate.run/docs/api-ref#StableDiffusion)
 *
 * Generates images.
 */
export class StableDiffusion extends AbstractNode<StableDiffusion.Node> implements StableDiffusion.Node {
  readonly class = "SDXL" as const;
  readonly extra_args = { model: "sdxl" as const };

  constructor(params: Params = {}) {
    super(params?.id);
    this.setArgs(params.args);
  }

  override setArgs(args: StableDiffusion.Args = {}) {
    Schema.StableDiffusionSchema.shape.args.parse(args);
    return super.setArgs(args);
  }
}

export namespace StableDiffusion {
  /**
   * `Args` are the default inputs given to the `Node` when it executes. These values may be overridden by values coming from parent nodes in the `Graph`.
   */
  export type Args = Schema.StableDiffusion["args"];

  /**
   * `Node` is the structure this type of node must conform to.
   */
  export type Node = Schema.StableDiffusion;

  /**
   * `Input` is the required input for this node. It may be fulfilled by the intersection of `Args` and other `Node` outputs that become this node's input.
   */
  export type Input = Schema.StableDiffusionInput;

  /**
   * `Output` is what this node will produce after it executes.
   */
  export type Output = Schema.ImageGeneration;
}
