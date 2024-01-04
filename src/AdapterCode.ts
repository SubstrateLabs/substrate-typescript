import * as Schema from "substrate/Schema";

type Code = Schema.AdapterCode["code"];
type Runtime = Schema.AdapterCode["runtime"];

export class AdapterCode implements Schema.AdapterCode {
  code: Code;
  runtime: Runtime;

  constructor(code: Code, runtime: Runtime = "deno") {
    this.code = code;
    this.runtime = runtime;
  }

  static tryParse(object: Function | {}, runtime: Runtime = "deno") {
    if (object instanceof Function) {
      return new AdapterCode(object.toString(), runtime);
    }
    return;
  }
}
