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

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Dr. Interested 2025 Semi-Annual Impact Report | Healthcare Education Impact Assessment",
    template: "%s | Dr. Interested Impact Report 2025",
  },
  description:
    "Explore Dr. Interested's comprehensive 2025 Semi-Annual Impact Report showcasing measurable outcomes in healthcare education. Discover how we've empowered 500+ high school students through mentorship programs, research opportunities, and career development initiatives. View detailed metrics, student success stories, and community impact data from July-December 2024.",
  keywords: [
    "Dr. Interested impact report 2025",
    "healthcare education impact assessment",
    "high school medical mentorship results",
    "student healthcare career development outcomes",
    "medical education program effectiveness",
    "healthcare volunteer impact metrics",
    "student-led healthcare organization results",
    "high school healthcare internship outcomes",
    "medical career guidance success stories",
    "healthcare education nonprofit impact",
    "student mentorship program evaluation",
    "healthcare workforce development impact",
    "medical field exploration program results",
    "high school healthcare club achievements",
    "healthcare education community impact",
    "student leadership development healthcare",
    "medical career preparation program outcomes",
    "healthcare education accessibility impact",
    "diverse healthcare workforce development",
    "student healthcare research achievements",
    "healthcare education statistics 2025",
    "medical mentorship program ROI",
    "student healthcare engagement metrics",
    "healthcare career pipeline development",
    "medical education outreach impact",
    "healthcare diversity initiatives results",
    "student medical research participation",
    "healthcare education program evaluation",
    "medical career exploration outcomes",
    "healthcare workforce preparation impact",
  ],
  authors: [
    { name: "Dr. Interested Team", url: "https://drinterested.org/members" },
    { name: "Adil Mukhi", url: "https://drinterested.org/members" },
  ],
  creator: "Dr. Interested - Student-Led Healthcare Education Organization",
  publisher: "Dr. Interested",
  category: "Education",
  classification: "Healthcare Education Impact Report",
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://impact2025.drinterested.org",
    title: "Dr. Interested 2025 Semi-Annual Impact Report - Transforming Healthcare Education",
    description:
      "Discover how Dr. Interested empowered 500+ high school students in healthcare careers through our comprehensive 2025 impact report. View detailed metrics, success stories, and program outcomes that demonstrate our commitment to building a diverse healthcare workforce.",
    siteName: "Dr. Interested Impact Report",
    images: [
      {
        url: "https://impact2025.drinterested.org/impact-report-preview.png",
        width: 1200,
        height: 1200,
        alt: "Dr. Interested 2025 Semi-Annual Impact Report - First Half of 2025 - Healthcare Education Impact Assessment with Table of Contents",
        type: "image/png",
      },
      {
        url: "https://impact2025.drinterested.org/impact-report-preview.png",
        width: 800,
        height: 800,
        alt: "Dr. Interested Impact Report Cover",
        type: "image/png",
      },
    ],
    article: {
      publishedTime: "2025-01-01T00:00:00.000Z",
      modifiedTime: new Date().toISOString(),
      section: "Healthcare Education",
      tags: [
        "healthcare education",
        "impact report",
        "student mentorship",
        "medical careers",
        "high school programs",
        "healthcare workforce development",
        "medical education outcomes",
        "student success metrics",
        "healthcare diversity",
        "career development",
      ],
      authors: ["https://drinterested.org/members"],
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrInterested",
    creator: "@DrInterested",
    title: "Dr. Interested 2025 Impact Report - Empowering Future Healthcare Professionals",
    description:
      "📊 Our 2025 Semi-Annual Impact Report is here! Discover how we've empowered 500+ students to explore healthcare careers. #HealthcareEducation #StudentMentorship #MedicalCareers",
    images: [
      {
        url: "https://impact2025.drinterested.org/impact-report-preview.png",
        alt: "Dr. Interested 2025 Semi-Annual Impact Report - First Half of 2025",
        width: 1200,
        height: 1200,
      },
    ],
  },
  alternates: {
    canonical: "https://impact2025.drinterested.org",
    languages: {
      "en-US": "https://impact2025.drinterested.org",
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
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "icon", url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    { rel: "icon", url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    { rel: "apple-touch-icon", url: "/impact-report-preview.png", sizes: "180x180" },
    { rel: "shortcut icon", url: "/favicon.ico" },
  ],
  manifest: "/site.webmanifest",
  generator: "Next.js",
  applicationName: "Dr. Interested Impact Report",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://impact2025.drinterested.org"),
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
  other: {
    "msapplication-TileColor": "#405862",
    "theme-color": "#405862",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileImage": "/impact-report-preview.png",
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
  "@id": "https://impact2025.drinterested.org/#report",
  name: "Dr. Interested 2025 Semi-Annual Impact Report",
  headline: "Dr. Interested 2025 Semi-Annual Impact Report - Healthcare Education Outcomes",
  description:
    "Comprehensive impact assessment of Dr. Interested's healthcare education programs, showcasing student outcomes, program growth, and community impact metrics for July-December 2024.",
  url: "https://impact2025.drinterested.org",
  datePublished: "2025-01-01T00:00:00.000Z",
  dateModified: new Date().toISOString(),
  inLanguage: "en-US",
  image: {
    "@type": "ImageObject",
    url: "https://impact2025.drinterested.org/impact-report-preview.png",
    width: 1200,
    height: 1200,
    caption: "Dr. Interested 2025 Semi-Annual Impact Report Cover",
  },
  author: {
    "@type": "Organization",
    name: "Dr. Interested",
    url: "https://drinterested.org",
    logo: "https://drinterested.org/logo.png",
    sameAs: [
      "https://www.instagram.com/dr.interested/",
      "https://www.linkedin.com/company/dr-interested",
      "https://discord.gg/pzbGRgsGXY",
    ],
  },
  publisher: {
    "@type": "Organization",
    name: "Dr. Interested",
    url: "https://drinterested.org",
    logo: {
      "@type": "ImageObject",
      url: "https://impact2025.drinterested.org/logo.png",
      width: 1200,
      height: 1200,
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
    url: "https://drinterested.org",
  },
  isPartOf: {
    "@type": "WebSite",
    name: "Dr. Interested",
    url: "https://drinterested.org",
  },
  potentialAction: {
    "@type": "ReadAction",
    target: "https://impact2025.drinterested.org",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://drinterested.org/#organization",
  name: "Dr. Interested",
  alternateName: ["Dr Interested", "Doctor Interested"],
  url: "https://drinterested.org",
  logo: "https://impact2025.drinterested.org/logo.png",
  image: "https://impact2025.drinterested.org/impact-report-preview.png",
  description:
    "Dr. Interested is a student-led organization dedicated to empowering high school students to explore careers in healthcare through comprehensive education, mentorship programs, and hands-on experiences.",
  foundingDate: "2020",
  sameAs: [
    "https://www.instagram.com/dr.interested/",
    "https://www.linkedin.com/company/dr-interested",
    "https://discord.gg/pzbGRgsGXY",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "admin@drinterested.org",
    contactType: "customer service",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "high school students interested in healthcare careers",
  },
  educationalCredentialAwarded: "Volunteer Hours Certificate",
  offers: [
    {
      "@type": "Course",
      name: "Healthcare Career Exploration",
      description: "Comprehensive program introducing students to various healthcare career paths",
      provider: {
        "@type": "Organization",
        "@id": "https://drinterested.org/#organization",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        validFrom: "2024-01-01",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseSchedule: {
          "@type": "Schedule",
          duration: "P6M",
          repeatFrequency: "P1Y",
        },
        instructor: {
          "@type": "Organization",
          "@id": "https://drinterested.org/#organization",
        },
      },
      coursePrerequisites: "High school enrollment",
      educationalLevel: "High School",
      teaches: ["Healthcare career exploration", "Medical field overview", "Career pathway planning"],
    },
    {
      "@type": "Course",
      name: "Medical Research Mentorship",
      description: "Hands-on research experience with healthcare professionals",
      provider: {
        "@type": "Organization",
        "@id": "https://drinterested.org/#organization",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        validFrom: "2024-01-01",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "blended",
        courseSchedule: {
          "@type": "Schedule",
          duration: "P3M",
          repeatFrequency: "P6M",
        },
        instructor: {
          "@type": "Person",
          name: "Healthcare Professional Mentors",
          jobTitle: "Medical Professionals",
        },
      },
      coursePrerequisites: "Completion of Healthcare Career Exploration",
      educationalLevel: "High School",
      teaches: ["Research methodology", "Data analysis", "Scientific writing", "Healthcare research ethics"],
    },
  ],
  knowsAbout: [
    "Healthcare Education",
    "Medical Career Development",
    "Student Mentorship",
    "Healthcare Workforce Development",
    "Medical Research Training",
    "Healthcare Volunteer Programs",
  ],
  memberOf: {
    "@type": "Organization",
    name: "Healthcare Education Community",
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
      item: "https://drinterested.org",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Impact Reports",
      item: "https://impact2025.drinterested.org",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "2025 Semi-Annual Report",
      item: "https://impact2025.drinterested.org",
    },
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://impact2025.drinterested.org/#website",
  url: "https://impact2025.drinterested.org",
  name: "Dr. Interested 2025 Impact Report",
  description:
    "Comprehensive impact assessment showcasing Dr. Interested's healthcare education program outcomes and student success metrics",
  publisher: {
    "@type": "Organization",
    name: "Dr. Interested",
    url: "https://drinterested.org",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://impact2025.drinterested.org/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  mainEntity: {
    "@type": "Report",
    name: "Dr. Interested 2025 Semi-Annual Impact Report",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Dr. Interested's 2025 Semi-Annual Impact Report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Interested's 2025 Semi-Annual Impact Report is a comprehensive assessment of our healthcare education programs' effectiveness from July-December 2024, showcasing student outcomes, program growth metrics, and community impact data.",
      },
    },
    {
      "@type": "Question",
      name: "How many students has Dr. Interested impacted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Interested has empowered over 500 high school students to explore healthcare careers through our mentorship programs, educational initiatives, and hands-on experiences.",
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
        text: "Students can join Dr. Interested by visiting our main website at drinterested.org, joining our Discord community, or contacting us at admin@drinterested.org to learn about current opportunities and programs.",
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
        {/* Enhanced Meta Tags for SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="author" content="Dr. Interested Team" />
        <meta name="copyright" content="Dr. Interested 2025" />
        <meta
          name="abstract"
          content="Dr. Interested's comprehensive 2025 Semi-Annual Impact Report showcasing healthcare education program outcomes and student success metrics."
        />
        <meta name="topic" content="Healthcare Education Impact Assessment" />
        <meta
          name="summary"
          content="Detailed analysis of Dr. Interested's impact on 500+ high school students pursuing healthcare careers through mentorship and education programs."
        />
        <meta name="Classification" content="Healthcare Education Report" />
        <meta name="designer" content="Dr. Interested Team" />
        <meta name="reply-to" content="admin@drinterested.org" />
        <meta name="owner" content="Dr. Interested" />
        <meta name="url" content="https://impact2025.drinterested.org" />
        <meta name="identifier-URL" content="https://impact2025.drinterested.org" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Dr. Interested 2025 Impact Report" />
        <meta name="category" content="Healthcare Education" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 Days" />
        <meta name="subtitle" content="Empowering High School Students in Healthcare Careers" />
        <meta name="target" content="High school students, educators, healthcare professionals, parents" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-title" content="Dr. Interested Impact" />
        <meta name="application-name" content="Dr. Interested Impact Report" />

        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6MYCRFPPGE" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6MYCRFPPGE', {
              page_title: 'Dr. Interested 2025 Impact Report',
              page_location: 'https://impact2025.drinterested.org',
              content_group1: 'Impact Report',
              content_group2: '2025 Semi-Annual',
              custom_map: {
                'custom_parameter_1': 'healthcare_education',
                'custom_parameter_2': 'student_mentorship'
              }
            });
            
            // Enhanced ecommerce tracking for engagement
            gtag('event', 'page_view', {
              page_title: 'Dr. Interested 2025 Impact Report',
              page_location: 'https://impact2025.drinterested.org',
              content_group1: 'Impact Report',
              content_group2: 'Healthcare Education'
            });
          `}
        </Script>

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="your-google-search-console-verification-code" />

        {/* Bing Webmaster Tools */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />

        {/* Yandex Verification */}
        <meta name="yandex-verification" content="your-yandex-verification-code" />

        {/* Enhanced Structured Data */}
        <Script id="impact-report-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(impactReportSchema)}
        </Script>
        <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationSchema)}
        </Script>
        <Script id="breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(breadcrumbSchema)}
        </Script>
        <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteSchema)}
        </Script>
        <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(faqSchema)}
        </Script>

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://www.canva.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* DNS prefetch for performance optimization */}
        <link rel="dns-prefetch" href="https://drinterested.org" />

        {/* Canonical and alternate links */}
        <link rel="canonical" href="https://impact2025.drinterested.org" />
        <link rel="alternate" hrefLang="en-US" href="https://impact2025.drinterested.org" />
        <link rel="alternate" hrefLang="x-default" href="https://impact2025.drinterested.org" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/impact-report-preview.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* RSS Feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Dr. Interested Updates"
          href="https://drinterested.org/rss.xml"
        />

        {/* Sitemap reference */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SeoSchema schema={impactReportSchema} />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1" role="main" itemScope itemType="https://schema.org/Report">
              <meta itemProp="name" content="Dr. Interested 2025 Semi-Annual Impact Report" />
              <meta
                itemProp="description"
                content="Comprehensive impact assessment of Dr. Interested's healthcare education programs"
              />
              <meta itemProp="url" content="https://impact2025.drinterested.org" />
              <meta itemProp="image" content="https://impact2025.drinterested.org/impact-report-preview.png" />
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
