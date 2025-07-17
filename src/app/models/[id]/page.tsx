import { notFound } from "next/navigation";
import { getCarById, getAllCars } from "@/lib/sanity-graphql";
import { CarModel } from "@/components/CarModel";

export async function generateStaticParams() {
  const cars = await getAllCars();
  return cars.map((car) => ({ id: car._id }));
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: carId } = await params;
  const car = await getCarById(carId);

  if (!car) notFound();

  return <CarModel car={car} />;
}
