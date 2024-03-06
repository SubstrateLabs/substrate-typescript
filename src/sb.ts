import { Operation, Edge, OpSet, HasId, ConcatArgs } from "./Operation";

export class sb {
  public static concat(...args: Array<string | OpSet>): string | OpSet {
    if (args.length === 0) {
      return "";
    } else if (args.length === 1) {
      return args[0] as string | OpSet;
    } else {
      let result = sb.concat_two(
        args[0] as string | OpSet,
        args[1] as string | OpSet,
      );
      for (let i = 2; i < args.length; i++) {
        result = sb.concat_two(result, args[i] as string | OpSet);
      }
      return result;
    }
  }

  private static concat_two(
    left: string | OpSet,
    right: string | OpSet,
  ): string | OpSet {
    const isLeftFuture = typeof left !== "string";
    const isRightFuture = typeof right !== "string";
    if (isLeftFuture && isRightFuture) {
      left.node_graph_edges.push([right.origin_node_id, left.origin_node_id]);
      left.op_graph_edges.push([right.id, left.id]);
      const args: ConcatArgs = {
        op_id: right.id,
        val: null,
        direction: "left",
      };
      const op: Operation = {
        type: "string-concat",
        args: args,
      };
      const os: OpSet = {
        class: "Node",
        origin_node_id: left.origin_node_id,
        id: left.id,
        node_graph_edges: left.node_graph_edges,
        op_stack: left.op_stack.concat([op]),
        op_graph_edges: left.op_graph_edges,
      };
      // TODO-nec? left.set_edges()
      return os;
    } else if (!isLeftFuture && isRightFuture) {
      const args: ConcatArgs = {
        op_id: null,
        val: left,
        direction: "right",
      };
      const op: Operation = {
        type: "string-concat",
        args: args,
      };
      const os: OpSet = {
        class: "Node",
        origin_node_id: right.origin_node_id,
        id: right.id,
        node_graph_edges: right.node_graph_edges,
        op_stack: right.op_stack.concat([op]),
        op_graph_edges: right.op_graph_edges,
      };
      // TODO-nec? right.set_edges()
      return os;
    } else if (isLeftFuture && !isRightFuture) {
      const args: ConcatArgs = {
        op_id: null,
        val: right,
        direction: "left",
      };
      const op: Operation = {
        type: "string-concat",
        args: args,
      };
      const os: OpSet = {
        class: "Node",
        origin_node_id: left.origin_node_id,
        id: left.id,
        node_graph_edges: left.node_graph_edges,
        op_stack: left.op_stack.concat([op]),
        op_graph_edges: left.op_graph_edges,
      };
      // TODO-nec? right.set_edges()
      return os;
    } else {
      // !isLeftFuture && !isRightFuture
      // just concatenate the strings
      return (left as string).concat(right as string);
    }
  }
}
