export type NodeResult<T = Object> = {
  object: "node.result";
  nodeId: string;
  data: T;
};

export type NodeDelta<T = Object> = {
  object: "node.delta";
  nodeId: string;
  data: T;
};

export type NodeError = {
  object: "node.error";
  nodeId: string;
  data: {
    type: string;
    message: string;
  };
};

export type GraphResult<T = Object> = {
  object: "graph.result";
  data: T;
};

export type SSEMessage<T = Object> =
  | NodeResult<T>
  | NodeDelta<T>
  | NodeError
  | GraphResult<T>;
