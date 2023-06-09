import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 5000,
  },
  resolve: { alias: { "@": "src" } },

  plugins: [react()],

  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test-config.js",
  },
});
