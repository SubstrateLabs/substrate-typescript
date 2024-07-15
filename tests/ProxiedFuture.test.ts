import { expect, describe, test } from "vitest";
import { Future, Trace } from "substrate/Future";
import { Node } from "substrate/Node";
import { makeProxyFactory, isProxy, unproxy } from "substrate/ProxiedFuture";

class FooFuture extends Future<any> {}
class FooNode extends Node {}

const node = (id: string = "") => new FooNode({}, { id });

describe("ProxiedFuture", () => {
  describe("ProxyFactory", () => {
    test("makeProxy", () => {
      const proxyFactory = makeProxyFactory();
      const f = new FooFuture(new Trace([], node()));
      const p = proxyFactory.makeProxy(f);
      // Proxy is an instance of Future
      expect(p).instanceof(Future);
    });

    test("isProxy", () => {
      const proxyFactory = makeProxyFactory();
      const f = new FooFuture(new Trace([], node()));
      const p = proxyFactory.makeProxy(f);
      // We can detect whether the proxied Future is a proxy
      expect(isProxy(f)).toEqual(false);
      expect(isProxy(p)).toEqual(true);
    });
  });

  describe("Proxy", () => {
    test("unproxy (returns unproxied Future)", () => {
      const proxyFactory = makeProxyFactory();
      const f = new FooFuture(new Trace([], node()));
      const p = proxyFactory.makeProxy(f);
      const up = unproxy(p);
      expect(up).instanceof(Future);
      expect(isProxy(up)).toEqual(false);
    });

    test("arbitrary property access (. notation)", () => {
      const proxyFactory = makeProxyFactory();
      const f = new FooFuture(new Trace([], node("123")));
      const p = proxyFactory.makeProxy(f);

      // @ts-ignore (properties don't exist)
      const f1 = p.a.b.c;
      expect(f1).instanceof(Future);
      expect(isProxy(f1)).toEqual(true);

      // @ts-ignore ("virtual property" doesn't exist)
      const up = unproxy(f1);
      const json = up.toJSON();

      expect(json.directive).toEqual({
        op_stack: [
          { accessor: "attr", future_id: null, key: "a" },
          { accessor: "attr", future_id: null, key: "b" },
          { accessor: "attr", future_id: null, key: "c" },
        ],
        origin_node_id: "123",
        type: "trace",
      });
    });

    test("arbitrary property and index access (brackets)", () => {
      const proxyFactory = makeProxyFactory();
      const f = new FooFuture(new Trace([], node("123")));
      const p = proxyFactory.makeProxy(f);

      const f1 = p["a"][0][1];
      expect(f1).instanceof(Future);
      expect(isProxy(f1)).toEqual(true);

      const up = unproxy(f1);
      const json = up.toJSON();

      expect(json.directive).toEqual({
        op_stack: [
          { accessor: "attr", future_id: null, key: "a" },
          { accessor: "item", future_id: null, key: 0 },
          { accessor: "item", future_id: null, key: 1 },
        ],
        origin_node_id: "123",
        type: "trace",
      });
    });

    // TODO(liam): I'm not sure why this test doesn't work yet, but it does work in example code
    test.skip("using Future values as proxy accessors", () => {
      const proxyFactory = makeProxyFactory();
      const f = new FooFuture(new Trace([], node("123")));
      const p = proxyFactory.makeProxy(f);

      const a = new FooFuture(new Trace([], node("456")));

      // non index-types are illegal in the type system, so we're casting to any here.
      const f1 = p[a as any];

      expect(f1).instanceof(Future);
      expect(isProxy(f1)).toEqual(true);

      const up = unproxy(f1);
      const json = up.toJSON();

      expect(json.directive).toEqual({
        op_stack: [
          // @ts-ignore
          { accessor: "attr", future_id: a._id, key: null },
        ],
        origin_node_id: "123",
        type: "trace",
      });
    });
  });
});
