import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass) {
      // Graceful fallback — form shows success but logs the message
      console.log("📧 Contact form submission (email not configured):", { name, email, subject, message });
      return NextResponse.json({ success: true, fallback: true });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    await transporter.sendMail({
      from: `"${name}" <${gmailUser}>`,
      to: "kjaiteh9@gmail.com",
      replyTo: email,
      subject: `[KD Platform] ${subject || "New Contact Message"}`,
      html: `
        <div style="font-family: 'Courier New', monospace; background: #050508; color: #e8f4ff; padding: 40px; border-radius: 12px; border: 1px solid rgba(0,212,255,0.3);">
          <h2 style="color: #00d4ff; margin-top: 0; letter-spacing: 0.1em;">NEW MESSAGE RECEIVED</h2>
          <hr style="border-color: rgba(0,212,255,0.2);" />
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: rgba(0,212,255,0.6); width: 100px;">FROM</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: rgba(0,212,255,0.6);">EMAIL</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #00d4ff;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: rgba(0,212,255,0.6);">SUBJECT</td><td style="padding: 8px 0;">${subject || "—"}</td></tr>
          </table>
          <hr style="border-color: rgba(0,212,255,0.2); margin: 20px 0;" />
          <p style="color: rgba(0,212,255,0.6); margin-bottom: 8px; letter-spacing: 0.05em;">MESSAGE</p>
          <p style="background: rgba(0,212,255,0.05); padding: 16px; border-radius: 8px; border-left: 3px solid #00d4ff; white-space: pre-wrap;">${message}</p>
          <hr style="border-color: rgba(0,212,255,0.2); margin-top: 24px;" />
          <p style="color: rgba(232,244,255,0.3); font-size: 11px; letter-spacing: 0.1em;">KARLANG AI PLATFORM // AUTO-NOTIFICATION</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to send message";
    console.error("[contact/route]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
