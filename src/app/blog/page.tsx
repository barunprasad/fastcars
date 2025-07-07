import { Suspense } from "react";
import { BlogList, BlogHero } from "@/components/blog";
import { getAllBlogPosts } from "@/lib/sanity-graphql";
import LoadingSpinner from "@/components/ui/loading-spinner";

export const metadata = {
  title: "Fast Cars Blog - Stories of Speed",
  description:
    "Read about legendary fast cars, racing history, and automotive innovation",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <BlogHero />
      <Suspense fallback={<LoadingSpinner />}>
        <BlogList posts={posts} />
      </Suspense>
    </>
  );
}
