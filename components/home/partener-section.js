"use client"
import Image from "next/image"
import Link from "next/link"

export default function PartnersSection() {
  const partners = [
    {
      id: 1,
      image: "/home/partners/1.webp",
      link: "https://www.airbnb.com/users/show/375525016",
    },
    {
      id: 2,
      image: "/home/partners/booking.webp",
      link: "https://www.booking.com/index.es.html?aid=337562&sid=30b8656f11959b959fee1eb40e5b89ed&keep_landing=1&sb_price_type=total&",
    },
    {
      id: 3,
      image: "/home/partners/3.webp",
      link: null,
    },
    {
      id: 4,
      image: "/home/partners/4.webp",
      link: null,
    },
  ]

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="relative w-32 h-16 sm:w-36 sm:h-20 md:w-40 md:h-20 lg:w-48 lg:h-24"
            >
              {partner.link ? (
                <Link href={partner.link} target="_blank">
                  <Image
                    src={partner.image}
                    alt={`Partner ${partner.id}`}
                    fill
                    className="object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              ) : (
                <Image
                  src={partner.image}
                  alt={`Partner ${partner.id}`}
                  fill
                  className="object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
