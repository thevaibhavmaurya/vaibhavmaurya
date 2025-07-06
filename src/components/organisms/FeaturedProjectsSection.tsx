import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/molecules/ProjectCard";
import { projects } from "@/lib/data/projects";
import AnimatedTitle from "@/components/atoms/AnimatedTitle";

export default function FeaturedProjectsSection() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 4);

  return (
    <section className="container py-20">
      <div className="text-center mb-16">
        <AnimatedTitle
          title="Featured Projects"
          as="h2"
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
        />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of my best work in web development and software engineering
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredProjects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button asChild variant="outline" size="lg" className="group">
          <Link href="/projects">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
