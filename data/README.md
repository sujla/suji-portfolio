Add or reorder portfolio projects in `projects.js`.

Project fields:

```js
{
  slug: "project-url-id",
  detailSlug: "project-detail-page-folder",
  number: "03",
  year: 2025,
  keywords: ["Keyword", "Keyword"],
  title: "Main Title|Line Two",
  sideTitle: "Left Meta|Line Two",
  brief: [
    "Brief paragraph",
    "Result paragraph",
  ],
  contribution: [
    "Contribution item",
    "Contribution item",
  ],
  keyColor: "#17ff2b",
  subColor: "rgba(23, 255, 43, 0.18)",
  mediaShadow: {
    dark: "0 48px 130px rgba(0, 149, 5, 0.32), 0 8px 48px rgba(0, 0, 0, 0.08)",
    light: "0 48px 130px rgba(0, 149, 5, 0.18), 0 8px 48px rgba(0, 0, 0, 0.06)",
  },
  image: "./assets/project-image.png"
}
```

If `image` is empty, the page renders a blank placeholder. Add project images to `assets/`.

Project detail URLs use `detailSlug` and point to standalone folders in `projects/`.

Example: `detailSlug: "nearby-stores-right-products"` becomes `projects/nearby-stores-right-products/`.
If `detailSlug` is empty, the URL falls back to a generated slug from `title`.

Each detail page is a separate editable file at `projects/{detailSlug}/index.html`.
