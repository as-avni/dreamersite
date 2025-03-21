"use client"

import { useEffect, useRef } from "react"

export default function MovingBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const banner = bannerRef.current
    const container = containerRef.current
    if (!banner || !container) return

    // Calculate the width of the content
    const contentWidth = banner.scrollWidth

    // Clone the content for seamless looping
    const clone = banner.cloneNode(true)
    container.appendChild(clone)

    let position = 0
    const speed = 1

    const animate = () => {
      position -= speed

      // Reset position when first set of content is out of view
      if (position <= -contentWidth) {
        position = 0
      }

      if (banner) {
        container.style.transform = `translateX(${position}px)`
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  const bannerItems = [
    "✦ Thriving community",
    "✦ Great Exposure",
    "✦ Amazing Networks",
    "✦ Collaborative Opportunities",
  ]

  return (
    <div className="bg-[#2962FF] text-white py-3 overflow-hidden">
      <div ref={containerRef} className="inline-flex whitespace-nowrap">
        <div ref={bannerRef} className="flex">
          {bannerItems.map((item, index) => (
            <span key={index} className="mx-4 text-lg font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

