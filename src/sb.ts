import { FutureAnyObject, FutureVariable, FutureString } from "substrate/Future";
import { StreamingResponse } from "substrate/SubstrateStreamingResponse";

export const sb = {
  concat: FutureString.concat,
  jq: FutureAnyObject.jq,
  interpolate: FutureString.interpolate,
  /**
   * `var` is used to specify a variable that can be bound to a name when creating a `module` (re-usable Substrate Graph)
   * * Input types and validation paramters may optionally be described using a JSON Schema object.
   * * Default values may also be specified here and will be used if user input is not provided for this input.
   */
  var: (schema: FutureVariable["schema"]) => {
    // NOTE: using `any` as the return type here for now to ease using
    // this in general node input args or helper functions.
    //
    // Once we ship our Future type reorganization work, we can just
    // use this as-is (Future<any>)
    return new FutureVariable(schema) as any;
  },
  streaming: {
    fromSSEResponse: StreamingResponse.fromReponse,
  },
};
