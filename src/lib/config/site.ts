import { SiteConfig } from "../types/global";

export const siteConfig: SiteConfig = {
  name: "Vaibhav Maurya",
  description:
    "Meet Vaibhav Maurya, a full-stack developer and content creator from Lucknow, India, dedicated to building impactful open source projects. With deep expertise in React, Next.js, and TypeScript, he creates scalable web applications and shares practical insights through YouTube videos and technical writing.",
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
    devto: "https://dev.to/thevaibhavmaurya",
  },
};

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  // { name: "Blog", href: "/blog" },
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
    "Vaibhav Maurya Developer",
    "Vaibhav Maurya Portfolio",
    "Full Stack Developer India",
    "React Next.js Developer",
    "TypeScript Developer India",
    "Freelance Web Developer",
    "Modern Web Developer",
    "Frontend Backend Engineer",
    "Open Source Contributor",
    "Web App Developer",
    "Lucknow Developer",
    "Indian Software Engineer",
  ],
  homepage: [
    "Hire Full Stack Developer India",
    "Top Web Developer in Lucknow",
    "Next.js React Developer Portfolio",
    "Freelance Frontend Backend Developer",
    "Custom Web App Developer",
    "Remote Full Stack Engineer",
    "Developer Portfolio Website",
  ],
  projects: [
    "React Developer Projects",
    "Next.js Portfolio Examples",
    "TypeScript Full Stack Projects",
    "Open Source Web Apps",
    "Frontend Side Projects",
    "Best Web Development Projects",
    "Personal Developer Portfolio Projects",
  ],
  blog: [
    "React Tutorials for Beginners",
    "Next.js SEO Tips",
    "TypeScript Best Practices",
    "Frontend Development Blog",
    "Web Dev Articles for Developers",
    "Developer Productivity Tips",
    "JavaScript Coding Tutorials",
  ],
  resources: [
    "Best Developer Tools 2025",
    "Web Development Resources Collection",
    "Frontend Libraries & Utilities",
    "Free UI Kits & Design Assets",
    "React Next.js Tools & Plugins",
    "Developer Productivity Tools",
    "Tailwind CSS UI Resources",
  ],
};
