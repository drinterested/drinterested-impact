import type { Metadata } from "next"
import SeoSchema from "@/components/seo-schema"
import { generateBreadcrumbSchema } from "@/lib/seo-utils"
import AnnualReportClient from "./2025/annual/annual-client"
import { ANNUAL_CANONICAL, buildAnnualMetadata, buildAnnualWebPageSchema } from "./2025/annual/report-meta"

// `/` shows the latest (2025 Annual) report, but its canonical points at the dated URL so the two
// don't compete in search — and so link equity survives when a future report takes over `/`.
export const metadata: Metadata = buildAnnualMetadata(ANNUAL_CANONICAL)

export default function ImpactReportHomePage() {
  return (
    <>
      <SeoSchema id="home-webpage-schema" schema={buildAnnualWebPageSchema(ANNUAL_CANONICAL)} />
      <SeoSchema
        id="home-breadcrumb-schema"
        schema={generateBreadcrumbSchema([
          { name: "Dr. Interested", url: "https://www.drinterested.org" },
          { name: "Impact Reports", url: "https://impact.drinterested.org" },
          { name: "2025 Annual Impact Report", url: ANNUAL_CANONICAL },
        ])}
      />
      <AnnualReportClient />
    </>
  )
}
