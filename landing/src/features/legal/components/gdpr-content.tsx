"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import { LegalControls } from "./legal-controls";

const content = {
  en: {
    back: "Back to home",
    sections: [
      {
        title: "Your Rights Under GDPR",
        body: "The General Data Protection Regulation (GDPR) grants you the following rights:",
        items: [
          "Right to access -request a copy of your data",
          "Right to rectification -request correction of inaccurate data",
          "Right to erasure -request deletion of your data",
          "Right to restrict processing -limit how we use your data",
          "Right to data portability -receive your data in a machine-readable format",
          "Right to object -object to processing based on legitimate interest",
        ],
      },
      {
        title: "Data Protection Officer",
        body: "Contact our DPO at dpo@prosperify.app. We respond within 30 days.",
      },
      {
        title: "Cookie Policy",
        body: "We use only strictly necessary cookies for session management. No tracking or analytics cookies are placed without your explicit prior consent. Manage preferences via the cookie settings button.",
      },
      {
        title: "Data Processing Agreement",
        body: "Enterprise customers may request a DPA compliant with Article 28 GDPR at dpo@prosperify.app.",
      },
      {
        title: "Sub-processors",
        body: "Google LLC (Cloud Infrastructure, Calendar, Meet) -US, covered by SCCs. evps.net (Cloud Infrastructure) -France. All bound by contractual data protection obligations.",
      },
      {
        title: "Security Measures",
        body: "Encryption at rest (AES-256) and in transit (TLS 1.3), role-based access controls, audit logging, regular security assessments, incident response procedures.",
      },
      {
        title: "International Transfers",
        body: "When data is transferred outside the EU (e.g., Google services), we rely on Standard Contractual Clauses (2021/914) and Google's DPA.",
      },
      {
        title: "Complaint to CNIL",
        body: "You may lodge a complaint with the CNIL: 3 Place de Fontenoy, 75007 Paris -cnil.fr -+33 1 53 73 22 22.",
      },
      {
        title: "Data Retention Schedule",
        body: "Contact form data: 36 months after last contact. Usage data: anonymized after 13 months. Contract data: contract duration + 5 years. Backups: 90 days maximum. Logs: 12 months.",
      },
    ],
    title: "GDPR Compliance",
    updated: "Last updated: June 2026",
  },
  fr: {
    back: "Retour à l'accueil",
    sections: [
      {
        title: "Vos droits RGPD",
        body: "Le Règlement Général sur la Protection des Données (RGPD) vous accorde les droits suivants :",
        items: [
          "Droit d'accès -obtenir une copie de vos données",
          "Droit de rectification -corriger des données inexactes",
          "Droit à l'effacement -demander la suppression de vos données",
          "Droit à la limitation -limiter l'utilisation de vos données",
          "Droit à la portabilité -recevoir vos données dans un format structuré",
          "Droit d'opposition -vous opposer au traitement basé sur l'intérêt légitime",
        ],
      },
      {
        title: "Délégué à la protection des données",
        body: "Contactez notre DPO à dpo@prosperify.app. Réponse sous 30 jours.",
      },
      {
        title: "Politique des cookies",
        body: "Nous utilisons uniquement des cookies strictement nécessaires à la session. Aucun cookie de suivi ou d'analyse n'est placé sans votre consentement explicite.",
      },
      {
        title: "Accord de traitement des données",
        body: "Les clients entreprise peuvent demander un DPA conforme à l'article 28 RGPD à dpo@prosperify.app.",
      },
      {
        title: "Sous-traitants",
        body: "Google LLC (infrastructure cloud, Calendar, Meet) -États-Unis, couvert par les CCT. evps.net (infrastructure cloud) -France.",
      },
      {
        title: "Mesures de sécurité",
        body: "Chiffrement au repos (AES-256) et en transit (TLS 1.3), contrôles d'accès basés sur les rôles, journalisation d'audit, évaluations de sécurité régulières.",
      },
      {
        title: "Transferts internationaux",
        body: "Lorsque des données sont transférées hors UE, nous nous appuyons sur les clauses contractuelles types (2021/914) et le DPA de Google.",
      },
      {
        title: "Réclamation auprès de la CNIL",
        body: "Vous pouvez saisir la CNIL : 3 Place de Fontenoy, 75007 Paris -cnil.fr -+33 1 53 73 22 22.",
      },
      {
        title: "Calendrier de conservation",
        body: "Données de contact : 36 mois. Données d'usage : anonymisées après 13 mois. Données contractuelles : durée du contrat + 5 ans. Sauvegardes : 90 jours max. Journaux : 12 mois.",
      },
    ],
    title: "Conformité RGPD",
    updated: "Dernière mise à jour : juin 2026",
  },
};

export default function GdprContent() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
  const copy = content[lang];

  return (
    <main className="min-h-screen bg-white pt-24 pb-32 dark:bg-neutral-950">
      <div className="fixed right-6 top-4 z-50 sm:right-8 sm:top-5">
        <LegalControls />
      </div>
      <div className="mx-auto max-w-3xl px-6 sm:px-12 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex text-sm text-orange-600 hover:text-orange-700 dark:text-orange-400"
        >
          &larr; {copy.back}
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl">
          {copy.title}
        </h1>
        <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
          {copy.updated}
        </p>
        <div className="mt-12 space-y-10">
          {copy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-neutral-950 dark:text-neutral-50">
                {section.title}
              </h2>
              {"items" in section && section.items ? (
                <>
                  <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
                    {section.body}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-neutral-600 dark:text-neutral-400">
                    {section.items.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
                  {section.body}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
