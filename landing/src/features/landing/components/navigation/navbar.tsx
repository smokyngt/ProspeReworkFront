"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { applyLandingTheme, getCurrentLandingTheme } from "@/features/landing/lib/theme";
import i18n from "@/lib/i18n";
import { cn } from "@/lib/utils";

const navLinks = [
  { labelEn: "Features", labelFr: "Fonctionnalités", href: "#features" },
  { labelEn: "Products", labelFr: "Offres", href: "#products" },
  { labelEn: "Sovereignty", labelFr: "Souveraineté", href: "#sovereignty" },
  { labelEn: "Architecture", labelFr: "Architecture", href: "#architecture" },
  { labelEn: "Blog", labelFr: "Blog", href: "/blog" },
  { labelEn: "Team", labelFr: "Équipe", href: "/team" },
  { labelEn: "Jobs", labelFr: "Jobs", href: "/jobs" },
];

function ProsperifyLogo() {
  return (
    <Image
      src="/assets/brand/logo-full.png"
      alt=""
      width={148}
      height={80}
      className="h-[30px] w-auto object-contain"
      priority
    />
  );
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function LandingNavbar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#features");
  const [isDark, setIsDark] = useState(false);

  const initialLang = i18n.language === "en" ? "en" : "fr";
  const [currentLang, setCurrentLang] = useState<"fr" | "en">(initialLang);

  const switchLang = (target: "fr" | "en") => {
    if (target === currentLang) return;
    i18n.changeLanguage(target).catch(() => undefined);
    setCurrentLang(target);
  };

  const isHome = pathname === "/";
  const contactHref = isHome ? "#contact" : "/#contact";

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const obs = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    obs.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = getCurrentLandingTheme() === "dark" ? "light" : "dark";
    setIsDark(applyLandingTheme(next));
  };

  useEffect(() => {
    if (!isHome) return undefined;

    const sectionIds = navLinks
      .map((link) => (link.href.startsWith("#") ? link.href.slice(1) : null))
      .filter((id): id is string => Boolean(id));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveHash(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-32% 0px -52% 0px", threshold: [0.08, 0.18, 0.32] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const resolveHref = (href: string) => {
    if (!href.startsWith("#")) return href;
    return isHome ? href : `/${href}`;
  };

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--pf-border)] backdrop-blur-xl"
      style={{ background: "var(--pf-nav-bg)" }}
    >
      <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between border-x border-[var(--pf-border)] px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center" aria-label="Prosperify">
          <ProsperifyLogo />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active = isHome && link.href === activeHash;
            return (
              <Link
                key={link.href}
                href={resolveHref(link.href)}
                className={cn(
                  "relative px-3 py-2 text-[13px] font-medium transition-colors",
                  active
                    ? "text-[var(--pf-fg)]"
                    : "text-[var(--pf-fg-muted)] hover:text-[var(--pf-fg)]",
                )}
                scroll
              >
                {currentLang === "en" ? link.labelEn : link.labelFr}
                {active && (
                  <span className="absolute inset-x-3 -bottom-[13px] h-0.5 bg-[#FF6A13]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2.5">
          {/* Lang switcher */}
          <div
            className="hidden border border-[var(--pf-border)] sm:flex"
            style={{ background: "var(--pf-bg-dim)" }}
          >
            <button
              type="button"
              onClick={() => switchLang("fr")}
              className={cn(
                "font-mono text-[11px] font-semibold px-2.5 py-1.5 transition-colors",
                currentLang === "fr"
                  ? "bg-[#FF6A13] text-[#080808]"
                  : "text-[var(--pf-fg-dim)] hover:text-[var(--pf-fg-muted)]",
              )}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => switchLang("en")}
              className={cn(
                "font-mono text-[11px] font-semibold px-2.5 py-1.5 transition-colors",
                currentLang === "en"
                  ? "bg-[#FF6A13] text-[#080808]"
                  : "text-[var(--pf-fg-dim)] hover:text-[var(--pf-fg-muted)]",
              )}
            >
              EN
            </button>
          </div>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="hidden h-8 w-8 items-center justify-center border border-[var(--pf-border)] text-[var(--pf-fg-muted)] transition-colors hover:border-[#FF6A13] hover:text-[#FF6A13] sm:flex"
            style={{ background: "var(--pf-bg-card)" }}
            aria-label="Toggle theme"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href={contactHref}
            className="hidden items-center gap-2 bg-[#FF6A13] px-[18px] py-[9px] text-[13px] font-semibold text-[#080808] transition-colors hover:bg-[#ff8232] sm:inline-flex"
          >
            {t("footer.links.contact")} →
          </a>

          <button
            type="button"
            className="text-[var(--pf-fg-muted)] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <IconX className="h-6 w-6" />
            ) : (
              <IconMenu2 className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="border-t border-[var(--pf-border)] px-5 py-6 lg:hidden"
          style={{ background: "var(--pf-bg)" }}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={resolveHref(link.href)}
                className={cn(
                  "px-3 py-2.5 text-sm font-medium transition-colors hover:text-[#FF6A13]",
                  isHome && link.href === activeHash
                    ? "border-l-2 border-[#FF6A13] bg-[#FF6A13]/5 text-[var(--pf-fg)]"
                    : "text-[var(--pf-fg-muted)]",
                )}
                scroll
                onClick={() => setMobileOpen(false)}
              >
                {currentLang === "en" ? link.labelEn : link.labelFr}
              </Link>
            ))}

            {/* Mobile lang + theme */}
            <div className="mt-3 flex gap-2">
              <div
                className="flex flex-1 border border-[var(--pf-border)] sm:hidden"
                style={{ background: "var(--pf-bg-dim)" }}
              >
                <button
                  type="button"
                  onClick={() => switchLang("fr")}
                  className={cn(
                    "flex-1 font-mono text-[11px] font-semibold py-2 transition-colors",
                    currentLang === "fr"
                      ? "bg-[#FF6A13] text-[#080808]"
                      : "text-[var(--pf-fg-dim)]",
                  )}
                >
                  FR
                </button>
                <button
                  type="button"
                  onClick={() => switchLang("en")}
                  className={cn(
                    "flex-1 font-mono text-[11px] font-semibold py-2 transition-colors",
                    currentLang === "en"
                      ? "bg-[#FF6A13] text-[#080808]"
                      : "text-[var(--pf-fg-dim)]",
                  )}
                >
                  EN
                </button>
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex h-[38px] w-[38px] shrink-0 items-center justify-center border border-[var(--pf-border)] text-[var(--pf-fg-muted)] sm:hidden"
                style={{ background: "var(--pf-bg-card)" }}
                aria-label="Toggle theme"
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>

            <a
              href={contactHref}
              className="mt-2 inline-flex items-center justify-center bg-[#FF6A13] px-5 py-2.5 text-sm font-semibold text-[#080808] transition-colors hover:bg-[#ff8232] sm:hidden"
              onClick={() => setMobileOpen(false)}
            >
              {t("footer.links.contact")} →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
