/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    exclude: ["./node_modules/**"],
    setupFiles: ["./src/testing/vitest-setup.ts"],
    coverage: {
      include: ["./src/**"],
    },
  },
});
