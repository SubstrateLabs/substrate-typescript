import { createParser } from "substrate/EventSource";
import { NodeMessage, SSEMessage } from "substrate/Streaming";
import { SubstrateError } from "substrate/Error";
import { AnyNode, NodeOutput } from "substrate/Nodes";

/**
 * `StreamingResponse` is an async iterator that is used to interact with a stream of Server-Sent Events
 */
export class StreamingResponse {
  apiResponse: Response;
  iterator: any;

  constructor(response: Response, iterator: any) {
    this.apiResponse = response;
    this.iterator = iterator;
  }

  [Symbol.asyncIterator]() {
    return this.iterator;
  }

  tee(n: number = 2) {
    return tee(n, this.iterator).map(
      (iterator) => new StreamingResponse(this.apiResponse, iterator),
    );
  }

  static async fromReponse(response: Response) {
    if (!response.body) {
      throw new SubstrateError("Response body must be present");
    }

    const decoder = new TextDecoder("utf-8");
    const parser = createParser();

    async function* iterator(): AsyncGenerator<SSEMessage> {
      for await (const chunk of readableStreamAsyncIterable(response.body)) {
        for (const message of parser.getMessages(
          decoder.decode(chunk as any),
        )) {
          if (message.data) {
            try {
              const sseMessage = JSON.parse(message.data);
              yield sseMessage as SSEMessage;
            } catch (_err) {
              throw new SubstrateError(
                `Bad Server-Sent Event message: ${message}`,
              );
            }
          }
        }
      }
    }

    return new StreamingResponse(response, iterator());
  }
}

/**
 * `SubstrateStreamingResponse`
 */
export class SubstrateStreamingResponse extends StreamingResponse {
  public apiRequest: Request;

  constructor(request: Request, response: Response, iterator: any) {
    super(response, iterator);
    this.apiRequest = request;
  }

  async *get<T extends AnyNode>(
    node: T,
  ): AsyncGenerator<NodeMessage<NodeOutput<T>>> {
    for await (let message of this) {
      if (message?.node_id === node.id) {
        yield message as NodeMessage<NodeOutput<T>>;
      }
    }
  }

  override tee(n: number = 2) {
    return tee(n, this.iterator).map(
      (iterator) =>
        new SubstrateStreamingResponse(
          this.apiRequest,
          this.apiResponse,
          iterator,
        ),
    );
  }

  static async fromRequestReponse(request: Request, response: Response) {
    const streamingResponse = await StreamingResponse.fromReponse(response);
    return new SubstrateStreamingResponse(
      request,
      response,
      streamingResponse.iterator,
    );
  }
}

function readableStreamAsyncIterable(stream: any) {
  // When stream is already an iterator we return it. This is the case when using a
  // `response.body` from node-fetch.
  if (stream[Symbol.asyncIterator]) return stream;

  // Otherwise we use getReader and produce an async iterable from the ReadableStream.
  // This is the variant we would see when using an implementation of fetch closer to
  // the web.
  const reader = stream.getReader();
  return {
    async next() {
      try {
        const result = await reader.read();
        if (result?.done) reader.releaseLock(); // release lock when stream becomes closed
        return result;
      } catch (e) {
        reader.releaseLock(); // release lock when stream becomes errored
        throw e;
      }
    },
    async return() {
      const cancelPromise = reader.cancel();
      reader.releaseLock();
      await cancelPromise;
      return { done: true, value: undefined };
    },
    [Symbol.asyncIterator]() {
      return this;
    },
  };
}

function tee(n: number = 2, iterator: any) {
  const queues: any[] = [];
  for (let i = 0; i < n; i++) {
    queues.push([]);
  }

  const teeIterator = (queue: SSEMessage[]) => {
    return {
      next: () => {
        if (queue.length === 0) {
          const result = iterator.next();
          for (let q of queues) q.push(result);
        }
        return queue.shift();
      },
    };
  };

  return queues.map((q) => teeIterator(q));
}
