import type { MetadataRoute } from "next"

const baseUrl = "https://impact.drinterested.org"
const reportImage = `${baseUrl}/impact-report-preview.png`

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/2025/annual`,
      lastModified: new Date("2026-01-07T00:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 1,
      images: [reportImage],
    },
    {
      url: `${baseUrl}/2025/semi-annual`,
      lastModified: new Date("2025-07-01T00:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 0.8,
      images: [reportImage],
    },
    {
      url: `${baseUrl}/2025.pdf`,
      lastModified: new Date("2026-01-07T00:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ]
}
