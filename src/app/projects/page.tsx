import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import ProjectsGrid from "@/components/organisms/ProjectsGrid";
import { projects } from "@/lib/data/projects";
import { siteConfig } from "@/lib/config/site";
import MotionDiv from "@/components/atoms/MotionDiv";

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
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of web development projects showcasing my skills in
            frontend, backend, and full-stack development
          </p>
        </MotionDiv>

        <ProjectsGrid projects={projects} />
      </div>
    </PageLayout>
  );
}
