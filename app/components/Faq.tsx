'use client'
import { useState } from 'react'

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      question: "Which services do we offer?",
      answer: "We offer a comprehensive range of healthcare services including voice consultations, manual wellness therapies, home lab testing, online pharmacy, and health mail services to meet all your healthcare needs."
    },
    {
      question: "Who do I contact if I have a question?",
      answer: "You can contact our customer support team through the contact form on our website, email us at support@shukhee.com, or call our helpline at +1-800-SHUKHEE."
    },
    {
      question: "Does Shukhee have a mobile App?",
      answer: "Yes, Shukhee has a mobile app available for both iOS and Android devices. You can download it from the App Store or Google Play Store for convenient access to all our services."
    },
    {
      question: "Will I be charged when I register?",
      answer: "No, registration on Shukhee is completely free. You only get charged when you book specific services like consultations, lab tests, or purchase from our pharmacy."
    },
    {
      question: "Who are the doctors on Shukhee?",
      answer: "Our platform features verified and licensed healthcare professionals including general physicians, specialists, therapists, and wellness experts with proper credentials and experience."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-16 dark:bg-gray-700 w-full">
      <div className="container mx-auto px-4 max-w-10xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently asked questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Questions you might ask about our services
          </p>
          <div className="w-32 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        {/* FAQ Items */}
        <div className="bg-[#FCF4FC] dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-l-4 ${
                  openItems.includes(index) 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                    : 'border-gray-200 dark:border-gray-700'
                } transition-all duration-300`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full text-left p-6 focus:outline-none"
                >
                  <div className="flex items-center space-x-6">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      openItems.includes(index)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    } transition-colors duration-300`}>
                      <span className="font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className={`text-xl font-semibold ${
                      openItems.includes(index)
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-900 dark:text-white'
                    } transition-colors duration-300`}>
                      {faq.question}
                    </h3>
                  </div>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                      openItems.includes(index) 
                        ? 'rotate-180 text-blue-500' 
                        : 'text-gray-400'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {/* Answer */}
                {openItems.includes(index) && (
                  <div className="px-20 pb-6">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}