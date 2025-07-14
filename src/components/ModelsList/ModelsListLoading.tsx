export function ModelsListLoading() {
  return (
    <section className="py-20 px-6 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Filter Controls Skeleton */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="h-10 bg-neutral-700 rounded animate-pulse w-full" />
        </div>

        {/* Heading & Count Skeleton */}
        <div className="text-center mb-8">
          <div className="h-10 bg-neutral-700 rounded-lg animate-pulse mb-2 max-w-sm mx-auto" />
          <div className="h-5 bg-neutral-700 rounded-lg animate-pulse mb-2 max-w-md mx-auto" />
          <div className="h-6 w-16 bg-neutral-700 rounded animate-pulse mx-auto" />
        </div>

        {/* Simple Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-96 bg-neutral-800 border border-neutral-700 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
