import { Suspense } from "react";
import { ModelsListLoading } from "@/components/ModelsList/ModelsListLoading";
import { FavoriteList } from "@/components/FavoriteList";
import { getModelsHeroData } from "@/lib/sanity-graphql";
import { HeroSection } from "@/components/HeroSection";
import { FAVORITES_PAGE_METADATA } from "@/constants/metadata";

export const metadata = FAVORITES_PAGE_METADATA;

export default async function FavouritesPage() {
  const modelsHero = await getModelsHeroData();
  return (
    <>
      <HeroSection
        title={"Your favorites"}
        subtitle={"Browse your selected favorites"}
        videoUrl={modelsHero?.heroVideo?.asset?.url}
        variant="compact"
      />
      <Suspense fallback={<ModelsListLoading />}>
        <FavoriteList />
      </Suspense>
    </>
  );
}
