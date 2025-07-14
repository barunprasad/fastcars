import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gauge, Zap } from "lucide-react";

export default function ModelsLoading() {
  return (
    <>
      {/* Hero Section Skeleton - matching HeroSection with variant="compact" */}
      <section className="relative h-[40vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-900 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="relative h-full flex justify-center items-center text-white px-6">
          <div className="text-center">
            <div className="h-12 bg-neutral-700 rounded-lg animate-pulse mb-4 max-w-md mx-auto" />
            <div className="h-6 bg-neutral-700 rounded-lg animate-pulse max-w-2xl mx-auto" />
          </div>
        </div>
      </section>

      {/* Models List Section - matching ModelsList structure exactly */}
      <section className="py-20 px-6 bg-black text-white min-h-screen">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Filter Controls */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Mobile Select Skeleton */}
            <div className="w-full md:hidden">
              <Select disabled>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter Era" />
                </SelectTrigger>
              </Select>
            </div>

            {/* Desktop Tabs Skeleton */}
            <div className="hidden md:block w-full">
              <Tabs value="all" className="w-full">
                <TabsList className="flex space-x-2 overflow-x-auto bg-neutral-900 rounded-lg p-1">
                  {[
                    "all",
                    "present",
                    "2010s",
                    "2000s",
                    "90s",
                    "80s",
                    "70s",
                  ].map((era) => (
                    <TabsTrigger
                      key={era}
                      value={era}
                      className="text-white px-4 data-[state=active]:bg-red-600 data-[state=active]:text-white font-bold capitalize"
                      disabled
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
            <div className="h-10 bg-neutral-700 rounded-lg animate-pulse mb-2 max-w-sm mx-auto" />
            <div className="h-5 bg-neutral-700 rounded-lg animate-pulse mb-2 max-w-md mx-auto" />
            <Badge
              variant="outline"
              className="border-neutral-600 text-transparent bg-neutral-800 animate-pulse"
            >
              Cars
            </Badge>
          </div>

          {/* Model Cards Grid - matching ModelCard structure exactly */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <Card
                key={i}
                className="overflow-hidden py-0 text-white bg-neutral-900 border-neutral-800 animate-pulse"
              >
                <CardHeader className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <div className="w-full h-full bg-neutral-700" />
                    <Badge className="absolute top-4 right-4 bg-neutral-600 text-transparent">
                      Era
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="h-7 bg-neutral-700 rounded mb-1" />
                  <div className="h-4 bg-neutral-700 rounded mb-4 w-3/4" />

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Gauge className="w-4 h-4 text-red-500" />
                      <div className="h-4 w-16 bg-neutral-700 rounded" />
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <div className="h-4 w-12 bg-neutral-700 rounded" />
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-20 bg-neutral-700 rounded" />
                  </div>
                  <Button
                    variant="outline"
                    className="text-neutral-800"
                    disabled
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
