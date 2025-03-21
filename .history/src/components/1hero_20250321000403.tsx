"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const starRef = useRef<HTMLDivElement>(null)
  const flowerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Subtle floating animation for decorative elements
    const starAnimation = () => {
      if (starRef.current) {
        starRef.current.style.transform = `translate(${Math.sin(Date.now() / 1000) * 5}px, ${Math.cos(Date.now() / 1500) * 5}px)`
      }
      requestAnimationFrame(starAnimation)
    }

    const flowerAnimation = () => {
      if (flowerRef.current) {
        flowerRef.current.style.transform = `translate(${Math.cos(Date.now() / 1200) * 5}px, ${Math.sin(Date.now() / 1700) * 5}px) rotate(${Math.sin(Date.now() / 3000) * 10}deg)`
      }
      requestAnimationFrame(flowerAnimation)
    }

    const starAnimationId = requestAnimationFrame(starAnimation)
    const flowerAnimationId = requestAnimationFrame(flowerAnimation)

    return () => {
      cancelAnimationFrame(starAnimationId)
      cancelAnimationFrame(flowerAnimationId)
    }
  }, [])

  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-4 bg-[#5C3FFF] text-white text-center overflow-hidden bg-[url('/images/grid.png')] bg-cover bg-center">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-[15%] w-2 h-2 rounded-full bg-white opacity-30"></div>
        <div className="absolute right-[10%] top-[25%] w-3 h-3 rounded-full bg-white opacity-20"></div>
        <div className="absolute left-[15%] bottom-[20%] w-4 h-4 rounded-full bg-white opacity-10"></div>
        <div className="absolute right-[20%] bottom-[15%] w-2 h-2 rounded-full bg-white opacity-25"></div>
      </div>

      <div className="relative max-w-3xl mx-auto w-full">
        {/* Star decoration */}
        <div ref={starRef} className="absolute -left-16 -top-8 z-10">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.5 0L27.7 17.3L45 22.5L27.7 27.7L22.5 45L17.3 27.7L0 22.5L17.3 17.3L22.5 0Z"
              fill="#3A2A9C"
              stroke="#3A2A9C"
            />
          </svg>
        </div>

        {/* Flower decoration */}
        <div ref={flowerRef} className="absolute right-0 top-0 z-10">
          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32.5" cy="32.5" r="22" fill="#2A9C3A" />
            <circle cx="32.5" cy="21.5" r="9" fill="#FF6B6B" />
            <circle cx="21.5" cy="32.5" r="9" fill="#FF6B6B" />
            <circle cx="43.5" cy="32.5" r="9" fill="#FF6B6B" />
            <circle cx="32.5" cy="43.5" r="9" fill="#FF6B6B" />
          </svg>
        </div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A Comm<span className="text-[#FFD54F]">you</span>nity of <br />
          <img src="/images/text.png" alt="Community" className="inline-block w-auto h-16 md:h-20" />
        </motion.h1>

        <motion.p
          className="text-xl mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          who come together to create a dent.
        </motion.p>

        <motion.div
          className="inline-flex items-center bg-white rounded-full px-2 py-1 shadow-lg shadow-black/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.03 }}
        >
          <button className="bg-white text-black rounded-full px-6 py-2 font-medium transition-all hover:bg-gray-50">
            Apply to join the community
          </button>
          <span className="text-[#FFD54F] font-medium ml-2 mr-2">2 mins</span>
        </motion.div>
      </div>

      {/* Additional Image on Right Side */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <img src="/images/image.png" alt="Visual Representation" className="w-48 md:w-64 lg:w-80" />
      </div>
    </section>
  )
}
