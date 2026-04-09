export default function About() {
  return (
    <section id="about" className="bg-navy py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left — decorative element */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center" aria-hidden="true">
            <div className="relative w-72 h-72">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-electric-blue/20" />
              {/* Middle ring */}
              <div className="absolute inset-6 rounded-full border border-electric-blue/10 bg-electric-blue/5" />
              {/* Center */}
              <div className="absolute inset-12 rounded-full bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-electric-blue font-black text-5xl leading-none">615</p>
                  <p className="text-white/60 text-xs tracking-widest uppercase mt-1 font-semibold">Barbershop</p>
                </div>
              </div>
              {/* Decorative dots */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-2.5 h-2.5 rounded-full bg-electric-blue/40"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${deg}deg) translateX(130px) translateY(-50%)`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right — text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-electric-blue text-sm font-semibold tracking-widest uppercase mb-3">
              Our Story
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
              About Us
            </h2>
            <div className="w-16 h-1 bg-electric-blue rounded-full mb-8 mx-auto lg:mx-0" />

            <p className="text-gray-300 text-xl leading-relaxed mb-6">
              615 Barbershop is Nashville's neighborhood spot for precision cuts,
              sharp lineups and clean fades. Whether you're a local or just
              passing through, our barbers deliver every time — fast,
              professional and fairly priced.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: '5★', label: 'Rated on Google' },
                { value: '100%', label: 'Satisfaction' },
                { value: '7 Days', label: 'A Week' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-navy-light border border-white/5 rounded-2xl p-4 text-center"
                >
                  <p className="text-electric-blue font-black text-2xl">{item.value}</p>
                  <p className="text-gray-500 text-xs mt-1 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
