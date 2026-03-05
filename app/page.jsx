"use client";
/**
 * RenataFolloniLanding.jsx — v3 Premium
 * ─────────────────────────────────────────────────────────────────────────────
 * Stack: Next.js · Tailwind CSS · Framer Motion
 *
 * FONT SETUP — add to app/layout.jsx:
 * ─────────────────────────────────────────────────────────────────────────────
 * import { Instrument_Serif, DM_Sans, DM_Mono } from "next/font/google";
 *
 * const instrumentSerif = Instrument_Serif({
 *   subsets: ["latin"], weight: ["400"], style: ["normal","italic"],
 *   variable: "--font-display", display: "swap",
 * });
 * const dmSans = DM_Sans({
 *   subsets: ["latin"], weight: ["300","400","500","600","700"],
 *   variable: "--font-sans", display: "swap",
 * });
 * const dmMono = DM_Mono({
 *   subsets: ["latin"], weight: ["400","500"],
 *   variable: "--font-mono", display: "swap",
 * });
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="pt-BR" className={`${instrumentSerif.variable} ${dmSans.variable} ${dmMono.variable}`}>
 *       <body>{children}</body>
 *     </html>
 *   );
 * }
 *
 * TAILWIND CONFIG — tailwind.config.js:
 * ─────────────────────────────────────────────────────────────────────────────
 * theme: {
 *   extend: {
 *     fontFamily: {
 *       display: ["var(--font-display)", "Georgia", "serif"],
 *       sans:    ["var(--font-sans)", "system-ui", "sans-serif"],
 *       mono:    ["var(--font-mono)", "monospace"],
 *     },
 *   }
 * }
 *
 * ICON SUGGESTIONS (lucide-react):
 * ─────────────────────────────────────────────────────────────────────────────
 * - ClipboardList  → Processos & Operação
 * - Zap            → Automação & WhatsApp
 * - Target         → Posicionamento Digital
 * - TrendingUp     → Funis & Ferramentas
 * - CheckCircle2   → Benefit bullets
 * - Clock4         → Response time microcopy
 *
 * Replace inline SVGs below with lucide-react imports for production:
 * import { Zap, Target, ClipboardList, TrendingUp } from "lucide-react";
 */

"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import { Instagram } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

const WA_URL =
  "https://wa.me/5511982210297?text=Ol%C3%A1%20Renata%21%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20entender%20melhor%20como%20funciona%20sua%20assessoria.";

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATION SYSTEM
// ─────────────────────────────────────────────────────────────────────────────

const ease = [0.16, 1, 0.3, 1]; // expo ease-out

const motion_fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  show:    (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease },
  }),
};

const motion_scaleIn = {
  hidden:  { opacity: 0, scale: 0.94, y: 12 },
  show:    (i = 0) => ({
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease },
  }),
};

// ─────────────────────────────────────────────────────────────────────────────
// HOOK
// ─────────────────────────────────────────────────────────────────────────────

function useReveal(amount = 0.12) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });
  return [ref, inView];
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS — inline SVG (replace with lucide-react in production)
// ─────────────────────────────────────────────────────────────────────────────

const Icon = {
  WA: ({ cls = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
  Check: ({ cls = "w-3 h-3" }) => (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className={cls}>
      <polyline points="1.5,6 4.5,9 10.5,3"/>
    </svg>
  ),
  Clock: ({ cls = "w-3 h-3" }) => (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
      <circle cx="6" cy="6" r="5"/><path d="M6 3.5V6l1.5 1.5"/>
    </svg>
  ),
  Process: ({ cls = "w-5 h-5" }) => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className={cls}>
      <rect x="3" y="4" width="14" height="12" rx="2"/>
      <path d="M7 4V2M13 4V2M3 8h14M7 12h2M11 12h2" strokeLinecap="round"/>
    </svg>
  ),
  Bolt: ({ cls = "w-5 h-5" }) => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className={cls}>
      <path d="M11.5 2L4 11h6.5L8.5 18 16 9h-6.5L11.5 2z" strokeLinejoin="round"/>
    </svg>
  ),
  Target: ({ cls = "w-5 h-5" }) => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className={cls}>
      <circle cx="10" cy="10" r="7.5"/><circle cx="10" cy="10" r="3.5"/>
      <line x1="10" y1="1" x2="10" y2="4"/><line x1="10" y1="16" x2="10" y2="19"/>
      <line x1="1" y1="10" x2="4" y2="10"/><line x1="16" y1="10" x2="19" y2="10"/>
    </svg>
  ),
  Chart: ({ cls = "w-5 h-5" }) => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className={cls}>
      <polyline points="2,14 6,10 10,12 16,5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="1" y1="18" x2="19" y2="18" strokeLinecap="round"/>
    </svg>
  ),
  Info: ({ cls = "w-4 h-4" }) => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
      <circle cx="8" cy="8" r="6.5"/>
      <line x1="8" y1="5.5" x2="8" y2="5.6" strokeWidth="2" strokeLinecap="round"/>
      <line x1="8" y1="7.5" x2="8" y2="11" strokeLinecap="round"/>
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// SHARED: Section eyebrow label
// ─────────────────────────────────────────────────────────────────────────────

