import * as Schema from "substrate/Schema";
import { AbstractNode } from "substrate/AbstractNode";

type Props = {
  id?: Schema.Id;
  args?: Bakllava.Args;
};

/**
 * [Bakllava](https://www.substrate.run/docs/api-ref#Bakllava)
 *
 * Generates text from image and prompt.
 */
export class Bakllava extends AbstractNode implements Bakllava.Node {
  override args: Bakllava.Args = {};
  readonly class = "Bakllava" as const;
  readonly extra_args = { model: "bakllava-1" as const };

  constructor(props: Props = {}) {
    super(props?.id);
    this.setArgs(props.args);
  }

  override setArgs(args: Bakllava.Args = {}) {
    Schema.BakllavaSchema.shape.args.parse(args);
    return super.setArgs(args);
  }
}

export namespace Bakllava {
  /**
   * `Args` are the default inputs given to the `Node` when it executes. These values may be overridden by values coming from parent nodes in the `Graph`.
   */
  export type Args = Schema.Bakllava["args"];

  /**
   * `Node` is the structure this type of node must conform to.
   */
  export type Node = Schema.Bakllava;

  /**
   * `Input` is the required input for this node. It may be fulfilled by the intersection of `Args` and other `Node` outputs that become this node's input.
   */
  export type Input = Schema.BakllavaInput;

  /**
   * `Output` is what this node will produce after it executes.
   */
  export type Output = unknown
}

