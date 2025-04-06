/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./src/testing/vitest-setup.ts"],
    exclude: ["**/node_modules/**"],
    coverage: {
      include: ["src/**"]
    }
  }
})