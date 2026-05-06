import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 320) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }
  if (phone && (!/^[\d\s\-+()]{7,20}$/.test(phone))) {
    return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
  }
  if (!message || message.length > 5000) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const recipient = process.env.CONTACT_RECIPIENT ?? "support@immigrationadviceservice.org";

  if (!gmailUser || !gmailPass) {
    console.error("Mail not configured: missing GMAIL_USER or GMAIL_APP_PASSWORD");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const subject = `New consultation request — ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family: Inter, system-ui, sans-serif; color: #18181b; max-width: 600px; padding: 24px;">
      <h2 style="font-family: Georgia, serif; color: #18181b; margin: 0 0 16px;">New consultation request</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
        <tr><td style="padding: 6px 0; color: #52525b; width: 90px;">Name</td><td style="padding: 6px 0; font-weight: 500;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 6px 0; color: #52525b;">Email</td><td style="padding: 6px 0; font-weight: 500;"><a href="mailto:${escapeHtml(email)}" style="color: #b45309; text-decoration: none;">${escapeHtml(email)}</a></td></tr>
        ${phone ? `<tr><td style="padding: 6px 0; color: #52525b;">Phone</td><td style="padding: 6px 0; font-weight: 500;">${escapeHtml(phone)}</td></tr>` : ""}
      </table>
      <div style="border-top: 1px solid #e4e4e7; padding-top: 16px;">
        <p style="color: #52525b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 8px;">Message</p>
        <p style="white-space: pre-wrap; line-height: 1.7; color: #27272a; margin: 0;">${escapeHtml(message)}</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"IAS Website" <${gmailUser}>`,
      to: recipient,
      replyTo: email,
      subject,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact email", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }
}
