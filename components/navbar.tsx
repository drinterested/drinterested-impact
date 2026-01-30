"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ArrowLeft, Instagram, Linkedin, ExternalLink, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Determine current report from pathname
  const getCurrentReportLabel = () => {
    if (pathname.includes("2025/semi-annual")) return "2025 Semi-Annual"
    if (pathname.includes("2025/annual") || pathname === "/") return "2025 Annual"
    return "Reports"
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        scrolled ? "bg-white/95 shadow-md py-2 border-b" : "bg-transparent py-4",
      )}
      role="banner"
    >
      <div className="container flex items-center justify-between">
        {/* Left Section - Navigation */}
        <div className="flex items-center gap-4">
          <Link
            href="https://www.drinterested.org"
            className="flex items-center gap-2 text-sm font-medium text-[#405862] hover:text-[#4ecdc4] transition-colors group"
            aria-label="Return to Dr. Interested main website"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="hidden sm:inline">Go Home</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </Link>

          <div className="h-6 w-px bg-gray-300" aria-hidden="true" />

          <Link href="/" className="flex items-center gap-2 group" aria-label="Dr. Interested Impact Report Home">
            <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/circle-logo.png"
                alt="Dr. Interested Logo"
                fill
                className="rounded-full object-cover"
                priority
                sizes="(max-width: 768px) 32px, 40px"
              />
            </div>
            <div className="font-semibold text-base md:text-lg">
              <span className="text-[#405862]">Dr.</span>{" "}
              <span className="text-[#4ecdc4] group-hover:underline decoration-wavy decoration-[#4ecdc4] underline-offset-4 transition-all duration-300">
                Interested
              </span>
            </div>
          </Link>
        </div>

        {/* Center Section - Report Dropdown */}
        <div className="hidden lg:flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 text-center px-3 py-2 rounded-lg hover:bg-[#4ecdc4]/10 transition-colors group">
                <div>
                  <div className="text-sm font-semibold text-[#405862] group-hover:text-[#4ecdc4] transition-colors">
                    {getCurrentReportLabel()}
                  </div>
                  <div className="text-xs text-gray-600">Impact Report</div>
                </div>
                <ChevronDown className="h-4 w-4 text-[#405862] group-hover:text-[#4ecdc4] transition-colors" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              <DropdownMenuLabel className="text-[#405862]">Select Year & Report</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs font-semibold text-gray-500">2025</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link href="/" className="cursor-pointer hover:bg-[#4ecdc4]/10">
                    Annual Report
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/2025/semi-annual" className="cursor-pointer hover:bg-[#4ecdc4]/10">
                    Semi-Annual Report
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs font-semibold text-gray-500">2026</DropdownMenuLabel>
                <DropdownMenuItem disabled className="text-gray-400 cursor-not-allowed">
                  Annual Report (Coming Soon)
                </DropdownMenuItem>
                <DropdownMenuItem disabled className="text-gray-400 cursor-not-allowed">
                  Semi-Annual Report (Coming Soon)
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right Section - Social Links and Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1 text-xs text-gray-600 bg-[#4ecdc4]/10 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-[#4ecdc4] rounded-full animate-pulse" />
            <span>Comprehensive Impact</span>
          </div>

          <div className="flex items-center gap-2" role="group" aria-label="Social media links">
            <Link
              href="https://discord.gg/pzbGRgsGXY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#405862] hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200 p-1"
              aria-label="Join Dr. Interested Discord community"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="12" r="1" />
                <circle cx="15" cy="12" r="1" />
                <path d="M7.5 7.2c.3-.1.6-.2.8-.2h7.4c.2 0 .5.1.8.2M7.5 16.8c.3.1.6.2.8.2h7.4c.2 0 .5-.1.8-.2" />
                <path d="M16 3h-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2H4a2 2 0 0 0-2 2v3a8 8 0 0 0 4 7v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a8 8 0 0 0 4-7V5a2 2 0 0 0-2-2z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/dr.interested/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#405862] hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200 p-1"
              aria-label="Follow Dr. Interested on Instagram"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/dr-interested"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#405862] hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200 p-1"
              aria-label="Connect with Dr. Interested on LinkedIn"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
