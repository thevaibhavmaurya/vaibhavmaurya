import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Youtube } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types/project";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50 pt-0",
        className
      )}
    >
      {/* Image Section with Overlay */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0 shadow-lg">
              ⭐ Featured
            </Badge>
          </div>
        )}

        {/* Quick Action Buttons - Appear on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex gap-2">
            {project.liveUrl && (
              <Button asChild size="sm" className="shadow-lg backdrop-blur-sm">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="shadow-lg backdrop-blur-sm"
              >
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.youtubeUrl && (
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="shadow-lg backdrop-blur-sm"
              >
                <Link
                  href={project.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="space-y-3 mb-4">
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors duration-200">
              {project.title}
            </CardTitle>
            <Badge variant="outline" className="text-xs font-medium shrink-0">
              {project.year}
            </Badge>
          </div>
          <CardDescription className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </CardDescription>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag, index) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge
              variant="outline"
              className="text-xs px-3 py-1 border-dashed"
            >
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Bottom Section */}
        <div className="mt-auto space-y-4">
          {/* Status & Category */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              {project.status === "completed" ? "Completed" : "In Progress"}
            </span>
            <span className="capitalize font-medium">{project.category}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {project.liveUrl && (
              <Button asChild className="flex-1 h-9">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Live Demo</span>
                  <span className="sm:hidden">Live</span>
                </Link>
              </Button>
            )}

            <div className="flex gap-2">
              {project.githubUrl && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-9 px-3"
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              )}

              {project.youtubeUrl && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-9 px-3"
                >
                  <Link
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
