import * as Refs from "substrate/Refs";
import { v4 as uuidv4 } from "uuid";

const refFactory = Refs.makeFactory();

// simplified node for demo
export class NewNode {
  id: string;
  args: any = {};

  constructor(id: string = uuidv4()) {
    this.id = id;
  }

  get ref() {
    return refFactory.makeProxiedRef(this) as any;
  }

  toJSON() {
    return {
      class: "NewNode",
      id: this.id,
      args: this.args,
    };
  }
}
