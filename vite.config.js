import { cp } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const fromRoot = (path) => fileURLToPath(new URL(path, import.meta.url));

const copyRuntimeAssets = {
  name: "copy-runtime-assets",
  apply: "build",
  async closeBundle() {
    await cp(fromRoot("./assets"), fromRoot("./docs/assets"), {
      recursive: true,
    });
  },
};

export default defineConfig({
  base: "/suji-portfolio/",
  plugins: [copyRuntimeAssets],
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: fromRoot("./index.html"),
        convertingIntent: fromRoot(
          "./projects/cta-enhancement/index.html",
        ),
        convertingIntentNova: fromRoot(
          "./projects/cta-enhancement/susususupanova.html",
        ),
        articleStudio: fromRoot("./projects/modular-editorial-system/index.html"),
        articleStudioNova: fromRoot(
          "./projects/modular-editorial-system/susususupanova.html",
        ),
        storeGuide: fromRoot(
          "./projects/store-finder-renewal/index.html",
        ),
        legacyStoreGuide: fromRoot(
          "./projects/nearby-stores-right-products/index.html",
        ),
        legacyConvertingIntent: fromRoot(
          "./projects/converting-intent-into-pickup/index.html",
        ),
        legacyConvertingIntentNova: fromRoot(
          "./projects/converting-intent-into-pickup/susususupanova.html",
        ),
        legacyArticleStudio: fromRoot(
          "./projects/from-weeks-to-minutes/index.html",
        ),
        legacyArticleStudioNova: fromRoot(
          "./projects/from-weeks-to-minutes/susususupanova.html",
        ),
      },
    },
  },
});
