import { Metadata } from "next";
import BlogGrid from "@/components/organisms/BlogGrid";
import { getAllBlogPosts } from "@/lib/services/blog";
import { siteConfig, seoKeywords } from "@/lib/config/site";
import { PageTitleDescription } from "@/components/molecules/AnimatedTitleDescription";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Blog - Web Development Articles & Tutorials by Vaibhav Maurya",
  description:
    "Read expert-written articles, tutorials, and practical insights on React, Next.js, TypeScript, frontend engineering, and full-stack development by Vaibhav Maurya.",
  keywords: [
    ...seoKeywords.global,
    ...seoKeywords.blog,
    "React tutorials",
    "Next.js SEO",
    "TypeScript blog",
    "web dev tips",
    "JavaScript performance",
    "frontend engineering blog",
  ],
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
    title: "Blog | " + siteConfig.name,
    description:
      "Explore tutorials and engineering insights about modern web development using React, Next.js, and TypeScript.",
    url: `${siteConfig.url}/blog`,
    images: [
      {
        url: `${siteConfig.url}/images/pages/blog.webp`,
        alt: `${siteConfig.name} - Web Development Blog`,
      },
    ],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | " + siteConfig.name,
    description:
      "Explore tutorials and engineering insights about modern web development using React, Next.js, and TypeScript.",
    images: [`${siteConfig.url}/images/pages/blog.webp`],
    creator: siteConfig.author.twitterUsername,
    site: siteConfig.author.twitterUsername,
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blog`,
    description:
      "Articles, tutorials, and insights by Vaibhav Maurya on web development, React, Next.js, TypeScript, and modern frontend engineering.",
    url: `${siteConfig.url}/blog`,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    inLanguage: "en-US",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: `${siteConfig.url}/images/blog/${post.image}`,
      datePublished: post.publishedAt,
      author: {
        "@type": "Person",
        name: post.author,
      },
      url: `${siteConfig.url}/blog/${post.slug}`,
    })),
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
          name: "Blog",
          item: `${siteConfig.url}/blog`,
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
          title="Blog"
          description="Technical articles, tutorials, and insights about web development and modern software engineering practices."
        />
        <BlogGrid posts={posts} />
      </div>
    </>
  );
}