function EyebrowLabel({ children, align = "center" }) {
  return (
    <div className={`flex items-center gap-2.5 mb-5 ${align === "center" ? "justify-center" : ""}`}>
      <span className="h-px w-5 rounded-full bg-[#fe6601]/45" />
      <span className="font-mono text-[0.6rem] font-medium tracking-[0.22em] uppercase leading-none text-[#fe6601]/75">
        {children}
      </span>
      <span className="h-px w-5 rounded-full bg-[#fe6601]/45" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED: Primary CTA button
// ─────────────────────────────────────────────────────────────────────────────

function CTAButton({ size = "md", full = false, className = "" }) {
  const sizes = {
    sm: "px-5 py-2.5 text-[0.82rem] gap-2",
    md: "px-6 py-[0.85rem] text-[0.9rem] gap-2.5",
    lg: "px-8 py-[1.05rem] text-[0.97rem] gap-3",
  };

  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
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
      Falar comigo no WhatsApp
    </motion.a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED: Background textures
// ─────────────────────────────────────────────────────────────────────────────

function DotTexture({ opacity = 0.03, spacing = 28 }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
        backgroundSize: `${spacing}px ${spacing}px`,
        opacity,
      }}
    />
  );
}

function GraphPaper({ opacity = 0.04 }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: [
          "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
          "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
        ].join(","),
        backgroundSize: "120px 120px, 120px 120px, 24px 24px, 24px 24px",
        opacity,
      }}
    />
  );
}

function TopoRings({ className = "", stroke = "rgba(254,102,1,0.07)", radii = [50, 90, 136, 188, 248, 316, 392] }) {
  return (
    <svg aria-hidden viewBox="0 0 500 500" className={`pointer-events-none ${className}`}>
      <g fill="none" stroke={stroke} strokeWidth="1">
        {radii.map((r) => (
          <ellipse key={r} cx="250" cy="250" rx={r} ry={Math.round(r * 0.75)} />
        ))}
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FLOATING WHATSAPP
// ─────────────────────────────────────────────────────────────────────────────

function FloatingWA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 440);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
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
        </motion.a>
      )}
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────────────────────────

