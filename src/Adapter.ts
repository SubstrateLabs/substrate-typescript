import * as Schema from "./Schema";

abstract class AbstractAdapter {
  source_key: string | null;
  dest_key: string | null;
  readonly transform: string;
  transform_args: Object;

  constructor(
    source_key: string | null,
    dest_key: string | null,
    args: Object,
  ) {
    this.source_key = source_key;
    this.dest_key = dest_key;
    this.transform_args = args;
  }

  /**
   * Optionally write the output of this operation to a new key.
   */
  to(dest_key: string) {
    this.dest_key = dest_key;
    return this;
  }
}

/**
 * `Get` adapter will select some data by `path` in an input object at `source_key` and produce a new output object with the selected data available at `dest_key`.
 *
 * For example,
 *
 *    Given some input like: `{ a: { b: ["c"] } }`
 *
 *    And a `Get` adapter like: `Get.path("a.b[0]", "x")`
 *
 *    We'll produce an output like: `{ a: { b: ["c"] }, x: "c" }`
 */
export class Get extends AbstractAdapter implements Adapter.GetAdapter {
  declare source_key: string;
  override readonly transform = "get" as const;
  declare transform_args: Adapter.GetAdapterArgs;

  static path(path: Adapter.GetAdapterArgs["path"]) {
    // NOTE: source_key will always be the first part of the path.
    // eg.
    //    "a.b.c" => "a"
    //    "a[0].b.c" => "a"
    //    "a" => "a"
    const source = path.split(/[.\[]/)[0] as string;
    return new Get(source, null, { path });
  }
}

/**
 * `Pick` adapter will select some data by `keys` in an input object and produce an output object with only selected data at `keys`.
 *
 * For example,
 *
 *    Given some input like: `{ a: { b: 1 }, c: 2, d: 3 }`
 *
 *    And a `Pick` adapter like: `Pick.keys(["c", "d"])`
 *
 *    We'll produce an output like: `{ c: 2, d: 3 }`
 */
export class Pick extends AbstractAdapter implements Adapter.PickAdapter {
  declare source_key: null;
  declare dest_key: null;
  override readonly transform = "pick" as const;
  declare transform_args: Adapter.PickAdapterArgs;

  static keys(keys: string[]) {
    return new Pick(null, null, { keys });
  }
}

/**
 * `WrapInList` adapter will select some `source_key` in an input object and produce an output object that wraps that value in a list.
 *
 * For example,
 *
 *    Given some input like: `{ a: 1, b: 2 }`
 *
 *    And a `WrapInList` adapter like: `WrapInList.key("b", "c")`
 *
 *    We'll produce an output like: `{ a: 1, b: 2, c: [2] }`
 */
export class WrapInList
  extends AbstractAdapter
  implements Adapter.WrapInListAdapter
{
  declare source_key: string;
  override readonly transform = "wrap_in_list" as const;
  declare transform_args: Adapter.WrapInListAdapterArgs;

  static key(source_key: string) {
    return new WrapInList(source_key, null, {});
  }
}

export class Pop extends AbstractAdapter implements Adapter.PopAdapter {
  declare source_key: string;
  override readonly transform = "pop" as const;
  declare transform_args: Adapter.PopAdapterArgs;

  static key(source_key: string) {
    return new Pop(source_key, null, {});
  }
}

export class Concat extends AbstractAdapter implements Adapter.ConcatAdapter {
  declare source_key: string;
  override readonly transform = "concat" as const;
  declare transform_args: Adapter.ConcatAdapterArgs;

  static key(source_key: string, target: string) {
    return new Concat(source_key, null, { target });
  }
}

export class Prepend extends AbstractAdapter implements Adapter.PrependAdapter {
  declare source_key: string;
  override readonly transform = "prepend" as const;
  declare transform_args: Adapter.ConcatAdapterArgs;

  static key(source_key: string, target: string) {
    return new Prepend(source_key, null, { target });
  }
}

export class WrapInDict
  extends AbstractAdapter
  implements Adapter.WrapInDictAdapter
{
  declare source_key: string;
  override readonly transform = "wrap_in_dict" as const;
  declare transform_args: Adapter.WrapInDictAdapterArgs;

  static key(source_key: string, key: string) {
    return new WrapInDict(source_key, null, { key });
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

  export type PopAdapter = Schema.PopAdapter;
  export type PopAdapterArgs = Schema.PopAdapter["transform_args"];

  export type ConcatAdapter = Schema.ConcatAdapter;
  export type ConcatAdapterArgs = Schema.ConcatAdapter["transform_args"];

  export type PrependAdapter = Schema.PrependAdapter;
  export type PrependAdapterArgs = Schema.PrependAdapter["transform_args"];

  export type WrapInDictAdapter = Schema.WrapInDictAdapter;
  export type WrapInDictAdapterArgs =
    Schema.WrapInDictAdapter["transform_args"];
}
