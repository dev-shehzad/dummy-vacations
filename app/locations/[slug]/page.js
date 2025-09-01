import LocationDetail from "@/components/locations/LocationDetail"
import { locationsData } from "@/data/locations-data"
export const runtime = 'edge';

export async function generateMetadata({ params }) {
  const { slug } = await params
  const location = locationsData.find((l) => l.slug === slug)

  if (!location) {
    return {
      title: "Location Not Found - Link Vacations",
      description: "The requested location could not be found.",
    }
  }

  return {
    title: location.metadata.title,
    description: location.metadata.description,
  }
}

const page = async ({ params }) => {
  const { slug } = await params

  return (
    <div>
      <LocationDetail slug={slug} />
    </div>
  )
}

export default page
