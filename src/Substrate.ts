import { SubstrateError } from "substrate/Error";
import { VERSION } from "substrate/version";
import OpenAPIjson from "substrate/openapi.json";
import { SubstrateResponse } from "substrate/SubstrateResponse";
import { Node } from "substrate/Node";

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
  async run(...nodes: Node[]): Promise<SubstrateResponse> {
    const url = this.baseUrl + "/compose";
    const req = { dag: Substrate.serialize(nodes) };
    const apiResponse = await fetch(url, this.requestOptions(req));

    if (apiResponse.ok) {
      const json = await apiResponse.json();
      const res = new SubstrateResponse(apiResponse, json);
      for (let node of nodes) {
        node.output = res;
      }
      return res;
    } 

    throw new SubstrateError("Request failed");
  }

  static serialize(nodes: Node[]): any {
    const ns = nodes.map((n) => n.toJSON());
    const futures = new Set(ns.flatMap((sn) => sn.futures));

    return {
      nodes: ns.map((sn) => sn.node), 
      futures: Array.from(futures), 
      edges: [], // @deprecated
      initial_args: {} // @deprecated
    };
  }

  protected requestOptions(body: any) {
    return {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(body),
    };
  }

  protected headers() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${this.apiKey}`);
    headers.append("User-Agent", this.userAgent);
    headers.append("X-Substrate-Version", this.apiVersion);
    return headers;
  }
}
