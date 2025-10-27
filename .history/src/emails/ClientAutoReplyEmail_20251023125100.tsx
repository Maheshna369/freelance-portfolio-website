// emails/ClientAutoReplyEmail.tsx
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Button,
  Hr,
} from "@react-email/components";

export default function ClientAutoReplyEmail({
  name,
  projectType,
}: {
  name: string;
  projectType: string;
}) {
  const firstName = name.split(" ")[0] || "there";

  return (
    <Html>
      <Head />
      <Preview>
        Thanks for reaching out — Let’s create something powerful together 🚀
      </Preview>
      <Body
        style={{
          backgroundColor: "#0f1117",
          color: "#e5e7eb",
          fontFamily:
            "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
          padding: "0",
          margin: "0",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#111827",
            borderRadius: "12px",
            border: "1px solid #1f2937",
            overflow: "hidden",
            boxShadow: "0 0 30px rgba(0,0,0,0.4)",
          }}
        >
          {/* HEADER */}
          <Section
            style={{
              background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
              padding: "24px 32px",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <Heading style={{ fontSize: "24px", fontWeight: "700", margin: 0 }}>
              🚀 MAIPHY
            </Heading>
            <Text style={{ fontSize: "14px", marginTop: "4px", opacity: 0.9 }}>
              Next-Gen Web Experiences That Convert
            </Text>
          </Section>

          {/* MAIN CONTENT */}
          <Section style={{ padding: "32px" }}>
            <Heading
              as="h2"
              style={{
                fontSize: "22px",
                color: "#f9fafb",
                marginBottom: "12px",
                lineHeight: "1.4",
              }}
            >
              Hey {firstName}, thanks for reaching out 👋
            </Heading>

            <Text
              style={{
                fontSize: "15px",
                lineHeight: "1.6",
                color: "#d1d5db",
                marginBottom: "16px",
              }}
            >
              I just received your message about <strong>{projectType}</strong>.
              I appreciate you taking the time to connect. Every great project
              starts with a conversation, and I’m excited to explore how we can
              turn your idea into a high-performance digital product.
            </Text>

            <Text
              style={{
                fontSize: "15px",
                color: "#d1d5db",
                marginBottom: "24px",
                lineHeight: "1.6",
              }}
            >
              Within the next <strong>6-8 hours</strong>, you’ll get a reply
              with tailored insights or questions. If urgent, feel free to ping
              me directly.
            </Text>

            <Button
              href="https://maphy.vercel.app"
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "15px",
                letterSpacing: "0.3px",
                boxShadow: "0 4px 14px rgba(59,130,246,0.4)",
              }}
            >
              View My Work →
            </Button>

            <Hr style={{ borderColor: "#1f2937", margin: "30px 0" }} />

            <Text
              style={{
                color: "#9ca3af",
                fontSize: "13px",
                fontStyle: "italic",
              }}
            >
              You’ve taken the first step toward something great. Let’s make it
              real.
            </Text>
          </Section>

          {/* FOOTER */}
          <Hr style={{ borderColor: "#1f2937", margin: "28px 0" }} />
          <Section style={{ textAlign: "center", paddingBottom: "32px" }}>
            <Text style={{ fontSize: "13px", color: "#6b7280" }}>
              — Mahesh Nayak
              <br />
              Full-Stack Developer | Next.js • Node.js • MongoDB
              <br />
              <a
                href="mailto:maheshnayak9639@gmail.com"
                style={{ color: "#60a5fa", textDecoration: "none" }}
              >
                maheshnayak9639@gmail.com
              </a>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
