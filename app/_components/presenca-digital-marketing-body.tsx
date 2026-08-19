"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Globe, Search, PenLine, UserPlus, Link2 } from "lucide-react";
import { CTAButton } from "./cta-button";
import { EyebrowLabel, GraphPaper, TopoRings } from "./backgrounds";
import { FAQAccordion } from "./faq-accordion";
import { MockupVisual } from "./mockup-visual";
import { useReveal } from "../_lib/use-reveal";
import { motion_fadeUp, motion_scaleIn } from "../_lib/motion";
import { FAQS } from "../_lib/presenca-digital-faqs";

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────

function Hero() {
  const [heroRef, heroIn] = useReveal();
  return (
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

      <div className="relative z-10 max-w-[1220px] mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 xl:gap-14 items-center">
        <div className="min-w-0 text-center lg:text-left">
          <motion.div variants={motion_fadeUp} initial="hidden" animate={heroIn ? "show" : "hidden"} custom={0}>
            <Link
              href="/#solucao"
              className="inline-flex items-center gap-1.5 mb-8 font-mono text-[0.62rem] text-white/35 hover:text-[#fe6601] uppercase tracking-[0.16em] transition-colors duration-200"
            >
              ← Todos os serviços
            </Link>
          </motion.div>

          <motion.div variants={motion_fadeUp} initial="hidden" animate={heroIn ? "show" : "hidden"} custom={1}>
            <EyebrowLabel align="left">Serviço · Presença Digital & Marketing</EyebrowLabel>
          </motion.div>

          <motion.h1
            variants={motion_fadeUp}
            initial="hidden"
            animate={heroIn ? "show" : "hidden"}
            custom={2}
            className="font-display text-[clamp(2.1rem,4.6vw,3.3rem)] leading-[1.1] tracking-[-0.02em] text-white mb-6"
          >
            Presença digital que faz
            <br />
            <em className="text-[#fe6601] not-italic italic">seu negócio ser encontrado e escolhido.</em>
          </motion.h1>

          <motion.p
            variants={motion_fadeUp}
            initial="hidden"
            animate={heroIn ? "show" : "hidden"}
            custom={3}
            className="font-sans font-light text-white/50 text-[1rem] leading-[1.85] max-w-[560px] mb-10 lg:mx-0 mx-auto"
          >
            Defino sua mensagem e estruturo site, landing pages, SEO e conteúdo para que sua presença digital comunique o valor do seu negócio e leve as pessoas certas até você.
          </motion.p>

          <motion.div variants={motion_fadeUp} initial="hidden" animate={heroIn ? "show" : "hidden"} custom={4}>
            <div className="flex justify-center lg:justify-start">
              <CTAButton size="lg" />
            </div>
            <p className="mt-2.5 font-sans text-[0.67rem] text-white/28 text-center lg:text-left max-w-[380px] mx-auto lg:mx-0">
              Me conte o que você já tem hoje e onde sente que sua presença digital trava.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={motion_scaleIn}
          initial="hidden"
          animate={heroIn ? "show" : "hidden"}
          custom={1}
          className="min-w-0 flex items-center justify-center mt-4 lg:mt-0"
        >
          <MockupVisual
            src="/mockups/presenca-digital-e-marketing.png"
            alt="Site profissional e perfil digital estruturados para comunicar o posicionamento de um negócio"
            width={2119}
            height={1713}
            stats={[]}
          />
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DOR
// ─────────────────────────────────────────────────────────────────────────────

function Dor() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="relative z-10 max-w-[720px] mx-auto px-5 sm:px-8 text-center">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={0}>
          <EyebrowLabel>Isso te soa familiar?</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.18] tracking-[-0.02em] text-[#041e37] mb-9">
            Estar online não é o mesmo
            <br />
            <em className="text-[#fe6601] not-italic italic">que ter uma presença digital estratégica.</em>
          </h2>
        </motion.div>

        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1} className="space-y-3 mb-10">
          <p className="font-sans font-light text-[#9a9a9a] text-[1rem] leading-[1.75]">
            Você já está online, mas sua presença digital não está necessariamente trabalhando a seu favor.
          </p>
          <p className="font-sans font-light text-[#6a6a6a] text-[1rem] leading-[1.75]">
            Ter Instagram, site ou conteúdo não significa ter uma presença digital estratégica.
          </p>
          <p className="font-sans font-light text-[#6a6a6a] text-[1rem] leading-[1.75]">
            Quando cada canal comunica uma coisa, fica difícil pra quem te encontra entender rapidamente o que você faz, pra quem, por que escolher você — e qual é o próximo passo.
          </p>
        </motion.div>

        <motion.div
          variants={motion_fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          custom={2}
          className="border-t border-[rgba(4,30,55,0.09)] pt-10"
        >
          <p className="font-display text-[clamp(1.3rem,2.6vw,1.7rem)] leading-[1.25] tracking-[-0.01em] text-[#041e37]">
            Você não precisa necessariamente produzir mais conteúdo.
            <br />
            <em className="text-[#fe6601] not-italic italic">Precisa organizar melhor o que sua marca deveria comunicar.</em>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// O QUE ESTÁ INCLUÍDO
// ─────────────────────────────────────────────────────────────────────────────

const DELIVERABLES = [
  { icon: <Target size={18} />, title: "Posicionamento e mensagem", body: "Defino o que sua marca precisa comunicar, para quem e qual percepção você quer construir." },
  { icon: <Globe size={18} />, title: "Sites e landing pages", body: "Crio páginas profissionais e estratégicas para apresentar seu negócio, gerar confiança e levar o visitante à ação." },
  { icon: <Search size={18} />, title: "SEO", body: "Estruturo suas páginas e conteúdos para que seu negócio seja mais fácil de encontrar e compreender nos mecanismos de busca." },
  { icon: <PenLine size={18} />, title: "Conteúdo e comunicação", body: "Organizo temas, mensagens e conteúdos a partir do seu posicionamento — sem produzir conteúdo por produzir." },
  { icon: <UserPlus size={18} />, title: "Captação e conversão", body: "Crio caminhos claros para transformar quem encontra seu negócio em uma oportunidade de contato." },
  { icon: <Link2 size={18} />, title: "Estrutura digital", body: "Conecto site, páginas, conteúdo e canais para que sua presença digital tenha uma lógica única." },
];

function Entregaveis() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32" style={{ background: "#f4f5f7" }}>
      <TopoRings className="absolute right-[-7%] top-[-7%] w-[460px] h-[460px]" stroke="rgba(4,30,55,0.03)" radii={[55, 98, 148, 205, 270, 342]} />
      <div className="relative z-10 max-w-[1000px] mx-auto px-5 sm:px-8">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center max-w-xl mx-auto mb-14">
          <EyebrowLabel>O que está incluído</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#041e37] mb-4">
            Sem pacote pronto.
            <br /><em className="text-[#fe6601] not-italic italic">Uma estrutura pensada para o seu negócio.</em>
          </h2>
          <p className="font-sans font-light text-[#6a6a6a] text-[0.92rem] leading-[1.8]">
            O foco não é a gestão manual das redes sociais no dia a dia — é estruturar a estratégia e os ativos digitais que o seu negócio precisa. Cada projeto pode envolver combinações diferentes dessas frentes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {DELIVERABLES.map(({ icon, title, body }, i) => (
            <motion.div
              key={title}
              variants={motion_scaleIn}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={i}
              whileHover={{ y: -4, borderColor: "rgba(254,102,1,0.3)", boxShadow: "0 16px 40px rgba(4,30,55,0.1)" }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-[rgba(4,30,55,0.09)] bg-white p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center bg-[rgba(254,102,1,0.1)] border border-[rgba(254,102,1,0.2)] text-[#fe6601]">
                {icon}
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#041e37] text-[0.92rem] mb-1.5 leading-snug">{title}</h3>
                <p className="font-sans font-light text-[#6a6a6a] text-[0.82rem] leading-[1.65]">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SEÇÃO ESTRATÉGICA (fluxo)
// ─────────────────────────────────────────────────────────────────────────────

const FLOW = ["Posicionamento", "Mensagem", "Site / Landing Page", "SEO", "Conteúdo", "Captação"];

function Fluxo() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="relative z-10 max-w-[900px] mx-auto px-5 sm:px-8 text-center">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={0}>
          <EyebrowLabel>Como as peças se conectam</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.15] tracking-[-0.02em] text-[#041e37] mb-6">
            Do posicionamento à página
            <br /><em className="text-[#fe6601] not-italic italic">que coloca tudo para funcionar.</em>
          </h2>
          <p className="font-sans font-light text-[#6a6a6a] text-[0.95rem] leading-[1.8] max-w-[560px] mx-auto mb-12">
            Você não precisa descobrir sozinho como fazer cada peça conversar com a outra. Estruturo o que faz sentido para o seu momento, objetivo e público.
          </p>
        </motion.div>

        <motion.div
          variants={motion_fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          custom={1}
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3"
        >
          {FLOW.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="font-mono text-[0.66rem] font-medium tracking-[0.1em] uppercase text-[#041e37] bg-[#f7f8fa] border border-[rgba(4,30,55,0.1)] px-3.5 py-2 rounded-lg">
                {step}
              </span>
              {i < FLOW.length - 1 && <span className="text-[#fe6601] text-[0.9rem]">→</span>}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DIFERENCIAL
// ─────────────────────────────────────────────────────────────────────────────

function Diferencial() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32" style={{ background: "#f4f5f7" }}>
      <TopoRings className="absolute -left-[6%] top-[-6%] w-[460px] h-[460px]" stroke="rgba(4,30,55,0.03)" radii={[55, 98, 148, 205, 270, 342]} />
      <div className="relative z-10 max-w-[640px] mx-auto px-5 sm:px-8 text-center">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
          <EyebrowLabel>O diferencial</EyebrowLabel>
          <p className="font-sans font-light text-[#9a9a9a] text-[1.05rem] leading-[1.7] mb-4 line-through decoration-[rgba(4,30,55,0.25)]">
            &ldquo;Quantos posts você quer por mês?&rdquo;
          </p>
          <p className="font-display text-[clamp(1.4rem,2.8vw,1.9rem)] leading-[1.3] tracking-[-0.01em] text-[#041e37]">
            &ldquo;O que você quer que as pessoas
            <br /><em className="text-[#fe6601] not-italic italic">entendam quando encontram seu negócio?&rdquo;</em>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────────

function FAQSection() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      <TopoRings className="absolute right-[-7%] top-[-7%] w-[460px] h-[460px]" stroke="rgba(4,30,55,0.028)" radii={[55, 98, 148, 205, 270, 342]} />
      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-12">
          <EyebrowLabel>Perguntas frequentes</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#041e37]">
            O que você precisa saber
          </h2>
        </motion.div>
        <FAQAccordion items={FAQS} inView={inView} />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA FINAL
// ─────────────────────────────────────────────────────────────────────────────

function CTAFinal() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden bg-[#041e37] py-24 sm:py-32 text-center">
      <GraphPaper opacity={0.03} />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[340px]"
        style={{ background: "radial-gradient(ellipse, rgba(254,102,1,0.13) 0%, transparent 65%)" }}
      />
      <div className="relative z-10 max-w-lg mx-auto px-5 sm:px-8">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={0}>
          <EyebrowLabel>Uma conversa muda tudo</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)] leading-[1.08] tracking-[-0.02em] text-white mb-5">
            Quer fazer seu negócio
            <br /><em className="text-[#fe6601] not-italic italic">ser encontrado e escolhido?</em>
          </h2>
          <p className="font-sans font-light text-white/40 text-[0.92rem] leading-[1.8] max-w-[420px] mx-auto mb-9">
            Me conte onde sua presença digital está travando hoje — site, mensagem, conteúdo ou captação. Vamos descobrir o que faz sentido estruturar.
          </p>
        </motion.div>
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1} className="flex flex-col items-center gap-3">
          <CTAButton size="lg" />
          <p className="font-sans text-[0.67rem] text-white/28">Sem formulário. Sem compromisso. Conversa inicial diretamente comigo.</p>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE BODY
// ─────────────────────────────────────────────────────────────────────────────

export function PresencaDigitalMarketingBody() {
  return (
    <>
      <Hero />
      <Dor />
      <Entregaveis />
      <Fluxo />
      <Diferencial />
      <FAQSection />
      <CTAFinal />
    </>
  );
}
