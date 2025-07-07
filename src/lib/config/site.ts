import { SiteConfig } from "../types/global";

export const siteConfig: SiteConfig = {
  name: "Vaibhav Maurya",
  description:
    "Full-stack developer specializing in React, Next.js, and modern web technologies. Building scalable applications and sharing knowledge through technical articles.",
  url: "https://vaibhavmaurya.com",
  ogImage: "https://vaibhavmaurya.com/images/pages/portfolio.webp",
  author: {
    name: "Vaibhav Maurya",
    email: "thevaibhavmaurya@gmail.com",
    location: "Lucknow, India",
    twitterUsername: "hevaibhavmaurya",
    twitter: "https://x.com/hevaibhavmaurya",
    github: "https://github.com/thevaibhavmaurya",
    linkedin: "https://linkedin.com/in/thevaibhavmaurya",
    youtube: "https://youtube.com/@thevaibhavmaurya",
  },
  links: {
    twitter: "https://x.com/hevaibhavmaurya",
    github: "https://github.com/thevaibhavmaurya",
    linkedin: "https://linkedin.com/in/thevaibhavmaurya",
    youtube: "https://youtube.com/@thevaibhavmaurya",
  },
};

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" },
];

export const socialLinks = [
  { name: "GitHub", href: siteConfig.links.github },
  { name: "LinkedIn", href: siteConfig.links.linkedin },
  { name: "Twitter", href: siteConfig.links.twitter },
  { name: "YouTube", href: siteConfig.links.youtube },
];

export const seoKeywords = {
  global: [
    "Vaibhav Maurya",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Portfolio",
    "Lucknow Developer",
    "India Developer",
  ],
  homepage: [
    "Vaibhav Maurya Portfolio",
    "Full Stack Developer Lucknow",
    "React Next.js Developer",
    "Web Development Services",
    "Custom Web Applications",
    "Frontend Backend Development",
  ],
  projects: [
    "Web Development Projects",
    "React Projects",
    "Next.js Applications",
    "Full Stack Portfolio",
    "JavaScript Projects",
    "TypeScript Applications",
    "Open Source Projects",
  ],
  blog: [
    "Web Development Blog",
    "React Tutorials",
    "Next.js Articles",
    "JavaScript Tips",
    "Programming Blog",
    "Technical Articles",
    "Developer Insights",
  ],
  resources: [
    "Web Development Resources",
    "Developer Tools",
    "Programming Resources",
    "React Resources",
    "JavaScript Libraries",
    "Development Utilities",
  ],
};
