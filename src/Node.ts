import * as Refs from "substrate/Refs";
import { idGenerator } from "substrate/idGenerator";

const refFactory = Refs.makeFactory();

const generator = idGenerator("node");

export class Node {
  id: string;
  node: string;
  args: any = {};
  _output: boolean = false;

  constructor(args: any) {
    this.node = this.constructor.name;
    this.id = generator(this.node);
    this.args = args;
  }

  output(): this {
    this._output = true;
    return this;
  }

  get future() {
    return refFactory.makeProxiedRef(this) as any;
  }

  toJSON() {
    return {
      node: this.node,
      id: this.id,
      args: this.args,
      _should_output_globally: this._output,
    };
  }
}
