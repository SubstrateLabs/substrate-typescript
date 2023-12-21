import * as Schema from "substrate/Schema";
import { AbstractNode } from "substrate/AbstractNode";

type Props = {
  id?: Schema.Id;
  args?: Jina.Args;
};

/**
 * [Jina](https://www.substrate.run/docs/api-ref#Jina)
 *
 * Generates embeddings.
 */
export class Jina extends AbstractNode<Jina.Node> implements Jina.Node {
  readonly class = "Jina" as const;
  readonly extra_args = { model: "jina-base-v2" as const };

  constructor(props: Props = {}) {
    super(props?.id);
    this.setArgs(props.args);
  }

  override setArgs(args: Jina.Args = {}) {
    Schema.JinaSchema.shape.args.parse(args);
    return super.setArgs(args);
  }
}

export namespace Jina {
  /**
   * `Args` are the default inputs given to the `Node` when it executes. These values may be overridden by values coming from parent nodes in the `Graph`.
   */
  export type Args = Schema.Jina["args"];

  /**
   * `Node` is the structure this type of node must conform to.
   */
  export type Node = Schema.Jina;

  /**
   * `Input` is the required input for this node. It may be fulfilled by the intersection of `Args` and other `Node` outputs that become this node's input.
   */
  export type Input = Schema.JinaInput;

  /**
   * `Output` is what this node will produce after it executes.
   */
  export type Output = Schema.EmbeddingGeneration;
}
