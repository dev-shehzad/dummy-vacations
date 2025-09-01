"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function VacationActivities() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default
      await import("aos/dist/aos.css")
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      })
    }
    initAOS()
  }, [])

  // Activities data
  const activities = [
    {
      id: 1,
      title: "Water Sports",
      img: "/home/activities/1.webp",
      href: "https://www.tripadvisor.es/Attractions-g150812-Activities-c61-t184-Playa_del_Carmen_Yucatan_Peninsula.html",
      height: "h-[650px]",
      headingSize: "text-3xl",
      large: true, // left big card
    },
    {
      id: 2,
      title: "Boat Trips",
      img: "/home/activities/2.webp",
      href: "https://www.tripadvisor.es/Attractions-g150812-Activities-c55-Playa_del_Carmen_Yucatan_Peninsula.html",
      height: "h-[280px]",
      headingSize: "text-2xl",
    },
    {
      id: 3,
      title: "Lessons",
      img: "/home/activities/3.webp",
      href: "https://www.tripadvisor.es/Attractions-g150812-Activities-c61-t197-Playa_del_Carmen_Yucatan_Peninsula.html",
      height: "h-[280px]",
      headingSize: "text-2xl",
    },
  ]

  return (
    <section className="py-24 px-6 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-16 max-w-6xl mx-auto">
          <Link href="/tours">
          <h1
            className="text-5xl font-abril-fatface md:text-7xl text-gray-900 mb-1"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            What to do
          </h1>
          </Link>
          <p
            className="text-3xl text-teal-500 font-yellowtail font-medium italic"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {"Let's have fun on the beach"}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={activity.large ? "lg:row-span-2" : ""}
            >
              <div className="text-center mb-6">
                <h3 className="text-lg  font-abril-fatface text-gray-800 mb-1">
                  Playa del Carmen Vacation Packages
                </h3>
              </div>
              <Link href={activity.href} className="block">
                <div className="relative group cursor-pointer">
                  <div
                    className={`relative ${activity.height} overflow-hidden shadow-lg`}
                  >
                    <Image
                      src={activity.img}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <h2
                        className={`${activity.headingSize} font-abril-fatface text-white`}
                      >
                        {activity.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
