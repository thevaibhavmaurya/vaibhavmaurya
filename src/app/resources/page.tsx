import { Metadata } from "next";
import ResourcesGrid from "@/components/organisms/ResourcesGrid";
import { siteConfig } from "@/lib/config/site";
import PageTitle from "@/components/molecules/PageTitle";

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
    <div className="container py-12">
      <PageTitle
        title="Resources"
        description="A curated collection of tools, libraries, tutorials, and resources that I find useful for web development and design."
      />

      <div>
        <ResourcesGrid />
      </div>
    </div>
  );
}
