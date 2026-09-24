import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const pages = [
  "index.html",
  "projects/store-finder-renewal/index.html",
  "projects/cta-enhancement/index.html",
  "projects/modular-editorial-system/index.html",
  "projects/modular-editorial-system/prototype/index.html",
];

function loadTag(path, hostname) {
  const html = readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
  const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)]
    .map((match) => match[1])
    .filter((script) => script.includes("googletagmanager.com/gtag/js"));
  assert.equal(scripts.length, 1, "Each measured page must initialize one tag");
  const appended = [];
  const window = { location: { hostname } };
  const document = {
    title: html.match(/<title>(.*?)<\/title>/)[1],
    createElement: () => ({}),
    head: { append: (script) => appended.push(script) },
  };
  runInNewContext(scripts[0], { window, document });
  return { window, appended };
}

for (const prefix of ["", "docs/"]) {
  for (const page of pages) {
    const path = prefix + page;
    test(`${path}: production queues valid commands and one automatic pageview configuration`, () => {
      const { window, appended } = loadTag(path, "sujla.github.io");
      assert.equal(appended.length, 1);
      assert.equal(appended[0].async, true);
      assert.equal(appended[0].src, "https://www.googletagmanager.com/gtag/js?id=G-ZYEBT08N8L");
      assert.deepEqual(Array.from(window.dataLayer, (command) => command[0]), ["js", "config"]);
      assert.equal(window.dataLayer[1][1], "G-ZYEBT08N8L");
      assert.notEqual(window.dataLayer[1][2]?.send_page_view, false);
      window.gtag("event", "pf_work_card_click", { project_id: "test" });
      for (const command of window.dataLayer) {
        assert.equal(Object.prototype.toString.call(command), "[object Arguments]",
          "Google tag must receive Arguments, not rest-parameter Arrays");
      }
      assert.equal(window.dataLayer[2][0], "event");
      assert.equal(window.dataLayer[2][1], "pf_work_card_click");
      assert.equal(window.dataLayer[2][2].project_id, "test");
    });

    test(`${path}: local and private hosts do not collect analytics`, () => {
      for (const host of ["localhost", "0.0.0.0", "127.0.0.1", "::1", "[::1]", "10.0.0.1", "192.168.1.2", "172.16.0.1", "172.31.255.255"]) {
        const { window, appended } = loadTag(path, host);
        assert.equal(window.gtag, undefined, host);
        assert.equal(window.dataLayer, undefined, host);
        assert.equal(appended.length, 0, host);
      }
    });
  }
}

test("redirect-only pages do not count an additional pageview", () => {
  const redirects = [
    "projects/cta-enhancement/susususupanova.html",
    "docs/projects/cta-enhancement/susususupanova.html",
    "docs/projects/nearby-stores-right-products/index.html",
    "docs/projects/converting-intent-into-pickup/index.html",
    "docs/projects/converting-intent-into-pickup/susususupanova.html",
    "docs/projects/from-weeks-to-minutes/index.html",
  ];
  for (const path of redirects) {
    const html = readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
    assert.ok(html.includes("window.location.replace"), path);
    assert.ok(!html.includes("googletagmanager.com/gtag/js"), path);
  }
});
