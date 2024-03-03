import * as Refs from "substrate/Refs";
// import { v4 as uuidv4 } from "uuid";

const refFactory = Refs.makeFactory();

const nodeIdGenerator = (start: number = 1) => {
  let n = start;
  return () => {
    const id = "node_" + n.toString();
    n = n + 1;
    return id;
  };
};

const generator = nodeIdGenerator();

// simplified node for demo
export class Node {
  id: string;
  node: string;
  args: any = {};

  constructor(id: string = generator()) {
    this.id = id;
  }

  get ref() {
    return refFactory.makeProxiedRef(this) as any;
  }

  toJSON() {
    return {
      node: "GenerateText", // TODO: subclasses should set this
      id: this.id,
      args: this.args,
      _should_output_globally: true, // TODO: read from instance var
      extra_args: {}, // TODO: still needed?
    };
  }
}
