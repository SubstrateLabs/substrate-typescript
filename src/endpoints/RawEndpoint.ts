import { Substrate } from "substrate";
import { APIResponse } from "substrate/APIResponse";

/**
 *  Raw access to the Substrate API
 */
export class RawEndpoint {
  #client: Substrate;

  constructor(client: Substrate) {
    this.#client = client;
  }

  async endpoint(path: string, args: any) {
    return this.#request(`/${path}`, args);
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
