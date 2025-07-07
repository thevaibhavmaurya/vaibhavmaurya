import { Metadata } from "next";
import ResourcesGrid from "@/components/organisms/ResourcesGrid";
import { siteConfig, seoKeywords } from "@/lib/config/site";
import { PageTitleDescription } from "@/components/molecules/AnimatedTitleDescription";

export const metadata: Metadata = {
  title: "Resources - Web Development Tools & Libraries",
  description:
    "Curated collection of web development tools, libraries, tutorials, and resources for developers and designers. Find the best tools for React, Next.js, TypeScript, and more.",
  keywords: [...seoKeywords.global, ...seoKeywords.resources],
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Resources | " + siteConfig.name,
    description:
      "Curated collection of tools, libraries, tutorials, and resources for web developers and designers.",
    url: `${siteConfig.url}/resources`,
    images: [
      {
        url: `${siteConfig.url}/images/pages/resources.webp`,
        alt: `${siteConfig.name} - Web Development Resources`,
      },
    ],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | " + siteConfig.name,
    description:
      "Curated collection of tools, libraries, tutorials, and resources for web developers and designers.",
    images: [`${siteConfig.url}/images/pages/resources.webp`],
    creator: siteConfig.author.twitterUsername,
    site: siteConfig.author.twitterUsername,
  },
  alternates: {
    canonical: `${siteConfig.url}/resources`,
  },
};

export default function ResourcesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Web Development Resources",
    description: "Curated collection of web development tools and resources",
    url: `${siteConfig.url}/resources`,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Thing",
      name: "Web Development",
      description: "Tools, libraries, and resources for modern web development",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Resources",
          item: `${siteConfig.url}/resources`,
        },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Developer Resources",
      description: "Curated list of tools and resources for web developers",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          name: "React",
          description: "JavaScript library for building user interfaces",
          applicationCategory: "DeveloperApplication",
        },
        {
          "@type": "SoftwareApplication",
          name: "Next.js",
          description: "React framework for production",
          applicationCategory: "DeveloperApplication",
        },
        {
          "@type": "SoftwareApplication",
          name: "TypeScript",
          description: "Typed superset of JavaScript",
          applicationCategory: "DeveloperApplication",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <div className="container py-12">
        <PageTitleDescription
          title="Resources"
          description="A curated collection of tools, libraries, tutorials, and resources that I find useful for web development and design."
        />

        <ResourcesGrid />
      </div>
    </>
  );
}
