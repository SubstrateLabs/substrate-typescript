import { expect, describe, test } from "vitest";
import * as Adapter from "substrate/Adapter";
import * as Schema from "substrate/Schema";

describe("Adapter", () => {
  test("get", () => {
    const a = Adapter.get({ path: "a.b.c" }).to("b");
    expect(Schema.GetAdapterSchema.parse(a)).toEqual({
      source_key: "a",
      dest_key: "b",
      transform: "get",
      transform_args: { path: "a.b.c" },
    });
  });

  test("pick", () => {
    const a = Adapter.pick({ keys: ["a", "b"] });
    expect(Schema.PickAdapterSchema.parse(a)).toEqual({
      source_key: null,
      dest_key: null,
      transform: "pick",
      transform_args: { keys: ["a", "b"] },
    });
  });

  test("wrapInList", () => {
    const a = Adapter.wrapInList("a").to("b");
    expect(Schema.WrapInListAdapterSchema.parse(a)).toEqual({
      source_key: "a",
      dest_key: "b",
      transform: "wrap_in_list",
      transform_args: {},
    });
  });

  test("pop", () => {
    const a = Adapter.pop("a").to("b");
    expect(Schema.PopAdapterSchema.parse(a)).toEqual({
      source_key: "a",
      dest_key: "b",
      transform: "pop",
      transform_args: {},
    });
  });

  test("concat", () => {
    const a = Adapter.concat("a", { target: "target" }).to("b");
    expect(Schema.ConcatAdapterSchema.parse(a)).toEqual({
      source_key: "a",
      dest_key: "b",
      transform: "concat",
      transform_args: { target: "target" },
    });
  });

  test("prepend", () => {
    const a = Adapter.prepend("a", { target: "target" }).to("b");
    expect(Schema.PrependAdapterSchema.parse(a)).toEqual({
      source_key: "a",
      dest_key: "b",
      transform: "prepend",
      transform_args: { target: "target" },
    });
  });

  test("wrapInDict", () => {
    const a = Adapter.wrapInDict("a", { key: "key" }).to("b");
    expect(Schema.WrapInDictAdapterSchema.parse(a)).toEqual({
      source_key: "a",
      dest_key: "b",
      transform: "wrap_in_dict",
      transform_args: { key: "key" },
    });
  });
});
