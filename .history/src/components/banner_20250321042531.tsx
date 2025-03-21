"use client"

import { useEffect, useRef } from "react"

export default function MovingBanner() {
  const bannerWrapperRef = useRef<HTMLDivElement>(null)

  const bannerItems = [
    "✦ Thriving community",
    "✦ Great Exposure",
    "✦ Amazing Networks",
    "✦ Collaborative Opportunities",
  ]

  useEffect(() => {
    const wrapper = bannerWrapperRef.current
    if (!wrapper) return

    const keyframes = `
      @keyframes scrollBanner {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
    `

    const styleSheet = document.styleSheets[0]
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length)
  }, [])

  return (
    <div className="bg-[#2962FF] text-white py-3 overflow-hidden">
      <div
        ref={bannerWrapperRef}
        className="flex whitespace-nowrap w-max animate-scrollBanner"
        style={{
          animation: "scrollBanner 10s linear infinite",
        }}
      >
        {[...bannerItems, ...bannerItems].map((item, index) => (
          <span key={index} className="mx-4 text-lg font-medium">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
