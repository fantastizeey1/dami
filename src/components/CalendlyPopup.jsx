import { useState, useEffect } from "react";
import Modal from "./ui/Modal";

export default function CalendlyPopup({ open, onClose }) {
  const [desktopLoaded, setDesktopLoaded] = useState(false);
  const [mobileLoaded, setMobileLoaded] = useState(false);

  useEffect(() => {
    if (open) {
      setDesktopLoaded(false);
      setMobileLoaded(false);
    }
  }, [open]);

  return (
    <Modal open={open} onClose={onClose}>
      <div className="relative h-full flex justify-center items-center -m-4 md:-m-8">
        {/* DESKTOP */}
        <div className="relative hidden md:block w-full h-full">
          {/* Skeleton Loader (Desktop Only) */}
          {!desktopLoaded && (
            <div className="absolute inset-0 z-10 p-4 bg-white/90 backdrop-blur-sm rounded-2xl flex flex-col gap-4 animate-pulse">
              <div className="h-6 w-40 bg-gray-300 rounded"></div>
              <div className="h-4 w-64 bg-gray-300 rounded"></div>
              <div className="h-full w-full bg-gray-200 rounded-xl"></div>
            </div>
          )}

          <iframe
            src="https://calendly.com/lola-inkyrepertoire/20min?hide_event_type_details=0&hide_gdpr_banner=1"
            className={`w-full h-full border-0 rounded-2xl transition-opacity duration-500 ${
              desktopLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setDesktopLoaded(true)}
            title="Schedule a meeting (Desktop)"
            allow="camera; microphone; fullscreen"
          />
        </div>

        {/* MOBILE */}
        <div className="relative block md:hidden w-full h-full">
          {/* Skeleton Loader (Mobile Only) */}
          {!mobileLoaded && (
            <div className="absolute inset-0 z-10 p-4 bg-white/90 backdrop-blur-sm rounded-2xl flex flex-col gap-4 animate-pulse">
              <div className="h-6 w-32 bg-gray-300 rounded"></div>
              <div className="h-4 w-52 bg-gray-300 rounded"></div>
              <div className="h-full w-full bg-gray-200 rounded-xl"></div>
            </div>
          )}

          <iframe
            src="https://calendly.com/lola-inkyrepertoire/20min?hide_event_type_details=1&hide_gdpr_banner=1"
            className={`w-full h-full border-0 rounded-2xl transition-opacity duration-500 ${
              mobileLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setMobileLoaded(true)}
            title="Schedule a meeting (Mobile)"
            allow="camera; microphone; fullscreen"
          />
        </div>
      </div>
    </Modal>
  );
}
