import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// Absolute root base: works on localhost, Vercel and Netlify. A relative './'
// base broke the demo/PDF links whenever the page URL had a sub-path.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
