# Article Studio prototype

Standalone entry: `projects/modular-editorial-system/prototype/index.html`.
The case study imports `modal.js`; that file owns its dialog, iframe and styles.
The home modal (`pf.js`) is independent and unchanged.

`main.jsx` owns the editor and browser-only demo state. `data/sampleArticle.js`
contains the sample article/catalog. Images currently display clipped areas of
existing reference screenshots via CSS; there are no uploads or live product APIs.
Save/load uses the browser key `article-studio-demo`. Reopening starts with the
sample; “Load saved demo” explicitly restores the saved article.

## Removal

1. Remove the prototype entry block and modal script from the case-study HTML.
2. Remove `editorialPrototype` from `vite.config.js`.
3. Delete this directory and `projects/modular-editorial-system/prototype/`.
4. Rebuild `docs/` with `npm run build`.

Original Final Solution screenshots and the home modal do not depend on this code.
