import { expect, describe, test } from "vitest";
import { Graph } from "substrate/Graph";
import { Node } from "substrate/Node";

export class FooNode extends Node {
  constructor(args: any = {}) {
    super(args);
    this.args = args;
  }
}

describe("Graph", () => {
  test("a.ref.foo", () => {
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
    console.log();
    const result = g.toJSON();
    const futures = result.futures;
    const a_json = result.nodes[0];
    expect(a_json.id).toEqual("a");
    expect(a_json.args.num).toEqual(1);
    const b_json = result.nodes[1];
    expect(b_json.args.num).toBeInstanceOf(Object); // f1
    // verify the contents of a single future
    const f1 = futures[0];
    expect(Object.values(b_json.args.num)[0]).toEqual(f1.id);
    expect(f1.directive.type).toEqual("trace");
    expect(f1.directive.origin_node_id).toEqual("a");
    expect(f1.directive.op_stack.length).toEqual(1);
    expect(f1.directive.op_stack[0].key).toEqual("num");
    expect(b_json.args.nested).toBeInstanceOf(Array);
    const c_json = result.nodes[2];
    expect(c_json.args.nested.key).toBeInstanceOf(Object); // f5
    expect(c_json.args.num).toBeInstanceOf(Object); // f2
    expect(c_json.args.str).toBeInstanceOf(Object); // f3
    // verify the contents of a composite future, b.nested[a.num].key
    const f4 = futures[2]; // f4 (a.num)
    expect(f4.directive.origin_node_id).toEqual("a");
    expect(f4.directive.op_stack[0].key).toEqual("num");
    const f3 = futures[3]; // b.nested[a.num].key
    expect(f3.directive.origin_node_id).toEqual("b");
    expect(f3.directive.op_stack[0].key).toEqual("nested"); // b.nested
    expect(f3.directive.op_stack[1].future_id).toEqual(f4.id); // [a.num]
    expect(f3.directive.op_stack[2].key).toEqual("key"); // .key
    const f5 = futures[4]; // b.str
    expect(f5.directive.origin_node_id).toEqual("b");
    expect(f5.directive.op_stack[0].key).toEqual("str"); // b.nested
    expect(result.nodes.length).toEqual(3);
    expect(result.futures.length).toEqual(5); // 5 futures
  });
});
