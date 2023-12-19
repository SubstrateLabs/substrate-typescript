import { Graph } from "./Graph";
import { SubstrateError } from "./Error";

type Configuration = {
  /**
   * Your [Substrate API Key](https://www.substrate.run/api-ref#Authentication).
   *
   * Used to authenticate requests made to the Substrate API.
   */
  apiKey: string;
};

/**
 * API client for interacting with the [Substrate API](https://www.substrate.run/api-ref).
 */
export class Substrate {
  apiKey: string;

  /**
   * API client for interacting with the [Substrate API](https://www.substrate.run/api-ref).
   */
  constructor({ apiKey }: Configuration) {
    if (!apiKey) {
      throw new SubstrateError(
        "An API Key is required. Specify it when instatiating the Substrate client: `new Substrate({ apiKey: 'API_KEY' })`",
      );
    }
    this.apiKey = apiKey;
  }

  // // POST to API
  async compose(graph: Graph): Promise<any> {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${this.apiKey}`);

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ dag: graph }),
    };

    // console.log(requestOptions.body);

    const response = await fetch(
      "https://api.substrate.run/compose",
      requestOptions,
    );
    const json = await response.json();
    return json;
  }
}
