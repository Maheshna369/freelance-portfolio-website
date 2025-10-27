import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { renderToStaticMarkup } from "react-dom/server";
import ClientMessageEmail from "@/emails/ClientMessageEmail";
import ClientAutoReplyEmail from "@/emails/ClientAutoReplyEmail";

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

    // Email to yourself
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🚀 New message from ${name} (${projectType})`,
      html: renderToStaticMarkup(
        ClientMessageEmail({ name, email, message, projectType })
      ),
    });

    // Auto-reply to client
    await transporter.sendMail({
      from: `"Mahesh Nayak" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Thanks for reaching out!",
      html: renderToStaticMarkup(ClientAutoReplyEmail({ name, projectType })),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ success: false, error });
  }
}
