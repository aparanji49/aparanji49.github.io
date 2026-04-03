import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GCScript } from "next-goatcounter";
import Script from "next/script";
import { SITE } from "../config/site";

const siteUrl = SITE.url;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sai Aparanji Nemmani",
  url: siteUrl,
  email: SITE.email,
  jobTitle: "Software Engineer",
  sameAs: [SITE.linkedin, SITE.github],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Virginia Tech",
  },
  knowsAbout: [
    "Full-stack web development",
    "REST APIs",
    "Node.js",
    "Python",
    "FastAPI",
    "LLMs",
    "Next.js",
    "TypeScript",
    "React",
    "Java",
    "Spring Boot",
    "Kafka",
    "AWS",
  ],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Sai Aparanji Nemmani | Software Engineer | Full Stack Web & AI (LLMs)",
    template: "%s | Sai Aparanji Nemmani",
  },
  description:
    "Full-stack software engineer (Masters in Computer Science from Virginia Tech, 3.88 GPA) building production web apps, REST APIs, and LLM-powered features. Next.js, TypeScript, React Query, Java/Spring Boot microservices, Node.js, Kafka, FastAPI, MongoDB, PostgreSQL, AWS, and CI/CD (GitHub Actions, Vercel). Open to U.S. roles.",
  keywords: [
    "Software Engineer",
    "Masters in Computer Science",
    "Bachelors in Computer Science",
    "Backend Developer",
    "Frontend Developer",
    "Full Stack Software Engineer",
    "Backend Engineer",
    "Frontend Engineer",
    "Forward Deployed Engineer",
    "Full Stack Engineer",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "React Query",
    "LLM",
    "Generative AI",
    "LangGraph",
    "FastAPI",
    "Java",
    "Node.js",
    "Express.js",
    "GraphQL",
    "Python",
    "Spring Boot",
    "Kafka",
    "Microservices",
    "Redis",
    "REST API",
    "AWS",
    "MongoDB",
    "PostgreSQL",
    "CI/CD",
    "Docker",
    "GCP",
    "Virginia Tech",
  ],
  authors: [{ name: "Sai Aparanji Nemmani", url: siteUrl }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sai Aparanji Nemmani",
    title:
      "Sai Aparanji Nemmani | Software Engineer | Full Stack Web & AI (LLMs)",
    description:
      "Production web applications, scalable APIs, and LLM integration—Next.js, TypeScript, Kafka, FastAPI, cloud, and CI/CD.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sai Aparanji Nemmani | Software Engineer | Full Stack Web & AI (LLMs)",
    description:
      "Full-stack engineer building production web apps and LLM-powered features.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body_custom">
        <Script
          src="https://platform.linkedin.com/badges/js/profile.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://kit.fontawesome.com/3e854f2b72.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          id="jsonld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <Navbar />
        <GCScript siteUrl="https://aparanji.goatcounter.com/count" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
