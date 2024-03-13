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

/**
 * TODO: using this to also handle "function-'refs'" some intermediate type that can be identified and then transformed
 * into a Future.
 *
 * I'm starting to wonder where the line is between "refs" and "futures". Refs need to be replaced with "placeholders" now,
 * but they only accomodate "Trace" directives and they are also referred to as "futures" to the user - which seems to make
 * them seem ambigious/confusing. Future types here have no top-level discriminator and can't be used inline at the moment,
 * so if we'd like to do that we'd need to test a value by a nested prop existence, eg does future.directive exist?, then replace
 * this future with a placeholder and move to the futures list.
 *
 * -> maybe that is the simpler way to get it kind of working now and this can be internally refactored after.
 *
 * -> maybe StringConcat is just a "kind" of "Ref"
 */
const isFuture = (object: Object) => {
  return ("id" in object) && ("directive" in object);
};

type StringConcat = {
  t: "StringConcat";
  values: (string | Ref)[];
}
// Ref must resolve to a string for this to work, but we're not checking this right now.
export const stringConcat = (...values: (string | Ref | StringConcat)[]): StringConcat => {
  return {
    t: "StringConcat",
    values
  };
};

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

const FUTURE_PLACEHOLDER_KEY = "__$$SB_GRAPH_OP_ID$$__";
export const futureIdPlaceholder = (id: Future["id"]): FutureIdPlaceholder => ({
  [FUTURE_PLACEHOLDER_KEY]: id,
});
const isFutureIdPlaceholder = (maybePlaceholder: any) => {
  return typeof maybePlaceholder === "object" && (FUTURE_PLACEHOLDER_KEY in maybePlaceholder);
}

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
      } else if (obj.t === "StringConcat") {
        // 1) loop over all the values and add any futures to the collection, keep track of the concatables
        const concatables: Concatable[] = [];
        for (let value of obj.values) {
          if (typeof value === "string") {
            concatables.push({ val: value, future_id: null });
          } else {
            const maybePlaceholder = traverse(value);
            if (isFutureIdPlaceholder(maybePlaceholder)) {
              concatables.push({ future_id: maybePlaceholder[FUTURE_PLACEHOLDER_KEY], val: null });
            }
          }
        }

        // 2) create a new "string-concat" future with the list of processed values
        const future: Future = {
          id: newId(),
          directive: {
            items: concatables,
            type: "string-concat",
          }
        };

        // 3) add the new future to the collectedFutures list
        collectedFutures.push(future);

        // 4) return the placeholder
        return futureIdPlaceholder(future.id)
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
