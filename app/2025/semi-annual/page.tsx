import type { Metadata } from "next"
import SemiAnnualReportClient from "./semi-annual-client"

export const metadata: Metadata = {
  title: "Dr. Interested 2025 Semi-Annual Impact Report | Healthcare Education Impact Assessment",
  description:
    "Explore Dr. Interested's comprehensive 2025 Semi-Annual Impact Report (January - June 2025) showcasing measurable outcomes in healthcare education. Discover how we've impacted students through mentorship programs, research opportunities, and career development initiatives across 6+ programs in 65+ countries.",
  alternates: {
    canonical: "https://impact.drinterested.org/2025/semi-annual",
  },
  openGraph: {
    title: "Dr. Interested 2025 Semi-Annual Impact Report - Healthcare Education Excellence",
    description:
      "Discover Dr. Interested's 2025 Semi-Annual Impact Report (January - June 2025) showcasing 550+ members, 350,000+ views, 6+ programs, and impact across 65+ countries. Our comprehensive assessment demonstrates measurable outcomes in healthcare education.",
    url: "https://impact.drinterested.org/2025/semi-annual",
    siteName: "Dr. Interested Impact Report",
    images: [
      {
        url: "https://impact.drinterested.org/impact-report-og.png",
        width: 1200,
        height: 630,
        alt: "Dr. Interested 2025 Semi-Annual Impact Report",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Interested 2025 Semi-Annual Impact Report",
    description:
      "550+ members | 350,000+ views | 6+ programs | 65+ countries | View our 2025 semi-annual impact assessment! #HealthcareEducation #ImpactReport",
    images: ["https://impact.drinterested.org/impact-report-twitter.png"],
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
    "article:published_time": "2025-07-01T00:00:00.000Z",
    "article:modified_time": new Date().toISOString(),
    "article:section": "Healthcare Education",
    "article:tag": "healthcare education, semi-annual report, impact report",
  },
}

export default function SemiAnnualReportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://impact.drinterested.org/2025/semi-annual#webpage",
            url: "https://impact.drinterested.org/2025/semi-annual",
            name: "Dr. Interested 2025 Semi-Annual Impact Report",
            description:
              "Comprehensive semi-annual impact assessment showcasing Dr. Interested's healthcare education program outcomes",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://impact.drinterested.org/#website",
            },
            about: {
              "@type": "Thing",
              name: "Healthcare Education Impact Assessment",
            },
            mainEntity: {
              "@type": "Report",
              name: "Dr. Interested 2025 Semi-Annual Impact Report",
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
                  name: "2025 Semi-Annual Impact Report",
                  item: "https://impact.drinterested.org/2025/semi-annual",
                },
              ],
            },
          }),
        }}
      />
      <SemiAnnualReportClient />
    </>
  )
}
