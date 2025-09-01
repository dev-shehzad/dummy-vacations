"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [accommodationsOpen, setAccommodationsOpen] = useState(false)
  const [linkOpen, setLinkOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAccommodationsOpen, setMobileAccommodationsOpen] = useState(false)
  const [mobileLinkOpen, setMobileLinkOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const mobileMenuRef = useRef(null)
  const pathname = usePathname()

  // Check if current page is home
  const isHomePage = pathname === "/"

  // Ensure component is mounted on client side
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  // Get active menu based on pathname, only after component is mounted
  const activeMenu = mounted
    ? (() => {
        if (pathname === "/") return "home"
        if (pathname.startsWith("/accommodations")) return "accommodations"
        if (pathname === "/tours") return "yacht"
        if (pathname === "/locations" || pathname === "/faq" || pathname === "/link") return "link"
        if (pathname === "/my-bookings") return "bookings"
        return "home"
      })()
    : "home"

  // Show loading state or return null during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <>
        {/* Desktop Header */}
        <header
          className={`top-0 z-50 px-6 py-4 font-work-sans text-sm hidden md:block ${isHomePage ? "absolute left-1/2 right-0" : "relative bg-white shadow-sm"}`}
        >
          {isHomePage ? (
            // Home page layout - navigation only on right side
            <nav className="flex items-center justify-start gap-1">
              <div className="bg-[#00c0ae] flex items-center gap-1">
                <Link href="/">
                  <button className="text-white hover:bg-white/10 cursor-pointer px-4 py-2 font-medium transition-colors">
                    Home
                  </button>
                </Link>
                <div className="relative">
                  <button className="text-white hover:bg-white/10 cursor-pointer px-4 py-2 font-medium flex items-center gap-1 transition-colors">
                    Accommodations
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <Link href="/tours">
                  <button className="text-white hover:bg-white/10 cursor-pointer px-4 py-2 font-medium transition-colors">
                    Yacht & Experiences
                  </button>
                </Link>
                <div className="relative">
                  <button className="text-white hover:bg-white/10 cursor-pointer px-4 py-2 font-medium flex items-center gap-1 transition-colors">
                    LINK
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <Link href="/my-bookings">
                  <button className="text-white hover:bg-white/10 cursor-pointer px-4 py-2 font-medium transition-colors">
                    My Bookings
                  </button>
                </Link>
              </div>
            </nav>
          ) : (
            // Other pages layout - logo on left, navigation on right
            <div className="flex items-center justify-between">
              <Link href="/">
                <img className="h-[60px] w-[60px]" src="/logo.webp" alt="Link Vacations" />
              </Link>
              <nav className="flex items-center gap-1">
                <div className="bg-[#00c0ae] flex items-center gap-1">
                  <Link href="/">
                    <button className="text-white hover:bg-white/10 cursor-pointer px-4 py-2 font-medium transition-colors">
                      Home
                    </button>
                  </Link>
                  <div className="relative">
                    <button className="text-white hover:bg-white/10 cursor-pointer px-4 py-2 font-medium flex items-center gap-1 transition-colors">
                      Accommodations
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  <Link href="/tours">
                    <button className="text-white hover:bg-white/10 cursor-pointer px-4 py-2 font-medium transition-colors">
                      Yacht & Experiences
                    </button>
                  </Link>
                  <div className="relative">
                    <button className="text-white hover:bg-white/10 cursor-pointer px-4 py-2 font-medium flex items-center gap-1 transition-colors">
                      LINK
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  <Link href="/my-bookings">
                    <button className="text-white hover:bg-white/10 cursor-pointer px-4 py-2 font-medium transition-colors">
                      My Bookings
                    </button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </header>

        {/* Mobile Header */}
        <header className="max-md:block top-0 left-0 right-0 z-50 px-4 py-4 md:hidden">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img className="h-[80px] w-[80px]" src="/logo.webp" alt="" />
            </Link>
            <button className="p-2">
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-black block"></span>
                <span className="w-full h-0.5 bg-black block"></span>
                <span className="w-full h-0.5 bg-black block"></span>
              </div>
            </button>
          </div>
        </header>
      </>
    )
  }

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`top-0 z-50 px-6 py-4 font-work-sans text-sm hidden md:block ${isHomePage ? "absolute left-1/2 right-0" : "relative bg-white shadow-sm"}`}
      >
        {isHomePage ? (
          // Home page layout - navigation only on right side
          <nav className="flex items-center justify-start gap-1">
            <div className="bg-[#00c0ae] flex items-center gap-1">
              {/* Home Button */}
              <Link href="/">
                <button
                  className={`${activeMenu === "home" ? "bg-orange-500 text-white hover:bg-orange-600" : "text-white hover:bg-orange-600"} cursor-pointer px-4 py-2 font-medium transition-colors`}
                >
                  Home
                </button>
              </Link>

              {/* Accommodations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAccommodationsOpen(true)}
                onMouseLeave={() => setAccommodationsOpen(false)}
              >
                <Link href="/accommodations">
                  <button
                    className={`${activeMenu === "accommodations" ? "bg-orange-500 text-white hover:bg-orange-600" : "text-white hover:bg-orange-600"} cursor-pointer px-4 py-2 font-medium flex items-center gap-1 transition-colors`}
                  >
                    Accommodations
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </Link>
                <div
                  className={`absolute top-full left-0 bg-white border-0 shadow-lg min-w-[200px] overflow-hidden transform transition-all duration-300 origin-top ${
                    accommodationsOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                  }`}
                >
                  <Link href="/accommodations/playa-mamitas-apartment" className="block">
                    <button className="cursor-pointer w-full text-left text-gray-700 hover:bg-gray-50 px-4 py-3 transition">
                      Playa Mamitas Apartments
                    </button>
                  </Link>
                  <Link href="/accommodations/lunada-beach" className="block">
                    <button className="cursor-pointer w-full text-left text-gray-700 hover:bg-gray-50 px-4 py-3 transition">
                      Lunada Beach Condos
                    </button>
                  </Link>
                  <Link href="/accommodations/villas-via-tendenza" className="block">
                    <button className="cursor-pointer w-full text-left text-gray-700 hover:bg-gray-50 px-4 py-3 transition">
                      Villas Via Tendenza
                    </button>
                  </Link>
                </div>
              </div>

              {/* Yacht & Experiences */}
              <Link href="/tours">
                <button
                  className={`${activeMenu === "yacht" ? "bg-orange-500 text-white hover:bg-orange-600" : "text-white hover:bg-orange-600"} cursor-pointer px-4 py-2 font-medium transition-colors`}
                >
                  Yacht & Experiences
                </button>
              </Link>

              {/* LINK Dropdown */}
              <div className="relative" onMouseEnter={() => setLinkOpen(true)} onMouseLeave={() => setLinkOpen(false)}>
                <Link href="/link">
                  <button
                    className={`${activeMenu === "link" ? "bg-orange-500 text-white hover:bg-orange-600" : "text-white hover:bg-orange-600"} cursor-pointer px-4 py-2 font-medium flex items-center gap-1 transition-colors`}
                  >
                    LINK
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </Link>
                <div
                  className={`absolute top-full left-0 bg-white border-0 shadow-lg min-w-[200px] overflow-hidden transform transition-all duration-300 origin-top ${
                    linkOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                  }`}
                >
                  <Link href="/locations" className="block">
                    <button className="cursor-pointer w-full text-left text-gray-700 hover:bg-gray-50 px-4 py-3 transition">
                      Locations
                    </button>
                  </Link>
                  <Link href="/faq" className="block">
                    <button className="cursor-pointer w-full text-left text-gray-700 hover:bg-gray-50 px-4 py-3 transition">
                      FAQ (Frequently Asked Questions)
                    </button>
                  </Link>
                </div>
              </div>

              {/* My Bookings */}
              <Link href="/my-bookings">
                <button
                  className={`${activeMenu === "bookings" ? "bg-orange-500 text-white hover:bg-orange-600" : "text-white hover:bg-orange-600"} cursor-pointer px-4 py-2 font-medium transition-colors`}
                >
                  My Bookings
                </button>
              </Link>
            </div>
          </nav>
        ) : (
          // Other pages layout - logo on left, navigation on right
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link href="/">
              <img className="h-[80px] w-[80px]" src="/logo.webp" alt="Link Vacations" />
            </Link>
            <nav className="flex items-center gap-1">
              <div className="bg-[#00c0ae] flex items-center gap-1">
                {/* Home Button */}
                <Link href="/">
                  <button
                    className={`${activeMenu === "home" ? "bg-orange-500 text-white hover:bg-orange-600" : "text-white hover:bg-orange-600"} cursor-pointer px-4 py-2 font-medium transition-colors`}
                  >
                    Home
                  </button>
                </Link>

                {/* Accommodations Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setAccommodationsOpen(true)}
                  onMouseLeave={() => setAccommodationsOpen(false)}
                >
                  <Link href="/accommodations">
                    <button
                      className={`${activeMenu === "accommodations" ? "bg-orange-500 text-white hover:bg-orange-600" : "text-white hover:bg-orange-600"} cursor-pointer px-4 py-2 font-medium flex items-center gap-1 transition-colors`}
                    >
                      Accommodations
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </Link>
                  <div
                    className={`absolute top-full left-0 bg-white border-0 shadow-lg min-w-[200px] overflow-hidden transform transition-all duration-300 origin-top ${
                      accommodationsOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                    }`}
                  >
                    <Link href="/accommodations/playa-mamitas-apartment" className="block">
                      <button className="cursor-pointer w-full text-left text-gray-700 hover:bg-gray-50 px-4 py-3 transition">
                        Playa Mamitas Apartments
                      </button>
                    </Link>
                    <Link href="/accommodations/lunada-beach" className="block">
                      <button className="cursor-pointer w-full text-left text-gray-700 hover:bg-gray-50 px-4 py-3 transition">
                        Lunada Beach Condos
                      </button>
                    </Link>
                    <Link href="/accommodations/villas-via-tendenza" className="block">
                      <button className="cursor-pointer w-full text-left text-gray-700 hover:bg-gray-50 px-4 py-3 transition">
                        Villas Via Tendenza
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Yacht & Experiences */}
                <Link href="/tours">
                  <button
                    className={`${activeMenu === "yacht" ? "bg-orange-500 text-white hover:bg-orange-600" : "text-white hover:bg-orange-600"} cursor-pointer px-4 py-2 font-medium transition-colors`}
                  >
                    Yacht & Experiences
                  </button>
                </Link>

                {/* LINK Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setLinkOpen(true)}
                  onMouseLeave={() => setLinkOpen(false)}
                >
                  <Link href="/link">
                    <button
                      className={`${activeMenu === "link" ? "bg-orange-500 text-white hover:bg-orange-600" : "text-white hover:bg-orange-600"} cursor-pointer px-4 py-2 font-medium flex items-center gap-1 transition-colors`}
                    >
                      LINK
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </Link>
                  <div
                    className={`absolute top-full left-0 bg-white border-0 shadow-lg min-w-[200px] overflow-hidden transform transition-all duration-300 origin-top ${
                      linkOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                    }`}
                  >
                    <Link href="/locations" className="block">
                      <button className="cursor-pointer w-full text-left text-gray-700 hover:bg-gray-50 px-4 py-3 transition">
                        Locations
                      </button>
                    </Link>
                    <Link href="/faq" className="block">
                      <button className="cursor-pointer w-full text-left text-gray-700 hover:bg-gray-50 px-4 py-3 transition">
                        FAQ (Frequently Asked Questions)
                      </button>
                    </Link>
                  </div>
                </div>

                {/* My Bookings */}
                <Link href="/my-bookings">
                  <button
                    className={`${activeMenu === "bookings" ? "bg-orange-500 text-white hover:bg-orange-600" : "text-white hover:bg-orange-600"} cursor-pointer px-4 py-2 font-medium transition-colors`}
                  >
                    My Bookings
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Header */}
      <header className="max-md:block top-0 left-0 right-0 z-50 px-4 py-4 md:hidden">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <img className="h-[80px] w-[80px]" src="/logo.webp" alt="" />
          </Link>

          {/* Hamburger Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-black block"></span>
              <span className="w-full h-0.5 bg-black block"></span>
              <span className="w-full h-0.5 bg-black block"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Dark Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - 70% width */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 w-[70%] h-full bg-[#00c0ae] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <div className="text-white font-bold text-lg">LINK VACATIONS</div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-2 hover:bg-white/10 rounded transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto">
            {/* Home */}
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <div
                className={`${activeMenu === "home" ? "bg-orange-500" : ""} text-white px-4 py-4 border-b border-white/10 font-medium hover:bg-white/10 transition-colors`}
              >
                Home
              </div>
            </Link>

            {/* Accommodations */}
            <div>
              <button
                onClick={() => setMobileAccommodationsOpen(!mobileAccommodationsOpen)}
                className={`${activeMenu === "accommodations" ? "bg-orange-500" : ""} w-full text-left text-white px-4 py-4 border-b border-white/10 font-medium flex items-center justify-between hover:bg-white/10 transition-colors`}
              >
                Accommodations
                <svg
                  className={`w-4 h-4 transform transition-transform ${mobileAccommodationsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileAccommodationsOpen && (
                <div className="bg-white/10">
                  <Link href="/accommodations/playa-mamitas-apartment" onClick={() => setMobileMenuOpen(false)}>
                    <div className="text-white px-8 py-3 border-b border-white/10 hover:bg-white/10 transition-colors">
                      Playa Mamitas Apartments
                    </div>
                  </Link>
                  <Link href="/accommodations/lunada-beach" onClick={() => setMobileMenuOpen(false)}>
                    <div className="text-white px-8 py-3 border-b border-white/10 hover:bg-white/10 transition-colors">
                      Lunada Beach Condos
                    </div>
                  </Link>
                  <Link href="/accommodations/villas-via-tendenza" onClick={() => setMobileMenuOpen(false)}>
                    <div className="text-white px-8 py-3 border-b border-white/10 hover:bg-white/10 transition-colors">
                      Villas Via Tendenza
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Yacht & Experiences */}
            <Link href="/tours" onClick={() => setMobileMenuOpen(false)}>
              <div
                className={`${activeMenu === "yacht" ? "bg-orange-500" : ""} text-white px-4 py-4 border-b border-white/10 font-medium hover:bg-white/10 transition-colors`}
              >
                Yacht & Experiences
              </div>
            </Link>

            {/* LINK */}
            <div>
              <button
                onClick={() => setMobileLinkOpen(!mobileLinkOpen)}
                className={`${activeMenu === "link" ? "bg-orange-500" : ""} w-full text-left text-white px-4 py-4 border-b border-white/10 font-medium flex items-center justify-between hover:bg-white/10 transition-colors`}
              >
                LINK
                <svg
                  className={`w-4 h-4 transform transition-transform ${mobileLinkOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileLinkOpen && (
                <div className="bg-white/10">
                  <Link href="/locations" onClick={() => setMobileMenuOpen(false)}>
                    <div className="text-white px-8 py-3 border-b border-white/10 hover:bg-white/10 transition-colors">
                      Locations
                    </div>
                  </Link>
                  <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>
                    <div className="text-white px-8 py-3 border-b border-white/10 hover:bg-white/10 transition-colors">
                      FAQ (Frequently Asked Questions)
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* My Bookings */}
            <Link href="/my-bookings" onClick={() => setMobileMenuOpen(false)}>
              <div
                className={`${activeMenu === "bookings" ? "bg-orange-500" : ""} text-white px-4 py-4 border-b border-white/10 font-medium hover:bg-white/10 transition-colors`}
              >
                My Bookings
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
