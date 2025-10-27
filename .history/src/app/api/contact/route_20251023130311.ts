import { NextResponse } from "next/server";
import { Resend } from "resend";
import ClientMessageEmail from "@/emails/ClientMessageEmail";
import ClientAutoReplyEmail from "@/emails/ClientAutoReplyEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, projectType } = await req.json();

    // Send to yourself
    await resend.emails.send({
      from: "Mahesh Nayak <onboarding@resend.dev>",
      to: "maheshnayak9639@gmail.com",
      subject: `🚀 New message from ${name}`,
      react: ClientMessageEmail({ name, email, message, projectType }),
    });

    // Auto reply to client
    await resend.emails.send({
      from: "Mahesh Nayak <onboarding@resend.dev>",
      to: email,
      subject: "✅ Thanks for reaching out!",
      react: ClientAutoReplyEmail({ name, projectType }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
