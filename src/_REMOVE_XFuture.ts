import * as Proxy from "substrate/Proxy";
import { Node } from "substrate/Node";
import { idGenerator } from "substrate/idGenerator";

const futureId = idGenerator("future");

// type Concatable = {
//   future_id: Future["id"] | null;
//   val: string | null;
// };
//
// type ConcatDirective = {
//   items: Concatable[];
//   type: "string-concat";
// };
//
// type TraceType = "attr" | "item";
// type TraceOperation = {
//   future_id: Future["id"] | null;
//   key: string | number | null;
//   accessor: TraceType;
// };
//
// type TraceDirective = {
//   op_stack: TraceOperation[];
//   origin_node_id: HasId["id"];
//   type: "trace";
// };
//
// type Directive = TraceDirective | ConcatDirective;
//
// type Future = {
//   id: string;
//   directive: Directive;
// };

type TraceType = "attr" | "item";
type TraceOperation = {
  future_id: Future["id"] | null;
  key: string | number | null;
  accessor: TraceType;
};

const proxyFactory = Proxy.makeFactory();

class Future {
  id: string;
  constructor() {
    this.id = futureId(this.constructor.name);
  }

  futures(): Future[] {
    return [this];
  }
}

// proxy -> serialize -> unproxy
export class Trace extends Future {
  node: any;

  constructor(node: any) {
    super();
    this.node = node;
  }

  get proxy() {
    return proxyFactory.makeProxy(this);
  }

  traceOperations(): TraceOperation[] {
    return [];
  }

  // override futures(): Future[] {
  //   const props = this.proxy.$$target.props as Proxy.Prop[];
  //   const targets = props
  //     .filter((p) => Proxy.isProxyTarget(p))
  //     .map((p) => p.value) as Proxy.ProxyTarget[];
  //   const futures = targets.map((t) => t.owner) as Future[];
  //   return Array.from(new Set(futures.concat(this)));
  // }

  toJSON() {
    return {
      id: this.id,
      directive: {
        type: "trace",
        op_stack: this.traceOperations(), // TraceOperation[];
        origin_node_id: this.node.id,
      },
    };
  }
}

export class StringConcat extends Future {
  constructor() {
    super();
  }

  override toString() {
    return "string-concat:1234";
  }

  toJSON() {
    return {
      id: this.id,
      directive: {
        type: "string-concat",
        items: [], // concatables
      },
    };
  }
}
