"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import { LegalControls } from "./legal-controls";

const content = {
  en: {
    back: "Back to home",
    sections: [
      {
        title: "Data Controller",
        body: "Prosperify SAS, 40 rue de Bourgogne, 69009 Lyon, France. SIREN: 100136753. contact@prosperify.app.",
      },
      {
        title: "Data We Collect",
        body: "When you use our contact form or book a meeting, we collect: name, email, company name, phone number (optional), and your message. When you use our platform, we collect usage data necessary for service operation.",
      },
      {
        title: "Purpose and Legal Basis",
        body: "We process your data to respond to your inquiry, schedule meetings, and provide our services. Our legal basis is legitimate interest (Article 6(1)(f) GDPR) for B2B inquiries and contract performance (Article 6(1)(b)) for platform users.",
      },
      {
        title: "Data Retention",
        body: "Contact form data is retained for 36 months after the last contact. Platform data is retained for the duration of the contract plus applicable legal retention periods. Usage logs are anonymized after 13 months.",
      },
      {
        title: "Data Recipients and International Transfers",
        body: "Your data may be shared with: Google LLC (Google Calendar, Google Meet) for meeting scheduling -data is transferred to the US under Google's Data Processing Agreement incorporating EU Standard Contractual Clauses (2021/914). Our infrastructure providers may process data in the European Union.",
      },
      {
        title: "Your Rights",
        body: "Under GDPR, you have the right to: access your data, rectify inaccurate data, erase your data ('right to be forgotten'), restrict processing, data portability, object to processing. To exercise these rights, contact us at contact@prosperify.app. We respond within one month.",
      },
      {
        title: "Cookies",
        body: "We use only strictly necessary cookies for session management and security. No tracking cookies are used without your explicit consent.",
      },
      {
        title: "Security",
        body: "We implement appropriate technical and organizational measures to protect your data, including encryption at rest and in transit, access controls, and regular security reviews.",
      },
      {
        title: "Complaints",
        body: "You have the right to lodge a complaint with the CNIL (Commission Nationale de l'Informatique et des Libertés), 3 Place de Fontenoy, 75007 Paris, France -cnil.fr.",
      },
      {
        title: "Updates",
        body: "This policy was last updated June 2026. We will notify you of material changes via our website.",
      },
    ],
    title: "Privacy Policy",
    updated: "Last updated: June 2026",
  },
  fr: {
    back: "Retour à l'accueil",
    sections: [
      {
        title: "Responsable du traitement",
        body: "Prosperify SAS, 40 rue de Bourgogne, 69009 Lyon, France. SIREN : 100136753. contact@prosperify.app.",
      },
      {
        title: "Données collectées",
        body: "Lorsque vous utilisez notre formulaire de contact ou réservez un rendez-vous, nous collectons : nom, email, nom d'entreprise, numéro de téléphone (optionnel) et votre message.",
      },
      {
        title: "Finalité et base légale",
        body: "Nous traitons vos données pour répondre à votre demande, planifier des rendez-vous et fournir nos services. Base légale : intérêt légitime (Art. 6(1)(f) RGPD) pour les demandes B2B, exécution du contrat (Art. 6(1)(b)) pour les utilisateurs.",
      },
      {
        title: "Conservation des données",
        body: "Données de contact : 36 mois après dernier contact. Données plateforme : durée du contrat + obligations légales. Journaux d'usage : anonymisés après 13 mois.",
      },
      {
        title: "Destinataires et transferts internationaux",
        body: "Vos données peuvent être partagées avec Google LLC (Google Calendar, Google Meet) pour la planification de rendez-vous -transfert vers les États-Unis encadré par les clauses contractuelles types UE (2021/914).",
      },
      {
        title: "Vos droits",
        body: "Conformément au RGPD : accès, rectification, effacement, limitation, portabilité, opposition. Contactez contact@prosperify.app. Réponse sous un mois.",
      },
      {
        title: "Cookies",
        body: "Nous utilisons uniquement des cookies strictement nécessaires à la session et à la sécurité. Aucun cookie de suivi sans consentement explicite.",
      },
      {
        title: "Sécurité",
        body: "Chiffrement au repos et en transit, contrôles d'accès, audits de sécurité réguliers.",
      },
      {
        title: "Réclamations",
        body: "Vous pouvez saisir la CNIL : 3 Place de Fontenoy, 75007 Paris -cnil.fr.",
      },
      {
        title: "Mises à jour",
        body: "Mise à jour : juin 2026. Les modifications importantes seront communiquées via notre site.",
      },
    ],
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : juin 2026",
  },
};

export default function PrivacyContent() {
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
              <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
