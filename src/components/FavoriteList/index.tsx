"use client";
import useStore from "@/store/useStore";
import { CarList } from "@/components/CarList";
import { Badge } from "@/components/ui/badge";

export function FavoriteList() {
  const favorites = useStore((state) => state.favorites);

  return (
    <>
      <section className="py-20 px-6 bg-black text-white min-h-screen">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="p-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl mb-2">Your favorites</h2>

              <Badge variant="outline" className="border-red-600 text-red-600">
                {favorites.length} {favorites.length === 1 ? "Car" : "Cars"}
              </Badge>
            </div>
          </div>
          <CarList cars={favorites} />
        </div>
      </section>
    </>
  );
}
