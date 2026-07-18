import { headers } from "next/headers";

import GdprContent from "@/features/legal/components/gdpr-content";

import type { Metadata } from "next";

async function getLang(): Promise<"en" | "fr"> {
  try {
    const accept = (await headers()).get("Accept-Language") ?? "";
    return accept.startsWith("fr") ? "fr" : "en";
  } catch {
    return "en";
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  return {
    description:
      lang === "fr"
        ? "Conformité RGPD de Prosperify : vos droits et comment nous les mettons en œuvre."
        : "Prosperify GDPR compliance: your data protection rights and how we implement them.",
    title:
      lang === "fr"
        ? "Conformité RGPD - Prosperify"
        : "GDPR Compliance - Prosperify",
  };
}

export default function GdprPage() {
  return <GdprContent />;
}
