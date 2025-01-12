import { useEffect } from "react";

/**
 * Custom hook to monitor performance metrics like LCP (Largest Contentful Paint)
 * and FID (First Input Delay) using PerformanceObserver.
 */
export const usePerformanceMonitor = () => {
  useEffect(() => {
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.log(`${entry.name}: ${entry.startTime.toFixed(2)}ms`);
        });
      });

      observer.observe({
        entryTypes: ["largest-contentful-paint", "first-input"],
      });

      // Cleanup observer on component unmount
      return () => observer.disconnect();
    } else {
      console.warn("PerformanceObserver is not supported in this browser.");
    }
  }, []);
};

/**
 * Function to estimate reading time based on word count.
 * Assumes an average reading speed of 200 words per minute.
 *
 * @param {string} content - The text content to estimate reading time for.
 * @returns {number} - Estimated reading time in minutes.
 */
export const estimateReadingTime = (content) => {
  if (!content) return 0; // Handle empty content
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};
