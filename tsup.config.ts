import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  keepNames: true,
  cjsInterop: true,
  splitting: true,
  clean: true,
  sourcemap: true,
});
