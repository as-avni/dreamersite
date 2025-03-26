"use client"

import { motion } from "framer-motion"
import { FlipWords } from "./ui/flip-words"
import { useState, useEffect } from "react"
import { TypewriterEffect } from "./ui/typewriter-effect";

import { ReactNode } from "react";

function WordColor({ children }: { children: ReactNode }) {
  const colors = ["#1F8D42"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [colors.length]);

  return <span style={{ color: colors[colorIndex] }}>{children}</span>;
}

export default function Hero() {
  const words = ["DREAMERS", "BELIEVERS", "ACHIEVERS"];
  const word = [
    {
      text: "Apply",
    },
    {
      text: "to",
    },
    {
      text: "join",
    },
    {
      text: "the",
    },
    {
      text: "Community",
    },
  ];
  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-4 text-white text-center overflow-hidden bg-[url('/images/11.png')] bg-stretch h-screen">
      
      {/* Rotating Star Image */}
      <div>
      <motion.img 
        src="/images/Star.png" 
        alt="Star" 
        className="absolute w-28 md:w-28 h-28 md:h-28 top-[6%] md:top-[25%] lg:left-[12%] left-[16%]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
        </div>
        

      {/* Static Image in a Div */}
      <motion.div
        className="absolute md:w-80 md:h-80 w-52 h-52 bg-cover bg-center bottom-[6%] md:top-[20%] lg:right-[1%] right-[1%] md:right-[10%]"
        style={{ backgroundImage: "url('/images/image.png')" }}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      ></motion.div>

  

      <div className="relative max-w-3xl mx-auto w-full">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-newsreader font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A Comm<WordColor><span className="[text-shadow:-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white,1px_1px_0_white]">you</span></WordColor>nity of <br />
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
            <button className="w-40 bg-white text-black rounded-full px-6 py-4 text-sm md:text-xl font-medium transition-all hover:bg-gray-50">
            <TypewriterEffect words={word} />
            </button>
          <span className="text-black bg-[#FFD54F] p-2 rounded-full font-bold ml-2 mr-2">2 mins</span>
        </motion.div>
      </div>
    </section>
  );
}

