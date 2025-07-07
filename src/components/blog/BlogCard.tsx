import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt: string;
    publishedAt: string;
    author: { name: string };
    mainImage: {
      asset: {
        url: string;
      };
    };
    categories?: Array<{ title: string }>;
    era?: string;
  };
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden bg-neutral-900 border-neutral-800 hover:border-red-600 transition-all duration-300 h-full flex flex-col">
      <CardHeader className="p-0">
        <Link href={`/blog/${post.slug.current}`}>
          <div className="relative h-48 overflow-hidden">
            {post.mainImage?.asset?.url && (
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}

            {post.era && (
              <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                {post.era} Era
              </Badge>
            )}
          </div>
        </Link>
      </CardHeader>

      <CardContent className="p-6 flex-1">
        <Link href={`/blog/${post.slug.current}`}>
          <h3 className="text-xl text-white font-bold mb-2 hover:text-red-500 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-400 line-clamp-3 mb-4">{post.excerpt}</p>

        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <Badge
                key={category.title}
                variant="secondary"
                className="bg-neutral-800 text-neutral-300"
              >
                {category.title}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-neutral-500">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>{post.author.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(post.publishedAt)}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
