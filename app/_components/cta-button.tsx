"use client";

import { motion } from "framer-motion";
import { useWhatsAppLead } from "./whatsapp-lead-context";
import { Icon } from "./icons";

export function CTAButton({
  size = "md",
  full = false,
  className = "",
  label = "Falar comigo no WhatsApp",
}: {
  size?: "sm" | "md" | "lg";
  full?: boolean;
  className?: string;
  label?: string;
}) {
  const { openLeadForm } = useWhatsAppLead();
  const sizes = {
    sm: "px-5 py-2.5 text-[0.82rem] gap-2",
    md: "px-6 py-[0.85rem] text-[0.9rem] gap-2.5",
    lg: "px-8 py-[1.05rem] text-[0.97rem] gap-3",
  };

  return (
    <motion.button
      type="button"
      onClick={openLeadForm}
      whileHover={{ scale: 1.025, boxShadow: "0 16px 48px rgba(254,102,1,0.45)" }}
      whileTap={{ scale: 0.975 }}
      transition={{ duration: 0.18 }}
      className={[
        "inline-flex items-center font-sans font-semibold rounded-xl cursor-pointer",
        "bg-[#fe6601] text-white",
        "border border-[rgba(255,255,255,0.12)]",
        "shadow-[0_4px_20px_rgba(254,102,1,0.32),inset_0_1px_0_rgba(255,255,255,0.18)]",
        "transition-shadow duration-200",
        sizes[size],
        full ? "w-full justify-center" : "",
        className,
      ].join(" ")}
    >
      <Icon.WA cls={size === "sm" ? "w-[1em] h-[1em]" : "w-[1.15em] h-[1.15em]"} />
      {label}
    </motion.button>
  );
}
