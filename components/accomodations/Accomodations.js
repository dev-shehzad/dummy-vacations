"use client"
import Link from "next/link"
import { accommodationsData } from "@/data/accomodations-data"
import {
  Users,
  Home,
  TreePine,
  Key,
  MapPin,
  Snowflake,
  Trees,
  Waves,
  Tv,
  ChefHat,
  Building,
  Car,
  Flame,
  Wifi,
  Shield,
  Sparkles,
} from "lucide-react"

const Accommodations = () => {
  const accommodations = accommodationsData

  const getIconComponent = (iconName) => {
    const iconMap = {
      Users,
      Home,
      TreePine,
      Key,
      MapPin,
      Snowflake,
      Trees,
      Waves,
      Tv,
      ChefHat,
      Building,
      Car,
      Flame,
      Wifi,
      Shield,
      Sparkles,
    }
    return iconMap[iconName] || Users
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-yellow-400 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ))
  }

  return (
    <div className="min-h-screen bg-[#fafafa]  mx-auto">
      <main className="pt-7 pb-16 px-6 container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 text-left">
            <h1 className="text-4xl md:text-4xl font-abril-fatface text-gray-900 mb-6">Accommodations</h1>
            <p className="text-gray-600 text-md leading-relaxed max-w-4xl mx-auto">
              Experience the comfort of home with our Accommodations in Playa del Carmen. Spacious, fully-equipped and
              centrally located, our rentals offer the perfect blend of homely comforts and holiday luxuries.
            </p>
          </div>

          {/* Accommodations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation) => (
              <div
                key={accommodation.id}
                className="bg-white   border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={accommodation.mainImage || "/placeholder.svg"}
                    alt={accommodation.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title and Rating */}
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-abril-fatface text-gray-900">{accommodation.name}</h3>
                    <div className="flex items-center ml-2">{renderStars(accommodation.rating)}</div>
                  </div>

                  {/* Location */}
                  <p className="text-[#858585] text-sm mb-3 border-b border-[#858585]/30 leading-11">
                    {accommodation.location}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-sm  text-[#858585]">From </span>
                    <span className="text-lg font-abril-fatface text-gray-900 ml-4  ">{accommodation.price}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-[15px] font-work-sans mb-4 leading-relaxed">
                    {accommodation.shortDescription}
                  </p>

                  {/* Amenities */}
                  <div className="space-y-2 mb-6 border-b pb-4 border-[#858585]/30">
                    {accommodation.amenities?.map((amenity, index) => {
                      const IconComponent = getIconComponent(amenity.icon)
                      return (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <IconComponent className="w-4 h-4 mr-2" />
                          <span>{amenity.text}</span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Book Now Button */}
                  <Link href={`/accommodations/${accommodation.slug}`}>
                    <button className="w-fit mx-auto cursor-pointer block bg-[#00c0ae] hover:bg-[#00a89a] text-white font-bold py-3 px-6  transition-colors duration-200">
                      BOOK NOW
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Accommodations
