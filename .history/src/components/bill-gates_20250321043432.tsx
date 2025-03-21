"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function BillGatesSection() {
return (
    <section className=" py-16 px-4 md:px-0 lg:px-0 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Quote Text Section */}
            <motion.div
                className="col-span-1 flex flex-col justify-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="px-0 text-5xl font-bold mb-4 text-black font-newsreader">Bill Gates once said</h2>
                <p className="text-2xl leading-relaxed font-bold text-black font-newsreader">
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
                <div className="relative w-[200px] h-[200px] bg-gray-200 rounded overflow-hidden">
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
                className="col-span-1 bg-[#2E7D32] flex flex-col justify-center items-center p-6 text-white rounded-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <p className="text-4xl font-serif font-bold">And we took</p>
                <p className="text-4xl font-bold font-serif">it seriously!</p>
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
            <h2 className="text-4xl md:text-5xl font-black text-center tracking-tight font-serif">VERY SERIOUSLY!</h2>
            <div className="ml-4">
                <svg width="60" height="100" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M30 0C35 0 40 5 40 15V40C40 45 45 50 50 50V60C45 60 40 55 40 50V40C40 35 35 30 30 30C25 30 20 35 20 40V100H10V40C10 30 15 25 20 25V15C20 5 25 0 30 0Z"
                        fill="black"
                    />
                </svg>
            </div>

            {/* Decorative elements */}
            <div className="absolute -left-4 top-1/2 w-8 h-8 bg-orange-400 rounded-full opacity-20"></div>
            <div className="absolute right-8 bottom-2 w-4 h-4 bg-orange-300 rounded-full opacity-30"></div>
        </motion.div>
    </section>
)
}
