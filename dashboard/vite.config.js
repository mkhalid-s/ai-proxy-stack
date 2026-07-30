import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// This is a library build rather than a standalone SPA: apx-gateway continues
// to own routing, authentication, API responses, and deployment.
export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: "../share/dashboard",
    emptyOutDir: true,
    lib: {
      entry: "src/main.js",
      formats: ["es"],
      fileName: "app"
    },
    rollupOptions: {
      output: {
        assetFileNames: "app.[ext]"
      }
    }
  }
});
