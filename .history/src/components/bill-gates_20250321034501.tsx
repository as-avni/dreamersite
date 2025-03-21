"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function BillGatesSection() {
return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
            className="col-span-1 flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-2xl font-bold mb-4">Bill Gates once said</h2>
            <p className="text-lg leading-relaxed">
            As we look ahead into the next century, leaders will be those who empower others.
            </p>
        </motion.div>

        <motion.div
            className="col-span-1 flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
        >
            <div className="relative w-[200px] h-[200px]">
            <Image
                src="/placeholder.svg?height=200&width=200"
                width={200}
                height={200}
                alt="Bill Gates"
                className="rounded object-cover"
            />
            </div>
        </motion.div>

        <motion.div
            className="col-span-1 bg-[#2E7D32] flex flex-col justify-center items-start p-6 text-white rounded-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
        >
            div
            <p className="text-4xl">And we took</p>
            <p className="text-4xl font-bold">it seriously!</p>
        </motion.div>
        </div>

        <motion.div
        className="mt-6 bg-[#FF5722] py-6 px-4 flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        >
        <h2 className="text-4xl md:text-5xl font-black text-center tracking-tight">VERY SERIOUSLY!</h2>
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

