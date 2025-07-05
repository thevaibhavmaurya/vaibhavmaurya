import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import ProjectsGrid from "@/components/organisms/ProjectsGrid";
import { projects } from "@/lib/data/projects";
import { siteConfig } from "@/lib/config/site";
import AnimatedDiv from "@/components/atoms/AnimatedDiv";

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
    <PageLayout>
      <div className="container py-12">
        <AnimatedDiv animation="slide-up" className="max-w-3xl mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            A collection of my work showcasing web development projects, from
            frontend interfaces to full-stack applications.
          </p>
        </AnimatedDiv>

        <div>
          <ProjectsGrid projects={projects} />
        </div>
      </div>
    </PageLayout>
  );
}
