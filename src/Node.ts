import { idGenerator } from "substrate/idGenerator";
import { Future, FutureAnyObject, Trace } from "substrate/Future";
// import { Mailbox } from "substrate/Mailbox";
import { SubstrateResponse } from "substrate/SubstrateResponse";
import { NodeError } from "substrate/Error";

const generator = idGenerator("node");

type Options = {
  /** The id of the node. Default: random id */
  id?: Node["id"];
  /** When true the server will omit this node's output. Default: false */
  hide?: boolean;
};

export abstract class Node {
  /** The id of the node. Default: random id */
  id: string;
  /** The type of the node. */
  node: string;
  /** Node inputs */
  args: Object;
  /** When true the server will omit this node's output. Default: false */
  hide: boolean;

  /** When events happen (eg. data recieved) we send messages to the node's mailbox */
  // protected mailbox: Mailbox;
  /** TODO this field stores the last response, but it's just temporary until the internals are refactored */
  protected _response: SubstrateResponse | undefined;

  constructor(args: Object = {}, opts?: Options) {
    this.node = this.constructor.name;
    this.args = args;
    this.id = opts?.id || generator(this.node);
    this.hide = opts?.hide || false;
    // this.mailbox = new Mailbox(this as Node);
  }

  /**
   * Reference the future output of this node.
   */
  get future(): any {
    return new FutureAnyObject(new Trace([], this as Node));
  }

  protected set response(res: SubstrateResponse) {
    if (!this._response) this._response = res;
  }

  protected output() {
    const data = this._response?.json?.data?.[this.id];

    // Errors from the server have these two fields
    if (data?.type && data?.message) {
      // NOTE: we only return these errors on client errors.
      // Server errors are typically 5xx replies.
      return new NodeError(data.type, data.message);
    } else if (data) {
      return data;
    }

    return new NodeError("no_data", `Missing data for "${this.id}"`);
  }

  /**
   * Return the resolved result for this node.
   */
  protected abstract result(): Promise<any>;
  // protected async result(): Promise<any> {
  //   // return this.mailbox.lastResult();
  //   return Promise.resolve(
  //     this._response ? this._response.get(this) : undefined,
  //   );
  // }

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
