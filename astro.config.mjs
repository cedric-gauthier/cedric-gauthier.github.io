import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://cedric-gauthier.github.io',
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    react(),
  ],
  buildOptions: {
    dist: "public/artifact", // Spécifie le répertoire de sortie
  },
});
