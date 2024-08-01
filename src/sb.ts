import { FutureAnyObject, FutureString, input } from "substrate/Future";
import { StreamingResponse } from "substrate/SubstrateStreamingResponse";

export const sb = {
  concat: FutureString.concat,
  jq: FutureAnyObject.jq,
  interpolate: FutureString.interpolate,
  input,
  streaming: {
    fromSSEResponse: StreamingResponse.fromReponse,
  },
};
