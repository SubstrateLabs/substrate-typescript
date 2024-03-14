import * as Future from "substrate/Future";

var AUTO_LOADED = false;
var AUTO_LOOKUP_TABLE;
var AUTO_CONTEXT;

if (!AUTO_LOADED) {
  AUTO_LOOKUP_TABLE = new Future.LookupTable();
  AUTO_CONTEXT = Future.makeContext(AUTO_LOOKUP_TABLE);
  AUTO_LOADED = true;
}

export const context = AUTO_CONTEXT!;

export const pub = {
  stringConcat: context.stringConcat,
};
