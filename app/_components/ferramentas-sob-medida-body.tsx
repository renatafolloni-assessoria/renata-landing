"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, LayoutDashboard, FileStack, Calculator, Wrench, Plug } from "lucide-react";
import { CTAButton } from "./cta-button";
import { Icon } from "./icons";
import { EyebrowLabel, GraphPaper, TopoRings } from "./backgrounds";
import { FAQAccordion } from "./faq-accordion";
import { MockupVisual } from "./mockup-visual";
import { useReveal } from "../_lib/use-reveal";
import { motion_fadeUp, motion_scaleIn } from "../_lib/motion";
import { FAQS } from "../_lib/ferramentas-sob-medida-faqs";

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
            <EyebrowLabel align="left">Serviço · Ferramentas sob Medida</EyebrowLabel>
          </motion.div>

          <motion.h1
            variants={motion_fadeUp}
            initial="hidden"
            animate={heroIn ? "show" : "hidden"}
            custom={2}
            className="font-display text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[1.08] tracking-[-0.02em] text-white mb-6"
          >
            Ferramentas sob medida
            <br />
            <em className="text-[#fe6601] not-italic italic">para problemas que nenhuma pronta resolve.</em>
          </motion.h1>

          <motion.p
            variants={motion_fadeUp}
            initial="hidden"
            animate={heroIn ? "show" : "hidden"}
            custom={3}
            className="font-sans font-light text-white/50 text-[1rem] leading-[1.85] max-w-[560px] mb-10 lg:mx-0 mx-auto"
          >
            Quando uma ferramenta pronta não encaixa no seu processo, eu desenho e construo uma solução específica para o jeito que o seu negócio funciona — de agentes de IA a portais, calculadoras e ferramentas internas.
          </motion.p>

          <motion.div variants={motion_fadeUp} initial="hidden" animate={heroIn ? "show" : "hidden"} custom={4}>
            <div className="flex justify-center lg:justify-start">
              <CTAButton size="lg" />
            </div>
            <p className="mt-2.5 flex items-center gap-1.5 font-sans text-[0.67rem] text-white/28 justify-center lg:justify-start max-w-[400px] mx-auto lg:mx-0">
              <Icon.Clock cls="w-3 h-3 opacity-55 flex-shrink-0" />
              Você não precisa saber qual ferramenta precisa. Me conte o problema e eu ajudo a encontrar o melhor caminho.
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
            src="/mockups/ferramentas-sob-medida.png"
            alt="Painel de exemplo com portal do cliente, formulários, documentos, calculadora e agente de IA sob medida"
            width={2773}
            height={2085}
            stats={[]}
          />
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DOR / STORYTELLING
// ─────────────────────────────────────────────────────────────────────────────

function Dor() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="relative z-10 max-w-[720px] mx-auto px-5 sm:px-8 text-center">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={0}>
          <EyebrowLabel>Isso já aconteceu com você?</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.12] tracking-[-0.02em] text-[#041e37] mb-9">
            Você tentou resolver com uma ferramenta pronta.
            <br />
            <em className="text-[#fe6601] not-italic italic">Quase funcionou.</em>
          </h2>
        </motion.div>

        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1} className="space-y-3 mb-12">
          <p className="font-sans font-light text-[#9a9a9a] text-[1rem] leading-[1.75]">Você tem um processo específico do seu negócio.</p>
          <p className="font-sans font-light text-[#9a9a9a] text-[1rem] leading-[1.75]">Tentou encaixar numa ferramenta pronta.</p>
          <p className="font-sans font-light text-[#6a6a6a] text-[1rem] leading-[1.75]">
            Ela quase resolve — mas exige adaptação, trabalho manual ou gambiarra.
          </p>
          <p className="font-sans font-medium text-[#041e37] text-[1.05rem] leading-[1.75] pt-2">
            Nesse ponto, talvez o problema não seja falta de ferramenta. Talvez seja falta de uma solução desenhada para o seu jeito de trabalhar.
          </p>
        </motion.div>

        <motion.div
          variants={motion_fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          custom={2}
          className="border-t border-[rgba(4,30,55,0.09)] pt-10"
        >
          <p className="font-display text-[clamp(1.2rem,2.4vw,1.55rem)] leading-[1.3] tracking-[-0.01em] text-[#041e37]">
            Nem todo problema precisa de uma ferramenta nova.
            <br />
            <em className="text-[#fe6601] not-italic italic">Mas alguns problemas são específicos demais pra caber numa ferramenta pronta.</em>
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
  { icon: <Bot size={18} />, title: "Agentes de IA para tarefas específicas", body: "Agentes treinados no contexto do seu negócio, capazes de analisar informações, classificar demandas, gerar respostas ou executar tarefas específicas." },
  { icon: <LayoutDashboard size={18} />, title: "Portais e áreas do cliente", body: "Um espaço próprio pra clientes acompanharem informações, documentos, status ou etapas do serviço sem depender de mensagens manuais." },
  { icon: <FileStack size={18} />, title: "Geradores automáticos de documentos", body: "Contratos, propostas, relatórios e outros documentos gerados a partir das informações que você já possui." },
  { icon: <Calculator size={18} />, title: "Calculadoras e simuladores personalizados", body: "Ferramentas para cálculos, simulações ou decisões específicas do seu produto ou serviço." },
  { icon: <Wrench size={18} />, title: "Ferramentas internas para sua operação", body: "Interfaces simples pra organizar tarefas, informações e processos que hoje dependem de planilhas ou controles manuais." },
  { icon: <Plug size={18} />, title: "Integrações e soluções conectadas", body: "Quando a solução precisa conversar com ferramentas que você já usa, conecto as partes pro processo funcionar como um só." },
];

