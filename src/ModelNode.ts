import * as Schema from "substrate/API/Schema";
import { AbstractNode } from "substrate/AbstractNode";

type Params = {
  id?: Schema.Id;
  args?: ModelNode.Args;
};

/**
 * Base node that supports running models.
 */
export class ModelNode extends AbstractNode<ModelNode.Node> implements ModelNode.Node {
  readonly class = "ModelNode" as const;
  extra_args: { model: string } = { model: "" };

  constructor(params: Params = {}) {
    super(params?.id);
    this.setArgs(params.args);
  }

  override setArgs(args: ModelNode.Args = {}) {
    return super.setArgs(args);
  }

  /**
   * `setModel` will update the inner `model` field to specify which ML model to use.
   */
  setModel(model: string) {
    this.extra_args.model = model;
    return this;
  }
}

export namespace ModelNode {
  /**
   * `Args` are the default inputs given to the `Node` when it executes. These values may be overridden by values coming from parent nodes in the `Graph`.
   */
  export type Args = Schema.ModelNode["args"];

  /**
   * `Node` is the structure this type of node must conform to.
   */
  export type Node = Schema.ModelNode;


  /**
   * `Input` is the required input for this node. It may be fulfilled by the intersection of `Args` and other `Node` outputs that become this node's input.
   */
  export type Input = Schema.ModelNodeInput;

  /**
   * `Output` is what this node will produce after it executes.
   */
  export type Output = unknown;
}
