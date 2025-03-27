"use client"

import { useState } from "react"
import { ChevronRightCircle, ArrowRight, ArrowLeft } from "lucide-react"
import Image from "next/image"
// import Link from "next/link"

// Event data
const events = [
{
    id: 1,
    image: "/images/event-ticket.png",
    title: "Speak with impact",
    presenter: "Dr. Adarsh Sharma",
    tags: ["Motivational", "Public Speaking"],
},
{
    id: 2,
    image: "/images/",
    title: "Design Thinking Workshop",
    presenter: "Sarah Johnson",
    tags: ["Design", "Innovation"],
},
{
    id: 3,
    image: "/images/",
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
    <div className="min-h-screen bg-white bg-[linear-gradient(#f0f0f0_1px,transparent_1px),linear-gradient(90deg,#f0f0f0_1px,transparent_1px)] bg-[size:80px_80px] flex flex-col items-center px-4 py-8">
    

    {/* Events Heading */}   
    <h1 className="text-5xl mt-20 font-dmSerif">EVENTS</h1>

    {/* Event Carousel */}
    <div className="w-full max-w-4xl relative mb-8 my-10">
        {/* Navigation Arrows */}
        <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-yellow-300 rounded-full p-2 z-10 hover:bg-yellow-400 transition-colors"
        >
        <ArrowLeft className="h-6 w-6" />
        </button>
        <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-300 rounded-full p-2 z-10 hover:bg-yellow-400 transition-colors"
        >
        <ArrowRight className="h-6 w-6" />
        </button>

        {/* Event Ticket/Banner Image */}
        <div className="w-full h-[350px] rounded-2xl overflow-hidden">
            <Image
                src={currentEvent.image || "/placeholder.svg"}
                alt={currentEvent.title}
                width={800}
                height={220}
                className="w-full h-full object-contain"
            />
        </div>
    </div>

    {/* Event Details - Changes based on current carousel item */}
    <div className="text-center mb-4">
        <h2 className="text-4xl font-bold font-archivenarrow text-[#545454] tracking-normal mb-2">{currentEvent.title}</h2>
        <p className="text-2xl font-archivenarrow text-[#545454] font-semibold mb-2">Workshop by - {currentEvent.presenter}</p>

        <div className="flex justify-center items-center mb-6">
        <div className="inline-flex items-center">
            <span className="text-sm text-gray-500">Tags: </span>
            <span className="text-sm text-gray-500 ml-1">{currentEvent.tags.join(", ")}</span>
        </div>
        <div className="ml-2 text-yellow-500">
            {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
            {/* <path d="M12 3L20 10L12 17L4 10L12 3Z" fill="currentColor" /> */}
            {/* </svg> */}
        </div>
        </div>

        <button className="bg-[#f2d638] text-black rounded-full font-bold flex items-center mx-auto hover:bg-yellow-500 transition-colors">
        <div className="rounded-full">
            <ChevronRightCircle className="h-8 w-8" />
        </div>
        <span className="px-2 font-archivenarrow">BOOK NOW</span>
        </button>
    </div>
    </div>
)
}
