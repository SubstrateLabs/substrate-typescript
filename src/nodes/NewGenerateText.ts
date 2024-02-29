import * as Schema from "substrate/API/Schema";
import * as OpenAPI from "substrate/API/OpenAPI";
import { NewNode } from "substrate/NewNode";

export class NewGenerateText extends NewNode {
  constructor(args: any = {}) {
    super();
    this.args = args;
  }
}
