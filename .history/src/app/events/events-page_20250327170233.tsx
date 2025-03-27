"use client"

import { useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
// import Link from "next/link"

// Event data
const events = [
{
    id: 1,
    image: "/placeholder.svg?height=220&width=800",
    title: "Speak with impact",
    presenter: "Dr. Adarsh Sharma",
    tags: ["Motivational", "Public Speaking"],
},
{
    id: 2,
    image: "/placeholder.svg?height=220&width=800",
    title: "Design Thinking Workshop",
    presenter: "Sarah Johnson",
    tags: ["Design", "Innovation"],
},
{
    id: 3,
    image: "/placeholder.svg?height=220&width=800",
    title: "Startup Funding Masterclass",
    presenter: "Michael Chen",
    tags: ["Business", "Finance"],
},
]

export default function EventsPage() {
const [currentIndex, setCurrentIndex] = useState(0)
const currentEvent = events[currentIndex]

const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? events.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
}

const goToNext = () => {
    const isLastSlide = currentIndex === events.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
}

return (
    <div className="min-h-screen bg-white bg-[linear-gradient(#f0f0f0_1px,transparent_1px),linear-gradient(90deg,#f0f0f0_1px,transparent_1px)] bg-[size:20px_20px] flex flex-col items-center px-4 py-8">
    

    {/* Events Heading */}
    <h1 className="text-5xl font-bold m">EVENTS</h1>

    {/* Event Carousel */}
    <div className="w-full max-w-4xl relative mb-8">
        {/* Navigation Arrows */}
        <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-yellow-300 rounded-full p-2 z-10 hover:bg-yellow-400 transition-colors"
        >
        <ChevronLeft className="h-6 w-6" />
        </button>
        <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-300 rounded-full p-2 z-10 hover:bg-yellow-400 transition-colors"
        >
        <ChevronRight className="h-6 w-6" />
        </button>

        {/* Event Ticket/Banner Image */}
        <div className="w-full h-[220px] rounded-2xl overflow-hidden">
        {/* This would be the actual event ticket image */}
        {currentIndex === 0 ? (
            <div className="w-full h-full bg-[#6c3ce9] relative overflow-hidden">
            {/* Radial background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#8055f0_0%,#6c3ce9_100%)]"></div>

            {/* Plus symbols decoration */}
            <div className="absolute top-4 right-4 text-yellow-300 text-2xl">+</div>
            <div className="absolute bottom-4 left-8 text-yellow-300 text-2xl">+</div>
            <div className="absolute top-12 right-12 text-yellow-300 text-2xl">+</div>
            <div className="absolute top-20 left-16 text-yellow-300 text-2xl">+</div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
                {/* Person Image */}
                <div className="w-1/3 h-full flex items-center justify-center">
                <div className="relative w-48 h-48 bg-yellow-300 rounded-full overflow-hidden border-4 border-yellow-300">
                    <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Speaker"
                    width={200}
                    height={200}
                    className="object-cover"
                    />
                </div>
                </div>

                {/* Event Details */}
                <div className="w-2/3 pr-8 text-white">
                <div className="mb-2">
                    <span className="text-white font-bold tracking-widest">SPARK</span>
                </div>
                <h2 className="text-4xl font-bold text-yellow-300 mb-2">SPEAK WITH</h2>
                <h2 className="text-4xl font-bold text-yellow-300 mb-4">IMPACT</h2>
                <p className="mb-4">Elevate your Communication Skills</p>

                <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                    <div className="bg-yellow-300 p-1 rounded mr-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="black" strokeWidth="2" />
                        <path d="M3 10H21" stroke="black" strokeWidth="2" />
                        <path d="M8 2L8 6" stroke="black" strokeWidth="2" />
                        <path d="M16 2L16 6" stroke="black" strokeWidth="2" />
                        </svg>
                    </div>
                    <span className="text-sm">
                        03 April, 2023
                        <br />
                        02:00 PM - 04:00 PM
                    </span>
                    </div>

                    <div className="flex items-center">
                    <div className="bg-yellow-300 p-1 rounded mr-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                            stroke="black"
                            strokeWidth="2"
                        />
                        <path
                            d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                            stroke="black"
                            strokeWidth="2"
                        />
                        </svg>
                    </div>
                    <span className="text-sm">
                        Zenith Coworking,
                        <br />
                        NSRCEL (C-5)
                    </span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        ) : (
            <Image
            src={currentEvent.image || "/placeholder.svg"}
            alt={currentEvent.title}
            width={800}
            height={220}
            className="w-full h-full object-cover"
            />
        )}
        </div>
    </div>

    {/* Event Details - Changes based on current carousel item */}
    <div className="text-center mb-4">
        <h2 className="text-3xl font-semibold text-gray-700">{currentEvent.title}</h2>
        <p className="text-xl text-gray-600 mb-2">Workshop by - {currentEvent.presenter}</p>

        <div className="flex justify-center items-center mb-6">
        <div className="inline-flex items-center">
            <span className="text-sm text-gray-500">Tags: </span>
            <span className="text-sm text-gray-500 ml-1">{currentEvent.tags.join(", ")}</span>
        </div>
        <div className="ml-2 text-yellow-500">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L20 10L12 17L4 10L12 3Z" fill="currentColor" />
            </svg>
        </div>
        </div>

        <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold flex items-center mx-auto hover:bg-yellow-500 transition-colors">
        <span>BOOK NOW</span>
        <div className="ml-2 bg-black rounded-full p-1">
            <ArrowRight className="h-4 w-4 text-yellow-400" />
        </div>
        </button>
    </div>
    </div>
)
}

