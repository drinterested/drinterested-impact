"use client"

export default function AnnualReportClient() {
  return (
    <>
      {/* Hero Section with Impact Highlights */}
      <section className="bg-gradient-to-br from-[#f5f1eb] via-white to-[#f0f9ff] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#4ecdc4]/10 text-[#405862] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-[#4ecdc4] rounded-full animate-pulse"></div>
              2025 Annual Report • January 2026
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#405862] mb-6 leading-tight">
              2025 Annual
              <span className="block text-[#4ecdc4]">Impact Report</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover the comprehensive impact Dr. Interested has made in empowering healthcare professionals and students worldwide. This annual report covers our achievements from January 7, 2025 through January 7, 2026, showcasing our global reach and mission impact.
            </p>

            {/* Key Impact Metrics */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto mb-8">
              <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#4ecdc4]">
                <div className="text-2xl md:text-3xl font-bold text-[#405862]">367</div>
                <div className="text-xs md:text-sm text-gray-600">Executives</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#405862]">
                <div className="text-2xl md:text-3xl font-bold text-[#405862]">1,400</div>
                <div className="text-xs md:text-sm text-gray-600">Members</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#4ecdc4]">
                <div className="text-2xl md:text-3xl font-bold text-[#405862]">106</div>
                <div className="text-xs md:text-sm text-gray-600">Countries</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#405862]">
                <div className="text-2xl md:text-3xl font-bold text-[#405862]">20+</div>
                <div className="text-xs md:text-sm text-gray-600">Events</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#4ecdc4]">
                <div className="text-2xl md:text-3xl font-bold text-[#405862]">160K+</div>
                <div className="text-xs md:text-sm text-gray-600">Impacted</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#405862]">
                <div className="text-2xl md:text-3xl font-bold text-[#405862]">900</div>
                <div className="text-xs md:text-sm text-gray-600">Volunteers</div>
              </div>
            </div>

            {/* Report Details */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600 mb-12">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#4ecdc4] rounded-full"></div>
                <span className="font-medium">Reporting Period:</span> January 7, 2025 - January 7, 2026
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#405862] rounded-full"></div>
                <span className="font-medium">Published:</span> January 2026
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#4ecdc4] rounded-full"></div>
                <span className="font-medium">Report Type:</span> Annual Assessment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Report Embed Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Report Introduction */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#405862] mb-4">Comprehensive Impact Assessment</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our detailed report showcases quantifiable outcomes, program growth metrics, and the tangible impact we've
                made in empowering the next generation of healthcare professionals across the globe.
              </p>
            </div>

            {/* Interactive Report Embed */}
            <div className="relative">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingTop: "129.4118%",
                  paddingBottom: 0,
                  boxShadow: "0 4px 20px 0 rgba(63,69,81,0.15)",
                  marginTop: "1.6em",
                  marginBottom: "0.9em",
                  overflow: "hidden",
                  borderRadius: "12px",
                  willChange: "transform",
                  border: "1px solid #e5e7eb",
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    border: "none",
                    padding: 0,
                    margin: 0,
                  }}
                  src="https://www.canva.com/design/DAG87nuP0Xw/xPnDJIxYiFDYVE-hmlMxRA/view?embed"
                  allowFullScreen
                  allow="fullscreen"
                  title="Dr. Interested 2025 Annual Impact Report - Comprehensive Healthcare Education Assessment"
                  aria-label="Interactive annual impact report showing Dr. Interested's achievements across 160,000+ individuals globally"
                />
              </div>

              {/* Annual Report Attribution and Actions */}
              <div className="bg-gray-50 rounded-lg p-6 mt-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <h3 className="font-semibold text-[#405862] mb-1">
                      Dr. Interested 2025 Annual Impact Report
                    </h3>
                    <p className="text-sm text-gray-600">
                      Created by{" "}
                      <span className="font-semibold">Adil Mukhi</span>, Founder and Executive Director
                    </p>
                  </div>
                  <div className="flex gap-3 flex-wrap justify-center md:justify-end">
                    <a
                      href="https://www.canva.com/design/DAG87nuP0Xw/xPnDJIxYiFDYVE-hmlMxRA/view?utm_content=DAG87nuP0Xw&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#405862] text-white hover:bg-[#334852] px-4 py-2 rounded-md text-sm font-medium transition-all hover:shadow-md"
                    >
                      View on Canva
                    </a>
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: "Dr. Interested 2025 Annual Impact Report",
                            text: "Check out Dr. Interested's comprehensive 2025 annual impact report showcasing 160,000+ individuals impacted across 106 countries!",
                            url: "https://impact.drinterested.org",
                          })
                        }
                      }}
                      className="bg-[#4ecdc4] text-white hover:bg-[#3db8b8] px-4 py-2 rounded-md text-sm font-medium transition-all hover:shadow-md"
                    >
                      Share Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#405862] to-[#334852]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Global Mission to Transform Healthcare Education</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              Be part of our growing community impacting 160,000+ individuals across 106 countries. Together, we're building
              a more diverse, accessible, and impactful pathway into healthcare careers for the next generation of
              healthcare professionals worldwide.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://drinterested.org"
                className="bg-white text-[#405862] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:scale-105 duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Visit Main Website
              </a>
              <a
                href="https://discord.gg/pzbGRgsGXY"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4ecdc4] text-white hover:bg-[#3db8b8] px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:scale-105 duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
