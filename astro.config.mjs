import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://premioshuella.gslosdescalzos.com",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
