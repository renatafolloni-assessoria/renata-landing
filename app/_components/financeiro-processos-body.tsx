"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Receipt, Table, Plug, BarChart3, ListChecks } from "lucide-react";
import { CTAButton } from "./cta-button";
import { Icon } from "./icons";
import { EyebrowLabel, DotTexture, GraphPaper, TopoRings } from "./backgrounds";
import { FAQAccordion } from "./faq-accordion";
import { MockupVisual } from "./mockup-visual";
import { useReveal } from "../_lib/use-reveal";
import { motion_fadeUp, motion_scaleIn } from "../_lib/motion";

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
            <EyebrowLabel align="left">Serviço · Processos & Operação</EyebrowLabel>
          </motion.div>

          <motion.h1
            variants={motion_fadeUp}
            initial="hidden"
            animate={heroIn ? "show" : "hidden"}
            custom={2}
            className="font-display text-[clamp(2.3rem,5vw,3.6rem)] leading-[1.05] tracking-[-0.02em] text-white mb-6"
          >
            Seu financeiro não deveria
            <br />
            <em className="text-[#fe6601] not-italic italic">depender da sua memória.</em>
          </motion.h1>

          <motion.p
            variants={motion_fadeUp}
            initial="hidden"
            animate={heroIn ? "show" : "hidden"}
            custom={3}
            className="font-sans font-light text-white/50 text-[1rem] leading-[1.85] max-w-[560px] mb-10 lg:mx-0 mx-auto"
          >
            Automatizo notas fiscais, cobranças e conciliação — pra você saber quanto entra e quanto sai sem caçar informação em planilhas.
          </motion.p>

          <motion.div variants={motion_fadeUp} initial="hidden" animate={heroIn ? "show" : "hidden"} custom={4}>
            <div className="flex justify-center lg:justify-start">
              <CTAButton size="lg" label="Quero organizar meu financeiro" />
            </div>
            <p className="mt-2.5 flex items-center gap-1.5 font-sans text-[0.67rem] text-white/28 justify-center lg:justify-start">
              <Icon.Clock cls="w-3 h-3 opacity-55 flex-shrink-0" />
              Respondo em até 2h no horário comercial
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
            src="/mockups/financeiro-e-processos.png"
            alt="Painel financeiro de exemplo com notas fiscais, cobranças e conciliação organizados automaticamente"
            width={2548}
            height={2036}
            stats={[]}
          />
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COMO ISSO COMEÇA
// ─────────────────────────────────────────────────────────────────────────────

function Identificacao() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="relative z-10 max-w-[720px] mx-auto px-5 sm:px-8 text-center">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={0}>
          <EyebrowLabel>Como isso começa</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.12] tracking-[-0.02em] text-[#041e37] mb-9">
            No começo, uma planilha resolve.
            <br />
            <em className="text-[#fe6601] not-italic italic">Até o negócio crescer.</em>
          </h2>
        </motion.div>
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1} className="space-y-3">
          <p className="font-sans font-light text-[#9a9a9a] text-[1rem] leading-[1.75]">Você começa conferindo um pagamento.</p>
          <p className="font-sans font-light text-[#9a9a9a] text-[1rem] leading-[1.75]">Depois são dez.</p>
          <p className="font-sans font-light text-[#6a6a6a] text-[1rem] leading-[1.75]">
            Depois vêm notas fiscais, cobranças, conciliação, pendências, planilhas e relatórios.
          </p>
          <p className="font-sans font-medium text-[#041e37] text-[1.05rem] leading-[1.75] pt-2">
            Quando você percebe, está gastando horas administrando o dinheiro do negócio — em vez de cuidar do que realmente faz você crescer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DORES
// ─────────────────────────────────────────────────────────────────────────────

