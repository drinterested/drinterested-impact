import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"
import SeoSchema from "@/components/seo-schema"
import { generateOrganizationSchema } from "@/lib/seo-utils"

const inter = Inter({ subsets: ["latin"] })

const OG_IMAGE = "https://impact.drinterested.org/impact-report-preview.png"
const REPORT_MODIFIED = "2026-01-07T00:00:00.000Z"

export const metadata: Metadata = {
  title: {
    default: "Dr. Interested 2025 Annual Impact Report | Healthcare Education Impact Assessment",
    template: "%s | Dr. Interested Impact Report",
  },
  description:
    "Explore Dr. Interested's comprehensive 2025 Annual Impact Report (January 7, 2025 - January 7, 2026) showcasing measurable outcomes in healthcare education. Discover how we've impacted 160,000+ individuals through mentorship programs, research opportunities, and career development initiatives. View detailed metrics and community impact data from 900 volunteers across 106 countries.",
  keywords: [
    "Dr. Interested 2025 annual impact report",
    "healthcare education impact assessment",
    "high school medical mentorship results",
    "student healthcare career development outcomes",
    "medical education program effectiveness",
    "healthcare volunteer impact metrics",
    "student-led healthcare organization results",
    "healthcare education nonprofit impact",
    "healthcare workforce development impact",
    "healthcare education community impact",
    "367 executives healthcare education",
    "1400 members Dr. Interested",
    "106 countries healthcare impact",
    "160000 impacted healthcare education",
    "900 volunteers healthcare education",
  ],
  authors: [
    { name: "Adil Mukhi", url: "https://www.drinterested.org/members" },
    { name: "Dr. Interested Team", url: "https://www.drinterested.org/members" },
  ],
  creator: "Adil Mukhi - Founder and Executive Director, Dr. Interested",
  publisher: "Dr. Interested",
  category: "Education",
  classification: "Healthcare Education Impact Report",
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://impact.drinterested.org",
    title: "Dr. Interested 2025 Annual Impact Report - Transforming Healthcare Education",
    description:
      "Discover how Dr. Interested impacted 160,000+ individuals across 106 countries through healthcare education. View comprehensive metrics from 367 executives, 1400 members, 900 volunteers, and 400+ mentor hours in our 2025 Annual Impact Report.",
    siteName: "Dr. Interested Impact Report",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 1200,
        alt: "Dr. Interested 2025 Annual Impact Report - Comprehensive Healthcare Education Impact Assessment",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrInterested",
    creator: "@DrInterested",
    title: "Dr. Interested 2025 Annual Impact Report - Healthcare Education Excellence",
    description:
      "📊 Our 2025 Annual Impact Report is here! 160,000+ impacted | 900 volunteers | 106 countries | 367 executives | 1400 members. #HealthcareEducation #ImpactReport",
    images: [
      {
        url: OG_IMAGE,
        alt: "Dr. Interested 2025 Annual Impact Report",
        width: 1200,
        height: 1200,
      },
    ],
  },
  alternates: {
    canonical: "https://impact.drinterested.org",
    languages: {
      "en-US": "https://impact.drinterested.org",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
  ],
  manifest: "/manifest.webmanifest",
  generator: "Next.js",
  applicationName: "Dr. Interested Annual Impact Report",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://impact.drinterested.org"),
  other: {
    "msapplication-TileColor": "#405862",
    "msapplication-TileImage": "/android-chrome-512x512.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#405862" },
    { media: "(prefers-color-scheme: dark)", color: "#4ecdc4" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

const impactReportSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  "@id": "https://impact.drinterested.org/#report",
  name: "Dr. Interested 2025 Annual Impact Report",
  headline: "Dr. Interested 2025 Annual Impact Report - Healthcare Education Outcomes",
  description:
    "Comprehensive impact assessment of Dr. Interested's healthcare education programs from January 7, 2025 to January 7, 2026, showcasing 160,000+ individuals impacted, 900 volunteers, 367 executives, 1400 members across 106 countries, and 400+ mentor hours.",
  url: "https://impact.drinterested.org/2025/annual",
  datePublished: "2026-01-07T00:00:00.000Z",
  dateModified: REPORT_MODIFIED,
  inLanguage: "en-US",
  image: {
    "@type": "ImageObject",
    url: OG_IMAGE,
    width: 1200,
    height: 1200,
    caption: "Dr. Interested 2025 Annual Impact Report Cover",
  },
  author: {
    "@type": "Person",
    name: "Adil Mukhi",
    jobTitle: "Founder and Executive Director",
    url: "https://www.drinterested.org/members",
    worksFor: {
      "@type": "Organization",
      name: "Dr. Interested",
      url: "https://www.drinterested.org",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Dr. Interested",
    url: "https://www.drinterested.org",
    logo: {
      "@type": "ImageObject",
      url: "https://www.drinterested.org/android-chrome-512x512.png",
    },
  },
  about: [
    {
      "@type": "Thing",
      name: "Healthcare Education Impact",
      description: "Assessment of educational programs designed to prepare high school students for healthcare careers",
    },
    {
      "@type": "Thing",
      name: "Student Mentorship Programs",
      description: "Evaluation of mentorship initiatives connecting students with healthcare professionals",
    },
    {
      "@type": "Thing",
      name: "Medical Career Development",
      description: "Analysis of career preparation and guidance programs for aspiring healthcare professionals",
    },
  ],
  keywords:
    "healthcare education, student mentorship, medical careers, impact assessment, educational outcomes, healthcare workforce development, student success metrics",
  mainEntity: {
    "@type": "EducationalOrganization",
    name: "Dr. Interested",
    description:
      "Student-led organization empowering high school students to explore healthcare careers through education, mentorship, and hands-on experiences",
    url: "https://www.drinterested.org",
  },
  isPartOf: {
    "@type": "WebSite",
    name: "Dr. Interested Impact Report",
    url: "https://impact.drinterested.org",
  },
  potentialAction: {
    "@type": "ReadAction",
    target: "https://impact.drinterested.org/2025/annual",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Dr. Interested",
      item: "https://www.drinterested.org",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Impact Reports",
      item: "https://impact.drinterested.org",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "2025 Annual Report",
      item: "https://impact.drinterested.org/2025/annual",
    },
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://impact.drinterested.org/#website",
  url: "https://impact.drinterested.org",
  name: "Dr. Interested Impact Reports",
  description:
    "Dr. Interested's impact reports — measurable healthcare education outcomes across 160,000+ individuals, 900 volunteers, and 106 countries.",
  publisher: {
    "@type": "Organization",
    name: "Dr. Interested",
    url: "https://www.drinterested.org",
  },
  inLanguage: "en-US",
  mainEntity: {
    "@type": "Report",
    name: "Dr. Interested 2025 Annual Impact Report",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Dr. Interested's 2025 Annual Impact Report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Interested's 2025 Annual Impact Report is a comprehensive assessment of our healthcare education programs' effectiveness from January 7, 2025 to January 7, 2026, showcasing 160,000+ individuals impacted, program growth metrics, and global community impact data across 106 countries.",
      },
    },
    {
      "@type": "Question",
      name: "How many individuals has Dr. Interested impacted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Interested has impacted 160,000+ individuals through our healthcare education programs, volunteer initiatives, and mentorship experiences. Our organization includes 367 executives, 1400 members, and 900 volunteers across 106 countries.",
      },
    },
    {
      "@type": "Question",
      name: "What programs does Dr. Interested offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Interested offers healthcare career exploration programs, medical research mentorship, volunteer opportunities, internship programs, and educational workshops designed to prepare high school students for healthcare careers.",
      },
    },
    {
      "@type": "Question",
      name: "How can students get involved with Dr. Interested?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Students can join Dr. Interested by visiting drinterested.org, joining our Discord community, or contacting us at admin@drinterested.org to learn about current opportunities and programs.",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="author" content="Dr. Interested Team" />
        <meta name="copyright" content="Dr. Interested" />

        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6MYCRFPPGE" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6MYCRFPPGE');
          `}
        </Script>

        {/* Structured data */}
        <SeoSchema id="impact-report-schema" schema={impactReportSchema} />
        <SeoSchema id="organization-schema" schema={generateOrganizationSchema()} />
        <SeoSchema id="breadcrumb-schema" schema={breadcrumbSchema} />
        <SeoSchema id="website-schema" schema={websiteSchema} />
        <SeoSchema id="faq-schema" schema={faqSchema} />

        {/* Preconnect / DNS-prefetch for the resources the report pages load */}
        <link rel="preconnect" href="https://www.canva.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.drinterested.org" />

        {/* RSS Feed (main site) */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Dr. Interested Updates"
          href="https://www.drinterested.org/rss.xml"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1" role="main">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
