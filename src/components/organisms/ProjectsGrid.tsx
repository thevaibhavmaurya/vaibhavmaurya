"use client";

import ProjectCard from "@/components/molecules/ProjectCard";
import { Project } from "@/lib/types/project";
import MotionDiv from "@/components/atoms/MotionDiv";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <MotionDiv
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <ProjectCard project={project} />
        </MotionDiv>
      ))}
    </div>
  );
}
