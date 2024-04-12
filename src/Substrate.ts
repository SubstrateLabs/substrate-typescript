import { SubstrateError, RequestTimeoutError } from "substrate/Error";
import { VERSION } from "substrate/version";
import OpenAPIjson from "substrate/openapi.json";
import { SubstrateResponse } from "substrate/SubstrateResponse";
import { Node } from "substrate/Node";
import { getPlatformProperties } from "substrate/Platform";

type Configuration = {
  /**
   * [docs/authentication](https://docs.substrate.run/#authentication)
   */
  apiKey: string | undefined;

  /**
   * [docs/versioning](https://docs.substrate.run/versioning)
   */
  apiVersion?: string | undefined;

  baseUrl?: string;

  /**
   * Request timeout in milliseconds. Default: 5m
   */
  timeout?: number;

  /**
   * Switches between existing backend and newer backend
   */
  backend?: "v0" | "v1";
};

/**
 * [docs/introduction](https://docs.substrate.run)
 */
export class Substrate {
  apiKey: string | undefined;
  baseUrl: string;
  apiVersion: string;
  timeout: number;
  backend: string;

  /**
   * Initialize the Substrate SDK.
   */
  constructor({
    apiKey,
    baseUrl,
    apiVersion,
    timeout,
    backend,
  }: Configuration) {
    if (!apiKey) {
      console.warn(
        "[Substrate] An API Key is required. Specify it when constructing the client: `new Substrate({ apiKey: 'API_KEY' })`",
      );
    }
    this.apiKey = apiKey;
    this.baseUrl = baseUrl ?? "https://api.substrate.run";
    this.apiVersion = apiVersion ?? OpenAPIjson["info"]["version"];
    this.timeout = timeout ?? 300_000;
    this.backend = backend ?? "v0";
  }

  /**
   *  Run the given nodes.
   */
  async run(...nodes: Node[]): Promise<SubstrateResponse> {
    const url = this.baseUrl + "/compose";
    const req = { dag: Substrate.serialize(...nodes) };
    // NOTE: we're creating the signal this way instead of AbortController.timeout because it is only very
    // recently available on some environments, so this is a bit more supported.
    const abortController = new AbortController();
    const { signal } = abortController;
    const timeout = setTimeout(() => abortController.abort(), this.timeout);

    try {
      const apiResponse = await fetch(url, this.requestOptions(req, signal));

      if (apiResponse.ok) {
        const json = await apiResponse.json();
        const res = new SubstrateResponse(apiResponse, json);
        // @ts-expect-error (accessing protected)
        for (let node of nodes) node.response = res;

        return res;
      } else {
        throw new SubstrateError(
          `Request failed: ${apiResponse.status} ${apiResponse.statusText}`,
        );
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.name === "AbortError") {
          throw new RequestTimeoutError(
            `Request timed out after ${this.timeout}ms`,
          );
          // TODO: We could propagate timeout errors to nodes too, but I'm
          // not sure yet what might be easier for the user to manage.
        }
      }
      throw err;
    } finally {
      clearTimeout(timeout);
    }
  }

  /**
   *  Transform an array of nodes into JSON for the Substrate API
   */
  static serialize(...nodes: Node[]): any {
    const ns = nodes.map((n) => n.toJSON());
    const futures = new Set(ns.flatMap((sn) => sn.futures));

    return {
      nodes: ns.map((sn) => sn.node),
      futures: Array.from(futures),
      edges: [], // @deprecated
      initial_args: {}, // @deprecated
    };
  }

  protected requestOptions(body: any, signal: AbortSignal) {
    return {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(body),
      signal,
    };
  }

  protected headers() {
    const headers = new Headers();

    // API
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("User-Agent", `APIClient/JS ${VERSION}`);
    headers.append("X-Substrate-Version", this.apiVersion);
    headers.append("X-Substrate-Backend", this.backend); // Switch between old and new backends

    // Auth
    headers.append("Authorization", `Bearer ${this.apiKey}`);

    // SDK
    headers.append("X-Substrate-Lang", "js");
    headers.append("X-Substrate-Package-Version", VERSION);

    // Platform, Runtime
    const props = getPlatformProperties();
    headers.append("X-Substrate-OS", props.os);
    headers.append("X-Substrate-Arch", props.arch);
    headers.append("X-Substrate-Runtime", props.runtime);
    headers.append("X-Substrate-Runtime-Version", props.runtimeVersion);

    return headers;
  }
}
