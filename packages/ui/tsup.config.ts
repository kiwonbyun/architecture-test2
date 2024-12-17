import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["react", "react-dom"],
  minify: true,
  treeshake: false,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
