import { AnyNode, NodeOutput } from "substrate/Nodes";
import { NodeError } from "substrate/Error";

/**
 * Response to a run request.
 */
export class SubstrateResponse {
  public apiRequest: Request;
  public apiResponse: Response;
  public json: any;

  constructor(request: Request, response: Response, json: any = null) {
    this.apiRequest = request;
    this.apiResponse = response;
    this.json = json;
  }

  get requestId() {
    return this.apiRequest.headers.get("x-substrate-request-id");
  }

  /**
   * Returns an error from the `Node` if there was one.
   */
  getError<T extends AnyNode>(node: T): NodeError | undefined {
    // @ts-expect-error
    return node.output() instanceof NodeError ? node.output() : undefined;
  }

  /**
   * Returns the result for given `Node`.
   *
   *  @throws {NodeError} when there was an error running the node.
   */
  get<T extends AnyNode>(node: T): NodeOutput<T> {
    const err = this.getError(node);
    if (err) throw err;
    // @ts-expect-error
    return node.output() as NodeOutput<T>;
  }
}
