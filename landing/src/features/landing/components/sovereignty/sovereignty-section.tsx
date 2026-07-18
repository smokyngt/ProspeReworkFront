"use client";

import type React from "react";
import * as THREE from "three";

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
import { useEffect, useRef, useState } from "react";

/* ──────────────────────────────────────────────────────── */
/*  Data                                                     */
/* ──────────────────────────────────────────────────────── */

type SourceDef = {
  label: string;
  slug: string | null;
  color?: string;      // simpleicons color override
  fbIcon: React.ElementType;
  fbCol: string;
};

const SOURCES: SourceDef[] = [
  { label: "Google Drive", slug: "googledrive",                          fbIcon: HardDrive,    fbCol: "#4285F4" },
  { label: "Slack",        slug: null,                                   fbIcon: MessageSquare, fbCol: "#E01E5A" },
  { label: "SharePoint",   slug: null,                                   fbIcon: Share2,        fbCol: "#0f9bd7" },
  { label: "SAP",          slug: "sap",                                  fbIcon: Building2,     fbCol: "#3aa0d1" },
  { label: "Salesforce",   slug: null,                                   fbIcon: Cloud,         fbCol: "#00A1E0" },
  { label: "PostgreSQL",   slug: "postgresql",  color: "8FB4E3",         fbIcon: Database,      fbCol: "#8FB4E3" },
  { label: "AWS S3",       slug: null,                                   fbIcon: Server,        fbCol: "#FF9900" },
  { label: "Notion",       slug: "notion",      color: "ffffff",         fbIcon: BookOpen,      fbCol: "#e6e6e6" },
  { label: "Gmail",        slug: "gmail",                                fbIcon: Mail,          fbCol: "#EA4335" },
  { label: "GitHub",       slug: "github",      color: "ffffff",         fbIcon: GitBranch,     fbCol: "#e6e6e6" },
  { label: "REST API",     slug: "openapiinitiative", color: "6BA539",   fbIcon: Code,          fbCol: "#6BA539" },
  { label: "PDF / Docs",   slug: null,                                   fbIcon: FileText,      fbCol: "#EC4a52" },
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
const N_FLUX  = 6;
const DUR_F   = 5;

/* ──────────────────────────────────────────────────────── */
/*  Three.js globe                                           */
/* ──────────────────────────────────────────────────────── */

function ThreeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef  = useRef<{ renderer: THREE.WebGLRenderer; raf: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const size   = 300;
    const accent = ACCENT;
    const col    = new THREE.Color(accent);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(size, size, false);
    renderer.setClearColor(0x000000, 0);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 3.4;

    const group = new THREE.Group();
    scene.add(group);

    const core = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshStandardMaterial({
        color: col, roughness: 0.5, metalness: 0.2,
        emissive: col.clone().multiplyScalar(0.28),
      }),
    );
    group.add(core);

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.SphereGeometry(1.004, 24, 16)),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.08 }),
    );
    group.add(wire);

    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(1.16, 48, 48),
      new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.08, side: THREE.BackSide }),
    );
    group.add(shell);

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const key = new THREE.DirectionalLight(0xffd9b0, 1.5);
    key.position.set(-2, 2.2, 2.5);
    scene.add(key);
    const rim = new THREE.DirectionalLight(col.clone(), 0.7);
    rim.position.set(2.5, -1, -1.5);
    scene.add(rim);

    group.rotation.z = 0.35;

    let raf = 0;
    const animate = () => {
      group.rotation.y += 0.0042;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    stateRef.current = { renderer, raf };

    return () => {
      cancelAnimationFrame(raf);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={300}
      style={{ width: 300, height: 300, position: "relative", zIndex: 1, background: "transparent" }}
    />
  );
}

/* ──────────────────────────────────────────────────────── */
/*  Source tile                                              */
/* ──────────────────────────────────────────────────────── */

