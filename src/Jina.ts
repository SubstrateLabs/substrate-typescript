import * as Schema from "substrate/API/Schema";
import * as OpenAPI from "substrate/API/OpenAPI";
import { AbstractNode } from "substrate/AbstractNode";

type Params = {
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

  constructor(params: Params = {}) {
    super(params?.id);
    this.setArgs(params.args);
  }

  override setArgs(args: Jina.Args = {}) {
    const result = Schema.JinaSchema.shape.args.safeParse(args);
    if (!result.success) console.warn('Warning: Possibly incompatible Jina.Args', args);
    return super.setArgs(args);
  }
}

export namespace Jina {
  /**
   * `Args` are the default inputs given to the `Node` when it executes. These values may be overridden by values coming from parent nodes in the `Graph`.
   */
  export type Args = Partial<OpenAPI.components["schemas"]["JinaIn"]>;

  /**
   * `Node` is the structure this type of node must conform to.
   */
  export type Node = Schema.Jina;

  /**
   * `Input` is the required input for this node. It may be fulfilled by the intersection of `Args` and other `Node` outputs that become this node's input.
   */
  export type Input = OpenAPI.components["schemas"]["JinaIn"];

  /**
   * `Output` is what this node will produce after it executes.
   */
  export type Output = OpenAPI.components["schemas"]["JinaResponse"];
}
