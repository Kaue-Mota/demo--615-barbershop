import type { BusinessInfo } from '../types'

interface FindUsProps {
  businessInfo: BusinessInfo
}

export default function FindUs({ businessInfo }: FindUsProps) {
  return (
    <section id="find-us" className="bg-navy py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-electric-blue text-sm font-semibold tracking-widest uppercase mb-3">
            Come See Us
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Find Us
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-electric-blue rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left — info cards */}
          <div className="flex flex-col gap-5 lg:w-80 flex-shrink-0">
            {/* Address */}
            <div className="bg-navy-light border border-white/5 rounded-2xl p-6 flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-electric-blue" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Address</p>
                <p className="text-white font-semibold leading-snug">{businessInfo.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-navy-light border border-white/5 rounded-2xl p-6 flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-electric-blue" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Phone</p>
                <a
                  href={businessInfo.phone}
                  aria-label={`Call 615 Barbershop at ${businessInfo.phoneFormatted}`}
                  className="text-white font-semibold hover:text-electric-blue transition-colors duration-200"
                >
                  {businessInfo.phoneFormatted}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-navy-light border border-white/5 rounded-2xl p-6 flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-electric-blue" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Hours</p>
                <p className="text-white font-semibold">{businessInfo.hours}</p>
                <div className="mt-1.5 inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Open Today</span>
                </div>
              </div>
            </div>

            {/* Book CTA */}
            <a
              href="#book"
              aria-label="Book an appointment at 615 Barbershop"
              className="flex items-center justify-center gap-2 bg-electric-blue hover:bg-electric-blue-dark text-white font-bold py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-electric-blue/30 hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </div>

          {/* Right — Google Maps */}
          <div className="flex-1 min-h-80 rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src={businessInfo.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="615 Barbershop location on Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
