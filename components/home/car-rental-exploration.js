"use client"

import { useEffect } from "react"
import Image from "next/image"

export default function CarRentalExploration() {
  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import("aos")
      await import("aos/dist/aos.css")
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      })
    }
    loadAOS()
  }, [])

  // Recommended Places Array
  const recommendedPlaces = [
    {
      title: "Tulum",
      description:
        "Just under an hour's drive south from Playa del Carmen, Tulum is renowned for its well-preserved Mayan ruins. They are unique as they sit on a cliff overlooking the Caribbean Sea.",
    },
    {
      title: "Coba",
      description:
        "Situated a little further from Tulum, Coba is home to another significant Mayan site set in the jungle. You can even climb the main pyramid, Nohoch Mul, for a stunning view of the surrounding jungle.",
    },
    {
      title: "Akumal",
      description:
        "Located between Playa del Carmen and Tulum, Akumal is a small beach-front tourist resort known for its clear waters and sea turtles. It's a great spot for snorkeling.",
    },
    {
      title: "Xcaret Park",
      description:
        "Just a short drive from Playa del Carmen, this eco-archaeological park is filled with Mexican and Mayan flavor. The park features more than 50 attractions, including natural pools, an aquarium, a butterfly pavilion, and a traditional Mexican cemetery.",
    },
    {
      title: "Chichen Itza",
      description:
        "A bit further away, but definitely worth the drive, is one of the new seven wonders of the world, Chichen Itza. This ancient city is one of the best preserved Mayan sites and offers a deep dive into Mayan history and culture.",
    },
    {
      title: "Puerto Morelos",
      description:
        "About half an hour's drive north from Playa del Carmen, this charming fishing village is the perfect place to relax. You'll find beautiful beaches, superb snorkeling, and a laid-back vibe.",
    },
  ]

  return (
    <section className="py-24 px-6 md:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center lg:text-left mb-16">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl  text-gray-900 mb-2 font-abril-fatface"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Ways to relax
          </h1>
          <p
            className="text-2xl md:text-4xl text-orange-400 font-yellowtail italic"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Refresh and replenish in our spa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Car Rental Info */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <p
                className="text-lg  text-center font-abril-fatface text-gray-800 mb-5"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Playa del Carmen Vacation Packages
              </p>
              <div className="relative">
                <Image
                  src="/home/ways/1.webp"
                  alt="White SUV on beach at sunset"
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover  shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay="200"
                />
              </div>
            </div>

            {/* Title and Description */}
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-3xl md:text-3xl font-abril-fatface text-gray-900">
                Rent a car and explore freely!
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Exploring the Riviera Maya by car from Playa del Carmen offers
                access to a plethora of beautiful and culturally significant
                sites, do it with Link Vacations. Here are some of our
                recommendations:
              </p>
            </div>

            {/* Recommended Places */}
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-[15px] font-bold font-sans text-gray-900">
                Recommended places to go
              </h3>

              <ul className="space-y-3 list-disc pl-5 text-gray-700 font-[Work Sans] text-[15px]">
                {recommendedPlaces.map((place, index) => (
                  <li key={index} className="leading-relaxed">
                    <span className="font-bold text-gray-900">
                      {place.title}:
                    </span>{" "}
                    {place.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:sticky lg:top-8">
            <div className="space-y-4">
              <p
                className="text-lg text-center font-abril-fatface text-gray-800 mb-5"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                Playa del Carmen Vacation Packages
              </p>
              <div
                className="relative"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <Image
                  src="/home/ways/2.webp"
                  alt="Woman making heart shape with hands at sunset"
                  width={500}
                  height={600}
                  className="w-full h-96 md:h-[500px] lg:h-[600px] object-cover  shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
