import { Operation, Edge, OpSet, HasId } from "./Operation";
import { v4 as uuidv4 } from "uuid";

export class sb {
  private static _opIdGenerator = (start: number = 1) => {
    let n = start;
    return () => {
      const id = `sbop${n.toString()}_${uuidv4().slice(0, 8)}`;
      n = n + 1;
      return id;
    };
  };
  private static id = sb._opIdGenerator();

  public static concat(...args: string[]): void {
    // Implementation goes here
  }

  private static concat_two(left: string, right: string): void {
    let op = {
      id: sb.id(),
      class: "Node",
      op_stack: [] as Operation[],
      op_graph_edges: [] as Edge<OpSet>[],
      node_graph_edges: [] as Edge<HasId>[],
      origin_node_id: "TODO",
    };
    const opStackItem = {
      type: "string-concat",
      args: {
        op_id: null,
        val: "foo",
        direction: "left",
      },
    };
    // Implementation goes here
  }
}
