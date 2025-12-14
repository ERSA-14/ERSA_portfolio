import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

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
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom", "framer-motion"],
          three: ["three"],
          ui: ["lucide-react", "react-icons", "clsx", "tailwind-merge"],
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
