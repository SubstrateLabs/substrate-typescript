import { Graph } from "./Graph";
import { SubstrateError } from "./Error";
import { VERSION } from "./version";
import { APIResponse } from "./APIResponse";
import { Jina } from "./Jina";
import { Mistral } from "./Mistral";
import { Bakllava } from "./Bakllava";
import { StableDiffusion } from "./StableDiffusion";

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

  /**
   * API client for interacting with the [Substrate API](https://www.substrate.run/api-ref).
   */
  constructor({ apiKey, userAgent }: Configuration) {
    if (!apiKey) {
      throw new SubstrateError(
        "An API Key is required. Specify it when instatiating the Substrate client: `new Substrate({ apiKey: 'API_KEY' })`",
      );
    }
    this.apiKey = apiKey;
    this.userAgent = userAgent ?? `substrate-typescript/${VERSION}`;
  }

  // // POST to API
  async compose(graph: Graph): Promise<any> {
    const response = await fetch(
      "https://api.substrate.run/compose",
      this.#requestOptions({ dag: graph }),
    );
    if (response.ok) {
      const json = await response.text();
      return json;
    } else {
      console.log(response);
    }
  }


  // TBD: this interface will likely change.
  run(model: Jina) {
    return model.constructor.name;
    // return this.models[model.constructor.name](model.args);
  }

  // TBD: this interface will likely change.
  get models() {
    return {
      Jina: (args: Jina.Input) => {
        return this.#model("/jina-base-v2", args);
      },

      Mistral: (args: Mistral.Input) => {
        return this.#model("/mistral-7b-instruct", args);
      },

      Bakllava: (args: Bakllava.Input) => {
        return this.#model("/bakllava-1", args);
      },

      StableDiffusion: (args: StableDiffusion.Input) => {
        return this.#model("/stablediffusion", args);
      },
    };
  }

  async #model(path: string, args: any): Promise<any> {
    const url = ["https://api.substrate.run", path].join("");

    const response = await fetch(url, this.#requestOptions(args));
    const res = new APIResponse(response);
    res.debug();

    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      // when status == 422 (bad params)
      return;
    }
  }

  #requestOptions(body: any) {
    return {
      method: "POST",
      headers: this.#headers(),
      body: JSON.stringify(body),
    };
  }

  #headers() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${this.apiKey}`);
    headers.append("User-Agent", this.userAgent);
    return headers;
  }
}
