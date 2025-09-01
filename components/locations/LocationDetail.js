"use client"
import { useState } from "react"
import { Users, Home, Eye, Key, Clock } from "lucide-react"
import { locationsData, playaDelCarmenAccommodations } from "@/data/locations-data"
import Link from "next/link"

const LocationDetail = ({ slug }) => {
  const [activeTab, setActiveTab] = useState("accommodations")

  // Find the location by slug
  const location = locationsData.find((loc) => loc.slug === slug)

  if (!location) {
    return <div>Location not found</div>
  }

  // Get accommodations for this location (currently only Playa Del Carmen has data)
  const accommodations = slug === "playa-del-carmen" ? playaDelCarmenAccommodations : []

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ))
  }

  const getAmenityIcon = (amenityText) => {
    if (amenityText.includes("adults")) return <Users size={16} className="text-gray-500" />
    if (amenityText.includes("Rooms") || amenityText.includes("Bathrooms") || amenityText.includes("dresser"))
      return <Home size={16} className="text-gray-500" />
    if (amenityText.includes("Garden view")) return <Eye size={16} className="text-gray-500" />
    if (amenityText.includes("Independent Check In")) return <Key size={16} className="text-gray-500" />
    if (amenityText.includes("All in 5 min walk")) return <Clock size={16} className="text-gray-500" />
    return <Home size={16} className="text-gray-500" />
  }

  const tabs = [
    { id: "accommodations", label: "Accommodations" },
    { id: "car-rentals", label: "Car rentals" },
  ]

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Image */}
      <div className="relative h-64 md:h-[490px] overflow-hidden max-w-6xl mx-auto">
        <img src={location.image || "/placeholder.svg"} alt={location.name} className="w-[70%] h-full object-cover" />
      </div>

      <main className="pt-7 pb-16 px-6 container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mt-8">
            <div className="flex flex-col lg:flex-row gap-0">
              {/* Left side - Vertical Tabs with arrow design */}
              <div className="flex flex-row lg:flex-col w-full lg:w-48 overflow-x-auto lg:overflow-x-visible">
                {tabs.map((tab, index) => (
                  <div key={tab.id} className="relative flex-shrink-0 lg:flex-shrink">
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center px-6 py-3 font-medium text-left transition-all duration-300 w-full min-w-[140px] lg:min-w-0 ${
                        activeTab === tab.id
                          ? "bg-orange-500 text-white shadow-lg z-10"
                          : "bg-teal-500 text-white opacity-80 hover:opacity-100"
                      }`}
                    >
                      <span className="flex-1 text-sm">{tab.label}</span>

                      {/* SVG Arrow for active tab - only show on desktop */}
                      {activeTab === tab.id && (
                        <svg
                          className="absolute right-[-20px] top-0 h-full w-5 text-orange-500 hidden lg:block"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 40"
                          preserveAspectRatio="none"
                        >
                          <polygon points="0,0 20,20 0,40" fill="currentColor" />
                        </svg>
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Right side - Tab content */}
              <div className="flex-1 bg-transparent rounded-r-lg rounded-bl-lg lg:rounded-r-lg lg:rounded-bl-lg rounded-lg lg:rounded-l-none p-4 sm:p-6 md:p-8 pt-4 relative">
                <div className="transition-all duration-500 ease-in-out">
                  {/* Content based on active tab */}
                  {activeTab === "accommodations" && (
                    <div className="animate-in fade-in duration-500">
                      <div className="space-y-6">
                        {accommodations.length > 0 ? (
                          accommodations.map((accommodation) => (
                            <div
                              key={accommodation.id}
                              className="bg-white border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col sm:flex-col md:flex-col lg:flex-row rounded-l-sm"
                            >
                              {/* Image */}
                              <div className="w-full lg:w-[43%] relative flex-shrink-0">
                                <img
                                  src={accommodation.image || "/placeholder.svg"}
                                  alt={accommodation.name}
                                  className="w-full h-48 sm:h-48 md:h-64 lg:h-full object-cover"
                                />
                              </div>

                              {/* Content */}
                              <div className="flex-1 p-4 sm:p-6 flex flex-col lg:flex-row">
                                <div className="flex-1 lg:pr-6 mb-4 lg:mb-0">
                                  {/* Title and Rating */}
                                  <div className="flex items-center justify-between mb-1">
                                    <h3 className="text-xl sm:text-2xl font-abril-fatface text-gray-900">
                                      {accommodation.name}
                                    </h3>
                                    <div className="flex items-center ml-4">{renderStars(accommodation.rating)}</div>
                                  </div>

                                  {/* Location */}
                                  <p className="text-gray-500 text-sm mb-4">{accommodation.location}</p>

                                  {/* Description */}
                                  <p className="text-gray-700 text-sm font-work-sans mb-5">
                                    {accommodation.description}
                                  </p>

                                  {/* Amenities */}
                                  <div className="space-y-2">
                                    {accommodation.amenities.map((amenity, index) => (
                                      <div
                                        key={index}
                                        className="flex items-center text-sm font-work-sans text-gray-700"
                                      >
                                        <div className="mr-3 flex-shrink-0">{getAmenityIcon(amenity.text)}</div>
                                        <span>{amenity.text}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Price and Button Section */}
                                <div className="w-full lg:w-[140px] flex flex-row lg:flex-col justify-between lg:justify-center items-center text-center lg:border-l lg:border-gray-200 lg:pl-6 border-t lg:border-t-0 border-gray-200 pt-4 lg:pt-0">
                                  <div className="mb-0 lg:mb-6">
                                    <div className="text-sm text-gray-500 mb-1">From</div>
                                    <div className="font-abril-fatface text-xl sm:text-2xl text-gray-900 leading-tight">
                                      {accommodation.price}
                                    </div>
                                  </div>
                                  <Link href={`/accommodations/${accommodation.slug}`}>
                                    <button className="bg-[#1dd1c1] hover:bg-[#1bc4b5] text-white font-bold py-3 px-6 transition-colors duration-200 text-sm whitespace-nowrap">
                                      BOOK NOW
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-12">
                            <p className="text-gray-600">No accommodations available for this location yet.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {activeTab === "car-rentals" && (
                    <div className="animate-in fade-in duration-500">
                      <div className="text-center py-12">
                        <p className="text-gray-600">Car rentals coming soon for this location.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LocationDetail
