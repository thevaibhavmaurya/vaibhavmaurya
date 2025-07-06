import HeroSection from "@/components/organisms/HeroSection";
import ExperienceSection from "@/components/organisms/ExperienceSection";
import RecentBlogsSection from "@/components/organisms/RecentBlogsSection";
import FeaturedProjectsSection from "@/components/organisms/FeaturedProjectsSection";
import YouTubeSection from "@/components/organisms/YouTubeSection";
import { getAllBlogPosts } from "@/lib/services/blog";

export default async function HomePage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <FeaturedProjectsSection />
      <RecentBlogsSection posts={posts} />
      <YouTubeSection />
    </>
  );
}
