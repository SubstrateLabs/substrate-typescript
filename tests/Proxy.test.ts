import { expect, describe, test } from "vitest";
import * as Proxy from "substrate/Proxy";

describe("Proxy, Future (Trace, StringConcat)", () => {
  describe("Basic proxy use", () => {
    test("Can create a proxy, get it's target, & test whether it's a proxy or not", () => {
      const ctx = Proxy.makeContext();

      const t = new ctx.Trace({ id: "a" });
      const p = ctx.makeProxy(t);

      // NOTE: this will fail as expected, but with a call stack exceeded error due to how the proxying is working.
      // expect(p).toBe(t);

      expect(p).not.toBe(t);
      expect(ctx.unProxy(p)).toBe(t);
      expect(ctx.isProxy(p)).toBe(true);
      expect(ctx.isProxy(t)).toBe(false);
    });

    test("Can access primative properties on proxy arbitrarily", () => {
      const ctx = Proxy.makeContext();

      const t = new ctx.Trace({ id: "a" });
      const p = ctx.makeProxy(t);

      const p1 = p.a.b;
      const p1t = ctx.unProxy(p1);
      expect(p1t.id).not.toEqual(t.id);
      expect(p1t.props).toEqual(["a", "b"]);

      const p2 = p.a.b.c;
      const p2t = ctx.unProxy(p2);
      expect(p2t.id).not.toEqual(t.id);
      expect(p2t.props).toEqual(["a", "b", "c"]);

      const p3 = p.a["d"];
      const p3t = ctx.unProxy(p3);
      expect(p3t.id).not.toEqual(t.id);
      expect(p3t.props).toEqual(["a", "d"]);

      const p4 = p.a[123];
      const p4t = ctx.unProxy(p4);
      expect(p4t.id).not.toEqual(t.id);
      expect(p4t.props).toEqual(["a", "123"]);
    });

    test("Can access properties on proxy via `Future`", () => {
      const ctx = Proxy.makeContext();

      const f = new ctx.Future();

      const t = new ctx.Trace({ id: "a" });
      const p = ctx.makeProxy(t);

      // @ts-expect-error: Type cannot be used as an index type.
      const p1 = p.a.b[f];
      expect(ctx.unProxy(p1).props).toEqual(["a", "b", f]);
    });

    test("Can access properties on proxy via `Trace`", () => {
      const ctx = Proxy.makeContext();

      const ta = new ctx.Trace({ id: "a" });
      const tb = new ctx.Trace({ id: "b" });

      const pa = ctx.makeProxy(ta);

      // @ts-expect-error: Type cannot be used as an index type.
      const p1 = pa.a.b[tb];
      expect(ctx.unProxy(p1).props).toEqual(["a", "b", tb]);
    });

    test("Can access properties on proxy via `StringConcat` (w/ static items)", () => {
      const ctx = Proxy.makeContext();

      const t = new ctx.Trace({ id: "a" });
      const p = ctx.makeProxy(t);
      const s = new ctx.StringConcat(["a", "e"]);

      // @ts-expect-error: Type cannot be used as an index type.
      const p1 = p.f.g[s];
      expect(ctx.unProxy(p1).props).toEqual(["f", "g", s]);
    });

    test("Can access properties on proxy via `StringConcat` (w/ nested StringConcats)", () => {
      const ctx = Proxy.makeContext();

      const t = new ctx.Trace({ id: "a" });
      const p = ctx.makeProxy(t);
      const s1 = new ctx.StringConcat(["a", "e"]);
      const s2 = new ctx.StringConcat([s1, s1]);
      const s3 = new ctx.StringConcat([s1, s2]);

      // @ts-expect-error: Type cannot be used as an index type.
      const p1 = p.f.g[s3];
      const t1 = ctx.unProxy(p1);
      expect(t1.props).toEqual(["f", "g", s3]);
    });

    test("Can access properties on proxy via `StringConcat` (w/ proxy items)", () => {
      const table = new Proxy.LookupTable();
      const ctx = Proxy.makeContext(table);

      const ta = new ctx.Trace({ id: "a" });
      const pa = ctx.makeProxy(ta);

      const tb = new ctx.Trace({ id: "b" });
      const pb = ctx.makeProxy(tb);

      const s = new ctx.StringConcat([pb.a, pb.b]);

      // @ts-expect-error: Type cannot be used as an index type.
      const p = pa.x.y[s];
      const t = ctx.unProxy(p);

      expect(t.props).toEqual(["x", "y", s]);
    });

    test("Can access properties on proxy via `Proxy` instance", () => {
      const ctx = Proxy.makeContext();

      const ta = new ctx.Trace({ id: "a" });
      const pa = ctx.makeProxy(ta);

      const tb = new ctx.Trace({ id: "b" });
      const pb = ctx.makeProxy(tb);

      const p1 = pa.a.b.c[pb];
      expect(ctx.unProxy(p1).props).toEqual(["a", "b", "c", tb]);

      const p2 = pb.d.e.f[p1];
      expect(ctx.unProxy(p2).props).toEqual([
        "d",
        "e",
        "f",
        ctx.unProxy(p1),
      ]);
    });
  });
});
