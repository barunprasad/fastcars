"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ModelsError({ error, reset }: ErrorProps) {
  return (
    <ErrorBoundary
      error={error}
      reset={reset}
      title="Failed to Load Car Models"
      description="We encountered an error while loading the car models. This might be a temporary issue with our database."
      tryAgainButtonSize="lg"
    />
  );
}
