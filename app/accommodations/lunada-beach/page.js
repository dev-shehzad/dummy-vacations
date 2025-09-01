import LunadaBeachCondos from "@/components/accomodations/lunada-beach-condos"
import PartnersSection from "@/components/home/partener-section"
import SpecialOffers from "@/components/home/special-offers"

export const metadata = {
  title: "Lunada Beach Condo - Link Vacations",
  description:
    "Experience luxury at Lunada Beach Condo in Playa del Carmen. Your serene and beauty oasis by the sea. Book your dream escape today!",
}

const page = () => {
  return (
    <div>
      <LunadaBeachCondos />
      <SpecialOffers />
      <PartnersSection />
    </div>
  )
}

export default page
