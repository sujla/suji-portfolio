import { createRoot, hydrateRoot } from "react-dom/client";

import { HomePage } from "./HomePage.jsx";

const container = document.getElementById("root");

// Production builds ship prerendered markup (scripts/prerender.mjs), so attach
// to it. The dev server serves an empty root and renders from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, <HomePage />);
} else {
  createRoot(container).render(<HomePage />);
}
