"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function RestaurantListings() {
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

  // Restaurants data
  const restaurants = [
    {
      id: 1,
      title: "Breakfast at Chez Céline",
      href: "https://www.chezceline.com.mx/",
      image: "/home/restaurants/1.webp",
      imageHeight: "h-80 md:h-96",
      alt: "French pastries and croissants at Chez Céline",
      rating: "4.5 ⭐",
      reviews: "3312",
      cuisine: "Patisserie 🥐, Boulangerie",
      diet: "Offers Vegetarian 🌱 and Gluten-free 🚫 options",
      meals: "Serves Breakfast 🌅, Lunch",
      address: "5ta Avenida Con Calle 34 Centro, Playa del Carmen 77710 México",
      addressLink: "https://goo.gl/maps/Y9gmS5b9aLMCp5ti7",
      website: "Link",
       websiteLink:"https://www.chezceline.com.mx/#",
      phone: "📞 +52 984 803 3480",
    },
    {
      id: 2,
      title: "Mexican Tacos El Fogon",
      href: "https://www.tripadvisor.es/Restaurant_Review-g150812-d4262046-Reviews-El_Fogon-Playa_del_Carmen_Yucatan_Peninsula.html",
      image: "/home/restaurants/2.webp",
      imageHeight: "h-48 md:h-40",
      alt: "Colorful Mexican tacos with fresh vegetables",
      rating: "4.5 ⭐",
      reviews: "884",
      cuisine: "Mexican 🌮, Latin, Central American",
      diet: "Offers Vegetarian 🌱 and Gluten-free 🚫 options",
      meals: "Serves Lunch 🌞, Dinner, and is open late 🌙",
      address: "Calle 6 Bis Norte Y 30, Playa del Carmen 77710, Mexico",
      addressLink: "https://goo.gl/maps/DfhD2uAuKEiLSkL3A",
      website: "Link",
      websiteLink: "https://www.tripadvisor.es/Restaurant_Review-g150812-d4262046-Reviews-El_Fogon-Playa_del_Carmen_Yucatan_Peninsula.html",
      phone: "📞 +52 984 806 8362",
    },
    {
      id: 3,
      title: "Dinner at Alux",
      href: "https://www.aluxrestaurant.com/",
      image: "/home/restaurants/3.webp",
      imageHeight: "h-64 md:h-80",
      alt: "Upscale restaurant interior with cave-like ambiance",
      rating: "4.5 ⭐",
      reviews: "3099",
      cuisine: "Mexicana 🌮, Mariscos e Internacional",
      diet: "Offers Vegan 🌱, Vegetarian, and Gluten-free options",
      meals: "Serves Dinner only 🌙",
      address:
        "Avenida Juárez 217-2 Col. Ejidal Entre Diagonal 65 y 70, Playa del Carmen 77710 México",
      addressLink: "https://goo.gl/maps/dyjuGmSevZ6L2CrR9",
      website: "Link",
      websiteLink: "https://www.aluxrestaurant.com/index.html",
      phone: "📞 +52 984 206 1401",
    },
  ]

  return (
    <section
      className="py-32 px-6 md:px-8 lg:px-12"
      style={{ backgroundColor: "#fae6da" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className=" mb-24">
          <h2
            className="text-5xl text-left md:text-7xl font-abril-fatface text-gray-900 mb-1"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Where to eat
          </h2>
          <p
            className="text-xl md:text-3xl font-yellowtail"
            style={{ color: "#e91e63" }}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Delicious meals for all tastes
          </p>
        </div>

        {/* Restaurant Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {restaurants.map((restaurant) => (
            <Link key={restaurant.id} href={restaurant.href} className="group">
              <div className="bg-transparent overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className={`relative ${restaurant.imageHeight}`}>
                  <Image
                    src={restaurant.image}
                    alt={restaurant.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 "
                  />
                </div>

                {/* Details */}
                <div className="p-6 text-[15px] px-7">
                  <h3 className="font-abril-fatface text-gray-900 mb-7 text-center text-[25px]">
                    {restaurant.title}
                  </h3>
                  <div className="px-3 mx-auto">
                    {/* Rating */}
                    <div className="mb-7">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-gray-700 text-[15px]">
                          Rating:
                        </span>
                        <span className="text-yellow-500">{restaurant.rating}</span>
                        <span className="text-gray-600 text-[15px]">
                          (based on {restaurant.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    {/* Cuisine & Diet */}
                    <div className="mb-7">
                      <h4 className="font-bold text-gray-700 mb-7 text-[15px]">
                        Cuisine & Diet:
                      </h4>
                      <ul className="text-gray-600 space-y-1  list-disc list-outside">
                        <li>Cuisine: {restaurant.cuisine}</li>
                        <li>Special Diets: {restaurant.diet}</li>
                      </ul>
                    </div>

                    {/* Availability & Location */}
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-700 mb-2 text-[15px]">
                        Availability & Location:
                      </h4>
                      <ul className="text-gray-600 space-y-1 list-disc ">
                        <li>Meals: {restaurant.meals}</li>
                        <Link href={restaurant.addressLink} target="_blank">
                          <li>
                            Address:{" "}
                            <span style={{ color: 'lab(67.805% -35.3952 -30.2018)' }} className="font-semibold">{restaurant.address}</span>
                          </li>
                        </Link>
                      </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                      <h4 className="font-bold text-gray-700 mb-2 text-[15px]">
                        Contact Information:
                      </h4>
                      <ul className="text-gray-600 space-y-1 list-disc">
                        <li>
                          Website:{" "}
                          <Link href={restaurant.websiteLink}>
                          <span style={{ color: 'lab(67.805% -35.3952 -30.2018)' }} className="font-semibold">{restaurant.website}</span></Link>
                        </li>
                        <li>
                          Phone:{" "}
                          <Link href={`tel:${restaurant.phone.replace("📞 ", "")}`}>
                          <span style={{ color: 'lab(67.805% -35.3952 -30.2018)' }} className="font-semibold">{restaurant.phone}</span></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
