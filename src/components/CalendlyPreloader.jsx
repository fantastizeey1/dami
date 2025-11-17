import { useEffect, useRef } from "react";

export default function CalendlyPreloader() {
  const preloaded = useRef(false);

  useEffect(() => {
    if (preloaded.current) return;
    preloaded.current = true;

    // Wait for browser idle time (best UX)
    if ("requestIdleCallback" in window) {
      requestIdleCallback(loadCalendly);
    } else {
      setTimeout(loadCalendly, 500);
    }
  }, []);

  const loadCalendly = () => {
    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.left = "-9999px";
    container.style.top = "-9999px";
    container.style.width = "100vw";
    container.style.height = "100vh";
    container.style.opacity = "0";

    container.innerHTML = `
      <iframe 
        src="https://calendly.com/lola-inkyrepertoire/20min?hide_event_type_details=0&hide_gdpr_banner=1"
        style="width:100%;height:100%;border:0;"
      ></iframe>
    `;

    document.body.appendChild(container);
  };

  return null; // nothing visible
}
