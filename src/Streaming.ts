/** Represents an array item within a `Node` output chunk, specifies the field is an array containing this `item` at the `index`. **/
type ChunkArrayItem<T = Object> = {
  object: "array.item";
  index: number;
  item: T;
};

/** Helper types for producing the "Chunk" types used in the `NodeDelta` messages */
type ChunkizeObject<T> = T extends object
  ? { [P in keyof T]: ChunkizeAny<T[P]> }
  : T;

type ChunkizeArray<T> = T extends (infer U)[]
  ? ChunkArrayItem<ChunkizeAny<U>>
  : ChunkArrayItem<T>;

type ChunkizeAny<T> = T extends (infer U)[]
  ? ChunkizeArray<U>
  : T extends object
    ? ChunkizeObject<T>
    : T;

/** Stream message that contains the completed `Node` output */
type NodeResult<T = Object> = {
  object: "node.result";
  nodeId: string;
  data: T;
};

/** Stream message that contains a chunk of the `Node` output */
type NodeDelta<T = Object> = {
  object: "node.delta";
  nodeId: string;
  data: ChunkizeAny<T>;
};

/** Stream message when an error happened during a `Node` run. */
export type NodeError = {
  object: "node.error";
  nodeId: string;
  data: {
    type: string;
    message: string;
  };
};

/** Stream message that contains the completed "Graph" output */
export type GraphResult<T = Object> = {
  object: "graph.result";
  data: T;
};

export type NodeMessage<T = Object> = NodeResult<T> | NodeDelta<T> | NodeError;

export type SSEMessage<T = Object> = NodeMessage | GraphResult<T>;
