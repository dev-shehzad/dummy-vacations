import Link from "next/link";

export default function VacationSection() {
  return (
    <div className="bg-[#dd8500] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <h2
          className="text-white font-abril-fatface text-[23px] md:text-2xl mb-4 max-md:mb-7"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          Plan your perfect Link Vacations
        </h2>
      <Link href="/search" className="w-full sm:w-auto bg-[#00c0ae] text-white px-8 py-3 font-bold text-[13px] hover:bg-[#009688] transition-colors duration-300 inline-flex items-center justify-center gap-2">
  LOOKUP 4 VACAZAI
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
</Link>

      </div>
    </div>
  )
}
