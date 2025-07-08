// src/components/models/ModelsList.tsx
"use client";

import { useState } from "react";
import { ModelCard } from "@/components/models/ModelCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Car } from "@/types/sanity";

interface ModelsListProps {
  cars: Car[];
}

export function ModelsList({ cars }: ModelsListProps) {
  const [selectedEra, setSelectedEra] = useState<string>("all");

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

  const eraLabel = (era: string) =>
    era === "all" ? "All Fast Cars" : `${era.toUpperCase()} ERA`;

  return (
    <section className="py-20 px-6 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Mobile: Select */}
          <div className="w-full md:hidden">
            <Select value={selectedEra} onValueChange={setSelectedEra}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter Era" />
              </SelectTrigger>
              <SelectContent>
                {eras.map((era) => (
                  <SelectItem key={era} value={era} className="capitalize">
                    {era === "all" ? "All Eras" : era}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop: Tabs */}
          <div className="hidden md:block w-full">
            <Tabs
              value={selectedEra}
              onValueChange={setSelectedEra}
              className="w-full"
            >
              <TabsList className="flex space-x-2 overflow-x-auto bg-neutral-900 rounded-lg p-1">
                {eras.map((era) => (
                  <TabsTrigger
                    key={era}
                    value={era}
                    className="text-white px-4 data-[state=active]:bg-red-600 data-[state=active]:text-white font-bold capitalize"
                  >
                    {era === "all" ? "All" : era}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Heading & Count */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-racing mb-2">
            {eraLabel(selectedEra)}
          </h2>
          <p className="text-neutral-400 mb-2">
            {getEraDescription(selectedEra)}
          </p>
          <Badge variant="outline" className="border-red-600 text-red-600">
            {filteredCars.length} {filteredCars.length === 1 ? "Car" : "Cars"}
          </Badge>
        </div>

        {/* Cards Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <ModelCard key={car._id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-400 text-lg">
              No models found for this era.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
