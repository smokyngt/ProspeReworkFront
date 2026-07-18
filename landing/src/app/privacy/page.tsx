import { headers } from "next/headers";

import PrivacyContent from "@/features/legal/components/privacy-content";

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
        ? "Politique de confidentialité Prosperify : comment nous collectons, traitons et protégeons vos données personnelles."
        : "Prosperify privacy policy: how we collect, process and protect your personal data.",
    title:
      lang === "fr"
        ? "Politique de confidentialité - Prosperify"
        : "Privacy Policy - Prosperify",
  };
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
