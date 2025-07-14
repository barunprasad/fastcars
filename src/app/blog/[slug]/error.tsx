"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function BlogPostError({ error, reset }: ErrorProps) {
  return (
    <ErrorBoundary
      error={error}
      reset={reset}
      title="Failed to Load Article"
      description="We couldn't load this blog post. It might have been moved or deleted, or there's a temporary issue."
      backButton={{
        href: "/blog",
        label: "Back to Blog",
      }}
    />
  );
}
