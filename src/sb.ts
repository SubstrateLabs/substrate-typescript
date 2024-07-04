import { concat, interpolate } from "substrate/Future";
import { StreamingResponse } from "substrate/SubstrateStreamingResponse";

export const sb = {
  concat,
  // jq: Future.jq,
  interpolate,
  streaming: {
    fromSSEResponse: StreamingResponse.fromReponse,
  },
};
