/**
 * Errors thrown by the Substrate SDK will be instances of `SubstrateError`.
 */
export class SubstrateError extends Error {}

export class RequestTimeoutError extends SubstrateError {}

export class NodeError extends SubstrateError {
  type: string;
  override message: string;

  constructor(type: string, message: string) {
    super(message);
    this.type = type;
    this.message = message;
  }
}