function Nav() {
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
      transition={{ duration: 0.8, ease }}
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#041e37]/90 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_4px_32px_rgba(0,0,0,0.3)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
        
          <img
  src="/logo-renata-folloni.png"
  alt="Renata Folloni"
  className="h-25 w-auto"
/>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {[
            { href: "#solucao", label: "O que faço" },
            { href: "#sobre",   label: "Sobre" },
            { href: "#faq",     label: "Perguntas" },
          ].map(({ href, label }) => (
            <a key={href} href={href} className="font-sans text-[0.84rem] text-white/40 hover:text-white/80 transition-colors duration-200">
              {label}
            </a>
          ))}
        </nav>

        <CTAButton size="sm" />
      </div>
    </motion.header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────

function Hero() {
  const { scrollY } = useScroll();
  const contentY  = useTransform(scrollY, [0, 480], [0, -56]);
  const contentOp = useTransform(scrollY, [0, 360], [1, 0]);

  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#041e37]">
      <GraphPaper opacity={0.038} />

      {/* Orange atmosphere — top-right */}
      <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[70%] h-[70%]"
        style={{ background: "radial-gradient(ellipse 60% 60% at 100% 0%, rgba(254,102,1,0.13) 0%, transparent 70%)" }} />

      {/* Deep navy vignette — bottom-left */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[500px]"
        style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(2,12,24,0.95) 0%, transparent 65%)" }} />

      {/* Topo rings — right */}
      <TopoRings className="absolute -right-[8%] top-[12%] w-[550px] h-[550px] opacity-80"
        stroke="rgba(254,102,1,0.06)" radii={[50, 90, 136, 188, 248, 316, 392, 476]} />

      {/* Animated breathing ring */}
      <motion.div aria-hidden
        animate={{ scale: [1, 1.07, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[4%] top-[18%] w-[320px] h-[320px] rounded-full border border-[rgba(254,102,1,0.12)]"
        style={{ boxShadow: "inset 0 0 60px rgba(254,102,1,0.05)" }} />

      {/* Bottom divider */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(254,102,1,0.25) 50%, transparent 100%)" }} />

      <motion.div
        style={{ y: contentY, opacity: contentOp }}
        className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8 pt-28 pb-16
          grid lg:grid-cols-[1.15fr_0.85fr] gap-10 xl:gap-16 items-center w-full"
      >
        {/* LEFT */}
        <div>
          <motion.div variants={motion_fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 mb-9 pl-1.5 pr-4 py-1.5 rounded-full
              border border-[rgba(254,102,1,0.24)] bg-[rgba(254,102,1,0.08)]"
          >
            <span className="w-5 h-5 rounded-full bg-[rgba(254,102,1,0.16)] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe6601] animate-pulse" />
            </span>
            <span className="font-mono text-[0.62rem] text-[#fe6601]/80 font-medium tracking-[0.18em] uppercase">
              Para profissionais da área da saúde
            </span>
          </motion.div>

          <motion.h1 variants={motion_fadeUp} initial="hidden" animate="show" custom={1}
            className="font-display text-[clamp(3rem,5.8vw,4.6rem)] leading-[1.0] tracking-[-0.02em] text-white mb-6"
          >
            Seu consultório
            <br />
            <em className="text-[#fe6601] not-italic italic">crescendo.</em>
            <br />
            <span className="text-white/35 font-display text-[clamp(2.4rem,4.6vw,3.6rem)]">
              Sem você no centro.
            </span>
          </motion.h1>

          <motion.p variants={motion_fadeUp} initial="hidden" animate="show" custom={2}
            className="font-sans font-light text-white/50 text-[1rem] leading-[1.85] max-w-[430px] mb-9"
          >
            Estruturo a operação do seu consultório para que você pare de apagar
            incêndios e comece a ter tempo, clareza e previsibilidade.
          </motion.p>

          <motion.ul variants={motion_fadeUp} initial="hidden" animate="show" custom={3} className="space-y-3.5 mb-11">
            {[
              ["Menos retrabalho",     "processos que rodam sem você"],
              ["Mais pacientes ideais", "posicionamento e funis que convertem"],
              ["Operação previsível",  "WhatsApp, CRM e agenda integrados"],
            ].map(([bold, rest]) => (
              <li key={bold} className="flex items-start gap-3">
                <span className="mt-[2px] w-[18px] h-[18px] flex-shrink-0 rounded-[5px] flex items-center justify-center text-[#fe6601] bg-[rgba(254,102,1,0.13)] border border-[rgba(254,102,1,0.28)]">
                  <Icon.Check cls="w-2.5 h-2.5" />
                </span>
                <span className="font-sans text-[0.88rem] leading-[1.5] text-white/52">
                  <strong className="text-white/86 font-semibold">{bold}</strong>
                  {" — "}{rest}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={motion_fadeUp} initial="hidden" animate="show" custom={4}
            className="flex flex-col sm:flex-row sm:items-center gap-5"
          >
            <div className="flex-shrink-0">
              <CTAButton size="lg" />
              <p className="mt-2.5 flex items-center gap-1.5 font-sans text-[0.67rem] text-white/28">
                <Icon.Clock cls="w-3 h-3 opacity-55 flex-shrink-0" />
                Respondo em até 2h no horário comercial
              </p>
            </div>

            <div className="hidden sm:block h-10 w-px bg-white/[0.08]" />

            <div>
              <p className="font-mono text-[0.59rem] text-white/28 uppercase tracking-[0.16em] mb-1.5">
                O que acontece depois
              </p>
              <p className="font-sans text-[0.78rem] text-white/38 leading-relaxed font-light">
                Você recebe uma proposta personalizada
                <br />com plano, etapas e investimento.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — Glass card */}
        <motion.div variants={motion_scaleIn} initial="hidden" animate="show" custom={1}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-[340px]">
            {[310, 420].map((s) => (
              <div key={s} aria-hidden
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(254,102,1,0.07)]"
                style={{ width: s, height: s }} />
            ))}

            <motion.div
              whileHover={{ y: -6, boxShadow: "0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(254,102,1,0.3)" }}
              transition={{ duration: 0.3 }}
              className="relative z-10 rounded-2xl overflow-hidden bg-[rgba(6,32,60,0.6)] backdrop-blur-2xl
                border border-white/[0.07] shadow-[0_24px_64px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.07),0_0_0_1px_rgba(254,102,1,0.13)]"
            >
              <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(254,102,1,0.6), transparent)" }} />
              <div className="p-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe6601] animate-pulse" />
                  <span className="font-mono text-[0.58rem] text-[#fe6601]/65 uppercase tracking-[0.2em]">
                    Primeira conversa
                  </span>
                </div>

                <h3 className="font-display text-white text-[1.55rem] leading-[1.1] tracking-[-0.01em] mb-3">
                  Descubre onde sua
                  <br />operação está travando.
                </h3>
                <p className="font-sans font-light text-white/38 text-[0.84rem] leading-[1.7] mb-7">
                Em 20 minutos no WhatsApp te ajudo a identificar o principal gargalo da sua operação — e qual o próximo passo para resolver.
                </p>

                <CTAButton size="sm" full />
                <p className="text-center font-sans text-[0.62rem] text-white/22 mt-2.5">
                  Sem compromisso. Sem bot. Atendimento pessoal.
                </p>

                <div className="mt-6 pt-5 border-t border-white/[0.07] grid grid-cols-2">
                  {[["20+", "Negócios estruturados"], ["10+", "Anos de experiência em negócios digitais"]].map(([num, label], i) => (
                    <div key={num} className={`text-center px-3 ${i === 0 ? "border-r border-white/[0.07]" : ""}`}>
                      <div className="font-display text-[#fe6601] text-[1.9rem] leading-none tracking-[-0.02em]">{num}</div>
                      <div className="font-mono text-white/25 text-[0.57rem] tracking-widest uppercase mt-1.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[0.52rem] text-white/18 tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-9 bg-gradient-to-b from-white/40 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TRUST BAR
// ─────────────────────────────────────────────────────────────────────────────

const STATS = [
  ["20+", "Negócios estruturados"],
  ["5+",  "Anos de especialização"],
  ["10+", "Especialidades atendidas"],
  ["2–4", "Semanas p/ 1ºs resultados"],
];

function TrustBar() {
  const [ref, inView] = useReveal();
  return (
    <div ref={ref} className="relative overflow-hidden bg-[#041e37]">
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(254,102,1,0.07) 0%, transparent 65%)" }} />
      <div className="relative z-10 border-y border-white/[0.07] max-w-[1120px] mx-auto px-5 sm:px-8 py-7">
        <div className="flex flex-wrap justify-center">
          {STATS.map(([num, label], i) => (
            <motion.div key={num} variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={i}
              className="flex-1 min-w-[130px] text-center px-4 sm:px-8 py-2.5 [&:not(:last-child)]:border-r border-white/[0.07]"
            >
              <div className="font-display text-[#fe6601] text-[1.9rem] leading-none tracking-[-0.02em]">{num}</div>
              <div className="font-mono text-white/30 text-[0.59rem] tracking-widest uppercase mt-1.5">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROBLEMA
// ─────────────────────────────────────────────────────────────────────────────

const PROBLEMS = [
  { n: "01", title: "Agenda cheia, dinheiro curto",  body: "Atende muito, cobra pouco, perde tempo com processos manuais. O esforço não se traduz em resultado." },
  { n: "02", title: "Cada coisa depende de você",    body: "Agendamento, confirmação, follow-up, conteúdo — não existe operação, existe você fazendo tudo." },
  { n: "03", title: "Não sabe como se posicionar",   body: "Precisa de presença digital mas não sabe comunicar seu diferencial sem parecer vendedor." },
  { n: "04", title: "Ferramentas que não conversam", body: "Instagram, WhatsApp, planilha, CRM — tudo solto, sem funil, gerando retrabalho todo dia." },
  { n: "05", title: "Crescer parece impossível",     body: "Mais pacientes = mais caos. Você está no limite e pensar em expandir dá medo, não esperança." },
  { n: "06", title: "Falta tempo estratégico",       body: "O dia termina e você só cumpriu urgências. Nunca sobra espaço para construir o que imagina." },
];

function Problema() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} id="problema" className="relative overflow-hidden bg-[#041e37] py-28 sm:py-36">
      <DotTexture opacity={0.025} spacing={32} />
      <TopoRings className="absolute -left-[9%] top-1/2 -translate-y-1/2 w-[520px] h-[520px]"
        stroke="rgba(254,102,1,0.065)" radii={[50, 90, 138, 193, 256, 328, 408]} />
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 w-0 h-0 border-solid"
        style={{ borderWidth: "0 0 220px 220px", borderColor: "transparent transparent rgba(254,102,1,0.055) transparent" }} />

      <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
          className="text-center max-w-[540px] mx-auto mb-16"
        >
          <EyebrowLabel>Reconhece algum desses?</EyebrowLabel>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em] text-white mb-4">
            Você é excelente no que faz.
            <br /><span className="text-white/32">Mas o negócio ainda trava.</span>
          </h2>
          <p className="font-sans font-light text-white/38 text-[0.95rem] leading-[1.8]">
            A faculdade te ensinou a atender. Não te ensinou a operar um negócio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden"
          style={{ gap: "1px", background: "rgba(255,255,255,0.05)", boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
        >
          {PROBLEMS.map(({ n, title, body }, i) => (
            <motion.div key={n} variants={motion_scaleIn} initial="hidden" animate={inView ? "show" : "hidden"} custom={i}
              whileHover={{ backgroundColor: "rgba(8,38,68,0.99)" }} transition={{ duration: 0.18 }}
              className="relative bg-[rgba(4,28,52,0.97)] p-7 cursor-default group"
            >
              <span className="absolute top-5 right-5 font-display text-[3.2rem] leading-none text-[rgba(254,102,1,0.08)] select-none pointer-events-none">{n}</span>
              <div className="w-9 h-9 rounded-xl mb-5 flex items-center justify-center bg-[rgba(254,102,1,0.1)] border border-[rgba(254,102,1,0.22)] text-[#fe6601] group-hover:bg-[rgba(254,102,1,0.18)] transition-colors duration-300">
                <Icon.Info />
              </div>
              <h3 className="font-sans font-semibold text-white text-[0.93rem] mb-2 leading-snug">{title}</h3>
              <p className="font-sans font-light text-white/37 text-[0.81rem] leading-[1.7]">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SOLUÇÃO
// ─────────────────────────────────────────────────────────────────────────────

const PILLARS = [
  { IconComp: Icon.Process, title: "Processos & Operação",   body: "Mapeio e redesenho todos os fluxos operacionais, eliminando gargalos e retrabalho invisíveis." },
  { IconComp: Icon.Bolt,    title: "Automação & WhatsApp",   body: "Fluxos automáticos de agendamento, confirmação, cobrança e follow-up sem intervenção manual." },
  { IconComp: Icon.Target,  title: "Posicionamento Digital", body: "Mensagem central, proposta de valor e estratégia de comunicação que atrai o paciente ideal." },
  { IconComp: Icon.Chart,   title: "Funis & Ferramentas",    body: "CRM, funil de captação e métricas integradas — tudo conectado, monitorado e com dados reais." },
];

function Solucao() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} id="solucao" className="relative overflow-hidden bg-white py-28 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(4,30,55,0.045) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start mb-16">
          <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={0}>
            <EyebrowLabel align="left">O que eu faço</EyebrowLabel>
            <h2 className="font-display text-[clamp(2rem,3.8vw,2.9rem)] leading-[1.06] tracking-[-0.02em] text-[#041e37]">
              Construo a base que faz
              <br />o seu negócio crescer
              <br /><em className="text-[#fe6601] not-italic italic">sem depender de você.</em>
            </h2>
          </motion.div>

          <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1} className="lg:pt-2">
            <p className="font-sans font-light text-[#5c5c5c] text-[0.97rem] leading-[1.85] mb-4">
              Não é gestão de redes sociais. Não é mais uma ferramenta ou curso. É a estrutura real que o seu consultório precisa para funcionar com previsibilidade.
            </p>
            <p className="font-sans font-light text-[#5c5c5c] text-[0.97rem] leading-[1.85] mb-8">
              Mapeio sua operação atual, identifico onde tempo e dinheiro estão vazando, e implemento junto com você os sistemas que resolvem isso de verdade.
            </p>
            <CTAButton />
            <p className="mt-2.5 font-sans text-[0.67rem] text-[#9a9a9a]">Respondo em até 2h no horário comercial</p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map(({ IconComp, title, body }, i) => (
            <motion.div key={title} variants={motion_scaleIn} initial="hidden" animate={inView ? "show" : "hidden"} custom={i + 2}
              whileHover={{ y: -5, borderColor: "rgba(254,102,1,0.35)", boxShadow: "0 18px 44px rgba(4,30,55,0.11)" }}
              transition={{ duration: 0.22 }}
              className="rounded-xl border border-[rgba(4,30,55,0.09)] bg-[#f7f8fa] p-6 cursor-default group"
            >
              <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center bg-[rgba(254,102,1,0.1)] border border-[rgba(254,102,1,0.2)] text-[#fe6601] group-hover:bg-[rgba(254,102,1,0.18)] transition-colors duration-300">
                <IconComp />
              </div>
              <h4 className="font-sans font-semibold text-[#041e37] text-[0.92rem] mb-2 leading-snug">{title}</h4>
              <p className="font-sans font-light text-[#6a6a6a] text-[0.8rem] leading-[1.68]">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PARA QUEM
// ─────────────────────────────────────────────────────────────────────────────

const AUDIENCES = [
  { emoji: "🩺", label: "Médicos & Especialistas",     pain: "Agenda lotada mas faturamento estagnado?",    body: "Estruturo sua operação para que cada consulta converta melhor e o consultório cresça de forma previsível." },
  { emoji: "🧠", label: "Psicólogos & Terapeutas",     pain: "Perde pacientes por falta de acompanhamento?", body: "Automações e fluxos de WhatsApp que mantêm sua agenda cheia sem esforço manual." },
  { emoji: "🥦", label: "Nutricionistas & Solos Premium", pain: "Quer cobrar mais e atrair quem valoriza?",  body: "Posicionamento e funis que comunicam seu diferencial real e convertem pacientes ideais." },
];

function ParaQuem() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} id="para-quem" className="relative overflow-hidden py-28 sm:py-36" style={{ background: "#f4f5f7" }}>
      <TopoRings className="absolute right-[-6%] top-[-6%] w-[480px] h-[480px]"
        stroke="rgba(4,30,55,0.03)" radii={[55, 98, 148, 205, 270, 342, 422]} />

      <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center max-w-xl mx-auto mb-14">
          <EyebrowLabel>Para quem é</EyebrowLabel>
          <h2 className="font-display text-[clamp(2rem,3.8vw,2.9rem)] leading-[1.06] tracking-[-0.02em] text-[#041e37] mb-4">
            Para você que já é excelente
            <br /><em className="text-[#fe6601] not-italic italic">e quer que o negócio acompanhe.</em>
          </h2>
          <p className="font-sans font-light text-[#6a6a6a] text-[0.95rem] leading-[1.8]">
            Trabalho com profissionais que já têm pacientes, reputação e vontade de crescer — mas estão travados na operação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {AUDIENCES.map(({ emoji, label, pain, body }, i) => (
            <motion.div key={label} variants={motion_scaleIn} initial="hidden" animate={inView ? "show" : "hidden"} custom={i}
              whileHover={{ y: -5, borderColor: "rgba(254,102,1,0.3)", boxShadow: "0 18px 44px rgba(4,30,55,0.1)" }}
              transition={{ duration: 0.22 }}
              className="bg-white rounded-2xl border border-[rgba(4,30,55,0.08)] p-8 text-center cursor-default group"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl text-[1.8rem] flex items-center justify-center bg-[rgba(254,102,1,0.09)] group-hover:bg-[rgba(254,102,1,0.16)] transition-colors duration-300">
                {emoji}
              </div>
              <h3 className="font-sans font-semibold text-[#041e37] text-[0.97rem] mb-2">{label}</h3>
              <p className="font-sans text-[0.81rem] text-[#fe6601] font-medium italic mb-3 leading-snug">{pain}</p>
              <p className="font-sans font-light text-[#6a6a6a] text-[0.82rem] leading-[1.7]">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROCESSO
// ─────────────────────────────────────────────────────────────────────────────

const STEPS = [
  { n: "01", title: "Você me manda uma mensagem",      body: "Conta em 2 minutos o que está travando. Sem formulário, sem call. Respondo o mesmo dia." },
  { n: "02", title: "Recebe a proposta personalizada", body: "Preparo uma apresentação com diagnóstico, plano de estruturação e investimento detalhado." },
  { n: "03", title: "Mergulhamos na sua operação",     body: "Analiso processos, ferramentas, comunicação e funis. Você entende onde perde tempo e dinheiro." },
  { n: "04", title: "Construímos e implementamos",     body: "Com acompanhamento próximo, os sistemas ficam prontos e rodando — sem dependência minha." },
];

function Processo() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} id="processo" className="relative overflow-hidden bg-white py-28 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "radial-gradient(rgba(4,30,55,0.09) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.35 }} />

      <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center max-w-xl mx-auto mb-16">
          <EyebrowLabel>Como funciona</EyebrowLabel>
          <h2 className="font-display text-[clamp(2rem,3.8vw,2.9rem)] leading-[1.06] tracking-[-0.02em] text-[#041e37] mb-4">
            Do WhatsApp à operação
            <br /><em className="text-[#fe6601] not-italic italic">estruturada em 4 etapas.</em>
          </h2>
          <p className="font-sans font-light text-[#6a6a6a] text-[0.95rem] leading-[1.8]">
            Sem burocracia. Você começa a ver resultados nas primeiras semanas.
          </p>
        </motion.div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div aria-hidden className="hidden lg:block pointer-events-none absolute top-[22px] left-[calc(12.5%+22px)] right-[calc(12.5%+22px)] h-px"
            style={{ background: "linear-gradient(90deg, #fe6601 0%, rgba(254,102,1,0.25) 100%)" }} />

          {STEPS.map(({ n, title, body }, i) => (
            <motion.div key={n} variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={i} className="text-center group">
              <motion.div
                whileHover={{ backgroundColor: "#fe6601", boxShadow: "0 0 0 4px white, 0 0 0 5px #fe6601, 0 8px 24px rgba(254,102,1,0.35)" }}
                transition={{ duration: 0.18 }}
                className="w-11 h-11 mx-auto mb-6 rounded-full flex items-center justify-center bg-[#041e37] text-white font-mono text-[0.78rem] font-semibold relative z-10 ring-4 ring-white shadow-[0_0_0_1px_#fe6601] cursor-default transition-all duration-300"
              >{n}</motion.div>
              <h4 className="font-sans font-semibold text-[#041e37] text-[0.92rem] mb-2.5 leading-snug">{title}</h4>
              <p className="font-sans font-light text-[#6a6a6a] text-[0.8rem] leading-[1.7]">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DEPOIMENTOS
// ─────────────────────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  { initials: "AM", name: "Dra. Amanda M.", role: "Ginecologista · São Paulo",       quote: "Agenda cheia, mas não sabia para onde ia o dinheiro. A Renata mapeou minha operação e em duas semanas já tinha clareza do que precisava mudar. Hoje meu consultório roda de forma completamente diferente.", result: "Operação estruturada em 2 semanas" },
  { initials: "RL", name: "Rafael L.",      role: "Psicólogo · Belo Horizonte",      quote: "Lista de espera de 3 meses e eu ainda perdia pacientes por falta de acompanhamento. O fluxo de WhatsApp que a Renata implementou mudou isso completamente.",                                             result: "+60% taxa de retorno de pacientes" },
  { initials: "CS", name: "Camila S.",      role: "Nutricionista · Rio de Janeiro",  quote: "Depois que estruturei meu posicionamento e as automações, meu faturamento cresceu 40% em 90 dias — sem aumentar atendimentos. Só otimizando o que já tinha.",                                             result: "+40% faturamento em 90 dias" },
];

function Depoimentos() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} id="depoimentos" className="relative overflow-hidden py-28 sm:py-36" style={{ background: "#f4f5f7" }}>
      <TopoRings className="absolute -left-[7%] -bottom-[7%] w-[460px] h-[460px]" stroke="rgba(4,30,55,0.03)" radii={[55, 98, 148, 205, 270, 342]} />

      <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center max-w-xl mx-auto mb-14">
          <EyebrowLabel>Depoimentos</EyebrowLabel>
          <h2 className="font-display text-[clamp(2rem,3.8vw,2.9rem)] leading-[1.06] tracking-[-0.02em] text-[#041e37]">
            Resultados reais de quem
            <br /><em className="text-[#fe6601] not-italic italic">estruturou com a Renata.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map(({ initials, name, role, quote, result }, i) => (
            <motion.div key={name} variants={motion_scaleIn} initial="hidden" animate={inView ? "show" : "hidden"} custom={i}
              whileHover={{ y: -5, boxShadow: "0 22px 52px rgba(4,30,55,0.11)" }} transition={{ duration: 0.22 }}
              className="bg-white rounded-2xl border border-[rgba(4,30,55,0.08)] p-7 flex flex-col cursor-default"
            >
              <div className="font-display text-[4.5rem] leading-[0.8] text-[rgba(254,102,1,0.12)] select-none mb-1">"</div>
              <p className="font-sans font-light text-[#2a2a2a] text-[0.87rem] leading-[1.8] italic mb-5 flex-1">{quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(4,30,55,0.07)]">
                <div className="w-9 h-9 rounded-full bg-[#041e37] text-white font-sans font-bold text-[0.75rem] flex items-center justify-center flex-shrink-0">{initials}</div>
                <div>
                  <div className="font-sans font-semibold text-[#041e37] text-[0.84rem] leading-none">{name}</div>
                  <div className="font-sans text-[#9a9a9a] text-[0.7rem] mt-0.5">{role}</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2.5">
                <span className="font-mono text-[0.58rem] font-medium tracking-widest uppercase text-[#fe6601] bg-[rgba(254,102,1,0.1)] border border-[rgba(254,102,1,0.2)] px-2.5 py-1 rounded-md flex-shrink-0">Resultado</span>
                <span className="font-sans text-[0.74rem] text-[#6a6a6a] font-medium">{result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SOBRE
// ─────────────────────────────────────────────────────────────────────────────

const TAGS = ["Processos", "Automação", "Posicionamento", "Funis", "WhatsApp Flows", "CRM", "Operação Digital"];

function Sobre() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} id="sobre" className="relative overflow-hidden bg-white py-28 sm:py-36">
      <TopoRings className="absolute right-[-5%] top-[-5%] w-[480px] h-[480px]" stroke="rgba(4,30,55,0.028)" radii={[65, 115, 172, 237, 310, 390]} />

      <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-14 xl:gap-20 items-center">
          <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={0}>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-[#041e37] to-[#062848] border border-white/[0.06] shadow-[0_28px_72px_rgba(4,30,55,0.25)]">
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 70% 25%, rgba(254,102,1,0.14) 0%, transparent 60%)" }} />
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
  <img
    src="/renata.jpg"
    alt="Renata Folloni"
    className="absolute inset-0 w-full h-full object-cover object-top"
  />
</div>
              <div className="absolute bottom-0 right-0 w-20 h-20" style={{ background: "linear-gradient(135deg, transparent 50%, rgba(254,102,1,0.12) 50%)" }} />
            </div>
          </motion.div>

          <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1}>
            <EyebrowLabel align="left">Sobre mim</EyebrowLabel>
            <h2 className="font-display text-[clamp(1.9rem,3.2vw,2.6rem)] leading-[1.06] tracking-[-0.02em] text-[#041e37] mt-1 mb-7">
              Especialista em fazer
              <br />o consultório funcionar
              <br /><em className="text-[#fe6601] not-italic italic">sem depender de você.</em>
            </h2>
            <div className="space-y-4 mb-8">
              {[
                "Nos últimos anos, liderei operações de Customer Success e Customer Experience — de estruturas enxutas até operações com milhões de clientes — sempre com o mesmo foco: simplificar o que é complexo e transformar gargalos em processos que funcionam. Meu trabalho envolve estruturar a jornada do cliente e também a jornada do profissional, para que o negócio cresça de forma organizada e sustentável.",
                "Não vendo ferramenta. Não vendo curso. Entro na sua realidade, entendo onde está travando, e construo junto com você um sistema que você consegue operar — e manter — sem depender de mim.",
                "O padrão que vejo em quem chega até mim é sempre o mesmo: excelente profissional, operação frágil. É exatamente isso que eu venho resolver.",
              ].map((text, i) => (
                <p key={i} className="font-sans font-light text-[#6a6a6a] text-[0.95rem] leading-[1.85]">{text}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span key={tag} className="font-mono text-[0.61rem] font-medium tracking-[0.14em] uppercase text-[#fe6601] bg-[rgba(254,102,1,0.09)] border border-[rgba(254,102,1,0.2)] px-3 py-1.5 rounded-lg">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────────

const FAQS = [
  { q: "Quanto tempo leva para ver resultados?",                               a: "Automações de WhatsApp e processos operacionais costumam gerar impacto em 2 a 4 semanas. Posicionamento e funis têm um ciclo de 60 a 90 dias. O que garanto é que cada etapa tem um entregável claro." },
  { q: "Você faz gestão de redes sociais ou cria conteúdo?",                  a: "Não. O que faço é estruturar a mensagem, o posicionamento e a estratégia de comunicação — para que qualquer produção de conteúdo que você faça seja coerente e converta." },
  { q: "Preciso ter uma equipe para implementar?",                             a: "Depende. Grande parte do meu trabalho é justamente reduzir a dependência de pessoas. Construo sistemas que você opera sozinho ou com uma equipe enxuta." },
  { q: "É consultoria pontual ou acompanhamento contínuo?",                   a: "Ofereço as duas modalidades. Existe um formato de projeto com início, meio e fim — e um formato de acompanhamento contínuo para quem precisa de uma parceira estratégica no dia a dia." },
  { q: "Já tentei automações antes e não funcionou. Por que seria diferente?", a: "Porque ferramenta sem processo não resolve nada. Começo sempre pelo processo — a ferramenta vem depois, e aí ela funciona." },
  { q: "Qual é o investimento mínimo para trabalhar com você?",               a: "Não divulgo valores na página. Na nossa conversa você recebe uma proposta clara com tudo detalhado — sem surpresas." },
  { q: "Como começo? O que acontece quando mando mensagem no WhatsApp?",     a: "Você me conta brevemente o que está travando. Respondo pessoalmente — sem bot. Se fizer sentido avançar, preparo e envio uma apresentação personalizada. Tudo no WhatsApp, sem call obrigatória." },
];

function FAQItem({ q, a, i, inView }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={i * 0.5}
      onClick={() => setOpen((v) => !v)}
      className={[
        "rounded-xl border overflow-hidden cursor-pointer transition-all duration-300",
        open ? "border-[rgba(254,102,1,0.32)] shadow-[0_4px_24px_rgba(254,102,1,0.09)]"
             : "border-[rgba(4,30,55,0.09)] hover:border-[rgba(254,102,1,0.22)]",
        "bg-white",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <span className="font-sans font-medium text-[#041e37] text-[0.91rem] leading-snug">{q}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.24, ease }}
          className={["w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center font-sans text-xl leading-none font-light transition-colors duration-300",
            open ? "bg-[#fe6601] text-white" : "bg-[rgba(254,102,1,0.1)] text-[#fe6601]"].join(" ")}
        >+</motion.div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.32, ease }} className="overflow-hidden">
            <p className="px-6 pb-6 font-sans font-light text-[#6a6a6a] text-[0.87rem] leading-[1.8]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQ() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} id="faq" className="relative overflow-hidden py-28 sm:py-36" style={{ background: "#f4f5f7" }}>
      <TopoRings className="absolute right-[-7%] top-[-7%] w-[500px] h-[500px]" stroke="rgba(4,30,55,0.028)" radii={[55, 98, 148, 205, 270, 342, 422]} />
      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-12">
          <EyebrowLabel>Perguntas frequentes</EyebrowLabel>
          <h2 className="font-display text-[clamp(2rem,3.8vw,2.9rem)] leading-[1.06] tracking-[-0.02em] text-[#041e37]">
            O que você precisa saber
            <br /><em className="text-[#fe6601] not-italic italic">antes de conversar.</em>
          </h2>
        </motion.div>
        <div className="space-y-3">
          {FAQS.map((item, i) => <FAQItem key={item.q} {...item} i={i} inView={inView} />)}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FINAL CTA
// ─────────────────────────────────────────────────────────────────────────────

function FinalCTA() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} id="cta-final" className="relative overflow-hidden bg-[#041e37] py-36 sm:py-44 text-center">
      <GraphPaper opacity={0.032} />
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]"
        style={{ background: "radial-gradient(ellipse, rgba(254,102,1,0.14) 0%, transparent 65%)" }} />
      {[260, 440, 640, 880].map((s, i) => (
        <div key={s} aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ width: s, height: s, borderColor: `rgba(254,102,1,${0.065 - i * 0.013})` }} />
      ))}
      {["left-0", "right-0"].map((side) => (
        <div key={side} aria-hidden className={`pointer-events-none absolute inset-y-0 ${side} w-px opacity-45`}
          style={{ background: "linear-gradient(180deg, transparent, rgba(254,102,1,0.6), transparent)" }} />
      ))}

      <div className="relative z-10 max-w-xl mx-auto px-5 sm:px-8">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={0}>
          <EyebrowLabel>Uma conversa muda tudo</EyebrowLabel>
          <h2 className="font-display text-[clamp(2.2rem,4.8vw,3.8rem)] leading-[1.03] tracking-[-0.025em] text-white mt-1 mb-5">
            Seu consultório pode ser
            <br /><em className="text-[#fe6601] not-italic italic">diferente daqui a 30 dias.</em>
          </h2>
          <p className="font-sans font-light text-white/40 text-[1rem] leading-[1.85] max-w-[400px] mx-auto mb-11">
            Manda uma mensagem agora. Em menos de 20 minutos conseguimos olhar rapidamente sua operação e entender onde a jornada do cliente ou do profissional pode estar travando.
          </p>
        </motion.div>
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1} className="flex flex-col items-center gap-5">
          <CTAButton size="lg" />
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["Sem formulário", "Sem compromisso", "Atendimento pessoal"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 font-sans text-[0.67rem] text-white/28">
                <Icon.Check cls="w-3 h-3 flex-shrink-0" />{item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020c18] py-8">
      <div aria-hidden className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(254,102,1,0.4), transparent)" }} />
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-sans text-white/26 text-[0.74rem]">© 2026 Renata Folloni. Todos os direitos reservados.</span>
        <div className="flex items-center gap-5">
          <a href="#" className="font-sans text-white/26 text-[0.74rem] hover:text-white/55 transition-colors duration-200">Privacidade</a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="font-sans text-white/26 text-[0.74rem] hover:text-[#fe6601] transition-colors duration-200">WhatsApp</a>
          <a
  href="https://instagram.com/renatafolloni"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 font-sans text-white/26 text-[0.74rem] hover:text-[#fe6601] transition-colors duration-200"
>
  <Instagram size={18} />
</a>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE ROOT
// ─────────────────────────────────────────────────────────────────────────────

export default function RenataFolloniLanding() {
  return (
    <>
      <FloatingWA />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Problema />
        <Solucao />
        <ParaQuem />
        <Processo />
        <Depoimentos />
        <Sobre />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}