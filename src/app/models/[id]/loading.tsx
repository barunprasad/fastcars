import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function ModelDetailLoading() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6 cursor-pointer" disabled>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Models
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Carousel Section */}
          <div className="space-y-4">
            <div className="relative w-full rounded-lg overflow-hidden">
              <div className="relative h-96 w-full bg-neutral-700 animate-pulse">
                {/* Carousel Navigation Buttons */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 w-8 h-8 animate-pulse" />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 w-8 h-8 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div>
            {/* Header */}
            <div className="mb-6">
              <Badge className="mb-2 bg-neutral-600 text-transparent animate-pulse">
                Era
              </Badge>
              <div className="h-12 bg-neutral-700 rounded-lg animate-pulse mb-2" />
              <div className="h-6 bg-neutral-700 rounded-lg animate-pulse w-3/4" />
            </div>

            {/* Performance Specs Card */}
            <Card className="text-white bg-neutral-900 border-neutral-800 p-6 mb-6">
              <div className="h-6 bg-neutral-700 rounded animate-pulse mb-4 w-48" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="h-4 bg-neutral-700 rounded animate-pulse mb-1 w-20" />
                  <div className="h-5 bg-neutral-700 rounded animate-pulse w-16" />
                </div>
                <div>
                  <div className="h-4 bg-neutral-700 rounded animate-pulse mb-1 w-16" />
                  <div className="h-5 bg-neutral-700 rounded animate-pulse w-12" />
                </div>
                <div>
                  <div className="h-4 bg-neutral-700 rounded animate-pulse mb-1 w-20" />
                  <div className="h-5 bg-neutral-700 rounded animate-pulse w-14" />
                </div>
                <div>
                  <div className="h-4 bg-neutral-700 rounded animate-pulse mb-1 w-12" />
                  <div className="h-5 bg-neutral-700 rounded animate-pulse w-20" />
                </div>
              </div>
            </Card>

            {/* Engine Card */}
            <Card className="text-white bg-neutral-900 border-neutral-800 p-6 mb-6">
              <div className="h-6 bg-neutral-700 rounded animate-pulse mb-2 w-20" />
              <div className="h-4 bg-neutral-700 rounded animate-pulse w-5/6" />
            </Card>

            {/* About Card */}
            <Card className="text-white bg-neutral-900 border-neutral-800 p-6 mb-6">
              <div className="h-6 bg-neutral-700 rounded animate-pulse mb-4 w-16" />
              <div className="space-y-3">
                <div className="h-4 bg-neutral-700 rounded animate-pulse" />
                <div className="h-4 bg-neutral-700 rounded animate-pulse w-5/6" />
                <div className="h-4 bg-neutral-700 rounded animate-pulse w-4/6" />
                <div className="h-4 bg-neutral-700 rounded animate-pulse w-3/4" />
                <div className="h-4 bg-neutral-700 rounded animate-pulse w-5/6" />
                <div className="h-4 bg-neutral-700 rounded animate-pulse w-2/3" />
              </div>
            </Card>

            {/* Key Features Card */}
            <Card className="text-white bg-neutral-900 border-neutral-800 p-6">
              <div className="h-6 bg-neutral-700 rounded animate-pulse mb-4 w-32" />
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <div className="h-4 bg-neutral-700 rounded animate-pulse flex-1" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