function SourceTile({ src, active }: { src: SourceDef; active: boolean }) {
  const [imgFailed, setImgFailed] = useState(false);
  const FbIcon = src.fbIcon;

  const iconUrl = src.slug
    ? `https://cdn.simpleicons.org/${src.slug}${src.color ? "/" + src.color : ""}`
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
              filter: active ? activeFilter : "none",
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
            background: isAuto ? ACCENT : "transparent",
            color: isAuto ? "#0a0a0a" : "var(--pf-fg-dim)",
            borderColor: isAuto ? ACCENT : "var(--pf-border)",
          }}
        >
          AUTO
        </button>
        <button
          type="button"
          onClick={() => setMode("manuel")}
          style={{
            ...btnBase,
            background: !isAuto ? ACCENT : "transparent",
            color: !isAuto ? "#0a0a0a" : "var(--pf-fg-dim)",
            borderColor: !isAuto ? ACCENT : "var(--pf-border)",
          }}
        >
          MANUEL
        </button>
      </div>
      <span style={{ fontSize: 11, color: ACCENT, fontFamily: "'JetBrains Mono', monospace" }}>
        {isAuto ? "Planifié · 02:00 CET" : "À la demande"}
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────────────── */
/*  Main section                                            */
/* ──────────────────────────────────────────────────────── */

