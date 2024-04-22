// including polyfill for node16 support
import "substrate/nodejs/polyfill";

import { expect, describe, test } from "vitest";
import { SubstrateResponse } from "substrate/SubstrateResponse";
import { Node } from "substrate/Node";
import { NodeError } from "substrate/Error";

class FooNode extends Node {}

describe("SubstrateResponse", () => {
  test(".requestId null when not present in response", () => {
    // When there is no request-id present in the response headers.
    const request = new Request("http://127.0.0.1");
    const response = new Response();
    const responseJSON = {};
    const sbResponse = new SubstrateResponse(request, response, responseJSON);

    expect(sbResponse.requestId).toBeNull();
  });

  test(".requestId present when present in response", () => {
    // When there is no request-id present in the response headers.
    const request = new Request("http://127.0.0.1");
    const response = new Response(null, {
      headers: { "cf-ray": "REQUEST_ID" },
    });
    const responseJSON = {};
    const sbResponse = new SubstrateResponse(request, response, responseJSON);

    expect(sbResponse.requestId).toEqual("REQUEST_ID");
  });

  test(".getError returns a `NodeError` when node output in an error", () => {
    // NOTE: we're selecting the response off the Node currently to support a previous
    // design, but may change this internal implementation
    const node = new FooNode({}, { id: "nodeId" });

    const request = new Request("http://127.0.0.1");
    const response = new Response();
    const responseJSON = {
      data: {
        [node.id]: {
          type: "error_type",
          message: "error_message",
          request_id: "error_request_id",
        },
      },
    };
    const sbResponse = new SubstrateResponse(request, response, responseJSON);
    // @ts-expect-error (accessing protected)
    node.response = sbResponse;

    const nodeError = new NodeError(
      "error_type",
      "error_message",
      "error_request_id",
    );

    // @ts-expect-error: the type AnyNode here should be expanded to encompass all Node instances, but it isn't yet.
    expect(sbResponse.getError(node)).toEqual(nodeError);
  });

  test(".getError returns a `undefined` when node output is not an error", () => {
    // NOTE: we're selecting the response off the Node currently to support a previous
    // design, but may change this internal implementation
    const node = new FooNode({}, { id: "nodeId" });

    const request = new Request("http://127.0.0.1");
    const response = new Response();
    const responseJSON = {
      data: {
        [node.id]: {
          nodeOutput: "something_that_is_not_an_error",
        },
      },
    };
    const sbResponse = new SubstrateResponse(request, response, responseJSON);
    // @ts-expect-error (accessing protected)
    node.response = sbResponse;

    // @ts-expect-error: the type AnyNode here should be expanded to encompass all Node instances, but it isn't yet.
    expect(sbResponse.getError(node)).toBeUndefined();
  });

  test(".get throws `NodeError` when node output is an error", () => {
    // NOTE: we're selecting the response off the Node currently to support a previous
    // design, but may change this internal implementation
    const node = new FooNode({}, { id: "nodeId" });

    const request = new Request("http://127.0.0.1");
    const response = new Response();
    const responseJSON = {
      data: {
        [node.id]: {
          type: "error_type",
          message: "error_message",
          request_id: "error_request_id",
        },
      },
    };
    const sbResponse = new SubstrateResponse(request, response, responseJSON);
    // @ts-expect-error (accessing protected)
    node.response = sbResponse;

    // @ts-expect-error: the type AnyNode here should be expanded to encompass all Node instances, but it isn't yet.
    expect(() => sbResponse.get(node)).toThrowError(/error_message/);
  });

  test(".get returns node output when node output is not an error", () => {
    // NOTE: we're selecting the response off the Node currently to support a previous
    // design, but may change this internal implementation
    const node = new FooNode({}, { id: "nodeId" });

    const request = new Request("http://127.0.0.1");
    const response = new Response();
    const responseJSON = {
      data: {
        [node.id]: {
          nodeOutput: "something_that_is_not_an_error",
        },
      },
    };
    const sbResponse = new SubstrateResponse(request, response, responseJSON);
    // @ts-expect-error (accessing protected)
    node.response = sbResponse;

    // @ts-expect-error: the type AnyNode here should be expanded to encompass all Node instances, but it isn't yet.
    expect(sbResponse.get(node)).toEqual({
      nodeOutput: "something_that_is_not_an_error",
    });
  });
});
