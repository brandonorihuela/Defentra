import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "defentra-website-09ncjz-0d65ae-178-18-248-85.traefik.me",
    ],
  },

  preview: {
    allowedHosts: [
      "defentra-website-09ncjz-0d65ae-178-18-248-85.traefik.me",
    ],
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
