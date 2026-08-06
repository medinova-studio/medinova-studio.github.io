import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAIL = "contact@medinovastudio.com";
const FROM_EMAIL = "Medinova Studio <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

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
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
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

  const html = `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e4e7;">
            <tr>
              <td style="background-color:#5e6ad2;padding:20px 28px;">
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
                    <td style="padding:8px 0;color:#18181b;font-size:14px;"><a href="mailto:${escapeHtml(email)}" style="color:#5e6ad2;">${escapeHtml(email)}</a></td>
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
