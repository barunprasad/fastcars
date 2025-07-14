import { Suspense } from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedCars } from "@/components/FeaturedCars";
import { FeaturedCarsLoading } from "@/components/FeaturedCars/FeaturedCarsLoading";
import { SpeedRecords } from "@/components/SpeedRecords";
import { SpeedRecordsLoading } from "@/components/SpeedRecords/SpeedRecordsLoading";
import { LegendaryEngines } from "@/components/LegendaryEngines";
import { LegendaryEnginesLoading } from "@/components/LegendaryEngines/LegendaryEnginesLoading";
import { getHomepageData } from "@/lib/sanity-graphql";
import { HomeAnimator } from "@/components/HomeAnimator";
import { HERO_ACTION_BUTTONS } from "@/constants/navigation";

export default async function HomePage() {
  const { homepage, featuredCars, legendary, speedRecordsSection } =
    await getHomepageData();

  return (
    <HomeAnimator>
      <HeroSection
        title={homepage?.heroTitle || "SPEED LEGENDS"}
        subtitle={
          homepage?.heroSubtitle ||
          "From Classic Muscle to Modern Hypercars - Experience the Evolution of Speed"
        }
        videoUrl={homepage?.heroVideo?.asset?.url}
        variant="fullscreen"
        showScrollIndicator={true}
        actions={HERO_ACTION_BUTTONS}
      />
      <Suspense fallback={<FeaturedCarsLoading />}>
        <FeaturedCars cars={featuredCars} />
      </Suspense>
      <Suspense fallback={<SpeedRecordsLoading />}>
        <SpeedRecords data={speedRecordsSection!} />
      </Suspense>
      <Suspense fallback={<LegendaryEnginesLoading />}>
        <LegendaryEngines
          data={legendary!}
          defaultValue={legendary?.variants[0]?.key}
        />
      </Suspense>
    </HomeAnimator>
  );
}
