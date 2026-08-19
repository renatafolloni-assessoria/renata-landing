"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, BellRing, RotateCcw, Send, Users, Repeat2 } from "lucide-react";
import { CTAButton } from "./cta-button";
import { EyebrowLabel, GraphPaper, TopoRings } from "./backgrounds";
import { FAQAccordion } from "./faq-accordion";
import { MockupVisual } from "./mockup-visual";
import { useReveal } from "../_lib/use-reveal";
import { motion_fadeUp, motion_scaleIn } from "../_lib/motion";
import { FAQS } from "../_lib/atendimento-agenda-faqs";

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
            <EyebrowLabel align="left">Serviço · Automação & WhatsApp</EyebrowLabel>
          </motion.div>

          <motion.h1
            variants={motion_fadeUp}
            initial="hidden"
            animate={heroIn ? "show" : "hidden"}
            custom={2}
            className="font-display text-[clamp(2.3rem,5vw,3.6rem)] leading-[1.05] tracking-[-0.02em] text-white mb-6"
          >
            Sua agenda não precisa
            <br />
            <em className="text-[#fe6601] not-italic italic">depender de você.</em>
          </motion.h1>

          <motion.p
            variants={motion_fadeUp}
            initial="hidden"
            animate={heroIn ? "show" : "hidden"}
            custom={3}
            className="font-sans font-light text-white/50 text-[1rem] leading-[1.85] max-w-[560px] mb-10 lg:mx-0 mx-auto"
          >
            Organizo WhatsApp, agendamento, confirmações e follow-ups para você parar de responder mensagens o dia inteiro — e reduzir horários perdidos.
          </motion.p>

          <motion.div variants={motion_fadeUp} initial="hidden" animate={heroIn ? "show" : "hidden"} custom={4}>
            <div className="flex justify-center lg:justify-start">
              <CTAButton size="lg" label="Quero organizar minha agenda" />
            </div>
            <p className="mt-2.5 font-sans text-[0.67rem] text-white/28 text-center lg:text-left">
              Sem formulário. Sem compromisso. Conversa inicial diretamente comigo.
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
            src="/mockups/atendimento-e-agenda.png"
            alt="Automação de atendimento e agendamento pelo WhatsApp, com confirmações e follow-ups organizados"
            width={2618}
            height={2023}
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
          <EyebrowLabel>No dia a dia</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.12] tracking-[-0.02em] text-[#041e37] mb-9">
            Você trabalha com agenda.
            <br />
            <em className="text-[#fe6601] not-italic italic">Mas quem organiza tudo ainda é você.</em>
          </h2>
        </motion.div>

        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1} className="space-y-3 mb-12">
          <p className="font-sans font-light text-[#9a9a9a] text-[1rem] leading-[1.75]">Cada novo cliente vira uma conversa no WhatsApp.</p>
          <p className="font-sans font-light text-[#9a9a9a] text-[1rem] leading-[1.75]">Cada agendamento precisa ser confirmado.</p>
          <p className="font-sans font-light text-[#9a9a9a] text-[1rem] leading-[1.75]">Cada cancelamento exige uma nova mensagem.</p>
          <p className="font-sans font-light text-[#6a6a6a] text-[1rem] leading-[1.75]">E quando alguém some, você precisa lembrar de fazer o follow-up.</p>
          <p className="font-sans font-medium text-[#041e37] text-[1.05rem] leading-[1.75] pt-2">
            No fim, seu tempo vai embora administrando a operação — em vez de fazer o que você realmente faz.
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
            O problema não é o WhatsApp.
            <br />
            <em className="text-[#fe6601] not-italic italic">É tudo que você precisa fazer dentro dele.</em>
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
  { icon: <CalendarCheck size={18} />, title: "Agendamento organizado", body: "Seu cliente agenda, solicita ou remarca dentro das regras que você definir." },
  { icon: <BellRing size={18} />, title: "Confirmações e lembretes automáticos", body: "Mensagens programadas para reduzir esquecimentos e horários perdidos." },
  { icon: <RotateCcw size={18} />, title: "Reagendamento simplificado", body: "Quando alguém não pode comparecer, o próximo passo já está estruturado." },
  { icon: <Send size={18} />, title: "Follow-up automático", body: "Quem pediu informações, demonstrou interesse ou ficou de responder pode receber o contato certo no momento certo." },
  { icon: <Users size={18} />, title: "Organização dos contatos", body: "Conversas, clientes e oportunidades ficam organizados pra você saber quem está em cada etapa." },
  { icon: <Repeat2 size={18} />, title: "Reativação de clientes", body: "Fluxos para retomar o contato com quem já comprou ou agendou com você e ficou um tempo sem voltar." },
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
            Um atendimento que trabalha
            <br /><em className="text-[#fe6601] not-italic italic">nos bastidores.</em>
          </h2>
          <p className="font-sans font-light text-[#6a6a6a] text-[0.92rem] leading-[1.8]">
            Estruturo os processos de atendimento e agenda para que as tarefas repetitivas aconteçam sem depender de você.
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
// POSICIONAMENTO
// ─────────────────────────────────────────────────────────────────────────────

function Posicionamento() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="relative z-10 max-w-[680px] mx-auto px-5 sm:px-8 text-center">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
          <EyebrowLabel>Antes de mais tecnologia</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.12] tracking-[-0.02em] text-[#041e37] mb-6">
            Você não precisa
            <br /><em className="text-[#fe6601] not-italic italic">entender de tecnologia.</em>
          </h2>
          <p className="font-sans font-light text-[#6a6a6a] text-[0.97rem] leading-[1.85] max-w-[560px] mx-auto mb-8">
            Precisa saber onde sua operação está perdendo tempo. Eu entendo como seu negócio funciona, identifico o que pode ser simplificado e aplico as ferramentas certas para fazer isso acontecer.
          </p>
          <p className="font-sans font-semibold text-[#041e37] text-[1.02rem]">
            Você continua cuidando do seu negócio. <span className="text-[#fe6601]">A tecnologia cuida do que é repetitivo.</span>
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
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32" style={{ background: "#f4f5f7" }}>
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
            Sua agenda pode funcionar
            <br /><em className="text-[#fe6601] not-italic italic">com menos esforço.</em>
          </h2>
          <p className="font-sans font-light text-white/40 text-[0.92rem] leading-[1.8] max-w-[420px] mx-auto mb-9">
            Me conte como você organiza hoje seus atendimentos, WhatsApp e agendamentos. Vamos identificar o que pode ser automatizado, integrado ou simplificado.
          </p>
        </motion.div>
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1} className="flex flex-col items-center gap-3">
          <CTAButton size="lg" label="Quero organizar minha agenda" />
          <p className="font-sans text-[0.67rem] text-white/28">Sem formulário • Sem compromisso • Atendimento pessoal</p>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE BODY
// ─────────────────────────────────────────────────────────────────────────────

export function AtendimentoAgendaBody() {
  return (
    <>
      <Hero />
      <Dor />
      <Entregaveis />
      <Posicionamento />
      <FAQSection />
      <CTAFinal />
    </>
  );
}
