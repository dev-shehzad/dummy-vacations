import { Abril_Fatface, Work_Sans, Yellowtail } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import Footer from "@/components/footer"

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril-fatface",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
})

const yellowtail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yellowtail",
})

// ✅ SEO Metadata
export const metadata = {
  metadataBase: new URL("https://www.linkvacations.com"),

  title: "Link Vacations | Rental Vacacional @ Mexico Riviera",
  description:
    "Discover the beauty of Mexico's Playa del Carmen with Link Vacations. Book accommodations, tours, and car rentals with ease.",

  generator: "Link Vacations",
  keywords: [
    "Link Vacations",
    "Playa del Carmen Rentals",
    "Mexico Riviera Rentals",
    "Vacation Rentals",
    "Tours in Playa del Carmen",
    "Car Rentals Mexico",
    "Beach Vacations",
    "Travel Mexico",
    "Holiday Rentals",
    "Resort Stays",
    "Luxury Rentals",
  ],

  authors: [{ name: "Link Vacations", url: "https://www.linkvacations.com" }],

  openGraph: {
    title: "Link Vacations | Rental Vacacional @ Mexico Riviera",
    description:
      "Book your dream vacation in Playa del Carmen with Link Vacations – rentals, tours, and car rentals all in one place.",
    url: "https://www.linkvacations.com",
    siteName: "Link Vacations",
    images: [
      {
        url: "https://www.linkvacations.com/favicon.png", // <-- apna OG image
        width: 1200,
        height: 630,
        alt: "Link Vacations - Playa del Carmen Rentals",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  alternates: {
    canonical: "https://www.linkvacations.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

// ✅ JSON-LD Structured Data (without social links)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Link Vacations",
  url: "https://www.linkvacations.com",
  image: "https://www.linkvacations.com/logo.png", // <-- apna logo
  address: {
    "@type": "PostalAddress",
    addressLocality: "Playa del Carmen",
    addressCountry: "MX",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${abrilFatface.variable} ${workSans.variable} ${yellowtail.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
