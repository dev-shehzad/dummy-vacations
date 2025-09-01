import PlayaMamitasApartments from "@/components/accomodations/playa-mamitas-apartments"
import PartnersSection from "@/components/home/partener-section"
import SpecialOffers from "@/components/home/special-offers"

export const metadata = {
  title: "Playa Mamitas Apartments - Link Vacations",
  description:
    "Discover Playa del Carmen's finest with Playa Mamitas Apartments by Link Vacations. Luxury stays steps from Mamitas Beach. Book your dream escape now!",
}

const page = () => {
  return (
    <div>
      <PlayaMamitasApartments />
      <SpecialOffers />
      <PartnersSection />
    </div>
  )
}

export default page
