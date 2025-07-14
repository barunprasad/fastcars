import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ActionButton } from "@/constants/navigation";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  videoUrl?: string;
  variant?: "fullscreen" | "compact";
  showScrollIndicator?: boolean;
  actions?: ActionButton[];
}

export function HeroSection({
  title,
  subtitle,
  videoUrl,
  variant = "fullscreen",
  showScrollIndicator = false,
  actions = [],
}: HeroSectionProps) {
  const isFullscreen = variant === "fullscreen";
  const heightClass = isFullscreen ? "h-screen" : "h-[40vh] min-h-[400px]";
  const titleSizeClass = isFullscreen
    ? "text-5xl md:text-7xl"
    : "text-5xl md:text-6xl";
  const titleWeightClass = isFullscreen ? "font-black" : "font-bold";
  const subtitleSizeClass = isFullscreen ? "text-md md:text-lg" : "text-lg";
  const subtitleColorClass = isFullscreen ? "opacity-90" : "text-neutral-300";
  const contentLayoutClass = isFullscreen
    ? "flex-col justify-center items-center"
    : "justify-center items-center";

  return (
    <section className={cn("relative overflow-hidden", heightClass)}>
      {videoUrl && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div
        className={cn(
          "relative h-full flex text-white px-6",
          contentLayoutClass,
        )}
      >
        <div className="text-center">
          <h1
            className={cn(
              "mb-4 animate-fade-in",
              titleSizeClass,
              titleWeightClass,
            )}
          >
            {title}
          </h1>

          <p
            className={cn(
              "text-center max-w-3xl mx-auto mb-8 animate-slide-in",
              subtitleSizeClass,
              subtitleColorClass,
            )}
          >
            {subtitle}
          </p>

          {actions.length > 0 && (
            <div className="flex gap-4 justify-center animate-slide-in-delayed">
              {actions.map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className={cn(
                    "px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold tracking-wider transition-all",
                    action.variant === "secondary"
                      ? "border-2 border-white text-white hover:bg-white hover:text-black"
                      : "bg-red-600 text-white hover:bg-red-700",
                  )}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} />
          </div>
        )}
      </div>
    </section>
  );
}
