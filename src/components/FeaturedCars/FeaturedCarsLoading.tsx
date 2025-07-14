import { CardGroup } from "@/components/CardGroup";

export function FeaturedCarsLoading() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="h-12 md:h-16 bg-neutral-700 rounded-lg animate-pulse mb-4 max-w-lg mx-auto" />
        </div>

        <CardGroup>
          <div className="grid w-full md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-md border border-white/20 animate-pulse"
              >
                <div className="relative overflow-hidden bg-neutral-900">
                  <div className="relative h-64 overflow-hidden bg-neutral-700">
                    <div className="absolute bottom-4 left-4">
                      <div className="h-5 w-32 bg-neutral-600 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardGroup>
      </div>
    </section>
  );
}
