import { Node } from "substrate/Node";
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

  debug() {
    // console.error("[error]", "URL:", url);
    console.log(
      "HTTP Status:",
      this.apiResponse.status,
      this.apiResponse.statusText,
    );
    console.log("Headers:");
    for (let [key, value] of this.apiResponse.headers) {
      console.log(" ", key, "=", value);
    }
    console.log("");
    // console.error("Body:", JSON.stringify(this.#response.body));
  }

  /**
   * Returns the result for given `Node`
   */
  get(node: Node) {
    const result = this.json?.data?.[node.id];

    // Errors from the server have these two fields
    if (result?.type && result?.message) {
      // NOTE: we only return these errors on client errors.
      // Server errors are typically 5xx replies.
      return new NodeError(result.type, result.message);
    }

    return result || new NodeError("no_data", `Missing data for "${node.id}"`);
  }
}
