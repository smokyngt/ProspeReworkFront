"use client";

import {
  type TouchEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Database, FileText, FolderOpen, Image, MessageSquare, Scale, Search, ShieldCheck, Users, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

// ─── Step 1 — CONNECTER: horizontal pipeline ─────────────────────────────────

function PipelineArrow() {
  return (
    <div className="flex shrink-0 flex-col items-center justify-center px-3 py-4 md:py-0">
      <span className="font-mono text-xl font-bold text-[#FF6A13] opacity-60 md:text-2xl">
        →
      </span>
    </div>
  );
}

const SOURCES = ["Contrats signés", "Dossiers clients", "Procédures internes"];
const STORES_READY = [
  { label: "Store Juridique", service: "Contrats & actes", Icon: Scale },
  { label: "Store Conformité", service: "KYC & AML", Icon: ShieldCheck },
  { label: "Store RH", service: "Procédures internes", Icon: Users },
];

function ConnecterPipeline({ pipeline }: { pipeline: string[] }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
      {/* Col 1 — Sources */}
      <div
        className="flex-1 rounded-none border border-[var(--pf-border)] p-4"
        style={{ background: "var(--pf-bg-card-2)" }}
      >
        <div className="mb-3 font-mono text-[10px] tracking-[0.18em] text-[var(--pf-fg-dim)]">
          SOURCES
        </div>
        <div className="flex flex-col gap-2">
          {SOURCES.map((src) => (
            <div
              key={src}
              className="flex items-center gap-2.5 border border-[var(--pf-border)] px-3 py-2.5"
              style={{ background: "var(--pf-bg)" }}
            >
              <span className="h-[7px] w-[7px] shrink-0 bg-[#FF6A13]" />
              <span className="text-[12px] font-medium text-[var(--pf-fg)]">{src}</span>
              <span className="ml-auto font-mono text-[9px] text-[var(--pf-fg-dim)]">validé</span>
            </div>
          ))}
        </div>
      </div>

      <PipelineArrow />

      {/* Col 2 — Prosperify connector */}
      <div
        className="flex flex-1 flex-col items-center justify-center gap-3 border border-[#FF6A13] p-4"
        style={{ background: "var(--pf-accent-bg)" }}
      >
        <div
          className="flex h-12 w-12 items-center justify-center bg-[#FF6A13] font-mono text-sm font-bold text-[#080808]"
        >
          DB
        </div>
        <div className="text-center">
          <div className="text-sm font-bold text-[var(--pf-fg)]">
            Prosperify
          </div>
          <div className="mt-1 text-[11px] text-[var(--pf-fg-muted)]">
            Indexation & préparation
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-1.5">
          {(pipeline.length > 0 ? pipeline : ["Lire", "Préparer", "Indexer"]).slice(0, 3).map((p) => (
            <span
              key={p}
              className="px-2 py-1 font-mono text-[10px] text-[#FF6A13]"
              style={{ border: "1px solid var(--pf-accent-dim-border)" }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      <PipelineArrow />

      {/* Col 3 — Stores prêts */}
      <div
        className="flex-1 border border-[var(--pf-border)] p-4"
        style={{ background: "var(--pf-bg-card-2)" }}
      >
        <div className="mb-3 font-mono text-[10px] tracking-[0.18em] text-[var(--pf-fg-dim)]">
          STORES PRÊTS
        </div>
        <div className="flex flex-col gap-2">
          {STORES_READY.map(({ label, service, Icon: StoreIcon }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 border border-[var(--pf-border)] px-3 py-2.5"
              style={{ background: "var(--pf-bg)" }}
            >
              <StoreIcon size={13} className="shrink-0 text-[#FF6A13]" />
              <div className="min-w-0">
                <div className="text-[12px] font-semibold text-[var(--pf-fg)]">
                  {label}
                </div>
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

// ─── Step 2 — CADRER: Agent search pipeline ───────────────────────────────────

const INDEX_TYPES = [
  { id: "Query", label: "Query", Icon: Search },
  { id: "Mixedbread", label: "Mixedbread", Icon: Zap },
  { id: "Index", label: "Index", Icon: Database },
  { id: "Slack", label: "Slack", Icon: MessageSquare },
  { id: "Drive", label: "Drive", Icon: FolderOpen },
  { id: "PDF", label: "PDF", Icon: FileText },
  { id: "Images", label: "Images", Icon: Image },
];

const PHASE_DURATION_MS = 1400;
const RESULTS_BY_PHASE = [0, 0, 87, 154, 231, 295, 295, 295];

function CadrerPipeline() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setPhase((p) => (p + 1) % 8),
      PHASE_DURATION_MS,
    );
    return () => clearInterval(id);
  }, []);

  const results = RESULTS_BY_PHASE[phase] ?? 0;
  const activeIndex = phase >= 2 ? phase - 2 : -1;

  const agentStatus =
    phase === 0
      ? "Initialisation…"
      : phase === 1
        ? "Préparation de la requête"
        : phase === 7
          ? "Recherche terminée ✓"
          : `Interrogation : ${INDEX_TYPES[activeIndex]?.label ?? ""}`;

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
      {/* Col 1 — Query */}
      <div
        className="flex flex-1 flex-col justify-center gap-3 border border-[var(--pf-border)] p-4"
        style={{ background: "var(--pf-bg-card-2)" }}
      >
        <div className="mb-1 font-mono text-[10px] tracking-[0.18em] text-[var(--pf-fg-dim)]">
          REQUÊTE
        </div>
        <div
          className="border border-[var(--pf-border)] px-3 py-2.5 text-[13px] text-[var(--pf-fg)]"
          style={{ background: "var(--pf-bg)" }}
        >
          Quelle est la durée du contrat Verdi ?
        </div>
        <div
          className="flex items-center gap-2 border border-[#FF6A13] px-3 py-2"
          style={{ background: "var(--pf-accent-bg)" }}
        >
          <span className="h-1.5 w-1.5 animate-pulse bg-[#FF6A13]" />
          <span className="font-mono text-[10px] text-[#FF6A13]">ENVOI EN COURS</span>
        </div>
      </div>

      <PipelineArrow />

      {/* Col 2 — Prosperify Agent */}
      <div
        className="flex flex-1 flex-col items-center justify-center gap-3 border border-[#FF6A13] p-4"
        style={{ background: "var(--pf-accent-bg)" }}
      >
        <div
          className="flex h-12 w-12 items-center justify-center bg-[#FF6A13] font-mono text-sm font-bold text-[#080808]"
          style={{ animation: "pf-pulse 2.2s ease-in-out infinite" }}
        >
          PA
        </div>
        <div className="text-center">
          <div className="text-sm font-bold text-[var(--pf-fg)]">Prosperify Agent</div>
          <div className="mt-0.5 min-h-[16px] text-[11px] text-[var(--pf-fg-muted)]">
            {agentStatus}
          </div>
        </div>
        {/* Result counter */}
        <div
          key={results}
          className="text-center"
          style={{ animation: results > 0 ? "pf-counter-pop 0.4s ease" : "none" }}
        >
          <div className="font-mono text-[1.6rem] font-bold leading-none text-[#FF6A13]">
            {results}
          </div>
          <div className="font-mono text-[9px] tracking-[0.14em] text-[var(--pf-fg-dim)]">
            RÉSULTATS
          </div>
        </div>
      </div>

      <PipelineArrow />

      {/* Col 3 — Index types grid */}
      <div
        className="flex-1 border border-[var(--pf-border)] p-4"
        style={{ background: "var(--pf-bg-card-2)" }}
      >
        <div className="mb-3 font-mono text-[10px] tracking-[0.18em] text-[var(--pf-fg-dim)]">
          STORES / INDEX
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
            gap: "6px",
          }}
        >
          {INDEX_TYPES.map(({ id, label, Icon }, i) => {
            const isActive = i === activeIndex;
            const isDone = phase >= 2 && i < activeIndex;

            return (
              <div
                key={id}
                className="relative overflow-hidden border px-2 py-2.5 text-center transition-all duration-300"
                style={{
                  borderColor: isActive ? "#FF6A13" : isDone ? "var(--pf-border-2)" : "var(--pf-border)",
                  background: isActive ? "var(--pf-accent-bg)" : "var(--pf-bg)",
                }}
              >
                {/* Scan line when active */}
                {isActive && (
                  <div
                    className="pointer-events-none absolute inset-x-0"
                    style={{
                      height: "2px",
                      background: "linear-gradient(to right, transparent, #FF6A13 40%, #FF6A13 60%, transparent)",
                      animation: `pf-store-scan ${PHASE_DURATION_MS * 0.7}ms linear infinite`,
                      top: 0,
                    }}
                  />
                )}
                <Icon
                  className="mx-auto mb-1.5"
                  size={15}
                  style={{
                    color: isActive ? "#FF6A13" : isDone ? "var(--pf-fg-muted)" : "var(--pf-fg-dim)",
                  }}
                />
                <div
                  className="text-[10px] font-semibold leading-tight transition-colors duration-300"
                  style={{
                    color: isActive ? "#FF6A13" : isDone ? "var(--pf-fg-muted)" : "var(--pf-fg-dim)",
                  }}
                >
                  {label}
                </div>
                {isDone && (
                  <div className="mt-0.5 font-mono text-[9px] text-[#FF6A13]">✓</div>
                )}
                {isActive && (
                  <div
                    className="mt-1 h-[3px] w-full overflow-hidden"
                    style={{ background: "var(--pf-border)" }}
                  >
                    <div
                      className="h-full bg-[#FF6A13]"
                      style={{ width: "60%", transition: "width 0.9s ease" }}
                    />
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
  const rootRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const createSources = getStringList(
    t("workflowTabs.create.sources", { returnObjects: true }),
  );
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

  const stepLabels = [
    t("workflowTabs.create.title", { defaultValue: "Connecter" }),
    t("workflowTabs.unify.title", { defaultValue: "Cadrer" }),
    t("workflowTabs.chat.title", { defaultValue: "Interroger" }),
  ];

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

      {/* Step row */}
      <div className="mb-7 mt-11 flex flex-wrap items-center gap-y-3">
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
                  activeStep === index
                    ? "border-[#FF6A13] text-[#FF6A13]"
                    : "text-[var(--pf-fg-muted)]",
                )}
                style={{
                  borderColor: activeStep === index
                    ? "#FF6A13"
                    : activeStep > index
                      ? "var(--pf-border-2)"
                      : "var(--pf-border)",
                  background: activeStep === index
                    ? "var(--pf-bg-active)"
                    : "var(--pf-bg-dim)",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "text-sm font-semibold",
                  activeStep === index ? "text-[var(--pf-fg)]" : "text-[var(--pf-fg-dim)]",
                )}
              >
                {label}
              </span>
            </button>
            {index < 2 && (
              <div
                className="relative mx-4 overflow-hidden"
                style={{
                  width: "clamp(24px, 5vw, 72px)",
                  height: "1px",
                  background: "var(--pf-border)",
                }}
              >
                <div
                  className="absolute inset-y-0 left-0 bg-[#FF6A13]"
                  style={{
                    width:
                      index < activeStep
                        ? "100%"
                        : index === activeStep
                          ? `${progress}%`
                          : "0%",
                    transition: "width 0.07s linear",
                  }}
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
        {/* Step 1 — CONNECTER (horizontal pipeline) */}
        {activeStep === 0 && (
          <div
            style={{
              padding: "clamp(24px, 3vw, 36px)",
              animation: "pf-fadeUp 0.4s ease",
            }}
          >
            <div className="mb-5 font-mono text-[11px] tracking-[0.2em] text-[#FF6A13]">
              01 / CONNECTER
            </div>
            <h3
              className="m-0 font-bold text-[var(--pf-fg)]"
              style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)" }}
            >
              {t("workflowTabs.create.heading", {
                defaultValue: "Préparez uniquement les sources validées",
              })}
            </h3>
            <p className="mb-7 mt-2.5 max-w-[560px] text-[0.92rem] text-[var(--pf-fg-muted)]">
              {t("workflowTabs.create.subtitle", {
                defaultValue:
                  "Les documents utiles sont préparés et rendus interrogeables dans un corpus maîtrisé.",
              })}
            </p>
            <ConnecterPipeline pipeline={pipeline} />
          </div>
        )}

        {/* Step 2 — CADRER (Agent search pipeline) */}
        {activeStep === 1 && (
          <div
            style={{
              padding: "clamp(24px, 3vw, 36px)",
              animation: "pf-fadeUp 0.4s ease",
            }}
          >
            <div className="mb-5 font-mono text-[11px] tracking-[0.2em] text-[#FF6A13]">
              02 / CADRER
            </div>
            <h3
              className="m-0 font-bold text-[var(--pf-fg)]"
              style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)" }}
            >
              {t("workflowTabs.unify.heading", {
                defaultValue: "Le Prosperify Agent interroge vos stores",
              })}
            </h3>
            <p className="mb-7 mt-2.5 max-w-[560px] text-[0.92rem] text-[var(--pf-fg-muted)]">
              {t("workflowTabs.unify.subtitle", {
                defaultValue:
                  "La requête est distribuée sur les index spécialisés — chaque source répond dans son périmètre.",
              })}
            </p>
            <CadrerPipeline />
          </div>
        )}

        {/* Step 3 — INTERROGER (chat) */}
        {activeStep === 2 && (
          <div
            style={{
              padding: "clamp(24px, 3vw, 44px)",
              animation: "pf-fadeUp 0.4s ease",
            }}
          >
            <div className="mb-4 font-mono text-[11px] tracking-[0.2em] text-[#FF6A13]">
              03 / INTERROGER
            </div>
            <h3
              className="m-0 font-bold text-[var(--pf-fg)]"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)" }}
            >
              {t("workflowTabs.chat.assistantName", {
                defaultValue: "Réponse contrôlée",
              })}
            </h3>
            <p className="mb-7 mt-3.5 max-w-[520px] text-[0.98rem] text-[var(--pf-fg-muted)]">
              {t("workflowTabs.chat.botWelcome", {
                defaultValue:
                  "Chaque réponse reste reliée aux passages utilisés.",
              })}
            </p>
            <div className="flex flex-col gap-3.5">
              <div className="max-w-[440px] self-end bg-[#FF6A13] px-4 py-3.5 text-sm font-semibold text-[#080808]">
                {t("workflowTabs.chat.userQuestion", {
                  defaultValue: "Quelle est la durée du contrat Verdi ?",
                })}
              </div>
              <div
                className="max-w-[620px] border border-[var(--pf-border)] p-[18px]"
                style={{ background: "var(--pf-bg-card-2)" }}
              >
                <p className="m-0 text-[15px] leading-[1.6] text-[var(--pf-fg)]">
                  {t("workflowTabs.chat.answer.prefix", {
                    defaultValue: "Source",
                  })}{" "}
                  <strong>« Contrat Verdi.pdf »</strong>
                  {", page 10, "}
                  {t("workflowTabs.chat.answer.middle", {
                    defaultValue: "durée initiale :",
                  })}{" "}
                  <span
                    className="font-semibold text-[var(--pf-fg)]"
                    style={{
                      background: "var(--pf-accent-highlight)",
                      padding: "1px 5px",
                    }}
                  >
                    {t("workflowTabs.chat.answer.highlight", {
                      defaultValue: "trois ans",
                    })}
                  </span>
                  {". "}
                  {t("workflowTabs.chat.answer.suffix", {
                    defaultValue: "Le renouvellement exige un accord écrit.",
                  })}
                </p>
                <div className="mt-4">
                  <div className="mb-2 font-mono text-[10px] tracking-[0.2em] text-[#FF6A13]">
                    {t("workflowTabs.chat.sourcesLabel", {
                      defaultValue: "SOURCES UTILISÉES",
                    })}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-[var(--pf-border)] px-2 py-1 font-mono text-[10px] text-[var(--pf-fg-muted)]">
                      Verdi.pdf · p.10
                    </span>
                    <span className="border border-[var(--pf-border)] px-2 py-1 font-mono text-[10px] text-[var(--pf-fg-muted)]">
                      Clause 4.1
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="flex max-w-[620px] items-center gap-3 border px-3.5 py-3"
                style={{
                  borderColor: "var(--pf-border-2)",
                  background: "var(--pf-bg-card-2)",
                }}
              >
                <span className="flex-1 text-[13px] text-[var(--pf-fg-dim)]">
                  {t("workflowTabs.chat.inputPlaceholder", {
                    defaultValue: "Demander une vérification…",
                  })}
                </span>
                <span className="flex h-[30px] w-[30px] items-center justify-center bg-[#FF6A13] font-bold text-[#080808]">
                  →
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { WorkflowSection };
