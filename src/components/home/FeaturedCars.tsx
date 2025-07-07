import Image from "next/image";
import Link from "next/link";
import { Gauge, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Car {
  _id: string;
  name: string;
  manufacturer: string;
  year: number;
  topSpeed: number;
  acceleration: string;
  price: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  era: string;
}

interface FeaturedCarsProps {
  cars: Car[];
}

export function FeaturedCars({ cars }: FeaturedCarsProps) {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-racing mb-4">
            Featured Speed Machines
          </h2>
        </div>
        <div className="w-full grid-cols-2 px-3 sm:px-6 md:px-12 py-3 sm:py-6 md:py-12 gap-6 lg:gap-9 relative flex items-center overflow-hidden rounded-md border border-white/20">
          <div className="absolute inset-x-0 top-0 h-80 w-full bg-gradient-to-b from-white/10 to-transparent"></div>
          <div className="grid w-full md:grid-cols-2 gap-8">
            {cars.map((car) => (
              <Link
                key={car._id}
                href={`/models/${car._id}`}
                className="group relative overflow-hidden bg-neutral-900 hover:transform transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={car.mainImage.asset.url}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" /> */}
                  <h3 className="absolute bottom-4 left-4 text-lg font-bold mb-1">
                    {car.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
