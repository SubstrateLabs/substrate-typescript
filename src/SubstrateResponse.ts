import { AnyNode, NodeOutput } from "substrate/Nodes";
import { NodeError } from "substrate/Error";

/**
 * Response to a run request.
 */
export class SubstrateResponse {
  public apiResponse: Response;
  public json: any;

  constructor(response: Response, json: any = null) {
    this.apiResponse = response;
    this.json = json;
  }

  /**
   * Returns an error from the `Node` if there was one.
   */
  getError<T extends AnyNode>(node: T): NodeError | undefined {
    // @ts-expect-error
    return node.output() instanceof NodeError ? node.output() : undefined;
  }

  /**
   * Returns the result for given `Node`
   */
  get<T extends AnyNode>(node: T): NodeOutput<T> {
    const err = this.getError(node);
    if (err) throw err;
    // @ts-expect-error
    return node.output() as NodeOutput<T>;
  }
}
