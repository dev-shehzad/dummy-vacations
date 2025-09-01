import Image from "next/image"
import { Star, Users, BedDouble, Eye, CheckCircle, MapPin, Quote } from "lucide-react"
import Link from "next/link"

export default function PlayaMamitasApartments() {
  return (
    <div className=" bg-[#fae6da] relative overflow-hidden bg-[url(/accomodations/bg.jpg)] bg-no-repeat bg-top-right">
      {/* Decorative orange elements */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        {/* Header Section */}
        <div className="text-left mb-20">
          <h1 className="font-abril-fatface text-6xl md:text-7xl lg:text-7xl text-gray-900 mb-4">
            Playa Mamitas Apartments
          </h1>
          <p className="font-yellowtail text-3xl md:text-4xl text-[#FF6C46] -mt-2">Apartments on the beach</p>
        </div>

        {/* Content Sections */}
        <div className="mb-9">
          <h2 className="font-abril-fatface font-bold text-2xl md:text-2xl text-gray-900 mb-6">
            Experiencing Unparalleled Luxury in Playa del Carmen
          </h2>
          <p className="font-work-sans text-md text-gray-700 leading-relaxed max-w-4xl">
            Embark on a journey of indulgence with Playa Mamitas Apartments by Link Vacations. Seamlessly located steps
            from iconic Mamitas Beach, immerse yourself in the tranquility of your haven.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="font-abril-fatface font-bold text-2xl md:text-2xl text-gray-900 mb-6">
            A Tranquil Oasis Amidst Vibrant Surroundings
          </h2>
          <p className="font-work-sans text-md text-gray-700 leading-relaxed max-w-4xl">
            Nestled harmoniously within the vibrant coastal atmosphere, our meticulously designed accommodations offer a
            serene escape. Immerse yourself in local energy; savor attractions, dining, and entertainment options at
            your doorstep.
          </p>
        </div>

        {/* Featured Property Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Property Card */}
          <div className="bg-white shadow-lg overflow-hidden">
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row">
              {/* Left: Image Section */}
              <div className="w-full lg:w-[50%]">
                <div className="relative h-64 sm:h-64 md:h-80 lg:h-full object-cover lg:min-h-[380px]">
                  <Image
                    src="/accomodations/playa.webp"
                    alt="Casa Zoe interior hallway"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Center: Details Section */}
              <div className="w-full lg:w-[30%] p-4 lg:pr-2">
                {/* Title and Stars */}
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-abril-fatface text-2xl text-gray-900">Casa Zoe</h3>
                  <div className="flex items-center ml-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="font-work-sans text-xs text-[#858585] mb-3">Playa Mamitas</p>

                <p className="font-work-sans text-sm text-gray-700 mb-4 leading-relaxed">
                  Welcome to Casa Zoe, a hidden gem in Playa del Carmen, where modern luxury meets coastal serenity.
                </p>

                {/* Amenities */}
                <div className="space-y-1">
                  <div className="flex items-center text-gray-700">
                    <Users className="w-3 h-3 mr-2 text-gray-500 flex-shrink-0" />
                    <span className="font-work-sans text-sm">Max 8 adults</span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <BedDouble className="w-3 h-3 mr-2 text-gray-500 flex-shrink-0" />
                    <span className="font-work-sans text-sm">2 Rooms and 2 Bathrooms</span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <Eye className="w-3 h-3 mr-2 text-gray-500 flex-shrink-0" />
                    <span className="font-work-sans text-sm">Garden view</span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-3 h-3 mr-2 text-gray-500 flex-shrink-0" />
                    <span className="font-work-sans text-sm">Independent Check In</span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-3 h-3 mr-2 text-gray-500 flex-shrink-0" />
                    <span className="font-work-sans text-sm">All in 5 min walk!</span>
                  </div>
                </div>
              </div>

              {/* Right: Booking Section */}
              <div className="w-full lg:w-[30%] p-4 lg:pl-2 flex flex-row sm:flex-row md:flex-row lg:flex-col justify-center items-center text-center lg:border-l lg:border-gray-100 border-t lg:border-t-0 border-gray-100">
                {/* Price Section */}
                <div className="mb-4 lg:mb-4 mr-4 lg:mr-0">
                  <p className="font-work-sans text-sm text-gray-600 mb-1">From</p>
                  <p className="font-abril-fatface text-lg text-gray-900 leading-tight">MX$</p>
                  <p className="font-abril-fatface text-lg text-gray-900 leading-tight">2,506.00</p>
                </div>

                {/* Book Now Button */}
                <Link
                  href="/accommodations/casa-zoe"
                  className="bg-[#1CC8AA] hover:bg-[#17b399] text-white font-work-sans font-semibold py-2 px-4 transition-colors duration-200 text-sm"
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="lg:pl-12">
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-7 h-7 text-teal-500 opacity-50" />
              <blockquote className="font-work-sans text-xl md:text-2xl text-gray-700 italic leading-relaxed pl-8">
                Golden beaches embraced by the caress of turquoise waves, Playa del Carmen shines as a radiant gem along
                the Mexican coast. In this tranquil haven, time pauses, and the worries of the world dissolve.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
