// components/CalendlyPopup.jsx
import Modal from "./ui/Modal";

export default function CalendlyPopup({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="h-full flex justify-center items-center -m-4 md:-m-8 ">
        {/* Desktop view */}
        <iframe
          src="https://calendly.com/lola-inkyrepertoire/20min?hide_event_type_details=0&hide_gdpr_banner=1"
          className="hidden md:block w-full h-full border-0 rounded-2xl"
          title="Schedule a meeting (Desktop)"
          allow="camera; microphone; fullscreen"
        />

        {/* Mobile view */}
        <iframe
          src="https://calendly.com/lola-inkyrepertoire/20min?hide_event_type_details=1&hide_gdpr_banner=1"
          className="block md:hidden w-[100%] h-full border-0 rounded-2xl"
          title="Schedule a meeting (Mobile)"
          allow="camera; microphone; fullscreen"
        />
      </div>
    </Modal>
  );
}
