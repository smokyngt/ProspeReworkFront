import { NextResponse } from "next/server";
import { z } from "zod";

import { apiError, cleanText, readJsonBody } from "../_utils";

const CONTACT_BODY_LIMIT_BYTES = 16 * 1024;
const contactSchema = z.object({
  company: z.string().trim().min(1, "Company is required").max(80),
  email: z.string().trim().email("A valid email is required").max(120),
  marketingConsent: z.boolean().optional().default(false),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be 1000 characters or less"),
  name: z.string().trim().min(1, "Name is required").max(60),
  phone: z.string().trim().max(30).optional().default(""),
  subject: z.enum(
    ["information", "partnership", "other", "api", "virtual-partner"],
    { message: "Subject is required" },
  ),
});

export async function POST(request: Request) {
  const body = await readJsonBody(request, {
    maxBytes: CONTACT_BODY_LIMIT_BYTES,
  });

  if (!body.ok) {
    return body.response;
  }

  const parsed = contactSchema.safeParse(body.data);

  if (!parsed.success) {
    return apiError(
      "contact.validation_failed",
      "Please fix the highlighted fields.",
      400,
    );
  }

  const contact = {
    company: cleanText(parsed.data.company),
    email: cleanText(parsed.data.email).toLowerCase(),
    marketingConsent: parsed.data.marketingConsent,
    message: cleanText(parsed.data.message),
    name: cleanText(parsed.data.name),
    phone: cleanText(parsed.data.phone),
    subject: parsed.data.subject,
  };

  const workspaceApiUrl = process.env.WORKSPACE_API_URL;

  if (workspaceApiUrl) {
    try {
      const response = await fetch(`${workspaceApiUrl}/contact`, {
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.WORKSPACE_API_KEY ?? "",
        },
        method: "POST",
      });

      if (!response.ok) {
        const text = await response.text().catch(() => "unknown error");
        console.error("Contact proxy failed:", response.status, text);
      }
    } catch (error) {
      console.error("Contact proxy error:", error);
    }
  }

  return NextResponse.json({ success: true });
}
