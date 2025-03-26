"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, ReactNode } from "react"

function getDriveDirectLink(driveLink: string) {
  const fileIdMatch = driveLink.match(/[-\w]{25,}/);
  return fileIdMatch ? `https://drive.google.com/uc?id=${fileIdMatch[0]}` : driveLink;
}

function WordColor({ children }: { children: ReactNode }) {
  const colors = ["#1F8D42", "#FF0000", "#FF8C00", "#00008B"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [colors.length]);

  return <span style={{ color: colors[colorIndex] }}>{children}</span>;
}

export default function AmazingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex md:flex-row flex-col mx-auto space-x-2 md:space-x-12 max-w-7xl">
            <h2 className="text-6xl md:text-7xl font-bold md:mb-6 tracking-tight" style={{ fontFamily: 'Newsreader, serif', color: 'black' }}>
              WE ARE
            </h2>
            <p className="text-lg md:text-2xl max-w-4xl md:leading-[0.92] text-justify font-bold" style={{ fontFamily: 'Newsreader, serif', color: 'black' }}>
              A community of entrepreneurs, aspiring entrepreneurs, leaders and professionals from any industry who come together to gain and give massive exposure to the leaders of tomorrow.
            </p>
          </div>
        </motion.div>

        <div className="bg-[#6100FF] text-white py-12 px-4 text-center rounded-sm">
          <motion.h2
            className="text-lg md:text-2xl font-bold mb-2 md:mb-4 font-newsreader uppercase tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            We are doing something amaaazing! Let&apos;s do it together
          </motion.h2>

          <motion.p
            className="mb-4 md:mb-8 max-w-5xl font-newsreader text-lg md:text-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            we are an open community of people who care/intend to deliver great values to the world
          </motion.p>

          <motion.button
            className="relative bg-[#00EA4A] text-white font-bold px-8 py-2 rounded-full mb-12 shadow-md hover:bg-[#04D045] font-archivenarrow text-2xl transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            If you are
            <Image src="/images/small-star.png" alt="star" width={20} height={20} className="absolute top-[-1px] right-[-1px]" />
            <Image src="/images/small-star.png" alt="star" width={20} height={20} className="absolute bottom-[-1px] left-[-1px]" />
          </motion.button>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CategoryCard image="/public/images/" title="AN ENTREPRENEUR" />
            <CategoryCard image="https://drive.google.com/file/d/1iAN--X9l-1xt_8qeUFuS3OzLPTdlCqjY/view?usp=sharing" title="A COLLEGE STUDENT" />
            <CategoryCard image="https://drive.google.com/file/d/1-v3_0zQLwEmL8N2MSWofmHfHdw3aFjbY/view?usp=sharing" title="A LEADER" />
            <CategoryCard image="https://drive.google.com/file/d/1fminT3is5BcYf4McTnqsQi8Oz5mVb5Th/view?usp=sharing" title="A DREAMER" />

            <motion.div className="flex flex-col items-center space-y-2" variants={itemVariants}>
            <div className="bg-[#FFCA28] py-2 px-4 text-center w-64 h-full text-black font-medium hover:bg-[#FFB300] transition-colors cursor-pointer">
                <h1 className="font-bold text-xl text-left">Join us to create great opportunities.</h1>
                <p className="text-lg text-left">Let’s make the world a better place.</p>
                <p className="font-bold text-2xl text-left">APPLY TO JOIN →</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
          className="mt-6 bg-[#FFCA28] p-8 rounded-sm border-8 border-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h3 className="font-bold text-3xl md:text-5xl text-black text-left font-newsreader leading-[0.7]">WE ARE FOR</h3>
              <p className="italic text-xl md:text-3xl font-extrabold text-black text-left">The leaders of tomorrow.</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-xl md:text-3xl font-bold text-black text-left">
                Younicorn Comm<WordColor><span className="[text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">you</span></WordColor>nity is a platform where diversity of folks come
                together to do crazy shit together.
              </p>
            </div>
          </div>
        </motion.div>

        </div>
      </div>
    </section>
  )
}

function CategoryCard({ image, title }: { image: string; title: string }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div className="flex flex-col items-center" variants={itemVariants}>
      <div className="w-64 h-48 flex items-center justify-center shadow-md border-2 border-white">
        <Image
          src={getDriveDirectLink(image)}
          alt={title}
          width={250}
          height={250}
          unoptimized
          className="object-cover"
        />
      </div>
      <div className="bg-[#FFCA28] py-2 px-4 text-center w-64 text-black font-medium">
        <p className="font-bold text-lg">{title}</p>
      </div>
    </motion.div>
  )
}