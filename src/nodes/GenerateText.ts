import * as Schema from "substrate/API/Schema";
import * as OpenAPI from "substrate/API/OpenAPI";
import { AbstractNode } from "substrate/AbstractNode";

type Params = {
  id?: Schema.Id;
  args?: GenerateText.Args;
};

/**
 * [GenerateText](https://www.substrate.run/docs/api-ref#GenerateText)
 *
 * Generates text.
 */
export class GenerateText
  extends AbstractNode<GenerateText.Node>
  implements GenerateText.Node
{
  readonly node = "GenerateText" as const;
  readonly extra_args = {};

  constructor(params: Params = {}) {
    super(params?.id);
    this.setArgs(params.args);
  }

  override setArgs(args: GenerateText.Args = {}) {
    return super.setArgs(args);
  }
}

export namespace GenerateText {
  /**
   * `Args` are the default inputs given to the `Node` when it executes. These values may be overridden by values coming from parent nodes in the `Graph`.
   */
  export type Args = Partial<OpenAPI.components["schemas"]["GenerateTextIn"]>;

  /**
   * `Node` is the structure this type of node must conform to.
   */
  export type Node = Schema.GenerateText;

  /**
   * `Input` is the required input for this node. It may be fulfilled by the intersection of `Args` and other `Node` outputs that become this node's input.
   */
  export type Input = OpenAPI.components["schemas"]["GenerateTextIn"];

  /**
   * `Output` is what this node will produce after it executes.
   */
  export type Output = OpenAPI.components["schemas"]["GenerateTextOut"];
}
