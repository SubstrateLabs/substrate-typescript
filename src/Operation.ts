import { Ref } from "./Refs";

type NonEmptyArray<T> = T[] & { 0: T };

type HasId = { id: string };
type Edge<T extends HasId> = [T["id"], T["id"]];
type OpId = {
  __$$SB_GRAPH_OP_ID$$__: string;
};

type Op = {
  id: string;
  class: string;
  op_stack: OpStackItem[];
  op_graph_edges: Edge<Op>[];
  node_graph_edges: Edge<HasId>[];
  origin_node_id: HasId["id"]; // Node Id
};

type OpStackItem = GetOp<GetItemArgs> | GetOp<GetAttrArgs>; // maybe others eg. Set, Transform, tbd
type GetItemArgs = { accessor: "item"; key: null; op_id: Op["id"] };
type GetAttrArgs = { accessor: "attr"; key: string; op_id: null };
type GetArgs = GetItemArgs | GetAttrArgs;
type GetOp<T extends GetArgs> = {
  type: "get";
  args: T;
};

const getItemOp = (opId: Op["id"]): GetOp<GetItemArgs> => ({
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

export const refOps = (ref: Ref, id: NewId): NonEmptyArray<Op> => {
  let op = {
    id: id(),
    class: "Node",
    op_stack: [] as OpStackItem[],
    op_graph_edges: [] as Edge<Op>[],
    node_graph_edges: [] as Edge<HasId>[],
    origin_node_id: ref.node.id,
  };
  let ops: NonEmptyArray<Op> = [op];

  ref.props.forEach((prop) => {
    if (prop.t === "Ref") {
      const [refOp, ...restRefOps] = refOps(prop.value, () => id());
      ops = [refOp, ...restRefOps].concat(ops) as NonEmptyArray<Op>;

      op.op_graph_edges.push([refOp.id, op.id]);
      op.node_graph_edges.push([prop.value.node.id, ref.node.id]);

      op.op_stack.push(getItemOp(refOp.id));
    } else if (prop.t === "Key") {
      op.op_stack.push(getAttrOp(prop.value));
    }
  });

  return ops;
};

export const opId = (id: Op["id"]): OpId => ({
  __$$SB_GRAPH_OP_ID$$__: id,
});

export const replaceRefsWithOps = (args: any, refFactory: any, newId: any) => {
  let collectedOps: Op[] = [];

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
