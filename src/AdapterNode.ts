// WIP
//
// This design is something we've discussed internally, but it is not yet supported by the API.
//
// The idea here is to specify AdapterNode instances to be responsible for transforming the data
// that passes through them in order to adapt it to the input of nodes that follow.
//
//
// import * as Schema from "./Schema";
// import { AbstractNode } from "./AbstractNode";
//
// type Params = {
//   id?: Schema.Id;
//   args?: Schema.ModelNode["args"];
// };
//
// export class AdapterNode extends AbstractNode implements Schema.AdapterNode {
//   override args: Schema.AdapterNode["args"] = {};
//   readonly class = "AdapterNode" as const;
//   readonly extra_args = {};
//
//   constructor(params: Params = {}) {
//     super(params);
//     this.setArgs(params.args);
//   }
//
//   override setArgs(args: Schema.BaseNode["args"] = {}) {
//     Schema.AdapterNodeSchema.shape.args.parse(args);
//     return super.setArgs(args);
//   }
// }
