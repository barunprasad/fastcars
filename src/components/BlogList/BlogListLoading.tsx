export function BlogListLoading() {
  return (
    <section className="py-20 px-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Filter Controls Skeleton */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="h-10 bg-neutral-700 rounded animate-pulse w-full sm:max-w-md" />
          <div className="h-10 bg-neutral-700 rounded animate-pulse w-full md:w-auto" />
        </div>

        {/* Simple Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-80 bg-neutral-800 border border-neutral-700 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
