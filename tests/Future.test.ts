import { expect, describe, test } from "vitest";
import {
  Future,
  FutureString,
  FutureNumber,
  Trace,
  StringConcat,
} from "substrate/Future";

class FooFuture extends Future {}

describe("Future", () => {
  test(".toJSON", () => {
    const d = new Trace([], "a");
    const f = new FooFuture(d, "123");
    expect(f.toJSON()).toEqual({
      id: "123",
      directive: d.toJSON(),
    });
  });

  test(".referencedFutures", () => {
    const a = new FutureString(new Trace([], ""));
    const b = new FutureString(new Trace([], ""));
    const c = new FutureString(new StringConcat([a, b]));
    const f = new FooFuture(new StringConcat([c, "d"]));

    // @ts-expect-error (accessing protected property)
    expect(f.referencedFutures()).toEqual([c, a, b]);
  });

  describe("Trace (Directive)", () => {
    test(".next", () => {
      const s = new FutureString(new Trace([], ""), "123");
      const n = new FutureNumber(new Trace([], ""), "456");
      const d = new Trace(["a", 1, s, n], "NodeId");
      const d2 = d.next("b", 2);

      expect(d2.items).toEqual(["a", 1, s, n, "b", 2]);
      expect(d2.originNodeId).toEqual("NodeId");
    });

    test(".toJSON", () => {
      const s = new FutureString(new Trace([], ""), "123");
      const n = new FutureNumber(new Trace([], ""), "456");
      const d = new Trace(["a", 1, s, n], "NodeId");

      expect(d.toJSON()).toEqual({
        type: "trace",
        origin_node_id: "NodeId",
        op_stack: [
          Trace.Operation.key("attr", "a"),
          Trace.Operation.key("item", 1),
          Trace.Operation.future("attr", "123"),
          Trace.Operation.future("item", "456"),
        ],
      });
    });

    test(".referencedFutures", () => {
      const s = new FutureString(new Trace([], ""));
      const n = new FutureNumber(new Trace([], ""));
      const d = new Trace(["a", 1, s, n], "NodeId");

      expect(d.referencedFutures()).toEqual([s, n]);
    });
  });

  describe("StringConcat (Directive)", () => {
    test(".next", () => {
      const s = new FutureString(new Trace([], ""));
      const s2 = new FutureString(new Trace([], ""));
      const d = new StringConcat(["a", s]);
      const d2 = d.next("b", s2);

      expect(d2.items).toEqual(["a", s, "b", s2]);
    });

    test(".toJSON", () => {
      const s = new FutureString(new Trace([], ""), "123");
      const d = new StringConcat(["a", s]);

      expect(d.toJSON()).toEqual({
        type: "string-concat",
        items: [
          StringConcat.Concatable.string("a"),
          StringConcat.Concatable.future("123"),
        ],
      });
    });

    test(".referencedFutures", () => {
      const a = new FutureString(new Trace([], ""));
      const b = new FutureString(new Trace([], ""));
      const c = new FutureString(new StringConcat([a, b]));
      const d = new StringConcat([c, "d"]);

      expect(d.referencedFutures()).toEqual([c, a, b]);
    });
  });

  describe("FutureString", () => {
    test(".concat (static)", () => {
      const s = FutureString.concat("a");
      expect(s).toBeInstanceOf(FutureString);
      // @ts-expect-error (protected access)
      expect(s.directive).toEqual(new StringConcat(["a"]));
    });

    test(".concat", () => {
      const s1 = FutureString.concat("a");
      const s2 = s1.concat("b", "c");
      expect(s2).toBeInstanceOf(FutureString);
      // @ts-expect-error (protected access)
      expect(s2.directive).toEqual(new StringConcat([s1, "b", "c"]));
    });
  });
});
