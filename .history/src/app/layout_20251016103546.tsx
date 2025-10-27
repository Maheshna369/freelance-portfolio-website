import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahesh Nayak | Freelance Web Developer & Next.js Expert",
  description:
    "I build blazing-fast, SEO-optimized websites using MERN & Next.js. Hire me to craft responsive web apps, SaaS dashboards, and landing pages that convert visitors into clients.",
  keywords: [
    "Mahesh Nayak",
    "Freelance Web Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "Full Stack Web Development",
    "Hire Web Developer India",
    "Portfolio Website Developer",
    "Responsive Website Design",
    "Custom Web Application",
  ],
  authors: [{ name: "Mahesh Nayak", url: "https://maphy.vercel.app" }],
  creator: "Mahesh Nayak",
  publisher: "Mahesh Nayak",
  openGraph: {
    title: "Mahesh Nayak | Freelance Web Developer & Next.js Expert",
    description:
      "Hire a high-performance web developer specialized in Next.js & MERN Stack. I design modern, responsive, and conversion-focused web apps.",
    url: "https://maphy.vercel.app",
    siteName: "Mahesh Nayak Portfolio",
    images: [
      {
        url: "https://maphy.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mahesh Nayak - Freelance Web Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahesh Nayak | Freelance Web Developer & Next.js Expert",
    description:
      "Building fast, modern, and scalable websites using Next.js, React, and MERN stack.",
    creator: "@maheshnayak",
    images: ["https://maphy.vercel.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://maphy.vercel.app"),
  alternates: {
    canonical: "https://maphy.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 🔍 Structured Data (Schema Markup for SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mahesh Nayak",
              url: "https://maphy.vercel.app",
              image: "https://maphy.vercel.app/og-image.jpg",
              sameAs: [
                "https://github.com/maheshnayak",
                "https://www.linkedin.com/in/maheshnayak",
                "https://twitter.com/maheshnayak",
              ],
              jobTitle: "Freelance Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Mahesh Nayak Digital Studio",
              },
              alumniOf: "Khallikote Unitary University",
              knowsAbout: [
                "Next.js",
                "React",
                "MERN Stack",
                "Web Development",
                "Frontend Performance Optimization",
              ],
              description:
                "I build high-performance, SEO-optimized websites using Next.js and MERN stack.",
            }),
          }}
        />
      </head>
      <body className="">{children}</body>
    </html>
  );
}
