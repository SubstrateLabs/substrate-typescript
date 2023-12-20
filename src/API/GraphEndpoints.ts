import { Substrate, Graph } from "..";
import { APIResponse } from "./APIResponse";

export class GraphEndpoints {
  #client: Substrate;

  constructor(client: Substrate) {
    this.#client = client;
  }

  async compose(graph: Graph): Promise<any> {
    const url = this.#client.baseUrl + "/compose";

    const response = await fetch(
      url,
      this.#client.requestOptions({ dag: graph }),
    );

    if (response.ok) {
      const json = await response.text();
      return json;
    } else {
      const res = new APIResponse(response);
      res.debug();
      return;
    }
  }
}
