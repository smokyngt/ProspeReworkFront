"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const ACCENT = "#FF6A13";

// ─── Connector between nodes ───────────────────────────────────────────────────

function FlowArrow({ delay }: { delay: number }) {
  return (
    <div className="flex shrink-0 items-center justify-center px-1 py-2 md:flex-col md:px-3 md:py-0">
      <div
        className="relative overflow-hidden"
        style={{ width: "clamp(20px, 3vw, 34px)", height: "1px", background: "var(--pf-border)" }}
      >
        <span
          className="absolute top-1/2 h-[5px] w-4 -translate-y-1/2"
          style={{
            background: `linear-gradient(90deg, transparent, ${ACCENT})`,
            animation: `pf-data-travel-h 2.4s linear ${delay}s infinite`,
          }}
        />
      </div>
      <span className="font-mono text-[13px] text-[var(--pf-border-2)] md:ml-[3px] max-md:rotate-90">→</span>
    </div>
  );
}

// ─── Node shell ─────────────────────────────────────────────────────────────────

function FlowNode({
  n,
  tag,
  icon,
  title,
  desc,
}: {
  n: string;
  tag: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="group flex flex-1 flex-col gap-3.5 border-t-2 border-transparent px-4 py-5 transition-colors duration-300 hover:border-t-[#FF6A13]"
      style={{ background: "var(--pf-bg-card)", border: "1px solid var(--pf-border)", borderTopWidth: "2px", borderTopColor: "transparent" }}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[13px] font-semibold text-[#FF6A13]">{n}</span>
        <span className="font-mono text-[10px] tracking-[0.08em] text-[var(--pf-fg-dim)]">{tag}</span>
      </div>
      <div className="flex h-[70px] items-center justify-center">{icon}</div>
      <div>
        <h4 className="m-0 text-[14px] font-bold text-[var(--pf-fg)]">{title}</h4>
        <p className="m-0 mt-2 text-[12px] leading-[1.5] text-[var(--pf-fg-muted)]">{desc}</p>
      </div>
    </div>
  );
}

// ─── Pictograms — indexation phase ─────────────────────────────────────────────

function DocDropIcon() {
  return (
    <div
      className="relative w-[42px]"
      style={{ height: 52, border: "1px solid var(--pf-border-2)", background: "var(--pf-bg)", animation: "pf-doc-bob 3s ease-in-out infinite" }}
    >
      <div className="absolute right-0 top-0 h-3 w-3" style={{ background: "var(--pf-bg-card)", borderLeft: "1px solid var(--pf-border-2)", borderBottom: "1px solid var(--pf-border-2)" }} />
      <div className="absolute left-2 top-2.5 h-0.5 w-4" style={{ background: ACCENT }} />
      {[16, 23, 30].map((top, i) => (
        <div key={top} className="absolute left-2" style={{ top, right: i === 1 ? 12 : 8, height: 2, background: "var(--pf-border-2)" }} />
      ))}
    </div>
  );
}

function DocReadIcon() {
  return (
    <div className="relative flex w-[42px] flex-col gap-1 overflow-hidden p-1.5" style={{ height: 52, border: "1px solid var(--pf-border-2)", background: "var(--pf-bg)" }}>
      <div className="h-2" style={{ background: "rgba(255,106,19,0.5)" }} />
      <div className="grid h-3 grid-cols-2" style={{ border: "1px solid rgba(255,106,19,0.35)" }}>
        <span style={{ borderRight: "1px solid rgba(255,106,19,0.35)", borderBottom: "1px solid rgba(255,106,19,0.35)" }} />
        <span style={{ borderBottom: "1px solid rgba(255,106,19,0.35)" }} />
      </div>
      <div className="flex-1" style={{ background: "var(--pf-bg-card-2)", border: "1px solid var(--pf-border)" }} />
      <div
        className="pointer-events-none absolute inset-x-0"
        style={{ height: 14, background: `linear-gradient(180deg, transparent, ${ACCENT}66, transparent)`, animation: "pf-store-scan 2.6s linear infinite" }}
      />
    </div>
  );
}

function ChunkIcon() {
  return (
    <div className="flex w-[58px] max-w-full flex-col gap-1.5">
      {[100, 84, 100, 70].map((w, i) => (
        <div
          key={i}
          className="h-2.5"
          style={{
            width: `${w}%`,
            background: "var(--pf-bg)",
            border: "1px solid var(--pf-border-2)",
            borderLeft: `2px solid ${ACCENT}`,
            transformOrigin: "left",
            animation: `pf-integration-appear 0.45s ease ${i * 0.12}s both`,
          }}
        />
      ))}
    </div>
  );
}

const EMBED_PATTERN = [
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0],
  [0, 0, 1, 0, 0],
];

