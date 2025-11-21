import { useState, useEffect } from "react";
import Modal from "./ui/Modal";

interface CalendlyPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function CalendlyPopup({ open, onClose }: CalendlyPopupProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!open) setIsLoaded(false);
  }, [open]);

  const calendlyUrl =
    "https://calendly.com/lola-inkyrepertoire/20min?hide_event_type_details=0&hide_gdpr_banner=1";

  return (
    <Modal
      open={open}
      onClose={onClose}
      // CRITICAL: max-w-6xl gives enough pixels for the 2-column layout
      // h-[80vh] md:h-[85vh] ensures the calendar fits vertically without double scrollbars
      className="max-w-5xl h-[85vh] md:h-[750px]"
    >
      <div className="w-full h-full relative">
        {/* Loader */}
        {!isLoaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4 animate-pulse w-full px-8">
              {/* Simulating the split layout structure */}
              <div className="flex w-full gap-8 h-[400px]">
                <div className="w-1/3 bg-gray-100 rounded-xl hidden md:block" />
                <div className="w-full md:w-2/3 bg-gray-100 rounded-xl" />
              </div>
            </div>
          </div>
        )}

        {open && (
          <iframe
            src={calendlyUrl}
            className={`w-full h-full border-0 transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
            title="Schedule a meeting"
            allow="camera; microphone; fullscreen"
          />
        )}
      </div>
    </Modal>
  );
}