export function SovereigntySection() {
  const [activeIdx, setActiveIdx] = useState(0);

  type Star = {
    key: number; left: string; top: string; width: string; height: string;
    bg: string; shadow: string; animDur: string; animDel: string;
  };

  // Stars must be client-only (Math.random() differs server vs client → hydration error)
  const [stars, setStars] = useState<Star[]>([]);
  useEffect(() => {
    const rnd = (a: number, b: number) => a + Math.random() * (b - a);
    setStars(Array.from({ length: 56 }, (_, i) => {
      const sz    = rnd(1.2, 3.6);
      const alpha = rnd(0.18, 0.9);
      return {
        key: i,
        left:    `${rnd(1, 99).toFixed(1)}%`,
        top:     `${rnd(1, 99).toFixed(1)}%`,
        width:   `${sz.toFixed(1)}px`,
        height:  `${sz.toFixed(1)}px`,
        bg:      `rgba(255, ${Math.round(rnd(120, 175))}, ${Math.round(rnd(20, 65))}, ${alpha.toFixed(2)})`,
        shadow:  sz > 2.8 ? "0 0 6px rgba(255,120,30,0.6)" : "none",
        animDur: `${rnd(2.6, 6).toFixed(1)}s`,
        animDel: `${rnd(0, 4).toFixed(1)}s`,
      };
    }));
  }, []);

  // Cycle active source every 820 ms
  useEffect(() => {
    const t = setInterval(
      () => setActiveIdx((i) => (i + 1) % SOURCES.length),
      820,
    );
    return () => clearInterval(t);
  }, []);

  // Flux dots — deterministic, no random → safe to compute inline
  const fluxDots = Array.from({ length: N_FLUX }, (_, i) => ({
    key: i,
    delay: `${((i * DUR_F) / N_FLUX).toFixed(2)}s`,
  }));

  return (
    <div>
      <h2 style={{
        margin: 0, fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.02em",
        color: "var(--pf-fg)", fontSize: "clamp(1.9rem, 4vw, 3.1rem)", maxWidth: 820,
      }}>
        Connectez vos systèmes.<br />
        <span style={{ color: ACCENT }}>Aucune refonte nécessaire.</span>
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
        {/* Orange glow — sits at z:1, covers gap cols, hidden under panels (z:2) */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
          background: "radial-gradient(circle at 50% 46%, rgba(255,106,19,0.45) 0px, rgba(255,106,19,0.20) 90px, rgba(255,106,19,0.06) 155px, transparent 200px)",
        }} />
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
                <SourceTile key={src.label} src={src} active={i === activeIdx} />
              ))}
            </div>
          </div>

          {/* gap col */}
          <div />

          {/* CENTER: 3D globe */}
          <div style={{
            position: "relative", zIndex: 3,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            padding: "28px 0",
          }}>
            {/* Stars — transparent background, glow comes from outer overlay */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 0, overflow: "hidden",
            }}>
              {stars.map((s) => (
                <div key={s.key} style={{
                  position: "absolute",
                  left: s.left, top: s.top,
                  width: s.width, height: s.height,
                  borderRadius: "50%",
                  background: s.bg,
                  boxShadow: s.shadow,
                  animation: `pf-twinkle ${s.animDur} ease-in-out ${s.animDel} infinite`,
                }} />
              ))}
            </div>

            {/* Globe container */}
            <div style={{
              position: "relative", zIndex: 1,
              width: 340, height: 340,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {/* Outer dashed ring */}
              <div style={{
                position: "absolute", width: 340, height: 340,
                borderRadius: "50%",
                border: `1px dashed rgba(255,106,19,0.22)`,
                animation: "pf-orbit-ring 40s linear infinite",
              }} />
              {/* Inner dashed ring */}
              <div style={{
                position: "absolute", width: 288, height: 288,
                borderRadius: "50%",
                border: `1px dashed rgba(255,106,19,0.12)`,
                animation: "pf-orbit-ring-rev 28s linear infinite",
              }} />
              {/* Glow halo */}
              <div style={{
                position: "absolute", width: 232, height: 232,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,106,19,0.4), transparent 66%)",
                filter: "blur(16px)",
                animation: "pf-pulse 3.5s ease-in-out infinite",
              }} />
              {/* Three.js canvas */}
              <ThreeGlobe />
              {/* Label overlay */}
              <div style={{
                position: "absolute", zIndex: 2,
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: 4, pointerEvents: "none",
              }}>
                <span style={{
                  fontSize: 17, fontWeight: 800, color: "#fff",
                  letterSpacing: "0.1em", fontFamily: "'JetBrains Mono', monospace",
                  textShadow: "0 2px 12px rgba(0,0,0,0.85)",
                }}>
                  PROSPERIFY
                </span>
                <span style={{
                  fontSize: 11, color: "rgba(255,255,255,0.85)",
                  letterSpacing: "0.14em", fontFamily: "'JetBrains Mono', monospace",
                  textShadow: "0 1px 10px rgba(0,0,0,0.9)",
                }}>
                  API
                </span>
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
                <div key={label} style={{
                  position: "relative", overflow: "hidden",
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "14px 15px",
                  background: "rgba(255,106,19,0.05)",
                  border: "1px solid rgba(255,106,19,0.35)",
                  boxShadow: "0 0 26px rgba(255,106,19,0.1)",
                }}>
                  <div style={{
                    width: 38, height: 38, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(255,106,19,0.1)",
                    border: "1px solid rgba(255,106,19,0.32)",
                  }}>
                    <Icon size={16} style={{ color: ACCENT }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--pf-fg)" }}>{label}</div>
                    <div style={{ fontSize: 11, color: "var(--pf-fg-dim)", marginTop: 1 }}>{desc}</div>
                  </div>
                  <div style={{ marginLeft: "auto", paddingLeft: 10, color: ACCENT, display: "flex" }}>
                    <Check size={15} />
                  </div>
                  {/* Scan line */}
                  <div style={{
                    position: "absolute", left: 0, right: 0, height: 40,
                    pointerEvents: "none",
                    background: "linear-gradient(180deg, transparent, rgba(255,106,19,0.12), transparent)",
                    animation: `pf-store-scan 3.4s linear ${scanDelay} infinite`,
                  }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Central flux overlay */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
          <div style={{
            position: "absolute", top: "50%", left: 0, right: 0, height: 0,
            borderTop: "1px dashed rgba(255,106,19,0.22)",
          }} />
          {fluxDots.map(({ key, delay }: { key: number; delay: string }) => (
            <div key={key} style={{
              position: "absolute", top: "50%", marginTop: -7, left: -6,
              width: 14, height: 14, borderRadius: "50%",
              background: `radial-gradient(circle, #fff 0%, ${ACCENT} 55%, transparent 74%)`,
              boxShadow: `0 0 18px rgba(255,106,19,0.95)`,
              animation: `pf-data-travel-h ${DUR_F}s linear ${delay} infinite`,
            }} />
          ))}
        </div>
      </div>

      {/* Ingestion bar — desktop */}
      <div className="hidden md:block">
        <IngestionBar />
      </div>

      {/* ── Mobile layout ── */}
      <div className="md:hidden" style={{ marginTop: 32 }}>
        {/* Globe centré avec halo orange */}
        <div style={{
          position: "relative", overflow: "hidden",
          border: "1px solid var(--pf-border)",
          background: "var(--pf-bg-card)",
          display: "flex", flexDirection: "column",
          alignItems: "center", padding: "32px 0 18px",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(circle at 50% 46%, rgba(255,106,19,0.45) 0%, rgba(255,106,19,0.18) 30%, rgba(255,106,19,0.05) 58%, transparent 78%)",
            pointerEvents: "none",
          }} />
          {stars.map((s) => (
            <div key={s.key} style={{
              position: "absolute",
              left: s.left, top: s.top,
              width: s.width, height: s.height,
              borderRadius: "50%",
              background: s.bg,
              boxShadow: s.shadow,
              animation: `pf-twinkle ${s.animDur} ease-in-out ${s.animDel} infinite`,
            }} />
          ))}
          <div style={{ position: "relative", zIndex: 1, transform: "scale(0.72)", transformOrigin: "center center", height: 245 }}>
            <div style={{ width: 340, height: 340, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div style={{ position: "absolute", width: 340, height: 340, borderRadius: "50%", border: "1px dashed rgba(255,106,19,0.22)", animation: "pf-orbit-ring 40s linear infinite" }} />
              <div style={{ position: "absolute", width: 288, height: 288, borderRadius: "50%", border: "1px dashed rgba(255,106,19,0.12)", animation: "pf-orbit-ring-rev 28s linear infinite" }} />
              <div style={{ position: "absolute", width: 232, height: 232, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,106,19,0.4), transparent 66%)", filter: "blur(16px)", animation: "pf-pulse 3.5s ease-in-out infinite" }} />
              <ThreeGlobe />
              <div style={{ position: "absolute", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, pointerEvents: "none" }}>
                <span style={{ fontSize: 17, fontWeight: 800, color: "#fff", letterSpacing: "0.1em", fontFamily: "'JetBrains Mono', monospace", textShadow: "0 2px 12px rgba(0,0,0,0.85)" }}>PROSPERIFY</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.85)", letterSpacing: "0.14em", fontFamily: "'JetBrains Mono', monospace", textShadow: "0 1px 10px rgba(0,0,0,0.9)" }}>API</span>
              </div>
            </div>
          </div>
          <span style={{ position: "relative", zIndex: 1, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.15em", color: "var(--pf-fg-dim)", textTransform: "uppercase" }}>
            Moteur d&apos;ingestion &amp; RAG
          </span>
        </div>

        {/* Sources grid */}
        <div style={{ borderBottom: "1px solid var(--pf-border)" }}>
          <div style={{ padding: "12px 16px 8px", fontFamily: "'JetBrains Mono', monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--pf-fg-dim)", background: "var(--pf-bg-card)", borderTop: "1px solid var(--pf-border)" }}>
            Vos systèmes existants
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--pf-border)" }}>
            {SOURCES.map((src, i) => (
              <SourceTile key={src.label} src={src} active={i === activeIdx} />
            ))}
          </div>
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
                background: "rgba(255,106,19,0.05)",
                borderTop: "1px solid rgba(255,106,19,0.22)",
              }}>
                <div style={{ width: 36, height: 36, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,106,19,0.1)", border: "1px solid rgba(255,106,19,0.28)" }}>
                  <Icon size={15} style={{ color: ACCENT }} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--pf-fg)" }}>{label}</div>
                  <div style={{ fontSize: 11, color: "var(--pf-fg-dim)", marginTop: 1 }}>{desc}</div>
                </div>
                <Check size={14} style={{ color: ACCENT, marginLeft: "auto", flexShrink: 0 }} />
                <div style={{ position: "absolute", left: 0, right: 0, height: 40, pointerEvents: "none", background: "linear-gradient(180deg, transparent, rgba(255,106,19,0.12), transparent)", animation: `pf-store-scan 3.4s linear ${scanDelay} infinite` }} />
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
            <div style={{ marginTop: 2, width: 36, height: 36, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,106,19,0.05)", border: "1px solid rgba(255,106,19,0.22)" }}>
              <Icon size={16} style={{ color: ACCENT }} />
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
