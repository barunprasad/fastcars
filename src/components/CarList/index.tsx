import { Car } from "@/types/sanity";
import { ModelCard } from "../ModelCard";

interface CarListProps {
  cars: Car[];
}

export function CarList({ cars }: CarListProps) {
  if (cars.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-400 text-lg">
          No models found for the selection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <ModelCard key={car._id} car={car} />
      ))}
    </div>
  );
}
