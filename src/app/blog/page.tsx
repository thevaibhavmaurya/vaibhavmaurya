import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import BlogGrid from "@/components/organisms/BlogGrid";
import { getAllBlogPosts } from "@/lib/services/blog";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles, tutorials, and insights about web development, React, Next.js, and modern software engineering.",
  openGraph: {
    title: "Blog | " + siteConfig.name,
    description:
      "Technical articles, tutorials, and insights about web development, React, Next.js, and modern software engineering.",
    url: `${siteConfig.url}/blog`,
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <PageLayout>
      <div className="container py-12">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Technical articles, tutorials, and insights about web development
            and modern software engineering practices.
          </p>
        </div>

        <BlogGrid posts={posts} />
      </div>
    </PageLayout>
  );
}
