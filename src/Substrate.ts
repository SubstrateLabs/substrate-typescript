import { SubstrateError, RequestTimeoutError } from "substrate/Error";
// import { RequestCompleted } from "substrate/Mailbox";
import { VERSION } from "substrate/version";
import OpenAPIjson from "substrate/openapi.json";
import { SubstrateResponse } from "substrate/SubstrateResponse";
import { Node } from "substrate/Node";
import { getPlatformProperties } from "substrate/Platform";

type Configuration = {
  /**
   * [docs/authentication](https://docs.substrate.run/#authentication)
   */
  apiKey?: string | undefined;

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
  apiKey: string;
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
      throw new SubstrateError(
        "An API Key is required. Specify it when constructing the Substrate client: `new Substrate({ apiKey: 'API_KEY' })`",
      );
    }
    this.apiKey = apiKey;
    this.baseUrl = baseUrl ?? "https://api.substrate.run";
    this.apiVersion = apiVersion ?? OpenAPIjson["info"]["version"];
    this.timeout = timeout ?? 300000;
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
        // for (let node of nodes) node.mailbox.send(new RequestCompleted(res));

        return res;
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

    throw new SubstrateError("Request failed");
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

    // Switch between old and new backends
    headers.append("X-Substrate-Backend", this.backend);

    return headers;
  }
}