function EmbedIcon() {
  return (
    <div className="grid gap-1.5" style={{ gridTemplateColumns: "repeat(5, 7px)" }}>
      {EMBED_PATTERN.flat().map((on, i) => (
        <span
          key={i}
          className="h-[7px] w-[7px]"
          style={{
            background: on ? ACCENT : "var(--pf-border-2)",
            animation: on ? `pf-dot-blink 1.8s ease-in-out ${(i % 5) * 0.15}s infinite` : undefined,
          }}
        />
      ))}
    </div>
  );
}

function EncryptedIcon() {
  return (
    <div className="relative p-2" style={{ border: `1px solid ${ACCENT}`, background: "var(--pf-accent-bg)" }}>
      <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(4, 7px)" }}>
        {EMBED_PATTERN.flat().slice(0, 12).map((on, i) => (
          <span key={i} className="h-[7px] w-[7px]" style={{ background: on ? ACCENT : "rgba(255,106,19,0.18)" }} />
        ))}
      </div>
      <div className="absolute -right-2.5 -top-3 flex flex-col items-center" style={{ animation: "pf-source-ping 2.2s ease-in-out infinite" }}>
        <span className="h-2 w-[11px] rounded-t-[6px]" style={{ border: `2px solid ${ACCENT}`, borderBottom: "none" }} />
        <span className="h-[11px] w-[15px]" style={{ background: ACCENT }} />
      </div>
    </div>
  );
}

// ─── Pictograms — interrogation phase ──────────────────────────────────────────

function QuestionIcon({ text }: { text: string }) {
  return (
    <div
      className="w-full max-w-[130px] px-2.5 py-2 text-[11px] font-semibold leading-[1.35]"
      style={{ background: ACCENT, color: "#080808", animation: "pf-integration-appear 0.4s ease" }}
    >
      {text}
    </div>
  );
}

