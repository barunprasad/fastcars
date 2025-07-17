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
import { Car } from "@/types/sanity";
import useStore from "@/store/useStore";
import { HeartIcon } from "lucide-react";
import { useCallback } from "react";

interface ModelCardProps {
  car: Car;
}

export function ModelCard({ car }: ModelCardProps) {
  const favorites = useStore((state) => state.favorites);
  const comparisonList = useStore((state) => state.comparisonList);
  const addToFavorites = useStore((state) => state.addToFavorites);
  const removeFromFavorites = useStore((state) => state.removeFromFavorites);
  const addToComparison = useStore((state) => state.addToComparison);
  const removeFromComparison = useStore((state) => state.removeFromComparison);

  const isFav = favorites.some((v) => v._id === car._id);
  const inComp = comparisonList.some((v) => v._id === car._id);

  const onFavoritesClick = useCallback(
    (selectedCar: Car) => {
      if (isFav) {
        removeFromFavorites(selectedCar._id);
      } else {
        addToFavorites(selectedCar);
      }
    },
    [removeFromFavorites, addToFavorites, isFav],
  );

  const onComparisonClick = useCallback(
    (selectedCar: Car) => {
      if (inComp) {
        removeFromComparison(selectedCar._id);
      } else {
        addToComparison(selectedCar);
      }
    },
    [removeFromComparison, addToComparison, inComp],
  );

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
          <Button
            variant={isFav ? "destructive" : "secondary"}
            size="icon"
            className="cursor-pointer size-8 absolute top-4 left-4"
            onClick={() => onFavoritesClick(car)}
          >
            <HeartIcon />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <h3 className="text-2xl font-racing mb-1">{car.name}</h3>
        <p className="text-neutral-400 mb-4">
          {car.manufacturer} • {car.year} • {car.price}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <span>{car.topSpeed} mph</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span>{car.acceleration}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <Button
          className="text-neutral-300 hover:bg-neutral-800 hover:text-white cursor-pointer"
          onClick={() => onComparisonClick(car)}
        >
          {inComp ? "Remove comparison" : "Compare"}
        </Button>
        <Button
          asChild
          variant="link"
          className="text-neutral-300 font-medium underline hover:text-white"
        >
          <Link href={`/models/${car._id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