function Entregaveis() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32" style={{ background: "#f4f5f7" }}>
      <TopoRings className="absolute right-[-7%] top-[-7%] w-[460px] h-[460px]" stroke="rgba(4,30,55,0.03)" radii={[55, 98, 148, 205, 270, 342]} />
      <div className="relative z-10 max-w-[1000px] mx-auto px-5 sm:px-8">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center max-w-xl mx-auto mb-14">
          <EyebrowLabel>O que está incluído</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#041e37]">
            Sem pacote fechado.
            <br /><em className="text-[#fe6601] not-italic italic">Só a solução que faz sentido para o seu processo.</em>
          </h2>
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
// QUANDO FAZ SENTIDO
// ─────────────────────────────────────────────────────────────────────────────

const SITUATIONS = [
  "Você copia as mesmas informações de um lugar para outro.",
  "Sua equipe faz manualmente uma tarefa que poderia seguir regras.",
  "Você precisa de uma calculadora ou simulador que nenhuma ferramenta pronta oferece.",
  "Seus clientes precisam consultar informações sem precisar chamar alguém.",
  "Você perde tempo criando os mesmos documentos repetidamente.",
  "Você tem um processo específico demais para caber em uma ferramenta genérica.",
];

function QuandoFazSentido() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="relative z-10 max-w-[820px] mx-auto px-5 sm:px-8 text-center">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={0}>
          <EyebrowLabel>Isso é pra você?</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.12] tracking-[-0.02em] text-[#041e37] mb-6">
            Talvez você não precise
            <br /><em className="text-[#fe6601] not-italic italic">de mais uma ferramenta.</em>
          </h2>
          <p className="font-sans font-light text-[#6a6a6a] text-[0.97rem] leading-[1.85] max-w-[560px] mx-auto mb-12">
            Se você já tentou adaptar ferramentas prontas ao seu processo e continua fazendo parte do trabalho manualmente, talvez o problema não seja falta de ferramenta. Talvez seja falta de uma solução desenhada para o seu jeito de trabalhar.
          </p>
        </motion.div>

        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1} className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-left">
          {SITUATIONS.map((text) => (
            <div key={text} className="flex items-start gap-3">
              <span className="mt-[6px] w-1.5 h-1.5 flex-shrink-0 rounded-full bg-[#fe6601]" />
              <span className="font-sans font-light text-[#5c5c5c] text-[0.9rem] leading-[1.6]">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COMO FUNCIONA
// ─────────────────────────────────────────────────────────────────────────────

const STEPS = [
  { n: "01", title: "Entendemos o processo", body: "Mapeamos o que acontece hoje, onde estão os gargalos e o que realmente precisa ser resolvido." },
  { n: "02", title: "Definimos a solução", body: "Antes de construir qualquer coisa, avaliamos se uma ferramenta pronta, uma automação ou uma solução sob medida faz mais sentido." },
  { n: "03", title: "Construímos", body: "Se a melhor opção for uma ferramenta própria, eu desenho e desenvolvo a solução para o seu processo." },
  { n: "04", title: "Colocamos para funcionar", body: "Você recebe uma solução pensada para fazer parte da sua operação, sem precisar virar especialista em tecnologia." },
];

function ComoFunciona() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32" style={{ background: "#f4f5f7" }}>
      <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center max-w-xl mx-auto mb-16">
          <EyebrowLabel>Como funciona</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.12] tracking-[-0.02em] text-[#041e37]">
            Você traz o problema.
            <br /><em className="text-[#fe6601] not-italic italic">Eu encontro o melhor caminho.</em>
          </h2>
        </motion.div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            aria-hidden
            className="hidden lg:block pointer-events-none absolute top-[22px] left-[calc(12.5%+22px)] right-[calc(12.5%+22px)] h-px"
            style={{ background: "linear-gradient(90deg, #fe6601 0%, rgba(254,102,1,0.25) 100%)" }}
          />
          {STEPS.map(({ n, title, body }, i) => (
            <motion.div key={n} variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={i} className="text-center group">
              <motion.div
                whileHover={{ backgroundColor: "#fe6601", boxShadow: "0 0 0 4px #f4f5f7, 0 0 0 5px #fe6601, 0 8px 24px rgba(254,102,1,0.35)" }}
                transition={{ duration: 0.18 }}
                className="w-11 h-11 mx-auto mb-6 rounded-full flex items-center justify-center bg-[#041e37] text-white font-mono text-[0.78rem] font-semibold relative z-10 ring-4 ring-[#f4f5f7] shadow-[0_0_0_1px_#fe6601] cursor-default transition-all duration-300"
              >
                {n}
              </motion.div>
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
          <EyebrowLabel>Vamos conversar</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)] leading-[1.08] tracking-[-0.02em] text-white mb-5">
            Tem um processo que
            <br /><em className="text-[#fe6601] not-italic italic">nenhuma ferramenta resolve direito?</em>
          </h2>
          <p className="font-sans font-light text-white/40 text-[0.92rem] leading-[1.8] max-w-[440px] mx-auto mb-9">
            Me conte como funciona hoje. Vamos entender o problema e descobrir se faz mais sentido adaptar uma ferramenta existente, automatizar ou construir algo sob medida.
          </p>
        </motion.div>
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1} className="flex flex-col items-center gap-3">
          <CTAButton size="lg" />
          <p className="font-sans text-[0.67rem] text-white/28">Conversa inicial para entender o problema e encontrar o melhor caminho.</p>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE BODY
// ─────────────────────────────────────────────────────────────────────────────

export function FerramentasSobMedidaBody() {
  return (
    <>
      <Hero />
      <Dor />
      <Entregaveis />
      <QuandoFazSentido />
      <ComoFunciona />
      <FAQSection />
      <CTAFinal />
    </>
  );
}
