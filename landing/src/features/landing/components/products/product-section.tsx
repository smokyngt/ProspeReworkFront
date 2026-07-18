"use client";

import { useTranslation } from "react-i18next";

function getStringList(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

const offerMeta = [
  "CONTRÔLE — GÉRÉ · INFRA PROSPERIFY",
  "CONTRÔLE — PARTAGÉ · DONNÉES CHEZ VOUS",
  "CONTRÔLE — TOTAL · VOTRE INFRASTRUCTURE",
];

export default function ProductSection() {
  const { t } = useTranslation();

  return (
    <div className="[overflow-anchor:none]">
      <h2
        className="m-0 max-w-[760px] font-bold leading-[1.06] tracking-[-0.02em] text-[var(--pf-fg)]"
        style={{ fontSize: "clamp(1.9rem, 4vw, 3.1rem)" }}
      >
        {t("products.titlePrefix")} {t("products.titleMiddle")}{" "}
        <span className="text-[#FF6A13]">{t("products.titleHighlight")}</span>
      </h2>
      <p className="mt-[18px] max-w-[620px] text-[1.05rem] text-[var(--pf-fg-muted)]">
        {t("products.subtitle")}
      </p>

      <div
        className="mt-11 border border-[var(--pf-border)]"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px",
          background: "var(--pf-border)",
        }}
      >
        {[0, 1, 2].map((index) => {
          const badge = t(`products.offers.${index}.badge`);
          const title = t(`products.offers.${index}.title`);
          const features = getStringList(
            t(`products.offers.${index}.features`, { returnObjects: true }),
          );
          const isHighlighted = index === 2;

          return (
            <div
              key={index}
              className="relative flex flex-col transition-colors duration-200"
              style={{
                padding: "clamp(24px, 2.6vw, 34px)",
                background: "var(--pf-bg-card)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "var(--pf-bg-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "var(--pf-bg-card)";
              }}
            >
              {isHighlighted && (
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[#FF6A13]" />
              )}

              <div className="mb-[22px] flex items-center justify-between">
                <span className="font-mono text-xs text-[var(--pf-fg-dim)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {badge ? (
                  <span className="bg-[#FF6A13] px-2 py-1 font-mono text-[9px] font-semibold tracking-[0.14em] text-[#080808]">
                    {badge}
                  </span>
                ) : null}
              </div>

              {/* Progress bars */}
              <div className="mb-5 flex gap-[5px]">
                {[0, 1, 2].map((k) => (
                  <span
                    key={k}
                    className="h-1 w-[30px]"
                    style={{ background: k <= index ? "#FF6A13" : "var(--pf-border)" }}
                  />
                ))}
              </div>

              <h3
                className="m-0 font-bold leading-[1.1] text-[var(--pf-fg)]"
                style={{ fontSize: "1.8rem" }}
              >
                {title}
              </h3>
              <div className="mt-3 font-mono text-[11px] tracking-[0.06em] text-[var(--pf-fg-muted)]">
                {offerMeta[index]}
              </div>

              <div className="my-6 h-px" style={{ background: "var(--pf-border)" }} />

              <div className="flex flex-col gap-3">
                {features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <span className="mt-[5px] h-2 w-2 shrink-0 bg-[#FF6A13]" />
                    <span className="text-[13.5px] leading-[1.5] text-[var(--pf-fg-muted)]">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
