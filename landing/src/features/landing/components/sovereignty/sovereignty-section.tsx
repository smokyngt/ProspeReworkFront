"use client";

import type React from "react";

import {
  BookOpen,
  Building2,
  Check,
  Cloud,
  Code,
  Database,
  FileText,
  GitBranch,
  HardDrive,
  Mail,
  MessageSquare,
  RefreshCw,
  Scale,
  Server,
  Share2,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

/* ──────────────────────────────────────────────────────── */
/*  Data                                                     */
/* ──────────────────────────────────────────────────────── */

type SourceDef = {
  label: string;
  slug: string | null;
  color?: string;
  darkColor?: string; // alternate color for dark mode (e.g. white icons)
  fbIcon: React.ElementType;
  fbCol: string;
};

const SOURCES: SourceDef[] = [
  { label: "Google Drive", slug: "googledrive",                                         fbIcon: HardDrive,     fbCol: "#4285F4" },
  { label: "Slack",        slug: null,                                                  fbIcon: MessageSquare, fbCol: "#E01E5A" },
  { label: "SharePoint",   slug: null,                                                  fbIcon: Share2,        fbCol: "#0f9bd7" },
  { label: "SAP",          slug: "sap",                                                 fbIcon: Building2,     fbCol: "#3aa0d1" },
  { label: "Salesforce",   slug: null,                                                  fbIcon: Cloud,         fbCol: "#00A1E0" },
  { label: "PostgreSQL",   slug: "postgresql",  color: "336791", darkColor: "8FB4E3",   fbIcon: Database,      fbCol: "#8FB4E3" },
  { label: "AWS S3",       slug: null,                                                  fbIcon: Server,        fbCol: "#FF9900" },
  { label: "Notion",       slug: "notion",      color: "000000", darkColor: "ffffff",   fbIcon: BookOpen,      fbCol: "#e6e6e6" },
  { label: "Gmail",        slug: "gmail",                                               fbIcon: Mail,          fbCol: "#EA4335" },
  { label: "GitHub",       slug: "github",      color: "181717", darkColor: "ffffff",   fbIcon: GitBranch,     fbCol: "#e6e6e6" },
  { label: "REST API",     slug: "openapiinitiative", color: "6BA539",                  fbIcon: Code,          fbCol: "#6BA539" },
  { label: "PDF / Docs",   slug: null,                                                  fbIcon: FileText,      fbCol: "#EC4a52" },
];

const STORES = [
  { label: "Store Juridique",  desc: "Contrats & actes",    Icon: Scale,       scanDelay: "0s"   },
  { label: "Store Conformité", desc: "KYC & AML",           Icon: ShieldCheck, scanDelay: "1.1s" },
  { label: "Store RH",         desc: "Procédures internes", Icon: Users,       scanDelay: "2.2s" },
];

const BENEFITS = [
  { label: "Aucune migration",   desc: "Vos données restent dans vos systèmes existants.",            Icon: Server    },
  { label: "Ingestion flexible", desc: "Manuelle à la demande ou automatique selon un planning.",     Icon: RefreshCw },
  { label: "Zéro refonte",       desc: "Une couche qui s'ajoute sans toucher à votre architecture.", Icon: Zap       },
];

const ACCENT = "#FF6A13";

/* ──────────────────────────────────────────────────────── */
/*  useIsDark — detect .dark class on root                   */
/* ──────────────────────────────────────────────────────── */

function useIsDark(): boolean {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const check = () => setDark(document.documentElement.classList.contains("dark"));
    check();

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return dark;
}

/* ──────────────────────────────────────────────────────── */
/*  Source tile                                              */
/* ──────────────────────────────────────────────────────── */

function SourceTile({ src, active, isDark }: { src: SourceDef; active: boolean; isDark: boolean }) {
  const [imgFailed, setImgFailed] = useState(false);
  const FbIcon = src.fbIcon;

  // Pick color based on theme
  const color = isDark ? (src.darkColor || src.color) : src.color;
  const iconUrl = src.slug
    ? `https://cdn.simpleicons.org/${src.slug}${color ? "/" + color : ""}`
    : null;

  const activeFilter = `drop-shadow(0 0 10px ${ACCENT})`;

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", gap: 9,
      padding: "15px 6px", background: "var(--pf-bg-card-2)",
    }}>
      <div style={{ height: 34, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {iconUrl && !imgFailed ? (
          <img
            src={iconUrl}
            alt={src.label}
            width={34}
            height={34}
            onError={() => setImgFailed(true)}
            style={{
              objectFit: "contain",
              filter: active ? activeFilter : "drop-shadow(0 2px 5px rgba(0,0,0,0.15))",
              transform: active ? "scale(1.12)" : "scale(1)",
              transition: "all 0.5s",
            }}
          />
        ) : (
          <FbIcon
            size={26}
            style={{
              color: src.fbCol,
              filter: active ? activeFilter : "none",
              transform: active ? "scale(1.12)" : "scale(1)",
              transition: "all 0.5s",
            }}
          />
        )}
      </div>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: "9.5px",
        color: "var(--pf-fg-dim)", letterSpacing: "0.03em",
        textAlign: "center", lineHeight: 1.2,
      }}>
        {src.label}
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────────────── */
/*  Ingestion bar                                           */
/* ──────────────────────────────────────────────────────── */

