import { NextResponse } from "next/server";

import { apiError, readUpstreamJson } from "../../_utils";

export const dynamic = "force-dynamic";
const WORKSPACE_CONTENT_LIMIT_BYTES = 1024 * 1024;
type WorkspaceEndpointKey = "jobs" | "posts" | "team";

function workspaceUrl(path: string): string | null {
  const base = process.env.WORKSPACE_API_URL?.replace(/\/+$/, "");

  if (!base) {
    return null;
  }

  return base.endsWith("/v1") ? `${base}${path}` : `${base}/v1${path}`;
}

export async function GET() {
  const apiKey = process.env.WORKSPACE_API_KEY;
  const postsUrl = workspaceUrl("/posts");
  const jobsUrl = workspaceUrl("/jobs");
  const teamUrl = workspaceUrl("/users");

  if (!apiKey) {
    return apiError(
      "workspace.content.unauthorized",
      "Workspace API key is missing.",
      401,
    );
  }

  if (!postsUrl || !jobsUrl || !teamUrl) {
    return apiError(
      "workspace.content.not_configured",
      "Workspace API URL is not configured.",
      500,
    );
  }

  try {
    const headers = {
      Accept: "application/json",
      "x-prosperify-key": apiKey,
    };
    const fetchOptions = { cache: "no-store" as const, headers };
    const [postsResponse, jobsResponse, teamResponse] = await Promise.all([
      fetch(postsUrl, fetchOptions),
      fetch(jobsUrl, fetchOptions),
      fetch(teamUrl, fetchOptions),
    ]);
    const failed = [postsResponse, jobsResponse, teamResponse].find(
      (response) => !response.ok && response.status !== 404,
    );

    if (failed) {
      const status =
        failed.status === 401 || failed.status === 403 ? 401 : failed.status;

      return apiError(
        status === 401
          ? "workspace.content.unauthorized"
          : "workspace.content.upstream_error",
        status === 401
          ? "Workspace API rejected the configured key."
          : "Workspace content could not be loaded.",
        status,
      );
    }

    const readItems = async (
      key: WorkspaceEndpointKey,
      response: Response,
    ): Promise<NextResponse | unknown[]> => {
      if (response.status === 404) {
        return [];
      }

      const upstream = await readUpstreamJson(response, {
        code: "workspace.content.invalid_upstream_response",
        maxBytes: WORKSPACE_CONTENT_LIMIT_BYTES,
      });

      if (!upstream.ok) {
        return upstream.response;
      }

      const payload = upstream.data as {
        data?: Partial<Record<WorkspaceEndpointKey | "items", unknown>>;
        items?: unknown;
      } & Partial<Record<WorkspaceEndpointKey, unknown>>;
      const data = payload.data ?? payload;
      const items = data.items ?? data[key] ?? [];

      return Array.isArray(items) ? items : [];
    };
    const [postsResult, jobsResult, teamResult] = await Promise.all([
      readItems("posts", postsResponse),
      readItems("jobs", jobsResponse),
      readItems("team", teamResponse),
    ]);

    if (postsResult instanceof NextResponse) {
      return postsResult;
    }

    if (jobsResult instanceof NextResponse) {
      return jobsResult;
    }

    if (teamResult instanceof NextResponse) {
      return teamResult;
    }

    const normalizedPosts = postsResult;
    const normalizedJobs = jobsResult;
    const normalizedTeam = teamResult;

    return NextResponse.json({
      data: {
        posts: normalizedPosts,
        jobs: normalizedJobs,
        team: normalizedTeam,
      },
      meta: {
        count:
          normalizedPosts.length +
          normalizedJobs.length +
          normalizedTeam.length,
        status:
          normalizedPosts.length ||
          normalizedJobs.length ||
          normalizedTeam.length
            ? "ok"
            : "no_results",
      },
    });
  } catch (error) {
    void error;

    return apiError(
      "workspace.content.unreachable",
      "Workspace API is unreachable.",
      502,
    );
  }
}
