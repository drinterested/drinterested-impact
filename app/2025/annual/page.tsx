import type { Metadata } from "next"
import SeoSchema from "@/components/seo-schema"
import { generateBreadcrumbSchema } from "@/lib/seo-utils"
import AnnualReportClient from "./annual-client"
import { ANNUAL_CANONICAL, buildAnnualMetadata, buildAnnualWebPageSchema } from "./report-meta"

export const metadata: Metadata = buildAnnualMetadata(ANNUAL_CANONICAL)

export default function AnnualReportPage() {
  return (
    <>
      <SeoSchema id="annual-webpage-schema" schema={buildAnnualWebPageSchema(ANNUAL_CANONICAL)} />
      <SeoSchema
        id="annual-breadcrumb-schema"
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
