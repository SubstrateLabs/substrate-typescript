import * as Schema from "substrate/Schema";

type Code = Schema.AdapterCode["code"];
type Runtime = Schema.AdapterCode["runtime"];
type Version = Schema.AdapterCode["runtime_version"];

export class AdapterCode implements Schema.AdapterCode {
  code: Code;
  runtime: Runtime;
  runtime_version: Version;

  constructor(
    code: Code,
    runtime: Runtime = "deno",
    version: Version = "1.2.6",
  ) {
    this.code = code;
    this.runtime = runtime;
    this.runtime_version = version;
  }

  static tryParse(
    object: Function | {},
    runtime: Runtime = "deno",
    version: Version = "1.2.6",
  ) {
    if (object instanceof Function) {
      return new AdapterCode(object.toString(), runtime, version);
    }
    return;
  }
}
