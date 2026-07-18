import { headers } from "next/headers";

import TermsContent from "@/features/legal/components/terms-content";

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
        ? "Conditions générales d'utilisation de Prosperify."
        : "Prosperify terms and conditions for the use of our services.",
    title:
      lang === "fr"
        ? "Conditions d'utilisation - Prosperify"
        : "Terms of Service - Prosperify",
  };
}

export default function TermsPage() {
  return <TermsContent />;
}
