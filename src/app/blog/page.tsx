import { Suspense } from "react";
import { BlogList } from "@/components/BlogList";
import { HeroSection } from "@/components/HeroSection";
import { getAllBlogPosts, getBlogHeroData } from "@/lib/sanity-graphql";
import LoadingSpinner from "@/components/ui/loading-spinner";

export const metadata = {
  title: "Fast Cars Blog - Stories of Speed",
  description:
    "Read about legendary fast cars, racing history, and automotive innovation",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function BlogPage() {
  const [posts, blogHero] = await Promise.all([
    getAllBlogPosts(),
    getBlogHeroData(),
  ]);

  return (
    <>
      <HeroSection
        title={blogHero?.heroTitle || "Stories of Speed"}
        subtitle={
          blogHero?.heroSubtitle ||
          "Read about legendary fast cars, racing history, and automotive innovation"
        }
        videoUrl={blogHero?.heroVideo?.asset?.url}
        variant="compact"
      />
      <Suspense fallback={<LoadingSpinner />}>
        <BlogList posts={posts} />
      </Suspense>
    </>
  );
}
