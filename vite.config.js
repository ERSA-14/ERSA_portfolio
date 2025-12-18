import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom") ||
              id.includes("framer-motion")
            ) {
              return "vendor";
            }
            if (id.includes("three")) {
              return "three";
            }
            if (
              id.includes("lucide-react") ||
              id.includes("react-icons") ||
              id.includes("clsx") ||
              id.includes("tailwind-merge")
            ) {
              return "ui";
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  css: {
    postcss: {},
  },
  publicDir: "public",
  base: "/",
});
