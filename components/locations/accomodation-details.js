"use client"
import { useState } from "react"
import {
  Users,
  Home,
  Eye,
  Key,
  Clock,
  ChevronLeft,
  ChevronRight,
  FileText,
  Settings,
  Calendar,
  Snowflake,
  Trees,
  Waves,
  Tv,
  ChefHat,
  Building,
  Car,
  Flame,
  Wifi,
  Shield,
  Sparkles,
  TreePine,
  MapPin,
  Bath,
  Bell,
  Baby,
  Dumbbell,
  Shirt,
  WashingMachine,
} from "lucide-react"
import { accommodationsData } from "@/data/accomodations-data"
// Mock data for demonstration

const AccommodationDetail = ({ slug = "sample-accommodation" }) => {
  const [activeTab, setActiveTab] = useState("description")
  const [selectedImage, setSelectedImage] = useState(0)

  const accommodation = accommodationsData.find((acc) => acc.slug === slug)

  if (!accommodation) {
    return <div>Accommodation not found</div>
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ))
  }

  const getAmenityIcon = (iconName) => {
    const iconMap = {
      Users: <Users size={16} className="text-gray-500" />,
      Home: <Home size={16} className="text-gray-500" />,
      TreePine: <TreePine size={16} className="text-gray-500" />,
      Key: <Key size={16} className="text-gray-500" />,
      MapPin: <MapPin size={16} className="text-gray-500" />,
      Eye: <Eye size={16} className="text-gray-500" />,
      Clock: <Clock size={16} className="text-gray-500" />,
    }
    return iconMap[iconName] || <Home size={16} className="text-gray-500" />
  }

  const getFacilityIcon = (iconName) => {
    const iconMap = {
      Snowflake: <Snowflake size={16} className="text-gray-500" />,
      Trees: <Trees size={16} className="text-gray-500" />,
      Waves: <Waves size={16} className="text-gray-500" />,
      Tv: <Tv size={16} className="text-gray-500" />,
      ChefHat: <ChefHat size={16} className="text-gray-500" />,
      Building: <Building size={16} className="text-gray-500" />,
      Car: <Car size={16} className="text-gray-500" />,
      Flame: <Flame size={16} className="text-gray-500" />,
      Wifi: <Wifi size={16} className="text-gray-500" />,
      Shield: <Shield size={16} className="text-gray-500" />,
      Sparkles: <Sparkles size={16} className="text-gray-500" />,
      Bath: <Bath size={16} className="text-gray-500" />,
      Bell: <Bell size={16} className="text-gray-500" />,
      Baby: <Baby size={16} className="text-gray-500" />,
      Dumbbell: <Dumbbell size={16} className="text-gray-500" />,
      Shirt: <Shirt size={16} className="text-gray-500" />,
      WashingMachine: <WashingMachine size={16} className="text-gray-500" />,
    }
    return iconMap[iconName] || <Home size={16} className="text-gray-500" />
  }

  const tabs = [
    { id: "description", label: "Description", icon: <FileText size={16} /> },
    { id: "facilities", label: "Facilities", icon: <Settings size={16} /> },
    { id: "availability", label: "Availability", icon: <Calendar size={16} /> },
  ]

  const allImages = [accommodation.mainImage, ...(accommodation.images || [])].filter(Boolean)

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setSelectedImage((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* Hero Section with Image and Info Card */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 p-6 pb-0">
          {/* Left side - Image carousel */}
          <div className="flex-1 lg:w-[70%]">
            <div className="relative h-64 md:h-[490px] overflow-hidden ">
              {/* Image Container with sliding effect */}
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${selectedImage * 100}%)` }}
              >
                {allImages.map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${accommodation.name} - Image ${index + 1}`}
                    className="w-full h-full object-cover flex-shrink-0"
                  />
                ))}
              </div>

              {/* Left Arrow */}
              {allImages.length > 1 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {/* Right Arrow */}
              {allImages.length > 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {allImages.length > 1 && (
              <div className="mt-4">
                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-16 cursor-pointer overflow-hidden border-2 transition-all duration-200 ${
                        selectedImage === index ? "border-[#1dd1c1] shadow-lg" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${accommodation.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right side - Info Card */}
          <div className="lg:w-[30%] flex-shrink-0">
            <div className="bg-white  overflow-hidden h-fit">
              {/* Header Section */}
              <div className="p-6 pb-4">
                <h1 className="text-2xl lg:text-3xl font-abril-fatface text-gray-900 mb-2">{accommodation.name}</h1>
                <div className="flex items-center mb-3">{renderStars(accommodation.rating)}</div>
              </div>

              {/* Location Section with border */}
              <div className="px-6 pb-4 border-b border-gray-200">
                <p className="text-gray-600 text-sm font-medium">{accommodation.location}</p>
              </div>

              {/* Price Section with border */}
              <div className="px-6 py-4 flex gap-4 items-center border-b border-gray-200">
                <div className="text-sm text-gray-500 mb-1">From</div>
                <div className="font-abril-fatface text-lg text-gray-900 leading-tight">{accommodation.price}</div>
              </div>

              {/* Description Section */}
              <div className="px-6 py-4 border-b border-gray-200">
                <p className="text-gray-700 text-sm leading-relaxed font-work-sans">{accommodation.shortDescription}</p>
              </div>

              {/* Amenities Section */}
              <div className="px-6 py-4">
                <div className="space-y-3">
                  {accommodation.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700 font-work-sans">
                      <div className="mr-3 flex-shrink-0">{getAmenityIcon(amenity.icon)}</div>
                      <span>{amenity.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="pt-7 pb-16 px-6 container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mt-8">
            <div className="flex gap-0">
              {/* Left side - Vertical Tabs with arrow design */}
              <div className="flex flex-col w-48">
                {tabs.map((tab, index) => (
                  <div key={tab.id} className="relative">
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center px-6 py-3 font-medium text-left transition-all duration-300 w-full ${
                        activeTab === tab.id
                          ? "bg-orange-500 text-white shadow-lg z-10"
                          : "bg-teal-500 text-white opacity-80 hover:opacity-100"
                      }`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      <span className="flex-1 text-sm">{tab.label}</span>

                      {/* SVG Arrow for active tab */}
                      {activeTab === tab.id && (
                        <svg
                          className="absolute right-[-20px] top-0 h-full w-5 text-orange-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 40"
                          preserveAspectRatio="none"
                        >
                          <polygon points="0,0 20,20 0,40" fill="currentColor" />
                        </svg>
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Right side - Tab content */}
              <div className="flex-1 bg-transparent rounded-r-lg rounded-bl-lg p-8 pt-4 relative">
                <div className="transition-all duration-500 ease-in-out">
                  {activeTab === "description" && (
                    <div className="animate-in fade-in duration-500">
                      <h2 className="text-2xl font-abril-fatface text-gray-900 mb-6">{accommodation.name}</h2>
                      <h3 className="text-xl  font-abril-fatface text-gray-800 mb-4">The House</h3>

                      <div
                        className="text-gray-700 text-md font-work-sans leading-relaxed space-y-4 mb-8"
                        dangerouslySetInnerHTML={{ __html: accommodation.detailedDescription }}
                      />

                      <h3 className="text-xl font-abril-fatface text-gray-800 mb-4 mt-8">Pets Allowed</h3>
                      <p className="text-gray-700 text-sm mb-4">{accommodation.petsAllowed ? "Yes" : "No"}</p>

                      <h3 className="text-xl font-abril-fatface text-gray-800 mb-4">Credit Card Required</h3>
                      <p className="text-gray-700 text-sm mb-6">{accommodation.creditCardRequired ? "Yes" : "No"}</p>

                      <p className="text-gray-700 text-sm leading-relaxed italic">
                        Experience unmatched opulence and serenity at {accommodation.name}. Elevate your Playa del
                        Carmen retreat with a stay in this sanctuary. Your ultimate vacation awaits.
                      </p>
                    </div>
                  )}

                  {activeTab === "facilities" && (
                    <div className="animate-in fade-in duration-500">
                      <h2 className="text-2xl font-abril-fatface text-gray-900 mb-6">Facilities</h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {accommodation.facilities.map((facility, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-700">
                            <span className="mr-3">{getFacilityIcon(facility.icon)}</span>
                            <span>{facility.text}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-gray-700 text-sm leading-relaxed mt-8 italic">
                        Experience unmatched opulence and serenity at {accommodation.name}. Elevate your Playa del
                        Carmen retreat with a stay in this sanctuary. Your ultimate vacation awaits.
                      </p>
                    </div>
                  )}

                  {activeTab === "availability" && (
                    <div className="animate-in fade-in duration-500">
                      <h2 className="text-2xl font-abril-fatface text-gray-900 mb-8">Availability</h2>

                      <div className="mb-8">
                        <button className="w-full bg-[#1dd1c1] hover:bg-[#1bc4b5] text-white text-[15px] font-bold font-work-sans py-3 px-8 text-lg transition-colors duration-200">
                          BOOK NOW
                        </button>
                      </div>

                      <p className="text-gray-700 text-sm leading-relaxed italic">
                        Experience unmatched opulence and serenity at {accommodation.name}. Elevate your Playa del
                        Carmen retreat with a stay in this sanctuary. Your ultimate vacation awaits.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AccommodationDetail
