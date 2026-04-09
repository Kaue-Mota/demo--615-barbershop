import type { Service } from '../types'

interface ServicesProps {
  services: Service[]
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="relative bg-navy-light border border-white/5 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 card-glow hover:border-electric-blue/30 group">
      {/* Price badge */}
      <div className="absolute top-5 right-5">
        <span className="bg-electric-blue/10 border border-electric-blue/30 text-electric-blue font-black text-lg px-3 py-1 rounded-lg">
          {service.price}
        </span>
      </div>

      {/* Icon placeholder — scissors */}
      <div className="w-10 h-10 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center group-hover:bg-electric-blue/20 transition-colors duration-200">
        <svg
          className="w-5 h-5 text-electric-blue"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
          />
        </svg>
      </div>

      <div className="pr-16">
        <h3 className="text-white font-bold text-lg leading-snug group-hover:text-electric-blue transition-colors duration-200">
          {service.name}
        </h3>
        <p className="text-gray-400 text-sm mt-1 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Duration */}
      <div className="mt-auto flex items-center gap-1.5 text-gray-500 text-sm">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{service.duration}</span>
      </div>
    </article>
  )
}

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="bg-navy-dark py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-electric-blue text-sm font-semibold tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Our Services
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-electric-blue rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>

        {/* CTA below */}
        <div className="mt-12 text-center">
          <a
            href="#book"
            aria-label="Book an appointment"
            className="inline-flex items-center gap-2 bg-electric-blue hover:bg-electric-blue-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-electric-blue/30 hover:-translate-y-0.5"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  )
}
