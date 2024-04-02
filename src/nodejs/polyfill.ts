/**
 * While we're generally aiming to support ES2022 and Node 18+ we're also including
 * polyfill code for now for some of the Standard Web APIs that we use in this SDK.
 */
import fetch, { Headers, Request, Response } from "node-fetch";

if (!globalThis.fetch) {
  // @ts-ignore
  globalThis.fetch = fetch;
  // @ts-ignore
  globalThis.Headers = Headers;
  // @ts-ignore
  globalThis.Request = Request;
  // @ts-ignore
  globalThis.Response = Response;
}
