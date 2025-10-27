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
import { motion } from "framer-motion";

export default function ClientAutoReplyEmail({ name }: { name: string }) {
  return (
    <Html>
      <Head />
      <Preview>
        Thanks for reaching out — Let's create something powerful together 🚀
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
          {/* GRADIENT HEADER BANNER */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
              padding: "24px 32px",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <Heading
              style={{
                fontSize: "24px",
                fontWeight: "700",
                margin: 0,
                letterSpacing: "0.5px",
              }}
            >
              🚀 MAIPHY
            </Heading>
            <Text
              style={{
                fontSize: "14px",
                marginTop: "4px",
                opacity: 0.9,
              }}
            >
              Next-Gen Web Experiences That Convert
            </Text>
          </motion.div>

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
              Hey {name.split(" ")[0] || "there"}, thanks for reaching out 👋
            </Heading>

            <Text
              style={{
                fontSize: "15px",
                lineHeight: "1.6",
                color: "#d1d5db",
                marginBottom: "16px",
              }}
            >
              I just got your message — and I appreciate you taking the time to
              connect. Every great project starts with a conversation, and I’m
              excited to explore how we can turn your idea into a
              high-performance digital product that actually drives results.
            </Text>

            <Text
              style={{
                fontSize: "15px",
                color: "#d1d5db",
                marginBottom: "24px",
                lineHeight: "1.6",
              }}
            >
              Within the next <strong>6-8 hours</strong>, you’ll receive a reply
              with a tailored strategy or questions about your project. If it’s
              urgent, feel free to ping me directly — I’m fast to respond.
            </Text>

            <Button
              href="https://maiphy.vercel.app"
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
                transition: "0.3s all ease",
              }}
            >
              View My Work →
            </Button>

            <Hr
              style={{
                borderColor: "#1f2937",
                margin: "30px 0",
              }}
            />

            <Text
              style={{
                fontSize: "14px",
                color: "#9ca3af",
                marginBottom: "6px",
              }}
            >
              ⚙️ In the meantime, here’s what I usually help clients with:
            </Text>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                color: "#d1d5db",
                fontSize: "14px",
                lineHeight: "1.7",
                marginTop: "6px",
                marginBottom: "20px",
              }}
            >
              <li>• Full-stack web apps with Next.js & Node.js</li>
              <li>• AI-powered automation & chat systems</li>
              <li>• Clean, modern UI/UX that converts</li>
              <li>• Scalable digital products that grow revenue</li>
            </ul>

            <Text
              style={{
                color: "#9ca3af",
                fontSize: "13px",
                fontStyle: "italic",
              }}
            >
              You’ve taken the first step toward something great. Now let’s make
              it real.
            </Text>
          </Section>

          {/* FOOTER */}
          <Hr style={{ borderColor: "#1f2937", margin: "28px 0" }} />
          <Section style={{ textAlign: "center", paddingBottom: "32px" }}>
            <Text
              style={{
                fontSize: "13px",
                color: "#6b7280",
              }}
            >
              — Mahesh Nayak
              <br />
              Full-Stack Developer | Next.js • Node.js • MongoDB
              <br />
              <a
                href="mailto:maheshnayakofficial@gmail.com"
                style={{ color: "#60a5fa", textDecoration: "none" }}
              >
                maheshnayakofficial@gmail.com
              </a>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
