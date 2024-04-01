/**
 * Errors thrown by the Substrate SDK will be instances of `SubstrateError`.
 */
export class SubstrateError extends Error {}

export class RequestTimeoutError extends SubstrateError {}
