export type SelectOption = { value: string; label: string };

export const COMPANY_SEGMENTS: SelectOption[] = [
  { value: "consultorio-medico", label: "Consultório médico" },
  { value: "consultorio-odontologico", label: "Consultório odontológico" },
  { value: "clinica-estetica", label: "Clínica de estética / beleza" },
  { value: "psicologia-terapia", label: "Psicologia / terapia" },
  { value: "nutricao-bem-estar", label: "Nutrição / bem-estar" },
  { value: "salao-barbearia", label: "Salão de beleza / barbearia" },
  { value: "academia-fitness", label: "Academia / estúdio fitness" },
  { value: "advocacia", label: "Advocacia" },
  { value: "contabilidade", label: "Contabilidade" },
  { value: "imobiliaria", label: "Imobiliária" },
  { value: "loja-comercio", label: "Loja / comércio" },
  { value: "restaurante-alimentacao", label: "Restaurante / alimentação" },
  { value: "servicos-profissionais", label: "Serviços profissionais / consultoria" },
  { value: "outros", label: "Outros" },
];

export const COMPANY_SIZES: SelectOption[] = [
  { value: "so-eu", label: "Só eu (autônomo/MEI)" },
  { value: "2-5", label: "2 a 5 pessoas" },
  { value: "6-15", label: "6 a 15 pessoas" },
  { value: "16-50", label: "16 a 50 pessoas" },
  { value: "50-mais", label: "Mais de 50 pessoas" },
];
