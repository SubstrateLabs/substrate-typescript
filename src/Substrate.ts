import { SubstrateError } from "substrate/Error";
import { VERSION } from "substrate/version";
import OpenAPIjson from "substrate/API/OpenAPI.json";
import { RawEndpoint } from "substrate/endpoints/RawEndpoint";
import { Graph } from "substrate/Graph";
import { APIResponse } from "substrate/APIResponse";

type Configuration = {
  /**
   * Your [Substrate API Key](https://www.substrate.run/api-ref#Authentication).
   *
   * Used to authenticate requests made to the Substrate API.
   */
  apiKey?: string | undefined;

  /**
   * Determines which [Version](https://www.substrate.run/api-ref#Versioning) of the Substrate API to use.
   *
   * Defaults to the latest compatible version with this library.
   */
  apiVersion?: string | undefined;

  userAgent?: string;

  baseUrl?: string;
};

/**
 * API client for interacting with the [Substrate API](https://www.substrate.run/api-ref).
 */
export class Substrate {
  apiKey: string;
  userAgent: string;
  baseUrl: string;
  apiVersion: string;

  /**
   * API client for interacting with the [Substrate API](https://www.substrate.run/api-ref).
   */
  constructor({ apiKey, userAgent, baseUrl, apiVersion }: Configuration) {
    if (!apiKey) {
      throw new SubstrateError(
        "An API Key is required. Specify it when constructing the Substrate client: `new Substrate({ apiKey: 'API_KEY' })`"
      );
    }
    this.apiKey = apiKey;
    this.userAgent = userAgent ?? `substrate-typescript/${VERSION}`;
    this.baseUrl = baseUrl ?? "https://api.substrate.run";
    this.apiVersion = apiVersion ?? OpenAPIjson["info"]["version"];
  }

  /**
   *  raw endpoint
   */
  raw = new RawEndpoint(this);

  /**
   *  [compose](https://www.substrate.run/api-ref#compose).
   */
  async compose(graph: Graph): Promise<any> {
    const url = this.baseUrl + "/compose";

    const response = await fetch(url, this.requestOptions({ dag: graph }));

    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      const res = new APIResponse(response);
      res.debug();
      return;
    }
  }

  /**
   *  Visualize the `Graph` on the Substrate website.
   */
  visualize(graph: Graph) {
    const json = JSON.stringify({ dag: graph });
    const bytes = new TextEncoder().encode(json);
    const utf16 = String.fromCodePoint(...bytes);
    const base64 = btoa(utf16);

    return `https://www.substrate.run/visualize/${base64}`;
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
    headers.append("X-Substrate-Version", this.apiVersion);
    return headers;
  }
}
