"use client"

import AccommodationSlider from '@/components/home/accomodation-section'
import CarRentalExploration from '@/components/home/car-rental-exploration'
import Hero from '@/components/home/hero'
import PartnersSection from '@/components/home/partener-section'
import PartySection from '@/components/home/party-section'
import RestaurantListings from '@/components/home/restaurant-listings'
import SpecialOffers from '@/components/home/special-offers'
import VacationActivities from '@/components/home/vacation-activities'
import VacationSection from '@/components/home/vacation-section'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div className="flex flex-col max-md:flex-col-reverse">
        {/* Vacation Section first on mobile, second on desktop */}
        <div className="">
          <Hero />
        </div>
        <div className="">
          <VacationSection />
        </div>
      </div>

      <AccommodationSlider />
      <VacationActivities />
      <RestaurantListings />
      <CarRentalExploration />
      <PartySection />
      <SpecialOffers />
      <PartnersSection />
    </div>
  )
}

export default Page
