"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWhatsAppLead } from "./whatsapp-lead-context";
import { Icon } from "./icons";

export function FloatingWA() {
  const [visible, setVisible] = useState(false);
  const { openLeadForm } = useWhatsAppLead();
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 440);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={openLeadForm}
          aria-label="Abrir WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 16 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
          className="fixed bottom-6 right-6 z-50 w-[54px] h-[54px] rounded-full
            bg-[#fe6601] text-white flex items-center justify-center
            shadow-[0_8px_32px_rgba(254,102,1,0.55)]"
        >
          <Icon.WA cls="w-6 h-6" />
          <motion.span
            aria-hidden
            animate={{ scale: [1, 1.55, 1], opacity: [0.55, 0, 0.55] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-[#fe6601]/40"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
