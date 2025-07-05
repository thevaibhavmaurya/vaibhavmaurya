import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "@/components/molecules/BlogCard";
import { BlogPost } from "@/lib/types/blog";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="border-t pt-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight mb-2">
          Related Articles
        </h2>
        <p className="text-muted-foreground">
          More articles you might find interesting
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.slug}>
            <BlogCard post={post} />
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
        >
          View all articles
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
