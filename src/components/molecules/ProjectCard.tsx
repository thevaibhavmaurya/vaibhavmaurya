import Link from "next/link";
import {
  ExternalLink,
  Github,
  Youtube,
  Calendar,
  Star,
  Sparkles,
} from "lucide-react";
import { CardDescription, CardTitle } from "@/components/ui/card";
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
    <div className={cn("max-w-sm w-full group/card", className)}>
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-xl max-w-sm mx-auto flex flex-col justify-between p-6",
          "bg-cover bg-center transition-all duration-300 hover:shadow-2xl"
        )}
        style={{
          backgroundImage: `url(${project.image})`,
        }}
        role="article"
        aria-label={`Project: ${project.title}`}
      >
        {/* Dark overlay for better contrast */}
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black/80 bg-black/60"></div>

        {/* Header with category and featured status */}
        <div className="flex flex-row items-start justify-between z-10 gap-2">
          <div className="flex flex-col gap-2">
            {project.featured && (
              <Badge
                className={cn(
                  "border-0 font-medium px-3 py-1.5",
                  "bg-gradient-to-r from-yellow-400/90 to-orange-500/90 backdrop-blur-md",
                  "text-white shadow-lg hover:shadow-xl",
                  "hover:from-yellow-400 hover:to-orange-500 transition-all duration-300",
                  "transform hover:scale-105 flex items-center gap-1.5"
                )}
                aria-label="Featured project"
              >
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              </Badge>
            )}
            <Badge
              className={cn(
                "border-0 text-white font-medium px-3 py-1.5",
                "bg-gradient-to-r from-primary/80 to-primary/60 backdrop-blur-md",
                "hover:from-primary/90 hover:to-primary/70 transition-all duration-300",
                "shadow-lg hover:shadow-xl transform hover:scale-105"
              )}
              aria-label={`Category: ${project.category}`}
            >
              {project.category}
            </Badge>
          </div>

          {/* Optional: Add a subtle glow effect */}
          <div className="absolute -top-2 -right-2 w-20 h-20 bg-primary/20 rounded-full blur-xl opacity-50 group-hover/card:opacity-70 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="text-content z-10">
          <CardTitle className="font-bold text-xl md:text-2xl text-white relative z-10 mb-3 leading-tight">
            {project.title}
          </CardTitle>
          <CardDescription className="font-normal text-sm text-gray-100 relative z-10 mb-4 line-clamp-3">
            {project.description}
          </CardDescription>

          {/* Tech stack */}
          <div
            className="flex flex-wrap gap-2 mb-4"
            role="list"
            aria-label="Technologies used"
          >
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={cn(
                  "px-3 py-1 text-xs rounded-full font-medium",
                  "border-0 text-white/90",
                  "hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                )}
                role="listitem"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span
                className={cn(
                  "px-3 py-1 text-xs rounded-full",
                  "bg-white/10 backdrop-blur-sm border-0 text-white/70",
                  "hover:bg-white/20 transition-all duration-300"
                )}
              >
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Footer with year and actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-200 text-sm">
              <Calendar className="h-4 w-4" />
              <span>{project.year}</span>
            </div>

            <div className="flex gap-2" role="group" aria-label="Project links">
              {project.liveUrl && (
                <Button
                  asChild
                  size="sm"
                  className="bg-white/20 backdrop-blur-sm border-0 text-white hover:bg-white/30 transition-colors"
                  aria-label="View live demo"
                >
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View live demo</span>
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  asChild
                  size="sm"
                  className="bg-white/20 backdrop-blur-sm border-0 text-white hover:bg-white/30 transition-colors"
                  aria-label="View source code"
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">View source code</span>
                  </Link>
                </Button>
              )}
              {project.youtubeUrl && (
                <Button
                  asChild
                  size="sm"
                  className="bg-white/20 backdrop-blur-sm border-0 text-white hover:bg-white/30 transition-colors"
                  aria-label="Watch video"
                >
                  <Link
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="h-4 w-4" />
                    <span className="sr-only">Watch video</span>
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
