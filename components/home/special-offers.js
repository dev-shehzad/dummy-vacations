import Link from "next/link"

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "NEW: Jeep Tours",
      description: "Upcoming Jeep tours by Link Vacations.",
      validFrom: "Dates very soon.",
      image: "/home/special/1.webp",
    },
    {
      id: 2,
      title: "Mid Summer Deal",
      description: "Contact us directly for deals",
      validFrom: "Dates very soon",
      image: "/home/special/2.webp",
    },
    {
      id: 3,
      title: "Wellness for Couples",
      description: "Upcoming offers for couples by Link Vacations.",
      validFrom: "Dates very soon",
      image: "/home/special/3.webp",
    },
  ]

  return (
    <section className="py-32 px-4" style={{ backgroundColor: "#fafafa" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-32">
          <h2
            className="text-5xl md:text-7xl  text-black mb-2"
            style={{ fontFamily: "Abril Fatface, serif" }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Special offers
          </h2>
          <p
            className="text-2xl md:text-3xl text-[#FFC100]"
            style={{ fontFamily: "Yellowtail, cursive" }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Playa del Carmen Vacation Packages
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-transparent overflow-hidden   hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className=" ">
                <img
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.title}
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <Link
                  href="#"
                  className="text-2xl text-[##212121]  mb-7"
                  style={{ fontFamily: "Abril Fatface, serif" }}
                >
                  {offer.title}
                </Link>

                <p
                  className="text-[##212121] mb-3 leading-relaxed text-sm"
                  style={{ fontFamily: "Work Sans, sans-serif" }}
                >
                  {offer.description}
                </p>

                <div className=" pt-4">
                  <p className="text-sm font-[400] text-[##212121] " style={{ fontFamily: "Work Sans, sans-serif" }}>
                    <span className="font-bold">Valid from:</span> {offer.validFrom}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
