"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const rightImages = [
    "/home/rightbg.jpg",
    "/home/rightbg2.jpg", // Add more images as needed
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % rightImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [rightImages.length])

  return (
    <div className="relative overflow-hidden flex flex-col md:flex-row bg-[#fafafa]">
      {/* Left Side */}
      <div
        className="w-full md:w-1/2 relative flex items-center"
        style={{
          backgroundImage: "url(/home/leftbg.png)",
          backgroundSize: "30% auto",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 w-full flex justify-end px-6 md:px-8 lg:px-16 py-8 md:py-12 lg:py-20 xl:py-24">
          <div className="max-w-lg">
            <div className="mb-12 md:mb-16 -ml-2 md:-ml-4">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-abril-fatface text-gray-900 leading-none mb-1">
                Riviera
                <br />
                Beach
              </h1>
              <p className="text-[10px]  max-md:text-[15px] font-abril-fatface text-gray-800 font-medium">
                Playa del Carmen, Quintana Roo, Mexico by Link Vacations
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 mb-12 md:mb-24">
              <p className="text-base font-work-sans text-gray-700 leading-relaxed max-w-[350px]">
                Experience with Link Vacations the magic of Riviera, Mexico with our captivating vacation rentals. Like
                stars in the night sky, each home is a gem full of charm and history.
              </p>
              <p className="text-base font-work-sans text-gray-700 leading-relaxed ml-4 md:ml-8">
                Discover Riviera, where ancient tales meet modern comforts, creating an experience as enchanting as the
                laws of physics themselves. Come explore and become a part of Riviera's beautiful story.
              </p>
            </div>

            <p className="text-2xl md:text-3xl font-yellowtail text-orange-500">Welcome! Bienvenido!</p>
          </div>
        </div>
      </div>

      {/* Right Side - Slider */}
      <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden">
        {rightImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
