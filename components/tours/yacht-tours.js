"use client"
import Link from "next/link"
import { yachtsData } from "@/data/yacht-data"

export default function YachtTours() {
  return (
    <div className="min-h-screen bg-[#fafafa] relative overflow-hidden bg-[url(/tours/tour-bg.jpg)] bg-no-repeat">
      <div className="container mx-auto px-4 py-16 relative z-10 max-w-7xl md:py-32">
        {/* Header */}
        <div className="text-left mb-7">
          <h1 className="font-abril-fatface text-6xl md:text-7xl text-gray-900">Yachts</h1>
          <p className="font-yellowtail text-3xl md:text-4xl text-[#00c0ae] -mt-2">Unique experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {yachtsData.map((yacht) => (
            <div key={yacht.id} className="bg-white rounded-sm shadow-lg overflow-hidden flex flex-col">
              <div className="relative">
                <img
                  src={yacht.image || "/placeholder.svg"}
                  alt={`${yacht.name} Yacht`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-9 -right-9 bg-gray-900 text-white px-9 py-1 text-sm font-semibold transform rotate-45 origin-center">
                  RESERVE NOW
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-abril-fatface text-2xl text-gray-900 mb-3 border-b border-black/10 pb-5">
                  {yacht.name}
                </h3>
                <p className="text-gray-600 mb-4 text-md font-work-sans leading-relaxed">{yacht.description}</p>

                <div className="space-y-2 mb-6 border-b border-black/10 pb-5">
                  {yacht.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-md text-gray-600">
                      <feature.icon className="w-4 h-4 mr-2" />
                      {feature.text}
                    </div>
                  ))}
                </div>

                <Link
                  href={`/tours/${yacht.slug}`}
                  className="w-fit text-center mx-auto bg-teal-500 hover:bg-teal-600 text-white text-[13px] font-bold py-3 px-6 rounded transition-colors mt-auto"
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
