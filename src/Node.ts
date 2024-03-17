import * as Refs from "substrate/Refs";
import { idGenerator } from "substrate/idGenerator";
import { SubstrateResponse } from "./SubstrateResponse";

const refFactory = Refs.makeFactory();

const generator = idGenerator("node");

export class Node {
  id: string;
  node: string;
  args: any = {};
  _subscribed: boolean = false;

  constructor(args: any) {
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
    return refFactory.makeProxiedRef(this) as any;
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
