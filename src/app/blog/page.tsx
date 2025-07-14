import { Suspense } from "react";
import { BlogList } from "@/components/BlogList";
import { BlogListLoading } from "@/components/BlogList/BlogListLoading";
import { HeroSection } from "@/components/HeroSection";
import { getAllBlogPosts, getBlogHeroData } from "@/lib/sanity-graphql";
import { BLOG_PAGE_METADATA } from "@/constants/metadata";

export const metadata = BLOG_PAGE_METADATA;

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
      <Suspense fallback={<BlogListLoading />}>
        <BlogList posts={posts} />
      </Suspense>
    </>
  );
}
