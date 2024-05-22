import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/course-React-/",
  resolve: {
    alias: {
      common: "/src/common",
      components: "/src/components",
      "components-animated": "/src/components-animated",
      utils: "/src/utils",
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
