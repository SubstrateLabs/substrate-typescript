import { Node, Options } from "substrate/Node";
import { FutureInput } from "substrate/Future";

export type ModuleInputs = Record<string, FutureInput>;

type ModuleIn =
  | {
      module_json: any;
      inputs: Record<string, any>;
    }
  | {
      module_id: any;
      inputs: Record<string, any>;
    }
  | {
      module_uri: any;
      inputs: Record<string, any>;
    };

export class Module extends Node {
  constructor(args: ModuleIn, options?: Options) {
    super(args, options);
    this.node = "Module";
  }
}
