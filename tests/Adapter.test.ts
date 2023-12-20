import { expect, describe, test } from "vitest";
import {
  Get,
  WrapInList,
  Pick,
  Pop,
  Prepend,
  Concat,
  WrapInDict,
} from "substrate/Adapter";
import * as Schema from "substrate/Schema";

describe("Adapter", () => {
  describe("Get", () => {
    test(".path", () => {
      const a = Get.path("a.b.c").writeTo("b");
      expect(a).toBeInstanceOf(Get);
      expect(Schema.GetAdapterSchema.parse(a)).toEqual({
        source_key: "a",
        dest_key: "b",
        transform: "get",
        transform_args: { path: "a.b.c" },
      });
    });
  });

  describe("Pick", () => {
    test(".keys", () => {
      const a = Pick.keys(["a", "b"]);
      expect(a).toBeInstanceOf(Pick);
      expect(Schema.PickAdapterSchema.parse(a)).toEqual({
        source_key: null,
        dest_key: null,
        transform: "pick",
        transform_args: { keys: ["a", "b"] },
      });
    });
  });

  describe("WrapInList", () => {
    test(".key", () => {
      const a = WrapInList.key("a");
      expect(a).toBeInstanceOf(WrapInList);
      expect(Schema.WrapInListAdapterSchema.parse(a)).toEqual({
        source_key: "a",
        dest_key: null,
        transform: "wrap_in_list",
        transform_args: {},
      });
    });
  });

  describe("Pop", () => {
    test(".key", () => {
      const a = Pop.key("a").writeTo("b");
      expect(a).toBeInstanceOf(Pop);
      expect(Schema.PopAdapterSchema.parse(a)).toEqual({
        source_key: "a",
        dest_key: "b",
        transform: "pop",
        transform_args: {},
      });
    });
  });

  describe("Concat", () => {
    test(".key", () => {
      const a = Concat.key("a", "append this to 'a'");
      expect(a).toBeInstanceOf(Concat);
      expect(Schema.ConcatAdapterSchema.parse(a)).toEqual({
        source_key: "a",
        dest_key: null,
        transform: "concat",
        transform_args: { target: "append this to 'a'" },
      });
    });
  });

  describe("Prepend", () => {
    test(".key", () => {
      const a = Prepend.key("a", "prepend this to 'a'");
      expect(a).toBeInstanceOf(Prepend);
      expect(Schema.PrependAdapterSchema.parse(a)).toEqual({
        source_key: "a",
        dest_key: null,
        transform: "prepend",
        transform_args: { target: "prepend this to 'a'" },
      });
    });
  });

  describe("WrapInDict", () => {
    test(".key", () => {
      const a = WrapInDict.key("a", "dict-key");
      expect(a).toBeInstanceOf(WrapInDict);
      expect(Schema.WrapInDictAdapterSchema.parse(a)).toEqual({
        source_key: "a",
        dest_key: null,
        transform: "wrap_in_dict",
        transform_args: { key: "dict-key" },
      });
    });
  });
});
