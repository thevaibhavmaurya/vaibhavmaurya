import { Resource } from "../types/resource";

export const resources: Resource[] = [
  {
    id: "utilities",
    title: "Developer Utilities",
    description: "Nifty little tools that simplify everyday development tasks.",
    items: [
      {
        name: "Haikei",
        description:
          "Create organic SVG shapes like blobs, waves, and grids to spice up your UI.",
        url: "https://app.haikei.app/",
        tags: ["svg", "generator", "shapes"],
        free: true,
      },
      {
        name: "Ray.so",
        description:
          "Convert your code snippets into beautiful images to share on social or blogs.",
        url: "https://ray.so/",
        tags: ["code", "images", "snippets"],
        free: true,
      },
      {
        name: "Meta Tags",
        description:
          "Preview and generate SEO-friendly meta tags for your site.",
        url: "https://metatags.io/",
        tags: ["seo", "tools"],
        free: true,
      },
      {
        name: "Hypercolor",
        description: "A collection of Tailwind-compatible gradient palettes.",
        url: "https://hypercolor.dev/",
        tags: ["tailwind", "gradients"],
        free: true,
      },
      {
        name: "Neumorphism.io",
        description:
          "Generate soft UI shadows and layouts for neumorphic designs.",
        url: "https://neumorphism.io/",
        tags: ["ui", "design", "shadows"],
        free: true,
      },
    ],
  },
  {
    id: "interface-inspo",
    title: "Interface Ideas",
    description:
      "Helpful sites to explore components, layouts, and micro UI patterns.",
    items: [
      {
        name: "Lookup.design",
        description: "A visual search engine for components and UI references.",
        url: "https://lookup.design/",
        tags: ["components", "ui", "ux"],
        free: true,
      },
      {
        name: "Alexandru.so",
        description:
          "A growing library of polished Tailwind snippets for dashboards and layouts.",
        url: "https://www.alexandru.so/tailwind-snippets",
        tags: ["tailwind", "components"],
        free: true,
      },
      {
        name: "Microcopy.me",
        description:
          "A better alternative to 'Lorem Ipsum' with examples of real UI copy.",
        url: "https://microcopy.me/",
        tags: ["ux", "copywriting"],
        free: true,
      },
    ],
  },
  {
    id: "icons-graphics",
    title: "Icons & Graphics",
    description: "Visual assets to enhance UI without bloating your workflow.",
    items: [
      {
        name: "Lucide Icons",
        description:
          "Pixel-perfect, open-source icon set, ideal for modern UIs.",
        url: "https://lucide.dev/",
        tags: ["icons", "svg", "react"],
        free: true,
      },
      {
        name: "Get Avataaars",
        description:
          "Generate customizable cartoon avatars for onboarding screens or profile UIs.",
        url: "https://getavataaars.com/",
        tags: ["avatars", "generator"],
        free: true,
      },
      {
        name: "Undesign",
        description:
          "One-stop collection of free icons, illustrations, fonts, and mockups.",
        url: "https://undesign.learn.uno/",
        tags: ["illustrations", "icons", "mockups"],
        free: true,
      },
    ],
  },
  {
    id: "performance-productivity",
    title: "Productivity & Workflow",
    description:
      "Tools that save time, boost quality, or improve your dev workflow.",
    items: [
      {
        name: "Responsively",
        description:
          "View and test your site across multiple device sizes in a single window.",
        url: "https://responsively.app/",
        tags: ["responsive", "testing", "preview"],
        free: true,
      },
      {
        name: "EasyDB",
        description:
          "One-click, zero-config database setup for quick MVPs or demos.",
        url: "https://easydb.io/",
        tags: ["database", "testing"],
        free: true,
      },
      {
        name: "Peek.link",
        description:
          "Create social share preview images for links without any design software.",
        url: "https://peek.link/",
        tags: ["meta", "social", "images"],
        free: true,
      },
    ],
  },
  {
    id: "placeholders-mock",
    title: "Mockups & Placeholders",
    description:
      "Generate fake content and visuals to prototype your layout faster.",
    items: [
      {
        name: "Lorem Ipsum Generator",
        description:
          "Flexible placeholder text for different lengths and types.",
        url: "https://loripsum.net/",
        tags: ["lorem", "text"],
        free: true,
      },
      {
        name: "Picsum Photos",
        description:
          "Random placeholder images with optional size and grayscale.",
        url: "https://picsum.photos/",
        tags: ["images", "placeholder"],
        free: true,
      },
      {
        name: "Shots.so",
        description:
          "Create high-quality mockups of your app or website screenshots.",
        url: "https://shots.so/",
        tags: ["mockups", "presentation"],
        free: false, // paid/free tier
      },
    ],
  },
];
