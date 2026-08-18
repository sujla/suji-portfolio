import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const fromRoot = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  base: "/suji-portfolio/",
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: fromRoot("./index.html"),
        convertingIntent: fromRoot(
          "./projects/converting-intent-into-pickup/index.html",
        ),
        convertingIntentNova: fromRoot(
          "./projects/converting-intent-into-pickup/susususupanova.html",
        ),
        articleStudio: fromRoot("./projects/from-weeks-to-minutes/index.html"),
        articleStudioNova: fromRoot(
          "./projects/from-weeks-to-minutes/susususupanova.html",
        ),
        storeGuide: fromRoot(
          "./projects/nearby-stores-right-products/index.html",
        ),
      },
    },
  },
});
