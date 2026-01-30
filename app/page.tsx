import type { Metadata } from "next"
import ImpactReportPageClient from "./ImpactReportPageClient"

export const metadata: Metadata = {
  title: "Dr. Interested 2025 Annual Impact Report | Healthcare Education Impact Assessment",
  description:
    "Explore Dr. Interested's comprehensive 2025 Annual Impact Report (January 7, 2025 - January 7, 2026) showcasing 160,000+ individuals impacted, 900 volunteers, 367 executives across 106 countries. Discover our measurable outcomes in healthcare education, mentorship programs, and global workforce development.",
  alternates: {
    canonical: "https://impact.drinterested.org",
  },
  openGraph: {
    title: "Dr. Interested 2025 Annual Impact Report - Transforming Global Healthcare Education",
    description:
      "Our comprehensive 2025 Annual Impact Report reveals how Dr. Interested has impacted 160,000+ individuals across 106 countries. Discover detailed program metrics, community outcomes, and evidence-based results from 367 executives, 1400 members, and 900 volunteers in healthcare education.",
    url: "https://impact.drinterested.org",
    siteName: "Dr. Interested Impact Report",
    images: [
      {
        url: "https://impact.drinterested.org/impact-report-og.png",
        width: 1200,
        height: 630,
        alt: "Dr. Interested 2025 Annual Impact Report - Global Healthcare Education Impact",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Interested 2025 Annual Impact Report - Global Healthcare Excellence",
    description:
      "160,000+ impacted | 900 volunteers | 367 executives | 106 countries | View our comprehensive annual impact assessment! #HealthcareEducation #ImpactReport #GlobalHealth",
    images: ["https://impact.drinterested.org/impact-report-twitter.png"],
  },
  keywords: [
    "Dr. Interested 2025 annual impact report",
    "healthcare education global impact assessment",
    "160000 individuals impacted healthcare",
    "900 volunteers healthcare education",
    "367 executives Dr. Interested",
    "1400 members healthcare organization",
    "106 countries healthcare impact",
    "medical mentorship program results 2025",
    "healthcare workforce development global",
    "student healthcare career outcomes 2026",
    "healthcare education nonprofit achievements",
    "student-led healthcare organization impact",
    "medical career guidance program evaluation",
    "healthcare education accessibility outcomes",
    "student mentorship program effectiveness 2025",
    "healthcare volunteer hours impact 2025",
    "medical field exploration program results",
    "healthcare workforce diversity development",
    "student healthcare research achievements",
    "healthcare education community impact metrics",
    "medical career preparation outcomes",
    "healthcare club impact analysis 2025",
    "student leadership healthcare sector",
    "healthcare education ROI assessment",
    "medical education impact measurement",
    "healthcare career exploration outcomes",
    "student healthcare engagement success",
    "healthcare education diversity initiatives",
    "medical research participation results",
    "healthcare workforce preparation impact",
  ],
  other: {
    "article:published_time": "2026-01-07T00:00:00.000Z",
    "article:modified_time": new Date().toISOString(),
    "article:section": "Healthcare Education",
    "article:tag": "healthcare education, impact report, annual report, medical careers, global health",
    "og:updated_time": new Date().toISOString(),
  },
}

export default function ImpactReportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://impact.drinterested.org/#webpage",
            url: "https://impact.drinterested.org",
            name: "Dr. Interested 2025 Annual Impact Report",
            description:
              "Comprehensive annual impact assessment showcasing Dr. Interested's healthcare education program outcomes across 160,000+ individuals globally",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://impact.drinterested.org/#website",
            },
            about: {
              "@type": "Thing",
              name: "Healthcare Education Global Impact Assessment",
            },
            mainEntity: {
              "@type": "Report",
              name: "Dr. Interested 2025 Annual Impact Report",
            },
            breadcrumb: {
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
                  name: "2025 Impact Report",
                  item: "https://impact.drinterested.org",
                },
              ],
            },
          }),
        }}
      />
      <ImpactReportPageClient />
    </>
  )
}
