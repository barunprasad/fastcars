import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCarById, getAllCars } from "@/lib/sanity-graphql";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const cars = await getAllCars();
  return cars.map((car: any) => ({ id: car._id }));
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: carId } = await params;
  const car = await getCarById(carId);

  if (!car) notFound();

  const slides = [car.mainImage, ...(car.gallery || [])];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link href="/models">
          <Button variant="ghost" className="mb-6 cursor-pointer">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Models
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <Carousel className="relative w-full rounded-lg overflow-hidden">
              <CarouselContent>
                {slides.map((img, idx) => (
                  <CarouselItem key={idx} className="relative h-96 w-full">
                    <Image
                      src={img.asset.url}
                      alt={`${car.name} image ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                      priority={idx === 0}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white cursor-pointer" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white cursor-pointer" />
            </Carousel>
          </div>

          <div>
            <div className="mb-6">
              <Badge className="mb-2 bg-red-600">{car.era}</Badge>
              <h1 className="text-4xl font-racing mb-2">{car.name}</h1>
              <p className="text-xl text-neutral-400">
                {car.manufacturer} • {car.year}
              </p>
            </div>

            <Card className="text-white bg-neutral-900 border-neutral-800 p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Performance Specs</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-neutral-400">Top Speed</p>
                  <p className="font-bold">{car.topSpeed} mph</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-400">0-60 mph</p>
                  <p className="font-bold">{car.acceleration}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Horsepower</p>
                  <p className="font-bold">{car.horsepower} hp</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Price</p>
                  <p className="font-bold">{car.price}</p>
                </div>
              </div>
            </Card>

            {car.engineType && (
              <Card className="text-white bg-neutral-900 border-neutral-800 p-6 mb-6">
                <h2 className="text-xl font-bold mb-2">Engine</h2>
                <p className="text-neutral-300">{car.engineType}</p>
              </Card>
            )}

            {car.description && (
              <Card className="text-white bg-neutral-900 border-neutral-800 p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">About</h2>
                <p className="text-neutral-300 leading-relaxed">
                  {car.description}
                </p>
              </Card>
            )}

            {car.features && car.features.length > 0 && (
              <Card className="text-white bg-neutral-900 border-neutral-800 p-6">
                <h2 className="text-xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {car.features.map((feature: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-neutral-300"
                    >
                      <span className="text-red-500">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
