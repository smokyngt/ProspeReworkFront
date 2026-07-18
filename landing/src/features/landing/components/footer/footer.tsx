"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

type FooterGroup = {
  links: { href: string; labelKey: string }[];
  title?: { en: string; fr: string };
  titleKey?: string;
};

const footerGroups: FooterGroup[] = [
  {
    titleKey: "footer.product",
    links: [
      { labelKey: "footer.links.workflow", href: "#workflow" },
      { labelKey: "footer.links.features", href: "#features" },
      { labelKey: "footer.links.deployment", href: "#products" },
      { labelKey: "footer.links.sovereignty", href: "#sovereignty" },
      { labelKey: "footer.links.architecture", href: "#architecture" },
    ],
  },
  {
    title: { en: "Resources", fr: "Ressources" },
    links: [
      { labelKey: "footer.links.blog", href: "/blog" },
      { labelKey: "footer.links.faq", href: "#faq" },
    ],
  },
  {
    title: { en: "Company", fr: "Entreprise" },
    links: [
      { labelKey: "footer.links.team", href: "/team" },
      { labelKey: "footer.links.jobs", href: "/jobs" },
      { labelKey: "footer.links.contact", href: "#contact" },
    ],
  },
  {
    titleKey: "footer.legal",
    links: [
      { labelKey: "footer.links.privacy", href: "/privacy" },
      { labelKey: "footer.links.terms", href: "/terms" },
      { labelKey: "footer.links.rgpd", href: "/gdpr" },
    ],
  },
];

const partners = [
  {
    src: "/assets/partners/pepite-beelyss.png",
    alt: "Pépite BEELYS Lyon Saint-Étienne",
    label: "Pépite BEELYS - Lyon Saint-Étienne",
    href: "https://www.univ-st-etienne.fr/fr/entrepreneuriat/beelys.html",
  },
  {
    src: "/assets/partners/french-tech.png",
    alt: "La French Tech",
    label: "La French Tech",
    href: "https://lafrenchtech.gouv.fr/",
  },
];

export function LandingFooter() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language.startsWith("fr") ? "fr" : "en";

  return (
    <footer
      className="relative z-10 border-t border-[var(--pf-border)]"
      style={{ background: "var(--pf-bg-card)" }}
    >
      <div className="mx-auto max-w-[1360px] border-x border-[var(--pf-border)] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-[1.35fr_repeat(4,1fr)]">
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center border border-[var(--pf-border)] px-3 py-2.5"
              style={{ background: "var(--pf-bg-card-2)" }}
              aria-label="Prosperify home"
            >
              <Image
                src="/assets/brand/logo-full.png"
                alt=""
                width={148}
                height={80}
                className="h-[26px] w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-[13px] leading-relaxed text-[var(--pf-fg-muted)]">
              {t("footer.tagline")}
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex bg-[#FF6A13] px-4 py-2.5 text-[13px] font-semibold text-[#080808] transition-colors hover:bg-[#ff8232]"
            >
              {t("footer.links.contact")}
            </a>
          </div>

          {footerGroups.map((group) => (
            <div key={group.titleKey ?? group.title?.en ?? "footer-group"}>
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--pf-fg-dim)]">
                {group.titleKey
                  ? t(group.titleKey)
                  : (group.title?.[lang] ?? "")}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[13px] text-[var(--pf-fg-muted)] transition-colors hover:text-[#FF6A13]"
                    >
                      {t(link.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-[var(--pf-border)] pt-8 sm:mt-12">
          <p className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--pf-fg-dim)]">
            {t("footer.partnersTitle")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {partners.map((partner) => (
              <a
                key={partner.src}
                className="group flex flex-col items-center gap-2"
                href={partner.href}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={partner.label}
              >
                <Image
                  src={partner.src}
                  alt=""
                  width={120}
                  height={48}
                  className="h-10 w-auto object-contain opacity-60 grayscale transition-opacity duration-300 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[var(--pf-border)] pt-6 sm:mt-10 sm:flex-row sm:pt-8">
          <p className="text-center text-xs text-[var(--pf-fg-dim)] sm:text-left">
            {t("footer.copyright")}
          </p>
          <a
            href="https://www.linkedin.com/company/prosperify-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[var(--pf-fg-muted)] transition-colors hover:text-[#FF6A13]"
            aria-label="Prosperify LinkedIn"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
