import { NextResponse } from "next/server";
import { Resend } from "resend";
import { escapeHtml } from "@/lib/escapeHtml";

export const runtime = "nodejs";

const TO_EMAIL = "contact@medinovastudio.com";
const FROM_EMAIL = "Medinova Studio <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

/**
 * Lightweight in-memory rate limiting. In serverless environments each
 * instance keeps its own map, so this deters casual abuse rather than acting
 * as a hard global quota.
 */
const ipHits = new Map<string, { count: number; windowStart: number }>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);
  if (!entry || now - entry.windowStart >= RATE_LIMIT_WINDOW_MS) {
    ipHits.set(ip, { count: 1, windowStart: now });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured (RESEND_API_KEY missing)." },
      { status: 500 }
    );
  }

  let body: {
    name?: unknown;
    email?: unknown;
    projectType?: unknown;
    budget?: unknown;
    readiness?: unknown;
    message?: unknown;
    website?: unknown;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Honeypot: real users never fill the hidden field, bots sometimes do.
  const website = typeof body.website === "string" ? body.website.trim() : "";
  if (website) {
    return NextResponse.json({ success: true });
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const projectType =
    typeof body.projectType === "string" ? body.projectType.trim() : "";
  const budget = typeof body.budget === "string" ? body.budget.trim() : "";
  const readiness =
    typeof body.readiness === "string" ? body.readiness.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, message." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (
    name.length > MAX_FIELD_LENGTH ||
    email.length > MAX_FIELD_LENGTH ||
    projectType.length > MAX_FIELD_LENGTH ||
    budget.length > MAX_FIELD_LENGTH ||
    readiness.length > MAX_FIELD_LENGTH
  ) {
    return NextResponse.json(
      { error: "One or more fields exceed the maximum allowed length." },
      { status: 400 }
    );
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: "Message exceeds the maximum allowed length." },
      { status: 400 }
    );
  }

  const html = `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e4e7;">
            <tr>
              <td style="background-color:#2455e6;padding:20px 28px;">
                <h1 style="margin:0;color:#ffffff;font-size:20px;font-family:Arial,Helvetica,sans-serif;">&#127918; New Game Dev Inquiry</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;">
                <p style="margin:0 0 20px;color:#52525b;font-size:14px;line-height:1.6;">A new project brief was submitted from the Medinova Studio website.</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                  <tr>
                    <td style="padding:8px 0;color:#71717a;font-size:13px;width:120px;"><strong>Name</strong></td>
                    <td style="padding:8px 0;color:#18181b;font-size:14px;">${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#71717a;font-size:13px;width:120px;"><strong>Email</strong></td>
                    <td style="padding:8px 0;color:#18181b;font-size:14px;"><a href="mailto:${escapeHtml(email)}" style="color:#2455e6;">${escapeHtml(email)}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#71717a;font-size:13px;width:120px;"><strong>Project Type</strong></td>
                    <td style="padding:8px 0;color:#18181b;font-size:14px;">${escapeHtml(projectType || "—")}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#71717a;font-size:13px;width:120px;"><strong>Budget Range</strong></td>
                    <td style="padding:8px 0;color:#18181b;font-size:14px;">${escapeHtml(budget || "—")}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#71717a;font-size:13px;width:120px;"><strong>Readiness</strong></td>
                    <td style="padding:8px 0;color:#18181b;font-size:14px;">${escapeHtml(readiness || "—")}</td>
                  </tr>
                </table>
                <h2 style="margin:0 0 8px;color:#18181b;font-size:15px;">Message</h2>
                <p style="margin:0;color:#3f3f46;font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px;background-color:#fafafa;border-top:1px solid #e4e4e7;">
                <p style="margin:0;color:#a1a1aa;font-size:12px;">Reply to this email to respond directly to the client.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `🎮 New Game Dev Inquiry: ${name}`,
      html,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { error: error.message ?? "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend request failed:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to send email." },
      { status: 500 }
    );
  }
}
