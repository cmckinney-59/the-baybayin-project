import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/the-baybayin-project",
  build: {
    rollupOptions: {
      output: {
        // Windows doesn't reliably handle filenames ending with a dot.
        // Some assets (e.g. `LICENSE` files) have no extension, and the default
        // pattern can produce `name-hash.`; this avoids that.
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name ? path.extname(assetInfo.name) : "";
          return ext ? "assets/[name]-[hash][extname]" : "assets/[name]-[hash]";
        },
      },
    },
  },
});
