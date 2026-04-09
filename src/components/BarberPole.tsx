export default function BarberPole() {
  return (
    <div
      className="flex flex-col items-center select-none"
      aria-hidden="true"
    >
      {/* Globe / top cap */}
      <div className="w-14 h-7 rounded-t-full bg-gradient-to-b from-gray-200 via-white to-gray-300 shadow-lg border border-gray-300" />

      {/* Pole body — spinning stripes */}
      <div className="relative w-14 h-64 overflow-hidden shadow-2xl">
        {/* Animated stripes */}
        <div className="absolute inset-0 barber-pole-stripes" />
        {/* Glass overlay for 3D depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-black/20 pointer-events-none" />
        {/* Subtle shine streak */}
        <div className="absolute top-0 left-2 w-2 h-full bg-white/15 blur-sm pointer-events-none" />
      </div>

      {/* Bottom cap */}
      <div className="w-14 h-7 rounded-b-full bg-gradient-to-b from-gray-300 via-white to-gray-200 shadow-lg border border-gray-300" />

      {/* Base stand */}
      <div className="mt-1 w-20 h-3 rounded-full bg-gradient-to-b from-gray-400 to-gray-600 shadow-md" />
      <div className="w-24 h-2 rounded-full bg-gradient-to-b from-gray-500 to-gray-700 shadow" />
    </div>
  )
}
