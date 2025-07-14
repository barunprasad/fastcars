import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Gauge } from "lucide-react";

export function LegendaryEnginesLoading() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Title & Subtitle Skeleton */}
        <div className="flex-1 text-center lg:text-left">
          <div className="h-16 md:h-24 bg-neutral-700 rounded-lg animate-pulse mb-4" />
          <div className="h-6 bg-neutral-700 rounded-lg animate-pulse max-w-md mx-auto lg:mx-0" />
        </div>

        {/* Video Skeleton */}
        <div className="flex-1 flex justify-center">
          <div className="w-auto h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg bg-neutral-700 animate-pulse" />
        </div>
      </div>

      {/* Tabs and Content Skeleton */}
      <div className="mt-12 max-w-7xl mx-auto">
        <Tabs defaultValue="classic" className="w-full">
          <TabsList className="grid grid-cols-3 bg-neutral-900 rounded-lg overflow-hidden">
            {["Classic", "Modern", "Hybrid"].map((label) => (
              <TabsTrigger
                key={label}
                value={label.toLowerCase()}
                className="text-white data-[state=active]:bg-red-600"
                disabled
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="classic" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <Card
                  key={i}
                  className="text-white bg-neutral-900 border-neutral-800 animate-pulse"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="h-6 bg-neutral-700 rounded animate-pulse mb-2 w-3/4" />
                        <div className="space-y-2 mb-3">
                          <div className="h-4 bg-neutral-700 rounded animate-pulse" />
                          <div className="h-4 bg-neutral-700 rounded animate-pulse w-5/6" />
                        </div>
                        <div className="flex items-center gap-2 text-sm mb-3">
                          <Gauge className="w-4 h-4" />
                          <div className="h-4 bg-neutral-700 rounded animate-pulse w-24" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {Array.from({ length: 3 }).map((_, j) => (
                            <div
                              key={j}
                              className="h-6 w-16 bg-neutral-700 rounded animate-pulse"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
