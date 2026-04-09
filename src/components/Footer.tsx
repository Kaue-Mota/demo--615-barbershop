import type { BusinessInfo } from '../types'

interface FooterProps {
  businessInfo: BusinessInfo
}

export default function Footer({ businessInfo }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark border-t border-white/5 py-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="text-electric-blue font-black text-2xl tracking-tight">615</span>
          <span className="text-white font-bold text-xl tracking-tight">Barbershop</span>
        </div>

        {/* Phone */}
        <a
          href={businessInfo.phone}
          aria-label={`Call 615 Barbershop at ${businessInfo.phoneFormatted}`}
          className="text-gray-400 hover:text-electric-blue transition-colors duration-200 font-medium flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {businessInfo.phoneFormatted}
        </a>

        {/* Copyright */}
        <p className="text-gray-600 text-sm">
          &copy; {year} 615 Barbershop Nashville. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
