import { expect, describe, test } from "vitest";
import { Get, WrapInList, Pick } from "substrate/Adapter";
import * as Schema from "substrate/Schema";

describe("Adapter", () => {
  describe("Get", () => {
    test("can construct a valid Get Adapter", () => {
      const a = new Get({ source: "a", path: "a.b.c" });
      expect(a).toBeInstanceOf(Get);
      expect(Schema.GetAdapterSchema.parse(a)).toEqual({
        source_key: "a",
        dest_key: null,
        transform: "get",
        transform_args: { path: "a.b.c" },
      });
    });

    test(".path", () => {
      const a = Get.path("a.b.c");
      expect(a).toBeInstanceOf(Get);
      expect(Schema.GetAdapterSchema.parse(a)).toEqual({
        source_key: "a",
        dest_key: null,
        transform: "get",
        transform_args: { path: "a.b.c" },
      });
    });
  });

  describe("Pick", () => {
    test("can construct a valid Pick Adapter", () => {
      const a = new Pick({ keys: ["a", "b"] });
      expect(a).toBeInstanceOf(Pick);
      expect(Schema.PickAdapterSchema.parse(a)).toEqual({
        source_key: null,
        dest_key: null,
        transform: "pick",
        transform_args: { keys: ["a", "b"] },
      });
    });

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
    test("can construct a valid WrapInList Adapter", () => {
      const a = new WrapInList({ source: "a" });
      expect(a).toBeInstanceOf(WrapInList);
      expect(Schema.WrapInListAdapterSchema.parse(a)).toEqual({
        source_key: "a",
        dest_key: null,
        transform: "wrap_in_list",
        transform_args: {},
      });
    });

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
});
