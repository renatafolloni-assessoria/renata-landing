import type { Metadata } from "next";
import { FinanceiroProcessosBody } from "../../_components/financeiro-processos-body";
import { SITE_URL } from "../../_lib/constants";

const TITLE = "Processos & Operação";
const DESCRIPTION =
  "Organizo processos financeiros e administrativos com automação: emissão de nota fiscal, cobrança e conciliação — pra você parar de perder tempo com planilhas e conferências manuais.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/servicos/financeiro-e-processos" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: TITLE,
  name: TITLE,
  description: DESCRIPTION,
  provider: {
    "@type": "ProfessionalService",
    name: "Renata Folloni Assessoria Digital",
    url: SITE_URL,
  },
  areaServed: "BR",
};

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FinanceiroProcessosBody />
    </main>
  );
}
