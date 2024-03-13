import { NodeLike } from "substrate/Graph";

/**
 * Substrate run response.
 */
export class SubstrateResponse {
  #apiResponse: Response;
  #json: any;

  constructor(response: Response, json: any = null) {
    this.#apiResponse = response;
    this.#json = json;
  }

  /*
   * Get the response for a given node.
   */
  get(node: NodeLike): { [key: string]: any } | null {
    if (!this.#json) {
      return null;
    }
    const json = this.#json;
    if (json && json.data) {
      const data = json.data;
      const nodeId = node.id;
      if (data[nodeId]) {
        return data[nodeId];
      }
    }
    // TODO: maybe return an error or print a warning?
    return null;
  }

  debug() {
    // console.error("[error]", "URL:", url);
    console.log(
      "HTTP Status:",
      this.#apiResponse.status,
      this.#apiResponse.statusText,
    );
    console.log("Headers:");
    for (let [key, value] of this.#apiResponse.headers) {
      console.log(" ", key, "=", value);
    }
    console.log("");
    // console.error("Body:", JSON.stringify(this.#response.body));
  }
}
