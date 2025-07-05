import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import ResourcesGrid from "@/components/organisms/ResourcesGrid";
import { siteConfig } from "@/lib/config/site";
import MotionDiv from "@/components/atoms/MotionDiv";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Curated collection of tools, libraries, tutorials, and resources for web developers and designers.",
  openGraph: {
    title: "Resources | " + siteConfig.name,
    description:
      "Curated collection of tools, libraries, tutorials, and resources for web developers and designers.",
    url: `${siteConfig.url}/resources`,
  },
};

export default function ResourcesPage() {
  return (
    <PageLayout>
      <div className="container py-12">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Resources
          </h1>
          <p className="text-xl text-muted-foreground">
            A curated collection of tools, libraries, tutorials, and resources
            that I find useful for web development and design.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ResourcesGrid />
        </MotionDiv>
      </div>
    </PageLayout>
  );
}
