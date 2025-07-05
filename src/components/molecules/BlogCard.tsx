import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, FileText } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
    month: "long",
    day: "numeric",
  });

  return (
    <Card
      className={cn(
        "group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] py-0",
        className
      )}
    >
      <CardHeader className="p-0">
        <div className="relative aspect-[50/21] overflow-hidden bg-muted">
          <Image
            src={post.image || ""}
            alt={post.title}
            fill
            className="transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Featured Badge */}
          {post.featured && (
            <div className="absolute top-4 right-4">
              <Badge
                variant="secondary"
                className="bg-primary text-primary-foreground"
              >
                Featured
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6 pt-0">
        <div className="space-y-4">
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground leading-relaxed line-clamp-4 text-sm">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {post.tags.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{post.tags.length - 2} more
              </Badge>
            )}
          </div>

          {/* Read More Link */}
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm group/link"
          >
            Read Article
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
