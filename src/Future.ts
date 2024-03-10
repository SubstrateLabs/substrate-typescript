/**
 * See `substratecore/base_future.py`
 */
import { Ref } from "./Refs";

type NonEmptyArray<T> = T[] & { 0: T };

type HasId = { id: string };
type FutureIdPlaceholder = {
  __$$SB_GRAPH_OP_ID$$__: string;
};

type Concatable = {
  future_id: Future["id"] | null;
  val: string | null;
};

type ConcatDirective = {
  items: Concatable[];
  type: "string-concat";
};

type TraceType = "attr" | "item";
type TraceOperation = {
  future_id: Future["id"] | null;
  key: string | number | null;
  accessor: TraceType;
};

type TraceDirective = {
  op_stack: TraceOperation[];
  origin_node_id: HasId["id"];
  type: "trace";
};

type Directive = TraceDirective | ConcatDirective;

type Future = {
  id: string;
  directive: Directive;
};

const itemTraceOperation = (opId: Future["id"]): TraceOperation => ({
  future_id: opId,
  accessor: "item",
  key: null,
});

const attrTraceOperation = (key: string): TraceOperation => ({
  key: key,
  future_id: null,
  accessor: "attr",
});

type NewId = () => string; // id generator

export const refFutures = (ref: Ref, id: NewId): NonEmptyArray<Future> => {
  const directive: TraceDirective = {
    type: "trace",
    op_stack: [] as TraceOperation[],
    origin_node_id: ref.node.id,
  };
  let future = {
    id: id(),
    directive: directive,
  };
  let futures: NonEmptyArray<Future> = [future];

  ref.props.forEach((prop) => {
    if (prop.t === "Ref") {
      const [refFuture, ...restRefFutures] = refFutures(prop.value, () => id());
      futures = [refFuture, ...restRefFutures].concat(
        futures,
      ) as NonEmptyArray<Future>;

      future.directive.op_stack.push(itemTraceOperation(refFuture.id));
    } else if (prop.t === "Key") {
      future.directive.op_stack.push(attrTraceOperation(prop.value));
    }
  });

  return futures;
};

export const futureIdPlaceholder = (id: Future["id"]): FutureIdPlaceholder => ({
  __$$SB_GRAPH_OP_ID$$__: id,
});

export const replaceRefsWithFutures = (
  args: any,
  refFactory: any,
  newId: any,
) => {
  let collectedFutures: Future[] = [];

  const traverse = (obj: any): any => {
    if (Array.isArray(obj)) {
      return obj.map((item) => traverse(item));
    }

    if (typeof obj === "object") {
      if (refFactory.isRef(obj)) {
        const ref = refFactory.getTarget(obj);
        const futures = refFutures(ref, newId);
        collectedFutures = collectedFutures.concat(futures);
        const entryFuture = futures.at(-1);
        return futureIdPlaceholder(entryFuture!.id);
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
    futures: collectedFutures,
  };
};
