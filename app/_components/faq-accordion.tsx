"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { motion_fadeUp, ease } from "../_lib/motion";

export type FAQItemData = { q: string; a: string };

function FAQItem({
  q,
  a,
  i,
  inView,
}: FAQItemData & { i: number; inView: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={motion_fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      custom={i * 0.5}
      onClick={() => setOpen((v) => !v)}
      className={[
        "rounded-xl border overflow-hidden cursor-pointer transition-all duration-300",
        open
          ? "border-[rgba(254,102,1,0.32)] shadow-[0_4px_24px_rgba(254,102,1,0.09)]"
          : "border-[rgba(4,30,55,0.09)] hover:border-[rgba(254,102,1,0.22)]",
        "bg-white",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <span className="font-sans font-medium text-[#041e37] text-[0.91rem] leading-snug">{q}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.24, ease }}
          className={[
            "w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center font-sans text-xl leading-none font-light transition-colors duration-300",
            open ? "bg-[#fe6601] text-white" : "bg-[rgba(254,102,1,0.1)] text-[#fe6601]",
          ].join(" ")}
        >
          +
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.32, ease }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 font-sans font-light text-[#6a6a6a] text-[0.87rem] leading-[1.8]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQAccordion({ items, inView }: { items: FAQItemData[]; inView: boolean }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <FAQItem key={item.q} {...item} i={i} inView={inView} />
      ))}
    </div>
  );
}
