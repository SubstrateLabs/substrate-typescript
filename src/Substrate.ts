import { SubstrateError } from "substrate/Error";
import { VERSION } from "substrate/version";
import OpenAPIjson from "substrate/openapi.json";
import { Graph, NodeLike } from "substrate/Graph";
import { APIResponse } from "substrate/APIResponse";

type Configuration = {
  /**
   * [docs/authentication](https://docs.substrate.run/#authentication)
   */
  apiKey?: string | undefined;

  /**
   * [docs/versioning](https://docs.substrate.run/versioning)
   */
  apiVersion?: string | undefined;

  userAgent?: string;

  baseUrl?: string;
};

/**
 * [docs/introduction](https://docs.substrate.run)
 */
export class Substrate {
  apiKey: string;
  userAgent: string;
  baseUrl: string;
  apiVersion: string;

  /**
   * Initialize the Substrate SDK.
   */
  constructor({ apiKey, userAgent, baseUrl, apiVersion }: Configuration) {
    if (!apiKey) {
      throw new SubstrateError(
        "An API Key is required. Specify it when constructing the Substrate client: `new Substrate({ apiKey: 'API_KEY' })`",
      );
    }
    this.apiKey = apiKey;
    this.userAgent = userAgent ?? `substrate-typescript/${VERSION}`;
    this.baseUrl = baseUrl ?? "https://api.substrate.run";
    this.apiVersion = apiVersion ?? OpenAPIjson["info"]["version"];
  }

  /**
   *  Run the given nodes.
   */
  async run(...nodes: NodeLike[]): Promise<any> {
    const url = this.baseUrl + "/compose";

    const graph = new Graph();
    for (const node of nodes) {
      graph.add(node);
    }
    const req = { dag: graph };
    const response = await fetch(url, this.requestOptions(req));

    if (response.ok) {
      return response.json();
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
    headers.append("X-Substrate-Version", this.apiVersion);
    return headers;
  }
}
