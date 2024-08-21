import { Node, Options } from "substrate/Node";
import { FutureVariable } from "substrate/Future";

type ModuleId = `mod_${string}`;

export type SerializableModule = {
  nodes: Node[];
  inputs: ModuleInputs;
};

export type NewModule = SerializableModule & { name: string };
export type UpdateModule = NewModule & { id: ModuleId };
export type PublishableModule = NewModule; // | UpdateModule; (TODO: implement update module)
export type PublishedModule = {
  id: ModuleId;
  uri: string;
};

export type ModuleInputs = Record<string, FutureVariable>;

type ModuleIn =
  | {
      module_json: any;
      inputs: Record<string, any>;
    }
  | {
      module_id: ModuleId;
      inputs: Record<string, any>;
    };

export class Module extends Node {
  constructor(args: ModuleIn, options?: Options) {
    super(args, options);
    this.node = "Module";
  }
}
