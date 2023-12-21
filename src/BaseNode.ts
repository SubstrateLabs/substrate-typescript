import * as Schema from "substrate/Schema";
import { AbstractNode } from "substrate/AbstractNode";

type Props = {
  id?: Schema.Id;
  args?: BaseNode.Args;
};

/**
 * `Node` used in Substrate graph executions.
 */
export class BaseNode extends AbstractNode<BaseNode.Node> implements BaseNode.Node {
  readonly class = "Node" as const;
  extra_args: Object = {};

  constructor(props: Props = {}) {
    super(props?.id);
    this.setArgs(props.args);
  }

  override setArgs(args: BaseNode.Args = {}) {
    Schema.BaseNodeSchema.shape.args.parse(args);
    return super.setArgs(args);
  }
}

export namespace BaseNode {
  /**
   * `Args` are the default inputs given to the `Node` when it executes. These values may be overridden by values coming from parent nodes in the `Graph`.
   */
  export type Args = Schema.BaseNode["args"];

  /**
   * `Node` is the structure this type of node must conform to.
   */
  export type Node = Schema.BaseNode;

  /**
   * `Input` is the required input for this node. It may be fulfilled by the intersection of `Args` and other `Node` outputs that become this node's input.
   */
  export type Input = Schema.BaseNodeInput;

  /**
   * `Output` is what this node will produce after it executes.
   */
  export type Output = unknown;
}
