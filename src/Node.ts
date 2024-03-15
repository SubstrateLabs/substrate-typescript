import { idGenerator } from "substrate/idGenerator";
import { SubstrateResponse } from "./SubstrateResponse";
import { context } from "substrate/sb";

const generator = idGenerator("node");

export class Node<Args = any> {
  id: string;
  node: string;
  args: Args;
  _subscribed: boolean = false;

  constructor(args: Args) {
    this.node = this.constructor.name;
    this.id = generator(this.node);
    this.args = args;
  }

  /**
   * Subscribe to the output of this node.
   */
  subscribe(): this {
    this._subscribed = true;
    return this;
  }

  /**
   * Reference the future output of this node.
   */
  get future() {
    return context.Trace.proxy(this) as any;
  }

  /*
   * Get the response for a given node.
   */
  output(response: SubstrateResponse): any {
    if (!response.json) {
      throw new Error(`Invalid response`);
    }
    const json = response.json;
    if (json && json.data) {
      const data = json.data;
      const nodeId = this.id;
      if (data[nodeId]) {
        return data[nodeId];
      }
    }
    throw new Error(`Node ${this.id} not found in response`);
  }

  toJSON() {
    return {
      node: this.node,
      id: this.id,
      args: this.args,
      _should_output_globally: this._subscribed,
    };
  }
}
