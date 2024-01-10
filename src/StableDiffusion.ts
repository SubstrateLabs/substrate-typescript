import * as Schema from "substrate/API/Schema";
import * as OpenAPI from "substrate/API/OpenAPI";
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
    const result = Schema.StableDiffusionSchema.shape.args.safeParse(args);
    if (!result.success) console.warn('Warning: Possibly incompatible StableDiffusion.Args', args);
    return super.setArgs(args);
  }
}

export namespace StableDiffusion {
  /**
   * `Args` are the default inputs given to the `Node` when it executes. These values may be overridden by values coming from parent nodes in the `Graph`.
   */
  export type Args = Partial<OpenAPI.components["schemas"]["StableDiffusionIn"]>;

  /**
   * `Node` is the structure this type of node must conform to.
   */
  export type Node = Schema.StableDiffusion;

  /**
   * `Input` is the required input for this node. It may be fulfilled by the intersection of `Args` and other `Node` outputs that become this node's input.
   */
  export type Input = OpenAPI.components["schemas"]["StableDiffusionIn"];

  /**
   * `Output` is what this node will produce after it executes.
   */
  export type Output = OpenAPI.components["schemas"]["StableDiffusionResponse"];
}
