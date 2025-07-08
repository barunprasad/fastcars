import { PropsWithChildren } from "react";

export function CardGroup({ children }: PropsWithChildren) {
  return (
    <div className="w-full grid-cols-2 px-3 sm:px-6 md:px-12 py-3 sm:py-6 md:py-12 gap-6 lg:gap-9 relative flex items-center overflow-hidden rounded-md border border-white/20">
      <div className="absolute inset-x-0 top-0 h-80 w-full bg-gradient-to-b from-white/10 to-transparent" />
      {children}
    </div>
  );
}
