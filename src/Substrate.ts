import { SubstrateError, RequestTimeoutError } from "substrate/Error";
import { VERSION } from "substrate/version";
import OpenAPIjson from "substrate/openapi.json";
import { SubstrateResponse } from "substrate/SubstrateResponse";
import { SubstrateStreamingResponse } from "substrate/SubstrateStreamingResponse";
import { Node } from "substrate/Node";
import { getPlatformProperties } from "substrate/Platform";
import { deflate } from "pako";
import { randomString } from "substrate/idGenerator";

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

  /**
   * Add additional headers to each request. These may override headers set by the Substrate client.
   */
  additionalHeaders?: Record<string, string>;
};

/**
 * [docs/introduction](https://docs.substrate.run)
 */
export class Substrate {
  apiKey: Configuration["apiKey"];
  baseUrl: NonNullable<Configuration["baseUrl"]>;
  apiVersion: NonNullable<Configuration["apiVersion"]>;
  timeout: NonNullable<Configuration["timeout"]>;
  backend: NonNullable<Configuration["backend"]>;
  additionalHeaders: NonNullable<Configuration["additionalHeaders"]>;

  /**
   * Initialize the Substrate SDK.
   */
  constructor({
    apiKey,
    baseUrl,
    apiVersion,
    timeout,
    backend,
    additionalHeaders,
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
    this.backend = backend ?? "v1";
    this.additionalHeaders = additionalHeaders ?? {};
  }

  /**
   *  Run the given nodes.
   *
   *  @throws {SubstrateError} when the server response is an error.
   *  @throws {RequestTimeoutError} when the client has timed out (Configured by `Substrate.timeout`).
   *  @throws {Error} when the client encounters an error making the request.
   */
  async run(...nodes: Node[]): Promise<SubstrateResponse> {
    const serialized = Substrate.serialize(...nodes);
    return this.runSerialized(serialized, nodes);
  }

  /**
   *  Stream the given nodes.
   */
  async stream(...nodes: Node[]): Promise<SubstrateStreamingResponse> {
    const serialized = Substrate.serialize(...nodes);
    return this.streamSerialized(serialized);
  }

  /**
   *  Run the given nodes, serialized using `Substrate.serialize`.
   *
   *  @throws {SubstrateError} when the server response is an error.
   *  @throws {RequestTimeoutError} when the client has timed out (Configured by `Substrate.timeout`).
   *  @throws {Error} when the client encounters an error making the request.
   */
  async runSerialized(
    serialized: any,
    nodes: Node[] | null = null,
    endpoint: string = "/compose",
  ): Promise<SubstrateResponse> {
    const url = this.baseUrl + endpoint;
    const req = { dag: serialized };
    // NOTE: we're creating the signal this way instead of AbortController.timeout because it is only very
    // recently available on some environments, so this is a bit more supported.
    const abortController = new AbortController();
    const { signal } = abortController;
    const timeout = setTimeout(() => abortController.abort(), this.timeout);

    try {
      const request = new Request(url, this.requestOptions(req, signal));
      const apiResponse = await fetch(request);

      if (apiResponse.ok) {
        const json = await apiResponse.json();
        const res = new SubstrateResponse(request, apiResponse, json);
        /** TODO stop setting output on node */
        if (nodes) {
          // @ts-expect-error (accessing protected)
          for (let node of nodes) node.response = res;
        }

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
   *  Stream the given nodes, serialized using `Substrate.serialize`.
   */
  async streamSerialized(serialized: any, endpoint: string = "/compose") {
    const url = this.baseUrl + endpoint;
    const req = { dag: serialized };
    const abortController = new AbortController();
    const { signal } = abortController;
    const timeout = setTimeout(() => abortController.abort(), this.timeout);
    const requestOptions = this.requestOptions(req, signal);

    // Add Streaming Headers
    requestOptions.headers.set("Accept", "text/event-stream");
    requestOptions.headers.set("X-Substrate-Streaming", "1");

    try {
      const request = new Request(url, requestOptions);
      const response = await fetch(request);
      return await SubstrateStreamingResponse.fromRequestReponse(
        request,
        response,
      );
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

  /**
   *  Returns a url to visualize the given nodes.
   */
  static visualize(...nodes: Node[]): string {
    const serialized = this.serialize(...nodes);
    const compressed = deflate(JSON.stringify(serialized), {
      level: 9,
    });
    const numArray = Array.from(compressed);
    const base64 = btoa(String.fromCharCode.apply(null, numArray));
    const urlEncoded = base64
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
    const baseURL = "https://explore.substrate.run/s/";
    return baseURL + urlEncoded;
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
    headers.append("X-Substrate-Request-Id", randomString(32));

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

    // User-Provided
    for (const [name, value] of Object.entries(this.additionalHeaders)) {
      headers.set(name, value);
    }

    return headers;
  }
}
