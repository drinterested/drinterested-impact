import type { Metadata } from "next"
import SeoSchema from "@/components/seo-schema"
import { generateBreadcrumbSchema } from "@/lib/seo-utils"
import SemiAnnualReportClient from "./semi-annual-client"

const CANONICAL = "https://impact.drinterested.org/2025/semi-annual"
const OG_IMAGE = "https://impact.drinterested.org/impact-report-preview.png"
const PUBLISHED = "2025-07-01T00:00:00.000Z"

export const metadata: Metadata = {
  title: "Dr. Interested 2025 Semi-Annual Impact Report | Healthcare Education Impact Assessment",
  description:
    "Explore Dr. Interested's 2025 Semi-Annual Impact Report (January - June 2025) showcasing measurable outcomes in healthcare education through mentorship programs, research opportunities, and career development initiatives across 6+ programs in 65+ countries.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Dr. Interested 2025 Semi-Annual Impact Report - Healthcare Education Excellence",
    description:
      "Dr. Interested's 2025 Semi-Annual Impact Report (January - June 2025): 550+ members, 350,000+ views, 6+ programs, and impact across 65+ countries.",
    url: CANONICAL,
    siteName: "Dr. Interested Impact Report",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 1200,
        alt: "Dr. Interested 2025 Semi-Annual Impact Report",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    section: "Healthcare Education",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Interested 2025 Semi-Annual Impact Report",
    description:
      "550+ members | 350,000+ views | 6+ programs | 65+ countries | View our 2025 semi-annual impact assessment! #HealthcareEducation #ImpactReport",
    images: [OG_IMAGE],
  },
  keywords: [
    "Dr. Interested 2025 semi-annual impact report",
    "healthcare education impact assessment",
    "550 members Dr. Interested",
    "350000 views healthcare education",
    "6 programs healthcare",
    "65 countries healthcare impact",
    "January June 2025 report",
  ],
  other: {
    "article:published_time": PUBLISHED,
    "article:modified_time": PUBLISHED,
    "article:section": "Healthcare Education",
    "article:tag": "healthcare education, semi-annual report, impact report",
  },
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#webpage`,
  url: CANONICAL,
  name: "Dr. Interested 2025 Semi-Annual Impact Report",
  description:
    "Comprehensive semi-annual impact assessment showcasing Dr. Interested's healthcare education program outcomes",
  isPartOf: { "@type": "WebSite", "@id": "https://impact.drinterested.org/#website" },
  about: { "@type": "Thing", name: "Healthcare Education Impact Assessment" },
  mainEntity: { "@type": "Report", name: "Dr. Interested 2025 Semi-Annual Impact Report" },
  primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
  inLanguage: "en-US",
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  publisher: {
    "@type": "Organization",
    name: "Dr. Interested",
    url: "https://www.drinterested.org",
    logo: {
      "@type": "ImageObject",
      url: "https://www.drinterested.org/android-chrome-512x512.png",
    },
  },
}

export default function SemiAnnualReportPage() {
  return (
    <>
      <SeoSchema id="semi-annual-webpage-schema" schema={webPageSchema} />
      <SeoSchema
        id="semi-annual-breadcrumb-schema"
        schema={generateBreadcrumbSchema([
          { name: "Dr. Interested", url: "https://www.drinterested.org" },
          { name: "Impact Reports", url: "https://impact.drinterested.org" },
          { name: "2025 Semi-Annual Impact Report", url: CANONICAL },
        ])}
      />
      <SemiAnnualReportClient />
    </>
  )
}
