import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names with Tailwind collision resolution.
 * usage: cn("bg-red-500", condition && "bg-blue-500")
 * -> "bg-blue-500" (correctly overrides, doesn't just append)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
