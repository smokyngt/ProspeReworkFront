"use client";

import { Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  fetchWorkspacePublicContent,
  type WorkspaceTeamMember,
  workspaceTeamToMember,
} from "@/features/landing/data/workspace-api";

type TeamSectionProps = {
  hideHeading?: boolean;
  initialMembers?: WorkspaceTeamMember[];
};

const EMPTY_MEMBERS: WorkspaceTeamMember[] = [];

export function TeamSection({
  hideHeading = false,
  initialMembers = EMPTY_MEMBERS,
}: TeamSectionProps) {
  const { i18n, t } = useTranslation();
  const language = i18n.language.startsWith("fr") ? "fr" : "en";
  const [members, setMembers] = useState<WorkspaceTeamMember[]>(initialMembers);

  useEffect(() => {
    let cancelled = false;

    void fetchWorkspacePublicContent().then((content) => {
      if (!cancelled) {
        const workspaceMembers = content?.team.map(workspaceTeamToMember) ?? [];
        setMembers(workspaceMembers.length ? workspaceMembers : initialMembers);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [initialMembers]);

  return (
    <div className="mx-auto max-w-7xl">
      {hideHeading ? null : (
        <div className="mb-10 grid gap-6 border-b border-neutral-200 pb-8 dark:border-neutral-800 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              {t("team.badge")}
            </p>
            <h1 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl">
              {t("team.titlePrefix")}{" "}
              <span className="text-orange-500">
                {t("team.titleHighlight")}
              </span>
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300">
            {t("team.subtitle")}
          </p>
        </div>
      )}

      {members.length ? (
        <div className="grid gap-5 md:grid-cols-3">
          {members.map((member) => (
            <article
              key={member.id}
              className="border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-neutral-200 dark:border-neutral-700">
                  {member.avatarUrl ? (
                    <img
                      alt={member.name}
                      className="h-full w-full object-cover"
                      src={member.avatarUrl}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-neutral-100 text-2xl font-semibold text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                      {member.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                  {member.name}
                </h3>
                {member.role ? (
                  <p className="mt-1 text-sm font-medium text-orange-500 dark:text-orange-400">
                    {member.role}
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                {member[language].bio}
              </p>
              {member.linkedinUrl || member.linkedinVanity ? (
                <div className="mt-4 flex justify-center">
                  <a
                    className="inline-flex items-center gap-2 rounded-md border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-orange-200 hover:text-orange-600 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-orange-500 dark:hover:text-orange-400"
                    href={
                      member.linkedinUrl ||
                      `https://www.linkedin.com/in/${member.linkedinVanity}/`
                    }
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      ) : (
        <div className="border border-neutral-200 bg-neutral-50 p-6 text-sm leading-6 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
          {language === "fr"
            ? "Les profils publics de l'équipe apparaîtront ici dès qu'ils seront activés dans le workspace."
            : "Public team profiles will appear here once they are enabled in the workspace."}
        </div>
      )}
    </div>
  );
}
