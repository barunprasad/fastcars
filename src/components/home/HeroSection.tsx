import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  data: {
    heroTitle: string;
    heroSubtitle: string;
    heroVideo?: {
      asset: {
        url: string;
      };
    };
  } | null;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={data?.heroVideo?.asset?.url} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative h-full flex flex-col justify-center items-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-black mb-4 text-center animate-fade-in">
          {data?.heroTitle || "SPEED LEGENDS"}
        </h1>

        <p className="text-md md:text-lg text-center max-w-3xl mb-8 animate-slide-in opacity-90">
          {data?.heroSubtitle ||
            "From Classic Muscle to Modern Hypercars - Experience the Evolution of Speed"}
        </p>

        <div className="flex gap-4 animate-slide-in-delayed">
          <Link
            href="/models"
            className="px-4 py-2 md:px-8 md:py-4 bg-red-600 text-white font-semibold text-sm md:text-lg tracking-wider hover:bg-red-700 transition-colors"
          >
            View All Cars
          </Link>

          <Link
            href="/blog"
            className="px-4 py-2 md:px-8 md:py-4 border-2 border-white text-white text-sm md:text-lg font-semibold  tracking-wider hover:bg-white hover:text-black transition-all"
          >
            Read Stories
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
}
