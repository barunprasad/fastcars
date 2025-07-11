"use client";

import { useState } from "react";
import { BlogCard } from "../BlogCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  author: { name: string };
  mainImage?: { asset: { url: string } };
  categories?: Array<{ title: string }>;
  era?: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEra, setSelectedEra] = useState("all");

  const eras = ["all", "present", "2010s", "2000s", "90s", "80s", "70s"];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEra = selectedEra === "all" || post.era === selectedEra;
    return matchesSearch && matchesEra;
  });

  return (
    <section className="py-20 px-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              className="pl-10 bg-neutral-900 border-neutral-700 text-white placeholder-neutral-400"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="w-full md:hidden">
            <Select value={selectedEra} onValueChange={setSelectedEra}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Eras" />
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
                    className="whitespace-nowrap text-white data-[state=active]:bg-red-600 capitalize"
                  >
                    {era === "all" ? "All" : era}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
