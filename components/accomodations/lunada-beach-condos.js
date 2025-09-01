"use client"

import { useEffect } from "react"
import Link from "next/link"
import { accommodationsData } from "../../data/accomodations-data"
import { Users, Home, Leaf, Key, MapPin, Star } from "lucide-react"

export default function LunadaBeachCondos() {
  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import("aos")
      await import("aos/dist/aos.css")
      AOS.init({ duration: 1000 })
    }
    loadAOS()
  }, [])

  const condos = accommodationsData
    .filter((accommodation) => accommodation.location === "Lunada Beach Condos")
    .map((accommodation) => ({
      title: accommodation.name,
      image: accommodation.mainImage,
      price: `MXN ${accommodation.price}`,
      description: accommodation.shortDescription,
      slug: accommodation.slug,
      details: [
        { icon: Users, text: `Max ${accommodation.maxGuests} adults` },
        { icon: Home, text: `${accommodation.bedrooms} Rooms, ${accommodation.bathrooms} Bathrooms` },
        { icon: Leaf, text: "Garden view" },
        { icon: Key, text: "Independent Check In" },
        { icon: MapPin, text: "All in 5 min walk!" },
      ],
    }))

  return (
    <div className="min-h-screen bg-[#fae6da] relative overflow-hidden bg-[url(/accomodations/bg.jpg)] bg-no-repeat bg-top-right">
      {/* Background circles */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Heading */}
        <div className="mb-16">
          <h1 className="font-abril-fatface text-6xl md:text-7xl lg:text-7xl text-gray-900 mb-2 leading-tight">
            Lunada Beach Condo
          </h1>
          <p className="font-yellowtail text-3xl md:text-3xl text-orange-500 -mt-4">Luxurious condo on the beach</p>
        </div>

        {/* Intro Paragraphs */}
        <div className="space-y-8 max-w-5xl mb-20">
          <p className="font-work-sans text-md text-gray-700 leading-relaxed">
            Nestled in the heart of Playa del Carmen, the Lunada Beach Condo offers an unparalleled and luxurious
            vacation experience. The moment you step into this haven of comfort and style, you'll be enveloped in a
            world of tranquility and sophistication.
          </p>
          <p className="font-work-sans text-md text-gray-700 leading-relaxed">
            Our exquisite accommodations are designed to cater to your every need. Each condo is thoughtfully appointed
            with modern amenities and tasteful decor, ensuring a seamless blend of elegance and functionality. Whether
            you're seeking a romantic escape for two, a family adventure, or a solo retreat, Lunada Beach Condo has the
            perfect accommodation option for you.
          </p>
          <p className="font-work-sans text-md text-gray-700 leading-relaxed">
            Enjoy the vibrant culture of Mexico as you step out onto the lively streets of Playa del Carmen. Indulge in
            delectable local cuisine, from street tacos to gourmet dining, and let your taste buds embark on a journey
            of flavors. The bustling Quinta Avenida (Fifth Avenue) awaits, offering a plethora of shops, boutiques, and
            galleries for you to explore.
          </p>
        </div>

        {/* Cards + Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {condos.map((condo, i) => (
            <div key={i} className="bg-white  shadow-lg overflow-hidden" data-aos="fade-up">
              <img src={condo.image || "/placeholder.svg"} alt={condo.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-abril-fatface text-2xl text-gray-900">{condo.title}</h3>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-2 ">Lunada Beach Condos</p>
                <div className="mb-4 border-t pt-3 border-black/20 border-b pb-3">
                  <span className="text-sm text-gray-600">From </span>
                  <span className="font-abril-fatface text-md ml-3 text-gray-900">{condo.price}</span>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{condo.description}</p>

                <div className="space-y-2 mb-6 border-b border-black/10 pb-3">
                  {condo.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <detail.icon className="w-4 h-4 mr-2" />
                      <span>{detail.text}</span>
                    </div>
                  ))}
                </div>

                <Link href={`/accommodations/${condo.slug}`}>
                  <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded transition-colors">
                    BOOK NOW
                  </button>
                </Link>
              </div>
            </div>
          ))}

          {/* Testimonial */}
          <div className="flex items-center justify-center" data-aos="fade-up">
            <div className="text-center max-w-sm">
              <div className="text-6xl text-teal-500 mb-4">"</div>
              <p className="font-work-sans text-lg text-gray-700 italic leading-relaxed mb-6">
                Sun-kissed shores, where turquoise waves dance and whisper secrets to the golden sand. Lunada Beach
                Condo, Playa del Carmen, a jewel of the Mexican coast, where time slows down and worries fade away.
              </p>
              <p className="font-work-sans text-lg text-gray-700 italic leading-relaxed">
                Bask in the embrace of gentle sea breezes, as vibrant colors paint the sky at dusk. Let the rhythm of
                the ocean serenade your soul, and discover paradise in every moment.
              </p>
            </div>
          </div>
        </div>

        {/* Final Section */}
        <div className="max-w-5xl">
          <h2 className="font-abril-fatface text-2xl text-gray-900 mb-4">Lunada Beach Condo, a place to remember!</h2>
          <div className="space-y-6">
            <p className="font-work-sans text-sm text-gray-700 leading-relaxed">
              As the sun sets over the azure Caribbean Sea, Playa del Carmen comes alive with its electrifying
              nightlife. Dance the night away at trendy nightclubs, enjoy live music, or simply take a leisurely stroll
              along the beach and relish the soothing sound of the waves. With its energetic atmosphere, Playa del
              Carmen ensures that every evening is a memorable one.
            </p>
            <p className="font-work-sans text-sm text-gray-700 leading-relaxed">
              Whenever you come at Lunada Beach Condo, you'll find a peaceful oasis to recharge and unwind. Take a
              refreshing dip in the inviting pool, soak up the sun on the sundeck, or simply relax in the comfort of
              your private balcony.
            </p>
            <p className="font-work-sans text-sm text-gray-700 leading-relaxed">
              Whether you're seeking adventure, relaxation, or a combination of both, Lunada Beach Condo offers the
              perfect starting point for your Playa del Carmen exploration. Allow us to exceed your expectations and
              create unforgettable memories during your stay at our premium beachfront property. Your dream vacation
              unquestionably awaits at Lunada Beach Condo – where luxury, culture, and natural beauty converge in
              perfect harmony.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
