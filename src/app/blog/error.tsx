"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function BlogError({ error, reset }: ErrorProps) {
  return (
    <ErrorBoundary
      error={error}
      reset={reset}
      title="Failed to Load Blog Posts"
      description="We encountered an error while loading the blog posts. This might be a temporary issue."
      tryAgainButtonSize="lg"
    />
  );
}
