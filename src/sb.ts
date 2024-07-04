import { concat, interpolate, jq } from "substrate/Future";
import { StreamingResponse } from "substrate/SubstrateStreamingResponse";

export const sb = {
  concat,
  jq,
  interpolate,
  streaming: {
    fromSSEResponse: StreamingResponse.fromReponse,
  },
};
