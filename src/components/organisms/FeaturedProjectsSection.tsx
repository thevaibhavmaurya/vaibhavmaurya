import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/molecules/ProjectCard";
import { projects } from "@/lib/data/projects";
import { SectionTitleDescription } from "../molecules/AnimatedTitleDescription";

export default function FeaturedProjectsSection() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 4);

  return (
    <section className="container py-20">
      <SectionTitleDescription
        title="Featured Projects"
        description="A showcase of my best work in web development and software engineering"
      />

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
