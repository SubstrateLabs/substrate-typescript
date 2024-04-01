import { SubstrateResponse } from "substrate/SubstrateResponse";
import { Node } from "substrate/Node";

/**
 * @private
 * We're using the Web EventTarget & Event API to manage communication
 * to Nodes. It's supported in all major browsers, Node, Deno, and Workers.
 *
 * Node instances have their own mailbox that subscribes to events defined
 * here and may react to events they recieve.
 */

/** @private */
class SubstrateEvent extends Event {};

/** @private Event that reprepresents a new server response. */
export class RequestCompleted extends SubstrateEvent {
  static type = "RequestCompleted";
  value: SubstrateResponse;
  constructor(value: SubstrateResponse) {
    super(RequestCompleted.type);
    this.value = value;
  }
}

/**
 * @private
 * Mailbox is an EventTarget and can be used to receive messages.
 *
 * Right now we're only using this for allowing Node instances to resolve their
 * results when the server responds with their data, but may extend this to handle
 * other situations in the future.
 */
export class Mailbox extends EventTarget {
  pending: Promise<any>[] = [];
  resolved: Promise<any>[] = [];

  constructor(node: Node) {
    super();

    const waitForResponse = () => {
      // New promise that is waiting for a RequestCompleted event
      const p = new Promise((resolve) => {
        // This listener handles RequestCompleted events.
        const handleRequestCompleted = {
          handleEvent: (e: RequestCompleted) => {
            // When we receive an event, we'll resolve this Promise
            resolve(e.value.getNodeResponse(node));
            // Then we'll remove the event listeners to make sure there these references in the promise go away
            this.removeEventListener(RequestCompleted.type, handleRequestCompleted);
            // We'll move this reference over to the results list
            if (this.pending.length) this.resolved.push(this.pending.pop() as Promise<any>);
            // Finally we'll start up a new listener
            waitForResponse();
          }
        };

        // We attach the above listener to this Mailbox
        this.addEventListener(RequestCompleted.type, handleRequestCompleted);
      });
      this.pending.push(p);
    }
    waitForResponse();
  }

  /**
   * Returns the latest resolved result if there is one, otherwise returns the pending result
   */
  lastResult() {
    if (this.resolved.length > 0) {
      return this.resolved.at(-1);
    } else {
      return this.pending.at(-1);
    }
  }

  send(e: SubstrateEvent) {
    this.dispatchEvent(e);
  }
}
