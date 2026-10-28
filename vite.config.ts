import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const asyncHooksShim = path.resolve(__dirname, "src/lib/async-hooks-shim.ts");

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "node:async_hooks": asyncHooksShim,
      "async_hooks": asyncHooksShim,
    },
  },
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    react(),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: true,
    hmr: process.env.DISABLE_HMR !== "true",
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
