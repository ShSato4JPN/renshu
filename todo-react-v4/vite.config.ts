/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./src/testing/setup-tests.ts"],
    exclude: ["./node_modules/**"],
    coverage: {
      include: ["./src/**"]
    }
  }
})
