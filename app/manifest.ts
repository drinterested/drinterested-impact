import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Interested 2025 Impact Report",
    short_name: "Dr. Interested Impact",
    description:
      "Dr. Interested's comprehensive 2025 Annual Impact Report showcasing achievements in healthcare education across 160,000+ individuals in 106 countries with 367 executives, 1400 members, and 900 volunteers.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#405862",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en-US",
    categories: ["education", "healthcare", "nonprofit"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32 48x48",
        type: "image/x-icon",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/circle-logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/circle-logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/circle-logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
