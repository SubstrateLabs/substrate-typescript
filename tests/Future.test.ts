import { expect, describe, test } from "vitest";
import * as Future from "substrate/Future";

describe("Proxy, Future", () => {
  describe("Basic Proxy and Future use", () => {
    test("Can create a proxy, get it's target, & test whether it's a proxy or not", () => {
      const ctx = Future.makeContext();

      const t = new ctx.Trace({ id: "a" });
      const p = ctx.makeProxy(t);

      // NOTE: this will fail as expected, but with a call stack exceeded error due to how the proxying is working.
      // expect(p).toBe(t);

      expect(p).not.toBe(t);
      expect(ctx.unproxy(p)).toBe(t);
      expect(ctx.isProxy(p)).toBe(true);
      expect(ctx.isProxy(t)).toBe(false);
    });

    test("Can access primative properties on proxy arbitrarily", () => {
      const ctx = Future.makeContext();

      const t = new ctx.Trace({ id: "a" });
      const p = ctx.makeProxy(t);

      const p1 = p.a.b;
      const p1t = ctx.unproxy(p1);
      expect(p1t.id).not.toEqual(t.id);
      expect(p1t.props).toEqual(["a", "b"]);

      const p2 = p.a.b.c;
      const p2t = ctx.unproxy(p2);
      expect(p2t.id).not.toEqual(t.id);
      expect(p2t.props).toEqual(["a", "b", "c"]);

      const p3 = p.a["d"];
      const p3t = ctx.unproxy(p3);
      expect(p3t.id).not.toEqual(t.id);
      expect(p3t.props).toEqual(["a", "d"]);

      const p4 = p.a[123];
      const p4t = ctx.unproxy(p4);
      expect(p4t.id).not.toEqual(t.id);
      expect(p4t.props).toEqual(["a", "123"]);
    });

    test("Can access properties on proxy via `Trace`", () => {
      const ctx = Future.makeContext();

      const ta = new ctx.Trace({ id: "a" });
      const tb = new ctx.Trace({ id: "b" });

      const pa = ctx.makeProxy(ta);

      // @ts-expect-error: Type cannot be used as an index type.
      const p1 = pa.a.b[tb];
      expect(ctx.unproxy(p1).props).toEqual(["a", "b", tb]);
    });

    test("Can access properties on proxy via `StringConcat` (w/ static items)", () => {
      const ctx = Future.makeContext();

      const t = new ctx.Trace({ id: "a" });
      const p = ctx.makeProxy(t);
      const s = new ctx.StringConcat(["a", "e"]) as any as Future.Future<string> & string;

      const p1 = p.f.g[s];
      expect(ctx.unproxy(p1).props).toEqual(["f", "g", s]);
    });

    test("Can access properties on proxy via `StringConcat` (w/ nested StringConcats)", () => {
      const ctx = Future.makeContext();

      const t = new ctx.Trace({ id: "a" });
      const p = ctx.makeProxy(t);
      const s1 = new ctx.StringConcat(["a", "e"]);
      const s2 = new ctx.StringConcat([s1, s1]);
      const s3 = new ctx.StringConcat([s1, s2]);

      // @ts-expect-error: Type cannot be used as an index type.
      const p1 = p.f.g[s3];
      const t1 = ctx.unproxy(p1);
      expect(t1.props).toEqual(["f", "g", s3]);
    });

    test("Can access properties on proxy via `StringConcat` (w/ proxy items)", () => {
      const table = new Future.LookupTable();
      const ctx = Future.makeContext(table);

      const ta = new ctx.Trace({ id: "a" });
      const pa = ctx.makeProxy(ta);

      const tb = new ctx.Trace({ id: "b" });
      const pb = ctx.makeProxy(tb);

      const s = new ctx.StringConcat([pb.a, pb.b]);

      // @ts-expect-error: Type cannot be used as an index type.
      const p = pa.x.y[s];
      const t = ctx.unproxy(p);

      expect(t.props).toEqual(["x", "y", s]);
    });

    test("Can access properties on proxy via `Proxy` instance", () => {
      const ctx = Future.makeContext();

      const ta = new ctx.Trace({ id: "a" });
      const pa = ctx.makeProxy(ta);

      const tb = new ctx.Trace({ id: "b" });
      const pb = ctx.makeProxy(tb);

      const p1 = pa.a.b.c[pb];
      expect(ctx.unproxy(p1).props).toEqual(["a", "b", "c", tb]);

      const p2 = pb.d.e.f[p1];
      expect(ctx.unproxy(p2).props).toEqual(["d", "e", "f", ctx.unproxy(p1)]);
    });
  });

  describe("Trace", () => {
    test(".toJSON", () => {
      const ctx = Future.makeContext();

      const ta = new ctx.Trace({ id: "a" });
      const pa = ctx.makeProxy(ta);

      const tb = new ctx.Trace({ id: "b" });
      const pb = ctx.makeProxy(tb);

      const p = pa.a.b.c[pb];
      const t = ctx.unproxy(p);

      const result = t.toJSON();
      expect(result).toEqual({
        id: t.id,
        directive: {
          type: "trace",
          origin_node_id: t.node.id,
          op_stack: [
            ctx.Trace.TraceOperation.attr("a"),
            ctx.Trace.TraceOperation.attr("b"),
            ctx.Trace.TraceOperation.attr("c"),
            ctx.Trace.TraceOperation.future(ctx.unproxy(pb).id),
          ],
        },
      });
    });

    test(".referencedFutures", () => {
      const ctx = Future.makeContext();

      const ta = new ctx.Trace({ id: "a" });
      const pa = ctx.makeProxy(ta);

      const tb = new ctx.Trace({ id: "b" });
      const pb = ctx.makeProxy(tb);

      const tc = new ctx.Trace({ id: "c" });
      const pc = ctx.makeProxy(tc);

      const p = pc[pa][pb];
      const t = ctx.unproxy(p);

      const result = t.referencedFutures();
      expect(result).toEqual([ta.toJSON(), tb.toJSON()]);
    });
  });

  describe("StringConcat", () => {
    test(".toJSON", () => {
      const ctx = Future.makeContext();

      const t1 = new ctx.Trace({ id: "id" });
      const p = ctx.makeProxy(t1);
      const t2 = p.x.y.z;

      const s1 = new ctx.StringConcat(["a", "b"]);
      const s2 = new ctx.StringConcat([s1, "c", t2]);

      const result = s2.toJSON();
      expect(result).toEqual({
        id: s2.id,
        directive: {
          type: "string-concat",
          items: [
            ctx.StringConcat.Concatable.future(s1.id),
            ctx.StringConcat.Concatable.string("c"),
            ctx.StringConcat.Concatable.future(ctx.unproxy(t2).id),
          ],
        },
      });
    });

    test(".referencedFutures", () => {
      const ctx = Future.makeContext();

      const t1 = new ctx.Trace({ id: "id" });
      const p = ctx.makeProxy(t1);
      const t2 = p.x.y.z;
      const t3 = p.a.b.c;

      const s1 = new ctx.StringConcat(["a", t2]);
      const s2 = new ctx.StringConcat([s1, "c", t3]);

      const result = s2.referencedFutures();
      expect(result).toEqual([
        s1.toJSON(),
        ctx.unproxy(t2).toJSON(),
        ctx.unproxy(t3).toJSON(),
      ]);
    });
  });
});
