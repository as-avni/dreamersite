use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
const [isOpen, setIsOpen] = useState(false);

return (
    <header className="w-full py-4 px-6 flex items-center fixed justify-between top-[1%] z-50 bg-white bg-opacity-100 backdrop-blur-md rounded-full">
        {/* Logo */}
        <div className="flex-shrink-0">
        <Link href="/">
            <span
            className="text-3xl font-extrabold tracking-normal"
            style={{
                color: "#FF8C5A",
                textShadow: "2px 2px 0 #000",
                fontFamily: "Rampart One, cursive",
            }}
            >
            YOUNICORN
            </span>
        </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
        className="md:hidden text-3xl"
        onClick={() => setIsOpen(!isOpen)}
        >
        ☰
        </button>

        {/* Navigation Links */}
        <div
        className={`md:flex items-center gap-6 ${
            isOpen ? "block" : "hidden"
        } absolute md:relative top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none rounded-lg md:rounded-none p-4 md:p-0`}
        >
        <div className="flex flex-col md:flex-row items-center gap-4">
            <Link
            href="/events"
            className="font-bold text-2xl/snug text-black font-newsreader"
            >
            Explore Events
            </Link>

            <Link href="/contact">
            <div className="relative group">
                <div className="absolute inset-0 bg-black rounded-full translate-x-1 translate-y-1"></div>
                <button className="relative bg-white border-2 border-black rounded-full px-6 py-2 font-bold transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                GET IN TOUCH
                </button>
            </div>
            </Link>
        </div>
        </div>
    </header>
);
}
