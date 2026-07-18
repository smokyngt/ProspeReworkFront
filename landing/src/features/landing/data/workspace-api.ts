import type { BlogPost } from "./blog";
import type { JobOpening } from "./jobs";

type WorkspaceLocalizedContent = {
  body?: string;
  excerpt?: string;
  title: string;
};

type WorkspaceBlogPost = {
  authorIds?: string[];
  authors?: Array<{ avatarUrl?: string; id: string; name: string }>;
  content: Record<"en" | "fr", WorkspaceLocalizedContent>;
  id: string;
  image?: { alt?: string; src?: string };
  publishedAt?: number;
  readTime?: string;
  slug: string;
  tags?: string[];
  updatedAt?: number;
};

type WorkspaceJob = {
  content: Record<
    "en" | "fr",
    {
      description: string;
      impact?: string;
      requirements?: string[];
      responsibilities?: string[];
      title: string;
    }
  >;
  contractType: string;
  id: string;
  location: string;
  occupantName?: string;
  postedAt?: number;
  seniority?: string;
  slug: string;
  status: "closed" | "open" | "taken";
  team: string;
  workMode: string;
};

export type WorkspaceTeamMember = {
  avatarUrl?: string;
  en: { bio: string };
  fr: { bio: string };
  id: string;
  linkedinUrl?: string;
  linkedinVanity?: string;
  name: string;
  role: string;
};

type WorkspacePublicResponse = {
  jobs: WorkspaceJob[];
  posts: WorkspaceBlogPost[];
  team: Array<{
    bio: Record<"en" | "fr", string>;
    id: string;
    linkedinUrl?: string;
    linkedinVanity?: string;
    name: string;
    role: string;
  }>;
};

type WorkspaceEnvelope = {
  data?: WorkspacePublicResponse;
};

type WorkspaceItemsEnvelope<T> = {
  data?: { items?: T[]; total?: number };
  items?: T[];
};

type WorkspacePostsEnvelope = {
  data?: {
    jobs?: WorkspaceJob[];
    items?: WorkspaceBlogPost[];
    posts?: WorkspaceBlogPost[];
    team?: WorkspacePublicResponse["team"];
  };
  items?: WorkspaceBlogPost[];
  jobs?: WorkspaceJob[];
  posts?: WorkspaceBlogPost[];
  team?: WorkspacePublicResponse["team"];
};

type WorkspaceContentError = {
  code: string;
  message: string;
  status?: number | string;
};

const emptyContent: WorkspacePublicResponse = {
  jobs: [],
  posts: [],
  team: [],
};

function apiKeyHeader(): Record<string, string> {
  if (typeof window !== "undefined" || !process.env.WORKSPACE_API_KEY) {
    return {};
  }

  return { "x-prosperify-key": process.env.WORKSPACE_API_KEY };
}

function workspaceUrl(path: string): string | null {
  if (typeof window !== "undefined") {
    return "/api/workspace/content";
  }

  const endpoint = process.env.WORKSPACE_API_URL?.replace(/\/+$/, "");

  if (!endpoint) {
    return null;
  }

  return endpoint.endsWith("/v1")
    ? `${endpoint}${path}`
    : `${endpoint}/v1${path}`;
}

async function fetchWorkspaceItems<T>(path: string): Promise<T[]> {
  const url = workspaceUrl(path);

  if (!url) {
    return [];
  }

  const response = await fetch(url, {
    headers: { ...apiKeyHeader(), Accept: "application/json" },
    next: typeof window === "undefined" ? { revalidate: 300 } : undefined,
  });

  if (!response.ok) {
    if (response.status === 404) {
      return [];
    }

    const payload = (await response.json().catch(() => null)) as {
      error?: WorkspaceContentError;
    } | null;
    const message =
      payload?.error?.message ??
      `Workspace content request failed with status ${response.status}`;

    throw Object.assign(new Error(message), {
      code: payload?.error?.code ?? "workspace.content.request_failed",
      status: payload?.error?.status ?? response.status,
    });
  }

  const payload = (await response.json()) as WorkspaceItemsEnvelope<T>;
  const data = payload.data ?? payload;

  return Array.isArray(data.items) ? data.items : [];
}

