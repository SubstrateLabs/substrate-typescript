import "substrate/nodejs/polyfill";

import { expect, describe, test } from "vitest";
import {
  Future,
  FutureString,
  FutureNumber,
  FutureArray,
  Trace,
  StringConcat,
  ArrayConcat,
  ArrayPluck,
} from "substrate/Future";
import { Node } from "substrate/Node";
import { SubstrateResponse } from "substrate/SubstrateResponse";
import { RequestCompleted } from "substrate/Mailbox";

class FooFuture extends Future { }

const node = (id: string = "") => new Node({}, { id });

// Helper that makes a Node and sets it's output with a fake SubstrateResponse
const staticNode = (output: any) => {
  const node = new Node({});

  const res = new SubstrateResponse(new Response(), {
    data: { [node.id]: output },
  });

  // @ts-expect-error (protected prop mailbox)
  node.mailbox.send(new RequestCompleted(res));
  return node;
};

class TestFutureArray extends FutureArray {
  override at(index: number) {
    return new FutureString(new Trace([index], node()));
  }
}

describe("Future", () => {
  test(".toJSON", () => {
    const d = new Trace([], node("a"));
    const f = new FooFuture(d, "123");
    expect(f.toJSON()).toEqual({
      id: "123",
      directive: d.toJSON(),
    });
  });

  test(".referencedFutures", () => {
    const a = new FutureString(new Trace([], node()));
    const b = new FutureString(new Trace([], node()));
    const c = new FutureString(new StringConcat([a, b]));
    const f = new FooFuture(new StringConcat([c, "d"]));

    // @ts-expect-error (accessing protected property)
    expect(f.referencedFutures()).toEqual([c, a, b]);
  });

  describe("Trace (Directive)", () => {
    test(".next", () => {
      const s = new FutureString(new Trace([], node("123")));
      const n = new FutureNumber(new Trace([], node("456")));
      const d = new Trace(["a", 1, s, n], node("NodeId"));
      const d2 = d.next("b", 2);

      expect(d2.items).toEqual(["a", 1, s, n, "b", 2]);
      expect(d2.originNode.id).toEqual("NodeId");
    });

    test(".result", async () => {
      // when the trace is empty, it resovles to the node's output
      const n0 = staticNode("hello");
      const t0 = new Trace([], n0);
      expect(t0.result()).resolves.toEqual("hello");

      // when the trace only includes primitive values
      const n1 = staticNode({ a: ["result1"] });
      const t1 = new Trace(["a", 0], n1);
      expect(t1.result()).resolves.toEqual("result1");

      // when the trace contains futures, they get resolved
      const fs = new FutureString(new Trace([], staticNode("b")));
      const fn = new FutureNumber(new Trace([], staticNode(1)));
      const n2 = staticNode({ a: [{ b: [undefined, "result2"] }] });
      const t2 = new Trace(["a", 0, fs, fn], n2);
      expect(t2.result()).resolves.toEqual("result2");
    });

    test(".toJSON", () => {
      const s = new FutureString(new Trace([], node()), "123");
      const n = new FutureNumber(new Trace([], node()), "456");
      const d = new Trace(["a", 1, s, n], node("NodeId"));

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
      const s = new FutureString(new Trace([], node()));
      const n = new FutureNumber(new Trace([], node()));
      const d = new Trace(["a", 1, s, n], node("NodeId"));

      expect(d.referencedFutures()).toEqual([s, n]);
    });
  });

  describe("StringConcat (Directive)", () => {
    test(".next", () => {
      const s = new FutureString(new Trace([], node()));
      const s2 = new FutureString(new Trace([], node()));
      const d = new StringConcat(["a", s]);
      const d2 = d.next("b", s2);

      expect(d2.items).toEqual(["a", s, "b", s2]);
    });

    test(".result", async () => {
      // when the items are empty
      const s0 = new StringConcat([]);
      expect(s0.result()).resolves.toEqual("");

      // when the items only includes primitive values
      const s1 = new StringConcat(["a", "b"]);
      expect(s1.result()).resolves.toEqual("ab");

      // when the items includes primitive values and futures
      const fs = new FutureString(new Trace([], staticNode("b")));
      const s2 = new StringConcat(["a", fs]);
      expect(s2.result()).resolves.toEqual("ab");
    });

    test(".toJSON", () => {
      const s = new FutureString(new Trace([], node()), "123");
      const d = new StringConcat(["a", s]);

      expect(d.toJSON()).toEqual({
        type: "string-concat",
        items: [StringConcat.Item.string("a"), StringConcat.Item.future("123")],
      });
    });

    test(".referencedFutures", () => {
      const a = new FutureString(new Trace([], node()));
      const b = new FutureString(new Trace([], node()));
      const c = new FutureString(new StringConcat([a, b]));
      const d = new StringConcat([c, "d"]);

      expect(d.referencedFutures()).toEqual([c, a, b]);
    });
  });

  describe("ArrayConcat (Directive)", () => {
    test(".next", () => {
      const fa = new TestFutureArray(new Trace([], node()));
      const fs = new FutureString(new Trace([], node()));
      const d = new ArrayConcat([["a", "b"]]);
      const d2 = d.next(fa).next(fs);

      expect(d2.items).toEqual([["a", "b"], fa, fs]);
    });

    test(".result", async () => {
      // when the items are empty
      const a0 = new ArrayConcat([]);
      expect(a0.result<string>()).resolves.toEqual([]);

      // when the items only includes primitive values
      const a1 = new ArrayConcat([["a"], ["b"]]);
      expect(a1.result<string>()).resolves.toEqual(["a", "b"]);

      // when the items includes primitive values and futures, scalars and arrays
      const fs = new FutureString(new Trace([], staticNode("c")));
      const fa = new TestFutureArray(new Trace([], staticNode(["d", "e"])));
      const a2 = new ArrayConcat([["a"], "b", fs, fa]);
      expect(a2.result<string>()).resolves.toEqual(["a", "b", "c", "d", "e"]);
    });

    test(".toJSON", () => {
      const fs = new FutureString(new Trace([], node()), "FutureStringId");
      const fa = new TestFutureArray(new Trace([], node()), "FutureArrayId");
      const a = new ArrayConcat([["a"], "b", fs, fa]);

      expect(a.toJSON()).toEqual({
        type: "array-concat",
        items: [
          ArrayConcat.Item.static(["a"]),
          ArrayConcat.Item.static("b"),
          ArrayConcat.Item.future("FutureStringId"),
          ArrayConcat.Item.future("FutureArrayId"),
        ],
      });
    });

    test(".referencedFutures", () => {
      const a = new FutureString(new Trace([], node()));
      const b = new FutureString(new Trace([], node()));
      const c = new FutureString(new StringConcat([a, b]));
      const d = new FutureString(new Trace([], node()));
      const e = new TestFutureArray(new Trace([d], node()));

      const f = new ArrayConcat([["a"], "b", e, c]);
      expect(f.referencedFutures()).toEqual([e, d, c, a, b]);
    });
  });

  describe("ArrayPluck (Directive)", () => {
    test(".next", () => {
      const fa = new TestFutureArray(new Trace([], node()));
      const fs = new FutureString(new Trace([], node()));
      const d = new ArrayPluck(["a", "b"], fa);
      const d2 = d.next(fs);

      expect(d2.items).toEqual(["a", "b", fs]);
    });

    test(".result", async () => {
      const arr = new TestFutureArray(
        new Trace([], staticNode([{ a: [1] }, { a: [2] }])),
      );

      // when the items are empty (it selects value at root path for each)
      const a0 = new ArrayPluck([], arr);
      expect(a0.result()).resolves.toEqual([{ a: [1] }, { a: [2] }]);

      // when the items only includes primitive values
      const a1 = new ArrayPluck(["a", 0], arr);
      expect(a1.result()).resolves.toEqual([1, 2]);

      // when the items includes futures
      const fs = new FutureString(new Trace([], staticNode("a")));
      const a2 = new ArrayPluck([fs, 0], arr);
      expect(a2.result()).resolves.toEqual([1, 2]);
    });

    test(".toJSON", () => {
      const arr = new TestFutureArray(
        new Trace([], staticNode([{ a: { b: [1] } }])), "FutureArrayId"
      );

      const fs = new FutureString(new Trace([], staticNode("a")), "FutureStringId");
      const a = new ArrayPluck([fs, "b", 0], arr);

      expect(a.toJSON()).toEqual({
        type: "array-pluck",
        op_stack: [
          ArrayPluck.Operation.future("attr", "FutureStringId"),
          ArrayPluck.Operation.key("attr", "b"),
          ArrayPluck.Operation.key("item", 0),
        ],
        target_future_id: "FutureArrayId",
      });
    });

    test(".referencedFutures", () => {
      const arr = new TestFutureArray(
        new Trace([], staticNode([{ a: { b: [1] } }])), "FutureArrayId"
      );
      const fs = new FutureString(new Trace([], staticNode("a")), "FutureStringId");

      const f = new ArrayPluck([fs, "b", 0], arr);
      expect(f.referencedFutures()).toEqual([arr, fs]);
    });
  });

  describe("FutureString", () => {
    test(".concat (static)", () => {
      const s = FutureString.concat("a");
      expect(s).toBeInstanceOf(FutureString);
      // @ts-expect-error (protected access)
      expect(s.directive).toEqual(new StringConcat(["a"]));
    });

    test(".concat (instance)", () => {
      const s1 = FutureString.concat("a");
      const s2 = s1.concat("b", "c");
      expect(s2).toBeInstanceOf(FutureString);
      // @ts-expect-error (protected access)
      expect(s2.directive).toEqual(new StringConcat([s1, "b", "c"]));
    });

    test(".interpolate", async () => {
      const world = "world";
      const nice = "nice";
      const i1 = FutureString.interpolate`hello ${world}, you look ${nice} today.`;

      expect(i1.result()).resolves.toEqual("hello world, you look nice today.");

      const f1 = FutureString.concat("texas", " ", "sun");
      const f2 = FutureString.concat("texas", " ", "moon");
      const i2 = FutureString.interpolate`~~ ${f1} x ${f2} ~~`;

      expect(i2.result()).resolves.toEqual("~~ texas sun x texas moon ~~");
    });
  });

  describe("FutureArray", () => {
    test(".concat (static)", () => {
      const a = FutureArray.concat("a", ["b"]);
      expect(a).toBeInstanceOf(FutureArray);
      // @ts-expect-error (protected access)
      expect(a.directive).toEqual(new ArrayConcat(["a", ["b"]]));
    });

    test(".concat (instance)", () => {
      const a1 = FutureArray.concat("a");
      const a2 = a1.concat("b", ["c"]);
      expect(a2).toBeInstanceOf(FutureArray);

      // @ts-expect-error (protected access)
      expect(a2.directive).toEqual(new ArrayConcat([a1, "b", ["c"]]));
    });

    test(".pluck (static)", () => {
      const arr = FutureArray.concat({ a: 1 } as any);
      const p = FutureArray.pluck(["a"], arr);
      expect(p).toBeInstanceOf(FutureArray);
      // @ts-expect-error (protected access)
      expect(p.directive).toEqual(new ArrayPluck(["a"], arr));
    });

    test(".pluck (instance)", () => {
      const arr = FutureArray.concat({ a: 1 } as any);
      const p = arr.pluck("a");
      expect(p).toBeInstanceOf(FutureArray);
      // @ts-expect-error (protected access)
      expect(p.directive).toEqual(new ArrayPluck(["a"], arr));

      // when using "json path" synxtax
      const arr2 = FutureArray.concat({ a: { b: [1] } } as any);
      const p2 = arr2.pluck("a.b[0]");
      expect(p2).toBeInstanceOf(FutureArray);
      // @ts-expect-error (protected access)
      expect(p2.directive).toEqual(new ArrayPluck(["a", "b", 0], arr2));
      expect(p2.result()).resolves.toEqual([1]);
    });
  });
});
