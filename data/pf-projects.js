export const pfProjects = [
  {
    id: "store-finder",
    type: "e-commerce",
    href: "./projects/store-finder-renewal/",
    title: "Store Finder Renewal for Business Impact",
    summary: "Connecting nearby stores, product availability, and pickup in one map-based experience.",
    companyLabel: "CJ Olive Young",
    year: 2024,
    deviceType: "mobile",
    media: "store-finder-renewal",
    projectMedia: "./assets/common/store-finder-renewal-main.avif",
    projectMediaAlt:
      "Olive Young Store Finder Renewal: iPhone mockups showing the map-based store finder, store list with favorites, stock availability, and pickup cart",
    cta: {
      label: "View Case Study",
      href: "./projects/store-finder-renewal/",
      newTab: false,
    },
  },
  {
    id: "cta-enhancement",
    type: "e-commerce",
    href: "./projects/cta-enhancement/",
    title: "Pickup Order UX Enhancement",
    summary: "Clarifying the final step from purchase intent to store pickup.",
    companyLabel: "CJ Olive Young",
    year: 2025,
    deviceType: "mobile",
    projectMedia: "./assets/cta-enhancement/cement-stairs.webp",
    projectMediaAlt:
      "Olive Young Pickup Order UX Enhancement: phone on cement stairs showing the Stores with Stock screen with stock levels and an Order Pickup button",
    cta: {
      label: "View Case Study",
      href: "./projects/cta-enhancement/",
      newTab: false,
    },
  },
  {
    id: "modular-editorial-system",
    type: "enterprise",
    href: "./projects/modular-editorial-system/",
    title: "Editorial Workflow Revamp",
    summary: "A modular publishing system that gives content editors control of their workflow.",
    companyLabel: "CJ Olive Young",
    year: 2024,
    deviceType: "web",
    projectMedia: "./assets/common/modular-editorial-system-main.avif",
    projectMediaAlt:
      "Olive Young Editorial Workflow Revamp: laptop showing the Article Studio editor with a live mobile article preview and image module settings",
    cta: {
      label: "View Case Study",
      href: "./projects/modular-editorial-system/",
      newTab: false,
    },
  },
  {
    id: "public-transport",
    type: "mobility",
    types: ["ai", "mobility"],
    title: "Public Transport App in SG",
    companyLabel: "Taurus Labs",
    year: 2026,
    deviceType: "mobile",
    modalDescription:
      "Finding the right MRT exit and exploring transit routes on a full-screen map still felt harder than it should be. I built BusMrtSG to solve those transit-specific problems using AI coding tools and a serverless architecture.",
  },
  {
    id: "perp-dex",
    type: "fintech",
    title: "Clearer Control for Perp Trading",
    companyLabel: "Taurus Labs",
    year: 2025,
    deviceType: "mobile",
    modalDescription:
      "I redesigned the trading and wallet experience to streamline key workflows, helping users act with greater speed and confidence while improving portfolio visibility and transaction clarity.",
  },
  {
    id: "investor-reporting",
    type: "enterprise",
    title: "Streamlining Investor Reporting",
    companyLabel: "QuotaBook",
    year: 2022,
    modalDescription:
      "Startups submit recurring reports to every investor, each in a different format. I led the design from user interviews to launch, reducing repetitive reporting work so startups can focus more on their core business.",
    slides: Array.from(
      { length: 17 },
      (_, index) => `./assets/investor-reporting/slide-${String(index + 1).padStart(2, "0")}.webp`,
    ),
  },
];
