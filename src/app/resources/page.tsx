import ResourcesGrid from "@/components/organisms/ResourcesGrid";
import { PageTitleDescription } from "@/components/molecules/AnimatedTitleDescription";

export default function ResourcesPage() {
  return (
    <>
      <div className="container py-12">
        <PageTitleDescription
          title="Resources"
          description="A curated collection of tools, libraries, tutorials, and resources that I find useful for web development and design."
        />

        <ResourcesGrid />
      </div>
    </>
  );
}
