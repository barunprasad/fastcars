import { Suspense } from "react";
import { ModelsList } from "@/components/ModelsList";
import { HeroSection } from "@/components/HeroSection";
import { getAllCars, getModelsHeroData } from "@/lib/sanity-graphql";
import LoadingSpinner from "@/components/ui/loading-spinner";

export const metadata = {
  title: "Fast Cars Collection - All Models",
  description: "Browse our complete collection of fast cars from every era",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ModelsPage() {
  const [cars, modelsHero] = await Promise.all([
    getAllCars(),
    getModelsHeroData(),
  ]);

  return (
    <>
      <HeroSection
        title={modelsHero?.heroTitle || "All Models"}
        subtitle={
          modelsHero?.heroSubtitle ||
          "Browse our complete collection of fast cars from every era"
        }
        videoUrl={modelsHero?.heroVideo?.asset?.url}
        variant="compact"
      />
      <Suspense fallback={<LoadingSpinner />}>
        <ModelsList cars={cars} />
      </Suspense>
    </>
  );
}
