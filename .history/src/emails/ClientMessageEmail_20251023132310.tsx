export default function ClientMessageEmail({
  name,
  email,
  message,
  projectType,
}: {
  name: string;
  email: string;
  message: string;
  projectType?: string;
}) {
  return `
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>New Contact Message</title>
    </head>
    <body style="font-family: Inter, sans-serif; background-color: #f9fafb; margin:0; padding:0;">
      <div style="max-width:600px; margin:0 auto; background:#fff; padding:32px; border-radius:12px; border:1px solid #e5e7eb;">
        <h2 style="color:#111827;">💼 New Project Inquiry</h2>
        <p style="color:#6b7280;">You’ve received a new message from your portfolio contact form.</p>
        <hr style="border-color:#e5e7eb; margin:20px 0;" />

        <p><strong>👤 Name:</strong> ${name}</p>
        <p><strong>📧 Email:</strong> ${email}</p>
        ${projectType ? `<p><strong>💡 Project Type:</strong> ${projectType}</p>` : ""}
        <p><strong>📝 Message:</strong></p>
        <div style="background:#f3f4f6; padding:12px; border-radius:8px; white-space:pre-wrap;">${message}</div>

        <hr style="border-color:#e5e7eb; margin:24px 0;" />
        <p style="font-size:13px; color:#6b7280; text-align:center;">
          🔔 Sent from your Portfolio Contact Form<br/>
          <a href="https://maphy.vercel.app/" style="color:#3b82f6; text-decoration:none;">maiphy.vercel.app</a>
        </p>
      </div>
    </body>
  </html>
  `;
}
