"use client"

import { motion } from "framer-motion"

export default function Hero() {

  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-4 bg-[#5D3FD3] text-white text-center overflow-hidden bg-[url('/images/hero-bg.png')] bg-stretch">

      <div className="relative max-w-3xl mx-auto w-full">

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A Comm<span className="text-[#1F8D42]">you</span>nity of <br />
          <img src="/images/text.png" alt="Community" className="inline-block w-auto h-12 md:h-16" />
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
          className="inline-flex items-center bg-white rounded-full px-2 py-1 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.03 }}
        >
          <button className="bg-white text-black rounded-full px-6 py-8 font-medium transition-all hover:bg-gray-50">
            Apply to join the community
          </button>
          <span className="text-black bg-[#FFD54F] p-2 rounded-full font-medium ml-2 mr-2">2 mins</span>
        </motion.div>
      </div>
    </section>
  )
}

