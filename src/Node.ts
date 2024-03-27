import { RequestTimeout } from "substrate/Error";
import { Substrate } from "substrate/Substrate";
import { idGenerator } from "substrate/idGenerator";
import { SubstrateResponse } from "./SubstrateResponse";
import { Future, FutureAnyObject, Trace } from "substrate/Future";

const generator = idGenerator("node");

type Options = {
  /** The id of the node. Default: random id */
  id?: Node["id"];
  /** When true the server will omit this node's output. Default: false */
  hide?: boolean;
};

export class Node<Args = Object> {
  /** The id of the node. Default: random id */
  id: string;
  /** The type of the node. */
  node: string;
  /** Node inputs */
  args: Args;
  /** When true the server will omit this node's output. Default: false */
  hide: boolean;
  /** @private when Node is run, the output is saved in this var */
  #output: Object | undefined;

  constructor(args: Args = {} as Args, opts?: Options) {
    this.node = this.constructor.name;
    this.args = args;
    this.id = opts?.id || generator(this.node);
    this.hide = opts?.hide || false;
  }

  /**
   * Reference the future output of this node.
   */
  get future(): any {
    return new FutureAnyObject(new Trace([], this as Node<Object>));
  }

  /**
   * Return the resolved result for this node.
   */
  async result() {
    // TODO: extract polling/backoff/timeout logic
    return new Promise((resolve) => {
      // These values are somewhat arbitrary, but in general I wanted to
      // check fairly often, but give up at the 5m mark.
      const checkResult = (delayMs = 20, backoff = 1.1575, tries = 50) => {
        if (tries < 1) {
          throw new RequestTimeout(
            `Could not resolve ${this.node} (${this.id}) after ${
              delayMs | 0
            }ms`,
          );
        }
        setTimeout(() => {
          this.#output
            ? resolve(this.#output)
            : checkResult(delayMs * backoff, backoff, tries - 1);
        }, delayMs);
      };
      checkResult();
    });
  }

  /**
   * @private Set the output of this node using the server response.
   */
  set output(response: SubstrateResponse) {
    // TODO: should we allow nodes to be run more than once?
    // if so do we want to overwrite the previous value or should we accumulate all results?
    if (!this.hide && response?.json?.data?.[this.id]) {
      this.#output = response.json.data[this.id];
    }
  }

  /**
   * Run this single node.
   * Alternatively, `Substrate.run(node)`
   */
  run(s: Substrate) {
    s.run(this as Node<Object>);
    return this;
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

    // TODO: should we also return nodes this node depends on here?
    // eg. returning { nodes: Node[], futures[] }
    // the rationale for doing this is that 
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
