import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { 
          error: "Resend API key is not configured. Please add RESEND_API_KEY to your .env.local file or Vercel environment variables." 
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await req.json();
    const { name, email, topic, message } = body;

    // Server-side field validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Send email via Resend API (Sending to Resend account owner email for unverified onboarding domain)
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "sagarsonewane1@gmail.com";

    const response = await resend.emails.send({
      from: "Sagar Portfolio <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: `[${topic}] New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #FAF7F0; border: 2px dashed #E8C468; border-radius: 8px;">
          <h2 style="color: #D9633B; margin-top: 0;">New Message from Portfolio Scrapbook ✉️</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #E1DDD3; font-weight: bold; width: 100px;">Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #E1DDD3;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #E1DDD3; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #E1DDD3;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #E1DDD3; font-weight: bold;">Topic:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #E1DDD3;">span style="background-color: #FEF3C7; padding: 2px 8px; border-radius: 4px;">${topic}</span></td>
            </tr>
          </table>

          <div style="background-color: #FFFFFF; padding: 16px; border: 1px solid #E1DDD3; border-radius: 6px; white-space: pre-wrap; font-size: 14px; color: #1C1C1A;">
            ${message}
          </div>

          <p style="font-size: 12px; color: #78716C; margin-top: 24px; text-align: center;">
            Sent from Sagar Sonewane's Personal Portfolio Website
          </p>
        </div>
      `
    });

    if (response.error) {
      console.error("Resend API Error:", response.error);
      return NextResponse.json(
        { error: response.error.message || "Failed to send email via Resend API." },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, id: response.data?.id });
  } catch (error: any) {
    console.error("Contact API Route Error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error." },
      { status: 500 }
    );
  }
}
