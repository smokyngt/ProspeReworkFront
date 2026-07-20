"use client";

import {
  type TouchEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Database,
  FileText,
  FolderOpen,
  Image,
  Lock,
  MessageSquare,
  Scale,
  Search,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

// ─── Step 1 — CONNECTER ───────────────────────────────────────────────────────

function PipelineArrow() {
  return (
    <div className="flex shrink-0 flex-col items-center justify-center px-3 py-4 md:py-0">
      <span className="rotate-90 font-mono text-xl font-bold text-[#FF6A13] opacity-60 md:rotate-0 md:text-2xl">→</span>
    </div>
  );
}

const SOURCES_KYC = ["Dossiers KYC clients", "Rapports due diligence", "Listes de sanctions"];
const STORES_READY = [
  { label: "Store KYC",        service: "Identité & UBO",       Icon: Users },
  { label: "Store Conformité", service: "Sanctions & AML",      Icon: ShieldCheck },
  { label: "Store Due Dil",    service: "Rapports & alertes",   Icon: Scale },
];

function ConnecterPipeline({ pipeline }: { pipeline: string[] }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
      {/* Col 1 — Sources */}
      <div className="flex-1 rounded-none border border-[var(--pf-border)] p-4" style={{ background: "var(--pf-bg-card-2)" }}>
        <div className="mb-3 font-mono text-[10px] tracking-[0.18em] text-[var(--pf-fg-dim)]">SOURCES</div>
        <div className="flex flex-col gap-2">
          {SOURCES_KYC.map((src) => (
            <div key={src} className="flex items-center gap-2.5 border border-[var(--pf-border)] px-3 py-2.5" style={{ background: "var(--pf-bg)" }}>
              <span className="h-[7px] w-[7px] shrink-0 bg-[#FF6A13]" />
              <span className="text-[12px] font-medium text-[var(--pf-fg)]">{src}</span>
              <span className="ml-auto font-mono text-[9px] text-[var(--pf-fg-dim)]">validé</span>
            </div>
          ))}
        </div>
      </div>

      <PipelineArrow />

      {/* Col 2 — Prosperify connector */}
      <div className="flex flex-1 flex-col items-center justify-center gap-3 border border-[#FF6A13] p-4" style={{ background: "var(--pf-accent-bg)" }}>
        <div className="flex h-12 w-12 items-center justify-center bg-[#FF6A13] font-mono text-sm font-bold text-[#080808]">DB</div>
        <div className="text-center">
          <div className="text-sm font-bold text-[var(--pf-fg)]">Prosperify</div>
          <div className="mt-1 text-[11px] text-[var(--pf-fg-muted)]">Indexation & préparation</div>
        </div>
        <div className="flex flex-wrap justify-center gap-1.5">
          {(pipeline.length > 0 ? pipeline : ["Lire", "Préparer", "Indexer"]).slice(0, 3).map((p) => (
            <span key={p} className="px-2 py-1 font-mono text-[10px] text-[#FF6A13]" style={{ border: "1px solid var(--pf-accent-dim-border)" }}>{p}</span>
          ))}
        </div>
      </div>

      <PipelineArrow />

      {/* Col 3 — Stores prêts */}
      <div className="flex-1 border border-[var(--pf-border)] p-4" style={{ background: "var(--pf-bg-card-2)" }}>
        <div className="mb-3 font-mono text-[10px] tracking-[0.18em] text-[var(--pf-fg-dim)]">STORES PRÊTS</div>
        <div className="flex flex-col gap-2">
          {STORES_READY.map(({ label, service, Icon: StoreIcon }) => (
            <div key={label} className="flex items-center gap-2.5 border border-[var(--pf-border)] px-3 py-2.5" style={{ background: "var(--pf-bg)" }}>
              <StoreIcon size={13} className="shrink-0 text-[#FF6A13]" />
              <div className="min-w-0">
                <div className="text-[12px] font-semibold text-[var(--pf-fg)]">{label}</div>
                <div className="text-[10px] text-[var(--pf-fg-dim)]">{service}</div>
              </div>
              <span className="ml-auto font-mono text-[9px] text-[#FF6A13]">✓</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Step 2 — INTERROGER (merged query + search + sourced answer) ─────────────

const INDEX_TYPES = [
  { id: "Query",      label: "Query",       Icon: Search },
  { id: "Sanctions",  label: "Sanctions",   Icon: ShieldCheck },
  { id: "KYC",        label: "KYC",         Icon: Users },
  { id: "Due Dil",    label: "Due Dil",     Icon: FolderOpen },
  { id: "PDF",        label: "PDF",         Icon: FileText },
  { id: "Images",     label: "Images",      Icon: Image },
  { id: "AML",        label: "AML",         Icon: Database },
];

const PHASE_DURATION_MS = 1300;
const RESULTS_BY_PHASE  = [0, 0, 42, 89, 143, 198, 247, 247];

function InterrogerPipeline() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPhase((p) => (p + 1) % 8), PHASE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  const results     = RESULTS_BY_PHASE[phase] ?? 0;
  const activeIndex = phase >= 2 ? phase - 2 : -1;
  const isDone      = phase === 7;

  const agentStatus = phase === 0
    ? "Initialisation…"
    : phase === 1
      ? "Analyse de la requête"
      : isDone
        ? "Analyse terminée ✓"
        : `Interrogation : ${INDEX_TYPES[activeIndex]?.label ?? ""}`;

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
      {/* Col 1 — Query KYC */}
      <div className="flex flex-1 flex-col justify-center gap-3 border border-[var(--pf-border)] p-4" style={{ background: "var(--pf-bg-card-2)" }}>
        <div className="mb-1 font-mono text-[10px] tracking-[0.18em] text-[var(--pf-fg-dim)]">REQUÊTE KYC</div>
        <div className="border border-[var(--pf-border)] px-3 py-2.5 text-[13px] text-[var(--pf-fg)]" style={{ background: "var(--pf-bg)" }}>
          Ce client figure-t-il sur une liste de sanctions ou présente-t-il un UBO à risque ?
        </div>
        <div className="flex items-center gap-2 border border-[#FF6A13] px-3 py-2" style={{ background: "var(--pf-accent-bg)" }}>
          <span className="h-1.5 w-1.5 animate-pulse bg-[#FF6A13]" />
          <span className="font-mono text-[10px] text-[#FF6A13]">
            {isDone ? "ANALYSE COMPLÈTE" : "ANALYSE EN COURS"}
          </span>
        </div>
        {/* Response card — appears when done */}
        {isDone && (
          <div className="border border-[var(--pf-border)] p-3" style={{ background: "var(--pf-bg)", animation: "pf-fadeUp 0.4s ease" }}>
            <p className="m-0 text-[12.5px] leading-[1.55] text-[var(--pf-fg)]">
              Source <strong>ACAMS Report · p.4</strong> — UBO non déclaré, lié à entité sanctionnée{" "}
              <span className="font-semibold" style={{ background: "var(--pf-accent-highlight)", padding: "1px 5px" }}>
                (OFAC · entrée #4821)
              </span>
              . Risque global :{" "}
              <span className="font-bold text-[#FF6A13]">élevé</span>.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["ACAMS · p.4", "OFAC 2024", "Kroll Report"].map((s) => (
                <span key={s} className="border border-[var(--pf-border)] px-2 py-0.5 font-mono text-[9.5px] text-[var(--pf-fg-muted)]">{s}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <PipelineArrow />

      {/* Col 2 — Prosperify Agent */}
      <div className="flex flex-1 flex-col items-center justify-center gap-3 border border-[#FF6A13] p-4" style={{ background: "var(--pf-accent-bg)" }}>
        <div className="flex h-12 w-12 items-center justify-center bg-[#FF6A13] font-mono text-sm font-bold text-[#080808]" style={{ animation: "pf-pulse 2.2s ease-in-out infinite" }}>
          PA
        </div>
        <div className="text-center">
          <div className="text-sm font-bold text-[var(--pf-fg)]">Prosperify Agent</div>
          <div className="mt-0.5 min-h-[16px] text-[11px] text-[var(--pf-fg-muted)]">{agentStatus}</div>
        </div>
        <div key={results} className="text-center" style={{ animation: results > 0 ? "pf-counter-pop 0.4s ease" : "none" }}>
          <div className="font-mono text-[1.6rem] font-bold leading-none text-[#FF6A13]">{results}</div>
          <div className="font-mono text-[9px] tracking-[0.14em] text-[var(--pf-fg-dim)]">SIGNAUX</div>
        </div>
      </div>

      <PipelineArrow />

      {/* Col 3 — Index types grid */}
      <div className="flex-1 border border-[var(--pf-border)] p-4" style={{ background: "var(--pf-bg-card-2)" }}>
        <div className="mb-3 font-mono text-[10px] tracking-[0.18em] text-[var(--pf-fg-dim)]">STORES / INDEX</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))", gap: "6px" }}>
          {INDEX_TYPES.map(({ id, label, Icon }, i) => {
            const isActive = i === activeIndex;
            const isClear  = phase >= 2 && i < activeIndex;
            return (
              <div key={id} className="relative overflow-hidden border px-2 py-2.5 text-center transition-all duration-300" style={{ borderColor: isActive ? "#FF6A13" : isClear ? "var(--pf-border-2)" : "var(--pf-border)", background: isActive ? "var(--pf-accent-bg)" : "var(--pf-bg)" }}>
                {isActive && (
                  <div className="pointer-events-none absolute inset-x-0" style={{ height: "2px", background: "linear-gradient(to right, transparent, #FF6A13 40%, #FF6A13 60%, transparent)", animation: `pf-store-scan ${PHASE_DURATION_MS * 0.7}ms linear infinite`, top: 0 }} />
                )}
                <Icon className="mx-auto mb-1.5" size={15} style={{ color: isActive ? "#FF6A13" : isClear ? "var(--pf-fg-muted)" : "var(--pf-fg-dim)" }} />
                <div className="text-[10px] font-semibold leading-tight transition-colors duration-300" style={{ color: isActive ? "#FF6A13" : isClear ? "var(--pf-fg-muted)" : "var(--pf-fg-dim)" }}>
                  {label}
                </div>
                {isClear && <div className="mt-0.5 font-mono text-[9px] text-[#FF6A13]">✓</div>}
                {isActive && (
                  <div className="mt-1 h-[3px] w-full overflow-hidden" style={{ background: "var(--pf-border)" }}>
                    <div className="h-full bg-[#FF6A13]" style={{ width: "60%", transition: "width 0.9s ease" }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Step 3 — CONTRÔLER ───────────────────────────────────────────────────────

const AUDIT_LOG = [
  { time: "09:14:32", user: "M. Dupont",      action: "Requête KYC — Meridian Holdings",  stores: "KYC · Sanctions",   risk: "élevé"  },
  { time: "09:07:18", user: "L. Fontaine",     action: "Vérification OFAC — Acme Corp",   stores: "Conformité · Due Dil", risk: "faible" },
  { time: "08:52:04", user: "A. Mbeki",        action: "Due diligence — Orion Partners",  stores: "Due Dil · KYC",     risk: "moyen"  },
];

const ROLES = ["Analyste", "Compliance", "Admin"];
const STORE_PERMS: Record<string, boolean[]> = {
  "Store KYC":        [true,  true,  true],
  "Store Conformité": [false, true,  true],
  "Store Due Dil":    [true,  true,  true],
};

const RISK_COLOR: Record<string, string> = {
  "élevé": "#FF6A13",
  "moyen": "#f59e0b",
  "faible": "#22c55e",
};

function ControlerPipeline() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
      {/* Left — Audit log */}
      <div className="flex-1 border border-[var(--pf-border)] p-4" style={{ background: "var(--pf-bg-card-2)" }}>
        <div className="mb-4 flex items-center gap-2">
          <Clock size={12} className="text-[#FF6A13]" />
          <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--pf-fg-dim)]">JOURNAL D'AUDIT</span>
        </div>
        <div className="flex flex-col gap-2">
          {AUDIT_LOG.map((entry, i) => (
            <div key={i} className="border border-[var(--pf-border)] px-3 py-2.5" style={{ background: "var(--pf-bg)", animation: `pf-fadeUp 0.35s ease ${i * 0.08}s both` }}>
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] text-[var(--pf-fg-dim)]">{entry.time}</span>
                    <span className="font-mono text-[9px] text-[var(--pf-fg-muted)]">{entry.user}</span>
                  </div>
                  <div className="mt-0.5 text-[11.5px] font-medium text-[var(--pf-fg)]">{entry.action}</div>
                  <div className="mt-0.5 font-mono text-[9px] text-[var(--pf-fg-dim)]">{entry.stores}</div>
                </div>
                <span className="mt-0.5 shrink-0 font-mono text-[10px] font-bold" style={{ color: RISK_COLOR[entry.risk] }}>
                  {entry.risk}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 border border-[var(--pf-border)] px-3 py-2" style={{ background: "var(--pf-bg)" }}>
          <CheckCircle2 size={11} className="text-[#FF6A13]" />
          <span className="font-mono text-[9.5px] text-[var(--pf-fg-dim)]">Requête enregistrée · immuable · RGPD</span>
        </div>
      </div>

      {/* Right — Access control matrix */}
      <div className="flex-1 border border-[var(--pf-border)] p-4" style={{ background: "var(--pf-bg-card-2)" }}>
        <div className="mb-4 flex items-center gap-2">
          <Lock size={12} className="text-[#FF6A13]" />
          <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--pf-fg-dim)]">CONTRÔLE D'ACCÈS</span>
        </div>
        <table className="w-full border-collapse text-[11px]">
          <thead>
            <tr>
              <th className="pb-2 text-left font-mono text-[9.5px] font-normal tracking-[0.12em] text-[var(--pf-fg-dim)]">STORE</th>
              {ROLES.map((r) => (
                <th key={r} className="pb-2 text-center font-mono text-[9.5px] font-normal tracking-[0.12em] text-[var(--pf-fg-dim)]">{r}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(STORE_PERMS).map(([store, perms]) => (
              <tr key={store}>
                <td className="border-t border-[var(--pf-border)] py-2.5 pr-3 text-[11.5px] font-medium text-[var(--pf-fg)]">{store}</td>
                {perms.map((allowed, j) => (
                  <td key={j} className="border-t border-[var(--pf-border)] py-2.5 text-center">
                    {allowed
                      ? <CheckCircle2 size={13} className="mx-auto text-[#FF6A13]" />
                      : <AlertTriangle size={13} className="mx-auto text-[var(--pf-fg-dim)] opacity-40" />
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 border border-[#FF6A13] px-3 py-2.5" style={{ background: "var(--pf-accent-bg)" }}>
          <div className="flex items-center gap-2">
            <ShieldCheck size={12} className="text-[#FF6A13]" />
            <span className="font-mono text-[9.5px] text-[#FF6A13]">ACCÈS TRACÉ · ZÉRO DONNÉE BRUTE EXPOSÉE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Shared helpers ───────────────────────────────────────────────────────────

function getStringList(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

const STEP_DURATION_MS = 7000;
const TICK_MS = 70;

function WorkflowSection() {
  const { t } = useTranslation();
  const rootRef     = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [resetKey,   setResetKey]   = useState(0);
  const [progress,   setProgress]   = useState(0);
  const [isVisible,  setIsVisible]  = useState(false);

  const createPipeline = getStringList(
    t("workflowTabs.create.pipeline", { returnObjects: true }),
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(Boolean(entry?.isIntersecting)),
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || document.hidden) return;
    const timeout = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, STEP_DURATION_MS);
    return () => clearTimeout(timeout);
  }, [activeStep, resetKey, isVisible]);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) =>
        Math.min(prev + 100 / (STEP_DURATION_MS / TICK_MS), 100),
      );
    }, TICK_MS);
    return () => clearInterval(interval);
  }, [activeStep, resetKey]);

  const selectStep = useCallback((index: number) => {
    setActiveStep(((index % 3) + 3) % 3);
    setResetKey((k) => k + 1);
  }, []);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start === null) return;
    const delta = (e.changedTouches[0]?.clientX ?? 0) - start;
    if (Math.abs(delta) >= 42)
      selectStep(delta < 0 ? activeStep + 1 : activeStep - 1);
  };

  const stepLabels = ["Connecter", "Interroger", "Contrôler"];

  const pipeline =
    createPipeline.length > 0
      ? createPipeline
      : ["Lire", "Préparer", "Indexer"];

  return (
    <div ref={rootRef} className="[overflow-anchor:none]">
      <h2
        className="m-0 max-w-[780px] font-bold leading-[1.06] tracking-[-0.02em] text-[var(--pf-fg)]"
        style={{ fontSize: "clamp(1.9rem, 4vw, 3.1rem)" }}
      >
        {t("workflow.title")}{" "}
        <span className="text-[#FF6A13]">{t("workflow.titleHighlight")}</span>
      </h2>
      <p className="mt-[18px] max-w-[560px] text-[1.05rem] text-[var(--pf-fg-muted)]">
        {t("workflow.subtitle")}
      </p>

      {/* Step row — mobile: 3 equal columns side by side, number on top, label below */}
      <div className="mb-7 mt-11 grid grid-cols-3 gap-2 md:hidden">
        {stepLabels.map((label, index) => (
          <button
            key={index}
            type="button"
            onClick={() => selectStep(index)}
            className="flex cursor-pointer flex-col items-center gap-2 border-none bg-transparent p-0"
          >
            <span
              className={cn(
                "flex h-10 w-10 items-center justify-center border font-mono text-[13px] font-semibold transition-all duration-300",
                activeStep === index ? "border-[#FF6A13] text-[#FF6A13]" : "text-[var(--pf-fg-muted)]",
              )}
              style={{
                borderColor: activeStep === index ? "#FF6A13" : activeStep > index ? "var(--pf-border-2)" : "var(--pf-border)",
                background:  activeStep === index ? "var(--pf-bg-active)" : "var(--pf-bg-dim)",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={cn("text-center text-xs font-semibold leading-tight", activeStep === index ? "text-[var(--pf-fg)]" : "text-[var(--pf-fg-dim)]")}>
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* Step row — desktop: horizontal with connectors */}
      <div className="mb-7 mt-11 hidden items-center gap-y-3 md:flex md:flex-wrap">
        {stepLabels.map((label, index) => (
          <div key={index} className="flex items-center">
            <button
              type="button"
              onClick={() => selectStep(index)}
              className="flex cursor-pointer items-center gap-3 border-none bg-transparent p-0"
            >
              <span
                className={cn(
                  "flex h-10 w-10 items-center justify-center border font-mono text-[13px] font-semibold transition-all duration-300",
                  activeStep === index ? "border-[#FF6A13] text-[#FF6A13]" : "text-[var(--pf-fg-muted)]",
                )}
                style={{
                  borderColor: activeStep === index ? "#FF6A13" : activeStep > index ? "var(--pf-border-2)" : "var(--pf-border)",
                  background:  activeStep === index ? "var(--pf-bg-active)" : "var(--pf-bg-dim)",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={cn("text-sm font-semibold", activeStep === index ? "text-[var(--pf-fg)]" : "text-[var(--pf-fg-dim)]")}>
                {label}
              </span>
            </button>
            {index < 2 && (
              <div className="relative mx-4 overflow-hidden" style={{ width: "clamp(24px, 5vw, 72px)", height: "1px", background: "var(--pf-border)" }}>
                <div
                  className="absolute inset-y-0 left-0 bg-[#FF6A13]"
                  style={{ width: index < activeStep ? "100%" : index === activeStep ? `${progress}%` : "0%", transition: "width 0.07s linear" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Content panel */}
      <div
        className="min-h-[380px] touch-pan-y border border-[var(--pf-border)]"
        style={{ background: "var(--pf-bg-card)" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Step 1 — CONNECTER */}
        {activeStep === 0 && (
          <div style={{ padding: "clamp(24px, 3vw, 36px)", animation: "pf-fadeUp 0.4s ease" }}>
            <div className="mb-5 font-mono text-[11px] tracking-[0.2em] text-[#FF6A13]">01 / CONNECTER</div>
            <h3 className="m-0 font-bold text-[var(--pf-fg)]" style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)" }}>
              {t("workflowTabs.create.heading", { defaultValue: "Préparez uniquement les sources validées" })}
            </h3>
            <p className="mb-7 mt-2.5 max-w-[560px] text-[0.92rem] text-[var(--pf-fg-muted)]">
              {t("workflowTabs.create.subtitle", { defaultValue: "Dossiers KYC, rapports de due diligence et listes de sanctions — indexés dans des stores dédiés." })}
            </p>
            <ConnecterPipeline pipeline={pipeline} />
          </div>
        )}

        {/* Step 2 — INTERROGER */}
        {activeStep === 1 && (
          <div style={{ padding: "clamp(24px, 3vw, 36px)", animation: "pf-fadeUp 0.4s ease" }}>
            <div className="mb-5 font-mono text-[11px] tracking-[0.2em] text-[#FF6A13]">02 / INTERROGER</div>
            <h3 className="m-0 font-bold text-[var(--pf-fg)]" style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)" }}>
              {t("workflowTabs.unify.heading", { defaultValue: "Une question, une réponse sourcée et traçable" })}
            </h3>
            <p className="mb-7 mt-2.5 max-w-[560px] text-[0.92rem] text-[var(--pf-fg-muted)]">
              {t("workflowTabs.unify.subtitle", { defaultValue: "L'agent distribue la requête sur vos stores KYC et retourne un résultat cité, avec sa source exacte." })}
            </p>
            <InterrogerPipeline />
          </div>
        )}

        {/* Step 3 — CONTRÔLER */}
        {activeStep === 2 && (
          <div style={{ padding: "clamp(24px, 3vw, 36px)", animation: "pf-fadeUp 0.4s ease" }}>
            <div className="mb-5 font-mono text-[11px] tracking-[0.2em] text-[#FF6A13]">03 / CONTRÔLER</div>
            <h3 className="m-0 font-bold text-[var(--pf-fg)]" style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)" }}>
              {t("workflowTabs.chat.assistantName", { defaultValue: "Chaque accès est enregistré et gouverné" })}
            </h3>
            <p className="mb-7 mt-2.5 max-w-[560px] text-[0.92rem] text-[var(--pf-fg-muted)]">
              {t("workflowTabs.chat.botWelcome", { defaultValue: "Journal d'audit immuable, contrôle d'accès par rôle, zéro donnée brute exposée." })}
            </p>
            <ControlerPipeline />
          </div>
        )}
      </div>
    </div>
  );
}

export { WorkflowSection };
