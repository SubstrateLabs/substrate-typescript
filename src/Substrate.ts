import { SubstrateError } from "substrate/Error";
import { VERSION } from "substrate/version";
import { ModelEndpoints } from "substrate/endpoints/Models";
import { Graph } from "substrate/Graph";
import { APIResponse } from "substrate/APIResponse";

type Configuration = {
  /**
   * Your [Substrate API Key](https://www.substrate.run/api-ref#Authentication).
   *
   * Used to authenticate requests made to the Substrate API.
   */
  apiKey?: string | undefined;

  userAgent?: string;
};

/**
 * API client for interacting with the [Substrate API](https://www.substrate.run/api-ref).
 */
export class Substrate {
  apiKey: string;
  userAgent: string;
  baseUrl = "https://api.substrate.run" as const;

  /**
   * API client for interacting with the [Substrate API](https://www.substrate.run/api-ref).
   */
  constructor({ apiKey, userAgent }: Configuration) {
    if (!apiKey) {
      throw new SubstrateError(
        "An API Key is required. Specify it when constructing the Substrate client: `new Substrate({ apiKey: 'API_KEY' })`",
      );
    }
    this.apiKey = apiKey;
    this.userAgent = userAgent ?? `substrate-typescript/${VERSION}`;
  }

  /**
   *  [models](https://www.substrate.run/api-ref#models).
   */
  models = new ModelEndpoints(this);

  /**
   *  [compose](https://www.substrate.run/api-ref#compose).
   */
  async compose(graph: Graph): Promise<any> {
    const url = this.baseUrl + "/compose";

    const response = await fetch(url, this.requestOptions({ dag: graph }));

    if (response.ok) {
      const json = await response.text();
      return json;
    } else {
      const res = new APIResponse(response);
      res.debug();
      return;
    }
  }

  requestOptions(body: any) {
    return {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(body),
    };
  }

  headers() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${this.apiKey}`);
    headers.append("User-Agent", this.userAgent);
    return headers;
  }
}
