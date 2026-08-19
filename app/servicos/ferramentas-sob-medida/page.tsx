import type { Metadata } from "next";
import { FerramentasSobMedidaBody } from "../../_components/ferramentas-sob-medida-body";
import { SITE_URL } from "../../_lib/constants";
import { FAQS } from "../../_lib/ferramentas-sob-medida-faqs";

const TITLE = "Ferramentas Sob Medida e Soluções Personalizadas";
const DESCRIPTION =
  "Crio ferramentas sob medida, agentes de IA e soluções digitais para processos que ferramentas prontas não conseguem resolver.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/servicos/ferramentas-sob-medida" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Ferramentas sob Medida",
  name: "Ferramentas sob Medida",
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
      <FerramentasSobMedidaBody />
    </main>
  );
}
