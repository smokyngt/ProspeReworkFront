import { NextResponse } from "next/server";
import { z } from "zod";

import {
  apiError,
  cleanText,
  readJsonBody,
  readUpstreamJson,
  zodFieldErrors,
} from "../../../_utils";

export const dynamic = "force-dynamic";
const CALENDAR_EVENT_BODY_LIMIT_BYTES = 16 * 1024;
const CALENDAR_EVENT_RESPONSE_LIMIT_BYTES = 128 * 1024;
const calendarEventSchema = z
  .object({
    attendees: z.array(z.string().email()).min(1).max(5),
    company: z.string().trim().min(1).max(80),
    description: z.string().trim().min(1).max(1500),
    email: z.string().trim().email().max(120),
    end: z.string().datetime("End must be a valid ISO date"),
    name: z.string().trim().min(1).max(60),
    start: z.string().datetime("Start must be a valid ISO date"),
    summary: z.string().trim().min(1).max(140),
    timezone: z.string().trim().min(1).max(64).default("Europe/Paris"),
  })
  .refine((value) => new Date(value.start) < new Date(value.end), {
    message: "Start must be before end",
    path: ["start"],
  })
  .refine(
    (value) =>
      new Date(value.end).getTime() - new Date(value.start).getTime() <=
      60 * 60 * 1000,
    { message: "Meeting duration must be 60 minutes or less", path: ["end"] },
  );

function workspaceUrl(path: string): string | null {
  const base = process.env.WORKSPACE_API_URL?.replace(/\/+$/, "");

  if (!base) {
    return null;
  }

  return base.endsWith("/v1") ? `${base}${path}` : `${base}/v1${path}`;
}

export async function POST(request: Request) {
  const apiKey = process.env.WORKSPACE_API_KEY;
  const url = workspaceUrl("/calendar/public-events");
  const body = await readJsonBody(request, {
    maxBytes: CALENDAR_EVENT_BODY_LIMIT_BYTES,
  });

  if (!body.ok) {
    return body.response;
  }

  const parsed = calendarEventSchema.safeParse(body.data);

  if (!parsed.success) {
    return apiError(
      "calendar.event.validation_failed",
      "Calendar event request is invalid.",
      400,
      zodFieldErrors(parsed.error),
    );
  }

  if (!apiKey || !url) {
    return apiError(
      "workspace.proxy.unconfigured",
      "Workspace calendar integration is not configured.",
      503,
    );
  }

  try {
    const payload = {
      ...parsed.data,
      company: cleanText(parsed.data.company),
      description: cleanText(parsed.data.description),
      email: cleanText(parsed.data.email).toLowerCase(),
      name: cleanText(parsed.data.name),
      summary: cleanText(parsed.data.summary),
    };

    const response = await fetch(url, {
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-prosperify-key": apiKey,
      },
      method: "POST",
    });
    const upstream = await readUpstreamJson(response, {
      code: "calendar.event.invalid_upstream_response",
      maxBytes: CALENDAR_EVENT_RESPONSE_LIMIT_BYTES,
    });

    if (!upstream.ok) {
      return upstream.response;
    }

    return NextResponse.json(upstream.data, { status: response.status });
  } catch {
    return apiError(
      "workspace.proxy.unreachable",
      "Workspace calendar API is unreachable.",
      503,
    );
  }
}
