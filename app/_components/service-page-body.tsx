"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CTAButton } from "./cta-button";
import { Icon } from "./icons";
import { EyebrowLabel, GraphPaper, TopoRings } from "./backgrounds";
import { FAQAccordion, type FAQItemData } from "./faq-accordion";
import { useReveal } from "../_lib/use-reveal";
import { motion_fadeUp, motion_scaleIn } from "../_lib/motion";

export type Deliverable = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

export function ServicePageBody({
  eyebrow,
  title,
  titleAccent,
  description,
  mockup,
  deliverables,
  faqs,
}: {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  mockup?: React.ReactNode;
  deliverables: Deliverable[];
  faqs: FAQItemData[];
}) {
  const [heroRef, heroIn] = useReveal();
  const [gridRef, gridIn] = useReveal();
  const [faqRef, faqIn] = useReveal();

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden bg-[#041e37] pt-32 pb-24 sm:pt-40 sm:pb-32">
        <GraphPaper opacity={0.035} />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[60%] h-[70%]"
          style={{ background: "radial-gradient(ellipse 60% 60% at 100% 0%, rgba(254,102,1,0.12) 0%, transparent 70%)" }}
        />
        <TopoRings
          className="absolute -right-[10%] top-[8%] w-[480px] h-[480px] opacity-70"
          stroke="rgba(254,102,1,0.06)"
          radii={[50, 90, 136, 188, 248, 316, 392]}
        />

        <div
          className={[
            "relative z-10 max-w-[1220px] mx-auto px-5 sm:px-8",
            mockup ? "grid lg:grid-cols-[0.95fr_1.05fr] gap-10 xl:gap-14 items-center" : "max-w-[820px]",
          ].join(" ")}
        >
          <div className={mockup ? "min-w-0 text-center lg:text-left" : "text-center"}>
            <motion.div variants={motion_fadeUp} initial="hidden" animate={heroIn ? "show" : "hidden"} custom={0}>
              <Link
                href="/#solucao"
                className="inline-flex items-center gap-1.5 mb-8 font-mono text-[0.62rem] text-white/35 hover:text-[#fe6601] uppercase tracking-[0.16em] transition-colors duration-200"
              >
                ← Todos os serviços
              </Link>
            </motion.div>

            <motion.div variants={motion_fadeUp} initial="hidden" animate={heroIn ? "show" : "hidden"} custom={1}>
              <EyebrowLabel align={mockup ? "left" : "center"}>{eyebrow}</EyebrowLabel>
            </motion.div>

            <motion.h1
              variants={motion_fadeUp}
              initial="hidden"
              animate={heroIn ? "show" : "hidden"}
              custom={2}
              className="font-display text-[clamp(2.3rem,5vw,3.6rem)] leading-[1.05] tracking-[-0.02em] text-white mb-6"
            >
              {title}
              <br />
              <em className="text-[#fe6601] not-italic italic">{titleAccent}</em>
            </motion.h1>

            <motion.p
              variants={motion_fadeUp}
              initial="hidden"
              animate={heroIn ? "show" : "hidden"}
              custom={3}
              className={[
                "font-sans font-light text-white/50 text-[1rem] leading-[1.85] max-w-[560px] mb-10",
                mockup ? "lg:mx-0 mx-auto" : "mx-auto",
              ].join(" ")}
            >
              {description}
            </motion.p>

            <motion.div variants={motion_fadeUp} initial="hidden" animate={heroIn ? "show" : "hidden"} custom={4}>
              <div className={mockup ? "flex justify-center lg:justify-start" : "flex justify-center"}>
                <CTAButton size="lg" />
              </div>
              <p
                className={[
                  "mt-2.5 flex items-center gap-1.5 font-sans text-[0.67rem] text-white/28",
                  mockup ? "justify-center lg:justify-start" : "justify-center",
                ].join(" ")}
              >
                <Icon.Clock cls="w-3 h-3 opacity-55 flex-shrink-0" />
                Respondo em até 2h no horário comercial
              </p>
            </motion.div>
          </div>

          {mockup && (
            <motion.div
              variants={motion_scaleIn}
              initial="hidden"
              animate={heroIn ? "show" : "hidden"}
              custom={1}
              className="min-w-0 flex items-center justify-center mt-4 lg:mt-0"
            >
              {mockup}
            </motion.div>
          )}
        </div>
      </section>

      {/* ENTREGÁVEIS */}
      <section ref={gridRef} className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="relative z-10 max-w-[1000px] mx-auto px-5 sm:px-8">
          <motion.div variants={motion_fadeUp} initial="hidden" animate={gridIn ? "show" : "hidden"} className="text-center max-w-xl mx-auto mb-14">
            <EyebrowLabel>O que está incluído</EyebrowLabel>
            <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#041e37]">
              Sem pacote fechado.
              <br /><em className="text-[#fe6601] not-italic italic">Só o que a sua operação precisa.</em>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {deliverables.map(({ icon, title: dTitle, body }, i) => (
              <motion.div
                key={dTitle}
                variants={motion_scaleIn}
                initial="hidden"
                animate={gridIn ? "show" : "hidden"}
                custom={i}
                whileHover={{ y: -4, borderColor: "rgba(254,102,1,0.3)", boxShadow: "0 16px 40px rgba(4,30,55,0.1)" }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-[rgba(4,30,55,0.09)] bg-[#f7f8fa] p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center bg-[rgba(254,102,1,0.1)] border border-[rgba(254,102,1,0.2)] text-[#fe6601]">
                  {icon}
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-[#041e37] text-[0.92rem] mb-1.5 leading-snug">{dTitle}</h4>
                  <p className="font-sans font-light text-[#6a6a6a] text-[0.82rem] leading-[1.65]">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="relative overflow-hidden py-24 sm:py-32" style={{ background: "#f4f5f7" }}>
        <TopoRings className="absolute right-[-7%] top-[-7%] w-[460px] h-[460px]" stroke="rgba(4,30,55,0.028)" radii={[55, 98, 148, 205, 270, 342]} />
        <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8">
          <motion.div variants={motion_fadeUp} initial="hidden" animate={faqIn ? "show" : "hidden"} className="text-center mb-12">
            <EyebrowLabel>Perguntas sobre esse serviço</EyebrowLabel>
            <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#041e37]">
              O que você precisa saber
            </h2>
          </motion.div>
          <FAQAccordion items={faqs} inView={faqIn} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-[#041e37] py-24 sm:py-32 text-center">
        <GraphPaper opacity={0.03} />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[340px]"
          style={{ background: "radial-gradient(ellipse, rgba(254,102,1,0.13) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 max-w-lg mx-auto px-5 sm:px-8">
          <EyebrowLabel>Vamos conversar</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)] leading-[1.08] tracking-[-0.02em] text-white mb-6">
            Quer estruturar
            <br /><em className="text-[#fe6601] not-italic italic">{title.toLowerCase()}</em> no seu negócio?
          </h2>
          <div className="flex justify-center">
            <CTAButton size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
