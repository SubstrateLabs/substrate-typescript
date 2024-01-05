import { Substrate, Jina, Mistral, StableDiffusion } from "substrate";
import { APIResponse } from "substrate/APIResponse";

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
  async jina(args: Jina.Input) {
    return this.#request("/jina-base-v2", args);
  }

  /**
   *  [Mistral](https://www.substrate.run/api-ref#Mistral).
   */
  async mistral(args: Mistral.Input) {
    return this.#request("/mistral-7b-instruct", args);
  }

  /**
   *  [StableDiffusion](https://www.substrate.run/api-ref#StableDiffusion).
   */
  async stableDiffusion(args: StableDiffusion.Input) {
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
