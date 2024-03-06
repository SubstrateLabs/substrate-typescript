import { Ref } from "./Refs";

type NonEmptyArray<T> = T[] & { 0: T };

export type HasId = { id: string };
export type Edge<T extends HasId> = [T["id"], T["id"]];
type OpId = {
  __$$SB_GRAPH_OP_ID$$__: string;
};

export type OpSet = {
  id: string;
  class: string;
  op_stack: Operation[];
  op_graph_edges: Edge<OpSet>[];
  node_graph_edges: Edge<HasId>[];
  origin_node_id: HasId["id"];
};

export type Operation =
  | GetOp<GetItemArgs>
  | GetOp<GetAttrArgs>
  | StringConcatOp<ConcatArgs>;
type GetItemArgs = { accessor: "item"; key: null; op_id: OpSet["id"] };
type GetAttrArgs = { accessor: "attr"; key: string; op_id: null };
type GetArgs = GetItemArgs | GetAttrArgs;
type GetOp<T extends GetArgs> = {
  type: "get";
  args: T;
};
type ConcatDirection = "left" | "right";
type ConcatArgs = {
  op_id: OpSet["id"] | null;
  val: string | null;
  direction: ConcatDirection | null;
};
type StringConcatOp<T extends ConcatArgs> = {
  type: "string-concat";
  args: T;
};

const getItemOp = (opId: OpSet["id"]): GetOp<GetItemArgs> => ({
  type: "get",
  args: {
    accessor: "item",
    key: null,
    op_id: opId,
  },
});

const getAttrOp = (key: string): GetOp<GetAttrArgs> => ({
  type: "get",
  args: {
    accessor: "attr",
    key: key,
    op_id: null,
  },
});

// a type of function that generates ids
type NewId = () => string;

// Creates a list of Ops from the given Ref
export const refOps = (ref: Ref, id: NewId): NonEmptyArray<OpSet> => {
  let op: OpSet = {
    id: id(),
    class: "Node",
    op_stack: [] as Operation[],
    op_graph_edges: [] as Edge<OpSet>[],
    node_graph_edges: [] as Edge<HasId>[],
    origin_node_id: ref.node.id,
  };
  let ops: NonEmptyArray<OpSet> = [op];

  ref.props.forEach((prop) => {
    if (prop.t === "Ref") {
      const [refOp, ...restRefOps] = refOps(prop.value, () => id());
      ops = [refOp, ...restRefOps].concat(ops) as NonEmptyArray<OpSet>;

      op.op_graph_edges.push([refOp.id, op.id]);
      op.node_graph_edges.push([prop.value.node.id, ref.node.id]);

      op.op_stack.push(getItemOp(refOp.id));
    } else if (prop.t === "Key") {
      op.op_stack.push(getAttrOp(prop.value));
    }
  });

  return ops;
};

export const opId = (id: OpSet["id"]): OpId => ({
  __$$SB_GRAPH_OP_ID$$__: id,
});

export const replaceRefsWithOps = (args: any, refFactory: any, newId: any) => {
  let collectedOps: OpSet[] = [];

  const traverse = (obj: any): any => {
    if (Array.isArray(obj)) {
      return obj.map((item) => traverse(item));
    }

    if (typeof obj === "object") {
      if (refFactory.isRef(obj)) {
        const ref = refFactory.getTarget(obj);
        const ops = refOps(ref, newId);
        collectedOps = collectedOps.concat(ops);
        const entryOp = ops.at(-1);
        return opId(entryOp!.id);
      } else {
        return Object.keys(obj).reduce((a: any, k: any) => {
          a[k] = traverse(obj[k]);
          return a;
        }, {});
      }
    }

    return obj;
  };

  return {
    args: traverse(args),
    ops: collectedOps,
  };
};
