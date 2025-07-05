import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "modtopia",
    title: "Modtopia",
    description:
      "Modtopia is a fullstack e-commerce app for browsing and buying GTA 5 mods, built with Next.js, Tailwind CSS, shadcn, and MongoDB.",
    image:
      "https://vaibhavmaurya.vercel.app/_next/image?url=%2Fassets%2Fmodtopia.png&w=3840&q=75",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn", "MongoDB"],
    liveUrl: "https://modtopia.vercel.app/",
    githubUrl: "https://github.com/vaibhav-xp/rexteria",
    youtubeUrl: "https://youtu.be/xopUB6D-jEc?si=xAVheUl2oWIkDSwM",
    featured: true,
    category: "fullstack",
    year: 2024,
    status: "completed",
  },
  {
    id: "ceawaup",
    title: "Ceawaup",
    description:
      "Ceawaup provides sustainable engineering solutions to rural areas, improving infrastructure, clean water, energy, and economic growth through innovative projects.",
    image:
      "https://vaibhavmaurya.vercel.app/_next/image?url=%2Fassets%2Fceawaup.png&w=3840&q=75",
    tags: ["React", "TypeScript", "Tailwind CSS", "Sustainable Engineering"],
    liveUrl: "https://ceawaup.com/",
    featured: true,
    category: "frontend",
    year: 2024,
    status: "completed",
  },
  {
    id: "crypto-vault",
    title: "Crypto Vault",
    description:
      "Crypto Vault securely manages and encrypts your digital assets, ensuring easy access and protection for your cryptocurrencies.",
    image:
      "https://vaibhavmaurya.vercel.app/_next/image?url=%2Fassets%2Fcrypto-vault.png&w=3840&q=75",
    tags: ["React", "Node.js", "Encryption", "Cryptocurrency", "Security"],
    liveUrl: "https://crypto-vault-one.vercel.app/welcome",
    githubUrl: "https://github.com/vaibhav-xp/CryptoVault",
    youtubeUrl: "https://www.youtube.com/watch?v=hmPLyYaOOas&t=86s",
    featured: true,
    category: "fullstack",
    year: 2024,
    status: "completed",
  },
  {
    id: "zyprolix-player",
    title: "Zyprolix Player",
    description:
      "A modern media player application with advanced features for audio and video playback, built with modern web technologies.",
    image:
      "https://vaibhavmaurya.vercel.app/_next/image?url=%2Fassets%2Fzyprolix-player.png&w=3840&q=75",
    tags: ["React", "TypeScript", "Media Player", "Web Audio API"],
    liveUrl: "https://zyprolix-player.vercel.app/",
    githubUrl: "https://github.com/vaibhav-xp/Zyprolix-Player",
    featured: false,
    category: "fullstack",
    year: 2024,
    status: "completed",
  },
];
