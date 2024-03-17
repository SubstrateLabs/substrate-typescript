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
}
