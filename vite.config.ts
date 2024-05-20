import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/course-React-/",
  resolve: {
    alias: {
      common: "/src/common",
      components: "/src/components",
      "components-animated": "/src/components-animated",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/style/auto-import.scss";',
      },
    },
  },
});