function IngestionBar({ defaultMode = "auto" }: { defaultMode?: "auto" | "manuel" }) {
  const [mode, setMode] = useState<"auto" | "manuel">(defaultMode);
  const isAuto = mode === "auto";

  const btnBase: React.CSSProperties = {
    fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
    letterSpacing: "0.07em", padding: "4px 16px",
    cursor: "pointer", transition: "all 0.15s", border: "1px solid",
  };

  return (
    <div style={{
      display: "flex", flexWrap: "wrap", alignItems: "center",
      justifyContent: "center", gap: 14,
      border: "1px solid var(--pf-border)", borderTop: 0,
      background: "var(--pf-bg-card-2)", padding: "12px 24px",
    }}>
      <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "var(--pf-fg-dim)", letterSpacing: "0.12em" }}>
        INGESTION
      </span>
      <div style={{ display: "flex", gap: 6 }}>
        <button
          type="button"
          onClick={() => setMode("auto")}
          style={{
            ...btnBase,
            background: isAuto ? "var(--pf-accent)" : "transparent",
            color: isAuto ? "#fff" : "var(--pf-fg-dim)",
            borderColor: isAuto ? "var(--pf-accent)" : "var(--pf-border)",
          }}
        >
          AUTO
        </button>
        <button
          type="button"
          onClick={() => setMode("manuel")}
          style={{
            ...btnBase,
            background: !isAuto ? "var(--pf-accent)" : "transparent",
            color: !isAuto ? "#fff" : "var(--pf-fg-dim)",
            borderColor: !isAuto ? "var(--pf-accent)" : "var(--pf-border)",
          }}
        >
          MANUEL
        </button>
      </div>
      <span style={{ fontSize: 11, color: "var(--pf-accent)", fontFamily: "'JetBrains Mono', monospace" }}>
        {isAuto ? "Planifié · 02:00 CET" : "À la demande"}
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────────────── */
/*  Flux SVG overlay — matches handoff design               */
/* ──────────────────────────────────────────────────────── */

function FluxOverlay({ animate, isDark }: { animate: boolean; isDark: boolean }) {
  const dotFill = isDark ? "#fff" : ACCENT;
  const dotFilter = isDark
    ? `drop-shadow(0 0 5px ${ACCENT}) drop-shadow(0 0 10px ${ACCENT})`
    : `drop-shadow(0 0 4px ${ACCENT})`;

  const mainIn = "M0,200 L760,200";
  const branchPaths = [
    mainIn + " C788,200 796,136 812,136",
    mainIn + " C788,200 796,220 812,220",
    mainIn + " C788,200 796,304 812,304",
  ];

  const durF = 4.6;

  const fluxDots = animate
    ? branchPaths.flatMap((p, si) =>
        [0, 1].map((j) => ({
          key: `${si}-${j}`,
          r: 3.2,
          path: p,
          dur: durF + "s",
          begin: (si * 0.45 + j * (durF / 2)).toFixed(2) + "s",
        }))
      )
    : [];

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
      <svg
        viewBox="0 0 1000 400"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, overflow: "visible" }}
      >
        {/* Main trunk */}
        <path
          d="M0,200 L760,200"
          fill="none"
          stroke="var(--pf-accent)"
          strokeOpacity={0.3}
          strokeWidth={1.5}
          strokeDasharray="6 6"
          vectorEffect="non-scaling-stroke"
        />
        {/* Branches */}
        <path d="M760,200 C788,200 796,136 812,136" fill="none" stroke="var(--pf-accent)" strokeOpacity={0.32} strokeWidth={1.5} strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
        <path d="M760,200 C788,200 796,220 812,220" fill="none" stroke="var(--pf-accent)" strokeOpacity={0.32} strokeWidth={1.5} strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
        <path d="M760,200 C788,200 796,304 812,304" fill="none" stroke="var(--pf-accent)" strokeOpacity={0.32} strokeWidth={1.5} strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
        {/* Junction dots */}
        <circle cx={760} cy={200} r={4.5} fill="var(--pf-accent)" vectorEffect="non-scaling-stroke" />
        <circle cx={812} cy={136} r={3} fill="var(--pf-accent)" vectorEffect="non-scaling-stroke" />
        <circle cx={812} cy={220} r={3} fill="var(--pf-accent)" vectorEffect="non-scaling-stroke" />
        <circle cx={812} cy={304} r={3} fill="var(--pf-accent)" vectorEffect="non-scaling-stroke" />
        {/* Animated dots */}
        {fluxDots.map((d) => (
          <circle key={d.key} r={d.r} fill={dotFill} style={{ filter: dotFilter }}>
            <animateMotion dur={d.dur} begin={d.begin} repeatCount="indefinite" path={d.path} />
          </circle>
        ))}
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────────────── */
/*  Main section                                            */
/* ──────────────────────────────────────────────────────── */