function IntentIcon() {
  return (
    <div className="flex w-[72px] flex-col gap-1.5">
      <div className="h-3" style={{ background: "var(--pf-bg)", border: "1px solid var(--pf-border-2)", borderLeft: `2px solid ${ACCENT}` }} />
      <div className="relative flex flex-col gap-1 pl-3">
        <span className="absolute bottom-1.5 left-1 top-0 w-px" style={{ background: "var(--pf-border-2)" }} />
        {[88, 70, 80].map((w, i) => (
          <div
            key={i}
            className="h-[9px]"
            style={{
              width: `${w}%`,
              background: "var(--pf-bg)",
              border: "1px solid var(--pf-border)",
              transformOrigin: "left",
              animation: `pf-integration-appear 0.4s ease ${0.2 + i * 0.15}s both`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function HybridSearchIcon() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="grid gap-1.5" style={{ gridTemplateColumns: "repeat(6, 7px)" }}>
        {[0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0].map((on, i) => (
          <span
            key={i}
            className="h-[7px] w-[7px]"
            style={{
              background: on ? ACCENT : "var(--pf-border-2)",
              animation: on ? `pf-dot-blink 1.6s ease-in-out ${(i % 4) * 0.2}s infinite` : undefined,
            }}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-1.5">
        <span className="font-mono text-[9px]" style={{ color: ACCENT, border: "1px solid rgba(255,106,19,0.35)", padding: "2px 6px", animation: "pf-pulse 2.4s ease-in-out infinite" }}>sens</span>
        <span className="font-mono text-[9px] text-[var(--pf-fg-muted)]" style={{ border: "1px solid var(--pf-border)", padding: "2px 6px", animation: "pf-pulse 2.4s ease-in-out 1.2s infinite" }}>mots-clés</span>
      </div>
    </div>
  );
}

function VerifyIcon() {
  return (
    <div className="relative flex w-12 flex-col gap-1.5 p-1.5" style={{ height: 52, border: "1px solid var(--pf-border-2)", background: "var(--pf-bg)" }}>
      <div className="h-[3px]" style={{ background: "var(--pf-border-2)" }} />
      <div className="h-2" style={{ background: "rgba(255,106,19,0.35)" }} />
      <div className="h-[3px]" style={{ background: "var(--pf-border-2)" }} />
      <div className="h-[3px] w-[70%]" style={{ background: "var(--pf-border-2)" }} />
      <span
        className="absolute -bottom-1.5 -right-1.5 flex h-[19px] w-[19px] items-center justify-center"
        style={{ background: ACCENT, animation: "pf-counter-pop 2s ease-in-out 0.5s infinite" }}
      >
        <span className="h-[9px] w-[5px] -translate-y-0.5 rotate-45" style={{ borderRight: "2px solid #080808", borderBottom: "2px solid #080808" }} />
      </span>
    </div>
  );
}

function AnswerIcon() {
  return (
    <div className="w-full max-w-[150px] px-2.5 py-2" style={{ border: "1px solid var(--pf-border)", background: "var(--pf-bg)", animation: "pf-integration-appear 0.4s ease" }}>
      <div className="flex flex-wrap items-center gap-1 text-[9px] text-[var(--pf-fg-muted)]">
        <span>durée :</span>
        <span className="font-semibold" style={{ background: "rgba(255,106,19,0.2)", color: "var(--pf-fg)", padding: "1px 4px" }}>trois ans</span>
      </div>
      <div className="my-1.5 h-px" style={{ background: "var(--pf-border)" }} />
      <div className="flex gap-1">
        <span className="font-mono text-[8px] text-[var(--pf-fg-muted)]" style={{ border: "1px solid var(--pf-border)", padding: "2px 5px" }}>p.10</span>
        <span className="font-mono text-[8px] text-[var(--pf-fg-muted)]" style={{ border: "1px solid var(--pf-border)", padding: "2px 5px" }}>Clause 4.1</span>
      </div>
    </div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────────

type Phase = "index" | "query";

export function ArchitectureDemo() {
  const { t } = useTranslation();
  const [phase, setPhase] = useState<Phase>("index");

  const tt = (key: string) => t(`architecture.arch.${key}`);

  const indexNodes = [
    { tag: tt("index.deposit.tag"), title: tt("index.deposit.title"), desc: tt("index.deposit.desc"), icon: <DocDropIcon /> },
    { tag: tt("index.read.tag"), title: tt("index.read.title"), desc: tt("index.read.desc"), icon: <DocReadIcon /> },
    { tag: tt("index.chunk.tag"), title: tt("index.chunk.title"), desc: tt("index.chunk.desc"), icon: <ChunkIcon /> },
    { tag: tt("index.embed.tag"), title: tt("index.embed.title"), desc: tt("index.embed.desc"), icon: <EmbedIcon /> },
    { tag: tt("index.store.tag"), title: tt("index.store.title"), desc: tt("index.store.desc"), icon: <EncryptedIcon /> },
  ];

  const questionText = tt("query.question.bubble");
  const queryNodes = [
    { tag: tt("query.question.tag"), title: tt("query.question.title"), desc: tt("query.question.desc"), icon: <QuestionIcon text={questionText} /> },
    { tag: tt("query.intent.tag"), title: tt("query.intent.title"), desc: tt("query.intent.desc"), icon: <IntentIcon /> },
    { tag: tt("query.search.tag"), title: tt("query.search.title"), desc: tt("query.search.desc"), icon: <HybridSearchIcon /> },
    { tag: tt("query.verify.tag"), title: tt("query.verify.title"), desc: tt("query.verify.desc"), icon: <VerifyIcon /> },
    { tag: tt("query.answer.tag"), title: tt("query.answer.title"), desc: tt("query.answer.desc"), icon: <AnswerIcon /> },
  ];

  const nodes = phase === "index" ? indexNodes : queryNodes;
  const phaseDesc = phase === "index" ? tt("phaseDesc.index") : tt("phaseDesc.query");

  return (
    <div>
      {/* Phase toggle — sticks to the top while scrolling through this section only */}
      <div
        className="sticky top-16 z-30 -mx-5 flex flex-wrap gap-2.5 border-b border-[var(--pf-border)] px-5 py-2 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
        style={{ background: "var(--pf-nav-bg)" }}
      >
        <button
          type="button"
          onClick={() => setPhase("index")}
          className="flex flex-1 flex-wrap items-center gap-x-2.5 gap-y-1 px-4 py-3 text-left transition-all duration-200 sm:flex-none"
          style={{
            border: `1px solid ${phase === "index" ? ACCENT : "var(--pf-border)"}`,
            background: phase === "index" ? "var(--pf-bg-active)" : "transparent",
            color: phase === "index" ? "var(--pf-fg)" : "var(--pf-fg-muted)",
          }}
        >
          <span className="font-mono text-[11px] font-semibold">01</span>
          <span className="text-sm font-bold">{tt("tabs.index.label")}</span>
          <span className="text-xs opacity-70">{tt("tabs.index.sub")}</span>
        </button>
        <button
          type="button"
          onClick={() => setPhase("query")}
          className="flex flex-1 flex-wrap items-center gap-x-2.5 gap-y-1 px-4 py-3 text-left transition-all duration-200 sm:flex-none"
          style={{
            border: `1px solid ${phase === "query" ? ACCENT : "var(--pf-border)"}`,
            background: phase === "query" ? "var(--pf-bg-active)" : "transparent",
            color: phase === "query" ? "var(--pf-fg)" : "var(--pf-fg-muted)",
          }}
        >
          <span className="font-mono text-[11px] font-semibold">02</span>
          <span className="text-sm font-bold">{tt("tabs.query.label")}</span>
          <span className="text-xs opacity-70">{tt("tabs.query.sub")}</span>
        </button>
      </div>
      <p className="mt-4 max-w-[680px] text-[0.98rem] leading-[1.6] text-[var(--pf-fg-muted)]">{phaseDesc}</p>

      {/* Flow */}
      <div key={phase} className="mt-7 flex flex-col md:flex-row md:items-stretch">
        {nodes.map((node, i) => (
          <div
            key={node.tag}
            className="flex flex-col md:flex-row md:flex-1 md:items-stretch"
            style={{ animation: `pf-fadeUp 0.5s ease ${i * 0.09}s both` }}
          >
            <FlowNode n={String(i + 1).padStart(2, "0")} tag={node.tag} icon={node.icon} title={node.title} desc={node.desc} />
            {i < nodes.length - 1 && <FlowArrow delay={i * 0.3} />}
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2.5 font-mono text-[11px] tracking-[0.1em] text-[var(--pf-fg-dim)]">
        <span className="h-1.5 w-1.5" style={{ background: ACCENT }} />
        {t("architecture.footerNote")}
      </div>
    </div>
  );
}
