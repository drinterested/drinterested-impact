import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(request: NextRequest) {
  try {
    // Read the PDF file from the public directory
    const pdfPath = path.join(process.cwd(), "public", "Dr. Interested 2025 Annual Impact Report.pdf")
    const pdfBuffer = fs.readFileSync(pdfPath)

    // Return the PDF with proper headers for Google indexing
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Dr-Interested-2025-Annual-Impact-Report.pdf"',
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Robots-Tag": "index, follow",
        // Additional metadata headers for better SEO
        "Link": '<https://impact.drinterested.org/2025/annual>; rel="alternate"; type="text/html"',
      },
    })
  } catch (error) {
    console.error("Error serving PDF:", error)
    return new NextResponse("PDF not found", { status: 404 })
  }
}

// Metadata for the PDF route
export const metadata = {
  title: "Dr. Interested 2025 Annual Impact Report PDF",
  description:
    "Download the comprehensive 2025 Annual Impact Report PDF showcasing Dr. Interested's global impact across 106 countries, 160,000+ individuals impacted, and 367 executives.",
}
