import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getClientMessageHTML } from "@/emails/ClientMessageEmail";
import { getClientAutoReplyHTML } from "@/emails/ClientAutoReplyEmail";

export async function POST(req: Request) {
  try {
    const { name, email, message, projectType } = await req.json();

    // 1️⃣ Create transporter (Gmail SMTP example)
    // Use an App Password from Gmail (https://support.google.com/accounts/answer/185833)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // e.g., your email
        pass: process.env.GMAIL_PASS, // Gmail App password
      },
    });

    // 2️⃣ Email to yourself
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // your email
      subject: `🚀 New message from ${name}`,
      html: getClientMessageHTML({ name, email, projectType, message }),
    });

    // 3️⃣ Auto-reply to client
    await transporter.sendMail({
      from: `"Mahesh Nayak" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "✅ Thanks for reaching out!",
      html: getClientAutoReplyHTML({ name, projectType }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ success: false, error });
  }
}
