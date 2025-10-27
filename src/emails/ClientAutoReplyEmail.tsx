export function getClientAutoReplyHTML({
  name,
  projectType,
}: {
  name: string;
  projectType: string;
}) {
  const firstName = name.split(" ")[0] || "there";

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Thanks for Reaching Out</title>
  </head>
  <body style="font-family:Inter,sans-serif;background:#0f1117;color:#e5e7eb;margin:0;padding:0;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#111827;border-radius:12px;overflow:hidden;border:1px solid #1f2937;box-shadow:0 0 30px rgba(0,0,0,0.4);">
            
            <!-- Header -->
            <tr>
              <td style="background:linear-gradient(90deg,#3b82f6,#06b6d4);text-align:center;padding:24px 32px;color:#fff;">
                <h1 style="margin:0;font-size:24px;">Mahesh Nayak</h1>
                <p style="margin:4px 0;font-size:14px;opacity:0.9;">Next-Gen Web Experiences That Convert</p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:32px;">
                <h2 style="margin-top:0;font-size:22px;color:#f9fafb;">Hey ${firstName}, thanks for reaching out 👋</h2>
                <p style="font-size:15px;line-height:1.6;color:#d1d5db;margin-top:16px;margin-bottom:16px;">
                  I just received your message about <strong>${projectType}</strong>. I appreciate you taking the time to connect. Every great project starts with a conversation, and I’m excited to explore how we can turn your idea into a high-performance digital product.
                </p>
                <p style="font-size:15px;line-height:1.6;color:#d1d5db;margin-bottom:24px;">
                  Within the next <strong>6-8 hours</strong>, you’ll get a reply with tailored insights or questions. If it’s urgent, feel free to ping me directly.
                </p>
                <a href="https://maphy.vercel.app" style="display:inline-block;background:linear-gradient(90deg,#3b82f6,#06b6d4);color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:600;font-size:15px;">View My Work →</a>
                
                <hr style="border:none;border-top:1px solid #1f2937;margin:30px 0;">
                
                <p style="font-size:14px;color:#9ca3af;margin-bottom:6px;">⚙️ In the meantime, here’s what I usually help clients with:</p>
                <ul style="list-style:none;padding-left:0;font-size:14px;color:#d1d5db;line-height:1.7;margin-top:6px;margin-bottom:20px;">
                  <li>• Full-stack web apps with Next.js & Node.js</li>
                  <li>• AI-powered automation & chat systems</li>
                  <li>• Clean, modern UI/UX that converts</li>
                  <li>• Scalable digital products that grow revenue</li>
                </ul>
                
                <p style="font-size:13px;color:#9ca3af;font-style:italic;">You’ve taken the first step toward something great. Now let’s make it real.</p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="text-align:center;padding:32px;">
                <p style="font-size:13px;color:#6b7280;">
                  — Mahesh Nayak<br/>
                  Full-Stack Developer | Next.js • Node.js • MongoDB<br/>
                  <a href="mailto:maheshnayak9639@gmail.com" style="color:#60a5fa;text-decoration:none;">maheshnayak9639@gmail.com</a>
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
