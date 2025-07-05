"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/molecules/BlogCard";
import { BlogPost } from "@/lib/types/blog";
import MotionDiv from "@/components/atoms/MotionDiv";

interface RecentBlogsSectionProps {
  posts?: BlogPost[];
}

export default function RecentBlogsSection({
  posts = [],
}: RecentBlogsSectionProps) {
  const recentPosts = posts.slice(0, 2);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development and technology
          </p>
        </MotionDiv>

        {recentPosts.length > 0 ? (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentPosts.map((post, index) => (
                <MotionDiv
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <BlogCard post={post} />
                </MotionDiv>
              ))}
            </div>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button asChild variant="outline" size="lg" className="group">
                <Link href="/blog">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </MotionDiv>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No blog posts available yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
