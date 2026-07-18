"use client";

import type React from "react";

import {
  BookOpen,
  Building2,
  Check,
  Code2,
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
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ──────────────────────────────────────────────────────── */
/*  Data                                                     */
/* ──────────────────────────────────────────────────────── */

type SourceDef = {
  id: string;
  label: string;
  Icon: React.ElementType;
  color: string; // brand color for icon + border
};

// 12 sources — even indices → inner ring, odd → outer ring
const SOURCES: SourceDef[] = [
  { id: "gdrive",     label: "Google Drive",  Icon: HardDrive,     color: "#4285F4" },
  { id: "slack",      label: "Slack",          Icon: MessageSquare, color: "#4A154B" },
  { id: "sharepoint", label: "SharePoint",     Icon: Share2,        color: "#0078D4" },
  { id: "sap",        label: "SAP / ERP",      Icon: Building2,     color: "#007DB8" },
  { id: "salesforce", label: "Salesforce",     Icon: TrendingUp,    color: "#00A1E0" },
  { id: "postgres",   label: "PostgreSQL",     Icon: Database,      color: "#336791" },
  { id: "s3",         label: "AWS S3",         Icon: Server,        color: "#FF9900" },
  { id: "notion",     label: "Notion",         Icon: BookOpen,      color: "#6B6B6B" },
  { id: "email",      label: "Email",          Icon: Mail,          color: "#EA4335" },
  { id: "github",     label: "GitHub",         Icon: GitBranch,     color: "#6e40c9" },
  { id: "api",        label: "REST API",       Icon: Code2,         color: "#5fa04e" },
  { id: "pdf",        label: "PDF / Docs",     Icon: FileText,      color: "#EC1C24" },
];

const STORES = [
  { label: "Store Juridique",  desc: "Contrats & actes",    Icon: Scale },
  { label: "Store Conformité", desc: "KYC & AML",           Icon: ShieldCheck },
  { label: "Store RH",         desc: "Procédures internes", Icon: Users },
];

const BENEFITS = [
  { label: "Aucune migration",   desc: "Vos données restent dans vos systèmes existants.",            Icon: Server },
  { label: "Ingestion flexible", desc: "Manuelle à la demande ou automatique selon un planning.",     Icon: RefreshCw },
  { label: "Zéro refonte",       desc: "Une couche qui s'ajoute sans toucher à votre architecture.", Icon: Zap },
];

/* ──────────────────────────────────────────────────────── */
/*  Orbital constants (reference width 1200px)              */
/* ──────────────────────────────────────────────────────── */

const SECTION_H    = 780;
const BASE_GLOBE   = 420;
const BASE_INNER_R = 240; // inner source orbit radius
const BASE_OUTER_R = 390; // outer source orbit radius
const BASE_STORE_R = 252; // store orbit radius
const REF_W        = 1200;

// Inner ring: 6 sources (even indices) spread 110°→250°
const INNER_ANGLES = [110, 138, 166, 194, 222, 250];
// Outer ring: 6 sources (odd indices) spread 105°→255°
const OUTER_ANGLES = [105, 135, 165, 195, 225, 255];
// Store orbit: right arc
const STORE_ANGLES = [-52, 0, 52];

const innerSources = SOURCES.filter((_, i) => i % 2 === 0);
const outerSources = SOURCES.filter((_, i) => i % 2 === 1);

function orbitPos(deg: number, r: number, cx: number, cy: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function svgArc(cx: number, cy: number, r: number, a1: number, a2: number) {
  const r1 = (a1 * Math.PI) / 180;
  const r2 = (a2 * Math.PI) / 180;
  const x1 = (cx + r * Math.cos(r1)).toFixed(1);
  const y1 = (cy + r * Math.sin(r1)).toFixed(1);
  const x2 = (cx + r * Math.cos(r2)).toFixed(1);
  const y2 = (cy + r * Math.sin(r2)).toFixed(1);
  return `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`;
}

/* ──────────────────────────────────────────────────────── */
/*  Globe                                                    */
/* ──────────────────────────────────────────────────────── */

function ProsperifyGlobe({ size }: { size: number }) {
  const DOT_COUNT = 22;
  const outerR   = size / 2 - 1;
  const innerSz  = Math.round(size * 0.72);
  const planetSz = Math.round(size * 0.44);
  const fz1      = Math.max(9, Math.round(planetSz * 0.076));
  const fz2      = Math.max(7, Math.round(planetSz * 0.058));

  return (
    <div style={{ width: size, height: size, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Outer orbit ring + meteorite dots */}
      <div
        style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          border: "1px dashed rgba(255,106,19,0.22)",
          animation: "pf-orbit-ring 32s linear infinite",
        }}
      >
        {Array.from({ length: DOT_COUNT }, (_, i) => {
          const big = i % 4 === 0;
          return (
            <div key={i} style={{
              position: "absolute", top: "50%", left: "50%",
              width: big ? 7 : 3, height: big ? 7 : 3,
              borderRadius: "50%",
              background: big ? "#FF6A13" : "rgba(255,106,19,0.35)",
              boxShadow: big ? "0 0 9px rgba(255,106,19,0.85)" : "none",
              transform: `rotate(${(i * 360) / DOT_COUNT}deg) translateX(${outerR}px) translateY(-50%)`,
            }} />
          );
        })}
      </div>
      {/* Inner reverse ring */}
      <div style={{
        position: "absolute", width: innerSz, height: innerSz,
        top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        borderRadius: "50%", border: "1px dashed rgba(255,106,19,0.10)",
        animation: "pf-orbit-ring-rev 22s linear infinite",
      }} />
      {/* Planet */}
      <div style={{
        width: planetSz, height: planetSz, borderRadius: "50%",
        background: "radial-gradient(circle at 34% 32%, #ffaa60 0%, #FF6A13 36%, #b83a00 100%)",
        animation: "pf-globe-glow 3.5s ease-in-out infinite",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <span style={{ fontSize: fz1, fontWeight: 800, color: "#fff", letterSpacing: "0.1em", fontFamily: "monospace", textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}>
            PROSPERIFY
          </span>
          <span style={{ fontSize: fz2, color: "rgba(255,255,255,0.72)", letterSpacing: "0.1em", fontFamily: "monospace" }}>
            API
          </span>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────── */
/*  Traveling dot — z:2, hidden behind globe mask z:3       */
/* ──────────────────────────────────────────────────────── */

function TravelDot({ fromX, fromY, toX, toY, delay, dur = 4 }: {
  fromX: number; fromY: number; toX: number; toY: number; delay: number; dur?: number;
}) {
  return (
    <div style={{
      position: "absolute",
      left: fromX - 4, top: fromY - 4,
      width: 8, height: 8, borderRadius: "50%",
      background: "#FF6A13", boxShadow: "0 0 10px rgba(255,106,19,0.9)",
      pointerEvents: "none",
      zIndex: 2, // below mask (3) and globe (4)
      "--pf-dx": `${toX - fromX}px`,
      "--pf-dy": `${toY - fromY}px`,
      animation: `pf-orbit-travel ${dur}s linear ${delay}s infinite`,
    } as React.CSSProperties} />
  );
}

/* ──────────────────────────────────────────────────────── */
/*  Source floating icon                                    */
/* ──────────────────────────────────────────────────────── */

function SourceOrbit({ label, Icon, color, x, y, index }: {
  label: string; Icon: React.ElementType; color: string; x: number; y: number; index: number;
}) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setActive(true);
      setTimeout(() => setActive(false), 1200);
    }, 3600 + index * 430);
    return () => clearInterval(t);
  }, [index]);

  return (
    <div style={{ position: "absolute", left: x, top: y, transform: "translate(-50%,-50%)", zIndex: 5 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
        <div style={{
          width: 54, height: 54, borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: active ? `${color}1E` : "var(--pf-bg-card)",
          border: `1.5px solid ${active ? color : `${color}66`}`,
          boxShadow: active
            ? `0 0 22px ${color}42, 0 0 8px ${color}28`
            : "0 2px 12px rgba(0,0,0,0.09)",
          transition: "all 0.55s",
        }}>
          <Icon size={22} style={{ color, transition: "opacity 0.4s" }} />
        </div>
        <span style={{
          fontSize: 10.5, color: "var(--pf-fg-dim)", fontFamily: "monospace",
          letterSpacing: "0.04em", whiteSpace: "nowrap",
        }}>
          {label}
        </span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────── */
/*  Store output card                                        */
/* ──────────────────────────────────────────────────────── */

function StoreOrbit({ label, desc, Icon, x, y, storeIndex }: {
  label: string; desc: string; Icon: React.ElementType; x: number; y: number; storeIndex: number;
}) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2400 + storeIndex * 1000);
    return () => clearTimeout(t);
  }, [storeIndex]);

  return (
    <div style={{ position: "absolute", left: x, top: y, transform: "translate(-50%,-50%)", zIndex: 5, minWidth: 168 }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 10, padding: "12px 15px",
        background: loaded ? "var(--pf-accent-bg)" : "var(--pf-bg-card)",
        border: `1px solid ${loaded ? "rgba(255,106,19,0.35)" : "var(--pf-border)"}`,
        boxShadow: loaded
          ? "0 0 26px rgba(255,106,19,0.15), 0 4px 14px rgba(0,0,0,0.1)"
          : "0 2px 12px rgba(0,0,0,0.09)",
        transition: "all 0.7s",
      }}>
        <div style={{
          width: 38, height: 38, flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: loaded ? "rgba(255,106,19,0.1)" : "var(--pf-bg-card-2)",
          border: `1px solid ${loaded ? "rgba(255,106,19,0.32)" : "var(--pf-border)"}`,
          transition: "all 0.55s",
        }}>
          <Icon size={15} style={{ color: loaded ? "#FF6A13" : "var(--pf-fg-dim)", transition: "color 0.55s" }} />
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--pf-fg)" }}>{label}</div>
          <div style={{ fontSize: 11, color: "var(--pf-fg-dim)", marginTop: 1 }}>{desc}</div>
        </div>
        <div style={{ marginLeft: "auto", paddingLeft: 10 }}>
          {loaded ? (
            <Check size={13} style={{ color: "#FF6A13" }} />
          ) : (
            <div style={{
              width: 13, height: 13, borderRadius: "50%",
              border: "2px solid var(--pf-border-2)", borderTopColor: "#FF6A13",
              animation: "pf-orbit-ring 0.8s linear infinite",
            }} />
          )}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────── */
/*  Ingestion bar                                           */
/* ──────────────────────────────────────────────────────── */

function IngestionBar() {
  const [mode, setMode] = useState<"auto" | "manual">("auto");
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-3 border border-t-0 border-[var(--pf-border)] px-6 py-3"
      style={{ background: "var(--pf-bg-card-2)" }}
    >
      <span style={{ fontSize: 11, fontFamily: "monospace", color: "var(--pf-fg-dim)", letterSpacing: "0.12em" }}>
        INGESTION
      </span>
      <div className="flex gap-1.5">
        {(["auto", "manual"] as const).map((m) => (
          <button key={m} onClick={() => setMode(m)} style={{
            fontSize: 11, fontFamily: "monospace", letterSpacing: "0.07em", padding: "4px 16px",
            background: mode === m ? "#FF6A13" : "transparent",
            color: mode === m ? "#fff" : "var(--pf-fg-dim)",
            border: `1px solid ${mode === m ? "#FF6A13" : "var(--pf-border)"}`,
            cursor: "pointer", transition: "all 0.15s",
          }}>
            {m === "auto" ? "AUTO" : "MANUEL"}
          </button>
        ))}
      </div>
      <span style={{ fontSize: 11, color: "#FF6A13", fontFamily: "monospace" }}>
        {mode === "auto" ? "Planifié · 02:00 CET" : "À la demande"}
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────────────── */
/*  Mobile store tile                                        */
/* ──────────────────────────────────────────────────────── */

function MobileStoreTile({ label, desc, Icon, storeIndex }: {
  label: string; desc: string; Icon: React.ElementType; storeIndex: number;
}) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1600 + storeIndex * 700);
    return () => clearTimeout(t);
  }, [storeIndex]);

  return (
    <div className="flex items-center gap-4 px-5 py-4" style={{
      background: loaded ? "var(--pf-accent-bg)" : "var(--pf-bg-card)",
      borderBottom: "1px solid var(--pf-border)", transition: "background 0.6s",
    }}>
      <div style={{
        width: 40, height: 40, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
        background: loaded ? "rgba(255,106,19,0.1)" : "var(--pf-bg-card-2)",
        border: `1px solid ${loaded ? "rgba(255,106,19,0.3)" : "var(--pf-border)"}`, transition: "all 0.5s",
      }}>
        <Icon size={16} style={{ color: loaded ? "#FF6A13" : "var(--pf-fg-dim)", transition: "color 0.5s" }} />
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--pf-fg)" }}>{label}</div>
        <div style={{ fontSize: 12, color: "var(--pf-fg-dim)", marginTop: 2 }}>{desc}</div>
      </div>
      <div style={{ marginLeft: "auto" }}>
        {loaded
          ? <Check size={14} style={{ color: "#FF6A13" }} />
          : <div style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid var(--pf-border-2)", borderTopColor: "#FF6A13", animation: "pf-orbit-ring 0.8s linear infinite" }} />
        }
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────── */
/*  Main section                                            */
/* ──────────────────────────────────────────────────────── */

