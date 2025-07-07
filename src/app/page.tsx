import { Suspense } from "react";
import {
  HeroSection,
  FeaturedCars,
  SpeedRecords,
  LegendaryEngines,
} from "@/components/home";
import { getHomepageData } from "@/lib/sanity-graphql";
import LoadingSpinner from "@/components/ui/loading-spinner";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  const data = await getHomepageData();

  return (
    <>
      <HeroSection data={data.homepage} />
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedCars cars={data.featuredCars} />
      </Suspense>
      <SpeedRecords />
      <LegendaryEngines />
    </>
  );
}
