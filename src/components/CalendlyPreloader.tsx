import { useState, useEffect } from "react";

export default function CalendlyPreloader() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // 1. Wait for the main thread to be idle (don't block First Contentful Paint)
    const onIdle = () => setShouldLoad(true);

    if ("requestIdleCallback" in window) {
      // @ts-ignore - Typescript sometimes misses this on window
      window.requestIdleCallback(onIdle);
    } else {
      setTimeout(onIdle, 2000); // Fallback for Safari
    }
  }, []);

  if (!shouldLoad) return null;

  return (
    <div
      aria-hidden="true"
      className="invisible absolute opacity-0 w-0 h-0 -z-50 pointer-events-none"
    >
      {/* This warms up the DNS cache and downloads the Calendly assets */}
      <iframe
        src="https://calendly.com/lola-inkyrepertoire/20min"
        loading="lazy"
        title="Calendly Preloader"
      />
    </div>
  );
}
