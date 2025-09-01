import PartnersSection from "@/components/home/partener-section"
import AccommodationDetail from "@/components/locations/accomodation-details"
import { getAccommodationMetadata } from "@/data/accomodations-data"
export const runtime = 'edge';

export async function generateMetadata({ params }) {
  const { slug } = await params
  const metadata = getAccommodationMetadata(slug)

  return {
    title: metadata.title,
    description: metadata.description,
  }
}

const page = async ({ params }) => {
  const { slug } = await params

  return (
    <div>
      <AccommodationDetail slug={slug} />
      <PartnersSection />
    </div>
  )
}

export default page
