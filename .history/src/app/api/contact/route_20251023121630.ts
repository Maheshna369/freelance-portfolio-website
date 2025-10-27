import { NextResponse } from "next/server";
import { Resend } from "resend";
import ClientMessageEmail from "@/emails/ClientMessageEmail";
import ClientAutoReplyEmail from "@/emails/ClientAutoReplyEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 1️⃣ Send to you
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "maheshnayakofficial@gmail.com",
      subject: `🚀 New message from ${name}`,
      react: ClientMessageEmail({ name, email, message }),
    });

    // 2️⃣ Auto reply to client
    await resend.emails.send({
      from: "Mahesh Nayak <onboarding@resend.dev>",
      to: email,
      subject: "✅ Thanks for reaching out!",
      react: ClientAutoReplyEmail({ name }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
