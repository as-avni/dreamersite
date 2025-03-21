"use client"

import { motion } from "framer-motion"
import { FlipWords } from "./ui/flip-words"


export default function Hero() {
  const words = ["DREAMERS", "DOERS", "BELIEVERS", "ACHIEVERS"]
  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-4 text-white text-center overflow-hidden bg-[url('/images/grid-bg.png')] bg-stretch h-screen">
      
      {/* Rotating Star Image */}
      <motion.img 
        src="/images/Star.png" 
        alt="Star" 
        className="absolute w-14 md:w-0 h-14 md:h-0 top-[4%] md:top-[10%] left-[10%]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />

      {/* Static Image in a Div */}
      <div 
        className="absolute md:w-60 md:h-60 w-24 h-24 bg-cover bg-center top-[1%] md:top-[20%] right-[1%] md:right-[10%]"
        style={{backgroundImage: "url('/images/image.png')" }}
      ></div>

      <div className="relative max-w-3xl mx-auto w-full">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-newsreader font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A Comm<span className="text-[#1F8D42] [text-shadow:-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white,1px_1px_0_white]">you</span>nity of <br />
          <span className="font-rampartone text-[#FF8C5A]"><FlipWords words={words} /></span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl mb-8 font-bold font-newsreader"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          who come together to create a dent.
        </motion.p>

        <motion.div
          className="inline-flex items-center bg-white rounded-full px-2 py-1 text-black font-medium transition-all hover:bg-gray-50 shadow-[4px_4px_0px_black]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.03 }}
        >
          <button className="bg-white text-black rounded-full px-6 py-4 text-sm md:text-xl font-medium transition-all hover:bg-gray-50">
            Apply to join the community
          </button>
          <span className="text-black bg-[#FFD54F] p-2 rounded-full font-medium ml-2 mr-2">2 mins</span>
        </motion.div>
      </div>
    </section>
  )
}