export function SovereigntySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const isDark = useIsDark();

  // Cycle active source every 820 ms
  useEffect(() => {
    const t = setInterval(
      () => setActiveIdx((i) => (i + 1) % SOURCES.length),
      820,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <h2 style={{
        margin: 0, fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.02em",
        color: "var(--pf-fg)", fontSize: "clamp(1.9rem, 4vw, 3.1rem)", maxWidth: 820,
      }}>
        Connectez vos systèmes.<br />
        <span style={{ color: "var(--pf-accent)" }}>Aucune refonte nécessaire.</span>
      </h2>
      <p style={{ margin: "18px 0 0", maxWidth: 640, fontSize: "1.05rem", lineHeight: 1.65, color: "var(--pf-fg-muted)" }}>
        Vos sources alimentent un flux unique qui traverse le core Prosperify et ressort
        sous forme de stores interrogeables — sans migration, sans rewrite.
      </p>

      {/* ── Diagram — desktop only ── */}
      <div className="hidden md:block" style={{
        position: "relative", marginTop: 48,
        border: "1px solid var(--pf-border)",
        background: "var(--pf-bg-card)",
        overflow: "hidden",
        animation: "pf-fadeUp 0.6s ease",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) 30px 320px 30px minmax(0,1fr)",
          alignItems: "stretch",
        }}>

          {/* LEFT: sources */}
          <div style={{
            position: "relative", zIndex: 2,
            background: "var(--pf-bg-card)",
            padding: 22, borderRight: "1px solid var(--pf-border)",
          }}>
            <div style={{
              marginBottom: 14,
              fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
              textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--pf-fg-dim)",
            }}>
              Vos systèmes existants
            </div>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1, background: "var(--pf-border)",
              border: "1px solid var(--pf-border)",
            }}>
              {SOURCES.map((src, i) => (
                <SourceTile key={src.label} src={src} active={i === activeIdx} isDark={isDark} />
              ))}
            </div>
          </div>

          {/* gap col */}
          <div />

          {/* CENTER: Prosperify core — matching handoff glow design */}
          <div style={{
            position: "relative", zIndex: 3, overflow: "hidden",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            padding: "28px 0",
          }}>
            {/* Radial glow backdrop */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 0,
              background: isDark
                ? "radial-gradient(circle at 50% 46%, rgba(255,106,19,0.10) 0%, transparent 60%)"
                : "radial-gradient(circle at 50% 46%, rgba(255,106,19,0.08) 0%, transparent 60%)",
            }} />

            <div style={{
              position: "relative", zIndex: 1,
              width: 340, height: 340,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {/* Pulsing glow orb */}
              <div style={{
                position: "absolute", width: 230, height: 230,
                borderRadius: "50%",
                background: isDark
                  ? "radial-gradient(circle, rgba(255,106,19,0.36), transparent 66%)"
                  : "radial-gradient(circle, rgba(255,106,19,0.18), transparent 66%)",
                filter: "blur(24px)",
                animation: "pf-pulse 3.5s ease-in-out infinite",
              }} />

              {/* Logo frame */}
              <div style={{
                position: "relative", zIndex: 2,
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: 18, pointerEvents: "none",
              }}>
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "26px 30px",
                  background: "var(--pf-bg-card)",
                  border: "1px solid var(--pf-accent-dim-border)",
                  boxShadow: isDark
                    ? "0 0 0 6px var(--pf-bg-card), 0 10px 34px rgba(0,0,0,0.6), 0 0 30px rgba(255,106,19,0.12)"
                    : "0 0 0 6px var(--pf-bg-card), 0 10px 34px rgba(0,0,0,0.08), 0 0 30px rgba(255,106,19,0.08)",
                }}>
                  <img
                    src="/assets/brand/logo-icon.png"
                    alt="Prosperify"
                    style={{
                      height: 104, width: "auto",
                      filter: isDark
                        ? "drop-shadow(0 8px 26px rgba(255,106,19,0.45))"
                        : "drop-shadow(0 8px 26px rgba(255,106,19,0.25))",
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <span style={{
                    fontSize: 17, fontWeight: 800, color: "var(--pf-fg)",
                    letterSpacing: "0.1em", fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    PROSPERIFY
                  </span>
                  <span style={{
                    fontSize: 11, color: "var(--pf-accent)",
                    letterSpacing: "0.14em", fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    CORE
                  </span>
                </div>
              </div>
            </div>

            <span style={{
              marginTop: 6,
              fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
              letterSpacing: "0.15em", color: "var(--pf-fg-dim)", textTransform: "uppercase",
            }}>
              Moteur d&apos;ingestion &amp; RAG
            </span>
          </div>

          {/* gap col */}
          <div />

          {/* RIGHT: stores */}
          <div style={{
            position: "relative", zIndex: 2,
            background: "var(--pf-bg-card)",
            padding: 22, borderLeft: "1px solid var(--pf-border)",
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
            <div style={{
              marginBottom: 14,
              fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
              textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--pf-fg-dim)",
            }}>
              Stores interrogeables
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {STORES.map(({ label, desc, Icon, scanDelay }) => (
                <div
                  key={label}
                  style={{
                    position: "relative", overflow: "hidden",
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "14px 15px",
                    background: "var(--pf-accent-bg)",
                    border: "1px solid var(--pf-accent-dim-border)",
                    boxShadow: isDark
                      ? "0 0 26px rgba(255,106,19,0.1)"
                      : "0 0 20px rgba(255,106,19,0.06)",
                  }}
                >
                  <div style={{
                    width: 38, height: 38, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "var(--pf-accent-bg-2)",
                    border: "1px solid var(--pf-accent-dim-border)",
                  }}>
                    <Icon size={16} style={{ color: "var(--pf-accent)" }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--pf-fg)" }}>{label}</div>
                    <div style={{ fontSize: 11, color: "var(--pf-fg-dim)", marginTop: 1 }}>{desc}</div>
                  </div>
                  <div style={{ marginLeft: "auto", paddingLeft: 10, color: "var(--pf-accent)", display: "flex" }}>
                    <Check size={15} />
                  </div>
                  {/* Scan line */}
                  <div style={{
                    position: "absolute", left: 0, right: 0, height: 40,
                    pointerEvents: "none",
                    background: `linear-gradient(180deg, transparent, var(--pf-accent-highlight), transparent)`,
                    animation: `pf-store-scan 3.4s linear ${scanDelay} infinite`,
                  }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Central flux SVG overlay */}
        <FluxOverlay animate isDark={isDark} />
      </div>

      {/* Ingestion bar — desktop */}
      <div className="hidden md:block">
        <IngestionBar />
      </div>

      {/* ── Mobile layout ── */}
      <div className="md:hidden" style={{ marginTop: 32 }}>
        {/* Sources grid */}
        <div style={{ borderBottom: "1px solid var(--pf-border)" }}>
          <div style={{ padding: "12px 16px 8px", fontFamily: "'JetBrains Mono', monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--pf-fg-dim)", background: "var(--pf-bg-card)", border: "1px solid var(--pf-border)", borderBottom: "none" }}>
            Vos systèmes existants
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--pf-border)" }}>
            {SOURCES.map((src, i) => (
              <SourceTile key={src.label} src={src} active={i === activeIdx} isDark={isDark} />
            ))}
          </div>
        </div>

        {/* Logo centré */}
        <div style={{
          position: "relative", overflow: "hidden",
          border: "1px solid var(--pf-border)",
          background: "var(--pf-bg-card)",
          display: "flex", flexDirection: "column",
          alignItems: "center", padding: "32px 0 18px",
        }}>
          {/* Radial glow */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 0,
            background: isDark
              ? "radial-gradient(circle at 50% 40%, rgba(255,106,19,0.10) 0%, transparent 60%)"
              : "radial-gradient(circle at 50% 40%, rgba(255,106,19,0.08) 0%, transparent 60%)",
          }} />

          <div style={{
            position: "relative", zIndex: 1,
            transform: "scale(0.72)", transformOrigin: "center center", height: 245,
          }}>
            <div style={{
              width: 340, height: 340,
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
            }}>
              {/* Pulsing glow */}
              <div style={{
                position: "absolute", width: 200, height: 200,
                borderRadius: "50%",
                background: isDark
                  ? "radial-gradient(circle, rgba(255,106,19,0.36), transparent 66%)"
                  : "radial-gradient(circle, rgba(255,106,19,0.18), transparent 66%)",
                filter: "blur(20px)",
                animation: "pf-pulse 3.5s ease-in-out infinite",
              }} />

              {/* Logo frame */}
              <div style={{
                position: "relative", zIndex: 2,
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: 14, pointerEvents: "none",
              }}>
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "22px 26px",
                  background: "var(--pf-bg-card)",
                  border: "1px solid var(--pf-accent-dim-border)",
                  boxShadow: isDark
                    ? "0 0 0 5px var(--pf-bg-card), 0 8px 28px rgba(0,0,0,0.5), 0 0 24px rgba(255,106,19,0.10)"
                    : "0 0 0 5px var(--pf-bg-card), 0 8px 28px rgba(0,0,0,0.06), 0 0 24px rgba(255,106,19,0.06)",
                }}>
                  <img
                    src="/assets/brand/logo-icon.png"
                    alt="Prosperify"
                    style={{
                      height: 80, width: "auto",
                      filter: isDark
                        ? "drop-shadow(0 6px 20px rgba(255,106,19,0.4))"
                        : "drop-shadow(0 6px 20px rgba(255,106,19,0.2))",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div style={{
            position: "relative", zIndex: 1, marginTop: 2,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
            padding: "9px 20px",
            border: "1px solid var(--pf-border)",
            background: "var(--pf-bg-card-2)",
          }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: "var(--pf-fg)", letterSpacing: "0.1em", fontFamily: "'JetBrains Mono', monospace" }}>PROSPERIFY</span>
            <span style={{ fontSize: 10, color: "var(--pf-accent)", letterSpacing: "0.14em", fontFamily: "'JetBrains Mono', monospace" }}>CORE</span>
          </div>
          <span style={{
            position: "relative", zIndex: 1, marginTop: 6,
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
            letterSpacing: "0.15em", color: "var(--pf-fg-dim)", textTransform: "uppercase",
          }}>
            Moteur d&apos;ingestion &amp; RAG
          </span>
        </div>

        {/* Stores */}
        <div>
          <div style={{ padding: "12px 16px 8px", fontFamily: "'JetBrains Mono', monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--pf-fg-dim)", background: "var(--pf-bg-card)", borderTop: "1px solid var(--pf-border)" }}>
            Stores interrogeables
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {STORES.map(({ label, desc, Icon, scanDelay }) => (
              <div key={label} style={{
                position: "relative", overflow: "hidden",
                display: "flex", alignItems: "center", gap: 12,
                padding: "14px 16px",
                background: "var(--pf-accent-bg)",
                borderTop: "1px solid var(--pf-accent-dim-border)",
              }}>
                <div style={{
                  width: 36, height: 36, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "var(--pf-accent-bg-2)",
                  border: "1px solid var(--pf-accent-dim-border)",
                }}>
                  <Icon size={15} style={{ color: "var(--pf-accent)" }} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--pf-fg)" }}>{label}</div>
                  <div style={{ fontSize: 11, color: "var(--pf-fg-dim)", marginTop: 1 }}>{desc}</div>
                </div>
                <Check size={14} style={{ color: "var(--pf-accent)", marginLeft: "auto", flexShrink: 0 }} />
                <div style={{
                  position: "absolute", left: 0, right: 0, height: 40, pointerEvents: "none",
                  background: `linear-gradient(180deg, transparent, var(--pf-accent-highlight), transparent)`,
                  animation: `pf-store-scan 3.4s linear ${scanDelay} infinite`,
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* Ingestion bar — mobile */}
        <IngestionBar />
      </div>

      {/* Benefits — responsive grid */}
      <div className="mt-6 grid grid-cols-1 gap-px border border-[var(--pf-border)] sm:grid-cols-3" style={{ background: "var(--pf-border)" }}>
        {BENEFITS.map(({ label, desc, Icon }) => (
          <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: 24, background: "var(--pf-bg-card)" }}>
            <div style={{
              marginTop: 2, width: 36, height: 36, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "var(--pf-accent-bg)",
              border: "1px solid var(--pf-accent-dim-border)",
            }}>
              <Icon size={16} style={{ color: "var(--pf-accent)" }} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--pf-fg)" }}>{label}</div>
              <div style={{ marginTop: 4, fontSize: 13, lineHeight: 1.5, color: "var(--pf-fg-muted)" }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
