"use client"
import { useState, useRef } from "react"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const AccommodationSlider = () => {
  const sliderRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const accommodations = [
    {
      id: 1,
      name: "Villas Via Tendenza",
      description: '🌴 Welcome to "Villas Via Tendenza" 🌴 ☀️',
      details: "Your dream getaway near the vibrant 5th Ave in Playa del Carmen! 🏖️ 🌺",
      images: ["/home/slider/villas1.jpeg", "/home/slider/villas2.jpeg"],
      layout: "horizontal-1",
      imagePositions: {
        image1: { width: 380, height: 280, x: 30, y: -20 },
        image2: { width: 380, height: 280, x: -20, y: 60 },
      },
      bookNowLink: "/accommodations/villas-via-tendenza",
    },
    {
      id: 2,
      name: "Playa Mamitas Apartments",
      description: '🌴 Experience luxury at "Playa Mamitas Apartment" 🌴 ☀️',
      details: "Your beachfront retreat in the heart of Playa del Carmen! 🌊 🏖️ 🏠",
      images: ["/home/slider/1.jpeg", "/home/slider/2.jpeg"],
      layout: "vertical",
      imagePositions: {
        image1: { width: 380, height: 250, x: -120, y: 150 },
        image2: { width: 380, height: 250, x: 120, y: -200 },
      },
      bookNowLink: "/accommodations/playa-mamitas-apartment",
    },
    {
      id: 3,
      name: "Lunda Beach Condo",
      description: '🌿 Experience "Jungle Paradise Resort" 🌿 🦋',
      details: "Immerse yourself in nature's beauty with luxury jungle accommodations! 🌺 🐒",
      images: ["/home/slider/1.jpeg", "/home/slider/2.jpeg"],
      layout: "horizontal-2",
      imagePositions: {
        image1: { width: 320, height: 400, x: 30, y: 0 },
        image2: { width: 320, height: 430, x: 20, y: 12 },
      },
      bookNowLink: "/accommodations/lunada-beach",
    },
  ]

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
  }

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  const getImageVariants = (slideIndex, imageIndex) => {
    if (slideIndex === 0) {
      if (imageIndex === 0) {
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
          },
        }
      } else {
        return {
          hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
          visible: {
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            transition: { duration: 2.2, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] },
          },
        }
      }
    } else if (slideIndex === 1) {
      if (imageIndex === 0) {
        return {
          hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
          visible: {
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            transition: { duration: 2.2, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] },
          },
        }
      } else {
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
          },
        }
      }
    } else {
      return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 1.8, delay: imageIndex === 0 ? 0.4 : 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }
    }
  }

  const renderImages = (accommodation, slideIndex) => {
    const { imagePositions } = accommodation

    if (accommodation.layout === "vertical") {
      return (
        <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center pointer-events-none">
          <div
            className="relative  pointer-events-auto"
            style={{
              width: `${imagePositions.image1.width}px`,
              height: `${imagePositions.image1.height}px`,
              transform: `translate(${imagePositions.image1.x}px, ${imagePositions.image1.y}px)`,
            }}
          >
            <motion.img
              src={accommodation.images[0]}
              alt={`${accommodation.name} entrance`}
              style={{
                width: `${imagePositions.image1.width}px`,
                height: `${imagePositions.image1.height}px`,
                objectFit: "cover",
                objectPosition: "center",
                transformOrigin: "center center",
              }}
              variants={getImageVariants(slideIndex, 0)}
              initial="hidden"
              animate="visible"
            />
          </div>
          <div
            className="relative  pointer-events-auto"
            style={{
              width: `${imagePositions.image2.width}px`,
              height: `${imagePositions.image2.height}px`,
              transform: `translate(${imagePositions.image2.x}px, ${imagePositions.image2.y}px)`,
            }}
          >
            <motion.img
              src={accommodation.images[1]}
              alt={`${accommodation.name} property`}
              style={{
                width: `${imagePositions.image2.width}px`,
                height: `${imagePositions.image2.height}px`,
                objectFit: "cover",
                objectPosition: "center",
                transformOrigin: "center center",
              }}
              variants={getImageVariants(slideIndex, 1)}
              initial="hidden"
              animate="visible"
            />
          </div>
        </div>
      )
    } else if (accommodation.layout === "horizontal-1") {
      return (
        <div className="absolute inset-0 flex gap-6 justify-center items-center pointer-events-none">
          <div
            className="relative  pointer-events-auto"
            style={{
              width: `${imagePositions.image1.width}px`,
              height: `${imagePositions.image1.height}px`,
              transform: `translate(${imagePositions.image1.x}px, ${imagePositions.image1.y}px)`,
            }}
          >
            <motion.img
              src={accommodation.images[0]}
              alt={`${accommodation.name} entrance`}
              style={{
                width: `${imagePositions.image1.width}px`,
                height: `${imagePositions.image1.height}px`,
                objectFit: "cover",
                objectPosition: "center",
                transformOrigin: "center center",
              }}
              variants={getImageVariants(slideIndex, 0)}
              initial="hidden"
              animate="visible"
            />
          </div>
          <div
            className="relative overflow-hidden pointer-events-auto"
            style={{
              width: `${imagePositions.image2.width}px`,
              height: `${imagePositions.image2.height}px`,
              transform: `translate(${imagePositions.image2.x}px, ${imagePositions.image2.y}px)`,
            }}
          >
            <motion.img
              src={accommodation.images[1]}
              alt={`${accommodation.name} property`}
              style={{
                width: `${imagePositions.image2.width}px`,
                height: `${imagePositions.image2.height}px`,
                objectFit: "cover",
                objectPosition: "center",
                transformOrigin: "center center",
              }}
              variants={getImageVariants(slideIndex, 1)}
              initial="hidden"
              animate="visible"
            />
          </div>
        </div>
      )
    } else {
      return (
        <div className="absolute inset-0 flex gap-4 justify-center items-center pointer-events-none">
          <div
            className="relative overflow-hidden pointer-events-auto"
            style={{
              width: `${imagePositions.image1.width}px`,
              height: `${imagePositions.image1.height}px`,
              transform: `translate(${imagePositions.image1.x}px, ${imagePositions.image1.y}px)`,
            }}
          >
            <motion.img
              src={accommodation.images[0]}
              alt={`${accommodation.name} entrance`}
              style={{
                width: `${imagePositions.image1.width}px`,
                height: `${imagePositions.image1.height}px`,
                objectFit: "cover",
                objectPosition: "center",
              }}
              variants={getImageVariants(slideIndex, 0)}
              initial="hidden"
              animate="visible"
            />
          </div>
          <div
            className="relative overflow-hidden pointer-events-auto"
            style={{
              width: `${imagePositions.image2.width}px`,
              height: `${imagePositions.image2.height}px`,
              transform: `translate(${imagePositions.image2.x}px, ${imagePositions.image2.y}px)`,
            }}
          >
            <motion.img
              src={accommodation.images[1]}
              alt={`${accommodation.name} property`}
              style={{
                width: `${imagePositions.image2.width}px`,
                height: `${imagePositions.image2.height}px`,
                objectFit: "cover",
                objectPosition: "center",
              }}
              variants={getImageVariants(slideIndex, 1)}
              initial="hidden"
              animate="visible"
            />
          </div>
        </div>
      )
    }
  }

  const SlideComponent = ({ accommodation, slideIndex }) => (
    <div className="flex items-center justify-between px-4 md:px-8 h-full">
      <div className="flex-1 max-w-4xl mx-auto">
        <div className="relative min-h-[400px] md:min-h-[500px]  overflow-visible">
          {renderImages(accommodation, slideIndex)}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
          className="text-center md:text-left  mx-auto md:mx-0 md:ml-4 relative z-10 px-4 md:px-0"
        >
          <h3 className="text-2xl md:text-3xl font-abril-fatface text-gray-800 mb-2">{accommodation.name}</h3>
          <p className="text-gray-700 mb-2 text-sm md:text-base">{accommodation.description}</p>
          <p className="text-gray-600 mb-6 text-sm md:text-base">{accommodation.details}</p>
          <a
            href={accommodation.bookNowLink}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 md:px-8 py-2 md:py-3 font-bold text-base md:text-lg rounded transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 block mx-auto w-fit"
          >
            BOOK NOW
          </a>
        </motion.div>
      </div>
      <div className="hidden md:flex items-center justify-center w-32"></div>
    </div>
  )

  return (
    <div className="bg-gradient-to-br from-orange-50 to-pink-50 py-8 md:py-16 px-4 md:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto relative">
        <div className="hidden lg:block absolute left-20 top-1/2 -translate-y-1/2 z-10">
          <div className="grid grid-cols-6 gap-3 rotate-45">
            {Array.from({ length: 36 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  rotate: 360,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + i * 0.02,
                  ease: "easeOut",
                  rotate: {
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                }}
                className="w-1.5 h-1.5 bg-gray-800 rounded-full"
              />
            ))}
          </div>
        </div>

        <div className="text-left mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-abril-fatface text-gray-800 mb-4 px-4">
            Link Vacations | Rental Vacacional
          </h1>
          <p className="text-gray-600 text-sm md:text-lg mb-6 md:mb-8 max-w-4xl  px-4">
            Experience Playa del Carmen's finest with Link Vacations. Offering luxury vacation rentals in prime
            locations, our properties provide the perfect backdrop for your dream getaway.
          </p>
          <div className="mb-6 md:mb-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2">Where to stay</h2>
            <p className="text-orange-500 text-lg md:text-xl lg:text-2xl font-medium italic px-4">
              Accommodation for all styles, Playa del Carmen Vacation Packages!
            </p>
          </div>
        </div>

        <button
          onClick={handleNextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        </button>

        <div className="min-h-[500px] md:min-h-[600px]">
          <Slider ref={sliderRef} {...sliderSettings}>
            {accommodations.map((accommodation, index) => (
              <div key={accommodation.id}>
                <SlideComponent accommodation={accommodation} slideIndex={index} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={handleNextSlide}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AccommodationSlider
