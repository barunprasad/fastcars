import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

/**
 * Format an ISO date string as "Month Day, Year"
 * e.g. "July 2, 2025"
 */
export function formatDate(dateString: string): string {
  return format(new Date(dateString), "MMMM d, yyyy");
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
