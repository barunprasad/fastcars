import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gauge, Zap, DollarSign } from "lucide-react";

interface ModelCardProps {
  car: {
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
    horsepower: number;
  };
}

export function ModelCard({ car }: ModelCardProps) {
  return (
    <Card className="overflow-hidden py-0 text-white bg-neutral-900 border-neutral-800 hover:border-red-600 transition-all duration-300 group">
      <CardHeader className="p-0">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={car.mainImage.asset.url}
            alt={car.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Badge className="absolute top-4 right-4 bg-red-600 text-white">
            {car.era}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <h3 className="text-2xl font-racing mb-1">{car.name}</h3>
        <p className="text-gray-400 mb-4">
          {car.manufacturer} • {car.year}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Gauge className="w-4 h-4 text-red-500" />
            <span>{car.topSpeed} mph</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span>{car.acceleration}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-green-500" />
          <span className="text-xl font-bold">{car.price}</span>
        </div>
        <Button
          asChild
          variant="outline"
          className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
        >
          <Link href={`/models/${car._id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
