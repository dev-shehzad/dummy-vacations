import YachtDetail from "@/components/tours/yacht-detail"
import { yachtsData } from "@/data/yacht-data"
export const runtime = 'edge';

export async function generateMetadata({ params }) {
  const { slug } = await params
  const yacht = yachtsData.find((y) => y.slug === slug)

  if (!yacht) {
    return {
      title: "Tour Not Found - Link Vacations",
      description: "The requested tour could not be found.",
    }
  }

  return {
    title: yacht.metadata.title,
    description: yacht.metadata.description,
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  return <YachtDetail slug={slug} />
}
