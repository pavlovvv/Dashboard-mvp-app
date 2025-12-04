import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      ui: path.resolve(__dirname, "src/ui"),
      blocks: path.resolve(__dirname, "src/ui/Blocks"),
      dashboard: path.resolve(__dirname, "src/ui/Dashboard"),
    },
  },
});
