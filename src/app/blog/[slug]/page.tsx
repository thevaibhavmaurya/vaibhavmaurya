import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import MdxComponents from "@/components/mdx/MdxComponents";
import RelatedPosts from "@/components/organisms/RelatedPosts";
import { getBlogPost, getAllBlogPosts } from "@/lib/services/blog";
import { siteConfig } from "@/lib/config/site";
import AnimatedDiv from "@/components/atoms/AnimatedDiv";
import ShareButton from "@/components/atoms/ShareButton";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: post.image ? [post.image] : [`/images/blog/${post.slug}.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: `@${siteConfig.author.twitter?.split("/").pop()}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3);

  const publishedDate = new Date(post.publishedAt);
  const formattedDate = publishedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image || `${siteConfig.url}/images/blog/${post.slug}.jpg`,
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <article className="container py-12">
        <div className="max-w-4xl mx-auto">
          <AnimatedDiv
            animation="slide-up"
            className="mb-8 flex justify-between items-center"
          >
            <Button variant="ghost" size="sm" asChild className="group">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Link>
            </Button>

            <ShareButton
              title={post.title}
              text={post.excerpt}
              url={`${siteConfig.url}/blog/${post.slug}`}
            />
          </AnimatedDiv>

          <AnimatedDiv animation="slide-up" delay={0.1}>
            <div className="relative aspect-[50/21] overflow-hidden rounded-lg bg-muted shadow-lg mb-12">
              <Image
                src={post.image || ""}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>

            <header className="mb-12 space-y-6">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime} min read</span>
                </div>

                <span>By {post.author}</span>

                {post.featured && <Badge variant="secondary">Featured</Badge>}
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={`${tag}-${index}`} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Separator />
            </header>
          </AnimatedDiv>

          <div className="mdx-content">
            <MDXRemote source={post.content} components={MdxComponents} />
          </div>

          <AnimatedDiv animation="fade-in" className="mt-16">
            <footer className="space-y-8">
              <Separator />

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Published on {formattedDate}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {post.readingTime} minute read
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/blog">← More Articles</Link>
                  </Button>
                  <ShareButton
                    title={post.title}
                    text={post.excerpt}
                    url={`${siteConfig.url}/blog/${post.slug}`}
                  />
                </div>
              </div>
            </footer>
          </AnimatedDiv>

          {relatedPosts.length > 0 && (
            <AnimatedDiv animation="slide-up" className="mt-16">
              <RelatedPosts posts={relatedPosts} />
            </AnimatedDiv>
          )}
        </div>
      </article>
    </>
  );
}
