import path from "path";
import { defineConfig as defineLovableConfig } from "@lovable.dev/vite-tanstack-config";
import { defineConfig as defineViteConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default ((env: any) => {
  const asyncHooksShim = path.resolve(__dirname, "src/lib/async-hooks-shim.ts");

  if (env.command === "build") {
    return {
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
      build: {
        outDir: "dist",
        emptyOutDir: true,
      },
    };
  }

  return defineLovableConfig({
    tanstackStart: {
      server: { entry: "server" },
    },
    vite: {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "src"),
          "node:async_hooks": asyncHooksShim,
          "async_hooks": asyncHooksShim,
        },
      },
      server: {
        host: "0.0.0.0",
        port: 3000,
        allowedHosts: true,
        hmr: process.env.DISABLE_HMR !== "true",
        watch: process.env.DISABLE_HMR === "true" ? null : {},
      },
    },
  })(env);
}) as any;

