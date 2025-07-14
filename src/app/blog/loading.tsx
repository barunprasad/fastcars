import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, User, Calendar } from "lucide-react";

export default function BlogLoading() {
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

      {/* Blog List Section - matching BlogList structure exactly */}
      <section className="py-20 px-6 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Search and Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                className="pl-10 bg-neutral-900 border-neutral-700 text-white placeholder-neutral-400"
                placeholder="Search articles..."
                disabled
              />
            </div>

            {/* Mobile Select Skeleton */}
            <div className="w-full md:hidden">
              <Select disabled>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="All Eras" />
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
                      className="whitespace-nowrap text-white data-[state=active]:bg-red-600 capitalize"
                      disabled
                    >
                      {era === "all" ? "All" : era}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Blog Cards Grid - matching BlogCard structure exactly */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card
                key={i}
                className="group h-full flex flex-col p-0 overflow-hidden bg-neutral-900 border-neutral-800 animate-pulse"
              >
                <CardHeader className="p-0 relative">
                  <div className="relative h-48 overflow-hidden">
                    <div className="w-full h-full bg-neutral-700" />
                    <Badge className="absolute top-4 left-4 bg-neutral-600 text-transparent">
                      Era
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="h-6 bg-neutral-700 rounded mb-2" />
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-neutral-700 rounded" />
                    <div className="h-4 bg-neutral-700 rounded w-4/5" />
                    <div className="h-4 bg-neutral-700 rounded w-3/5" />
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-neutral-800 text-transparent"
                    >
                      Category
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-neutral-800 text-transparent"
                    >
                      Category
                    </Badge>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <div className="h-4 w-20 bg-neutral-700 rounded" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <div className="h-4 w-16 bg-neutral-700 rounded" />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
