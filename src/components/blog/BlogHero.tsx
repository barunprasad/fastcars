import { getBlogHeroData } from "@/lib/sanity-graphql";

export async function BlogHero() {
  const data = await getBlogHeroData();
  if (!data) return null;

  return (
    <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <video
        src={data.heroVideo.asset.url}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          {data.heroTitle}
        </h1>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto animate-slide-in">
          {data.heroSubtitle}
        </p>
      </div>
    </section>
  );
}
