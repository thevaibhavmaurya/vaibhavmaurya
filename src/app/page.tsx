import { Metadata } from "next";
import HeroSection from "@/components/organisms/HeroSection";
import ExperienceSection from "@/components/organisms/ExperienceSection";
import RecentBlogsSection from "@/components/organisms/RecentBlogsSection";
import FeaturedProjectsSection from "@/components/organisms/FeaturedProjectsSection";
import YouTubeSection from "@/components/organisms/YouTubeSection";
import { getAllBlogPosts } from "@/lib/services/blog";
import { siteConfig, seoKeywords } from "@/lib/config/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Full Stack Developer | React & Next.js Expert`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Vaibhav Maurya is a Full Stack Developer from Lucknow, India, specializing in React, Next.js, TypeScript, and modern web technologies. Creating scalable web applications and sharing knowledge through technical articles.",
  keywords: [...seoKeywords.global, ...seoKeywords.homepage],
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
    url: siteConfig.url,
    title: `${siteConfig.name} - Full Stack Developer Portfolio`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/pages/portfolio.webp`,
        alt: `${siteConfig.name} - Full Stack Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Full Stack Developer Portfolio`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/pages/portfolio.webp`],
    creator: siteConfig.author.twitterUsername,
    site: siteConfig.author.twitterUsername,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default async function HomePage() {
  const posts = await getAllBlogPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    alternateName: "Vaibhav Maurya",
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/profile.webp`,
    sameAs: [
      siteConfig.author.twitter,
      siteConfig.author.github,
      siteConfig.author.linkedin,
      siteConfig.author.youtube,
    ].filter(Boolean),
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      postalCode: "226001",
      addressCountry: "IN",
    },
    email: siteConfig.author.email,
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Full Stack Development",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "API Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universtiy of Lucknow",
    },
    nationality: {
      "@type": "Country",
      name: "India",
    },
    birthPlace: {
      "@type": "Place",
      name: "Lucknow, India",
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
      <HeroSection />
      <ExperienceSection />
      <FeaturedProjectsSection />
      <RecentBlogsSection posts={posts} />
      <YouTubeSection />
    </>
  );
}
