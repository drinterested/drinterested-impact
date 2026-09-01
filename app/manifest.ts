import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Interested 2025 Impact Report",
    short_name: "Dr. Interested Impact",
    description:
      "Dr. Interested's 2025 Annual Impact Report — achievements in healthcare education across 160,000+ individuals in 106 countries, with 367 executives, 1,400 members, and 900 volunteers.",
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
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
