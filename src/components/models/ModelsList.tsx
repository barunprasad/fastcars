"use client";

import { useState } from "react";
import { ModelCard } from "@/components/models/ModelCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface Car {
  _id: string;
  name: string;
  manufacturer: string;
  year: number;
  topSpeed: number;
  acceleration: string;
  horsepower: number;
  price: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  era: string;
}

interface ModelsListProps {
  cars: Car[];
}

export function ModelsList({ cars }: ModelsListProps) {
  const [selectedEra, setSelectedEra] = useState("all");

  const eras = ["all", "present", "2010s", "2000s", "90s", "80s", "70s"];

  const filteredCars =
    selectedEra === "all"
      ? cars
      : cars.filter((car) => car.era === selectedEra);

  const getEraDescription = (era: string) => {
    const descriptions: Record<string, string> = {
      all: `All ${cars.length} legendary speed machines`,
      present: "Modern hypercars pushing the boundaries of speed",
      "2010s": "The hybrid revolution and 1000hp club",
      "2000s": "Breaking the 250mph barrier",
      "90s": "The last analog supercars",
      "80s": "Turbo technology arrives",
      "70s": "Classic muscle and wedge designs",
    };
    return descriptions[era] || "";
  };

  return (
    <section className="py-20 px-6 text-white bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Tabs
          value={selectedEra}
          onValueChange={setSelectedEra}
          className="w-full"
        >
          <TabsList className="grid grid-cols-7 w-full mb-8 bg-neutral-900">
            {eras.map((era) => (
              <TabsTrigger
                key={era}
                value={era}
                className="text-white data-[state=active]:bg-red-600 data-[state=active]:text-white uppercase font-bold"
              >
                {era === "all" ? "All" : era}
              </TabsTrigger>
            ))}
          </TabsList>

          {eras.map((era) => (
            <TabsContent key={era} value={era} className="mt-0">
              <div className="mb-8 text-center">
                <h2 className="text-3xl md:text-4xl font-racing mb-2">
                  {era === "all" ? "All Fast Cars" : `${era.toUpperCase()} ERA`}
                </h2>
                <p className="text-gray-400">{getEraDescription(era)}</p>
                <Badge
                  variant="outline"
                  className="mt-2 border-red-600 text-red-600"
                >
                  {filteredCars.length}{" "}
                  {filteredCars.length === 1 ? "Car" : "Cars"}
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <ModelCard key={car._id} car={car} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
