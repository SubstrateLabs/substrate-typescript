import { Substrate, Jina, Mistral, Bakllava, StableDiffusion } from "..";
import { APIResponse } from "./APIResponse";

// TBD: this interface may change, a lot.
/**
 *  `ModelEndpoints` provides a methods for interacting directly with
 *  single models hosted on the Substrate platform.
 */
export class ModelEndpoints {
  #client: Substrate;

  constructor(client: Substrate) {
    this.#client = client;
  }

  /**
   *  [Jina](https://www.substrate.run/api-ref#Jina).
   */
  async Jina(args: Jina.Input) {
    return this.#request("/jina-base-v2", args);
  }

  /**
   *  [Mistral](https://www.substrate.run/api-ref#Mistral).
   */
  async Mistral(args: Mistral.Input) {
    return this.#request("/mistral-7b-instruct", args);
  }

  /**
   *  [Bakllava](https://www.substrate.run/api-ref#Bakllava).
   */
  async Bakllava(args: Bakllava.Input) {
    return this.#request("/bakllava-1", args);
  }

  /**
   *  [StableDiffusion](https://www.substrate.run/api-ref#StableDiffusion).
   */
  async StableDiffusion(args: StableDiffusion.Input) {
    return this.#request("/stablediffusion", args);
  }

  async #request(path: string, args: any): Promise<any> {
    const url = this.#client.baseUrl + path;
    const options = this.#client.requestOptions(args);

    const response = await fetch(url, options);

    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      const res = new APIResponse(response);
      res.debug();
      // when status == 422 (bad params)
      return;
    }
  }
}
