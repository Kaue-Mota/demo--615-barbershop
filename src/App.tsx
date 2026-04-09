import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import FindUs from './components/FindUs'
import Footer from './components/Footer'
import { services, reviews, businessInfo } from './data'

export default function App() {
  return (
    <>
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-electric-blue focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
      >
        Skip to main content
      </a>

      {/* Sticky nav bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-md border-b border-white/5"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" aria-label="615 Barbershop home">
            <span className="text-electric-blue font-black text-xl tracking-tight">615</span>
            <span className="text-white font-bold text-lg tracking-tight">Barbershop</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {[
              { href: '#services', label: 'Services' },
              { href: '#about', label: 'About' },
              { href: '#testimonials', label: 'Reviews' },
              { href: '#find-us', label: 'Find Us' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={businessInfo.phone}
            aria-label="Call 615 Barbershop"
            className="hidden md:inline-flex items-center gap-2 bg-electric-blue hover:bg-electric-blue-dark text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-electric-blue/30"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {businessInfo.phoneFormatted}
          </a>
        </div>
      </nav>

      <main id="main-content">
        <Hero />
        <Services services={services} />
        <About />
        <Testimonials reviews={reviews} />
        <FindUs businessInfo={businessInfo} />
      </main>

      <Footer businessInfo={businessInfo} />

      {/* Floating "Book Now" button — mobile only */}
      <div className="fixed bottom-5 left-0 right-0 px-5 z-40 md:hidden">
        <a
          href="#book"
          aria-label="Book an appointment at 615 Barbershop"
          className="flex items-center justify-center gap-2 w-full bg-electric-blue hover:bg-electric-blue-dark text-white font-bold text-base py-4 rounded-2xl shadow-xl shadow-electric-blue/40 transition-all duration-200 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Book Now
        </a>
      </div>
    </>
  )
}
