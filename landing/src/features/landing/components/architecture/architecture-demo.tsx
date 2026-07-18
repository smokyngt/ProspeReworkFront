"use client";

import { useTranslation } from "react-i18next";

const architectureSteps = [
  {
    defaultTitle: "Corpus autorisés",
    defaultDesc:
      "Rassemblez les documents utiles dans un espace contrôlé, sans imposer une refonte complète de vos outils.",
  },
  {
    defaultTitle: "Contenu analysé",
    defaultDesc:
      "Les textes, tableaux, pages et métadonnées sont préparés pour rendre chaque document plus facile à interroger.",
  },
  {
    defaultTitle: "Informations structurées",
    defaultDesc:
      "Les contenus sont organisés selon leur logique : titres, clauses, articles, annexes, versions et éléments clés.",
  },
  {
    defaultTitle: "Recherche gouvernée",
    defaultDesc:
      "Les utilisateurs retrouvent les passages pertinents grâce à une recherche hybride combinant sens, termes, contexte et visuels.",
  },
  {
    defaultTitle: "Réponses avec sources",
    defaultDesc:
      "Prosperify sélectionne les extraits utiles et génère des réponses structurées, accompagnées des références nécessaires.",
  },
  {
    defaultTitle: "Vérification des limites",
    defaultDesc:
      "Les réponses peuvent signaler les zones d'incertitude ou les éléments qui nécessitent une validation humaine.",
  },
  {
    defaultTitle: "Suivi & amélioration",
    defaultDesc:
      "Les usages, la qualité des réponses et les besoins d'évolution peuvent être suivis pour améliorer le service dans le temps.",
  },
];

export function ArchitectureDemo() {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="border border-[var(--pf-border)]"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1px",
          background: "var(--pf-border)",
        }}
      >
        {architectureSteps.map((step, index) => (
          <div
            key={index}
            className="group border-t-2 border-transparent transition-all duration-[250ms] hover:border-t-[#FF6A13]"
            style={{
              padding: "clamp(22px, 2.4vw, 30px)",
              background: "var(--pf-bg-card)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "var(--pf-bg-hover)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "var(--pf-bg-card)";
            }}
          >
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[22px] font-semibold text-[#FF6A13]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-px flex-1" style={{ background: "var(--pf-border)" }} />
              <span className="font-mono text-xs text-[var(--pf-border-2)]">→</span>
            </div>
            <h4 className="m-0 mt-[18px] text-[1.05rem] font-bold text-[var(--pf-fg)]">
              {t(`architecture.steps.${index}.title`, {
                defaultValue: step.defaultTitle,
              })}
            </h4>
            <p className="m-0 mt-2.5 text-[13px] leading-[1.55] text-[var(--pf-fg-muted)]">
              {t(`architecture.steps.${index}.description`, {
                defaultValue: step.defaultDesc,
              })}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-2.5 font-mono text-[11px] tracking-[0.1em] text-[var(--pf-fg-dim)]">
        <span className="h-1.5 w-1.5 bg-[#FF6A13]" />
        {t("architecture.footerNote", {
          defaultValue:
            "Sources, accès et vérification conservés à chaque étape",
        })}
      </div>
    </div>
  );
}
