"use client"
import { useState } from "react"
import { Ship, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react"
import { yachtsData } from "@/data/yacht-data"

export default function YachtDetail({ slug }) {
  const [activeTab, setActiveTab] = useState("description")
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDates, setSelectedDates] = useState([])

  const yacht = yachtsData.find((y) => y.slug === slug)

  if (!yacht) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Yacht not found</h1>
          <p className="text-gray-600">The yacht you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % yacht.images.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? yacht.images.length - 1 : prevIndex - 1))
  }

  // Calendar utility functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    return firstDay === 0 ? 7 : firstDay // Convert Sunday from 0 to 7
  }

  const navigateMonth = (direction) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate)
      newDate.setMonth(newDate.getMonth() + direction)
      return newDate
    })
  }

  const isDateSelected = (day, month, year) => {
    return selectedDates.some(
      (date) => date.getDate() === day && date.getMonth() === month && date.getFullYear() === year,
    )
  }

  const isToday = (day, month, year) => {
    const today = new Date()
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year
  }

  const selectDate = (day, month, year) => {
    const newDate = new Date(year, month, day)
    const dateIndex = selectedDates.findIndex(
      (date) => date.getDate() === day && date.getMonth() === month && date.getFullYear() === year,
    )

    if (dateIndex > -1) {
      // Remove date if already selected
      setSelectedDates((prev) => prev.filter((_, index) => index !== dateIndex))
    } else {
      // Add date if not selected
      setSelectedDates((prev) => [...prev, newDate])
    }
  }

  const renderCalendar = (monthOffset = 0) => {
    const displayDate = new Date(currentDate)
    displayDate.setMonth(displayDate.getMonth() + monthOffset)

    const daysInMonth = getDaysInMonth(displayDate)
    const firstDay = getFirstDayOfMonth(displayDate)
    const monthNames = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ]

    const days = []

    // Empty cells for days before the first day of month
    for (let i = 1; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = isDateSelected(day, displayDate.getMonth(), displayDate.getFullYear())
      const isTodayDate = isToday(day, displayDate.getMonth(), displayDate.getFullYear())

      days.push(
        <button
          key={day}
          onClick={() => selectDate(day, displayDate.getMonth(), displayDate.getFullYear())}
          className={`p-2 text-sm rounded hover:bg-gray-100 transition-colors ${
            isSelected
              ? "bg-yellow-400 text-gray-900 font-semibold"
              : isTodayDate
                ? "bg-gray-300 text-gray-900 font-semibold"
                : "text-gray-900 hover:bg-teal-100"
          }`}
        >
          {day}
        </button>,
      )
    }

    return (
      <div className="bg-white border border-black/30 max-w-[400px]">
        <div className="flex items-center justify-between p-3 border-b border-black/30">
          {monthOffset === 0 && (
            <button onClick={() => navigateMonth(-1)} className="text-gray-400 hover:text-gray-600 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
          {monthOffset === 0 && <div className="w-4"></div>}

          <h3 className="font-semibold text-gray-900">
            {monthNames[displayDate.getMonth()]} {displayDate.getFullYear()}
          </h3>

          {monthOffset === 1 && (
            <button onClick={() => navigateMonth(1)} className="text-gray-400 hover:text-gray-600 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
          {monthOffset === 1 && <div className="w-4"></div>}
        </div>

        <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500 border-b border-black/30">
          <div className="p-2">L</div>
          <div className="p-2">M</div>
          <div className="p-2">X</div>
          <div className="p-2">J</div>
          <div className="p-2">V</div>
          <div className="p-2">S</div>
          <div className="p-2">D</div>
        </div>

        <div className="grid grid-cols-7 text-center">{days}</div>
      </div>
    )
  }

  const tabs = [
    { id: "description", label: "Description" },
    { id: "availability", label: "Availability" },
    { id: "map", label: "Map" },
  ]

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="container mx-auto px-6 py-8 pt-0 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Images */}
          <div className="lg:col-span-2">
            {/* Main image with smooth transitions */}
            <div className="relative mb-4 group overflow-hidden ">
              <div className="relative w-full h-96">
                {yacht.images.map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${yacht.name} view ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-96 object-cover transition-all duration-700 ease-in-out ${
                      selectedImageIndex === index
                        ? "opacity-100 transform translate-x-0"
                        : selectedImageIndex === (index - 1 + yacht.images.length) % yacht.images.length
                          ? "opacity-0 transform -translate-x-full"
                          : "opacity-0 transform translate-x-full"
                    }`}
                  />
                ))}
              </div>

              {/* Left Arrow */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent border-white border-[2px] bg-opacity-50 hover:bg-opacity-70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-white border-[2px] bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail gallery */}
            <div className="grid grid-cols-8 gap-2">
              {yacht.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative overflow-hidden  transition-all duration-300 ${
                    selectedImageIndex === index
                      ? "ring-2 ring-orange-500 opacity-100 scale-105"
                      : "opacity-70 hover:opacity-100 hover:scale-105"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${yacht.name} view ${index + 1}`}
                    className="w-full h-16 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Yacht info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "serif" }}>
                {yacht.name}
              </h1>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm">{yacht.description}</p>

              <div className="space-y-3 mb-6">
                {yacht.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700 text-sm">
                    <feature.icon className="w-4 h-4 mr-3 text-gray-500" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600 mb-6">Yacht</div>
            </div>
          </div>
        </div>

        {/* Enhanced Tabs section */}
        <div className="mt-12">
          <div className="flex flex-col lg:flex-row gap-0">
            {/* Left side - Vertical Tabs with arrow design */}
            <div className="flex flex-row lg:flex-col w-full lg:w-48 overflow-x-auto lg:overflow-x-visible">
              {tabs.map((tab, index) => (
                <div key={tab.id} className="relative flex-shrink-0 lg:flex-shrink">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center px-6 py-3 font-medium text-left transition-all duration-300 w-full min-w-[120px] lg:min-w-0 ${
                      activeTab === tab.id
                        ? "bg-orange-500 text-white shadow-lg z-10"
                        : "bg-teal-500 text-white opacity-80 hover:opacity-100"
                    } ${index === 0 ? "" : ""} ${index === tabs.length - 1 ? "" : ""}`}
                  >
                    <span className="flex-1 text-sm">{tab.label}</span>

                    {/* SVG Arrow for active tab - only show on desktop */}
                    {activeTab === tab.id && (
                      <svg
                        className="absolute right-[-20px] top-0 h-full w-5 text-orange-500 hidden lg:block"
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
            <div className="flex-1 bg-white rounded-r-lg rounded-bl-lg lg:rounded-r-lg lg:rounded-bl-lg rounded-lg lg:rounded-l-none p-4 sm:p-6 md:p-8 pt-4 shadow-sm relative">
              <div className="transition-all duration-500 ease-in-out">
                {activeTab === "description" && (
                  <div className="animate-in fade-in duration-500">
                    <h1
                      className="text-2xl font-abril-fatface font-bold text-gray-900 mb-9"
                      style={{ fontFamily: "serif" }}
                    >
                      {yacht.name}
                    </h1>
                    <div className="flex items-center mb-6">
                      <Ship className="w-5 h-5 text-orange-600 mr-3" />
                      <h2 className="text-md font-work-sans font-bold text-gray-900">{yacht.fullDescription.title}</h2>
                    </div>

                    <p className="text-gray-700 text-md mb-8 font-work-sans leading-relaxed">
                      {yacht.fullDescription.content}
                    </p>

                    {yacht.fullDescription.sections.map((section, index) => (
                      <div key={index} className="mb-6">
                        <h3 className="text-md font-work-sans font-bold text-gray-900 mb-6">{section.title}</h3>
                        <p className="text-gray-700 font-work-sans  text-md leading-relaxed">{section.content}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "availability" && (
                  <div className="animate-in fade-in duration-500">
                    <div className="flex items-center mb-6">
                      <Calendar className="w-6 h-6 text-orange-600 mr-3 " />
                      <h2 className="text-2xl font-bold text-gray-900">Availability Calendar</h2>
                    </div>

                    <div className="bg-gray-50 p-4 rounded mb-6">
                      <p className="text-gray-700 mb-2">
                        Use the calendar below to select your preferred dates for booking this yacht tour.
                      </p>
                      <p className="text-gray-700">This is a daily tour available year-round.</p>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center gap-6 mb-6 flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-gray-300 rounded"></div>
                        <span className="text-sm text-gray-600">Today</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                        <span className="text-sm text-gray-600">Selected ({selectedDates.length})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-teal-100 rounded border border-teal-300"></div>
                        <span className="text-sm text-gray-600">Available</span>
                      </div>
                    </div>

                    {/* Selected Dates Display */}
                    {selectedDates.length > 0 && (
                      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Selected Dates:</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedDates.map((date, index) => (
                            <span key={index} className="bg-yellow-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                              {date.toLocaleDateString("es-ES", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() => setSelectedDates([])}
                          className="mt-3 text-sm text-orange-600 hover:text-orange-700 underline"
                        >
                          Clear all selections
                        </button>
                      </div>
                    )}

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {renderCalendar(0)}
                      <div className="hidden lg:block">{renderCalendar(1)}</div>
                    </div>

                    {/* Quick Navigation */}
                    <div className="mt-6 flex justify-center gap-4 flex-wrap">
                      <button
                        onClick={() => navigateMonth(-2)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm"
                      >
                        Previous Month
                      </button>
                      <button
                        onClick={() => setCurrentDate(new Date())}
                        className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors text-sm"
                      >
                        Today
                      </button>
                      <button
                        onClick={() => navigateMonth(2)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm"
                      >
                        Next Month
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "map" && (
                  <div className="animate-in fade-in duration-500">
                    <div className="flex items-center mb-6">
                      <MapPin className="w-6 h-6 text-orange-600 mr-3" />
                      <h2 className="text-2xl font-bold text-gray-900">Location & Route</h2>
                    </div>

                    <div className="mb-6">
                      <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                        <div className="text-center text-gray-600">
                          <MapPin className="w-12 h-12 mx-auto mb-2" />
                          <p>Interactive map will be displayed here</p>
                          <p className="text-sm">Departure: Marina Riviera Maya</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Departure Point</h3>
                        <p className="text-gray-700">Marina Riviera Maya</p>
                        <p className="text-gray-700">Playa del Carmen, Quintana Roo</p>
                        <p className="text-gray-700">Mexico</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Popular Destinations</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Cozumel Island</li>
                          <li>• Xel-Há Natural Aquarium</li>
                          <li>• Isla Mujeres</li>
                          <li>• Cenotes & Reefs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
