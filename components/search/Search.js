"use client"
import { accommodationsData } from "../../data/accomodations-data"
import Image from "next/image"
import Link from "next/link"

export default function Search() {
  const renderStars = (rating) => {
    return "★".repeat(rating)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accommodationsData.map((accommodation) => (
            <div
              key={accommodation.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
            >
              {/* Property Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={accommodation.mainImage || "/placeholder.svg"}
                  alt={accommodation.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Property Details */}
              <div className="p-6">
                {/* Property Name and Rating */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{accommodation.name}</h3>
                  <div className="text-yellow-400 text-sm">{renderStars(accommodation.rating)}</div>
                </div>

                {/* Location */}
                <p className="text-gray-600 text-sm mb-3">{accommodation.location}</p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-gray-600 text-sm">From </span>
                  <span className="text-lg font-bold text-gray-900">{accommodation.price}</span>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{accommodation.shortDescription}</p>

                {/* Amenities */}
                <div className="space-y-2 mb-6">
                  {accommodation.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">{amenity.icon}</span>
                      <span>{amenity.text}</span>
                    </div>
                  ))}
                </div>

                {/* Book Now Button */}
                <Link
                  href={`/accommodations/${accommodation.slug}`}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded text-center block transition-colors duration-200"
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
