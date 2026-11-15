// Injects the server-rendered home page into docs/index.html after the client
// build, so crawlers and AI search tools get real text instead of an empty root.
import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const fromRoot = (path) => fileURLToPath(new URL(`../${path}`, import.meta.url));
const placeholder = '<div id="root"></div>';

const htmlPath = fromRoot("docs/index.html");
const html = await readFile(htmlPath, "utf8");

if (!html.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in docs/index.html`);
}

const { render } = await import(pathToFileURL(fromRoot(".ssr/entry-server.mjs")).href);
const markup = render();

if (!markup.includes("Lead Product Designer") || !markup.includes("pf-work-grid")) {
  throw new Error("prerender: rendered markup is missing expected home page content");
}

await writeFile(htmlPath, html.replace(placeholder, () => `<div id="root">${markup}</div>`));
await rm(fromRoot(".ssr"), { recursive: true, force: true });

console.log(`prerender: wrote ${markup.length} bytes of markup into docs/index.html`);
