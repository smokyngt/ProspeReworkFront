"use client";

import { type TouchEvent, useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

const featureIds = [
  "precision",
  "coverage",
  "performance",
  "governance",
  "orchestration",
  "differentiation",
] as const;

const AUTO_SLIDE_DELAY_MS = 6500;

export default function ProsperifyFeatures() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(Boolean(entry?.isIntersecting)),
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isPaused || document.hidden) return;
    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % featureIds.length);
    }, AUTO_SLIDE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [activeTab, resetKey, isVisible, isPaused]);

  const selectSlide = useCallback((index: number, userInitiated = false) => {
    const next =
      ((index % featureIds.length) + featureIds.length) % featureIds.length;
    setActiveTab(next);
    if (userInitiated) setResetKey((k) => k + 1);
  }, []);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    setIsPaused(true);
  };
  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start !== null) {
      const delta = (e.changedTouches[0]?.clientX ?? 0) - start;
      if (Math.abs(delta) >= 42)
        selectSlide(delta < 0 ? activeTab + 1 : activeTab - 1, true);
    }
    window.setTimeout(() => setIsPaused(false), 300);
  };

  const currentId = featureIds[activeTab];

  return (
    <div ref={rootRef} className="[overflow-anchor:none]">
      <h2
        className="m-0 max-w-[820px] font-bold leading-[1.06] tracking-[-0.02em] text-[var(--pf-fg)]"
        style={{ fontSize: "clamp(1.9rem, 4vw, 3.1rem)" }}
      >
        {t("features.title")}{" "}
        <span className="text-[#FF6A13]">{t("features.titleHighlight")}</span>
      </h2>

      {/* Sidebar + detail grid */}
      <div
        className="mt-11 touch-pan-y border border-[var(--pf-border)]"
        style={{
          display: "grid",
          gridTemplateColumns: "clamp(180px, 30%, 320px) 1fr",
          gap: "1px",
          background: "var(--pf-border)",
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Sidebar */}
        <div
          style={{ background: "var(--pf-bg-card)" }}
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
        >
          {featureIds.map((id, i) => (
            <button
              key={id}
              type="button"
              onClick={() => selectSlide(i, true)}
              className={cn(
                "flex w-full cursor-pointer items-center gap-4 px-5 py-[18px] transition-all duration-300",
              )}
              style={{
                borderLeft: `2px solid ${activeTab === i ? "#FF6A13" : "transparent"}`,
                background: activeTab === i ? "var(--pf-bg-active)" : "transparent",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== i)
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--pf-bg-hover)";
              }}
              onMouseLeave={(e) => {
                if (activeTab !== i)
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              }}
            >
              <span
                className={cn(
                  "flex h-[38px] w-[38px] shrink-0 items-center justify-center border font-mono text-xs font-semibold",
                  activeTab === i
                    ? "border-[#FF6A13] text-[#FF6A13]"
                    : "text-[var(--pf-fg-dim)]",
                )}
                style={{
                  borderColor: activeTab === i ? "#FF6A13" : "var(--pf-border)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "text-left text-sm font-semibold",
                  activeTab === i ? "text-[var(--pf-fg)]" : "text-[var(--pf-fg-muted)]",
                )}
              >
                {t(`features.items.${id}.shortTitle`)}
              </span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div
          className="flex min-h-[460px] flex-col justify-center"
          style={{
            padding: "clamp(32px, 4vw, 56px)",
            background: "var(--pf-bg-card)",
          }}
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center gap-3.5">
            <span
              className="flex h-[52px] w-[52px] items-center justify-center border border-[#FF6A13]"
              style={{ background: "var(--pf-accent-bg-2)" }}
            >
              <span className="h-4 w-4 border-2 border-[#FF6A13]" />
            </span>
            <span className="font-mono text-xs text-[var(--pf-fg-dim)]">
              {String(activeTab + 1).padStart(2, "0")} / 06
            </span>
          </div>
          <h3
            className="m-0 mt-6 min-h-[88px] font-bold leading-[1.12] text-[var(--pf-fg)]"
            style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)" }}
          >
            {t(`features.items.${currentId}.title`)}
          </h3>
          <p className="mt-3.5 text-sm font-semibold text-[#FF6A13]">
            {t(`features.items.${currentId}.subtitle`)}
          </p>
          <p className="mt-[18px] max-w-[620px] text-base leading-[1.7] text-[var(--pf-fg-muted)]">
            {t(`features.items.${currentId}.description`)}
          </p>
        </div>
      </div>
    </div>
  );
}
