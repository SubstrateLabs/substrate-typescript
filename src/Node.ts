import * as Refs from "substrate/Refs";
import { idGenerator } from "substrate/idGenerator";

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

  toJSON() {
    return {
      node: this.node,
      id: this.id,
      args: this.args,
      _should_output_globally: this._subscribed,
    };
  }
}
