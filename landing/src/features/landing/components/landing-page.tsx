"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { ContactForm } from "@/features/contact/components";
import { ArchitectureDemo } from "@/features/landing/components/architecture";
import { FAQSection } from "@/features/landing/components/faq";
import { ProsperifyFeatures } from "@/features/landing/components/features";
import { LandingFooter } from "@/features/landing/components/footer";
import { LandingNavbar } from "@/features/landing/components/navigation";
import { ProductSection } from "@/features/landing/components/products";
import { SovereigntySection } from "@/features/landing/components/sovereignty";
import { WorkflowSection } from "@/features/landing/components/workflow";
import i18n from "@/lib/i18n";

type LandingPageProps = {
  lang?: string;
};

const SECTION_IDS = [
  "hero",
  "workflow",
  "features",
  "products",
  "sovereignty",
  "architecture",
  "faq",
  "contact",
];

const DeferredDocumentIntelligenceDemo = dynamic(
  () =>
    import("@/features/landing/components/demo").then(
      (mod) => mod.DocumentIntelligenceDemo,
    ),
  {
    loading: () => <HeroDemoPlaceholder />,
    ssr: false,
  },
);

// ─── Demo components — INCHANGÉS ─────────────────────────────────────────────

function HeroDemoPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="client-ui flex h-[720px] flex-col bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50 max-sm:h-[520px]"
    >
      <div className="flex items-center gap-2 border-b border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <div className="ml-3 h-7 flex-1 rounded-md border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900" />
      </div>
      <div className="grid flex-1 grid-cols-[0.36fr_0.64fr]">
        <div className="space-y-3 border-r border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/70">
          <div className="h-9 rounded-md bg-orange-100 dark:bg-orange-500/15" />
          <div className="h-8 rounded-md bg-white dark:bg-neutral-800" />
          <div className="mt-5 h-px bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-12 rounded-xl bg-white dark:bg-neutral-800" />
          <div className="h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800/70" />
          <div className="h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800/70" />
        </div>
        <div className="flex flex-col bg-white p-5 dark:bg-neutral-950">
          <div className="h-14 max-w-[70%] rounded-xl bg-neutral-100 dark:bg-neutral-900" />
          <div className="mt-4 ml-auto h-20 w-[68%] rounded-xl bg-[#ff6a13]" />
          <div className="mt-4 h-24 max-w-[78%] rounded-xl bg-neutral-100 dark:bg-neutral-900" />
          <div className="mt-auto h-12 rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/60" />
        </div>
      </div>
    </div>
  );
}

function LazyHeroDemo() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) {
      return undefined;
    }

    const load = () => setReady(true);

    if (typeof window.requestIdleCallback === "function") {
      const idleHandle = window.requestIdleCallback(load, { timeout: 1800 });
      return () => window.cancelIdleCallback(idleHandle);
    }

    const timeout = window.setTimeout(load, 1200);
    return () => window.clearTimeout(timeout);
  }, [ready]);

  if (ready) {
    return <DeferredDocumentIntelligenceDemo />;
  }

  const loadDemo = () => setReady(true);

  return (
    <div onFocus={loadDemo} onPointerEnter={loadDemo} onTouchStart={loadDemo}>
      <HeroDemoPlaceholder />
    </div>
  );
}

// ─── Layout helpers ───────────────────────────────────────────────────────────

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="font-mono text-xs tracking-[0.2em] text-[#FF6A13]">
        {number}
      </span>
      <span className="block h-px w-6" style={{ background: "var(--pf-border-2)" }} />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pf-fg-muted)]">
        {label}
      </span>
    </div>
  );
}

