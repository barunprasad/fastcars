"use client";

import ErrorBoundary from "@/components/ErrorBoundary";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ModelDetailError({ error, reset }: ErrorProps) {
  return (
    <ErrorBoundary
      error={error}
      reset={reset}
      title="Failed to Load Car Details"
      description="We couldn't load the details for this car model. It might have been removed or there's a temporary issue."
      backButton={{
        href: "/models",
        label: "Back to Models",
      }}
    />
  );
}
