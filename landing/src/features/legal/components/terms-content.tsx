"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import { LegalControls } from "./legal-controls";

const content = {
  en: {
    back: "Back to home",
    sections: [
      {
        title: "Service Description",
        body: "Prosperify provides a document intelligence platform that enables organizations to query, search, and analyze their document corpora with sourced answers, governed access, and verifiable citations.",
      },
      {
        title: "Account Registration",
        body: "You must provide accurate information when creating an account. You are responsible for maintaining the confidentiality of your credentials and for all activities under your account.",
      },
      {
        title: "Data Processing",
        body: "You retain all rights to your data. Prosperify processes your data solely to provide the service and does not use your data to train general AI models. Data is processed within the agreed deployment perimeter.",
      },
      {
        title: "Service Levels",
        body: "Prosperify will use commercially reasonable efforts to make the service available. Specific SLAs are defined in your service agreement.",
      },
      {
        title: "Intellectual Property",
        body: "The Prosperify platform, including its software, algorithms, and user interface, is the intellectual property of Prosperify SAS.",
      },
      {
        title: "Limitation of Liability",
        body: "Prosperify's liability is limited to the amount paid for the service in the 12 months preceding the claim, subject to applicable law.",
      },
      {
        title: "Termination",
        body: "Either party may terminate with written notice. Upon termination, your data will be exported or deleted within 30 days per your instructions.",
      },
      {
        title: "Governing Law",
        body: "These terms are governed by French law. Any disputes shall be submitted to the competent courts of Lyon, France.",
      },
      {
        title: "Contact",
        body: "Prosperify SAS, 40 rue de Bourgogne, 69009 Lyon, France. contact@prosperify.app. SIREN: 100136753.",
      },
    ],
    title: "Terms of Service",
    updated: "Last updated: June 2026",
  },
  fr: {
    back: "Retour à l'accueil",
    sections: [
      {
        title: "Description du service",
        body: "Prosperify est une plateforme d'intelligence documentaire qui permet aux organisations d'interroger et d'analyser leurs corpus documentaires avec des réponses sourcées et des accès gouvernés.",
      },
      {
        title: "Inscription",
        body: "Vous devez fournir des informations exactes lors de la création de votre compte. Vous êtes responsable de la confidentialité de vos identifiants.",
      },
      {
        title: "Traitement des données",
        body: "Vous conservez tous les droits sur vos données. Prosperify traite vos données uniquement pour fournir le service et ne les utilise pas pour entraîner des modèles d'IA généraux.",
      },
      {
        title: "Niveaux de service",
        body: "Prosperify s'efforce de maintenir le service disponible. Les SLA spécifiques sont définis dans votre contrat.",
      },
      {
        title: "Propriété intellectuelle",
        body: "La plateforme Prosperify, y compris ses logiciels, algorithmes et interface utilisateur, est la propriété intellectuelle de Prosperify SAS.",
      },
      {
        title: "Limitation de responsabilité",
        body: "La responsabilité de Prosperify est limitée au montant payé pour le service dans les 12 mois précédant la réclamation, sous réserve du droit applicable.",
      },
      {
        title: "Résiliation",
        body: "Chaque partie peut résilier le contrat par notification écrite. Vos données seront exportées ou supprimées dans les 30 jours.",
      },
      {
        title: "Droit applicable",
        body: "Ces conditions sont régies par le droit français. Tout litige relève des tribunaux compétents de Lyon.",
      },
      {
        title: "Contact",
        body: "Prosperify SAS, 40 rue de Bourgogne, 69009 Lyon, France. contact@prosperify.app. SIREN : 100136753.",
      },
    ],
    title: "Conditions d'utilisation",
    updated: "Dernière mise à jour : juin 2026",
  },
};

export default function TermsContent() {
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
