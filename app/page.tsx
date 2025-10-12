import type { Metadata } from "next"
import ImpactReportPageClient from "./ImpactReportPageClient"

export const metadata: Metadata = {
  title: "Dr. Interested 2025 Semi-Annual Impact Report | Healthcare Education Impact Assessment",
  description:
    "Explore Dr. Interested's comprehensive 2025 Semi-Annual Impact Report showcasing measurable outcomes in healthcare education. Discover how we've empowered 500+ high school students through mentorship programs, research opportunities, and career development initiatives. View detailed metrics, student success stories, and community impact data from July-December 2024.",
  alternates: {
    canonical: "https://impact2025.drinterested.org",
  },
  openGraph: {
    title: "Dr. Interested 2025 Impact Report - Transforming Healthcare Education for High School Students",
    description:
      "📊 Our comprehensive 2025 Semi-Annual Impact Report reveals how Dr. Interested has successfully empowered over 500 high school students to explore healthcare careers. Discover detailed program metrics, inspiring student success stories, measurable community impact, and evidence-based outcomes from our innovative mentorship and education initiatives.",
    url: "https://impact2025.drinterested.org",
    siteName: "Dr. Interested Impact Report",
    images: [
      {
        url: "https://impact2025.drinterested.org/impact-report-og.png",
        width: 1200,
        height: 630,
        alt: "Dr. Interested 2025 Semi-Annual Impact Report - Healthcare Education Impact Dashboard",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "🏥 Dr. Interested 2025 Impact Report - Healthcare Education Success Stories",
    description:
      "📈 500+ students empowered | 🎓 Healthcare career pathways opened | 🤝 Mentorship programs expanded | View our comprehensive impact assessment! #HealthcareEducation #StudentSuccess #MedicalCareers #ImpactReport",
    images: ["https://impact2025.drinterested.org/impact-report-twitter.png"],
  },
  keywords: [
    "Dr. Interested 2025 impact report",
    "healthcare education assessment July December 2024",
    "high school medical mentorship program results",
    "student healthcare career development outcomes 2025",
    "medical education nonprofit impact metrics",
    "healthcare workforce diversity development report",
    "student-led healthcare organization achievements",
    "high school healthcare internship program evaluation",
    "medical career guidance success rate analysis",
    "healthcare education accessibility impact study",
    "student mentorship program effectiveness 2025",
    "healthcare volunteer hours impact assessment",
    "medical field exploration program outcomes",
    "diverse healthcare workforce pipeline development",
    "student healthcare research project results",
    "healthcare education community engagement metrics",
    "medical career preparation program evaluation",
    "high school healthcare club impact analysis",
    "student leadership development healthcare sector",
    "healthcare education program ROI assessment",
    "medical education outreach impact measurement",
    "healthcare career exploration program statistics",
    "student healthcare engagement success metrics",
    "medical mentorship program effectiveness study",
    "healthcare education diversity initiatives results",
    "student medical research participation outcomes",
    "healthcare workforce preparation impact data",
    "medical career pipeline development assessment",
    "healthcare education accessibility improvement metrics",
    "student healthcare volunteer impact evaluation",
  ],
  other: {
    "article:published_time": "2025-01-01T00:00:00.000Z",
    "article:modified_time": new Date().toISOString(),
    "article:section": "Healthcare Education",
    "article:tag": "healthcare education, impact report, student mentorship, medical careers",
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
            "@id": "https://impact2025.drinterested.org/#webpage",
            url: "https://impact2025.drinterested.org",
            name: "Dr. Interested 2025 Semi-Annual Impact Report",
            description:
              "Comprehensive impact assessment showcasing Dr. Interested's healthcare education program outcomes and student success metrics",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://impact2025.drinterested.org/#website",
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
                  name: "2025 Impact Report",
                  item: "https://impact2025.drinterested.org",
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
