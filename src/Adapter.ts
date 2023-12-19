import * as Schema from "./Schema";

/**
 * `Node` items within a `Graph` will accept input as a string-indexed object and their output
 * will also be a string-indexed object.
 */
type IO = { [key: string]: any };

/**
 * `Get` adapter will select some data by `path` in an input object at `source_key` and produce a new output object with the selected data available at `dest_key`.
 *
 * For example,
 *
 *    Given some input like: `{ a: { b: ["c"] } }`
 *
 *    And a `Get` adapter like: `new Get({ source: "a", dest: "x", path: "a.b[0]" })`
 *    Alternatively like: `Get.path("a.b[0]", "x")`
 *
 *    We'll produce an output like: `{ a: { b: ["c"] }, x: "c" }`
 */
export class Get<In extends IO, Out extends IO> implements Adapter.GetAdapter {
  source_key: Extract<keyof In, string>;
  dest_key: Extract<keyof Out, string> | null;
  readonly transform = "get" as const;
  transform_args: Adapter.GetAdapterArgs;

  // TBD:
  static path<In extends IO, Out extends IO>(
    path: Adapter.GetAdapterArgs["path"],
    dest: Extract<keyof Out, string> | null = null,
  ) {
    // NOTE: source_key will always be the first part of the path.
    // eg.
    //    "a.b.c" => "a"
    //    "a[0].b.c" => "a"
    //    "a" => "a"
    const source = path.split(/[.\[]/)[0] as Extract<keyof In, string>;
    return new Get<In, Out>({ source, path, dest });
  }

  constructor({
    source,
    dest = null,
    path,
  }: {
    source: Extract<keyof In, string>;
    dest?: Extract<keyof Out, string> | null;
    path: string;
  }) {
    this.source_key = source;
    this.dest_key = dest;
    this.transform_args = { path };
  }
}

/**
 * `Pick` adapter will select some data by `keys` in an input object and produce an output object with only selected data at `keys`.
 *
 * For example,
 *
 *    Given some input like: `{ a: { b: 1 }, c: 2, d: 3 }`
 *
 *    And a `Pick` adapter like: `new Pick({ keys: ["c", "d"] })`
 *    Alternatively like: `Pick.keys(["c", "d"])`
 *
 *    We'll produce an output like: `{ c: 2, d: 3 }`
 */
export class Pick<In extends IO, Out extends IO>
  implements Adapter.PickAdapter
{
  source_key = null;
  dest_key = null;
  readonly transform = "pick" as const;
  transform_args: Adapter.PickAdapterArgs;

  // TBD:
  static keys<In extends IO, Out extends IO>(
    keys: (Extract<keyof In, string> & Extract<keyof Out, string>)[],
  ) {
    return new Pick<In, Out>({ keys });
  }

  constructor({
    keys,
  }: {
    keys: (Extract<keyof In, string> & Extract<keyof Out, string>)[];
  }) {
    this.transform_args = { keys };
  }
}

/**
 * `WrapInList` adapter will select some `source_key` in an input object and produce an output object that wraps that value in a list.
 *
 * For example,
 *
 *    Given some input like: `{ a: 1, b: 2 }`
 *
 *    And a `WrapInList` adapter like: `new WrapInList({ source: "b", dest: "c" })`
 *    Alternatively like: `WrapInList.key("b", "c")`
 *
 *    We'll produce an output like: `{ a: 1, b: 2, c: [2] }`
 */
export class WrapInList<In extends IO, Out extends IO>
  implements Adapter.WrapInListAdapter
{
  source_key: Extract<keyof In, string>;
  dest_key: Extract<keyof Out, string> | null;
  readonly transform = "wrap_in_list" as const;
  transform_args: Adapter.WrapInListAdapterArgs = {};

  // TBD:
  static key<In extends IO, Out extends IO>(
    source: Extract<keyof In, string>,
    dest: Extract<keyof Out, string> | null = null,
  ) {
    return new WrapInList<In, Out>({ source, dest });
  }

  constructor({
    source,
    dest = null,
  }: {
    source: Extract<keyof In, string>;
    dest?: Extract<keyof Out, string> | null;
  }) {
    this.source_key = source;
    this.dest_key = dest;
  }
}

export namespace Adapter {
  export type Adapter = Schema.Adapter;

  export type GetAdapter = Schema.GetAdapter;
  export type GetAdapterArgs = Schema.GetAdapter["transform_args"];

  export type WrapInListAdapter = Schema.WrapInListAdapter;
  export type WrapInListAdapterArgs =
    Schema.WrapInListAdapter["transform_args"];

  export type PickAdapter = Schema.PickAdapter;
  export type PickAdapterArgs = Schema.PickAdapter["transform_args"];
}
