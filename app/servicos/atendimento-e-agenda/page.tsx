import type { Metadata } from "next";
import { AtendimentoAgendaBody } from "../../_components/atendimento-agenda-body";
import { SITE_URL } from "../../_lib/constants";
import { FAQS } from "../../_lib/atendimento-agenda-faqs";

const TITLE = "Automação de WhatsApp e Agendamento";
const DESCRIPTION =
  "Automatize WhatsApp, agendamentos, confirmações e follow-ups. Organize seu atendimento e reduza tarefas manuais sem depender do celular o dia inteiro.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/servicos/atendimento-e-agenda" },
};

const serviceJsonLd = {
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <AtendimentoAgendaBody />
    </main>
  );
}
