/**
TODO: autogenerate this file
Note that args is `Partial` because the results of a node that you're piping into this one
might be nullable, e.g. `result.text`. Maybe not the ideal tradeoff.
*/

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
