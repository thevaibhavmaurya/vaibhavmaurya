import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/molecules/BlogCard";
import { BlogPost } from "@/lib/types/blog";
import { SectionTitleDescription } from "../molecules/AnimatedTitleDescription";

interface RecentBlogsSectionProps {
  posts?: BlogPost[];
}

export default function RecentBlogsSection({
  posts = [],
}: RecentBlogsSectionProps) {
  const recentPosts = posts.filter((post) => post.featured).slice(0, 2);

  return (
    <section className="container py-20">
      <SectionTitleDescription
        title="Latest Articles"
        description="Insights, tutorials, and thoughts on web development and technology"
      />

      {recentPosts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {recentPosts.map((post) => (
              <div key={post.slug}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No featured articles available yet.
          </p>
        </div>
      )}
    </section>
  );
}
