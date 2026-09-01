import type { Metadata } from "next"

// Shared between /2025/annual and / (the site root also renders the latest = 2025 Annual report).
// Keeping this in one module means the two routes can't drift apart.

export const ANNUAL_CANONICAL = "https://impact.drinterested.org/2025/annual"
export const ANNUAL_OG_IMAGE = "https://impact.drinterested.org/impact-report-preview.png"
export const ANNUAL_PUBLISHED = "2026-01-07T00:00:00.000Z"

export const annualDescription =
  "Explore Dr. Interested's comprehensive 2025 Annual Impact Report (January 7, 2025 - January 7, 2026) showcasing 160,000+ individuals impacted, 900 volunteers, 367 executives across 106 countries. Discover our measurable outcomes in healthcare education, mentorship programs, and global workforce development."

export const annualKeywords = [
  "Dr. Interested 2025 annual impact report",
  "healthcare education global impact assessment",
  "160000 individuals impacted healthcare",
  "900 volunteers healthcare education",
  "367 executives Dr. Interested",
  "1400 members healthcare organization",
  "106 countries healthcare impact",
  "medical mentorship program results 2025",
  "healthcare workforce development global",
  "student-led healthcare organization impact",
  "healthcare education nonprofit achievements",
  "healthcare education community impact metrics",
]

export function buildAnnualMetadata(canonical: string): Metadata {
  return {
    title: "Dr. Interested 2025 Annual Impact Report | Healthcare Education Impact Assessment",
    description: annualDescription,
    alternates: { canonical },
    openGraph: {
      title: "Dr. Interested 2025 Annual Impact Report - Transforming Global Healthcare Education",
      description:
        "Our comprehensive 2025 Annual Impact Report reveals how Dr. Interested has impacted 160,000+ individuals across 106 countries. Detailed program metrics, community outcomes, and evidence-based results from 367 executives, 1400 members, and 900 volunteers.",
      url: canonical,
      siteName: "Dr. Interested Impact Report",
      images: [
        {
          url: ANNUAL_OG_IMAGE,
          width: 1200,
          height: 1200,
          alt: "Dr. Interested 2025 Annual Impact Report - Global Healthcare Education Impact",
          type: "image/png",
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: ANNUAL_PUBLISHED,
      modifiedTime: ANNUAL_PUBLISHED,
      section: "Healthcare Education",
    },
    twitter: {
      card: "summary_large_image",
      title: "Dr. Interested 2025 Annual Impact Report - Global Healthcare Excellence",
      description:
        "160,000+ impacted | 900 volunteers | 367 executives | 106 countries | View our comprehensive annual impact assessment! #HealthcareEducation #ImpactReport #GlobalHealth",
      images: [ANNUAL_OG_IMAGE],
    },
    keywords: annualKeywords,
    other: {
      "article:published_time": ANNUAL_PUBLISHED,
      "article:modified_time": ANNUAL_PUBLISHED,
      "article:section": "Healthcare Education",
      "article:tag": "healthcare education, impact report, annual report, medical careers, global health",
    },
  }
}

export function buildAnnualWebPageSchema(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: "Dr. Interested 2025 Annual Impact Report",
    description:
      "Comprehensive annual impact assessment showcasing Dr. Interested's healthcare education program outcomes across 160,000+ individuals globally",
    isPartOf: { "@type": "WebSite", "@id": "https://impact.drinterested.org/#website" },
    about: { "@type": "Thing", name: "Healthcare Education Global Impact Assessment" },
    mainEntity: { "@type": "Report", name: "Dr. Interested 2025 Annual Impact Report" },
    primaryImageOfPage: { "@type": "ImageObject", url: ANNUAL_OG_IMAGE },
    inLanguage: "en-US",
    datePublished: ANNUAL_PUBLISHED,
    dateModified: ANNUAL_PUBLISHED,
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
}
