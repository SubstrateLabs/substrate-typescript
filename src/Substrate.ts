import { SubstrateError } from "substrate/Error";
import { VERSION } from "substrate/version";
import OpenAPIjson from "substrate/openapi.json";
import { SubstrateResponse } from "substrate/SubstrateResponse";
import { Node } from "substrate/Node";
import { context } from "substrate/sb";

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
    const req = { dag: this.serialize(nodes) };
    const apiResponse = await fetch(url, this.requestOptions(req));
    if (apiResponse.ok) {
      const json = await apiResponse.json();
      return new SubstrateResponse(apiResponse, json);
    } else {
      const res = new SubstrateResponse(apiResponse);
      res.debug();
      return res;
    }
  }

  serialize(nodes: Node[]) {
    // TODO: refactor and annotate this.
    const traverse = (obj: any, futures: Set<any>): any => {
      if (Array.isArray(obj)) {
        return obj.map((item) => traverse(item, futures));
      }

      if (obj instanceof context.Future) {
        const future = context.isProxy(obj) ? context.unproxy(obj) : obj;
        futures.add(future.toJSON());
        future.referencedFutures().forEach((rf) => futures.add(rf));
        return future.toPlaceholder();
      }

      if (typeof obj === "object") {
        return Object.keys(obj).reduce((acc: any, k: any) => {
          acc[k] = traverse(obj[k], futures);
          return acc;
        }, {});
      }

      return obj;
    };

    const futures = new Set<any>();
    const ns: Object[] = [];

    for (const node of nodes) {
      const args = traverse(node.args, futures);
      ns.push({ ...node.toJSON(), args });
    };

    return {
      nodes: ns,
      futures: Array.from(futures),
      edges: [],
      initial_args: {},
    };
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
