import * as Schema from "substrate/API/Schema";
import * as OpenAPI from "substrate/API/OpenAPI";
import { AbstractNode } from "substrate/AbstractNode";

type Params = {
  id?: Schema.Id;
  args?: Mistral.Args;
};

/**
 * [Mistral](https://www.substrate.run/docs/api-ref#Mistral)
 *
 * Generates text.
 */
export class Mistral extends AbstractNode<Mistral.Node> implements Mistral.Node {
  readonly class = "Mistral" as const;
  readonly extra_args = { model: "mistral-7b-instruct" as const };

  constructor(params: Params = {}) {
    super(params?.id);
    this.setArgs(params.args);
  }

  override setArgs(args: Mistral.Args = {}) {
    const result = Schema.MistralSchema.shape.args.safeParse(args);
    if (!result.success) console.warn('Warning: Possibly incompatible Mistral.Args', args);
    return super.setArgs(args);
  }
}

export namespace Mistral {
  /**
   * `Args` are the default inputs given to the `Node` when it executes. These values may be overridden by values coming from parent nodes in the `Graph`.
   */
  export type Args = Partial<OpenAPI.components["schemas"]["MistralIn"]>;

  /**
   * `Node` is the structure this type of node must conform to.
   */
  export type Node = Schema.Mistral;

  /**
   * `Input` is the required input for this node. It may be fulfilled by the intersection of `Args` and other `Node` outputs that become this node's input.
   */
  export type Input = OpenAPI.components["schemas"]["MistralIn"];

  /**
   * `Output` is what this node will produce after it executes.
   */
  export type Output = OpenAPI.components["schemas"]["MistralResponse"];
}
