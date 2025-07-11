import { Suspense } from "react";
import { ModelsList } from "@/components/models/ModelsList";
import { ModelsHero } from "@/components/models/ModelsHero";
import { getAllCars } from "@/lib/sanity-graphql";
import LoadingSpinner from "@/components/ui/loading-spinner";

export const metadata = {
  title: "Fast Cars Collection - All Models",
  description: "Browse our complete collection of fast cars from every era",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ModelsPage() {
  const cars = await getAllCars();

  return (
    <>
      <ModelsHero />
      <Suspense fallback={<LoadingSpinner />}>
        <ModelsList cars={cars} />
      </Suspense>
    </>
  );
}
