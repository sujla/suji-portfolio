import { createRoot } from "react-dom/client";

import { DetailApp } from "./DetailApp.jsx";

const navRoot = document.querySelector(".detail-gnb");
const detailShell = document.querySelector(".detail-shell");
// The build writes the company name and contributions into the HTML
// (inlineDetailProjectData in vite.config.js); only render them here when missing.
const emptyOrNull = (element) => (element && !element.hasChildNodes() ? element : null);
const companyRoot = emptyOrNull(document.querySelector("[data-company-name]"));
const contributionRoot = emptyOrNull(document.querySelector("[data-contribution-list]"));
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
document.body.append(runtimeRoot);

createRoot(runtimeRoot).render(
  <DetailApp
    navRoot={navRoot}
    titleRoot={titleRoot}
    companyRoot={companyRoot}
    contributionRoot={contributionRoot}
  />,
);