export function SovereigntySection() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const [cw, setCw] = useState(REF_W);

  useEffect(() => {
    const el = orbitRef.current;
    if (!el) return;
    const measure = () => setCw(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scale   = Math.min(cw / REF_W, 1);
  const globeSz = Math.round(BASE_GLOBE  * scale);
  const innerR  = Math.round(BASE_INNER_R * scale);
  const outerR  = Math.round(BASE_OUTER_R * scale);
  const storeR  = Math.round(BASE_STORE_R * scale);

  const cx = cw / 2;
  const cy = SECTION_H / 2;

  // Circular mask radius: inner ring of the globe (dots disappear here)
  const maskR = Math.round(globeSz * 0.36); // ≈ innerSz/2

  const innerPos = INNER_ANGLES.map((a) => orbitPos(a, innerR, cx, cy));
  const outerPos = OUTER_ANGLES.map((a) => orbitPos(a, outerR, cx, cy));
  const storePos = STORE_ANGLES.map((a) => orbitPos(a, storeR, cx, cy));

  // All source positions in SOURCES order for travel dots
  const allSrcPos = SOURCES.map((_, i) =>
    i % 2 === 0 ? innerPos[Math.floor(i / 2)] : outerPos[Math.floor(i / 2)]
  );

  return (
    <div>
      {/* Header */}
      <div className="pb-0 pt-10 sm:pt-14">
        <h2 className="text-[28px] font-bold leading-tight tracking-tight text-[var(--pf-fg)] sm:text-[36px] lg:text-[46px]">
          Connectez vos systèmes.
          <br />
          <span style={{ color: "#FF6A13" }}>Aucune refonte nécessaire.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--pf-fg-muted)] sm:text-[16px]">
          Prosperify est une couche qui se pose sur vos outils existants. Vos sources
          gravitent autour du globe et deviennent des stores interrogeables — sans
          migration, sans rewrite.
        </p>
      </div>

      {/* ── Desktop: orbital visualization ── */}
      <div className="mt-10 hidden lg:block">
        <div
          ref={orbitRef}
          className="relative overflow-hidden border border-[var(--pf-border)]"
          style={{ height: SECTION_H, background: "var(--pf-bg-card)" }}
        >
          {/* SVG: arc paths + dashed connection lines (z:0) */}
          <svg
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
          >
            {/* Inner source orbit arc */}
            <path d={svgArc(cx, cy, innerR, INNER_ANGLES[0], INNER_ANGLES[INNER_ANGLES.length - 1])}
              fill="none" stroke="rgba(255,106,19,0.07)" strokeWidth="1" strokeDasharray="4 9" />
            {/* Outer source orbit arc */}
            <path d={svgArc(cx, cy, outerR, OUTER_ANGLES[0], OUTER_ANGLES[OUTER_ANGLES.length - 1])}
              fill="none" stroke="rgba(255,106,19,0.05)" strokeWidth="1" strokeDasharray="4 9" />
            {/* Store orbit arc */}
            <path d={svgArc(cx, cy, storeR, STORE_ANGLES[0], STORE_ANGLES[STORE_ANGLES.length - 1])}
              fill="none" stroke="rgba(255,106,19,0.09)" strokeWidth="1" strokeDasharray="4 9" />
            {/* Source → planet connection lines */}
            {allSrcPos.map((p, i) => (
              <line key={`sl-${i}`}
                x1={p.x} y1={p.y} x2={cx} y2={cy}
                stroke="rgba(255,106,19,0.07)" strokeWidth="1" strokeDasharray="5 8" />
            ))}
            {/* Planet → store lines */}
            {storePos.map((p, i) => (
              <line key={`ol-${i}`}
                x1={cx} y1={cy} x2={p.x} y2={p.y}
                stroke="rgba(255,106,19,0.13)" strokeWidth="1.5" strokeDasharray="5 8" />
            ))}
          </svg>

          {/* Traveling dots sources→planet (z:2, will disappear behind mask at z:3) */}
          {allSrcPos.flatMap((p, i) =>
            [0, 1].map((d) => (
              <TravelDot key={`sd-${i}-${d}`}
                fromX={p.x} fromY={p.y} toX={cx} toY={cy}
                delay={i * 0.30 + d * 2.0} dur={4}
              />
            ))
          )}

          {/* Traveling dots planet→stores (z:2, appear from behind mask) */}
          {storePos.flatMap((p, i) =>
            [0, 1].map((d) => (
              <TravelDot key={`od-${i}-${d}`}
                fromX={cx} fromY={cy} toX={p.x} toY={p.y}
                delay={i * 0.8 + d * 1.8} dur={3.5}
              />
            ))
          )}

          {/* Globe mask — circular bg that hides dots as they enter (z:3) */}
          <div style={{
            position: "absolute",
            left: cx - maskR,
            top: cy - maskR,
            width: maskR * 2,
            height: maskR * 2,
            borderRadius: "50%",
            background: "var(--pf-bg-card)",
            zIndex: 3,
            pointerEvents: "none",
          }} />

          {/* Planet (z:4 — above mask, source/store icons at z:5 are above it too) */}
          <div style={{ position: "absolute", left: cx - globeSz / 2, top: cy - globeSz / 2, zIndex: 4 }}>
            <ProsperifyGlobe size={globeSz} />
          </div>

          {/* Inner ring source icons (z:5) */}
          {innerSources.map((src, i) => (
            <SourceOrbit key={src.id}
              label={src.label} Icon={src.Icon} color={src.color}
              x={innerPos[i].x} y={innerPos[i].y} index={i * 2}
            />
          ))}

          {/* Outer ring source icons (z:5) */}
          {outerSources.map((src, i) => (
            <SourceOrbit key={src.id}
              label={src.label} Icon={src.Icon} color={src.color}
              x={outerPos[i].x} y={outerPos[i].y} index={i * 2 + 1}
            />
          ))}

          {/* Store cards (z:5) */}
          {STORES.map((store, i) => (
            <StoreOrbit key={store.label}
              label={store.label} desc={store.desc} Icon={store.Icon}
              x={storePos[i].x} y={storePos[i].y} storeIndex={i}
            />
          ))}

          {/* Corner labels */}
          <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--pf-fg-dim)]" style={{ zIndex: 6 }}>
            Vos systèmes existants
          </span>
          <span className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--pf-fg-dim)]" style={{ zIndex: 6 }}>
            Stores interrogeables
          </span>
        </div>

        <IngestionBar />
      </div>

      {/* ── Mobile: simplified stacked layout ── */}
      <div className="mt-8 lg:hidden">
        <div className="mb-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--pf-fg-dim)]">
            Vos systèmes existants
          </span>
        </div>
        <div
          className="grid grid-cols-3 gap-px border border-[var(--pf-border)]"
          style={{ background: "var(--pf-border)" }}
        >
          {SOURCES.map(({ id, label, Icon, color }) => (
            <div key={id} className="flex flex-col items-center gap-2 px-3 py-4"
              style={{ background: "var(--pf-bg-card)" }}>
              <div style={{ width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: `${color}18`, border: `1.5px solid ${color}55` }}>
                <Icon size={18} style={{ color }} />
              </div>
              <span style={{ fontSize: 10, color: "var(--pf-fg-dim)", fontFamily: "monospace", textAlign: "center" }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center py-1">
          <div className="relative h-12 w-[2px]" style={{ background: "var(--pf-border-2)" }}>
            {[0, 1].map((i) => (
              <div key={i} style={{
                position: "absolute", left: "50%", transform: "translateX(-50%)",
                width: 7, height: 7, borderRadius: "50%",
                background: "#FF6A13", boxShadow: "0 0 8px rgba(255,106,19,0.9)",
                animation: `pf-flow-through 2.5s linear ${i * 1.25}s infinite`,
              }} />
            ))}
          </div>
        </div>

        <div className="flex justify-center py-6">
          <ProsperifyGlobe size={220} />
        </div>

        <div className="flex justify-center py-1">
          <div className="relative h-12 w-[2px]" style={{ background: "var(--pf-border-2)" }}>
            {[0, 1].map((i) => (
              <div key={i} style={{
                position: "absolute", left: "50%", transform: "translateX(-50%)",
                width: 7, height: 7, borderRadius: "50%",
                background: "#FF6A13", boxShadow: "0 0 8px rgba(255,106,19,0.9)",
                animation: `pf-flow-through 2.5s linear ${i * 1.25}s infinite`,
              }} />
            ))}
          </div>
        </div>

        <div className="mb-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--pf-fg-dim)]">
            Stores interrogeables
          </span>
        </div>
        <div className="border border-[var(--pf-border)]">
          {STORES.map((s, i) => (
            <MobileStoreTile key={s.label} label={s.label} desc={s.desc} Icon={s.Icon} storeIndex={i} />
          ))}
        </div>

        <IngestionBar />
      </div>

      {/* ── Benefits row ── */}
      <div
        className="mt-px grid grid-cols-1 gap-px sm:grid-cols-3"
        style={{ background: "var(--pf-border)" }}
      >
        {BENEFITS.map(({ label, desc, Icon }) => (
          <div key={label} className="flex items-start gap-4 px-6 py-6" style={{ background: "var(--pf-bg-card)" }}>
            <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center"
              style={{ background: "var(--pf-accent-bg)", border: "1px solid var(--pf-accent-dim-border)" }}>
              <Icon size={16} style={{ color: "#FF6A13" }} />
            </div>
            <div>
              <div className="text-[14px] font-semibold text-[var(--pf-fg)]">{label}</div>
              <div className="mt-1 text-[13px] text-[var(--pf-fg-muted)]">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
