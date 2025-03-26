"use client"


export default function MovingBanner() {
  const bannerItems = [
    "✦ Thriving community",
    "✦ Great Exposure",
    "✦ Amazing Networks",
    "✦ Create Values",
  ]

  return (
    <div className="bg-[#1B24FF] text-white py-7 overflow-hidden relative">
      <div className="flex whitespace-nowrap mx-auto w-max animate-scrollBanner">
        {[...bannerItems,...bannerItems,...bannerItems].map((item, index) => (
          <span key={index} className="mx-4 md:text-5xl font-medium font-dmSerif">
            {item}
          </span>
        ))}
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scrollBanner {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scrollBanner {
          animation: scrollBanner 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
