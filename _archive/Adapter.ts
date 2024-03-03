import * as Schema from "substrate/API/Schema";

type Keys = { source_key?: string | null; dest_key?: string | null };

abstract class AbstractAdapter<T extends Adapter.Adapter> {
  source_key: T["source_key"];
  dest_key: T["dest_key"];
  readonly transform: T["transform"];
  transform_args: T["transform_args"];

  constructor(args: T["transform_args"], keys?: Keys) {
    this.source_key = keys?.source_key ?? null;
    this.dest_key = keys?.dest_key ?? null;
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
 *    And a `Get` adapter like: `new Get({ path: "a.b[0]" }, { dest_key: "x" })`
 *    Alternatively constructed like: `get({ path: "a.b[0]" }).to("x")
 *
 *    We'll produce an output like: `{ a: { b: ["c"] }, x: "c" }`
 */
export class Get extends AbstractAdapter<Adapter.Get> implements Adapter.Get {
  override readonly transform = "get" as const;
}

export function get(args: Adapter.Get["transform_args"], keys?: Keys) {
  // NOTE: source_key will always be the first part of the path, if keys.source_key is not explicitly provided we can use the path.
  // NOTE: it shouldn't be possible for the first part of the path to be different than keys.source_key
  //
  // eg.
  //    "a.b.c" => "a"
  //    "a[0].b.c" => "a"
  //    "a" => "a"
  return new Get(args, {
    ...keys,
    source_key: keys?.source_key ?? (args.path.split(/[.\[]/)[0] as string),
  });
}

/**
 * `Pick` adapter will select some data by `keys` in an input object and produce an output object with only selected data at `keys`.
 *
 * For example,
 *
 *    Given some input like: `{ a: { b: 1 }, c: 2, d: 3 }`
 *
 *    And a `Pick` adapter like: `new Pick({ keys: ["c", "d"] })`
 *    Alternatively constructed like: `pick({ keys: ["c", "d"] })`
 *
 *    We'll produce an output like: `{ c: 2, d: 3 }`
 */
export class Pick
  extends AbstractAdapter<Adapter.Pick>
  implements Adapter.Pick
{
  override readonly transform = "pick" as const;
}

export function pick(args: Adapter.Pick["transform_args"]) {
  return new Pick(args, {});
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
  extends AbstractAdapter<Adapter.WrapInList>
  implements Adapter.WrapInList
{
  override readonly transform = "wrap_in_list" as const;
}

export function wrapInList(source_key: Adapter.WrapInList["source_key"]) {
  return new WrapInList({}, { source_key });
}

export class Pop extends AbstractAdapter<Adapter.Pop> implements Adapter.Pop {
  override readonly transform = "pop" as const;
}

export function pop(source_key: Adapter.WrapInList["source_key"]) {
  return new Pop({}, { source_key });
}

export class Concat
  extends AbstractAdapter<Adapter.Concat>
  implements Adapter.Concat
{
  override readonly transform = "concat" as const;
}

export function concat(
  source_key: Adapter.WrapInList["source_key"],
  args: Adapter.Concat["transform_args"],
) {
  return new Concat(args, { source_key });
}

export class Prepend
  extends AbstractAdapter<Adapter.Prepend>
  implements Adapter.Prepend
{
  override readonly transform = "prepend" as const;
}

export function prepend(
  source_key: Adapter.WrapInList["source_key"],
  args: Adapter.Prepend["transform_args"],
) {
  return new Prepend(args, { source_key });
}

export class WrapInDict
  extends AbstractAdapter<Adapter.WrapInDict>
  implements Adapter.WrapInDict
{
  override readonly transform = "wrap_in_dict" as const;
}

export function wrapInDict(
  source_key: Adapter.WrapInDict["source_key"],
  args: Adapter.WrapInDict["transform_args"],
) {
  return new WrapInDict(args, { source_key });
}

export namespace Adapter {
  export type Adapter = Schema.Adapter;

  export type Get = Schema.GetAdapter;

  export type WrapInList = Schema.WrapInListAdapter;

  export type Pick = Schema.PickAdapter;

  export type Pop = Schema.PopAdapter;

  export type Concat = Schema.ConcatAdapter;

  export type Prepend = Schema.PrependAdapter;

  export type WrapInDict = Schema.WrapInDictAdapter;
}
