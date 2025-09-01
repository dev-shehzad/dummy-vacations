"use client"
import { useState } from "react"

export function MyBookings() {
  const [activeTab, setActiveTab] = useState("upcoming")

  // Dummy booking data
  const bookings = {
    upcoming: [
      {
        id: "BK001",
        type: "accommodation",
        title: "Playa Mamitas Apartments",
        location: "Playa del Carmen, Mexico",
        dates: "Dec 15, 2024 - Dec 22, 2024",
        guests: "4 Guests",
        status: "Confirmed",
        amount: "$1,200",
        image: "/Accomodations/casa-larota.webp",
      },
      {
        id: "BK002",
        type: "car",
        title: "Toyota Camry - Premium",
        location: "Cancun Airport",
        dates: "Dec 15, 2024 - Dec 22, 2024",
        details: "Automatic, AC, GPS",
        status: "Confirmed",
        amount: "$280",
        image: "/Accomodations/casa-milka.webp",
      },
    ],
    past: [
      {
        id: "BK003",
        type: "accommodation",
        title: "Villas Via Tendenza",
        location: "Tulum, Mexico",
        dates: "Aug 10, 2024 - Aug 17, 2024",
        guests: "2 Guests",
        status: "Completed",
        amount: "$950",
        image: "/Accomodations/casa-mila.webp",
      },
      {
        id: "BK004",
        type: "yacht",
        title: "Sunset Yacht Experience",
        location: "Playa del Carmen Marina",
        dates: "Aug 12, 2024",
        details: "4 hours, Up to 12 people",
        status: "Completed",
        amount: "$800",
        image: "/Accomodations/casa-zoe.webp",
      },
    ],
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800"
      case "Completed":
        return "bg-gray-100 text-gray-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "accommodation":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 21v-4a2 2 0 012-2h2a2 2 0 012 2v4"
            />
          </svg>
        )
      case "car":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
        )
      case "yacht":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600">Manage and view all your reservations in one place</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "upcoming"
                    ? "border-[#00c0ae] text-[#00c0ae]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Upcoming Bookings ({bookings.upcoming.length})
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "past"
                    ? "border-[#00c0ae] text-[#00c0ae]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Past Bookings ({bookings.past.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {bookings[activeTab].length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings found</h3>
              <p className="text-gray-500">You don't have any {activeTab} bookings at the moment.</p>
            </div>
          ) : (
            bookings[activeTab].map((booking) => (
              <div key={booking.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-[#00c0ae]">{getTypeIcon(booking.type)}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{booking.title}</h3>
                        <p className="text-gray-600">{booking.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}
                      >
                        {booking.status}
                      </span>
                      <p className="text-lg font-bold text-gray-900 mt-1">{booking.amount}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <img
                      src={booking.image || "/placeholder.svg"}
                      alt={booking.title}
                      className="w-48 h-32 object-cover rounded-lg flex-shrink-0"
                    />

                    <div className="flex-1 space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Booking ID</p>
                          <p className="text-gray-900">{booking.id}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Dates</p>
                          <p className="text-gray-900">{booking.dates}</p>
                        </div>
                        {booking.guests && (
                          <div>
                            <p className="text-sm font-medium text-gray-500">Guests</p>
                            <p className="text-gray-900">{booking.guests}</p>
                          </div>
                        )}
                        {booking.details && (
                          <div>
                            <p className="text-sm font-medium text-gray-500">Details</p>
                            <p className="text-gray-900">{booking.details}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-100">
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      View Details
                    </button>
                    {activeTab === "upcoming" && (
                      <>
                        <button className="px-4 py-2 text-sm font-medium text-[#00c0ae] bg-white border border-[#00c0ae] rounded-md hover:bg-[#00c0ae] hover:text-white transition-colors">
                          Modify Booking
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-red-600 rounded-md hover:bg-red-700 transition-colors">
                          Cancel
                        </button>
                      </>
                    )}
                    {activeTab === "past" && (
                      <button className="px-4 py-2 text-sm font-medium text-white bg-[#00c0ae] border border-[#00c0ae] rounded-md hover:bg-[#00c0ae]/90 transition-colors">
                        Book Again
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            If you have any questions about your bookings or need assistance, our support team is here to help.
          </p>
          <button className="px-6 py-2 text-sm font-medium text-white bg-[#00c0ae] rounded-md hover:bg-[#00c0ae]/90 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  )
}
