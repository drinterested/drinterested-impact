import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://impact.drinterested.org"
  const currentDate = new Date().toISOString()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/2025/annual`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/2025/semi-annual`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/2025.pdf`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.drinterested.org",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.drinterested.org/our-work",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.drinterested.org/members",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.drinterested.org/events",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.drinterested.org/blog",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.drinterested.org/contact",
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ]
}
