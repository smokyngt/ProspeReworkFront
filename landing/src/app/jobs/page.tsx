import { JobsPage } from "@/features/landing/components/jobs";
import { getWorkspaceJobOpenings } from "@/features/landing/data/workspace-api";

export const metadata = {
  title: "Jobs | Prosperify",
  description:
    "Open roles and hiring updates from Prosperify, the governed document AI platform for enterprise teams.",
};

export default async function JobsRoute() {
  const openings = await getWorkspaceJobOpenings();

  return <JobsPage initialOpenings={openings} lang="fr" />;
}
