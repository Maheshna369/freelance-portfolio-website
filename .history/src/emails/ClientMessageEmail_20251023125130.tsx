// emails/ClientMessageEmail.tsx
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

export default function ClientMessageEmail({
  name,
  email,
  message,
  projectType,
}: {
  name: string;
  email: string;
  message: string;
  projectType: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>New contact message from {name}</Preview>
      <Body
        style={{ backgroundColor: "#f9fafb", fontFamily: "Inter, sans-serif" }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "32px",
            borderRadius: "12px",
            maxWidth: "600px",
            margin: "0 auto",
            border: "1px solid #e5e7eb",
          }}
        >
          <Section>
            <Heading
              style={{ color: "#111827", fontSize: "22px", fontWeight: "bold" }}
            >
              💼 New Project Inquiry
            </Heading>
            <Text style={{ color: "#6b7280", fontSize: "14px" }}>
              You’ve received a new message from your portfolio contact form.
            </Text>
          </Section>

          <Hr style={{ borderColor: "#e5e7eb", margin: "20px 0" }} />

          <Section>
            <Text style={{ color: "#111827", fontWeight: "600" }}>
              👤 Name:
            </Text>
            <Text style={{ color: "#374151" }}>{name}</Text>

            <Text
              style={{ color: "#111827", fontWeight: "600", marginTop: "12px" }}
            >
              📧 Email:
            </Text>
            <Text style={{ color: "#374151" }}>{email}</Text>

            <Text
              style={{ color: "#111827", fontWeight: "600", marginTop: "12px" }}
            >
              🛠 Project Type:
            </Text>
            <Text style={{ color: "#374151" }}>{projectType}</Text>

            <Text
              style={{ color: "#111827", fontWeight: "600", marginTop: "12px" }}
            >
              📝 Message:
            </Text>
            <Text
              style={{
                color: "#374151",
                background: "#f3f4f6",
                padding: "12px",
                borderRadius: "8px",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </Text>
          </Section>

          <Hr style={{ borderColor: "#e5e7eb", margin: "24px 0" }} />

          <Section style={{ textAlign: "center" }}>
            <Text style={{ color: "#6b7280", fontSize: "13px" }}>
              🔔 Sent from your Portfolio Contact Form
              <br />
              <a
                href="https://maphy.vercel.app/"
                style={{ color: "#3b82f6", textDecoration: "none" }}
              >
                maiphy.vercel.app
              </a>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
