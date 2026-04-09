import BarberPole from './BarberPole'
import { businessInfo } from '../data'

export default function Hero() {
  return (
    <header className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(#1E90FF 1px, transparent 1px), linear-gradient(90deg, #1E90FF 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Blue glow top-right */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl bg-electric-blue pointer-events-none"
        aria-hidden="true"
      />
      {/* Blue glow bottom-left */}
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-5 blur-3xl bg-electric-blue pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left — text content */}
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
              <span className="text-electric-blue text-sm font-semibold tracking-wide uppercase">
                Nashville, TN
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-white mb-6">
              Nashville's{' '}
              <span className="text-gradient">Go-To</span>{' '}
              Barbershop{' '}
              <br className="hidden sm:block" />
              Since Day One
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
              Precision cuts, sharp lineups &amp; clean fades — delivered fast,
              professional and fairly priced. Walk-ins always welcome.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#book"
                aria-label="Book an appointment at 615 Barbershop"
                className="inline-flex items-center justify-center gap-2 bg-electric-blue hover:bg-electric-blue-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-electric-blue/30 hover:shadow-electric-blue/50 hover:-translate-y-0.5"
              >
                Book Appointment
              </a>
              <a
                href={businessInfo.phone}
                aria-label="Call 615 Barbershop"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex gap-8 justify-center lg:justify-start">
              {[
                { value: '5★', label: 'Google Rating' },
                { value: '$25+', label: 'Starting Price' },
                { value: '9AM–7PM', label: 'Every Day' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-electric-blue font-black text-2xl">{stat.value}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — animated barber pole */}
          <div className="flex-shrink-0 flex flex-col items-center gap-6 animate-fade-in">
            {/* Decorative ring */}
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-full bg-electric-blue/5 border border-electric-blue/10" />
              <div className="absolute inset-0 -m-16 rounded-full bg-electric-blue/3 border border-electric-blue/5" />
              <BarberPole />
            </div>
            <p className="text-gray-600 text-xs tracking-widest uppercase font-medium">
              615 Barbershop
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </header>
  )
}