export async function fetchWorkspacePublicContent(): Promise<WorkspacePublicResponse | null> {
  if (typeof window === "undefined") {
    try {
      const [posts, jobs, team] = await Promise.all([
        fetchWorkspaceItems<WorkspaceBlogPost>("/posts"),
        fetchWorkspaceItems<WorkspaceJob>("/jobs"),
        fetchWorkspaceItems<WorkspacePublicResponse["team"][number]>("/users"),
      ]);

      return { jobs, posts, team };
    } catch {
      return emptyContent;
    }
  }

  const url = workspaceUrl("/content");

  if (!url) {
    return null;
  }

  const response = await fetch(url, {
    headers: { ...apiKeyHeader(), Accept: "application/json" },
    next: typeof window === "undefined" ? { revalidate: 300 } : undefined,
  });

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as {
      error?: WorkspaceContentError;
    } | null;
    const message =
      payload?.error?.message ??
      `Workspace content request failed with status ${response.status}`;

    throw Object.assign(new Error(message), {
      code: payload?.error?.code ?? "workspace.content.request_failed",
      status: payload?.error?.status ?? response.status,
    });
  }

  const payload = (await response.json()) as
    | WorkspaceEnvelope
    | WorkspacePostsEnvelope
    | WorkspacePublicResponse;

  if ("data" in payload && payload.data) {
    if (
      "posts" in payload.data &&
      "jobs" in payload.data &&
      "team" in payload.data
    ) {
      return {
        jobs: Array.isArray(payload.data.jobs) ? payload.data.jobs : [],
        posts: Array.isArray(payload.data.posts) ? payload.data.posts : [],
        team: Array.isArray(payload.data.team) ? payload.data.team : [],
      };
    }

    if (
      "items" in payload.data ||
      "posts" in payload.data ||
      "jobs" in payload.data ||
      "team" in payload.data
    ) {
      return {
        jobs: Array.isArray(payload.data.jobs) ? payload.data.jobs : [],
        posts: Array.isArray(payload.data.posts)
          ? payload.data.posts
          : Array.isArray(payload.data.items)
            ? payload.data.items
            : [],
        team: Array.isArray(payload.data.team) ? payload.data.team : [],
      };
    }
  }

  if ("posts" in payload && "jobs" in payload && "team" in payload) {
    return {
      jobs: Array.isArray(payload.jobs) ? payload.jobs : [],
      posts: Array.isArray(payload.posts) ? payload.posts : [],
      team: Array.isArray(payload.team) ? payload.team : [],
    };
  }

  if (
    "items" in payload ||
    "posts" in payload ||
    "jobs" in payload ||
    "team" in payload
  ) {
    return {
      jobs: Array.isArray(payload.jobs) ? payload.jobs : [],
      posts: Array.isArray(payload.posts)
        ? payload.posts
        : Array.isArray(payload.items)
          ? payload.items
          : [],
      team: Array.isArray(payload.team) ? payload.team : [],
    };
  }

  return null;
}

async function getWorkspacePublicContent(): Promise<WorkspacePublicResponse> {
  return (await fetchWorkspacePublicContent()) ?? emptyContent;
}

export async function getWorkspaceBlogPosts(): Promise<BlogPost[]> {
  const content = await getWorkspacePublicContent();

  return content.posts.map(workspacePostToBlogPost);
}

export async function getWorkspaceJobOpenings(): Promise<JobOpening[]> {
  const content = await getWorkspacePublicContent();

  return content.jobs.map(workspaceJobToOpening);
}

export async function getWorkspaceTeamMembers(): Promise<
  WorkspaceTeamMember[]
> {
  const content = await getWorkspacePublicContent();

  return content.team.map(workspaceTeamToMember);
}

export function workspacePostToBlogPost(item: WorkspaceBlogPost): BlogPost {
  const date = item.publishedAt
    ? new Date(item.publishedAt).toISOString().slice(0, 10)
    : new Date(item.updatedAt ?? Date.now()).toISOString().slice(0, 10);

  return {
    asset: item.image?.src
      ? { alt: item.image.alt ?? item.content.en.title, src: item.image.src }
      : undefined,
    authorIds: item.authorIds ?? [],
    authors: item.authors,
    date,
    en: {
      excerpt: item.content.en.excerpt ?? "",
      sections: [{ body: item.content.en.body ?? "", heading: "" }],
      title: item.content.en.title,
    },
    fr: {
      excerpt: item.content.fr.excerpt || item.content.en.excerpt || "",
      sections: [
        {
          body: item.content.fr.body || item.content.en.body || "",
          heading: "",
        },
      ],
      title: item.content.fr.title || item.content.en.title,
    },
    href: `/blog/${item.slug}`,
    id: item.slug,
    readTime: item.readTime ?? "4 min",
    tags: item.tags ?? [],
  };
}

export function workspaceJobToOpening(item: WorkspaceJob): JobOpening {
  return {
    en: {
      description: item.content.en.description ?? "",
      impact: item.content.en.impact,
      requirements: item.content.en.requirements ?? [],
      responsibilities: item.content.en.responsibilities ?? [],
      title: item.content.en.title ?? "Open role",
    },
    fr: {
      description:
        item.content.fr.description || item.content.en.description || "",
      impact: item.content.fr.impact || item.content.en.impact,
      requirements:
        item.content.fr.requirements ?? item.content.en.requirements ?? [],
      responsibilities:
        item.content.fr.responsibilities ??
        item.content.en.responsibilities ??
        [],
      title: item.content.fr.title || item.content.en.title || "Poste ouvert",
    },
    id: item.slug,
    location: item.location,
    occupantName: item.occupantName,
    postedAt: item.postedAt
      ? new Date(item.postedAt).toISOString().slice(0, 10)
      : undefined,
    seniority: item.seniority,
    status: item.status === "taken" ? "taken" : "open",
    team: item.team,
    type: item.contractType,
    workMode: item.workMode,
  };
}

export function workspaceTeamToMember(
  item: WorkspacePublicResponse["team"][number],
): WorkspaceTeamMember {
  return {
    avatarUrl: item.avatarUrl,
    en: { bio: item.bio.en },
    fr: { bio: item.bio.fr || item.bio.en },
    id: item.id,
    linkedinUrl: item.linkedinUrl,
    linkedinVanity: item.linkedinVanity,
    name: item.name,
    role: item.role,
  };
}
