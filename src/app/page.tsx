import { Suspense } from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedCars } from "@/components/FeaturedCars";
import { SpeedRecords } from "@/components/SpeedRecords";
import { LegendaryEngines } from "@/components/LegendaryEngines";
import { getHomepageData } from "@/lib/sanity-graphql";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { HomeAnimator } from "@/components/HomeAnimator";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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
        actions={[
          { href: "/models", label: "View All Cars", variant: "primary" },
          { href: "/blog", label: "Read Stories", variant: "secondary" },
        ]}
      />
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
