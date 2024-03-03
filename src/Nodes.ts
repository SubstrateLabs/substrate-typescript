// TODO: autogenerate this file

import * as OpenAPI from "substrate/API/OpenAPI";
import { Node } from "substrate/Node";

export class GenerateText extends Node {
  constructor(args: Partial<OpenAPI.components["schemas"]["GenerateTextIn"]>) {
    super(args);
  }

  override get future(): OpenAPI.components["schemas"]["GenerateTextOut"] {
    return super.future;
  }
}
