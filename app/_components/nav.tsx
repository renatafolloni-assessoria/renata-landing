"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CTAButton } from "./cta-button";

const SERVICE_LINKS = [
  { href: "/servicos/atendimento-e-agenda", label: "Automação & WhatsApp" },
  { href: "/servicos/presenca-digital-e-marketing", label: "Presença Digital & Marketing" },
  { href: "/servicos/financeiro-e-processos", label: "Processos & Operação" },
  { href: "/servicos/ferramentas-sob-medida", label: "Ferramentas sob medida" },
];

const NAV_ITEMS = [
  { href: "/#solucao", label: "O que faço" },
  { label: "Serviços", children: SERVICE_LINKS },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#faq", label: "Perguntas" },
];

function ServicesMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 font-sans text-[0.84rem] text-white/40 hover:text-white/80 transition-colors duration-200"
      >
        Serviços
        <svg
          viewBox="0 0 10 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={["w-2.5 h-2.5 transition-transform duration-200", open ? "rotate-180" : ""].join(" ")}
        >
          <polyline points="1,1 5,5 9,1" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64"
          >
            <div className="rounded-xl border border-white/[0.08] bg-[#062848] shadow-[0_20px_48px_rgba(0,0,0,0.4)] overflow-hidden">
              {SERVICE_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 font-sans text-[0.82rem] text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors duration-150"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#041e37]/90 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_4px_32px_rgba(0,0,0,0.3)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <img src="/logo-renata-folloni.png" alt="Renata Folloni" className="h-12 sm:h-16 md:h-25 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <ServicesMenu key={item.label} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-[0.84rem] text-white/40 hover:text-white/80 transition-colors duration-200"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <CTAButton size="sm" />
      </div>
    </motion.header>
  );
}
