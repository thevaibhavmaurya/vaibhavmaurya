export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  year: number;
  status: ProjectStatus;
}

export type ProjectCategory =
  | "frontend"
  | "fullstack"
  | "backend"
  | "mobile"
  | "design"
  | "other";

export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface ProjectFilter {
  category?: ProjectCategory;
  tag?: string;
  status?: ProjectStatus;
  featured?: boolean;
}
