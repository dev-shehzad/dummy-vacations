"use client"

export default function Link() {
    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}

            {/* Main Content */}
            <div className="px-4 pb-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Content */}
                        <div className="lg:col-span-2">
                            <div className="mt-4 text-sm text-gray-600">Link Vacations | Renta Inmobiliaria</div>

                            <h1
                                className="text-4xl lg:text-4xl  text-gray-900 mb-9"
                                style={{ fontFamily: "Abril Fatface, serif" }}
                            >
                                Right in the City Center
                            </h1>

                            <div className="text-gray-700 text-base leading-relaxed mb-8 font-work-sans max-w-3xl">
                                Welcome to Link Vacation Rentals, where we offer extraordinary holidays that transcend traditional
                                travel. Experience the brilliance of history's discoveries, embrace the wonders of the stars, and
                                journey to the edge of forever. Let us plan your cosmic adventure, where you'll find yourself in awe of
                                the vastness of the universe, creating memories that will last for eons. Your dream holiday awaits – a
                                galactic escape like no other. Book now and touch the stars with Link Vacation Rentals! 🚀🌌✨
                            </div>
                        </div>

                        {/* Right Content - Testimonial */}
                        <div className="lg:col-span-1 mt-4">
                            <div className="bg-[#f5f5f5] p-6 rounded-lg">
                                <div className="text-gray-700 text-md font-work-sans italic mb-9">
                                    "We just returned from a six night stay at the Hotel in Sunny Isles Beach, Florida. The suite was
                                    large, clean and had a beautiful view from every window. Staff is really friendly too."
                                </div>

                                {/* TripAdvisor Logo */}
                                <div className="flex justify-center">
                                    <img src="/search.webp" alt="TripAdvisor" className="h-16" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="mt-8">
                        <div className="w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59094.12345678901!2d-87.0739!3d20.6296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e433b7c8b5c5b%3A0x7c8b5c5b7c8b5c5b!2sPlaya%20del%20Carmen%2C%20Quintana%20Roo%2C%20Mexico!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Playa del Carmen Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
