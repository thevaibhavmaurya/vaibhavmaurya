import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/lib/types/blog";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export default function BlogCard({ post, className }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <Card
        className={cn(
          "group/card overflow-hidden border-b border-primary/20 bg-card/50 floating-card h-full pt-0",
          className
        )}
      >
        {/* Large Image Section */}
        <div className="relative aspect-[50/21] overflow-hidden">
          <Image
            src={post.image || ""}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Author info overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">
                  Vaibhav Maurya
                </span>
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <Calendar className="h-3 w-3" />
                  <span>{formattedDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Title */}
            <CardTitle className="text-xl font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </CardTitle>

            {/* Excerpt */}
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            {/* Footer with reading time and tags */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min read</span>
              </div>

              {post.featured && (
                <Badge variant="secondary" className="text-xs">
                  Featured
                </Badge>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.slice(0, 2).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs px-2 py-1 bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
              {post.tags.length > 2 && (
                <Badge
                  variant="outline"
                  className="text-xs px-2 py-1 text-muted-foreground"
                >
                  +{post.tags.length - 2}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
