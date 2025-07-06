import { Metadata } from "next";
import ProjectsGrid from "@/components/organisms/ProjectsGrid";
import { projects } from "@/lib/data/projects";
import { siteConfig } from "@/lib/config/site";
import PageTitle from "@/components/molecules/PageTitle";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio of web development projects including full-stack applications, frontend interfaces, and backend systems.",
  keywords: [
    "portfolio",
    "projects",
    "web development",
    "full stack",
    "frontend",
    "backend",
  ],
  openGraph: {
    title: "Projects | " + siteConfig.name,
    description:
      "Portfolio of web development projects including full-stack applications, frontend interfaces, and backend systems.",
    url: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <PageTitle
        title="Projects"
        description="A collection of my work showcasing web development projects, from frontend interfaces to full-stack applications."
      />

      <div>
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
}
