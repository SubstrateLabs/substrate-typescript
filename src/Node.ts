import { idGenerator } from "substrate/idGenerator";
import { SubstrateResponse } from "./SubstrateResponse";
import { Future, FutureAnyObject, Trace } from "substrate/Future";

const generator = idGenerator("node");

export class Node<Args = Object> {
  id: string;
  node: string;
  args: Args;
  hide: boolean;
  #output: Object | undefined;

  constructor(args: Args, hide: boolean = false) {
    this.node = this.constructor.name;
    this.id = generator(this.node);
    this.args = args;
    this.hide = hide;
  }

  /**
   * Reference the future output of this node.
   */
  get future(): any {
    return new FutureAnyObject(new Trace([], this.id));
  }

  set output(response: SubstrateResponse) {
    if (!this.hide && response?.json?.data?.[this.id]) {
      this.#output = response.json.data[this.id];
    }
  }

  /*
   * Get the response for a given node.
   */
  get output(): any {
    return this.#output;
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
        _should_output_globally: !this.hide,
      },
      futures: Array.from(futures).map((f: any) => f.toJSON()),
    };
  }
}