const PAINS = [
  { n: "01", title: "Emite notas uma por uma", body: "Você precisa lembrar de emitir, conferir e acompanhar cada nota." },
  { n: "02", title: "Cobra manualmente", body: "Você perde tempo acompanhando quem pagou, quem está pendente e quem precisa ser lembrado." },
  { n: "03", title: "Confere pagamentos", body: "Você precisa cruzar informações pra entender o que realmente entrou." },
  { n: "04", title: "Vive em planilhas", body: "Informações importantes ficam espalhadas e exigem atualização manual." },
  { n: "05", title: "Ferramentas não conversam", body: "Financeiro, sistemas e controles ficam separados, e alguém precisa fazer a ponte." },
  { n: "06", title: "Fecha o mês no susto", body: "Você só entende o que aconteceu depois de reunir tudo manualmente." },
];

function Dores() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden bg-[#041e37] py-24 sm:py-32">
      <DotTexture opacity={0.025} spacing={32} />
      <TopoRings
        className="absolute -left-[9%] top-1/2 -translate-y-1/2 w-[480px] h-[480px]"
        stroke="rgba(254,102,1,0.065)"
        radii={[50, 90, 138, 193, 256, 328]}
      />
      <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center max-w-[600px] mx-auto mb-14">
          <EyebrowLabel>Isso te soa familiar?</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.12] tracking-[-0.02em] text-white">
            Se o seu financeiro depende de você lembrar,
            <br /><span className="text-white/32">conferir e atualizar, ele ainda é manual.</span>
          </h2>
        </motion.div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden"
          style={{ gap: "1px", background: "rgba(255,255,255,0.05)", boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
        >
          {PAINS.map(({ n, title, body }, i) => (
            <motion.div
              key={n}
              variants={motion_scaleIn}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={i}
              whileHover={{ backgroundColor: "rgba(8,38,68,0.99)" }}
              transition={{ duration: 0.18 }}
              className="relative bg-[rgba(4,28,52,0.97)] p-7 cursor-default group"
            >
              <span className="absolute top-5 right-5 font-display text-[3.2rem] leading-none text-[rgba(254,102,1,0.08)] select-none pointer-events-none">
                {n}
              </span>
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
// VIRADA
// ─────────────────────────────────────────────────────────────────────────────

function Virada() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32" style={{ background: "#f4f5f7" }}>
      <TopoRings className="absolute right-[-7%] top-[-7%] w-[460px] h-[460px]" stroke="rgba(4,30,55,0.03)" radii={[55, 98, 148, 205, 270, 342]} />
      <div className="relative z-10 max-w-[680px] mx-auto px-5 sm:px-8 text-center">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
          <EyebrowLabel>Antes de mais tecnologia</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.12] tracking-[-0.02em] text-[#041e37] mb-6">
            Você não precisa virar
            <br /><em className="text-[#fe6601] not-italic italic">especialista em tecnologia pra resolver isso.</em>
          </h2>
          <p className="font-sans font-light text-[#6a6a6a] text-[0.97rem] leading-[1.85] max-w-[560px] mx-auto">
            Eu entro na sua realidade, entendo como seu negócio funciona e identifico onde processos e ferramentas podem trabalhar a seu favor. Você não recebe uma lista de sistemas pra aprender sozinho — eu desenho e implemento a solução com você.
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
  { icon: <FileText size={18} />, title: "Emissão automática de notas fiscais", body: "Sem precisar lembrar de emitir uma por uma no fim do mês." },
  { icon: <Receipt size={18} />, title: "Cobranças organizadas", body: "Um fluxo claro pra acompanhar o que foi pago, está pendente ou está atrasado." },
  { icon: <Table size={18} />, title: "Conciliação automática", body: "O que entrou bate com o que foi cobrado, sem depender de conferência manual." },
  { icon: <Plug size={18} />, title: "Integração entre ferramentas e controles", body: "Seu financeiro pode conversar com os sistemas que você já usa, quando fizer sentido." },
  { icon: <BarChart3 size={18} />, title: "Relatórios e indicadores atualizados", body: "Você abre um painel e entende como está o mês sem precisar montar uma planilha do zero." },
  { icon: <ListChecks size={18} />, title: "Processos financeiros mais organizados", body: "Menos tarefas repetitivas, menos retrabalho e mais clareza sobre o que está acontecendo." },
];

function Entregaveis() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="relative z-10 max-w-[1000px] mx-auto px-5 sm:px-8">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center max-w-xl mx-auto mb-14">
          <EyebrowLabel>O que está incluído</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#041e37]">
            Sem pacote fechado.
            <br /><em className="text-[#fe6601] not-italic italic">Só o que a sua operação precisa.</em>
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
              className="rounded-xl border border-[rgba(4,30,55,0.09)] bg-[#f7f8fa] p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center bg-[rgba(254,102,1,0.1)] border border-[rgba(254,102,1,0.2)] text-[#fe6601]">
                {icon}
              </div>
              <div>
                <h4 className="font-sans font-semibold text-[#041e37] text-[0.92rem] mb-1.5 leading-snug">{title}</h4>
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
// PRA QUEM VIVE DE ATENDIMENTO
// ─────────────────────────────────────────────────────────────────────────────

const APPLICATIONS = [
  "Consultas e sessões",
  "Pagamentos particulares",
  "Convênios",
  "Emissão de notas",
  "Cobranças",
  "Acompanhamento financeiro",
  "Organização administrativa",
];

function ParaQuemAtendimento() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32" style={{ background: "#f4f5f7" }}>
      <TopoRings className="absolute -left-[6%] top-[-6%] w-[480px] h-[480px]" stroke="rgba(4,30,55,0.03)" radii={[55, 98, 148, 205, 270, 342, 422]} />
      <div className="relative z-10 max-w-[760px] mx-auto px-5 sm:px-8 text-center">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={0}>
          <EyebrowLabel>Pra quem vive de atendimento</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.12] tracking-[-0.02em] text-[#041e37] mb-6">
            Seu trabalho é atender.
            <br /><em className="text-[#fe6601] not-italic italic">Não administrar o financeiro.</em>
          </h2>
          <p className="font-sans font-light text-[#6a6a6a] text-[0.97rem] leading-[1.85] max-w-[580px] mx-auto mb-10">
            Médicos, psicólogos, nutricionistas, fisioterapeutas e outros profissionais que vivem de atendimento não deveriam passar o fim do dia conferindo pagamentos, emitindo notas e atualizando planilhas.
          </p>
        </motion.div>

        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1} className="flex flex-wrap justify-center gap-2 mb-10">
          {APPLICATIONS.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.61rem] font-medium tracking-[0.14em] uppercase text-[#fe6601] bg-[rgba(254,102,1,0.09)] border border-[rgba(254,102,1,0.2)] px-3 py-1.5 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.p variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={2} className="font-sans font-semibold text-[#041e37] text-[1.02rem]">
          Você cuida do atendimento. <span className="text-[#fe6601]">A operação financeira cuida do resto.</span>
        </motion.p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// O QUE POSSO RESOLVER
// ─────────────────────────────────────────────────────────────────────────────

const PROBLEM_SOLUTIONS = [
  { problem: "Preciso cobrar clientes manualmente.", solution: "Podemos automatizar o fluxo de cobrança." },
  { problem: "Ainda controlo tudo em planilhas.", solution: "Podemos organizar os dados e eliminar controles desnecessários." },
  { problem: "Não sei exatamente quanto entrou no mês.", solution: "Podemos estruturar a conciliação e os indicadores." },
  { problem: "Tenho várias ferramentas e nenhuma conversa.", solution: "Podemos integrar os sistemas que realmente precisam conversar." },
  { problem: "Perco tempo emitindo notas.", solution: "Podemos automatizar a emissão conforme o processo do negócio." },
  { problem: "Tudo depende de eu lembrar.", solution: "Podemos transformar tarefas recorrentes em processos previsíveis." },
];

function OQuePossoResolver() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="relative z-10 max-w-[1000px] mx-auto px-5 sm:px-8">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center max-w-xl mx-auto mb-14">
          <EyebrowLabel>Não sabe por onde começar?</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#041e37]">
            Você não precisa saber qual ferramenta precisa.
            <br /><em className="text-[#fe6601] not-italic italic">Só precisa saber o que está dando trabalho.</em>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {PROBLEM_SOLUTIONS.map(({ problem, solution }, i) => (
            <motion.div
              key={problem}
              variants={motion_scaleIn}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={i}
              className="rounded-xl border border-[rgba(4,30,55,0.09)] bg-[#f7f8fa] p-6"
            >
              <p className="font-sans italic text-[#6a6a6a] text-[0.88rem] leading-[1.6] mb-3">&ldquo;{problem}&rdquo;</p>
              <p className="font-sans font-medium text-[#041e37] text-[0.88rem] leading-[1.6]">
                <span className="text-[#fe6601] mr-1.5">→</span>
                {solution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COMO FUNCIONA
// ─────────────────────────────────────────────────────────────────────────────

const STEPS = [
  { n: "01", title: "Entendo sua rotina", body: "Você me conta como o negócio funciona hoje, onde perde tempo e o que mais depende de você." },
  { n: "02", title: "Mapeio os gargalos", body: "Identifico processos manuais, retrabalho, controles e pontos de perda." },
  { n: "03", title: "Desenho a solução", body: "Definimos o que deve ser reorganizado, automatizado ou integrado." },
  { n: "04", title: "Implementamos", body: "Eu construo a estrutura com você e deixo a operação mais simples de manter." },
];

function ComoFunciona() {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32" style={{ background: "#f4f5f7" }}>
      <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8">
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center max-w-xl mx-auto mb-16">
          <EyebrowLabel>Como funciona</EyebrowLabel>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.12] tracking-[-0.02em] text-[#041e37]">
            Você me mostra onde está travando.
            <br /><em className="text-[#fe6601] not-italic italic">Eu descubro como destravar.</em>
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

const FAQS = [
  { q: "Preciso entender de tecnologia?", a: "Não. Você explica o problema e eu traduzo isso em uma solução adequada ao seu negócio." },
  { q: "Preciso trocar as ferramentas que já uso?", a: "Não necessariamente. Primeiro analisamos o que você já usa e o que pode ser aproveitado." },
  { q: "Preciso contratar vários sistemas?", a: "Não. A ideia é usar apenas o que realmente fizer sentido pra resolver seu problema." },
  { q: "Você só recomenda ferramentas ou também implementa?", a: "A proposta é implementar a solução com você, não apenas entregar uma lista de ferramentas." },
  { q: "Isso substitui meu contador?", a: "Não. A automação pode organizar processos financeiros e administrativos, mas não substitui o trabalho contábil quando ele é necessário." },
  { q: "Você trabalha com profissionais da saúde?", a: "Sim. Profissionais da saúde são um dos públicos que estou priorizando, mas também trabalho com outros profissionais e pequenos negócios." },
  { q: "Eu já tenho uma planilha. Preciso abandonar tudo?", a: "Não. Podemos partir do que já existe e identificar o que realmente precisa mudar." },
];

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
            Menos planilhas. Menos conferência.
            <br /><em className="text-[#fe6601] not-italic italic">Mais controle.</em>
          </h2>
          <p className="font-sans font-light text-white/40 text-[0.92rem] leading-[1.8] max-w-[420px] mx-auto mb-9">
            Automatize notas, cobranças e conciliação e tenha mais clareza do que entra, o que sai e o que ainda precisa da sua atenção.
          </p>
        </motion.div>
        <motion.div variants={motion_fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1} className="flex flex-col items-center gap-3">
          <CTAButton size="lg" label="Quero organizar meu financeiro" />
          <p className="font-sans text-[0.67rem] text-white/28">Sem formulário. Sem compromisso. Conversa inicial diretamente comigo.</p>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE BODY
// ─────────────────────────────────────────────────────────────────────────────

export function FinanceiroProcessosBody() {
  return (
    <>
      <Hero />
      <Identificacao />
      <Dores />
      <Virada />
      <Entregaveis />
      <ParaQuemAtendimento />
      <OQuePossoResolver />
      <ComoFunciona />
      <FAQSection />
      <CTAFinal />
    </>
  );
}
