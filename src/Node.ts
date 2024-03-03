import * as Refs from "substrate/Refs";
// import { v4 as uuidv4 } from "uuid";

const refFactory = Refs.makeFactory();

const nodeIdGenerator = (start: number = 1) => {
  let n = start;
  return (node: string) => {
    const id = `${node + "_" || "node_"}` + n.toString();
    n = n + 1;
    return id;
  };
};

const generator = nodeIdGenerator();

export class Node {
  id: string;
  node: string;
  args: any = {};
  _output: boolean = false;

  constructor(args: any = {}) {
    this.node = this.constructor.name;
    this.id = generator(this.node);
    this.args = args;
  }

  output(): this {
    this._output = true;
    return this;
  }

  get ref() {
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
