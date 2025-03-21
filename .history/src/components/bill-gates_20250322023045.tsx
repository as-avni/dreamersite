"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function BillGatesSection() {
return (
    <section className=" py-16 px-4 md:px-0 lg:px-0 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
            {/* Quote Text Section */}
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

        {/* Orange Section */}
        <motion.div
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
