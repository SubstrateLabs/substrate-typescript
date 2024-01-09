/**
 * ts-to-zod configuration.
 *
 * @type {import("ts-to-zod").TsToZodConfig}
 */
module.exports = {
  input: "src/NewSchema/OpenAPI.ts",
  output: "src/NewSchema/OpenAPI.zod.ts",
  inferredTypes: "src/NewSchema/OpenAPI.types.ts",
  nameFilter: (name) => name === "components",
};
