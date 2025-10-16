'use client'
import Link from 'next/link'

export default function HealthcareServices() {
  const services = [
    {
      title: "Voice Consult",
      description: "Concert Now",
      href: "/voice-consult",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Manual Wellness",
      description: "Concert Now",
      href: "/manual-wellness",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "green"
    },
    {
      title: "Home Lab",
      description: "Book Now",
      href: "/home-lab",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "purple"
    },
    {
      title: "Online Pharmacy",
      description: "Order Now",
      href: "/online-pharmacy",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "orange"
    },
    {
      title: "Health Mail",
      description: "Order Now",
      href: "/health-mail",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "pink"
    }
  ]

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-700 dark:text-blue-400',
      hover: 'hover:bg-blue-100 dark:hover:bg-blue-900/30'
    },
    green: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-700 dark:text-green-400',
      hover: 'hover:bg-green-100 dark:hover:bg-green-900/30'
    },
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      border: 'border-purple-200 dark:border-purple-800',
      text: 'text-purple-700 dark:text-purple-400',
      hover: 'hover:bg-purple-100 dark:hover:bg-purple-900/30'
    },
    orange: {
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      border: 'border-orange-200 dark:border-orange-800',
      text: 'text-orange-700 dark:text-orange-400',
      hover: 'hover:bg-orange-100 dark:hover:bg-orange-900/30'
    },
    pink: {
      bg: 'bg-pink-50 dark:bg-pink-900/20',
      border: 'border-pink-200 dark:border-pink-800',
      text: 'text-pink-700 dark:text-pink-400',
      hover: 'hover:bg-pink-100 dark:hover:bg-pink-900/30'
    }
  }

  return (
    <section className="py-16 w-full bg-light dark:bg-dark">
      <div className="mx-auto px-8 flex flex-col md:flex-row w-full">
        {/* Header */}
        <div className="text-center mb-12 w-full md:w-[50%]">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Your Complete<br />
            <span className="text-blue-600 dark:text-blue-400">Healthcare Solutions</span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid  w-full md:w-[50%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mx-auto">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses]
            
            return (
              <Link
                key={index}
                href={service.href}
                className={`block p-6 rounded-2xl border-2 ${colors.bg} ${colors.border} ${colors.hover} transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-xl dark:shadow-gray-800/20 group`}
              >
                <div className="text-center h-40">
                  {/* Service Icon */}
                  <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border-2 ${colors.border}`}>
                    <div className={colors.text}>
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Service Title */}
                  <h3 className={`text-lg font-semibold ${colors.text} mb-2 dark:text-opacity-90`}>
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className={`text-base font-medium ${colors.text} opacity-90 dark:text-opacity-80`}>
                    {service.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}