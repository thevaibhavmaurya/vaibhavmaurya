import { Metadata } from "next";
import BlogGrid from "@/components/organisms/BlogGrid";
import { getAllBlogPosts } from "@/lib/services/blog";
import { siteConfig } from "@/lib/config/site";
import PageTitle from "@/components/molecules/PageTitle";

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
    <>
      <div className="container py-12">
        <PageTitle
          title="Blog"
          description="Technical articles, tutorials, and insights about web development and modern software engineering practices."
        />

        <BlogGrid posts={posts} />
      </div>
    </>
  );
}
