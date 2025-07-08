import { Suspense } from "react";
import {
  HeroSection,
  FeaturedCars,
  SpeedRecords,
  LegendaryEngines,
} from "@/components/home";
import { getHomepageData } from "@/lib/sanity-graphql";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { HomeAnimator } from "@/components/home/HomeAnimator";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  const { homepage, featuredCars, legendary, speedRecordsSection } =
    await getHomepageData();

  return (
    <HomeAnimator>
      <HeroSection data={homepage} />
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedCars cars={featuredCars} />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <SpeedRecords data={speedRecordsSection!} />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LegendaryEngines
          data={legendary!}
          defaultValue={legendary?.variants[0]?.key}
        />
      </Suspense>
    </HomeAnimator>
  );
}
