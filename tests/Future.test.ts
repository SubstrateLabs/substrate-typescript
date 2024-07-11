// including polyfill for node16 support
import "substrate/nodejs/polyfill";

import { expect, describe, test } from "vitest";
import {
  Future,
  Trace,
  StringConcat,
  concat,
  interpolate,
} from "substrate/Future";
import { Node } from "substrate/Node";
import { SubstrateResponse } from "substrate/SubstrateResponse";

class FooFuture extends Future<any> {}
class FooNode extends Node {}

const node = (id: string = "") => new FooNode({}, { id });

// Helper that makes a Node and sets it's output with a fake SubstrateResponse
const staticNode = (output: any) => {
  const node = new FooNode({});
  // NOTE: request not being sent, but we need to provide a valid URI here to construct a Request
  const req = new Request("http://127.0.0.1");

  const res = new SubstrateResponse(req, new Response(), {
    data: { [node.id]: output },
  });

  // @ts-expect-error (protected prop response)
  node.response = res;
  return node;
};

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
    const a = new Future<string>(new Trace([], node()));
    const b = new Future<string>(new Trace([], node()));
    const c = new Future<string>(new StringConcat([a, b]));
    const f = new FooFuture(new StringConcat([c, "d"]));

    // @ts-expect-error (accessing protected property)
    expect(f.referencedFutures()).toEqual([c, a, b]);
  });

  describe("Trace (Directive)", () => {
    test(".next", () => {
      const s = new Future<string>(new Trace([], node("123")));
      const n = new Future<number>(new Trace([], node("456")));
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
      const fs = new Future<string>(new Trace([], staticNode("b")));
      const fn = new Future<number>(new Trace([], staticNode(1)));
      const n2 = staticNode({ a: [{ b: [undefined, "result2"] }] });
      const t2 = new Trace(["a", 0, fs, fn], n2);
      expect(t2.result()).resolves.toEqual("result2");
    });

    test(".toJSON", () => {
      const s = new Future<string>(new Trace([], node()), "123");
      const n = new Future<number>(new Trace([], node()), "456");
      // @ts-ignore (protected prop: _runtimeHint)0
      n._runtimeHint = "number"; // using runtimeHint to specify we'd like to access via "item"
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
      const s = new Future<string>(new Trace([], node()));
      const n = new Future<number>(new Trace([], node()));
      const d = new Trace(["a", 1, s, n], node("NodeId"));

      expect(d.referencedFutures()).toEqual([s, n]);
    });
  });

  describe("StringConcat (Directive)", () => {
    test(".next", () => {
      const s = new Future<string>(new Trace([], node()));
      const s2 = new Future<string>(new Trace([], node()));
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
      const fs = new Future<string>(new Trace([], staticNode("b")));
      const s2 = new StringConcat(["a", fs]);
      expect(s2.result()).resolves.toEqual("ab");
    });

    test(".toJSON", () => {
      const s = new Future<string>(new Trace([], node()), "123");
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
      const a = new Future<string>(new Trace([], node()));
      const b = new Future<string>(new Trace([], node()));
      const c = new Future<string>(new StringConcat([a, b]));
      const d = new StringConcat([c, "d"]);

      expect(d.referencedFutures()).toEqual([c, a, b]);
    });
  });

  describe("Strings", () => {
    test("concat", () => {
      const s1 = concat("a");
      const s2 = concat(s1, "b", "c");
      expect(s2).toBeInstanceOf(Future);
      // @ts-expect-error (protected access)
      expect(s2._directive).toEqual(new StringConcat([s1, "b", "c"]));
    });

    test("interpolate", async () => {
      const world = "world";
      const nice = "nice";
      const i1 = interpolate`hello ${world}, you look ${nice} today.`;

      // @ts-expect-error
      expect(i1._result()).resolves.toEqual(
        "hello world, you look nice today.",
      );

      const f1 = concat("texas", " ", "sun");
      const f2 = concat("texas", " ", "moon");
      const i2 = interpolate`~~ ${f1} x ${f2} ~~`;

      // @ts-expect-error
      expect(i2._result()).resolves.toEqual("~~ texas sun x texas moon ~~");
    });
  });
});
