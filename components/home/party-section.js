"use client"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function PartySection() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const startX = useRef(null)
  const isDragging = useRef(false)

  const partyVenues = [
    {
      id: 0,
      name: "Coco Bongo",
      image: "/home/carousel/cocobongo.jpg",
      link: "/party/coco-bongo",
    },
    {
      id: 1,
      name: "Night Club",
      image: "/home/carousel/beach-front.jpg",
      link: "/party/night-club",
    },
    {
      id: 2,
      name: "Coralina",
      image: "/home/carousel/coralinadayclub.jpg",
      link: "/party/coralina",
    },
  ]

  // Initialize AOS
  useEffect(() => {
    AOS.init()
  }, [])

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partyVenues.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [partyVenues.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % partyVenues.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + partyVenues.length) % partyVenues.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // --- Drag Handlers ---
  const handleDragStart = (e) => {
    isDragging.current = true
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX
  }

  const handleDragMove = (e) => {
    if (!isDragging.current || startX.current === null) return

    const currentX = "touches" in e ? e.touches[0].clientX : e.clientX
    const diff = startX.current - currentX

    if (diff > 50) {
      nextSlide()
      isDragging.current = false
    } else if (diff < -50) {
      prevSlide()
      isDragging.current = false
    }
  }

  const handleDragEnd = () => {
    isDragging.current = false
    startX.current = null
  }

  return (
    <div className="bg-[#e7e4ef] py-32 px-4 overflow-hidden select-none">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-left mb-16 px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl md:text-7xl lg:text-7xl font-abril-fatface  text-[##212121] leading-none mb-4"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          Where to party
        </h2>
        <p
          className="text-2xl md:text-3xl lg:text-4xl font-yellowtail text-teal-500"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          Entertainment for all generations
        </p>
      </div>

      {/* Carousel - full width */}
      <div
        className="relative w-full h-96 md:h-[500px]"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div className="flex items-center justify-center h-full relative">
          {partyVenues.map((venue, index) => {
            const isActive = index === currentSlide
            const isPrev = index === (currentSlide - 1 + partyVenues.length) % partyVenues.length
            const isNext = index === (currentSlide + 1) % partyVenues.length

            let transform = "translateX(0%) scale(0.6)"
            let zIndex = 1
            let opacity = 0.4

            if (isActive) {
              transform = "translateX(0%) scale(1)"
              zIndex = 3
              opacity = 1
            } else if (isPrev) {
              transform = "translateX(-60%) scale(0.8)"
              zIndex = 2
              opacity = 0.7
            } else if (isNext) {
              transform = "translateX(60%) scale(0.8)"
              zIndex = 2
              opacity = 0.7
            }

            return (
              <div
                key={venue.id}
                className="absolute w-72 md:w-[650px] h-96 md:h-[500px] transition-all duration-500 ease-in-out cursor-pointer"
                style={{ transform, zIndex, opacity }}
                onClick={() => !isActive && goToSlide(index)}
              >
                <div
                  className="w-full h-full bg-cover bg-center  shadow-2xl relative overflow-hidden"
                  style={{ backgroundImage: `url(${venue.image})` }}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* Title */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6 z-10">
                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        isActive
                          ? "opacity-100 transform translate-y-0 scale-100"
                          : "opacity-0 transform translate-y-4 scale-95"
                      }`}
                    >
                      {isActive ? (
                        <a
                          href={venue.link}
                          className="text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg hover:underline hover:scale-105 transition-all duration-300 cursor-pointer text-white block relative z-20"
                          style={{ fontFamily: "serif" }}
                          onMouseDown={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                        >
                          {venue.name}
                        </a>
                      ) : (
                        <div
                          className="text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg pointer-events-none"
                          style={{ fontFamily: "serif" }}
                        >
                          {venue.name}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Highlight */}
                  {isActive && (
                    <div className="absolute inset-0 ring-4 ring-white ring-opacity-50 transition-all duration-500"></div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 md:w-16 md:h-16  cursor-pointer rounded-full flex items-center justify-center text-white transition-all duration-200"
        >
          <ChevronLeft className="w-7 h-7 md:w-10 md:h-16" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 md:w-16 md:h-16  cursor-pointer rounded-full flex items-center justify-center text-white transition-all duration-200"
        >
          <ChevronRight className="w-7 h-7 md:w-10 md:h-16" />
        </button>

        {/* Dots */}
        <div className="absolute hidden bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {partyVenues.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
