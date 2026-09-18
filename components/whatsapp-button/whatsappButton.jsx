import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../../constants/site";

// Floating "chat on WhatsApp" button shown on every page.
const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Appear shortly after load so it doesn't compete with the hero.
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{ zIndex: 97 }}
      className={`group fixed bottom-6 right-6 max-sm:bottom-4 max-sm:right-4 flex items-center gap-3 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,.6)] transition-all duration-500 hover:bg-[#1ebe5a] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="w-14 h-14 flex items-center justify-center text-3xl">
        <FaWhatsapp />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap font-semibold transition-all duration-300 group-hover:max-w-[200px] group-hover:pr-5">
        Chat with an engineer
      </span>
    </a>
  );
};

export default WhatsAppButton;
