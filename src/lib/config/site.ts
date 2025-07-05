import { SiteConfig } from "../types/global";

export const siteConfig: SiteConfig = {
  name: "Vaibhav Maurya",
  description:
    "Full-stack developer specializing in React, Next.js, and modern web technologies. Building scalable applications and sharing knowledge through technical articles.",
  url: "https://vaibhavmaurya.dev",
  ogImage: "https://vaibhavmaurya.dev/og-image.jpg",
  author: {
    name: "Vaibhav Maurya",
    email: "hello@vaibhavmaurya.dev",
    // phone: "+1234567890",
    location: "Lucknow, India",
    twitter: "https://twitter.com/hevaibhavmaurya",
    github: "https://github.com/thevaibhavmaurya",
    linkedin: "https://linkedin.com/in/thevaibhavmaurya",
    youtube: "https://youtube.com/@thevaibhavmaurya",
  },
  links: {
    twitter: "https://twitter.com/hevaibhavmaurya",
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
