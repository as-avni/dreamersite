"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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
          <div className="flex flex-row px-4 mx-auto space-x-12 max-w-7xl">
            <h2 className="text-7xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'Newsreader, serif', color: 'black' }}>
              WE ARE
            </h2>
            <p className="text-2xl max-w-4xl leading-[0.92] text-justify font-bold" style={{ fontFamily: 'Newsreader, serif', color: 'black' }}>
              A community of entrepreneurs, aspiring entrepreneurs, leaders and professionals from any industry who come together to gain and give massive exposure to the leaders of tomorrow.
            </p>
          </div>
        </motion.div>

        <div className="bg-[#6100FF] text-white py-12 px-4 text-center rounded-sm">
          <motion.h2
            className="text-2xl font-bold mb-4 font-newsreader uppercase tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            We are doing something amaaazing! Let's do it together
          </motion.h2>

          <motion.p
            className="mb-8 max-w-5xl font-newsreader text-2xl mx-auto"
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
            <Image src="/images/small-star.png" alt="star" width={16} height={16} className="absolute bottom-[-1px] left-[-1px]" />
          </motion.button>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CategoryCard image="./images/1.png" title="AN ENTREPRENEUR" />
            <CategoryCard image="./images/2.png" title="A COLLEGE STUDENT" />
            <CategoryCard image="./images/3.png" title="A LEADER" />
            <CategoryCard image="./images/4.png" title="A DREAMER" />

            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <div className="bg-[#FFCA28] py-2 px-4 text-center w-full text-black font-medium hover:bg-[#FFB300] transition-colors cursor-pointer">
                <p className="font-bold text-sm">APPLY TO JOIN →</p>
              </div>
            </motion.div>
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
      <div className="w-24 h-24 mb-2 flex items-center justify-center shadow-md border border-white">
        <Image src={`/${image}`} alt={title} width={96} height={96} className="object-cover" />
      </div>
      <div className="bg-[#FFCA28] py-2 px-4 text-center w-full text-black font-medium">
        <p className="font-bold text-sm">{title}</p>
      </div>
    </motion.div>
  )
}