import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f1eb] to-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="relative w-24 h-24 mx-auto mb-8 opacity-60">
          <Image
            src="/circle-logo.png"
            alt="Dr. Interested Logo"
            fill
            className="rounded-full object-cover grayscale"
            sizes="96px"
          />
        </div>

        <h1 className="text-6xl font-bold text-[#405862] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#405862] mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist. This impact report site only contains our 2025 Semi-Annual Impact
          Report.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-[#405862] text-white hover:bg-[#334852] px-6 py-3 rounded-md font-medium transition-all hover:shadow-md hover:scale-105 duration-300"
          >
            <Home className="h-4 w-4" />
            View Impact Report
          </Link>
          <Link
            href="https://drinterested.org"
            className="flex items-center justify-center gap-2 bg-[#4ecdc4] text-white hover:bg-[#3db8b8] px-6 py-3 rounded-md font-medium transition-all hover:shadow-md hover:scale-105 duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Go to Main Site
          </Link>
        </div>
      </div>
    </div>
  )
}
