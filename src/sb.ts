import { concat, interpolate, jq, get, at } from "substrate/Future";
import { StreamingResponse } from "substrate/SubstrateStreamingResponse";

export const sb = {
  concat,
  jq,
  interpolate,
  get,
  at,
  streaming: {
    fromSSEResponse: StreamingResponse.fromReponse,
  },
};
