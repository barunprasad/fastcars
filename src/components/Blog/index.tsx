import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { BlogPost } from "@/types/sanity";
import { RichText } from "@/components/RichText";

interface BlogProps {
  post: BlogPost;
}
export function Blog({ post }: BlogProps) {
  return (
    <article className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link href="/blog">
          <Button
            variant="ghost"
            className="mb-6 cursor-pointer hover:bg-neutral-800 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Header */}
        <header className="mb-8">
          {post.era && (
            <Badge className="mb-4 bg-red-600">{post.era} Era</Badge>
          )}
          <h1 className="text-4xl md:text-5xl font-racing mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
          </div>
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <Badge key={category.title} variant="secondary">
                  {category.title}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="relative h-96 md:h-[500px] mb-8 overflow-hidden rounded-lg">
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {post.bodyRaw && <RichText value={post.bodyRaw} />}
        </div>

        {/* Author Bio */}
        {post.author && (
          <div className="mt-12 p-6 bg-gray-900 rounded-lg">
            <div className="flex items-center gap-4">
              {post.author.image && (
                <Image
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                  sizes="(max-width: 64px) 100vw, (max-width: 32px) 50vw, 600px"
                />
              )}
              <div>
                <h3 className="font-bold text-lg">{post.author.name}</h3>
                {post.author.bio && (
                  <p className="text-gray-400 text-sm">{post.author.bio}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
