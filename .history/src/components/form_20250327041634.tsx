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

  const [workProfile, setWorkProfile] = useState("")
  const [expressYourself, setExpressYourself] = useState("")
  const [isExpressYourselfActive, setIsExpressYourselfActive] = useState(false)
  const [formStep, setFormStep] = useState(0)
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleWorkProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkProfile(e.target.value)
  }

  const handleExpressYourselfChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setExpressYourself(value);
    if (value.trim() !== "" && formStep === 2) {
      setIsExpressYourselfActive(true); // Mark the checkbox as active
    } else {
      setIsExpressYourselfActive(false); // Reset the checkbox if textarea is cleared
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStep(1)
    console.log("Form submitted:", formData, workProfile)
    // Handle form submission logic here
  }

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowWelcomeMessage(true);
    setFormStep(4); // Activate the "Welcome to the Team" checkbox
    setTimeout(() => setShowWelcomeMessage(false), 3000);
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

  return (
    <section className="py-16 px-10 bg-gray-50 font-newsreader">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-sm overflow-hidden">
          <motion.div
            className="bg-[#e44f22] text-white p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-10">Fill a Quick Form</h2>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <CheckItem text="Fill a Quick Form" active={formStep >= 1} />
              <CheckItem text="Mention your Work Profile" active={formStep >= 2} />
              <CheckItem text="Express Yourself" active={formStep >= 3 || isExpressYourselfActive} />
              <CheckItem text="Welcome to the Team" active={formStep >= 4} />
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white p-8 relative border-2 border-[#000000]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 leading-tight text-black">
              The easiest way to work with us is to simply tell us what you do. Yes! that&apos;s it.
            </h2>

            {formStep === 0 ? (
              <form onSubmit={handleSubmit} className="mt-8 relative overflow-hidden transition-all">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="group relative">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1 transition-all group-focus-within:text-[#000000]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-2 border text-black border-gray-300 focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none hover:border-black transition-all bg-transparent focus:bg-white"
                      required
                    />
                  </div>

                  <div className="group relative">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-500 mb-1 transition-all group-focus-within:text-[#000000]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className=" hover:border-black w-full p-2 border text-black border-gray-300 rounded focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition-all bg-transparent focus:bg-white "
                      required
                    />
                  </div>

                  <div className="group relative">
                    <label
                      htmlFor="contactNumber"
                      className="block text-sm font-medium text-gray-700 mb-1 transition-all group-focus-within:text-[#000000]"
                    >
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded text-black focus:ring-2 focus:ring-[#2E7D32] hover:border-black focus:border-transparent outline-none transition-all bg-transparent focus:bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <motion.button
                    type="submit"
                    className="bg-[#37743a] text-white px-6 py-2 rounded-full shadow-md"
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
                {formStep === 1 && (
                  <div className="mt-6 space-y-4">
                    <div className="group relative mb-6">
                      <label
                        htmlFor="workProfile"
                        className="block text-base font-semibold text-gray-700 mb-1 transition-all group-focus-within:text-[#141413]"
                      >
                        Mention Your Work Profile
                      </label>
                      <input
                        type="text"
                        id="workProfile"
                        name="workProfile"
                        value={workProfile}
                        onChange={handleWorkProfileChange}
                        className="w-full p-2 text-black border border-gray-300 rounded focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition-all bg-transparent focus:bg-white"
                        required
                      />
                    </div>

                    <h3 className="text-lg text-black font-bold mb-4">Select the tasks you are interested in:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { label: "UI Design", name: "uiDesign" },
                        { label: "Website Development", name: "websiteDevelopment" },
                        { label: "SEO", name: "seo" },
                        { label: "Social Media Handling", name: "socialMediaHandling" }
                      ].map((task) => (
                        <div key={task.name} className="flex items-center">
                          <input
                            type="checkbox"
                            id={task.name}
                            name={task.name}
                            className="mr-2 focus:ring-[#2E7D32] rounded"
                          />
                          <label htmlFor={task.name} className="text-sm text-gray-700">{task.label}</label>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center mt-8">
                      <motion.button
                        type="button"
                        className="bg-[#2E7D32] text-white px-6 py-2 rounded shadow-md text-base/6"
                        whileHover={{ scale: 1.05, backgroundColor: "#1B5E20" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFormStep(2)}
                      >
                        NEXT →
                      </motion.button>
                    </div>
                  </div>
                )}
                {formStep === 2 && (
                  <div className="mt-6 space-y-4">
                    <div className="group relative mb-6">
                      <label
                        htmlFor="expressYourself"
                        className="block text-base font-semibold text-gray-700 mb-1 transition-all group-focus-within:text-[#FF5722]"
                      >
                        Express Yourself
                      </label>
                      <textarea
                        id="expressYourself"
                        name="expressYourself"
                        value={expressYourself}
                        onChange={handleExpressYourselfChange}
                        rows={4}
                        className="w-full p-2 border hover:border-black text-black border-gray-300 rounded focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition-all bg-transparent focus:bg-white"
                        required
                      />
                    </div>

                    <div className="flex justify-end mt-6">
                      <motion.button
                        type="submit"
                        className="bg-[#517c53] text-white px-6 py-2 rounded shadow-md"
                        whileHover={{ scale: 1.05, backgroundColor: "#1B5E20" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleFinalSubmit}
                      >
                        SUBMIT
                      </motion.button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {showWelcomeMessage && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
                <motion.h3
                  className="text-3xl font-bold text-[#2E7D32]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Welcome to the Team!
                </motion.h3>
              </div>
            )}

            <motion.div
              className="mt-8  bg-[#FFCA28] p-4 mb-0 text-center border-gray-500 border-2 mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Link href="/valid-route" className="font-bold text-3xl inline-block text-black">
                Let&apos;s Disrupt It Together →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CheckItem({ text, active = false, id }: { text: string; active?: boolean; id?: string }) {
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  }

  const isActive = active || (id && document.getElementById(id)?.getAttribute("data-active") === "true");

  return (
    <motion.div className="flex items-center" variants={itemVariants}>
      <div
        id={id}
        className={`w-6 h-6 border border-white flex items-center justify-center mr-3 transition-all ${isActive ? "bg-white bg-opacity-20" : ""}`}
        data-active={isActive ? "true" : "false"}
      >
        <span className="text-white">{isActive ? "✓" : ""}</span>
      </div>
      <p className={`font-medium transition-all ${isActive ? "text-white" : "text-white text-opacity-80"}`}>{text}</p>
    </motion.div>
  )
}
