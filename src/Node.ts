import { idGenerator } from "substrate/idGenerator";
import { Future, FutureAnyObject, Trace } from "substrate/Future";
import { SubstrateResponse } from "substrate/SubstrateResponse";
import { NodeError, SubstrateError } from "substrate/Error";
import { AnyNode } from "substrate/Nodes";

const generator = idGenerator("node");

export type Options = {
  /** The id of the node. Default: random id */
  id?: Node["id"];
  /** When true the server will omit this node's output. Default: false */
  hide?: boolean;
  /** Number of seconds to cache an output for this node's unique inputs. Default: null */
  cache_age?: number;
  /** Applies if cache_age > 0. Optionally specify a subset of keys to use when computing a cache key.
   * Default: all node arguments
   */
  cache_keys?: string[];
  /** Max number of times to retry this node if it fails. Default: null means no retries */
  max_retries?: number;
  /** Specify nodes that this node depends on. */
  depends?: Node[];
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
  /** Number of seconds to cache an output for this node's unique inputs. Default: null */
  cache_age?: number;
  /** Applies if cache_age > 0. Optionally specify a subset of keys to use when computing a cache key.
   * Default: all node arguments
   */
  cache_keys?: string[];
  /** Max number of times to retry this node if it fails. Default: null means no retries */
  max_retries?: number;
  /** Specify nodes that this node depends on. */
  depends: Node[];

  /** TODO this field stores the last response, but it's just temporary until the internals are refactored */
  protected _response: SubstrateResponse | undefined;

  constructor(args: Object = {}, opts?: Options) {
    this.node = this.constructor.name;
    this.args = args;
    this.id = opts?.id || generator(this.node);
    this.hide = opts?.hide || false;
    this.cache_age = opts?.cache_age;
    this.cache_keys = opts?.cache_keys;
    this.max_retries = opts?.max_retries;
    this.depends = opts?.depends ?? [];
  }

  /**
   * Reference the future output of this node.
   */
  get future(): any {
    return new FutureAnyObject(new Trace([], this as Node));
  }

  protected set response(res: SubstrateResponse) {
    this._response = res;
  }

  protected output() {
    const data = this._response?.json?.data?.[this.id];

    // Errors from the server have these two fields
    if (data?.type && data?.message) {
      // NOTE: we only return these errors on client errors.
      // Server errors are typically 5xx replies.
      return new NodeError(data.type, data.message, data?.request_id);
    } else if (data) {
      return data;
    }

    return new NodeError("no_data", `Missing data for "${this.id}"`);
  }

  /**
   * Return the resolved result for this node.
   */
  protected async result(): Promise<any> {
    if (!this._response) {
      return Promise.reject(
        new SubstrateError(
          `${this.node} (id=${this.id}) has not been run yet!`,
        ),
      );
    }
    return Promise.resolve(
      this._response
        ? this._response.get(this as unknown as AnyNode)
        : undefined,
    );
  }

  toJSON() {
    const withPlaceholders = (obj: any): any => {
      if (Array.isArray(obj)) {
        return obj.map((item) => withPlaceholders(item));
      }

      if (obj instanceof Future) {
        // @ts-expect-error (accessing protected method toPlaceholder)
        return obj.toPlaceholder();
      }

      if (obj && typeof obj === "object") {
        return Object.keys(obj).reduce((acc: any, k: any) => {
          acc[k] = withPlaceholders(obj[k]);
          return acc;
        }, {});
      }

      return obj;
    };

    return {
      id: this.id,
      node: this.node,
      args: withPlaceholders(this.args),
      _should_output_globally: !this.hide,
      ...(this.cache_age && { _cache_age: this.cache_age }),
      ...(this.cache_keys && { _cache_keys: this.cache_keys }),
      ...(this.max_retries && { _max_retries: this.max_retries }),
    };
  }

  /**
   * @private
   * For this node, return all the Futures and other Nodes it has a reference to.
   */
  protected references() {
    const nodes = new Set<Node>();
    const futures = new Set<Future<any>>();

    nodes.add(this);

    for (let node of this.depends) {
      const references = node.references();
      for (let node of references.nodes) {
        nodes.add(node);
      }
      for (let future of references.futures) {
        futures.add(future);
      }
    }

    const collectFutures = (obj: any) => {
      if (Array.isArray(obj)) {
        for (let item of obj) {
          collectFutures(item);
        }
      }

      if (obj instanceof Future) {
        futures.add(obj);

        // @ts-expect-error (accessing protected method referencedFutures)
        for (let future of obj.referencedFutures()) {
          futures.add(future);
        }
        return;
      }

      if (obj && typeof obj === "object") {
        for (let key of Object.keys(obj)) {
          collectFutures(obj[key]);
        }
      }
    };
    collectFutures(this.args);

    for (let future of futures) {
      // @ts-ignore protected access
      let directive = future._directive;
      if (directive instanceof Trace) {
        // @ts-ignore protected access
        const references = directive.originNode.references();
        for (let node of references.nodes) {
          nodes.add(node);
        }
        for (let future of references.futures) {
          futures.add(future);
        }
      }
    }

    return { nodes, futures };
  }
}
