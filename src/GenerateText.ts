// import * as Schema from "substrate/API/Schema";
// import * as OpenAPI from "substrate/API/OpenAPI";
import { Node } from "substrate/Node";

export class GenerateText extends Node {
  constructor(args: any = {}) {
    super();
    this.args = args;
  }
}
