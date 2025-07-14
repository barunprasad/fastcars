import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";

export default function BlogPostLoading() {
  return (
    <article className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6 cursor-pointer" disabled>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        {/* Header */}
        <header className="mb-8">
          <Badge className="mb-4 bg-neutral-600 text-transparent animate-pulse">
            Era
          </Badge>

          <div className="h-12 md:h-16 bg-neutral-700 rounded-lg animate-pulse mb-4 max-w-4xl" />

          <div className="flex items-center gap-6 text-neutral-400 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <div className="h-4 w-24 bg-neutral-700 rounded animate-pulse" />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <div className="h-4 w-20 bg-neutral-700 rounded animate-pulse" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="bg-neutral-800 text-transparent animate-pulse"
            >
              Category
            </Badge>
            <Badge
              variant="secondary"
              className="bg-neutral-800 text-transparent animate-pulse"
            >
              Category
            </Badge>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-96 md:h-[500px] mb-8 overflow-hidden rounded-lg">
          <div className="w-full h-full bg-neutral-700 animate-pulse" />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6">
            {/* First paragraph */}
            <div className="space-y-3">
              <div className="h-4 bg-neutral-700 rounded animate-pulse" />
              <div className="h-4 bg-neutral-700 rounded animate-pulse w-5/6" />
              <div className="h-4 bg-neutral-700 rounded animate-pulse w-4/6" />
              <div className="h-4 bg-neutral-700 rounded animate-pulse w-3/6" />
            </div>

            {/* Heading */}
            <div className="h-8 bg-neutral-700 rounded animate-pulse mt-8 mb-4 max-w-md" />

            {/* Second paragraph */}
            <div className="space-y-3">
              <div className="h-4 bg-neutral-700 rounded animate-pulse" />
              <div className="h-4 bg-neutral-700 rounded animate-pulse w-4/5" />
              <div className="h-4 bg-neutral-700 rounded animate-pulse w-5/6" />
              <div className="h-4 bg-neutral-700 rounded animate-pulse w-2/3" />
              <div className="h-4 bg-neutral-700 rounded animate-pulse w-3/4" />
            </div>

            {/* Quote */}
            <div className="border-l-4 border-red-600 pl-4 my-6">
              <div className="h-4 bg-neutral-700 rounded animate-pulse w-4/5" />
              <div className="h-4 bg-neutral-700 rounded animate-pulse w-3/4 mt-2" />
            </div>

            {/* More content */}
            <div className="space-y-3">
              <div className="h-4 bg-neutral-700 rounded animate-pulse" />
              <div className="h-4 bg-neutral-700 rounded animate-pulse w-5/6" />
              <div className="h-4 bg-neutral-700 rounded animate-pulse w-4/6" />
            </div>

            {/* Another heading */}
            <div className="h-6 bg-neutral-700 rounded animate-pulse mt-6 mb-3 max-w-xs" />

            {/* Final paragraph */}
            <div className="space-y-3">
              <div className="h-4 bg-neutral-700 rounded animate-pulse" />
              <div className="h-4 bg-neutral-700 rounded animate-pulse w-4/5" />
              <div className="h-4 bg-neutral-700 rounded animate-pulse w-3/5" />
              <div className="h-4 bg-neutral-700 rounded animate-pulse w-5/6" />
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-neutral-900 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-neutral-700 rounded-full animate-pulse" />
            <div>
              <div className="h-5 w-32 bg-neutral-700 rounded animate-pulse mb-2" />
              <div className="h-3 w-48 bg-neutral-700 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
