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

const legacyProjectRedirects = [
  {
    fileName: "projects/nearby-stores-right-products/index.html",
    target: "../store-finder-renewal/",
    label: "Store Finder Renewal",
  },
  {
    fileName: "projects/converting-intent-into-pickup/index.html",
    target: "../cta-enhancement/",
    label: "CTA Enhancement",
  },
  {
    fileName: "projects/converting-intent-into-pickup/susususupanova.html",
    target: "../cta-enhancement/susususupanova.html",
    label: "its new URL",
  },
  {
    fileName: "projects/from-weeks-to-minutes/index.html",
    target: "../modular-editorial-system/",
    label: "Modular Editorial System",
  },
  {
    fileName: "projects/from-weeks-to-minutes/susususupanova.html",
    target: "../modular-editorial-system/susususupanova.html",
    label: "its new URL",
  },
];

const createLegacyRedirectHtml = ({ target, label }) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page moved | Suji Kweon</title>
    <script>
      const target = new URL(${JSON.stringify(target)}, window.location.href);
      target.search = window.location.search;
      target.hash = window.location.hash;
      window.location.replace(target.href);
    </script>
  </head>
  <body>
    <p>This page has moved to <a href="${target}">${label}</a>.</p>
  </body>
</html>
`;

const emitLegacyProjectRedirects = {
  name: "emit-legacy-project-redirects",
  apply: "build",
  generateBundle() {
    legacyProjectRedirects.forEach((redirect) => {
      this.emitFile({
        type: "asset",
        fileName: redirect.fileName,
        source: createLegacyRedirectHtml(redirect),
      });
    });
  },
};

export default defineConfig({
  base: "/suji-portfolio/",
  plugins: [copyRuntimeAssets, emitLegacyProjectRedirects],
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
      },
    },
  },
});
