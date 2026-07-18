import { TeamPage } from "@/features/landing/components/team";
import { getWorkspaceTeamMembers } from "@/features/landing/data/workspace-api";

export const metadata = {
  title: "Team | Prosperify",
  description:
    "Meet the Prosperify team building governed document AI for enterprise knowledge.",
};

export default async function TeamRoute() {
  const members = await getWorkspaceTeamMembers();

  return <TeamPage initialMembers={members} lang="fr" />;
}
