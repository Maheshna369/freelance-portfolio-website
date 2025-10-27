export function getClientMessageHTML({
  name,
  email,
  projectType,
  message,
}: {
  name: string;
  email: string;
  projectType: string;
  message: string;
}) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>New Project Inquiry</title>
  </head>
  <body style="font-family:Inter,sans-serif;background:#f9fafb;margin:0;padding:0;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;padding:32px;border:1px solid #e5e7eb;">
            <tr>
              <td>
                <h2 style="margin:0;color:#111827;font-size:22px;">💼 New Project Inquiry</h2>
                <p style="color:#6b7280;font-size:14px;">You’ve received a new message from your portfolio contact form.</p>
              </td>
            </tr>
            <tr>
              <td style="padding-top:20px;">
                <p style="margin:0;font-weight:600;color:#111827;">👤 Name:</p>
                <p style="margin:4px 0;color:#374151;">${name}</p>

                <p style="margin:0;font-weight:600;color:#111827;">📧 Email:</p>
                <p style="margin:4px 0;color:#374151;">${email}</p>

                <p style="margin:0;font-weight:600;color:#111827;">📝 Project Type:</p>
                <p style="margin:4px 0;color:#374151;">${projectType}</p>

                <p style="margin:0;font-weight:600;color:#111827;">💬 Message:</p>
                <p style="margin:4px 0;padding:12px;background:#f3f4f6;border-radius:8px;color:#374151;white-space:pre-wrap;">${message}</p>
              </td>
            </tr>
            <tr>
              <td style="padding-top:24px;text-align:center;">
                <p style="font-size:13px;color:#6b7280;">🔔 Sent from your Portfolio Contact Form<br/>
                  <a href="https://maphy.vercel.app" style="color:#3b82f6;text-decoration:none;">maiphy.vercel.app</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}
