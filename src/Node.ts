import { idGenerator } from "substrate/idGenerator";
import { SubstrateResponse } from "./SubstrateResponse";
import { Future, FutureAnyObject, Trace } from "substrate/Future";

const generator = idGenerator("node");

export class Node<Args = Object> {
  id: string;
  node: string;
  args: Args;
  _subscribed: boolean = false;

  // TODO: make subscribed by default, and collect output into ivar
  constructor(args: Args) {
    this.node = this.constructor.name;
    this.id = generator(this.node);
    this.args = args;
  }

  /**
   * Subscribe to the output of this node.
   */
  subscribe(): this {
    this._subscribed = true;
    return this;
  }

  /**
   * Reference the future output of this node.
   */
  get future(): any {
    return new FutureAnyObject(new Trace([], this.id));
  }

  /*
   * Get the response for a given node.
   */
  output(response: SubstrateResponse): any {
    if (!response.json) {
      throw new Error(`Invalid response`);
    }
    const json = response.json;
    if (json && json.data) {
      const data = json.data;
      const nodeId = this.id;
      if (data[nodeId]) {
        return data[nodeId];
      }
    }
    throw new Error(`Node ${this.id} not found in response`);
  }

  toJSON() {
    // When we serialize a node we're also going to be extracting
    // all the Future values that are referenced by the Args and
    // replacing them with placeholders in addition to translating
    // all of this to JSON.
    const futures = new Set();

    const traverse = (obj: any): any => {
      if (Array.isArray(obj)) {
        return obj.map((item) => traverse(item));
      }

      if (obj instanceof Future) {
        futures.add(obj);
        // @ts-expect-error (accessing protected method referencedFutures)
        obj.referencedFutures().forEach((rf: any) => futures.add(rf));
        // @ts-expect-error (accessing protected method toPlaceholder)
        return obj.toPlaceholder();
      }

      if (typeof obj === "object") {
        return Object.keys(obj).reduce((acc: any, k: any) => {
          acc[k] = traverse(obj[k]);
          return acc;
        }, {});
      }

      return obj;
    };
    const args = traverse(this.args);

    return {
      node: {
        id: this.id,
        node: this.node,
        args,
        _should_output_globally: this._subscribed,
      },
      futures: Array.from(futures).map((f: any) => f.toJSON()),
    };
  }
}
