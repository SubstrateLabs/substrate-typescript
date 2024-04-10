import { FutureAnyObject, FutureString } from "substrate/Future";

export const sb = {
  concat: FutureString.concat,
  jq: FutureAnyObject.jq,
  interpolate: FutureString.interpolate,
};
