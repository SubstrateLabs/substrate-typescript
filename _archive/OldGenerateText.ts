import * as Schema from "substrate/API/Schema";
import * as OpenAPI from "substrate/API/OpenAPI";
import { AbstractNode } from "substrate/_archive/AbstractNode";

type Params = {
  id?: Schema.Id;
  args?: OldGenerateText.Args;
};

/**
 * NOTE(ben): Old-style node definition, leaving here for reference
 */
export class OldGenerateText
  extends AbstractNode<OldGenerateText.Node>
  implements OldGenerateText.Node
{
  readonly node = "GenerateText" as const;
  readonly extra_args = {};

  constructor(params: Params = {}) {
    super(params?.id);
    this.setArgs(params.args);
  }

  override setArgs(args: OldGenerateText.Args = {}) {
    return super.setArgs(args);
  }
}

export namespace OldGenerateText {
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
