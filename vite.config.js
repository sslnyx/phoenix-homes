import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ph",
  plugins: [react()],
  sassOptions: {
    includePaths: [path.join(__dirname, "src/assets/scss")],
    prependData: `@import "_variables.scss";`,
  },
});
