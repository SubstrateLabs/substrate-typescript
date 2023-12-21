import { v4 as uuidv4 } from "uuid";
import * as Schema from "substrate/Schema";
import { Adapter } from "substrate/Adapter";

/**
 * @internal
 * `AbstractNode` is an abstract class that defines the minumum functionality for implementing other `Node`-classes.
 */
export abstract class AbstractNode<T extends Schema.Node> {
  /**
   * `Node` identifier, must be unique within a `Graph`. `id` is used to as a key to identify node outputs in `GraphResult`.
   */
  id: T["id"];

  /**
   * Default arguments passed as inputs to the `Node` when it is executed.
   */
  args: T["args"] = {};

  /**
   * When `true` the output of this node will be included in the final `GraphResult`. Default: `false`.
   */
  _should_output_globally?: T["_should_output_globally"];

  /**
   * List of `Adapter` steps used to transform the node output.
   */
  _to_adapters?: Adapter.Adapter[];

  /**
   * List of `Adapter` steps used to transform the node input.
   */
  _from_adapters?: Adapter.Adapter[];

  constructor(id: string = uuidv4()) {
    Schema.IdSchema.parse(id);
    this.id = id;
  }

  /**
   * Set the `args` that are passed as default inputs to the `Node` when it is executed.
   */
  setArgs(args: T["args"]) {
    // TODO: I'm undecided here about whether this should allow the user
    // to "build up" args with multiple calls to `setArgs` or if this
    // method shoud "replace" the internal args state with the new state.
    //
    // Given the fluent interface here, I'm inclined to allow multiple
    // calls here as it might also make it easier at the call sites to
    // conditionally/incrementally include args.
    this.args = Object.assign(this.args, args);
    return this;
  }

  /**
   * When `true` the output of this node will be included in the final `GraphResult`.
   */
  setOutput(shouldOutput: boolean = true) {
    this._should_output_globally = shouldOutput;
    return this;
  }

  /**
   * Set the `_to_adapters` that are used to transform the output of this node so that
   * it can be used as inputs for nodes connected via outgoing edges.
   */
  adaptTo(adapters: Adapter.Adapter[]) {
    this._to_adapters = adapters;
    return this;
  }

  /**
   * Set the `_from_adapters` that are used to transform the input to this node.
   */
  adaptFrom(adapters: Adapter.Adapter[]) {
    this._from_adapters = adapters;
    return this;
  }
}
