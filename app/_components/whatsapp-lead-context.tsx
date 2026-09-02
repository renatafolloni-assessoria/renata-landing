"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

type WhatsAppLeadContextValue = {
  isOpen: boolean;
  openLeadForm: () => void;
  closeLeadForm: () => void;
};

const WhatsAppLeadContext = createContext<WhatsAppLeadContextValue | null>(null);

export function WhatsAppLeadProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openLeadForm = useCallback(() => setIsOpen(true), []);
  const closeLeadForm = useCallback(() => setIsOpen(false), []);

  return (
    <WhatsAppLeadContext.Provider value={{ isOpen, openLeadForm, closeLeadForm }}>
      {children}
    </WhatsAppLeadContext.Provider>
  );
}

export function useWhatsAppLead() {
  const ctx = useContext(WhatsAppLeadContext);
  if (!ctx) throw new Error("useWhatsAppLead must be used within WhatsAppLeadProvider");
  return ctx;
}
