import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-[150px] h-[150px] mb-2">
                <img src="/logo.webp" alt="" />
              </div>
            </div>
          </div>

          {/* Where are we Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-abril-fatface text-gray-800 mb-4">Where are we?</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start text-gray-600">
                <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-work-sans">PDC, Quintana Roo, Mexico</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-gray-600 ">
                <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-work-sans">+525568278610</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-gray-600">
                <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <Link
                  href="mailto:hello@link.vacations"
                  className="font-semibold"
              
                >
                  hello@link.vacations
                </Link>
              </div>
            </div>
          </div>

          {/* Follow us Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-abril-fatface text-gray-800 mb-4">Follow us</h3>
            <div className="flex justify-center md:justify-start space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
              >
                <span className="text-sm font-bold">X</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
              >
                <span className="text-sm font-bold">P</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
              >
                <span className="text-sm font-bold">IG</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
              >
                <span className="text-xs font-bold">TA</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div className="mb-4 md:mb-0 font-work-sans">© 2006-2025 All Rights Reserved - Link Vacations</div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link href="#" className="hover:text-gray-800 transition-colors font-work-sans">
                Partners Portal
              </Link>
              <Link href="#" className="hover:text-gray-800 transition-colors font-work-sans ">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-gray-800 transition-colors font-work-sans">
                Privacy Policy
              </Link>
              <span className="flex items-center font-work-sans">
                Made with <span className="text-red-500 mx-1">❤️</span> by SDS Deliver IO
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
