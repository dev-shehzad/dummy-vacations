"use client"

import { useEffect } from "react"
import Link from "next/link"
import { accommodationsData } from "../../data/accomodations-data"
import { Users, Home, Leaf, Key, MapPin, Star, Quote } from "lucide-react"

export default function VillasViaTendenza() {
  useEffect(() => {
    // AOS library loading - this would work in your actual project
    // const loadAOS = async () => {
    //   const AOS = await import("aos")
    //   await import("aos/dist/aos.css")
    //   AOS.init({ duration: 1000 })
    // }
    // loadAOS()
  }, [])

  const villas = accommodationsData
    .filter(
      (accommodation) =>
        accommodation.location === "Villas Vía Tendenza" || accommodation.location === "Villas Via Tendenza",
    )
    .map((accommodation) => ({
      title: accommodation.name,
      image: accommodation.mainImage,
      price: accommodation.price,
      description: accommodation.shortDescription,
      slug: accommodation.slug,
      details: accommodation.amenities.map((amenity) => ({
        icon:
          amenity.icon === "👥"
            ? Users
            : amenity.icon === "🏠"
              ? Home
              : amenity.icon === "🌿"
                ? Leaf
                : amenity.icon === "🔑"
                  ? Key
                  : MapPin,
        text: amenity.text,
      })),
    }))

  return (
    <div className="min-h-screen bg-[#fae6da] relative overflow-hidden bg-[url(/accomodations/bg.jpg)] bg-no-repeat bg-top-right">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Heading */}
        <div className="mb-16">
          <h1 className="font-abril-fatface text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-2 leading-tight">
            Villas Vía Tendenza
          </h1>
          <p className="font-yellowtail text-2xl md:text-3xl text-orange-500 -mt-4">Luxury villas close to 5th Ave.</p>
        </div>

        {/* Intro Paragraphs */}
        <div className="space-y-8 max-w-5xl mb-20">
          <p className="font-work-sans text-sm md:text-md text-gray-700 leading-relaxed">
            Experience the allure of Villas Vía Tendenza by Link Vacations, an exquisite condo in Playa del Carmen.
            Nestled conveniently near the iconic 5th Avenue, this elegant retreat offers a seamless blend of comfort and
            style.
          </p>
          <p className="font-work-sans text-sm md:text-md text-gray-700 leading-relaxed">
            Indulge in luxury, explore the vibrant city life, and create unforgettable memories in this exquisite haven.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[65%_35%] gap-14 mb-16">
          {/* Villa Cards Section - Left Side (takes 3 columns on xl screens) */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {villas.map((villa, i) => (
                <div
                  key={i}
                  className="bg-white shadow-lg overflow-hidden "
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <img
                    src={villa.image || "/placeholder.svg"}
                    alt={villa.title}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-abril-fatface text-xl md:text-2xl text-gray-900">{villa.title}</h3>
                      <div className="flex text-yellow-400">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-500 text-xs md:text-sm mb-2">Villas Vía Tendenza</p>
                    <div className="mb-4 border-t pt-3 border-black/20 border-b pb-3">
                      <span className="text-xs md:text-sm text-gray-600">From </span>
                      <span className="font-abril-fatface text-sm md:text-md ml-3 text-gray-900">{villa.price}</span>
                    </div>
                    <p className="text-gray-700 text-xs md:text-sm mb-4 leading-relaxed">{villa.description}</p>

                    <div className="space-y-2 mb-6 border-b border-black/10 pb-3">
                      {villa.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-xs md:text-sm text-gray-600">
                          <detail.icon className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
                          <span>{detail.text}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={`/accommodations/${villa.slug}`}>
                      <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded text-sm md:text-base transition-colors">
                        BOOK NOW
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Section - Right Side (takes 1 column on xl screens) */}
          <div className="xl:col-span-1 flex items-start justify-center pt-20 xl:justify-start">
            <div className="text-left max-w-sm lg:max-w-xs">
              <Quote className="w-5 h-5 text-[#00c0ae] shrink-0 mt-1" />
              <p className="font-work-sans text-base md:text-xl text-gray-700 italic leading-relaxed mb-6">
                "In the embrace of the Caribbean Sea, Playa del Carmen unveils its enchanting beauty. The rhythmic waves
                caress the shores of this coastal gem, inviting us to immerse ourselves in its warm embrace.
              </p>
              <p className="font-work-sans text-base md:text-lg text-gray-700 italic leading-relaxed">
                The sun-kissed sands glisten under the azure sky, a canvas of serenity and tranquility. Playa del
                Carmen, a haven where nature's poetry unfolds, beckoning us to lose ourselves in its timeless allure."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
