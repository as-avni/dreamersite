"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function BillGatesSection() {
return (
    <section className=" py-16 px-4 md:px-0 lg:px-0 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full items-center">
            {/* Quote Text Section */}
            <motion.div
                className="col-span-1 flex flex-col justify-center w-[54%]"
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

            {/* Bill Gates Image */}
            <motion.div
                className="col-span-1 flex justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="relative w-[200px] h-[280px] bg-black rounded overflow-hidden">
                    <Image
                        src="/images/bill.jpg"
                        width={200}
                        height={200}
                        alt="Bill Gates"
                        className="rounded object-cover"
                    />
                </div>
            </motion.div>

            {/* Green Box Section */}
            <motion.div
                className="h-[280px] col-span-1 bg-[#2E7D32] flex flex-col p-6 text-white rounded-sm relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}>
                <p className="absolute bottom-12 left-4 text-4xl font-serif font-bold">
                    And we took
                </p>
                <p className="absolute bottom-2 left-4 text-4xl font-bold font-serif">
                    it seriously!
                </p>
            </motion.div>

        </div>

        {/* Orange Section */}
        <motion.div
            className="mt-6 bg-[#FF5722] py-6 px-4 flex items-center justify-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="flex items-center justify-center space-x-2">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight font-serif">VERY SERI</h2>
                <Image
                    src="/images/seriously.png"
                    width={80}
                    height={100}
                    alt="Serious Photo"
                    className="object-contain"
                />
                <h2 className="text-4xl md:text-5xl font-black tracking-tight font-serif">USLY!</h2>
            </div>

            {/* Decorative elements */}
            <div className="absolute -left-4 top-1/2 w-8 h-8 bg-orange-400 rounded-full opacity-20"></div>
            <div className="absolute right-8 bottom-2 w-4 h-4 bg-orange-300 rounded-full opacity-30"></div>
        </motion.div>
    </section>
)
}
