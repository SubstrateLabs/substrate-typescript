import * as Schema from "./Schema";
import { AbstractNode } from "./AbstractNode";

type Props = {
  id?: Schema.Id;
  args?: Mistral.Args;
};

/**
 * [Mistral](https://www.substrate.run/docs/api-ref#Mistral)
 *
 * Generates text.
 */
export class Mistral extends AbstractNode implements Mistral.Node {
  override args: Mistral.Args = {};
  readonly class = "Mistral" as const;
  readonly extra_args = { model: "mistral-7b-instruct" as const };

  constructor(props: Props = {}) {
    super(props?.id);
    this.setArgs(props.args);
  }

  override setArgs(args: Mistral.Args = {}) {
    Schema.MistralSchema.shape.args.parse(args);
    return super.setArgs(args);
  }
}

export namespace Mistral {
  /**
   * `Args` are the default inputs given to the `Node` when it executes. These values may be overridden by values coming from parent nodes in the `Graph`.
   */
  export type Args = Schema.Mistral["args"];

  /**
   * `Node` is the structure this type of node must conform to.
   */
  export type Node = Schema.Mistral;

  /**
   * `Input` is the required input for this node. It may be fulfilled by the intersection of `Args` and other `Node` outputs that become this node's input.
   */
  export type Input = Schema.MistralInput;

  /**
   * `Output` is what this node will produce after it executes.
   */
  export type Output = Schema.TextGeneration;
}
