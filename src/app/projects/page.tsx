import ProjectsGrid from "@/components/organisms/ProjectsGrid";
import { projects } from "@/lib/data/projects";
import { PageTitleDescription } from "@/components/molecules/AnimatedTitleDescription";

export default function ProjectsPage() {
  return (
    <>
      <div className="container py-12">
        <PageTitleDescription
          title="Projects"
          description="A collection of web development projects showcasing expertise in full-stack development, modern frameworks, and innovative solutions."
        />
        <ProjectsGrid projects={projects} />
      </div>
    </>
  );
}
