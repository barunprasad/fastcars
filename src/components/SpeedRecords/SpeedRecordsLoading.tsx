import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SpeedRecordsLoading() {
  return (
    <section className="py-20 px-6 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Video Skeleton */}
        <div className="flex-1 flex justify-center">
          <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg bg-neutral-700 animate-pulse" />
        </div>

        {/* Title & Subtitle Skeleton */}
        <div className="flex-1 text-center lg:text-left">
          <div className="h-16 md:h-24 bg-neutral-700 rounded-lg animate-pulse mb-4" />
          <div className="h-6 bg-neutral-700 rounded-lg animate-pulse max-w-md mx-auto lg:mx-0" />
        </div>
      </div>

      {/* Records Cards Skeleton */}
      <div className="mt-12 max-w-7xl mx-auto">
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card
              key={i}
              className="text-white bg-neutral-950 border-neutral-800 animate-pulse"
            >
              <CardHeader className="flex justify-between items-start pb-2">
                <Badge
                  variant="outline"
                  className="text-transparent border-neutral-600 bg-neutral-800"
                >
                  Year
                </Badge>
              </CardHeader>
              <CardTitle className="px-5">
                <div className="h-5 bg-neutral-700 rounded animate-pulse mb-2" />
              </CardTitle>
              <CardContent>
                <div className="h-6 bg-neutral-700 rounded animate-pulse mb-2 w-3/4" />
                <div className="h-4 bg-neutral-700 rounded animate-pulse w-2/3" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
