import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ClientMessageEmail from "@/emails/ClientMessageEmail";
import ClientAutoReplyEmail from "@/emails/ClientAutoReplyEmail";

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, message, projectType } = await req.json();

    // 1️⃣ Email to yourself
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Your Gmail
      subject: `🚀 New message from ${name} (${projectType})`,
      html: ClientMessageEmail({ name, email, message, projectType }),
    });

    // 2️⃣ Auto-reply to client
    await transporter.sendMail({
      from: `"Mahesh Nayak" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Thanks for reaching out!",
      html: ClientAutoReplyEmail({ name, projectType }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ success: false, error });
  }
}
