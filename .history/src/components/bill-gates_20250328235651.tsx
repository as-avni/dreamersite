"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function BillGatesSection() {
  const [isScrollLocked, setIsScrollLocked] = useState(true)
  const [scrollCount, setScrollCount] = useState(0)
  const [touchStartY, setTouchStartY] = useState(0);
  const orangeSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrollLocked && scrollCount < 3) {
        e.preventDefault()
        if (e.deltaY > 0) {
          setScrollCount(prev => prev + 1)
        }
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isScrollLocked && scrollCount < 3) {
        const touchEndY = e.touches[0].clientY;
        if (touchStartY > touchEndY) {
          setScrollCount(prev => prev + 1);
        }
      }
    }

    if (isScrollLocked) {
      window.addEventListener("wheel", handleWheel, { passive: false })
      window.addEventListener("touchstart", handleTouchStart, { passive: false })
      window.addEventListener("touchmove", handleTouchMove, { passive: false })
    }

    if (scrollCount >= 3) {
      setIsScrollLocked(false)
    }

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      if (!isScrollLocked) {
        document.body.style.overflow = "auto";
      }
    }
  }, [isScrollLocked, scrollCount, touchStartY])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && isScrollLocked) {
          document.body.style.overflow = "hidden";
        } else if (!entry.isIntersecting && !isScrollLocked) {
          document.body.style.overflow = "auto";
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = orangeSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isScrollLocked]);

  return (
    <section className="py-16 px-4 md:px-0 lg:px-0 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
        <motion.div
          className="col-span-1 flex flex-col justify-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="px-0 text-4xl font-bold mb-4 text-black font-newsreader">Bill Gates Once said</h2>
          <p className="text-xl leading-relaxed font-bold text-black font-newsreader">
            &quot;As we look ahead into the next century, leaders will be those who empower others.&quot;
          </p>
        </motion.div>

        <motion.div
          className="col-span-1 flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative w-[200px] h-[280px] bg-black rounded overflow-hidden">
          <Image
            src="/images/seriously.png"
            width={80}
            height={80}
            alt="Serious Photo"
            className="object-cover h-20 w-12 md:h-40 md:w-24"
          />
          </div>
        </motion.div>

        <motion.div
          className="h-[200px] md:h-[280px] w-[200px] md:w-[340px] col-span-1 mx-auto bg-[#2E7D32] flex flex-col p-6 text-white rounded-sm relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}>
          <p className="absolute bottom-12 left-1 md:left-4 text-2xl md:text-4xl font-serif font-bold">
            And we took
          </p>
          <p className="absolute bottom-2 left-1 md:left-4 text-2xl md:text-4xl font-bold font-serif">
            it seriously!
          </p>
        </motion.div>
      </div>

      <motion.div
        ref={orangeSectionRef}
        className="mt-16 bg-[#FF5722] px-4 flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center">
          <h2 className="text-2xl md:text-7xl font-black tracking-tight font-serif text-black">VERY SERI</h2>
          <Image
            src="/images/seriously.png"
            width={80}
            height={80}
            alt="Serious Photo"
            className="object-cover h-20 w-12 md:h-40 md:w-24"
          />
          <h2 className="text-2xl md:text-7xl font-black tracking-tight font-serif text-black">USLY!</h2>
        </div>
      </motion.div>
    </section>
  )
}
