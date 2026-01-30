import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#405862] text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/circle-logo.png"
                  alt="Dr. Interested Logo"
                  fill
                  className="rounded-full object-cover"
                  sizes="48px"
                />
              </div>
              <div className="font-bold text-xl">
                <span className="text-white">Dr.</span> <span className="text-[#4ecdc4]">Interested</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering high school students to explore healthcare careers through comprehensive education, mentorship
              programs, and hands-on experiences. Building the diverse healthcare workforce of tomorrow.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://discord.gg/pzbGRgsGXY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200"
                aria-label="Join Dr. Interested Discord community"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
                className="text-gray-300 hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200"
                aria-label="Follow Dr. Interested on Instagram"
              >
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/dr-interested"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200"
                aria-label="Connect with Dr. Interested on LinkedIn"
              >
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link
                href="mailto:admin@drinterested.org"
                className="text-gray-300 hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200"
                aria-label="Email Dr. Interested"
              >
                <Mail className="h-6 w-6" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Impact Report Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#4ecdc4]">Impact Reports</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  2025 Semi-Annual Report
                </Link>
              </li>
              <li>
                <span className="text-gray-400 text-sm">New reports coming soon</span>
              </li>
            </ul>
          </div>

          {/* Main Website Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#4ecdc4]">Main Website</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://www.drinterested.org"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.drinterested.org/our-work"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Our Work <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.drinterested.org/events"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Events <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.drinterested.org/blog"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.drinterested.org/members"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Members <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.drinterested.org/contact"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              <p>© {currentYear} Dr. Interested. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="https://www.drinterested.org/privacy-policy"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://www.drinterested.org/terms"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
