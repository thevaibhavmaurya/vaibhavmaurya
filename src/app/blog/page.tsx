import BlogGrid from "@/components/organisms/BlogGrid";
import { getAllBlogPosts } from "@/lib/services/blog";
import { PageTitleDescription } from "@/components/molecules/AnimatedTitleDescription";

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  return (
    <>
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
