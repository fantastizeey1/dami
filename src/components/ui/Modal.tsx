import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({
  open,
  onClose,
  children,
  className,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  // Fallback to body if modal-root doesn't exist (Robustness)
  const modalRoot = document.getElementById("modal-root") || document.body;

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  // Focus Trap (Accessibility Standard)
  useEffect(() => {
    if (open && dialogRef.current) {
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length) focusable[0].focus();
    }
  }, [open]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Content Container */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            // Base styles + className override
            className={cn(
              "relative bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col outline-none",
              "w-full max-h-[90vh]", // Mobile defaults: Full width, constrained height
              className // <--- Here we inject the specific width for Calendly
            )}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Fixed to top right */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 bg-white/80 hover:bg-gray-100 rounded-full text-gray-500 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Area */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-full h-full overflow-y-auto" // Ensure scrolling if content is too tall
            >
              {children}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    modalRoot
  );
}
