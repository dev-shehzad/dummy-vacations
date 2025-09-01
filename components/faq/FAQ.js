"use client"

import { useState } from "react"
import { faqData } from "@/data/faq-data"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0) // default pehla open hoga

  const toggleItem = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6 py-16 pt-6">
        {/* Header Section */}
        <div className="mb-0">
          <h1 className="text-4xl  text-gray-900 mb-8 leading-tight font-abril-fatface">
            FAQ (Frequently Asked Questions)
          </h1>

          <p className="text-gray-700 text-base mb-4 leading-relaxed font-work-sans">
            Receive answers to your inquiries through our Frequently Asked Questions section.
            Quickly discover solutions and enhance your overall experience.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-8 font-work-sans">
            Below are the quick answers to some of our most frequently asked questions.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0 mb-0 bg-white">
          {faqData.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-4 flex items-center justify-between text-left cursor-pointer transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <span className="text-teal-600 text-2xl font-abril-fatface flex-shrink-0">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                  <h3 className="text-xl  text-gray-900 leading-tight font-abril-fatface">
                    {item.question}
                  </h3>
                </div>
              </button>

              {/* Smooth expand / collapse */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-6 pl-8">
                  <p className="text-gray-700 text-base leading-relaxed font-work-sans">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8">
          <p className="text-gray-700 text-base leading-relaxed">
            Keep in mind that if you don't find the answer to your question in our FAQ section,
            you can always contact us.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FAQ
