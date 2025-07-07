export function ModelsHero() {
  return (
    <section className="text-white relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-neutral-900 to-black" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-racing mb-4 animate-fade-in">
          ALL MODELS
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-slide-in">
          From timeless classics to modern engineering marvels
        </p>
      </div>
    </section>
  );
}
