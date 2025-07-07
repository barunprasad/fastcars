import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCarById, getAllCars } from "@/lib/sanity-graphql";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gauge, Zap, Cog, DollarSign, Calendar, ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const cars = await getAllCars();
  return cars.map((car: any) => ({
    id: car._id,
  }));
}

export default async function CarDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const car = await getCarById(params.id);

  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link href="/models">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Models
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src={car.mainImage.asset.url}
                alt={car.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {car.gallery && car.gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {car.gallery.slice(0, 3).map((img: any, index: number) => (
                  <div
                    key={index}
                    className="relative h-24 overflow-hidden rounded-lg"
                  >
                    <Image
                      src={img.asset.url}
                      alt={`${car.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Car Details */}
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
                <div className="flex items-center gap-3">
                  <Gauge className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="text-sm text-neutral-400">Top Speed</p>
                    <p className="font-bold">{car.topSpeed} mph</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className="text-sm text-neutral-400">0-60 mph</p>
                    <p className="font-bold">{car.acceleration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Cog className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-neutral-400">Horsepower</p>
                    <p className="font-bold">{car.horsepower} hp</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-sm text-neutral-400">Price</p>
                    <p className="font-bold">{car.price}</p>
                  </div>
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
