import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Nav } from "./_components/nav";
import { Footer } from "./_components/footer";
import { FloatingWA } from "./_components/floating-wa";
import { WhatsAppLeadProvider } from "./_components/whatsapp-lead-context";
import { WhatsAppLeadModal } from "./_components/whatsapp-lead-modal";
import { SITE_URL } from "./_lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Renata Folloni | Assessoria Digital",
    template: "%s | Renata Folloni",
  },
  description:
    "Você não precisa entender de tecnologia. Aplico IA, automação e processos na operação de clínicas, consultórios e pequenos negócios — para gerar mais clientes, organização e previsibilidade.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Renata Folloni Assessoria Digital",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Renata Folloni Assessoria Digital",
  url: SITE_URL,
  telephone: "+5511926786357",
  sameAs: ["https://www.instagram.com/renatafolloni.assessoria/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18423578950"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18423578950');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <WhatsAppLeadProvider>
          <WhatsAppLeadModal />
          <FloatingWA />
          <Nav />
          {children}
          <Footer />
        </WhatsAppLeadProvider>
      </body>
    </html>
  );
}
