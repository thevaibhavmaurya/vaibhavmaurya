import { siteConfig, seoKeywords } from "@/lib/config/site";
import { Metadata } from "next";
import { projects } from "@/lib/data/projects";

const title =
  "Web Projects by Vaibhav Maurya | Full Stack Developer & OSS Builder";
const description =
  "Explore web development projects crafted by Vaibhav Maurya — full-stack apps, React/Next.js interfaces, and impactful open-source contributions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: [...seoKeywords.global, ...seoKeywords.projects],
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
    title,
    description,
    url: "/projects",
    images: [
      {
        url: "/images/pages/projects.webp",
        alt: `${siteConfig.name} - Web Development Projects Portfolio`,
      },
    ],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/pages/projects.webp"],
    creator: siteConfig.author.twitterUsername,
    site: siteConfig.author.twitterUsername,
  },
  alternates: {
    canonical: "/projects",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description: description,
  url: `${siteConfig.url}/projects`,
  author: {
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.url,
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Web Development Projects",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: project.title,
      description: project.description,
      image: `${siteConfig.url}/images/projects/${project.image}`,
      url: project.githubUrl || project.liveUrl || siteConfig.url,
      dateCreated: project.year,
      creator: {
        "@type": "Person",
        name: siteConfig.author.name,
      },
      keywords: project.tags,
    })),
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
        name: "Projects",
        item: `${siteConfig.url}/projects`,
      },
    ],
  },
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      {children}
    </>
  );
}
