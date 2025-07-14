import { AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BackButtonConfig {
  href: string;
  label: string;
}

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
  title: string;
  description: string;
  backButton?: BackButtonConfig;
  tryAgainButtonSize?: "default" | "lg";
  className?: string;
}

export function ErrorBoundary({
  error,
  reset,
  title,
  description,
  backButton,
  tryAgainButtonSize = "default",
  className,
}: ErrorBoundaryProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-gradient-to-b from-neutral-900 to-black flex items-center justify-center px-4",
        className,
      )}
    >
      <Card className="max-w-md w-full text-center bg-neutral-800 border-neutral-700">
        <CardHeader>
          <div className="mb-4">
            <AlertTriangle className="mx-auto h-16 w-16 text-red-500" />
          </div>
          <CardTitle className="text-2xl text-white">{title}</CardTitle>
          <CardDescription className="text-neutral-300">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {backButton ? (
            <div className="flex gap-3 justify-center">
              <Button onClick={reset} variant="destructive" size="default">
                <RefreshCw className="h-4 w-4" />
                Try Again
              </Button>

              <Button
                asChild
                variant="outline"
                size="default"
                className="border-neutral-600 text-white hover:bg-neutral-800"
              >
                <Link href={backButton.href}>
                  <ArrowLeft className="h-4 w-4" />
                  {backButton.label}
                </Link>
              </Button>
            </div>
          ) : (
            <Button
              onClick={reset}
              variant="destructive"
              size={tryAgainButtonSize}
              className="w-full"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
          )}

          {error.digest && (
            <div className="text-sm text-neutral-400">
              Error ID: <code className="text-neutral-300">{error.digest}</code>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
