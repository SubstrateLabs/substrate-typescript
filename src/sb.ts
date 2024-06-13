import { FutureAnyObject, FutureString } from "substrate/Future";
import { StreamingResponse } from "substrate/SubstrateStreamingResponse";

export const sb = {
  concat: FutureString.concat,
  jq: FutureAnyObject.jq,
  interpolate: FutureString.interpolate,
  streaming: {
    fromSSEResponse: StreamingResponse.fromReponse,
  },
};
