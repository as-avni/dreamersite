"use client"

import { useRef } from "react"

export default function MovingBanner() {
  const bannerItems = [
    "✦ Thriving community",
    "✦ Great Exposure",
    "✦ Amazing Networks",
    "✦ Collaborative Opportunities",
  ]

  return (
    <div className="bg-[#2962FF] text-white py-3 overflow-hidden relative">
      <div className="flex whitespace-nowrap w-max animate-scrollBanner">
        {/* Duplicate the items to ensure seamless looping */}
        {[...bannerItems, ...bannerItems].map((item, index) => (
          <span key={index} className="mx-4 text-lg font-medium">
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
          animation: scrollBanner 10s linear infinite;
        }
      `}</style>
    </div>
  )
}
