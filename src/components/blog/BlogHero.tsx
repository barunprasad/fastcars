export function BlogHero() {
  return (
    <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-black to-neutral-900" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-racing mb-4 animate-fade-in">
          FAST CARS BLOG
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-slide-in">
          Stories of speed, innovation, and automotive legends
        </p>
      </div>
    </section>
  );
}
