"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function QuickFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
  })

  const [formStep, setFormStep] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStep(1)
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-xl rounded-sm overflow-hidden">
          <motion.div
            className="bg-[#FF5722] text-white p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-10">Fill a quick form</h2>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <CheckItem text="Fill a quick form" active={true} />
              <CheckItem text="Mention your work profile" active={formStep >= 1} />
              <CheckItem text="Express yourself" active={formStep >= 1} />
              <CheckItem text="Submit the form" active={formStep >= 1} />
              <CheckItem text="Welcome to the team" active={formStep >= 1} />
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 leading-tight">
              The easiest way to work with us is to simply tell us what you do. Yes! that's it.
            </h2>

            {formStep === 0 ? (
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <motion.button
                    type="submit"
                    className="bg-[#2E7D32] text-white px-6 py-2 rounded shadow-md"
                    whileHover={{ scale: 1.05, backgroundColor: "#1B5E20" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    NEXT →
                  </motion.button>
                </div>
              </form>
            ) : (
              <motion.div
                className="mt-8 text-center py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-4 text-[#2E7D32]">Thank you for your submission!</h3>
                <p className="mb-6">We'll be in touch with you shortly.</p>
                <button onClick={() => setFormStep(0)} className="text-[#2E7D32] underline">
                  Submit another response
                </button>
              </motion.div>
            )}

            <motion.div
              className="mt-8 bg-[#FFCA28] p-4 text-center rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Link href="#" className="font-bold text-lg inline-block">
                Let's disrupt it together →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CheckItem({ text, active = false }: { text: string; active?: boolean }) {
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.div className="flex items-center" variants={itemVariants}>
      <div
        className={`w-6 h-6 border border-white flex items-center justify-center mr-3 transition-all ${active ? "bg-white bg-opacity-20" : ""}`}
      >
        <span className="text-white">{active ? "✓" : ""}</span>
      </div>
      <p className={`font-medium transition-all ${active ? "text-white" : "text-white text-opacity-80"}`}>{text}</p>
    </motion.div>
  )
}

