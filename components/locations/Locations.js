"use client"
import Link from "next/link"
import { locationsData } from "@/data/locations-data"

const Locations = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] mx-auto">
      <main className="pt-7 pb-16 px-6 container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 text-left">
            <h1 className="text-4xl md:text-4xl font-abril-fatface text-gray-900 mb-6">Where Are We?</h1>
            <p className="text-gray-600 text-md leading-relaxed max-w-4xl">
              Where Are We? Here are the locations where you can find us. Do not hesitate and contact us!
            </p>
          </div>
          
          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
            {locationsData.map((location) => (
              <div
                key={location.id}
                className="bg-white  overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={location.image || "/placeholder.svg"}
                    alt={location.name}
                    className="w-full md:w-[70%] mx-auto h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 pb-4">
                  {/* Title */}
                  <h3 className="text-[22px] font-abril-fatface text-gray-900 mb-6 leading-tight border-b border-black/10 pb-3">
                    {location.name}, {location.area}
                  </h3>
                  
                  {/* Stats with borders */}
                  <div className="space-y-1 mb-6 text-[15px] text-gray-700 leading-relaxed border-t  border-gray-200 py-4">
                    <div className="flex justify-between items-center">
                      <span>{location.accommodationsCount} Accommodations</span>
                      <span>{location.toursCount} Tours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>{location.carRentalsCount} Car rentals</span>
                    </div>
                  </div>
                  
                  {/* Price Banner - Only for Playa Del Carmen */}
                  {location.priceFrom && (
                    <div className="bg-[#0bbca6] text-white px-4 py-3 mb-4 flex items-center justify-between relative">
                      <div className="bg-white rounded p-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#1dd1c1]">
                          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" fill="currentColor"/>
                        </svg>
                      </div>
                      <div className="text-right">
                        <div className="text-xs opacity-90 leading-none">from</div>
                        <div className="font-bold text-lg leading-tight">{location.priceFrom}</div>
                      </div>
                    </div>
                  )}
                  
                  {/* View All Button */}
                  <div className="flex justify-end">
                    <Link
                      href={`/locations/${location.slug}`}
                      className="bg-[#0bbca6] hover:bg-[#1bc4b5] text-white font-bold text-sm py-3 px-6 transition-colors duration-200 inline-block"
                    >
                      VIEW ALL
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Locations