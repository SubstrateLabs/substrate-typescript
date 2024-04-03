/**
 * Errors thrown by the Substrate SDK will be instances of `SubstrateError`.
 */
export class SubstrateError extends Error {}

export class RequestTimeoutError extends SubstrateError {}

export class NodeError {
  type: string;
  message: string;
  constructor(type: string, message: string) {
    this.type = type;
    this.message = message;
  }
}
