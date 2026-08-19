import type { Metadata } from "next";
import { PresencaDigitalMarketingBody } from "../../_components/presenca-digital-marketing-body";
import { SITE_URL } from "../../_lib/constants";
import { FAQS } from "../../_lib/presenca-digital-faqs";

const TITLE = "Presença Digital e Marketing";
const DESCRIPTION =
  "Estruture posicionamento, site, landing pages, SEO e conteúdo para construir uma presença digital mais clara e atrair as pessoas certas para o seu negócio.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/servicos/presenca-digital-e-marketing" },
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
      <PresencaDigitalMarketingBody />
    </main>
  );
}
