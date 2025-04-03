"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 flex items-center fixed justify-between top-[1%] z-50 bg-white bg-opacity-100 backdrop-blur-md rounded-full">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/">
        {/* https://res.cloudinary.com/dhi3iupue/image/upload/v1743189394/Younicorn_Logo_h7xo0s.png */}
          <span
            className="text-3xl font-extrabold tracking-normal bg-blue"
            style={{
              color: "#FF8C5A",
            }}
          >
            Younicorn.club
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
        className={`flex flex-col md:flex-row items-center gap-6 ${
          isOpen ? "block" : "hidden md:flex"
        } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none rounded-lg md:rounded-none p-4 md:p-0`}
      >
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto space-y-4 md:space-y-0">
          <Link
            href="/events"
            className="font-bold text-2xl/7 text-black font-newsreader"
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
