import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/nodejs/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  keepNames: true,
  cjsInterop: true,
  splitting: true,
  minify: false,
  clean: true,
  sourcemap: true,
});
