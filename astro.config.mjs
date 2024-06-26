import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://www.gauthiercedric.fr/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    react(),
  ],
  buildOptions: {
    dist: "public", // Spécifie le répertoire de sortie
  },
});
