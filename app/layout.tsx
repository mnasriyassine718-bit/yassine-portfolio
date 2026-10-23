import type { Metadata, Viewport } from "next";
import { Cairo, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

// Only 2 families, self-hosted at build time, font-display: swap
const body = Cairo({ subsets: ["arabic", "latin"], weight: ["400", "600", "700"], display: "swap", variable: "--font-body" });
const display = Fraunces({ subsets: ["latin"], display: "swap", variable: "--font-display", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  verification: {
    google: "qf8BGpvHzsY__msJGO5yPprnwiCZtbtpCnzv857c2CI",
  },
  verification: {
    google: "qf8BGpvHzsY__msJGO5yPprnwiCZtbtpCnzv857c2CI",
  },
  verification: {
    google: "qf8BGpvHzsY__msJGO5yPprnwiCZtbtpCnzv857c2CI",
  },
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: site.url, title: site.title, description: site.description, locale: "ar_TN",
  verification: {
    google: "qf8BGpvHzsY__msJGO5yPprnwiCZtbtpCnzv857c2CI",
  },
  verification: {
    google: "qf8BGpvHzsY__msJGO5yPprnwiCZtbtpCnzv857c2CI",
  },
  verification: {
    google: "qf8BGpvHzsY__msJGO5yPprnwiCZtbtpCnzv857c2CI",
  },
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.title }] },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/og.jpg"] },
  verification: {
    google: "qf8BGpvHzsY__msJGO5yPprnwiCZtbtpCnzv857c2CI",
  },
  verification: {
    google: "qf8BGpvHzsY__msJGO5yPprnwiCZtbtpCnzv857c2CI",
  },
  verification: {
    google: "qf8BGpvHzsY__msJGO5yPprnwiCZtbtpCnzv857c2CI",
  },
};
export const viewport: Viewport = { themeColor: "#08080b", width: "device-width", initialScale: 1 };

const ld = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", "@id": `${site.url}/#person`, name: site.name, jobTitle: "Web Designer & Developer",
      url: site.url, telephone: site.phone, address: { "@type": "PostalAddress", addressCountry: "TN" } },
    { "@type": "ProfessionalService", "@id": `${site.url}/#service`, name: `${site.name} - Web Design & Development`,
      url: site.url, telephone: site.phone, description: site.description, founder: { "@id": `${site.url}/#person` },
  verification: {
    google: "qf8BGpvHzsY__msJGO5yPprnwiCZtbtpCnzv857c2CI",
  },
  verification: {
    google: "qf8BGpvHzsY__msJGO5yPprnwiCZtbtpCnzv857c2CI",
  },
  verification: {
    google: "qf8BGpvHzsY__msJGO5yPprnwiCZtbtpCnzv857c2CI",
  },
      address: { "@type": "PostalAddress", addressCountry: "TN" }, areaServed: "Worldwide", sameAs: [site.whatsapp] },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${body.variable} ${display.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-[var(--gold)] focus:px-4 focus:py-2 focus:text-black">
          تخطّي إلى المحتوى
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </body>
    </html>
  );
}
