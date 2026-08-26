import { createRoot } from "react-dom/client";

import { DetailApp } from "./DetailApp.jsx";

const navRoot = document.querySelector(".detail-gnb");
const detailShell = document.querySelector(".detail-shell");
const contributionRoot = document.querySelector("[data-contribution-list]");
let titleRoot = null;

if (detailShell && !detailShell.querySelector(".detail-title-section")) {
  titleRoot = document.createElement("div");
  titleRoot.dataset.reactDetailTitle = "";
  titleRoot.style.display = "contents";
  detailShell.prepend(titleRoot);
}

const runtimeRoot = document.createElement("div");
runtimeRoot.dataset.reactDetailRuntime = "";
runtimeRoot.style.display = "contents";
document.body.prepend(runtimeRoot);

createRoot(runtimeRoot).render(
  <DetailApp
    navRoot={navRoot}
    titleRoot={titleRoot}
    contributionRoot={contributionRoot}
  />,
);
