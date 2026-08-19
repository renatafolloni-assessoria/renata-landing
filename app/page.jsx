"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { CTAButton } from "./_components/cta-button";
import { Icon } from "./_components/icons";
import { EyebrowLabel, DotTexture, GraphPaper, TopoRings } from "./_components/backgrounds";
import { FAQAccordion } from "./_components/faq-accordion";
import { useReveal } from "./_lib/use-reveal";
import { motion_fadeUp, motion_scaleIn } from "./_lib/motion";

const MotionLink = motion.create(Link);

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
        className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8 pt-24 pb-12
          grid lg:grid-cols-[1.15fr_0.85fr] gap-10 xl:gap-16 items-center w-full"
      >
        {/* LEFT */}
        <div className="min-w-0">
          <motion.div variants={motion_fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex max-w-full items-center gap-2 mb-5 pl-1.5 pr-4 py-1.5 rounded-full
              border border-[rgba(254,102,1,0.24)] bg-[rgba(254,102,1,0.08)]"
          >
            <span className="w-5 h-5 flex-shrink-0 rounded-full bg-[rgba(254,102,1,0.16)] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe6601] animate-pulse" />
            </span>
            <span className="font-mono text-[0.62rem] text-[#fe6601]/80 font-medium tracking-[0.18em] uppercase whitespace-normal">
              Para profissionais e pequenos negócios
            </span>
          </motion.div>

          <motion.h1 variants={motion_fadeUp} initial="hidden" animate="show" custom={1}
            className="font-display text-[clamp(1.8rem,3.6vw,2.7rem)] leading-[1.15] tracking-[-0.02em] text-white mb-4"
          >
            Você não precisa entender de tecnologia.
            <br />
            <em className="text-[#fe6601] not-italic italic">
              Precisa de alguém que saiba aplicá-la no seu negócio.
            </em>
          </motion.h1>

          <motion.p variants={motion_fadeUp} initial="hidden" animate="show" custom={2}
            className="font-sans font-light text-white/50 text-[0.94rem] leading-[1.7] max-w-[430px] mb-6"
          >
            Eu entendo como o seu negócio funciona, identifico onde você perde
            tempo e oportunidades, e aplico tecnologia, IA e automação para
            tornar sua operação mais simples, organizada e eficiente.
          </motion.p>

          <motion.ul variants={motion_fadeUp} initial="hidden" animate="show" custom={3} className="space-y-2 mb-7">
            {[
              ["Menos tarefa manual",  "a tecnologia certa cuidando do que é repetitivo"],
              ["Mensagem clara",       "um posicionamento que atrai quem você quer atender"],
              ["Operação previsível",  "tudo rodando integrado, sem depender só de você"],
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
          className="min-w-0 hidden lg:flex items-center justify-center"
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
                  Descubra onde sua
                  <br />operação está travando.
                </h3>
                <p className="font-sans font-light text-white/38 text-[0.84rem] leading-[1.7] mb-7">
                Em poucos minutos já conseguimos mapear os principais gargalos da sua operação — e o próximo passo para resolver.
                </p>

                <CTAButton size="sm" full />
                <p className="text-center font-sans text-[0.62rem] text-white/22 mt-2.5">
                  Sem compromisso. Atendimento pessoal.
                </p>
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

const TRUST_ITEMS = [
  "Tecnologia aplicada com estratégia",
  "Experiência em Customer Success e CX",
  "Atendimento pessoal, direto no WhatsApp",
  "Projetos sob medida, sem pacote fechado",
];

function TrustBar() {
  const [ref, inView] = useReveal();
  return (
    <div ref={ref} className="relative overflow-hidden bg-[#041e37]">
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(254,102,1,0.07) 0%, transparent 65%)" }} />
      <div className="relative z-10 border-y border-white/[0.07] max-w-[1120px] mx-auto px-5 sm:px-8 py-7">
        <div className="flex flex-wrap justify-center">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div key={item} variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={i}
              className="flex-1 min-w-[160px] text-center px-4 sm:px-8 py-3 [&:not(:last-child)]:border-r border-white/[0.07]"
            >
              <div className="font-sans font-light text-white/70 text-[0.83rem] leading-snug">{item}</div>
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
  { n: "01", title: "Tarefas manuais tomando seu tempo", body: "Rotina cheia de tarefas repetitivas que consomem o tempo que podia ir pro que só você sabe fazer." },
  { n: "02", title: "Tudo depende de você",              body: "Agenda, atendimento, financeiro, decisões — se você para um dia, o negócio para junto." },
  { n: "03", title: "WhatsApp e agenda desorganizados",  body: "Confirmação, lembrete e retorno de contato acontecendo (ou não) na base da sorte." },
  { n: "04", title: "Ferramentas que não conversam",     body: "Instagram, WhatsApp, planilha, agenda — cada uma isolada, gerando retrabalho todo dia." },
  { n: "05", title: "Falta tempo estratégico",           body: "O dia termina e você só cumpriu urgência. Nunca sobra espaço pra construir o que imagina pro negócio." },
  { n: "06", title: "Crescer parece só aumentar o caos", body: "Mais clientes hoje significa mais confusão, não mais estrutura — e isso trava a vontade de crescer." },
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
            Você domina o seu trabalho.
            <br /><span className="text-white/32">Mas não foi treinado para administrar todas as partes de um negócio.</span>
          </h2>
          <p className="font-sans font-light text-white/38 text-[0.95rem] leading-[1.8]">
            Você não precisa aprender tudo isso. Precisa de uma estrutura que trabalhe a seu favor.
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
  { IconComp: Icon.Process, title: "Processos & Operação",   body: "Automatizo nota fiscal, cobrança e conciliação — pra você saber quanto entra e quanto sai sem caçar isso numa planilha.", href: "/servicos/financeiro-e-processos" },
  { IconComp: Icon.Bolt,    title: "Automação & WhatsApp",   body: "Organizo canais, confirmações e agenda — pra você parar de perder tempo (e cliente) na correria do dia a dia.", href: "/servicos/atendimento-e-agenda" },
  { IconComp: Icon.Target,  title: "Presença Digital & Marketing", body: "Defino sua mensagem central e estruturo site, conteúdo e captação pra atrair quem você quer atender.", href: "/servicos/presenca-digital-e-marketing" },
  { IconComp: Icon.Chart,   title: "Ferramentas sob medida",       body: "Quando nenhuma ferramenta pronta resolve, construo agentes de IA e ferramentas desenhadas pro seu processo específico.", href: "/servicos/ferramentas-sob-medida" },
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
              Não é gestão de redes sociais. Não é mais uma ferramenta ou curso. Não é uma consultoria genérica de negócios.
            </p>
            <p className="font-sans font-light text-[#5c5c5c] text-[0.97rem] leading-[1.85] mb-8">
              Eu entro na sua operação, entendo o que está travando e encontro a tecnologia certa — automação, IA, integrações — para resolver isso na prática, com você.
            </p>
            <CTAButton />
            <p className="mt-2.5 font-sans text-[0.67rem] text-[#9a9a9a]">Respondo em até 2h no horário comercial</p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map(({ IconComp, title, body, href }, i) => (
            <MotionLink key={title} href={href} variants={motion_scaleIn} initial="hidden" animate={inView ? "show" : "hidden"} custom={i + 2}
              whileHover={{ y: -5, borderColor: "rgba(254,102,1,0.35)", boxShadow: "0 18px 44px rgba(4,30,55,0.11)" }}
              transition={{ duration: 0.22 }}
              className="block rounded-xl border border-[rgba(4,30,55,0.09)] bg-[#f7f8fa] p-6 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center bg-[rgba(254,102,1,0.1)] border border-[rgba(254,102,1,0.2)] text-[#fe6601] group-hover:bg-[rgba(254,102,1,0.18)] transition-colors duration-300">
                <IconComp />
              </div>
              <h4 className="font-sans font-semibold text-[#041e37] text-[0.92rem] mb-2 leading-snug">{title}</h4>
              <p className="font-sans font-light text-[#6a6a6a] text-[0.8rem] leading-[1.68] mb-3">{body}</p>
              <span className="font-mono text-[0.6rem] font-medium tracking-[0.14em] uppercase text-[#fe6601]">Ver serviço →</span>
            </MotionLink>
          ))}
        </div>

        <p className="mt-8 text-center font-sans font-light text-[#9a9a9a] text-[0.83rem] leading-relaxed">
          Eu combino essas frentes de acordo com o que o seu negócio realmente precisa — sem pacote fechado.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PARA QUEM
// ─────────────────────────────────────────────────────────────────────────────

const AUDIENCES = [
  {
    emoji: "🩺",
    label: "Profissionais da saúde",
    pain: "Agenda cheia, mas a operação ainda depende 100% de você?",
    body: "Médicos, psicólogos, nutricionistas, fisioterapeutas, dentistas e outros profissionais que querem organizar a operação sem perder o foco no atendimento.",
    featured: true,
  },
  {
    emoji: "💼",
    label: "Profissionais autônomos",
    pain: "Já tem clientes e experiência, mas ainda faz tudo sozinho?",
    body: "Especialistas — de arquitetos e designers a outros profissionais liberais — que já têm reputação, mas ainda dependem demais do próprio esforço pro negócio funcionar.",
  },
  {
    emoji: "📈",
    label: "Pequenos negócios em crescimento",
    pain: "Cresceu, mas a estrutura não acompanhou?",
    body: "Negócios que já têm demanda e agora precisam de processos, tecnologia e automação pra sustentar o próximo passo sem aumentar o caos.",
  },
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
            Meu foco hoje é ajudar profissionais da saúde a transformar tecnologia em uma operação mais simples, organizada e eficiente — mas atendo outros perfis também.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {AUDIENCES.map(({ emoji, label, pain, body, featured }, i) => (
            <motion.div key={label} variants={motion_scaleIn} initial="hidden" animate={inView ? "show" : "hidden"} custom={i}
              whileHover={{ y: -5, borderColor: "rgba(254,102,1,0.3)", boxShadow: "0 18px 44px rgba(4,30,55,0.1)" }}
              transition={{ duration: 0.22 }}
              className={[
                "relative rounded-2xl border p-8 text-center cursor-default group",
                featured ? "bg-[rgba(254,102,1,0.035)] border-[rgba(254,102,1,0.32)]" : "bg-white border-[rgba(4,30,55,0.08)]",
              ].join(" ")}
            >
              <div className={[
                "w-14 h-14 mx-auto mb-6 rounded-2xl text-[1.8rem] flex items-center justify-center transition-colors duration-300",
                featured ? "bg-[rgba(254,102,1,0.16)] group-hover:bg-[rgba(254,102,1,0.22)]" : "bg-[rgba(254,102,1,0.09)] group-hover:bg-[rgba(254,102,1,0.16)]",
              ].join(" ")}>
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
  { n: "01", title: "Você me conta onde está travando",         body: "Uma conversa inicial pra entender seu negócio, sua rotina e os problemas que mais consomem seu tempo." },
  { n: "02", title: "Eu entendo sua operação",                  body: "Mapeio processos, ferramentas, atendimento, comunicação e jornada do cliente." },
  { n: "03", title: "Identificamos o que pode ser simplificado", body: "Definimos o que faz sentido automatizar, integrar, reorganizar ou melhorar." },
  { n: "04", title: "Construímos e implementamos",              body: "Eu implemento as soluções necessárias com você e deixo a operação mais simples e autônoma." },
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
            Do problema à solução.
            <br /><em className="text-[#fe6601] not-italic italic">Com a tecnologia certa no meio.</em>
          </h2>
          <p className="font-sans font-light text-[#6a6a6a] text-[0.95rem] leading-[1.8]">
            Sem burocracia — direto no WhatsApp, do primeiro contato à operação rodando.
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
// NA PRÁTICA
// ─────────────────────────────────────────────────────────────────────────────

const CLIENTS = [
  { name: "Conceição Bem Casados", logo: "/logos/conceicao-bem-casados-icon.png", w: 62 },
  { name: "SL Consultoria", logo: "/logos/sl-consultoria.png", w: 68 },
  { name: "Casa do Baiano Chico", logo: "/logos/casa-do-baiano-chico.png", w: 44 },
];

const MARQUEE_ITEMS = [...CLIENTS, ...CLIENTS];

function NaPratica() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} id="projetos" className="relative overflow-hidden py-20 sm:py-24" style={{ background: "#f4f5f7" }}>
      <TopoRings className="absolute -left-[7%] -bottom-[7%] w-[460px] h-[460px]" stroke="rgba(4,30,55,0.03)" radii={[55, 98, 148, 205, 270, 342]} />

      <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center max-w-lg mx-auto mb-10">
          <EyebrowLabel>Quem já confia</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.1rem)] leading-[1.15] tracking-[-0.02em] text-[#041e37]">
            Negócios que já aplicam
            <br /><em className="text-[#fe6601] not-italic italic">tecnologia comigo.</em>
          </h2>
        </motion.div>
      </div>

      <motion.div
        variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1}
        className="relative z-10 overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <motion.div
          className="flex items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {MARQUEE_ITEMS.map(({ name, logo, w }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 flex items-center gap-3 bg-white rounded-2xl border border-[rgba(4,30,55,0.08)] px-6 py-4 mx-2.5"
            >
              <Image src={logo} alt={name} width={w} height={44} className="h-11 w-auto object-contain" />
              <span className="font-sans font-medium text-[#041e37] text-[0.9rem] whitespace-nowrap">{name}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SOBRE
// ─────────────────────────────────────────────────────────────────────────────

const TAGS = ["Processos", "Automação", "Posicionamento", "Funis", "Agentes de IA", "WhatsApp", "CRM", "Operação Digital"];

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
              Eu entendo tecnologia.
              <br />Você entende do seu negócio.
              <br /><em className="text-[#fe6601] not-italic italic">Meu trabalho é conectar os dois.</em>
            </h2>
            <div className="space-y-4 mb-8">
              {[
                "Passei os últimos anos liderando operações de Customer Success e Customer Experience — de estruturas enxutas a operações com milhões de clientes — sempre com o mesmo foco: simplificar o que é complexo e transformar gargalos em processos que funcionam. Essa é a minha experiência profissional antes da assessoria, e é ela que aplico hoje no seu negócio.",
                "Hoje uso essa experiência pra ajudar profissionais e pequenos negócios a aplicar tecnologia, IA e automação de forma prática. Entro na sua realidade, entendo onde está travando, e construo com você um sistema que você consegue operar com autonomia.",
                "O padrão que vejo, depois de anos observando negócios e operações digitais, é sempre parecido: profissional excelente, operação frágil. Comigo, você não precisa aprender tecnologia — precisa de alguém que saiba aplicá-la.",
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
  { q: "Eu não entendo nada de tecnologia. Posso contratar você?", a: "Sim — é literalmente pra isso que eu existo. Você não precisa entender de tecnologia: eu traduzo tudo pra realidade do seu negócio e cuido da parte técnica." },
  { q: "Preciso contratar vários softwares?",                      a: "Não necessariamente. Primeiro eu entendo o que você já tem e o que realmente falta — a tecnologia entra só onde resolve um problema real, nunca por padrão." },
  { q: "Você implementa ou apenas recomenda ferramentas?",         a: "Eu implemento. Não entrego uma lista de sugestões — coloco as soluções pra rodar com você, dentro da sua operação." },
  { q: "Já tenho ferramentas. Preciso trocar tudo?",               a: "Raramente. Na maioria dos casos o trabalho é integrar e organizar o que você já usa, não substituir tudo por algo novo." },
  { q: "Preciso ter uma equipe para implementar?",                 a: "Não. Meu trabalho é justamente reduzir a dependência de pessoas — construo sistemas que você opera sozinho ou com uma equipe enxuta." },
  { q: "Você trabalha com profissionais da saúde?",                a: "Sim, é meu foco principal hoje — médicos, psicólogos, nutricionistas, fisioterapeutas, dentistas e outros profissionais da área." },
  { q: "Você atende outros nichos?",                                a: "Também. Trabalho com profissionais liberais, arquitetos, designers e pequenos negócios de diferentes segmentos — o método é o mesmo, o que muda é a aplicação." },
  { q: "Você faz gestão de redes sociais ou cria conteúdo?",       a: "Faço estratégia e produção de conteúdo dentro do serviço de Presença Digital e Marketing — sempre a partir do posicionamento certo, pra cada peça comunicar o que precisa e converter. O que não faço é a gestão do dia a dia das redes (postar, responder comentários) — isso sua equipe consegue tocar depois que a estratégia está definida." },
  { q: "É consultoria pontual ou implementação?",                  a: "É implementação. Entendo seu negócio, defino o que faz sentido e coloco pra rodar com você — não entrego só um relatório com recomendações." },
  { q: "Quanto custa?",                                            a: "Não divulgo valores na página, já que cada projeto é personalizado e diferente do outro. Na nossa conversa você recebe uma proposta clara, com escopo e investimento detalhados — sem surpresas." },
  { q: "Como funciona o primeiro contato?",                        a: "Você me manda uma mensagem no WhatsApp contando brevemente o que está travando. Respondo pessoalmente e, se fizer sentido seguir, te mostro os próximos passos." },
];

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
        <FAQAccordion items={FAQS} inView={inView} />
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
            <em className="text-[#fe6601] not-italic italic">Vamos simplificar sua operação?</em>
          </h2>
          <p className="font-sans font-light text-white/40 text-[1rem] leading-[1.85] max-w-[400px] mx-auto mb-11">
            Me conte onde seu negócio está travando. Em poucos minutos já dá pra entender o próximo passo.
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
// PAGE ROOT
// ─────────────────────────────────────────────────────────────────────────────

export default function RenataFolloniLanding() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Problema />
      <Solucao />
      <ParaQuem />
      <Processo />
      <NaPratica />
      <Sobre />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
