import { siteConfig, seoKeywords } from "@/lib/config/site";
import { Metadata } from "next";

const title = "Vaibhav Maurya | Building Open Source & Web Products";
const description = siteConfig.description;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: seoKeywords.global,
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title,
    description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        alt: `${siteConfig.name} - Full Stack Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.author.twitterUsername,
    site: siteConfig.author.twitterUsername,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/favicon.ico", type: "image/x-icon", sizes: "any" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/icons/favicon.ico",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

// JSON-LD schemas
export const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.author.name,
    alternateName: "Vaibhav Maurya Portfolio",
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/icons/android-chrome-192x192.png`,
      width: 512,
      height: 512,
    },
    image: siteConfig.ogImage,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.author.email,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      siteConfig.author.twitter,
      siteConfig.author.github,
      siteConfig.author.linkedin,
      siteConfig.author.youtube,
    ].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      postalCode: "226001",
      addressCountry: "IN",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}/blog?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    ],
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.author.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/icons/android-chrome-192x192.png`,
    sameAs: [
      siteConfig.author.twitter,
      siteConfig.author.github,
      siteConfig.author.linkedin,
      siteConfig.author.youtube,
    ].filter(Boolean),
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    email: siteConfig.author.email,
    description: siteConfig.description,
    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Node.js",
      "Database Design",
      "API Development",
      "UI/UX Design",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  },
];
