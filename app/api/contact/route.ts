import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      console.log("📧 Contact submission (Resend not configured):", { name, email, subject, message });
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: "KD Platform <onboarding@resend.dev>",
      to: "kjaiteh9@gmail.com",
      replyTo: email,
      subject: `[KD Platform] ${subject || "New Contact Message"}`,
      html: `
        <div style="font-family:'Courier New',monospace;background:#050508;color:#e8f4ff;padding:40px;border-radius:12px;border:1px solid rgba(0,212,255,0.3);max-width:600px;">
          <h2 style="color:#00d4ff;margin-top:0;letter-spacing:0.1em;font-size:18px;">⚡ NEW MESSAGE RECEIVED</h2>
          <hr style="border:none;border-top:1px solid rgba(0,212,255,0.2);margin:16px 0;" />
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:rgba(0,212,255,0.6);width:90px;font-size:12px;letter-spacing:0.05em;">FROM</td>
              <td style="padding:8px 0;color:#e8f4ff;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:rgba(0,212,255,0.6);font-size:12px;letter-spacing:0.05em;">REPLY TO</td>
              <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#00d4ff;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:rgba(0,212,255,0.6);font-size:12px;letter-spacing:0.05em;">SUBJECT</td>
              <td style="padding:8px 0;color:#e8f4ff;">${subject || "—"}</td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid rgba(0,212,255,0.2);margin:20px 0;" />
          <p style="color:rgba(0,212,255,0.6);font-size:12px;letter-spacing:0.05em;margin-bottom:10px;">MESSAGE</p>
          <div style="background:rgba(0,212,255,0.05);padding:16px;border-radius:8px;border-left:3px solid #00d4ff;white-space:pre-wrap;color:#e8f4ff;line-height:1.6;">${message}</div>
          <hr style="border:none;border-top:1px solid rgba(0,212,255,0.1);margin-top:28px;" />
          <p style="color:rgba(232,244,255,0.25);font-size:10px;letter-spacing:0.1em;margin:0;">KARLANG AI PLATFORM // AUTO-NOTIFICATION</p>
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
