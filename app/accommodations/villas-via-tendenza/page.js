import VillasViaTendenza from "@/components/accomodations/villas-via-tendenza"
import PartnersSection from "@/components/home/partener-section"
import SpecialOffers from "@/components/home/special-offers"

export const metadata = {
  title: "Villas Vía Tendenza - Link Vacations - Playa del Carmen",
  description:
    "Discover Villas Vía Tendenza in Playa del Carmen, just a 5-min walk to the beach and 5th Ave. Your perfect blend of comfort and convenience.",
}

const page = () => {
  return (
    <div>
      <VillasViaTendenza />
      <SpecialOffers />
      <PartnersSection />
    </div>
  )
}

export default page
