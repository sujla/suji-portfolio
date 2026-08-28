export const projectSettings = {
  totalProjectCount: 3,
  yearRange: {
    start: 2020,
    end: 2026,
  },
};

export const projects = [
  {
    slug: "store-guide",
    analyticsId: "olive_young_store_finder",
    detailSlug: "store-finder-renewal",
    wip: false,
    number: "01",
    year: 2024,
    company: "CJ Olive Young",
    companyLabel: "Olive Young",
    keywords: ["E-commerce", "Discovery Optimization", "Map-based UX"],
    title: "Store Discovery, Renewed",
    sideTitle: "Map-based |Store Finder Renewal",
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
    image: "./assets/common/store-guide-main.avif",
  },
  {
    slug: "cta-enhancement",
    analyticsId: "cta_enhancement",
    detailSlug: "cta-enhancement",
    wip: true,
    number: "02",
    year: 2025,
    keywords: ["E-commerce", "Data-driven Design", "Conversion Optimization"],
    title: "Converting Intent |into Pickup",
    sideTitle: "Pickup Order UX Enhancement",
    brief: [
      "This data-driven enhancement focused on customers with clear purchase intent who needed a clearer final step toward pickup.",
      "By clarifying pickup CTAs and actions by store availability, the goal was to convert purchase intent into pickup more quickly and confidently."
    ],
    contribution: [
      "Identified friction after product decision",
      "Analyzed mistaken store-card clicks",
      "Designed CTA logic by store availability",
      "Increased page conversion by 321.3%",
    ],
    mediaShadow: {
      dark: "0 24px 56px rgba(0, 0, 0, 0.24)",
      light: "0 80px 130px rgba(49, 49, 49, 0.3), 0 32px 72px rgba(0, 0, 0, 0.06)",
    },
    image: "./assets/common/cta-enh-main.avif",
  },
  {
    slug: "article-studio",
    analyticsId: "article_studio_revamp",
    detailSlug: "modular-editorial-system",
    wip: true,
    number: "03",
    year: 2023,
    keywords: ["Workflow Automation", "Modular System"],
    title: "From Weeks |to Minutes",
    sideTitle: "Internal Editorial Tool Revamp",
    brief: [
    ],
    contribution: [
      "Led UX/UI design for the internal tool, Article Studio",
      "Designed flexible modular structures",
      "Enabled editor-led publishing",
      "Cut production from 2 weeks to 20 minutes",
    ],
    mediaShadow: {
      dark: "0 24px 56px rgba(0, 0, 0, 0.24)",
      light: "0 80px 130px rgba(255, 133, 26, 0.10), 0 32px 72px rgba(0, 0, 0, 0.06)",
    },
    image: "./assets/common/article-studio-main.avif",
  },
];
