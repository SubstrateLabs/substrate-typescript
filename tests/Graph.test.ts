import { expect, describe, test } from "vitest";
import { Graph } from "substrate/Graph";
import { Node } from "substrate/Node";
import { sb } from "substrate/sb";

export class FooNode extends Node {
  constructor(args: any = {}) {
    super(args);
    this.args = args;
  }
}

describe("Graph", () => {
  // NOTE(ben): trying to get string concat to work, realizing that we have Refs and not OpSets
  test.skip("sb concat right", () => {
    const a = new FooNode({ str: "a_str" });
    a.id = "a";
    const b = new FooNode({ str: sb.concat(a.future.str, "b_str") }).output();
    b.id = "b";
    const g = new Graph().add(a).add(b);
    const d = g.toJSON();
    console.log(d);
    expect(d.nodes.length).toEqual(2);
    expect(d.edges.length).toEqual(0); // no edges, the implicit dag is created server-side
    // const ops = d.ops;
  });
  test.only("refs scratch", () => {
    const a = new FooNode({ str: "a_str" });
    a.id = "a";
    const ref = a.future.str;
    console.log("ref", ref);
  });
  test("multiple refs serialization", () => {
    const a = new FooNode({ num: 1, str: "a_str" });
    a.id = "a";
    const b = new FooNode({
      str: "b_str",
      num: a.future.num,
      nested: [{ key: "b_val_1" }, { key: "b_val_2" }],
    });
    b.id = "b";
    const c = new FooNode({
      num: b.future.num,
      str: b.future.nested[a.future.num].key,
      nested: { key: b.future.str },
    });
    c.id = "c";
    const g = new Graph().add(a).add(b).add(c);
    const d = g.toJSON();
    expect(d.nodes.length).toEqual(3);
    expect(d.edges.length).toEqual(0); // no edges, the implicit dag is created server-side
    const ops = d.ops;
    const a_json = d.nodes[0];
    expect(a_json.id).toEqual("a");
    expect(a_json.args.num).toEqual(1);
    const b_json = d.nodes[1];
    expect(b_json.args.num).toBeInstanceOf(Object); // op1
    // verify the contents of a single ref
    const op1 = ops[0];
    expect(Object.values(b_json.args.num)[0]).toEqual(op1.id);
    expect(op1.origin_node_id).toEqual("a");
    expect(op1.op_stack.length).toEqual(1);
    expect(op1.op_stack[0].type).toEqual("get");
    expect(op1.op_stack[0].args.key).toEqual("num");
    expect(b_json.args.nested).toBeInstanceOf(Array);
    const c_json = d.nodes[2];
    expect(c_json.args.nested.key).toBeInstanceOf(Object); // op5
    expect(c_json.args.num).toBeInstanceOf(Object); // op2
    expect(c_json.args.str).toBeInstanceOf(Object); // op3
    // verify the contents of a composite ref, b.nested[a.num].key
    const op4 = ops[2]; // op4 (a.num)
    expect(op4.origin_node_id).toEqual("a");
    expect(op4.op_stack[0].args.key).toEqual("num");
    const op3 = ops[3]; // b.nested[a.num].key
    expect(op3.origin_node_id).toEqual("b");
    expect(op3.op_stack[0].args.key).toEqual("nested"); // b.nested
    expect(op3.op_stack[1].args.op_id).toEqual(op4.id); // [a.num]
    expect(op3.op_stack[2].args.key).toEqual("key"); // .key
    const op5 = ops[4]; // b.str
    expect(op5.origin_node_id).toEqual("b");
    expect(op5.op_stack[0].args.key).toEqual("str"); // b.nested
    expect(d.nodes.length).toEqual(3);
    expect(d.ops.length).toEqual(5); // 5 refs
  });
});