function Divider() {
  return <div className="h-px" style={{ background: "var(--pf-border)" }} />;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSectionWrapper() {
  const { i18n: i18nInst } = useTranslation();
  const lang = i18nInst.language.startsWith("fr") ? "fr" : "en";

  const copy =
    lang === "fr"
      ? {
          badge: "Intelligence documentaire · données sensibles",
          title1: "L'intelligence documentaire",
          highlight: "souveraine",
          title2: "pour les entreprises exigeantes.",
          subtitle:
            "Prosperify aide les équipes à interroger leurs corpus financiers, juridiques et immobiliers avec des sources visibles, des accès gouvernés et un périmètre de déploiement clair.",
          primary: "Demander une démo",
          secondary: "Voir le workflow",
          guarantees: [
            "Réponses sourcées",
            "Single-tenant",
            "Aucun entraînement sur vos données",
            "Cloud dédié · Hybride · Local",
          ],
        }
      : {
          badge: "Document intelligence for sensitive data",
          title1: "Sovereign",
          highlight: "document intelligence",
          title2: "for demanding enterprises.",
          subtitle:
            "Prosperify helps teams query financial, legal and real-estate corpora with visible sources, governed access and a clear deployment perimeter.",
          primary: "Request a demo",
          secondary: "See the workflow",
          guarantees: [
            "Sourced answers",
            "Single-tenant",
            "No training on your data",
            "Dedicated cloud · Hybrid · On-prem",
          ],
        };

  return (
    <section
      id="hero"
      className="px-5 sm:px-8 lg:px-12"
      style={{
        paddingTop: "clamp(116px, 15vh, 160px)",
        paddingBottom: "clamp(56px, 7vh, 88px)",
      }}
    >
      <div className="flex flex-wrap items-center gap-10 lg:gap-12">
        {/* Left: copy */}
        <div className="min-w-0 max-w-[560px] flex-1 basis-80">
          <div className="mb-6 flex items-center gap-3">
            <span
              className="h-1.5 w-1.5 bg-[#FF6A13]"
              style={{ animation: "pf-pulse 2.4s ease-in-out infinite" }}
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#FF6A13]">
              {copy.badge}
            </span>
          </div>
          <h1
            className="m-0 font-extrabold leading-[1.02] tracking-[-0.03em] text-[var(--pf-fg)]"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            {copy.title1}{" "}
            <span className="text-[#FF6A13]">{copy.highlight}</span>
            <br />
            {copy.title2}
          </h1>
          <p
            className="mt-6 max-w-[620px] leading-[1.65] text-[var(--pf-fg-muted)]"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
          >
            {copy.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#FF6A13] px-6 py-3.5 text-sm font-semibold text-[#080808] transition-colors hover:bg-[#ff8232]"
            >
              {copy.primary} →
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center gap-2 border px-6 py-3.5 text-sm font-semibold text-[var(--pf-fg)] transition-colors hover:border-[#FF6A13]"
              style={{ borderColor: "var(--pf-border-2)", background: "transparent" }}
            >
              {copy.secondary}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.14em] text-[var(--pf-fg-dim)]">
            {copy.guarantees.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#FF6A13]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right: démo interactive — INCHANGÉE */}
        <div
          className="min-w-0 flex-1 basis-96 border border-[var(--pf-border)] overflow-hidden"
          style={{
            animation: "pf-fadeUp 0.6s ease",
            boxShadow: "var(--pf-demo-shadow)",
          }}
        >
          <LazyHeroDemo />
        </div>
      </div>
    </section>
  );
}

// ─── Architecture (needs i18n so defined here) ────────────────────────────────

function ArchitectureSectionContent() {
  const { t } = useTranslation();
  return (
    <>
      <h2
        className="max-w-[820px] font-bold leading-[1.06] tracking-[-0.02em] text-[var(--pf-fg)]"
        style={{ fontSize: "clamp(1.9rem, 4vw, 3.1rem)" }}
      >
        {t("architecture.titlePrefix")}{" "}
        <span className="text-[#FF6A13]">{t("architecture.titleHighlight")}</span>
      </h2>
      <p className="mt-[18px] max-w-[660px] text-[1.05rem] text-[var(--pf-fg-muted)]">
        {t("architecture.subtitle")}
      </p>
      <div className="mt-11">
        <ArchitectureDemo />
      </div>
    </>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function ContactSectionWrapper() {
  const { i18n: i18nInst } = useTranslation();
  const lang = i18nInst.language.startsWith("fr") ? "fr" : "en";

  const copy =
    lang === "fr"
      ? {
          title: "Cadrons votre premier cas d'usage documentaire",
          lead: "Identifiez un corpus sensible, un store métier ou un workflow à fiabiliser. Prosperify vous aide à cadrer un pilote mesurable, sécurisé et aligné sur vos exigences de confidentialité.",
          checks: ["Corpus sensible", "Store métier", "Pilote sécurisé"],
        }
      : {
          title: "See how Prosperify fits your environment.",
          lead: "Share your corpora, security requirements and existing tools. We will respond with a concrete deployment path.",
          checks: ["Document corpora", "Sources and connectors", "Deployment model"],
        };

  return (
    <section
      id="contact"
      className="px-5 sm:px-8 lg:px-12"
      style={{ paddingTop: "clamp(72px, 10vh, 112px)", paddingBottom: "clamp(72px, 10vh, 112px)" }}
    >
      <div
        className="grid grid-cols-1 gap-px border border-[var(--pf-border)] lg:grid-cols-2"
        style={{ background: "var(--pf-border)" }}
      >
        <div
          style={{
            padding: "clamp(28px,3vw,44px)",
            background: "var(--pf-bg-card)",
          }}
        >
          <SectionLabel number="08" label="Contact" />
          <h2
            className="font-bold leading-[1.08] tracking-[-0.02em] text-[var(--pf-fg)]"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.6rem)" }}
          >
            {copy.title}
          </h2>
          <p className="mt-5 text-base leading-[1.65] text-[var(--pf-fg-muted)]">
            {copy.lead}
          </p>
          <div className="mt-7 flex flex-col gap-2">
            {copy.checks.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border px-3.5 py-3 text-sm font-medium text-[var(--pf-fg)]"
                style={{
                  borderColor: "var(--pf-border)",
                  background: "var(--pf-bg-card-2)",
                }}
              >
                <span className="h-2 w-2 bg-[#FF6A13]" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            padding: "clamp(28px,3vw,44px)",
            background: "var(--pf-bg-card-3)",
          }}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

// ─── Section navigator ────────────────────────────────────────────────────────

function SectionNavigator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionIds = useMemo(() => SECTION_IDS, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) {
          return;
        }

        if (visible.target.id) {
          const nextIndex = sectionIds.indexOf(visible.target.id);
          if (nextIndex >= 0) {
            setActiveIndex(nextIndex);
          }
        }
      },
      { rootMargin: "-34% 0px -48% 0px", threshold: [0.08, 0.18, 0.32] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  const scrollToIndex = (index: number) => {
    const nextIndex = Math.min(Math.max(index, 0), sectionIds.length - 1);
    document
      .getElementById(sectionIds[nextIndex])
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="fixed bottom-6 right-5 z-40 hidden flex-col border border-[var(--pf-border)] p-1 backdrop-blur-md sm:flex"
      style={{ background: "var(--pf-widget-bg)" }}
    >
      <button
        type="button"
        aria-label="Previous section"
        className="flex h-10 w-10 items-center justify-center text-[var(--pf-fg-dim)] transition-colors hover:bg-[#FF6A13]/10 hover:text-[#FF6A13] disabled:pointer-events-none disabled:opacity-30"
        disabled={activeIndex === 0}
        onClick={() => scrollToIndex(activeIndex - 1)}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
      <div className="mx-auto my-1 h-px w-6" style={{ background: "var(--pf-border)" }} />
      <button
        type="button"
        aria-label="Next section"
        className="flex h-10 w-10 items-center justify-center text-[var(--pf-fg-dim)] transition-colors hover:bg-[#FF6A13]/10 hover:text-[#FF6A13] disabled:pointer-events-none disabled:opacity-30"
        disabled={activeIndex === sectionIds.length - 1}
        onClick={() => scrollToIndex(activeIndex + 1)}
      >
        <ArrowDown className="h-4 w-4" />
      </button>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function LandingPage({ lang }: LandingPageProps) {
  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang).catch(() => undefined);
    }
  }, [lang]);

  return (
    <div
      className="relative min-h-screen [overflow-anchor:none]"
      style={{ background: "var(--pf-bg)" }}
    >
      {/* Grille de fond statique */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--pf-grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--pf-grid-line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Halo orange */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 44% at 50% -6%, rgba(255,106,19,0.07), transparent 62%)",
        }}
      />

      <LandingNavbar />
      <SectionNavigator />

      <main className="relative z-10 [overflow-anchor:none]">
        {/* Colonne bordée — toutes les sections */}
        <div
          className="mx-auto max-w-[1360px] border-x border-[var(--pf-border)] [overflow-anchor:none]"
          style={{ background: "var(--pf-column-bg)" }}
        >
          <HeroSectionWrapper />

          <Divider />

          <section
            id="workflow"
            className="px-5 sm:px-8 lg:px-12"
            style={{ paddingTop: "clamp(72px, 10vh, 112px)", paddingBottom: "clamp(72px, 10vh, 112px)" }}
          >
            <SectionLabel number="02" label="Workflow" />
            <WorkflowSection />
          </section>

          <Divider />

          <section
            id="features"
            className="px-5 sm:px-8 lg:px-12"
            style={{ paddingTop: "clamp(72px, 10vh, 112px)", paddingBottom: "clamp(72px, 10vh, 112px)" }}
          >
            <SectionLabel number="03" label="Fonctionnalités" />
            <ProsperifyFeatures />
          </section>

          <Divider />

          <section
            id="products"
            className="px-5 sm:px-8 lg:px-12"
            style={{ paddingTop: "clamp(72px, 10vh, 112px)", paddingBottom: "clamp(72px, 10vh, 112px)" }}
          >
            <SectionLabel number="04" label="Nos offres" />
            <ProductSection />
          </section>

          <Divider />

          <section
            id="sovereignty"
            className="px-5 sm:px-8 lg:px-12"
            style={{ paddingTop: "clamp(72px, 10vh, 112px)", paddingBottom: "clamp(72px, 10vh, 112px)" }}
          >
            <SectionLabel number="05" label="Intégration" />
            <SovereigntySection />
          </section>

          <Divider />

          <section
            id="architecture"
            className="px-5 sm:px-8 lg:px-12"
            style={{ paddingTop: "clamp(72px, 10vh, 112px)", paddingBottom: "clamp(72px, 10vh, 112px)" }}
          >
            <SectionLabel number="06" label="Architecture" />
            <ArchitectureSectionContent />
          </section>

          <Divider />

          <section
            id="faq"
            className="px-5 sm:px-8 lg:px-12"
            style={{ paddingTop: "clamp(72px, 10vh, 112px)", paddingBottom: "clamp(72px, 10vh, 112px)" }}
          >
            <SectionLabel number="07" label="FAQ" />
            <FAQSection />
          </section>

          <Divider />

          <ContactSectionWrapper />
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
