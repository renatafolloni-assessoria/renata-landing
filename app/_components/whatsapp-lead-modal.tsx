"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWhatsAppLead } from "./whatsapp-lead-context";
import { reportWhatsAppConversion } from "../_lib/gtag";
import { COMPANY_SEGMENTS, COMPANY_SIZES } from "../_lib/lead-form-options";
import { WA_PHONE } from "../_lib/constants";
import { Icon } from "./icons";

type FormState = {
  name: string;
  phone: string;
  company: string;
  segment: string;
  size: string;
};

const EMPTY_FORM: FormState = { name: "", phone: "", company: "", segment: "", size: "" };

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const inputCls =
  "w-full rounded-[10px] border border-[rgba(4,30,55,0.14)] bg-[#f4f5f7] px-3.5 py-2.5 " +
  "font-sans text-[0.9rem] text-[#041e37] placeholder:text-[rgba(4,30,55,0.35)] " +
  "outline-none transition-colors duration-150 focus:border-[#fe6601] focus:bg-white " +
  "focus:shadow-[0_0_0_3px_rgba(254,102,1,0.14)]";

const errorInputCls = "border-[#d64545] focus:border-[#d64545] focus:shadow-[0_0_0_3px_rgba(214,69,69,0.14)]";

const labelCls = "block font-sans text-[0.78rem] font-medium text-[#041e37] mb-1.5";

function SelectChevron() {
  return (
    <svg
      viewBox="0 0 10 6"
      fill="none"
      stroke="rgba(4,30,55,0.45)"
      strokeWidth="1.5"
      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5"
    >
      <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsAppLeadModal() {
  const { isOpen, closeLeadForm } = useWhatsAppLead();
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const headingId = useId();

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLeadForm();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeLeadForm]);

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    const nameParts = form.name.trim().split(/\s+/).filter(Boolean);
    if (nameParts.length < 2) next.name = "Digite nome e sobrenome.";
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 11) next.phone = "Digite um telefone válido com DDD.";
    if (!form.company.trim()) next.company = "Digite o nome da empresa.";
    if (!form.segment) next.segment = "Selecione um segmento.";
    if (!form.size) next.size = "Selecione o tamanho da empresa.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const segmentLabel = COMPANY_SEGMENTS.find((s) => s.value === form.segment)?.label ?? form.segment;
    const sizeLabel = COMPANY_SIZES.find((s) => s.value === form.size)?.label ?? form.size;
    const message = [
      "Olá Renata! Vim pelo site e gostaria de entender melhor como funciona sua assessoria.",
      "",
      `Nome: ${form.name.trim()}`,
      `Empresa: ${form.company.trim()}`,
      `Segmento: ${segmentLabel}`,
      `Tamanho da empresa: ${sizeLabel}`,
    ].join("\n");
    const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;

    // Aberto de forma síncrona (mesmo clique do usuário) para não ser bloqueado por pop-up blocker.
    window.open(url, "_blank", "noopener,noreferrer");
    reportWhatsAppConversion();

    // Fire-and-forget: não trava nem quebra o redirecionamento pro WhatsApp se o Notion falhar.
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        segment: segmentLabel,
        size: sizeLabel,
        page: window.location.pathname,
      }),
    }).catch(() => {});

    setForm(EMPTY_FORM);
    closeLeadForm();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-[#020d1a]/70 backdrop-blur-sm"
            onClick={closeLeadForm}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={headingId}
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[440px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white
              border border-[rgba(4,30,55,0.08)] shadow-[0_32px_80px_rgba(2,13,26,0.35)] p-7 sm:p-8"
          >
            <button
              type="button"
              onClick={closeLeadForm}
              aria-label="Fechar"
              className="absolute right-5 top-5 w-8 h-8 rounded-full flex items-center justify-center
                text-[rgba(4,30,55,0.4)] hover:text-[#041e37] hover:bg-[#f4f5f7] transition-colors duration-150 cursor-pointer"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4">
                <path d="M3 3l10 10M13 3L3 13" strokeLinecap="round" />
              </svg>
            </button>

            <h3
              id={headingId}
              className="font-sans text-[1.3rem] font-normal text-[#041e37] leading-tight tracking-[-0.01em] pr-8"
            >
              Antes de falar comigo no WhatsApp
            </h3>
            <p className="mt-2 font-sans text-[0.85rem] font-light leading-relaxed text-[#6a6a6a]">
              Preencha rapidinho — assim já chego na conversa entendendo seu contexto.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-4">
              <div>
                <label htmlFor="lead-name" className={labelCls}>
                  Nome completo
                </label>
                <input
                  ref={firstFieldRef}
                  id="lead-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Nome e sobrenome"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={[inputCls, errors.name ? errorInputCls : ""].join(" ")}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-1 text-[0.74rem] text-[#d64545]">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="lead-phone" className={labelCls}>
                  Telefone WhatsApp
                </label>
                <input
                  id="lead-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(11) 91234-5678"
                  value={form.phone}
                  onChange={(e) => update("phone", formatPhone(e.target.value))}
                  className={[inputCls, errors.phone ? errorInputCls : ""].join(" ")}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <p className="mt-1 text-[0.74rem] text-[#d64545]">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="lead-company" className={labelCls}>
                  Nome da empresa
                </label>
                <input
                  id="lead-company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Nome da sua empresa"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  className={[inputCls, errors.company ? errorInputCls : ""].join(" ")}
                  aria-invalid={!!errors.company}
                />
                {errors.company && <p className="mt-1 text-[0.74rem] text-[#d64545]">{errors.company}</p>}
              </div>

              <div>
                <label htmlFor="lead-segment" className={labelCls}>
                  Segmento da empresa
                </label>
                <div className="relative">
                  <select
                    id="lead-segment"
                    value={form.segment}
                    onChange={(e) => update("segment", e.target.value)}
                    className={[inputCls, "appearance-none pr-9", errors.segment ? errorInputCls : ""].join(" ")}
                    aria-invalid={!!errors.segment}
                  >
                    <option value="" disabled>
                      Selecione um segmento
                    </option>
                    {COMPANY_SEGMENTS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <SelectChevron />
                </div>
                {errors.segment && <p className="mt-1 text-[0.74rem] text-[#d64545]">{errors.segment}</p>}
              </div>

              <div>
                <label htmlFor="lead-size" className={labelCls}>
                  Tamanho da empresa
                </label>
                <div className="relative">
                  <select
                    id="lead-size"
                    value={form.size}
                    onChange={(e) => update("size", e.target.value)}
                    className={[inputCls, "appearance-none pr-9", errors.size ? errorInputCls : ""].join(" ")}
                    aria-invalid={!!errors.size}
                  >
                    <option value="" disabled>
                      Selecione o tamanho
                    </option>
                    {COMPANY_SIZES.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <SelectChevron />
                </div>
                {errors.size && <p className="mt-1 text-[0.74rem] text-[#d64545]">{errors.size}</p>}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 16px 48px rgba(254,102,1,0.45)" }}
                whileTap={{ scale: 0.975 }}
                transition={{ duration: 0.18 }}
                className="mt-2 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#fe6601] px-6 py-3
                  font-sans text-[0.9rem] font-semibold text-white border border-[rgba(255,255,255,0.12)]
                  shadow-[0_4px_20px_rgba(254,102,1,0.32),inset_0_1px_0_rgba(255,255,255,0.18)] cursor-pointer"
              >
                <Icon.WA cls="w-[1.15em] h-[1.15em]" />
                Falar comigo no WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
