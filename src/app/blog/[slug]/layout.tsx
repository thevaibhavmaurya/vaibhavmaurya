import { Metadata } from "next";
import { getBlogPost } from "@/lib/services/blog";
import { siteConfig } from "@/lib/config/site";
import convertRelativeUrlToFull from "@/lib/services/convert-relative-url-to-full";

interface BlogLayoutProps {
  children: React.ReactNode;
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const image = convertRelativeUrlToFull(post.image);

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    authors: [{ name: post.author }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [
        {
          url: image,
          alt: `${post.title} - Cover Image`,
        },
      ],
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: `@${siteConfig.author.twitterUsername}`,
      images: [image],
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostLayout({
  children,
  params,
}: BlogLayoutProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return children;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: convertRelativeUrlToFull(post.image),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.ogImage,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    timeRequired: `PT${post.readingTime}M`,
    wordCount: post.content.split(" ").length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
