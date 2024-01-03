import * as Schema from "substrate/Schema";

type Code = Schema.RemoteCode["code"];
type Runtime = Schema.RemoteCode["runtime"];

export class RemoteCode implements Schema.RemoteCode {
  code: Code;
  runtime: Runtime;

  constructor(code: Code, runtime: Runtime = "node") {
    this.code = code;
    this.runtime = runtime;
  }

  static tryParse(object: unknown, runtime: Runtime = "node"): RemoteCode | undefined {
    if (object instanceof Function) {
      return new RemoteCode(object.toString(), runtime);
    }
    return;
  }
}
