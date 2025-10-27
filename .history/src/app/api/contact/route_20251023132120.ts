import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ClientMessageEmail from "@/emails/ClientMessageEmail";
import ClientAutoReplyEmail from "@/emails/ClientAutoReplyEmail";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, message, projectType } = await req.json();

    // 1️⃣ Send to yourself
    await transporter.sendMail({
      from: `"Mahesh Nayak" <${process.env.GMAIL_USER}>`,
      to: "maheshnayak9639@gmail.com",
      subject: `🚀 New message from ${name}`,
      html: ClientMessageEmail({ name, email, message, projectType }),
    });

    // 2️⃣ Auto-reply to client
    await transporter.sendMail({
      from: `"Mahesh Nayak" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "✅ Thanks for reaching out!",
      html: ClientAutoReplyEmail({ name, projectType }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error });
  }
}
