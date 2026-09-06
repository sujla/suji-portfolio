import { pfProjects } from "./pf-projects.js";

const pfProjectById = Object.fromEntries(pfProjects.map((project) => [project.id, project]));

export const projectSettings = {
  totalProjectCount: 3,
  yearRange: {
    start: 2020,
    end: 2026,
  },
};

export const projects = [
  {
    slug: "store-finder-renewal",
    analyticsId: "olive_young_store_finder",
    detailSlug: "store-finder-renewal",
    wip: false,
    number: "01",
    year: 2024,
    company: "CJ Olive Young",
    companyLabel: "Olive Young",
    keywords: ["E-commerce", "Omnichannel Experience", "Operational Efficiency"],
    title: pfProjectById["store-finder"].title,
    sideTitle: pfProjectById["store-finder"].title,
    brief: [
      "This project aimed to transform Olive Young’s static store finder into a map-based shopping tool.",
      "The goal was to help customers connect product interest to nearby store availability and pickup, reducing friction between digital browsing and physical store purchase."
    ],
    contribution: [
      "Led the end-to-end redesign of Olive Young’s store finder experience",
      "Integrated store info, inventory, and pickup flows into a map-based finder built around real shopping behavior",
      "Increased available-store list views by 32.9%, with pickup conversion reaching up to 11%",
    ],
    mediaShadow: {
      dark: "0 24px 56px rgba(0, 0, 0, 0.24)",
      light: "0 80px 130px rgba(0, 176, 6, 0.22), 0 32px 72px rgba(0, 0, 0, 0.06)",
    },
    image: "./assets/common/store-finder-renewal-main.avif",
  },
  {
    slug: "cta-enhancement",
    analyticsId: "cta-enhancement",
    detailSlug: "cta-enhancement",
    wip: false,
    number: "02",
    year: 2025,
    company: "CJ Olive Young",
    companyLabel: "Olive Young",
    keywords: ["E-commerce", "Data-driven Design", "Conversion Optimization"],
    title: pfProjectById["cta-enhancement"].title,
    sideTitle: pfProjectById["cta-enhancement"].title,
    brief: [
      "This data-driven enhancement focused on customers with clear purchase intent who needed a clearer final step toward pickup.",
      "By clarifying pickup CTAs and actions by store availability, the goal was to convert purchase intent into pickup more quickly and confidently."
    ],
    contribution: [
      "Identified friction after product decision",
      "Analyzed mistaken store-card clicks",
      "Designed CTA logic by store availability",
      "Clarified pickup eligibility and in-store-only purchases",
    ],
    mediaShadow: {
      dark: "0 24px 56px rgba(0, 0, 0, 0.24)",
      light: "0 80px 130px rgba(49, 49, 49, 0.3), 0 32px 72px rgba(0, 0, 0, 0.06)",
    },
    image: "./assets/cta-enhancement/cta-enhancement-main.avif",
  },
  {
    slug: "modular-editorial-system",
    analyticsId: "modular_editorial_system",
    detailSlug: "modular-editorial-system",
    wip: true,
    number: "03",
    year: 2024,
    company: "CJ Olive Young",
    companyLabel: "Olive Young",
    keywords: ["Internal Tool", "Editorial Workflow", "Modular System"],
    title: pfProjectById["modular-editorial-system"].title,
    sideTitle: pfProjectById["modular-editorial-system"].title,
    brief: [
      "This project gave content editors a direct way to create, edit, and publish magazine articles without depending on designers or publishers.",
      "A scalable modular structure and intuitive editing workflow reduced article production time from two weeks to 20 minutes.",
    ],
    contribution: [
      "Led UI/UX design for Olive Young’s modular editorial system",
      "Built reusable content modules with standardized editing controls",
      "Enabled content editors to create and publish articles independently",
      "Cut production time from 2 weeks to 20 minutes",
    ],
    mediaShadow: {
      dark: "0 24px 56px rgba(0, 0, 0, 0.24)",
      light: "0 80px 130px rgba(255, 133, 26, 0.10), 0 32px 72px rgba(0, 0, 0, 0.06)",
    },
    image: "./assets/common/modular-editorial-system-main.avif",
  },
];
