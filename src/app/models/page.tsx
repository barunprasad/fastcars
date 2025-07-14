import { Suspense } from "react";
import { ModelsList } from "@/components/ModelsList";
import { ModelsListLoading } from "@/components/ModelsList/ModelsListLoading";
import { HeroSection } from "@/components/HeroSection";
import { getAllCars, getModelsHeroData } from "@/lib/sanity-graphql";
import { MODELS_PAGE_METADATA } from "@/constants/metadata";

export const metadata = MODELS_PAGE_METADATA;

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
      <Suspense fallback={<ModelsListLoading />}>
        <ModelsList cars={cars} />
      </Suspense>
    </>
  );
}
