import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import PageLayout from "@/components/layout/PageLayout";
import {
  getBlogPost,
  getBlogPostSlugs,
  getPostsByTag,
} from "@/lib/services/blog";
import { siteConfig } from "@/lib/config/site";
import RelatedPosts from "@/components/organisms/RelatedPosts";
import MotionDiv from "@/components/atoms/MotionDiv";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import MdxComponents from "@/components/mdx/MdxComponents";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
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

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get related posts based on tags
  const relatedPosts = await getPostsByTag(post.tags[0] || "");
  const filteredRelatedPosts = relatedPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <PageLayout>
      <article className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" size="sm">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </MotionDiv>

          {/* Featured Image */}
          {post.image && (
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </MotionDiv>
          )}

          {/* Article Header */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Separator />
            </header>
          </MotionDiv>

          {/* Article Content - MDX */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mdx-content">
              <MDXRemote source={post.content} components={MdxComponents} />
            </div>
          </MotionDiv>

          {/* Article Footer */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <footer className="mt-16 pt-8 border-t">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Published on {formattedDate}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Written by {post.author}
                  </p>
                </div>

                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Article
                </Button>
              </div>
            </footer>
          </MotionDiv>

          {/* Related Posts */}
          {filteredRelatedPosts.length > 0 && (
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16"
            >
              <RelatedPosts posts={filteredRelatedPosts} />
            </MotionDiv>
          )}
        </div>
      </article>
    </PageLayout>
  );
}
