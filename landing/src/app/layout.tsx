import "./globals.css";

import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";

import { CookieConsentBanner } from "@/features/landing/components/cookie-consent/banner";

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const siteDescription =
  "Déployez des assistants sourcés pour vos documents confidentiels avec recherche hybride, permissions, audit et contrôle du déploiement.";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prosperify.app"),
  title: "Prosperify - Intelligence documentaire gouvernée",
  description: siteDescription,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/assets/brand/logo-icon.png", type: "image/png", sizes: "32x32" },
    ],
  },
  alternates: {
    canonical: "https://prosperify.app",
  },
  openGraph: {
    title: "Prosperify - Intelligence documentaire gouvernée",
    description:
      "Assistants sourcés pour les connaissances confidentielles de l'entreprise.",
    url: "https://prosperify.app",
    siteName: "Prosperify",
    images: [
      {
        url: "https://prosperify.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosperify - Intelligence documentaire gouvernée",
    description:
      "Recherche hybride, réponses vérifiées, permissions et audit pour documents confidentiels.",
    images: ["https://prosperify.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="description" content={siteDescription} />
        {/* Runs synchronously before paint — prevents theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('pf-theme');var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        {gtmId ? (
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        ) : null}
        {gtmId ? (
          <Script id="gtm-init" strategy="afterInteractive">
            {`
            window.__gtmId = '${gtmId}';
            window.dataLayer = window.dataLayer || [];
          `}
          </Script>
        ) : null}
      </head>
      <body
        className={`font-sans ${inter.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Prosperify",
              url: "https://prosperify.app",
              logo: "https://prosperify.app/assets/brand/logo-icon.png",
              sameAs: ["https://www.linkedin.com/company/prosperify-ai/"],
            }),
          }}
        />
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}

        <Suspense fallback={null}>{children}</Suspense>
        <CookieConsentBanner />
      </body>
    </html>
  );
}
