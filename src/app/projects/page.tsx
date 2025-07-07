import { Metadata } from "next";
import ProjectsGrid from "@/components/organisms/ProjectsGrid";
import { projects } from "@/lib/data/projects";
import { siteConfig, seoKeywords } from "@/lib/config/site";
import { PageTitleDescription } from "@/components/molecules/AnimatedTitleDescription";

export const metadata: Metadata = {
  title: "Projects - Web Development Portfolio",
  description:
    "Portfolio of web development projects including full-stack applications, React projects, Next.js applications, and open source contributions by Vaibhav Maurya.",
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
    title: "Projects | " + siteConfig.name,
    description:
      "Portfolio of web development projects including full-stack applications, frontend interfaces, and backend systems.",
    url: `${siteConfig.url}/projects`,
    images: [
      {
        url: `${siteConfig.url}/images/pages/projects.webp`,
        alt: `${siteConfig.name} - Web Development Projects Portfolio`,
      },
    ],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | " + siteConfig.name,
    description:
      "Portfolio of web development projects including full-stack applications, frontend interfaces, and backend systems.",
    images: [`${siteConfig.url}/images/pages/projects.webp`],
    creator: siteConfig.author.twitterUsername,
    site: siteConfig.author.twitterUsername,
  },
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects",
    description: "Portfolio of web development projects by Vaibhav Maurya",
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
          title="Projects"
          description="A collection of web development projects showcasing expertise in full-stack development, modern frameworks, and innovative solutions."
        />

        <ProjectsGrid projects={projects} />
      </div>
    </>
  );
}
